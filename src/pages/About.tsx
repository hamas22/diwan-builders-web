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
        className="relative py-36 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.85), hsl(36 36% 45% / 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 text-center text-white animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-kufi mb-6 drop-shadow-[0_4px_6px_rgba(255,255,255,0.3)]">
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
      <section className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-48 h-48 bg-amber-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-left">
              <h2 className="text-4xl font-kufi mb-6 text-amber-700">
                {t('قصتنا', 'Our Story')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
  {t(
    "تُعد مؤسسة ديوان الخليج للمقاولات العامة جهة متخصصة منذ عام 2021 في مجالات التشييد والترميم والتشطيب العام، إضافة إلى الدهانات والديكورات الجبسية وأعمال الرخام والسيراميك والإشراف الهندسي، نجحنا في تنفيذ مشاريع متنوعة شملت المباني السكنية والتجارية، مما أكسبنا سمعة متميزة في السوق السعودي.",
    "Since 2021, Diwan Al Khaleej General Contracting has specialized in construction, renovation, and general finishing works, including painting, gypsum decorations, marble, ceramics, and engineering supervision. We have successfully completed diverse residential and commercial projects, earning an outstanding reputation in the Saudi market."
  )}
</p>

              
            </div>
            <div className="animate-fade-in-right">
              <img
                src={aboutImage}
                alt="Our Team"
                className="rounded-3xl shadow-[0_0_25px_rgba(255,200,100,0.4)] hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-40 h-40 bg-amber-300/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-amber-400/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="container mx-auto px-4 relative">
          <h2 className="text-center text-4xl font-kufi text-amber-700 mb-12 animate-fade-in">
            {t('قيمنا', 'Our Values')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-8 text-center bg-white/80 backdrop-blur-md rounded-2xl border border-amber-400/40 shadow-lg hover:shadow-amber-400/60 transform transition-all duration-700 hover:-translate-y-3 hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <value.icon className="w-14 h-14 mx-auto mb-4 text-amber-600 animate-float" />
                <h3 className="text-2xl font-bold mb-2 text-amber-700">
                  {t(value.titleAr, value.titleEn)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(value.descriptionAr, value.descriptionEn)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-gradient-to-b from-muted/40 to-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-10 bg-white/85 backdrop-blur-md border border-amber-400/40 rounded-3xl shadow-lg hover:shadow-amber-400/60 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
              <h2 className="text-3xl font-kufi mb-6 text-amber-700">
                {t('رسالتنا', 'Our Mission')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'تقديم خدمات مقاولات وبناء عالية الجودة تتجاوز توقعات عملائنا، مع الحفاظ على أعلى معايير السلامة والاستدامة البيئية، والمساهمة في تطوير البنية التحتية  .',
                  'To provide high-quality contracting and construction services that exceed our customers\' expectations, while maintaining the highest standards of safety and environmental sustainability, and contributing to the development .'
                )}
              </p>
            </Card>

            <Card className="p-10 bg-white/85 backdrop-blur-md border border-amber-400/40 rounded-3xl shadow-lg hover:shadow-amber-400/60 transform transition-all duration-700 hover:scale-105 hover:-translate-y-2 animate-fade-in-up">
            
              <h2 className="text-3xl font-kufi mb-6 text-amber-700">
                {t('رؤيتنا', 'Our Vision')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                {t(
                  'نسعى في مؤسسة ديوان الخليج للمقاولات العامة إلى أن نكون الوجهة الأولى في عالم البناء والتشييد من خلال تقديم مشاريع عالية الجودة تجمع بين الإتقان والابتكار، وبناء ثقة دائمة مع عملائنا عبر الالتزام بالمعايير الهندسية الدقيقة لنُسهم في صناعة بيئة عمرانية متكاملة تُلبي تطلعات الأجيال وتُضيف قيمة حقيقية للمجتمع.',
                  'At Diwan Al Khaleej General Contracting, we strive to be the leading destination in the world of construction by delivering high-quality projects that combine precision and innovation, building lasting trust with our clients through adherence to exact engineering standards, and contributing to creating a comprehensive urban environment that meets the aspirations of future generations and adds real value to the community.'
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
