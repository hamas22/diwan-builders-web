import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Building, Paintbrush, Wrench, Home, Ruler, Shield } from 'lucide-react';
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

  const services: Service[] = [
    {
      id: 1,
      icon: Building,
      titleAr: 'أعمال البناء والتشييد',
      titleEn: 'Construction and Building',
      descriptionAr: 'تنفيذ مشاريع البناء الكاملة من الأساسات حتى التشطيبات',
      descriptionEn: 'Executing complete construction projects from foundations to finishing',
      detailsAr: 'نقدم خدمات البناء والتشييد الشاملة التي تشمل الأعمال الإنشائية، البناء، التشطيبات، وجميع الأعمال المتعلقة بالمشاريع السكنية والتجارية.',
      detailsEn: 'We provide comprehensive construction and building services including structural works, construction, finishing, and all works related to residential and commercial projects.',
      images: [heroBg, aboutImage, project1]
    },
    {
      id: 2,
      icon: Paintbrush,
      titleAr: 'التصميم الداخلي والخارجي',
      titleEn: 'Interior and Exterior Design',
      descriptionAr: 'تصاميم عصرية تجمع بين الجمال والوظيفة',
      descriptionEn: 'Modern designs that combine beauty and functionality',
      detailsAr: 'فريقنا من المصممين المحترفين يقدم حلول تصميم مبتكرة للمساحات الداخلية والخارجية، مع مراعاة احتياجات العميل والميزانية المتاحة.',
      detailsEn: 'Our team of professional designers provides innovative design solutions for interior and exterior spaces, taking into account client needs and available budget.',
      images: [service1, project1, aboutImage]
    },
    {
      id: 3,
      icon: Wrench,
      titleAr: 'الصيانة والترميم',
      titleEn: 'Maintenance and Restoration',
      descriptionAr: 'خدمات صيانة دورية وترميم شامل للمباني',
      descriptionEn: 'Periodic maintenance services and comprehensive building restoration',
      detailsAr: 'نوفر خدمات الصيانة الدورية والطارئة، بالإضافة إلى أعمال الترميم الكاملة للمباني القديمة والتراثية.',
      detailsEn: 'We provide periodic and emergency maintenance services, in addition to complete restoration works for old and heritage buildings.',
      images: [aboutImage, heroBg, service1]
    },
    {
      id: 4,
      icon: Home,
      titleAr: 'المشاريع السكنية',
      titleEn: 'Residential Projects',
      descriptionAr: 'بناء وتطوير المجمعات والوحدات السكنية',
      descriptionEn: 'Building and developing residential complexes and units',
      detailsAr: 'متخصصون في تطوير المشاريع السكنية من الفلل الخاصة إلى المجمعات السكنية الكبيرة، مع التركيز على الجودة والراحة.',
      detailsEn: 'Specialized in developing residential projects from private villas to large residential complexes, focusing on quality and comfort.',
      images: [project1, service1, heroBg]
    },
    {
      id: 5,
      icon: Ruler,
      titleAr: 'الاستشارات الهندسية',
      titleEn: 'Engineering Consultancy',
      descriptionAr: 'استشارات متخصصة في جميع مجالات البناء',
      descriptionEn: 'Specialized consultancy in all construction fields',
      detailsAr: 'نقدم استشارات هندسية شاملة تشمل التصميم، التخطيط، إدارة المشاريع، ودراسات الجدوى.',
      detailsEn: 'We provide comprehensive engineering consultancy including design, planning, project management, and feasibility studies.',
      images: [heroBg, project1, aboutImage]
    },
    {
      id: 6,
      icon: Shield,
      titleAr: 'السلامة والجودة',
      titleEn: 'Safety and Quality',
      descriptionAr: 'التزام كامل بمعايير السلامة والجودة العالمية',
      descriptionEn: 'Full commitment to international safety and quality standards',
      detailsAr: 'نطبق أعلى معايير السلامة والجودة في جميع مشاريعنا، مع الحصول على الشهادات والاعتمادات اللازمة.',
      detailsEn: 'We apply the highest safety and quality standards in all our projects, obtaining necessary certificates and accreditations.',
      images: [aboutImage, service1, project1]
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Card 
                key={service.id}
                className="p-6 hover:shadow-gold transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedService(service)}
              >
                <service.icon className="w-12 h-12 mb-4 text-primary group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-semibold mb-3">
                  {t(service.titleAr, service.titleEn)}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {t(service.descriptionAr, service.descriptionEn)}
                </p>
                <span className="text-primary font-medium group-hover:underline">
                  {t('شاهد أكثر ←', 'View More →')}
                </span>
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
              <p className="text-lg text-muted-foreground">
                {t(selectedService.detailsAr, selectedService.detailsEn)}
              </p>
              
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
          {selectedImage && (
            <img 
              src={selectedImage} 
              alt="Full view" 
              className="w-full h-auto"
            />
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;