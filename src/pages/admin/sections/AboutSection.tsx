import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { toast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/context/LanguageContext';
import { Save, Plus, Trash } from 'lucide-react';

export default function AboutSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [aboutData, setAboutData] = useState({
    id: '',
    title_ar: '',
    title_en: '',
    content_ar: '',
    content_en: '',
    image_url: ''
  });
  
  const [achievements, setAchievements] = useState<any[]>([]);
  const [visionData, setVisionData] = useState({
    id: '',
    title_ar: '',
    title_en: '',
    content_ar: '',
    content_en: '',
    ceo_name_ar: '',
    ceo_name_en: '',
    image_url: ''
  });

  useEffect(() => {
    fetchAboutData();
    fetchAchievements();
    fetchVisionData();
  }, []);

  const fetchAboutData = async () => {
    try {
      const { data } = await supabase
        .from('about_sections')
        .select('*')
        .single();
      if (data) setAboutData(data);
    } catch (error) {
      console.error('Error fetching about data:', error);
    }
  };

  const fetchAchievements = async () => {
    try {
      const { data } = await supabase
        .from('achievements')
        .select('*')
        .order('sort_order');
      if (data) setAchievements(data);
    } catch (error) {
      console.error('Error fetching achievements:', error);
    }
  };

  const fetchVisionData = async () => {
    try {
      const { data } = await supabase
        .from('vision_sections')
        .select('*')
        .single();
      if (data) setVisionData(data);
    } catch (error) {
      console.error('Error fetching vision data:', error);
    }
  };

  const handleSaveAbout = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('about_sections')
        .upsert(aboutData);
      if (error) throw error;
      toast({ title: t('تم الحفظ بنجاح', 'Saved successfully') });
    } catch (error) {
      toast({ title: t('خطأ في الحفظ', 'Save error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleSaveVision = async () => {
    setLoading(true);
    try {
      const { error } = await supabase
        .from('vision_sections')
        .upsert(visionData);
      if (error) throw error;
      toast({ title: t('تم الحفظ بنجاح', 'Saved successfully') });
    } catch (error) {
      toast({ title: t('خطأ في الحفظ', 'Save error'), variant: 'destructive' });
    } finally {
      setLoading(false);
    }
  };

  const handleAddAchievement = async () => {
    const newAchievement = {
      title_ar: '',
      title_en: '',
      number: 0,
      icon: '',
      sort_order: achievements.length
    };
    try {
      const { data, error } = await supabase
        .from('achievements')
        .insert(newAchievement)
        .select()
        .single();
      if (error) throw error;
      setAchievements([...achievements, data]);
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleUpdateAchievement = async (id: string, field: string, value: any) => {
    try {
      const { error } = await supabase
        .from('achievements')
        .update({ [field]: value })
        .eq('id', id);
      if (error) throw error;
      setAchievements(achievements.map(a => a.id === id ? { ...a, [field]: value } : a));
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleDeleteAchievement = async (id: string) => {
    try {
      const { error } = await supabase
        .from('achievements')
        .delete()
        .eq('id', id);
      if (error) throw error;
      setAchievements(achievements.filter(a => a.id !== id));
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>{t('قسم من نحن', 'About Section')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('العنوان بالعربية', 'Title in Arabic')}</Label>
              <Input
                value={aboutData.title_ar}
                onChange={(e) => setAboutData({ ...aboutData, title_ar: e.target.value })}
                dir="rtl"
              />
            </div>
            <div className="space-y-2">
              <Label>{t('العنوان بالإنجليزية', 'Title in English')}</Label>
              <Input
                value={aboutData.title_en}
                onChange={(e) => setAboutData({ ...aboutData, title_en: e.target.value })}
                dir="ltr"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('المحتوى بالعربية', 'Content in Arabic')}</Label>
              <Textarea
                value={aboutData.content_ar}
                onChange={(e) => setAboutData({ ...aboutData, content_ar: e.target.value })}
                dir="rtl"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>{t('المحتوى بالإنجليزية', 'Content in English')}</Label>
              <Textarea
                value={aboutData.content_en}
                onChange={(e) => setAboutData({ ...aboutData, content_en: e.target.value })}
                dir="ltr"
                rows={4}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label>{t('رابط الصورة', 'Image URL')}</Label>
            <Input
              value={aboutData.image_url || ''}
              onChange={(e) => setAboutData({ ...aboutData, image_url: e.target.value })}
              dir="ltr"
            />
          </div>

          <Button onClick={handleSaveAbout} disabled={loading} className="w-full">
            <Save className="mr-2 h-4 w-4" />
            {t('حفظ التغييرات', 'Save Changes')}
          </Button>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{t('الإنجازات', 'Achievements')}</CardTitle>
          <Button onClick={handleAddAchievement} size="sm">
            <Plus className="mr-2 h-4 w-4" />
            {t('إضافة إنجاز', 'Add Achievement')}
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          {achievements.map((achievement) => (
            <div key={achievement.id} className="border rounded-lg p-4 space-y-2">
              <div className="grid grid-cols-2 gap-2">
                <Input
                  value={achievement.title_ar}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'title_ar', e.target.value)}
                  placeholder={t('العنوان بالعربية', 'Title in Arabic')}
                  dir="rtl"
                />
                <Input
                  value={achievement.title_en}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'title_en', e.target.value)}
                  placeholder={t('العنوان بالإنجليزية', 'Title in English')}
                  dir="ltr"
                />
              </div>
              <div className="grid grid-cols-3 gap-2">
                <Input
                  type="number"
                  value={achievement.number}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'number', parseInt(e.target.value))}
                  placeholder={t('الرقم', 'Number')}
                />
                <Input
                  value={achievement.icon || ''}
                  onChange={(e) => handleUpdateAchievement(achievement.id, 'icon', e.target.value)}
                  placeholder={t('الأيقونة', 'Icon')}
                />
                <Button
                  onClick={() => handleDeleteAchievement(achievement.id)}
                  variant="destructive"
                  size="sm"
                >
                  <Trash className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>{t('قسم الرؤية', 'Vision Section')}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('العنوان بالعربية', 'Title in Arabic')}</Label>
              <Input
                value={visionData.title_ar}
                onChange={(e) => setVisionData({ ...visionData, title_ar: e.target.value })}
                dir="rtl"
              />
            </div>
            <div className="space-y-2">
              <Label>{t('العنوان بالإنجليزية', 'Title in English')}</Label>
              <Input
                value={visionData.title_en}
                onChange={(e) => setVisionData({ ...visionData, title_en: e.target.value })}
                dir="ltr"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('المحتوى بالعربية', 'Content in Arabic')}</Label>
              <Textarea
                value={visionData.content_ar}
                onChange={(e) => setVisionData({ ...visionData, content_ar: e.target.value })}
                dir="rtl"
                rows={4}
              />
            </div>
            <div className="space-y-2">
              <Label>{t('المحتوى بالإنجليزية', 'Content in English')}</Label>
              <Textarea
                value={visionData.content_en}
                onChange={(e) => setVisionData({ ...visionData, content_en: e.target.value })}
                dir="ltr"
                rows={4}
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>{t('اسم المدير التنفيذي بالعربية', 'CEO Name in Arabic')}</Label>
              <Input
                value={visionData.ceo_name_ar || ''}
                onChange={(e) => setVisionData({ ...visionData, ceo_name_ar: e.target.value })}
                dir="rtl"
              />
            </div>
            <div className="space-y-2">
              <Label>{t('اسم المدير التنفيذي بالإنجليزية', 'CEO Name in English')}</Label>
              <Input
                value={visionData.ceo_name_en || ''}
                onChange={(e) => setVisionData({ ...visionData, ceo_name_en: e.target.value })}
                dir="ltr"
              />
            </div>
          </div>

          <Button onClick={handleSaveVision} disabled={loading} className="w-full">
            <Save className="mr-2 h-4 w-4" />
            {t('حفظ التغييرات', 'Save Changes')}
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}