import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import img1 from '@/assets/service1.jpg'
import img2 from '@/assets/cera1.png'
import img3 from '@/assets/revo1.png'


interface Service {
  id: number;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  image: string;
}

const ServicesSlider: React.FC = () => {
  const { t } = useLanguage();
  const [currentSlide, setCurrentSlide] = useState(0);

  const services: Service[] = [
    {
      id: 1,
      titleAr: 'أعمال التصميم الداخلي والخارجي',
      titleEn: 'Interior and Exterior Design',
      descriptionAr: 'نقدم تصاميم مبتكرة تجمع بين الجمال والوظيفة',
      descriptionEn: 'We provide innovative designs that combine beauty and functionality',
      image: img1
    },
    {
      id: 2,
      titleAr: 'أعمال البناء والتشييد',
      titleEn: 'Construction and Building',
      descriptionAr: 'تنفيذ مشاريع البناء بأعلى معايير الجودة',
      descriptionEn: 'Executing construction projects with the highest quality standards',
      image: img2
    },
    {
      id: 3,
      titleAr: 'الصيانة والترميم',
      titleEn: 'Maintenance and Restoration',
      descriptionAr: 'خدمات صيانة شاملة وترميم احترافي',
      descriptionEn: 'Comprehensive maintenance services and professional restoration',
      image: img3
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % services.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + services.length) % services.length);
  };

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12 animate-fade-in">
          {t('خدماتنا', 'Our Services')}
        </h2>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(${currentSlide * 100}%)` }}
            >
              {services.map((service) => (
                <div key={service.id} className="w-full flex-shrink-0">
                  <Card className="p-0 overflow-hidden shadow-luxury animate-glow rounded-2xl">
<div className="h-64 md:h-96 relative group">
  <img 
    src={service.image} 
    alt={service.titleEn} 
    className=" w-full h-[500px] object-cover rounded-xl" 
  />
  <div className="absolute inset-0 bg-gradient-overlay transition-opacity duration-300 group-hover:opacity-90" />
  <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform transition-transform duration-300 group-hover:translate-y-[-10px]">
    <h3 className="text-2xl md:text-3xl font-bold mb-2 animate-slide-up">
      {t(service.titleAr, service.titleEn)}
    </h3>
    <p className="mb-4 text-white/90 animate-fade-in">
      {t(service.descriptionAr, service.descriptionEn)}
    </p>
    <Button 
      variant="secondary"
      className="bg-white/15 backdrop-blur-lg hover:bg-white/25 text-white border border-white/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-luxury"
    >
      <ExternalLink className="w-4 h-4 ml-2 animate-pulse-soft" />
      {t('شاهد أكثر', 'View More')}
    </Button>
  </div>
</div>


                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-12 bg-gradient-primary text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-luxury animate-fade-in"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-12 bg-gradient-primary text-white rounded-full p-3 transition-all duration-300 hover:scale-110 shadow-luxury animate-fade-in"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
          
          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {services.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentSlide 
                    ? 'bg-primary w-8' 
                    : 'bg-muted-foreground/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSlider;