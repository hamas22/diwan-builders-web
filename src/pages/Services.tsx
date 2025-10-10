import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Building, Wrench, Paintbrush, Home, Ruler, Shield } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';
import service1 from '@/assets/service1.jpg';
import project1 from '@/assets/project1.jpg';
import aboutImage from '@/assets/about-image.jpg';

interface Service {
  id: number;
  icon: any;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  detailsAr: string;
  detailsEn: string;
  images: string[];
}

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const revealCards = () => {
      const cards = document.querySelectorAll('.service-card');
      cards.forEach((card, index) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => {
            setVisibleCards((prev) => [...prev, index]);
          }, index * 150);
        }
      });
    };
    window.addEventListener('scroll', revealCards);
    revealCards();
    return () => window.removeEventListener('scroll', revealCards);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      icon: Building,
      titleAr: 'أعمال التشييد والبناء',
      titleEn: 'Construction Works',
      descriptionAr: 'تنفيذ مشاريع البناء من الأساسات حتى التسليم بأعلى جودة.',
      descriptionEn: 'Executing construction projects from foundation to delivery with top quality.',
      detailsAr: 'نقدم كافة أعمال البناء للمشاريع السكنية والتجارية والصناعية مع استخدام أفضل المواد.',
      detailsEn: 'We handle all construction works for residential, commercial, and industrial projects using premium materials.',
      images: [heroBg, aboutImage, project1]
    },
    {
      id: 2,
      icon: Wrench,
      titleAr: 'الترميم',
      titleEn: 'Renovation',
      descriptionAr: 'ترميم وتجديد المباني القديمة لتبدو كالجديدة.',
      descriptionEn: 'Renovating and restoring old buildings to look brand new.',
      detailsAr: 'نقوم بأعمال الترميم الكامل والتقوية الإنشائية للمباني المتضررة أو القديمة.',
      detailsEn: 'We provide full renovation and structural reinforcement for damaged or old buildings.',
      images: [aboutImage, project1, service1]
    },
    {
      id: 3,
      icon: Home,
      titleAr: 'التشطيب العام',
      titleEn: 'General Finishing',
      descriptionAr: 'تشطيبات متكاملة بتصاميم أنيقة وجودة عالية.',
      descriptionEn: 'Comprehensive finishing with elegant design and high quality.',
      detailsAr: 'ننفذ جميع مراحل التشطيب من الأرضيات إلى الأسقف وفقًا لأحدث المعايير.',
      detailsEn: 'We carry out all finishing stages from floors to ceilings with modern standards.',
      images: [service1, heroBg, project1]
    },
    {
      id: 4,
      icon: Paintbrush,
      titleAr: 'الدهانات والديكورات الجبسية',
      titleEn: 'Painting & Gypsum Decor',
      descriptionAr: 'تنفيذ أجمل التصاميم الجبسية والدهانات الفاخرة.',
      descriptionEn: 'Executing luxurious paint and gypsum designs.',
      detailsAr: 'نقدم ديكورات جبسية مميزة ودهانات عصرية تضيف لمسة فخامة لكل مساحة.',
      detailsEn: 'We provide elegant gypsum decorations and modern paints that add luxury to every space.',
      images: [heroBg, aboutImage, project1]
    },
    {
      id: 5,
      icon: Ruler,
      titleAr: 'أعمال الرخام والسيراميك',
      titleEn: 'Marble & Ceramic Works',
      descriptionAr: 'تصميم وتركيب الرخام والسيراميك بدقة وأناقة.',
      descriptionEn: 'Designing and installing marble and ceramic with precision and elegance.',
      detailsAr: 'نوفر جميع أعمال الأرضيات والحوائط باستخدام أجود أنواع الرخام والسيراميك.',
      detailsEn: 'We offer all flooring and wall works using high-quality marble and ceramic.',
      images: [service1, aboutImage, project1]
    },
    {
      id: 6,
      icon: Shield,
      titleAr: 'الإشراف الهندسي',
      titleEn: 'Engineering Supervision',
      descriptionAr: 'إشراف هندسي دقيق لضمان تنفيذ المشروع بأعلى جودة.',
      descriptionEn: 'Accurate engineering supervision to ensure top-quality project execution.',
      detailsAr: 'يشرف مهندسونا المتخصصون على جميع مراحل التنفيذ لضمان الجودة والالتزام بالمواصفات.',
      detailsEn: 'Our expert engineers supervise all execution phases to ensure quality and compliance.',
      images: [project1, service1, heroBg]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section
        className="relative py-32"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.85), hsl(36 36% 45% / 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-6xl font-kufi mb-6 animate-fade-in">
            {t('خدماتنا', 'Our Services')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
            {t(
              'نقدم مجموعة شاملة من خدمات المقاولات والبناء بأعلى معايير الجودة',
              'We offer a comprehensive range of contracting and construction services with the highest quality standards'
            )}
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={service.id}
                className={`service-card p-8 rounded-2xl border border-gray-200 backdrop-blur-sm bg-white/70 shadow-lg hover:shadow-2xl hover:shadow-amber-400/50 transition-all duration-500 cursor-pointer transform ${
                  visibleCards.includes(index)
                    ? 'opacity-100 translate-y-0 scale-100'
                    : 'opacity-0 translate-y-10 scale-95'
                }`}
                onClick={() => setSelectedService(service)}
              >
                <div className="flex flex-col items-center text-center">
                  <service.icon className="w-14 h-14 mb-5 text-amber-600 group-hover:scale-125 transition-transform duration-500" />
                  <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                    {t(service.titleAr, service.titleEn)}
                  </h3>
                  <p className="text-gray-600 mb-4">{t(service.descriptionAr, service.descriptionEn)}</p>
                  <span className="text-amber-600 font-medium group-hover:underline transition-all">
                    {t('شاهد أكثر ←', 'View More →')}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Dialog */}
      <Dialog open={!!selectedService} onOpenChange={() => setSelectedService(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl font-kufi">
              {selectedService && t(selectedService.titleAr, selectedService.titleEn)}
            </DialogTitle>
          </DialogHeader>

          {selectedService && (
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">{t(selectedService.detailsAr, selectedService.detailsEn)}</p>
              <div className="grid grid-cols-3 gap-4">
                {selectedService.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Service ${index + 1}`}
                    className="rounded-lg cursor-pointer hover:scale-105 transition-transform"
                    onClick={() => setSelectedImage(image)}
                  />
                ))}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Image Lightbox */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl p-0 overflow-hidden">
          {selectedImage && <img src={selectedImage} alt="Full view" className="w-full h-auto" />}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;
