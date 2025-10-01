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

export default function ProjectsSection() {
  const { t } = useLanguage();
  const [loading, setLoading] = useState(false);
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const { data } = await supabase
        .from('featured_projects')
        .select('*')
        .order('sort_order');
      if (data) setProjects(data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleAddProject = async () => {
    const newProject = {
      title_ar: '',
      title_en: '',
      description_ar: '',
      description_en: '',
      location_ar: '',
      location_en: '',
      main_image_url: '',
      sort_order: projects.length
    };
    try {
      const { data, error } = await supabase
        .from('featured_projects')
        .insert(newProject)
        .select()
        .single();
      if (error) throw error;
      setProjects([...projects, data]);
      toast({ title: t('تم إضافة المشروع', 'Project added') });
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleUpdateProject = async (id: string, field: string, value: any) => {
    try {
      const { error } = await supabase
        .from('featured_projects')
        .update({ [field]: value })
        .eq('id', id);
      if (error) throw error;
      setProjects(projects.map(p => p.id === id ? { ...p, [field]: value } : p));
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  const handleDeleteProject = async (id: string) => {
    try {
      const { error } = await supabase
        .from('featured_projects')
        .delete()
        .eq('id', id);
      if (error) throw error;
      setProjects(projects.filter(p => p.id !== id));
      toast({ title: t('تم حذف المشروع', 'Project deleted') });
    } catch (error) {
      toast({ title: t('خطأ', 'Error'), variant: 'destructive' });
    }
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle>{t('المشاريع المميزة', 'Featured Projects')}</CardTitle>
        <Button onClick={handleAddProject} size="sm">
          <Plus className="mr-2 h-4 w-4" />
          {t('إضافة مشروع', 'Add Project')}
        </Button>
      </CardHeader>
      <CardContent className="space-y-4">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('العنوان بالعربية', 'Title in Arabic')}</Label>
                <Input
                  value={project.title_ar}
                  onChange={(e) => handleUpdateProject(project.id, 'title_ar', e.target.value)}
                  dir="rtl"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('العنوان بالإنجليزية', 'Title in English')}</Label>
                <Input
                  value={project.title_en}
                  onChange={(e) => handleUpdateProject(project.id, 'title_en', e.target.value)}
                  dir="ltr"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('الوصف بالعربية', 'Description in Arabic')}</Label>
                <Textarea
                  value={project.description_ar || ''}
                  onChange={(e) => handleUpdateProject(project.id, 'description_ar', e.target.value)}
                  dir="rtl"
                  rows={3}
                />
              </div>
              <div className="space-y-2">
                <Label>{t('الوصف بالإنجليزية', 'Description in English')}</Label>
                <Textarea
                  value={project.description_en || ''}
                  onChange={(e) => handleUpdateProject(project.id, 'description_en', e.target.value)}
                  dir="ltr"
                  rows={3}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>{t('الموقع بالعربية', 'Location in Arabic')}</Label>
                <Input
                  value={project.location_ar || ''}
                  onChange={(e) => handleUpdateProject(project.id, 'location_ar', e.target.value)}
                  dir="rtl"
                />
              </div>
              <div className="space-y-2">
                <Label>{t('الموقع بالإنجليزية', 'Location in English')}</Label>
                <Input
                  value={project.location_en || ''}
                  onChange={(e) => handleUpdateProject(project.id, 'location_en', e.target.value)}
                  dir="ltr"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label>{t('رابط الصورة الرئيسية', 'Main Image URL')}</Label>
              <Input
                value={project.main_image_url || ''}
                onChange={(e) => handleUpdateProject(project.id, 'main_image_url', e.target.value)}
                dir="ltr"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <Button
              onClick={() => handleDeleteProject(project.id)}
              variant="destructive"
              size="sm"
            >
              <Trash className="mr-2 h-4 w-4" />
              {t('حذف المشروع', 'Delete Project')}
            </Button>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}