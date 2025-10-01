import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';
import { Save } from 'lucide-react';

export default function HeroSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [heroData, setHeroData] = useState({
    id: '',
    title_ar: '',
    title_en: '',
    button1_text_ar: '',
    button1_text_en: '',
    button2_text_ar: '',
    button2_text_en: '',
    image_url: ''
  });

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const { data, error } = await supabase
        .from('hero_sections')
        .select('*')
        .single();

      if (data) {
        setHeroData(data);
      }
    } catch (error) {
      console.error('Error fetching hero data:', error);
    }
  };

  const handleSave = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('hero_sections')
        .upsert({
          id: heroData.id || undefined,
          ...heroData
        });

      if (error) throw error;

      toast({
        title: t('تم الحفظ بنجاح', 'Saved successfully'),
      });
    } catch (error) {
      toast({
        title: t('خطأ في الحفظ', 'Save error'),
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
            <Label htmlFor="title_ar">
              {t('العنوان بالعربية', 'Title in Arabic')}
            </Label>
            <Input
              id="title_ar"
              value={heroData.title_ar}
              onChange={(e) => setHeroData({ ...heroData, title_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="title_en">
              {t('العنوان بالإنجليزية', 'Title in English')}
            </Label>
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
            <Label htmlFor="button1_text_ar">
              {t('نص الزر الأول بالعربية', 'First Button Text in Arabic')}
            </Label>
            <Input
              id="button1_text_ar"
              value={heroData.button1_text_ar}
              onChange={(e) => setHeroData({ ...heroData, button1_text_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="button1_text_en">
              {t('نص الزر الأول بالإنجليزية', 'First Button Text in English')}
            </Label>
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
            <Label htmlFor="button2_text_ar">
              {t('نص الزر الثاني بالعربية', 'Second Button Text in Arabic')}
            </Label>
            <Input
              id="button2_text_ar"
              value={heroData.button2_text_ar}
              onChange={(e) => setHeroData({ ...heroData, button2_text_ar: e.target.value })}
              dir="rtl"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="button2_text_en">
              {t('نص الزر الثاني بالإنجليزية', 'Second Button Text in English')}
            </Label>
            <Input
              id="button2_text_en"
              value={heroData.button2_text_en}
              onChange={(e) => setHeroData({ ...heroData, button2_text_en: e.target.value })}
              dir="ltr"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="image_url">
            {t('رابط الصورة', 'Image URL')}
          </Label>
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