import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Award, Users, Target, Lightbulb } from 'lucide-react';
import { Card } from '@/components/ui/card';
import heroBg from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-image.jpg';

const About: React.FC = () => {
  const { t } = useLanguage();

  const values = [
    {
      icon: Award,
      titleAr: 'الجودة',
      titleEn: 'Quality',
      descriptionAr: 'نلتزم بأعلى معايير الجودة في جميع مشاريعنا',
      descriptionEn: 'We commit to the highest quality standards in all our projects'
    },
    {
      icon: Users,
      titleAr: 'العمل الجماعي',
      titleEn: 'Teamwork',
      descriptionAr: 'نؤمن بقوة العمل الجماعي وتكامل الخبرات',
      descriptionEn: 'We believe in the power of teamwork and integration of expertise'
    },
    {
      icon: Target,
      titleAr: 'الالتزام',
      titleEn: 'Commitment',
      descriptionAr: 'نلتزم بالمواعيد والمواصفات المتفق عليها',
      descriptionEn: 'We adhere to agreed deadlines and specifications'
    },
    {
      icon: Lightbulb,
      titleAr: 'الابتكار',
      titleEn: 'Innovation',
      descriptionAr: 'نسعى دائماً لتقديم حلول مبتكرة وعصرية',
      descriptionEn: 'We always strive to provide innovative and modern solutions'
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
            {t('من نحن', 'About Us')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
            {t(
              'رحلة من التميز والإنجازات في عالم المقاولات والبناء',
              'A journey of excellence and achievements in the world of contracting and construction'
            )}
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="section-title">
                {t('قصتنا', 'Our Story')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                {t(
                  'تأسست مؤسسة ديوان الخليج للمقاولات العامة عام 2010 برؤية واضحة: أن نكون رائدين في مجال المقاولات والبناء في دولة قطر. منذ البداية، التزمنا بتقديم خدمات عالية الجودة تلبي وتتجاوز توقعات عملائنا.',
                  'Diwan Al Khaleej General Contracting was established in 2010 with a clear vision: to be leaders in the field of contracting and construction in Qatar. From the beginning, we have been committed to providing high-quality services that meet and exceed our customers\' expectations.'
                )}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'على مدار أكثر من 14 عامًا، نجحنا في تنفيذ مشاريع متنوعة شملت المباني السكنية والتجارية والمشاريع الحكومية، مما أكسبنا سمعة متميزة في السوق القطري.',
                  'Over more than 14 years, we have successfully implemented various projects including residential and commercial buildings and government projects, earning us an excellent reputation in the Qatari market.'
                )}
              </p>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={aboutImage} 
                alt="Our Team" 
                className="rounded-xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="section-title text-center mb-12">
            {t('قيمنا', 'Our Values')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-gold transition-shadow duration-300">
                <value.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                <h3 className="text-xl font-semibold mb-2">
                  {t(value.titleAr, value.titleEn)}
                </h3>
                <p className="text-muted-foreground">
                  {t(value.descriptionAr, value.descriptionEn)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8">
              <h2 className="text-3xl font-kufi mb-6 text-primary">
                {t('رسالتنا', 'Our Mission')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'تقديم خدمات مقاولات وبناء عالية الجودة تتجاوز توقعات عملائنا، مع الحفاظ على أعلى معايير السلامة والاستدامة البيئية، والمساهمة في تطوير البنية التحتية لدولة قطر.',
                  'To provide high-quality contracting and construction services that exceed our customers\' expectations, while maintaining the highest standards of safety and environmental sustainability, and contributing to the development of Qatar\'s infrastructure.'
                )}
              </p>
            </Card>
            
            <Card className="p-8">
              <h2 className="text-3xl font-kufi mb-6 text-primary">
                {t('رؤيتنا', 'Our Vision')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'أن نكون الخيار الأول والشريك الموثوق في مجال المقاولات والبناء في دولة قطر والمنطقة، من خلال الابتكار المستمر والتميز في الأداء وبناء علاقات طويلة الأمد مع عملائنا.',
                  'To be the first choice and trusted partner in the field of contracting and construction in Qatar and the region, through continuous innovation, performance excellence, and building long-term relationships with our customers.'
                )}
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;