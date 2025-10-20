import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';  
import img1 from '@/assets/service1.jpg';
import img2 from '@/assets/cera1.png';
import img3 from '@/assets/revo1.png';
import shet from "@/assets/shet.png";

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
  const navigate = useNavigate(); 

  const services: Service[] = [
    {
      id: 1,
      titleAr: '   التشطيب العام',
      titleEn: 'General Finishing',
      descriptionAr: 'تشطيبات متكاملة بتصاميم أنيقة وجودة عالية.',
      descriptionEn: 'Comprehensive finishing with elegant design and high quality.',
      image: shet,
    },
    {
      id: 2,
      titleAr: 'أعمال البناء والتشييد',
      titleEn: 'Construction and Building',
      descriptionAr: 'تنفيذ مشاريع البناء بأعلى معايير الجودة',
      descriptionEn: 'Executing construction projects with the highest quality standards',
      image: img2,
    },
    {
      id: 3,
      titleAr: 'الصيانة والترميم',
      titleEn: 'Maintenance and Restoration',
      descriptionAr: 'خدمات صيانة شاملة وترميم احترافي',
      descriptionEn: 'Comprehensive maintenance services and professional restoration',
      image: img3,
    },
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
                <div className="relative group">
                  {/* الصورة */}
                  <img
                    src={service.image}
                    alt={service.titleEn}
                    className="w-full h-[500px] object-cover rounded-xl"
                  />

                  {/* Overlay عام خفيف على الصورة بالكامل */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 rounded-xl" />

                  {/* صندوق النص في المنتصف */}
                  <div className="absolute inset-0 flex items-center justify-center p-6">
                    <div className="max-w-xl w-full text-center text-white 
                                    bg-black/35 backdrop-blur-[1px] 
                                    rounded-xl px-6 py-5 
                                    shadow-[0_8px_30px_rgba(0,0,0,0.25)] 
                                    transition-transform duration-300 group-hover:translate-y-[-2px]">
                      <h3 className="text-2xl md:text-3xl font-bold mb-3 animate-slide-up">
                        {t(service.titleAr, service.titleEn)}
                      </h3>
                      <p className="mb-5 text-white/90 animate-fade-in">
                        {t(service.descriptionAr, service.descriptionEn)}
                      </p>
                      <Button
                        variant="secondary"
                        onClick={() => navigate('/services')}
                        className="bg-white/15 backdrop-blur-md hover:bg-white/25 text-white border border-white/20 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-luxury"
                      >
                        <ExternalLink className="w-4 h-4 ml-2 animate-pulse-soft" />
                        {t('شاهد أكثر', 'View More')}
                      </Button>
                    </div>
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
              index === currentSlide ? 'bg-primary w-8' : 'bg-muted-foreground/30'
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
