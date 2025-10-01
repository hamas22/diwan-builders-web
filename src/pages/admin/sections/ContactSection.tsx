import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';
import { Save } from 'lucide-react';

export default function ContactSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [contactData, setContactData] = useState({
    id: '',
    phone1: '',
    phone2: '',
    email: '',
    address_ar: '',
    address_en: '',
    working_hours_ar: '',
    working_hours_en: '',
    facebook_url: '',
    instagram_url: '',
    twitter_url: '',
    tiktok_url: '',
    map_url: ''
  });

  useEffect(() => {
    fetchContactData();
  }, []);

  const fetchContactData = async () => {
    try {
      const { data } = await supabase
        .from('contact_info')
        .select('*')
        .single();
      if (data) setContactData(data);
    } catch (error) {
      console.error('Error fetching contact data:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('contact_info')
        .upsert(contactData);
      if (error) throw error;
      toast({ title: t('تم الحفظ بنجاح', 'Saved successfully') });
    } catch (error) {
      toast({ title: t('خطأ في الحفظ', 'Save error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('معلومات التواصل', 'Contact Information')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('رقم الهاتف الأول', 'Phone 1')}</Label>
            <Input
              value={contactData.phone1 || ''}
              onChange={(e) => setContactData({ ...contactData, phone1: e.target.value })}
              dir="ltr"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('رقم الهاتف الثاني', 'Phone 2')}</Label>
            <Input
              value={contactData.phone2 || ''}
              onChange={(e) => setContactData({ ...contactData, phone2: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t('البريد الإلكتروني', 'Email')}</Label>
          <Input
            type="email"
            value={contactData.email || ''}
            onChange={(e) => setContactData({ ...contactData, email: e.target.value })}
            dir="ltr"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('العنوان بالعربية', 'Address in Arabic')}</Label>
            <Input
              value={contactData.address_ar || ''}
              onChange={(e) => setContactData({ ...contactData, address_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('العنوان بالإنجليزية', 'Address in English')}</Label>
            <Input
              value={contactData.address_en || ''}
              onChange={(e) => setContactData({ ...contactData, address_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label>{t('ساعات العمل بالعربية', 'Working Hours in Arabic')}</Label>
            <Input
              value={contactData.working_hours_ar || ''}
              onChange={(e) => setContactData({ ...contactData, working_hours_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label>{t('ساعات العمل بالإنجليزية', 'Working Hours in English')}</Label>
            <Input
              value={contactData.working_hours_en || ''}
              onChange={(e) => setContactData({ ...contactData, working_hours_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold">{t('روابط التواصل الاجتماعي', 'Social Media Links')}</h3>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Facebook</Label>
              <Input
                value={contactData.facebook_url || ''}
                onChange={(e) => setContactData({ ...contactData, facebook_url: e.target.value })}
                dir="ltr"
                placeholder="https://facebook.com/..."
              />
            </div>
            <div className="space-y-2">
              <Label>Instagram</Label>
              <Input
                value={contactData.instagram_url || ''}
                onChange={(e) => setContactData({ ...contactData, instagram_url: e.target.value })}
                dir="ltr"
                placeholder="https://instagram.com/..."
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Twitter</Label>
              <Input
                value={contactData.twitter_url || ''}
                onChange={(e) => setContactData({ ...contactData, twitter_url: e.target.value })}
                dir="ltr"
                placeholder="https://twitter.com/..."
              />
            </div>
            <div className="space-y-2">
              <Label>TikTok</Label>
              <Input
                value={contactData.tiktok_url || ''}
                onChange={(e) => setContactData({ ...contactData, tiktok_url: e.target.value })}
                dir="ltr"
                placeholder="https://tiktok.com/..."
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t('رابط الخريطة', 'Map URL')}</Label>
          <Input
            value={contactData.map_url || ''}
            onChange={(e) => setContactData({ ...contactData, map_url: e.target.value })}
            dir="ltr"
            placeholder="https://maps.google.com/..."
          />
        </div>

        <Button onClick={handleSave} disabled={loading} className="w-full">
          <Save className="mr-2 h-4 w-4" />
          {loading ? t('جاري الحفظ...', 'Saving...') : t('حفظ التغييرات', 'Save Changes')}
        </Button>
      </CardContent>
    </Card>
  );
}