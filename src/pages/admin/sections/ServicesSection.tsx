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

export default function ServicesSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [services, setServices] = useState<any[]>([]);

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const { data } = await supabase
        .from('services')
        .select('*')
        .order('sort_order');
      if (data) setServices(data);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleAddService = async () => {
    const newService = {
      title_ar: '',
      title_en: '',
      description_ar: '',
      description_en: '',
      image_url: '',
      sort_order: services.length
    };
    try {
      const { data, error } = await supabase
        .from('services')
        .insert(newService)
        .select()
        .single();
      if (error) throw error;
      setServices([...services, data]);
      toast({ title: t('تم إضافة الخدمة', 'Service added') });
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleUpdateService = async (id: string, field: string, value: any) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ [field]: value })
        .eq('id', id);
      if (error) throw error;
      setServices(services.map(s => s.id === id ? { ...s, [field]: value } : s));
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleDeleteService = async (id: string) => {
    try {
      const { error } = await supabase
        .from('services')
        .delete()
        .eq('id', id);
      if (error) throw error;
      setServices(services.filter(s => s.id !== id));
      toast({ title: t('تم حذف الخدمة', 'Service deleted') });
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{t('الخدمات', 'Services')}</CardTitle>
        <Button onClick={handleAddService} size="sm">
          <Plus className="mr-2 h-4 w-4" />
          {t('إضافة خدمة', 'Add Service')}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {services.map((service) => (
          <div key={service.id} className="border rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('العنوان بالعربية', 'Title in Arabic')}</Label>
                <Input
                  value={service.title_ar}
                  onChange={(e) => handleUpdateService(service.id, 'title_ar', e.target.value)}
                  dir="rtl"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('العنوان بالإنجليزية', 'Title in English')}</Label>
                <Input
                  value={service.title_en}
                  onChange={(e) => handleUpdateService(service.id, 'title_en', e.target.value)}
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('الوصف بالعربية', 'Description in Arabic')}</Label>
                <Textarea
                  value={service.description_ar || ''}
                  onChange={(e) => handleUpdateService(service.id, 'description_ar', e.target.value)}
                  dir="rtl"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>{t('الوصف بالإنجليزية', 'Description in English')}</Label>
                <Textarea
                  value={service.description_en || ''}
                  onChange={(e) => handleUpdateService(service.id, 'description_en', e.target.value)}
                  dir="ltr"
                  rows={3}
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('رابط الصورة', 'Image URL')}</Label>
              <Input
                value={service.image_url || ''}
                onChange={(e) => handleUpdateService(service.id, 'image_url', e.target.value)}
                dir="ltr"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <Button
              onClick={() => handleDeleteService(service.id)}
              variant="destructive"
              size="sm"
            >
              <Trash className="mr-2 h-4 w-4" />
              {t('حذف الخدمة', 'Delete Service')}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}