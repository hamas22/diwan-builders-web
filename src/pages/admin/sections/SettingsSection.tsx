import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';
import { Save } from 'lucide-react';

type SiteSettings = {
  id: string;
  site_name_ar: string;
  site_name_en: string;
  logo_url: string;
  primary_color: string;
  secondary_color: string;
  updated_at?: string;
};

const defaultSettings: SiteSettings = {
  id: '',
  site_name_ar: '',
  site_name_en: '',
  logo_url: '',
  primary_color: '#614231',
  secondary_color: '#9D784A',
};

export default function SettingsSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [settings, setSettings] = useState<SiteSettings>(defaultSettings);

  useEffect(() => {
    fetchSettings();
  }, []);

  const fetchSettings = async () => {
    try {
      const { data, error } = await supabase
        .from('site_settings')
        .select('*')
        .limit(1)
        .single();
      if (error) throw error;
      if (data) setSettings(data);
    } catch (error: any) {
      console.error('Error fetching settings:', error);
      toast({ title: t('خطأ في جلب البيانات', 'Error fetching settings'), variant: 'destructive' });
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      // تحديث updated_at تلقائي
      const payload: SiteSettings = {
        ...settings,
        updated_at: new Date().toISOString(),
      };

      if (!settings.id) {
        // أول مرة insert
        const { data, error } = await supabase
          .from('site_settings')
          .insert([payload])
          .select('*')
          .maybeSingle();
        if (error) throw error;
        if (data) setSettings(data);
      } else {
        // update row محددة بالid
        const { data, error } = await supabase
          .from('site_settings')
          .update(payload)
          .eq('id', settings.id)
          .select('*')
          .maybeSingle();
        if (error) throw error;
        if (data) setSettings(data);
      }

      toast({ title: t('تم الحفظ بنجاح', 'Saved successfully') });

      // تحديث CSS variables مباشرة
      document.documentElement.style.setProperty('--primary-color', settings.primary_color);
      document.documentElement.style.setProperty('--secondary-color', settings.secondary_color);

    } catch (error: any) {
      console.error('Save error:', error);
      toast({ title: t('خطأ في الحفظ', 'Save error'), description: error?.message || String(error), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('إعدادات الموقع', 'Site Settings')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('اسم الموقع بالعربية', 'Site Name in Arabic')}</Label>
            <Input
              value={settings.site_name_ar}
              onChange={(e) => setSettings({ ...settings, site_name_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('اسم الموقع بالإنجليزية', 'Site Name in English')}</Label>
            <Input
              value={settings.site_name_en}
              onChange={(e) => setSettings({ ...settings, site_name_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t('رابط الشعار', 'Logo URL')}</Label>
          <Input
            value={settings.logo_url}
            onChange={(e) => setSettings({ ...settings, logo_url: e.target.value })}
            dir="ltr"
            placeholder="https://example.com/logo.png"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('اللون الأساسي', 'Primary Color')}</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={settings.primary_color}
                onChange={(e) => setSettings({ ...settings, primary_color: e.target.value })}
                className="w-20 h-10"
              />
              <Input
                value={settings.primary_color}
                onChange={(e) => setSettings({ ...settings, primary_color: e.target.value })}
                dir="ltr"
                className="flex-1"
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label>{t('اللون الثانوي', 'Secondary Color')}</Label>
            <div className="flex gap-2">
              <Input
                type="color"
                value={settings.secondary_color}
                onChange={(e) => setSettings({ ...settings, secondary_color: e.target.value })}
                className="w-20 h-10"
              />
              <Input
                value={settings.secondary_color}
                onChange={(e) => setSettings({ ...settings, secondary_color: e.target.value })}
                dir="ltr"
                className="flex-1"
              />
            </div>
          </div>
        </div>

        <Button onClick={handleSave} disabled={loading} className="w-full">
          <Save className="mr-2 h-4 w-4" />
          {loading ? t('جاري الحفظ...', 'Saving...') : t('حفظ التغييرات', 'Save Changes')}
        </Button>
      </CardContent>
    </Card>
  );
}
