import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useLanguage } from '@/context/LanguageContext';
import { LogOut } from 'lucide-react';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import SettingsSection from './sections/SettingsSection';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const { t } = useLanguage();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if admin is authenticated
    const authData = localStorage.getItem('adminAuth');
    if (!authData) {
      navigate('/admin');
      return;
    }
    
    const auth = JSON.parse(authData);
    if (!auth.authenticated) {
      navigate('/admin');
      return;
    }
    
    setIsAuthenticated(true);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('adminAuth');
    navigate('/admin');
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">
            {t('لوحة التحكم', 'Admin Dashboard')}
          </h1>
          <Button variant="outline" onClick={handleLogout}>
            <LogOut className="mr-2 h-4 w-4" />
            {t('تسجيل الخروج', 'Logout')}
          </Button>
        </div>

        <Tabs defaultValue="hero" className="space-y-4">
          <TabsList className="grid grid-cols-6 w-full">
            <TabsTrigger value="hero">
              {t('الصفحة الرئيسية', 'Hero')}
            </TabsTrigger>
            <TabsTrigger value="about">
              {t('من نحن', 'About')}
            </TabsTrigger>
            <TabsTrigger value="services">
              {t('الخدمات', 'Services')}
            </TabsTrigger>
            <TabsTrigger value="projects">
              {t('المشاريع', 'Projects')}
            </TabsTrigger>
            <TabsTrigger value="contact">
              {t('التواصل', 'Contact')}
            </TabsTrigger>
            <TabsTrigger value="settings">
              {t('الإعدادات', 'Settings')}
            </TabsTrigger>
          </TabsList>

          <TabsContent value="hero">
            <HeroSection />
          </TabsContent>
          
          <TabsContent value="about">
            <AboutSection />
          </TabsContent>
          
          <TabsContent value="services">
            <ServicesSection />
          </TabsContent>
          
          <TabsContent value="projects">
            <ProjectsSection />
          </TabsContent>
          
          <TabsContent value="contact">
            <ContactSection />
          </TabsContent>
          
          <TabsContent value="settings">
            <SettingsSection />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}