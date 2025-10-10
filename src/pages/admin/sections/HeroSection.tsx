import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';
import { Save } from 'lucide-react';

type Hero = {
  id: string;
  title_ar: string;
  title_en: string;
  button1_text_ar: string;
  button1_text_en: string;
  button2_text_ar: string;
  button2_text_en: string;
  image_url: string;
};

const emptyHero = (): Hero => ({
  id: '',
  title_ar: '',
  title_en: '',
  button1_text_ar: '',
  button1_text_en: '',
  button2_text_ar: '',
  button2_text_en: '',
  image_url: '',
});

export default function HeroSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [heroData, setHeroData] = useState<Hero>(emptyHero());
  const [originalHeroData, setOriginalHeroData] = useState<Hero | null>(null);

  useEffect(() => {
    fetchHeroData();
  }, []);

  const sanitizeRow = (row: any) => {
    if (!row) return null;
    const clean: any = {};
    Object.keys(emptyHero()).forEach((k) => {
      clean[k] = row[k] == null ? '' : row[k];
    });
    clean.id = row.id; // id لازم يفضل موجود
    return clean as Hero;
  };

  // جلب البيانات من Supabase
  const fetchHeroData = async () => {
    try {
      const { data, error } = await supabase
        .from('hero_sections')
        .select('*')
        .limit(1)
        .single();

      if (error) {
        console.error('Fetch hero error:', error);
        return;
      }

      if (data) {
        const sanitized = sanitizeRow(data) || emptyHero();
        setHeroData(sanitized);
        setOriginalHeroData(sanitized);
      } else {
        setHeroData(emptyHero());
        setOriginalHeroData(null);
      }
    } catch (err) {
      console.error('Unexpected fetchHeroData error:', err);
    }
  };

  // الحفظ (Insert أو Update حسب الحالة)
  const handleSave = async () => {
    setLoading(true);
    try {
      const payload = {
        title_ar: heroData.title_ar,
        title_en: heroData.title_en,
        button1_text_ar: heroData.button1_text_ar,
        button1_text_en: heroData.button1_text_en,
        button2_text_ar: heroData.button2_text_ar,
        button2_text_en: heroData.button2_text_en,
        image_url: heroData.image_url,
      };

      if (!heroData.id) {
        const { data: inserted, error } = await supabase
          .from('hero_sections')
          .insert([payload])
          .select('*')
          .maybeSingle();

        if (error) throw error;

        const sanitized = sanitizeRow(inserted) || emptyHero();
        setHeroData(sanitized);
        setOriginalHeroData(sanitized);
        toast({ title: t('تم إنشاء قسم الصفحة الرئيسية بنجاح', 'Hero section created') });
      } else {
        const changes: any = {};
        Object.keys(payload).forEach((key) => {
          if ((payload as any)[key] !== (originalHeroData as any)?.[key]) {
            changes[key] = (payload as any)[key];
          }
        });

        if (Object.keys(changes).length === 0) {
          toast({ title: t('لا يوجد تغييرات للحفظ', 'No changes to save') });
          setLoading(false);
          return;
        }

        // Update للحقول المتغيرة فقط
        const { data: updated, error } = await supabase
          .from('hero_sections')
          .update(changes)
          .eq('id', heroData.id)
          .select('*')
          .maybeSingle();

        if (error) throw error;

        const sanitized = sanitizeRow(updated) || heroData;
        setHeroData(sanitized);
        setOriginalHeroData(sanitized);
        toast({ title: t('تم الحفظ بنجاح', 'Saved successfully') });
      }
    } catch (error: any) {
      console.error('Save error:', error);
      toast({
        title: t('خطأ في الحفظ', 'Save error'),
        description: error?.message || String(error),
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t('قسم الصفحة الرئيسية', 'Hero Section')}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="title_ar">{t('العنوان بالعربية', 'Title in Arabic')}</Label>
            <Input
              id="title_ar"
              value={heroData.title_ar}
              onChange={(e) => setHeroData({ ...heroData, title_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title_en">{t('العنوان بالإنجليزية', 'Title in English')}</Label>
            <Input
              id="title_en"
              value={heroData.title_en}
              onChange={(e) => setHeroData({ ...heroData, title_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="button1_text_ar">{t('نص الزر الأول بالعربية', 'First Button Text in Arabic')}</Label>
            <Input
              id="button1_text_ar"
              value={heroData.button1_text_ar}
              onChange={(e) => setHeroData({ ...heroData, button1_text_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="button1_text_en">{t('نص الزر الأول بالإنجليزية', 'First Button Text in English')}</Label>
            <Input
              id="button1_text_en"
              value={heroData.button1_text_en}
              onChange={(e) => setHeroData({ ...heroData, button1_text_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="button2_text_ar">{t('نص الزر الثاني بالعربية', 'Second Button Text in Arabic')}</Label>
            <Input
              id="button2_text_ar"
              value={heroData.button2_text_ar}
              onChange={(e) => setHeroData({ ...heroData, button2_text_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="button2_text_en">{t('نص الزر الثاني بالإنجليزية', 'Second Button Text in English')}</Label>
            <Input
              id="button2_text_en"
              value={heroData.button2_text_en}
              onChange={(e) => setHeroData({ ...heroData, button2_text_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image_url">{t('رابط الصورة', 'Image URL')}</Label>
          <Input
            id="image_url"
            value={heroData.image_url}
            onChange={(e) => setHeroData({ ...heroData, image_url: e.target.value })}
            dir="ltr"
            placeholder="https://example.com/image.jpg"
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
