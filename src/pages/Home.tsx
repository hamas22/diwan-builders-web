import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone } from 'lucide-react';
import CounterSection from '@/components/CounterSection';
import ServicesSlider from '@/components/ServicesSlider';
import heroBg from '@/assets/hero-bg.jpg';
import aboutImage from '@/assets/about-image.jpg';
import project1 from '@/assets/project1.jpg';
import logo from '@/assets/logo.png';

const Home: React.FC = () => {
  const { t } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.7), hsl(23 50% 20% / 0.9)), url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex items-center justify-center gap-8 mb-8 animate-fade-in">
            <img src={logo} alt="Logo" className="w-24 h-24 opacity-30 hidden md:block" />
            <h1 className="text-4xl md:text-6xl font-kufi text-white">
              {t('مؤسسة ديوان الخليج للمقاولات العامة', 'Diwan Al Khaleej General Contracting')}
            </h1>
            <img src={logo} alt="Logo" className="w-24 h-24 opacity-30 hidden md:block" />
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center mt-12 animate-fade-in-up">
            <Button 
              onClick={() => scrollToSection('about-preview')}
              className="btn-primary"
            >
              <ArrowDown className="w-5 h-5 ml-2" />
              {t('من نحن', 'About Us')}
            </Button>
            <Button 
              onClick={() => scrollToSection('contact-preview')}
              className="btn-secondary"
            >
              <Phone className="w-5 h-5 ml-2" />
              {t('اتصل بنا', 'Contact Us')}
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section id="about-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="section-title">
                {t('نبذة عنا', 'About Us')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {t(
                  'تأسست مؤسسة ديوان الخليج للمقاولات العامة وفقًا لمعايير فريدة. خبرة عميقة نستلهم منها رؤيتنا الراسخة لتقديم خدمات إنشائية تتسم بأعلى درجات الجودة والإتقان. نعمل على التطوير المستمر لرفع كفاءة المنظومة بسياسات وخطط استراتيجية، نطمح من خلالها إلى المساهمة الفعالة بإثراء مجتمعنا وكسب ثقة عملائنا عبر ترسيخ مبادئ المصداقية والمهنية والالتزام.',
                  'Diwan Al Khaleej General Contracting was established according to unique standards. Deep experience from which we draw our solid vision to provide construction services characterized by the highest levels of quality and perfection. We work on continuous development to raise the efficiency of the system with strategic policies and plans, through which we aspire to contribute effectively to enriching our community and earning the trust of our customers by establishing the principles of credibility, professionalism and commitment.'
                )}
              </p>
              <Button 
                onClick={() => window.location.href = '/about'}
                className="btn-primary"
              >
                {t('نبذة عنا', 'About Us')}
              </Button>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src={aboutImage} 
                alt="Construction" 
                className="rounded-xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Counter Section */}
      <CounterSection />

      {/* Services Slider */}
      <ServicesSlider />

      {/* Vision Section */}
      <section 
        className="parallax-section py-20"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.85), hsl(36 36% 45% / 0.9)), url(${heroBg})`,
          backgroundAttachment: 'fixed'
        }}
      >
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-4xl font-kufi mb-8">
            {t('رؤيتنا', 'Our Vision')}
          </h2>
          <p className="max-w-3xl mx-auto text-lg leading-relaxed mb-8">
            {t(
              'الاجتهاد والجديّة في العمل، الالتزام بمعايير الجودة والأمان، التطوير المستمر واحترام الوقت لنكون دائمًا في المقدمة.',
              'Diligence and seriousness in work, commitment to quality and safety standards, continuous development and respect for time to always be at the forefront.'
            )}
          </p>
          <p className="text-xl font-semibold">
            {t('المدير التنفيذي: المهندس خالد منيب', 'CEO: Engineer Khalid Munib')}
          </p>
        </div>
      </section>

      {/* Featured Project Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <img 
                src={project1} 
                alt="Featured Project" 
                className="rounded-xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <img 
                  src={aboutImage} 
                  alt="Project Detail 1" 
                  className="rounded-lg h-24 w-full object-cover"
                />
                <img 
                  src={project1} 
                  alt="Project Detail 2" 
                  className="rounded-lg h-24 w-full object-cover"
                />
                <img 
                  src={aboutImage} 
                  alt="Project Detail 3" 
                  className="rounded-lg h-24 w-full object-cover"
                />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="section-title">
                {t('أحد أفضل مشاريع شركتنا', 'One of Our Best Projects')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-semibold">
                  {t('شارع الفروسية – منطقة رقم 55، قطر', 'Al Furousiya Street - Area 55, Qatar')}
                </p>
                <p className="leading-relaxed">
                  {t(
                    'الجودة كانت دائمًا جزءًا من قيمنا الأساسية. نحن نؤمن بأن الجودة هي المفتاح لنجاح أي مشروع ولذلك نضعها في صميم كل ما نقوم به.',
                    'Quality has always been part of our core values. We believe that quality is the key to the success of any project and therefore we put it at the heart of everything we do.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section id="contact-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('تواصل معنا', 'Contact Us')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'نحن دائمًا هنا من أجلك. العميل قيمة ثابتة لدينا نضعه في أولوياتنا ونقدّم له أحدث الحلول في صناعة المقاولات.',
                'We are always here for you. The customer is a constant value for us, we prioritize them and provide them with the latest solutions in the contracting industry.'
              )}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('الموقع', 'Location')}
                </h3>
                <p className="text-muted-foreground">
                  {t(
                    'قطر – شارع الفروسية، مبنى رقم 292 – الدور الأول مكتب 8 (مقابل حديقة أسباير)',
                    'Qatar - Al Furousiya Street, Building No. 292 - First Floor Office 8 (Opposite Aspire Park)'
                  )}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('الهاتف', 'Phone')}
                </h3>
                <p className="text-muted-foreground" dir="ltr">
                  +974 55664404 / +974 77776682
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('البريد الإلكتروني', 'Email')}
                </h3>
                <p className="text-muted-foreground">
                  info@aatgco.com
                </p>
              </div>
            </div>
            
            <div className="h-96 rounded-xl overflow-hidden shadow-elegant">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1234567890123!2d51.4444!3d25.2666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzAwLjAiTiA1McKwMjYnNDAuMCJF!5e0!3m2!1sen!2sqa!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;