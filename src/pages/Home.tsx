import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone } from 'lucide-react';
import CounterSection from '@/components/CounterSection';
import ServicesSlider from '@/components/ServicesSlider';
import aboutImage from '@/assets/about-image.jpg';
import project1 from '@/assets/project1.jpg';
import { supabase } from '@/integrations/supabase/client';
import { Link } from "react-router-dom";

// Hero Type
type Hero = {
  id: string;
  title_ar: string;
  title_en: string;
  button1_text_ar: string;
  button1_text_en: string;
  button2_text_ar: string;
  button2_text_en: string;
  image_url: string;
};

const emptyHero = (): Hero => ({
  id: '',
  title_ar: '',
  title_en: '',
  button1_text_ar: '',
  button1_text_en: '',
  button2_text_ar: '',
  button2_text_en: '',
  image_url: '',
});

const Home: React.FC = () => {
  const { t, lang } = useLanguage();
  const [heroData, setHeroData] = useState<Hero>(emptyHero());

  useEffect(() => {
    fetchHeroData();
  }, []);

  const fetchHeroData = async () => {
    try {
      const { data, error } = await supabase
        .from('hero_sections')
        .select('*')
        .limit(1)
        .single();

      if (error) {
        console.error('Fetch hero error:', error);
        return;
      }

      if (data) {
        setHeroData(data as Hero);
      }
    } catch (err) {
      console.error('Unexpected fetchHeroData error:', err);
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <img
            src={heroData.image_url || '/default-hero.jpg'}
            alt="Hero"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>

<div className="relative z-10 flex items-center h-full md:px-16" dir="ltr">
  <div className="w-full ">
    <h1 className="text-3xl md:text-5xl lg:text-7xl md:mt-[-100px] md:ml-[-150px] mr-40 lg:ml-20  font-bold text-white leading-snug break-words lg:mt-[-100px] max-w-xl text-right">
      {lang === "ar" ? heroData.title_ar : heroData.title_en}
    </h1>
<div className="flex flex-col md:flex-row gap-4 mt-20 lg:mt-[200px] items-start">
 <Link to="/contact">
  <Button
    className="px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center gap-2"
  >
    <ArrowDown className="w-6 h-6 lg:w-7 lg:h-7 animate-bounce" />
    {lang === "ar" ? heroData.button1_text_ar : heroData.button1_text_en}
  </Button>
</Link>

<Link to="/about">
  <Button
    className="px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl border-2 border-red-950 text-red-950 rounded-full shadow-lg bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-white-500 hover:text-white hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center gap-2"
  >
    <Phone className="w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-500 group-hover:rotate-12" />
    {lang === "ar" ? heroData.button2_text_ar : heroData.button2_text_en}
  </Button>
</Link>
</div>

  </div>
</div>



        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
          <button
            onClick={() => scrollToSection('about-preview')}
            className="text-white hover:text-white/80 transition-colors"
          >
            <ArrowDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      <section id="about-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="section-title">
                {t('نبذة عنا', 'About Us')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {t(
                  'تأسست مؤسسة ديوان الخليج للمقاولات العامة وفقًا لمعايير فريدة...',
                  'Diwan Al Khaleej General Contracting was established according to unique standards...'
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

      <CounterSection />
      <ServicesSlider />

<section 
  className="parallax-section py-20"
  style={{
    backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.85), hsl(36 36% 45% / 0.9)), url(${heroData.image_url || '/default-hero.jpg'})`,
    backgroundAttachment: 'fixed'
  }}
>
  <div className="container mx-auto px-4 flex justify-center items-center">
    <div className="max-w-4xl bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl p-10 text-center text-white animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-kufi mb-6 text-yellow-300 drop-shadow-lg">
        {t('رؤيتنا', 'Our Vision')}
      </h2>
      <p className="text-lg md:text-xl leading-relaxed mb-6">
        {t(
          'نسعى إلى أن نكون روادًا في مجال التصميم والبناء عبر تقديم حلول مبتكرة ومستدامة، تجمع بين الجمال، الجودة، والدقة في التنفيذ. رؤيتنا أن نصنع بيئة عمرانية تلهم الأجيال وتحقق قيمة حقيقية للمجتمع.',
          'We aspire to be pioneers in the field of design and construction by providing innovative and sustainable solutions that combine beauty, quality, and precision. Our vision is to create an architectural environment that inspires generations and delivers real value to society.'
        )}
      </p>
      <p className="text-xl font-semibold text-orange-300 mt-4">
        {t('المدير التنفيذي: المهندس محمد سعيد الجدي', 'CEO: Engineer Mohamed Saeid')}
      </p>
    </div>
  </div>
</section>


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
                <img src={aboutImage} alt="Project Detail 1" className="rounded-lg h-24 w-full object-cover" />
                <img src={project1} alt="Project Detail 2" className="rounded-lg h-24 w-full object-cover" />
                <img src={aboutImage} alt="Project Detail 3" className="rounded-lg h-24 w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="section-title">
                {t('أحد أفضل مشاريع شركتنا', 'One of Our Best Projects')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg font-semibold">
                  {t('المنطقة الشرقية - الدمام', 'Dammam-Zahran-Khobar-Ahsa')}
                </p>
                <p className="leading-relaxed">
                  {t(
                    'الجودة كانت دائمًا جزءًا من قيمنا الأساسية...',
                    'Quality has always been part of our core values...'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('تواصل معنا', 'Contact Us')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'نحن دائمًا هنا من أجلك...',
                'We are always here for you...'
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
                    'المنطقة الشرقية - الدمام...',
                    'Eastern Province - Dammam...'
                  )}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('الهاتف', 'Phone')}
                </h3>
                <p className="text-muted-foreground" dir="ltr">
                  +0500912995 / +966 500 912 995
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('البريد الإلكتروني', 'Email')}
                </h3>
                <p className="text-muted-foreground">
                  diwan.alkhalij.est@gmail.com
                </p>
              </div>
            </div>
            
<div className="h-96 rounded-xl overflow-hidden shadow-elegant">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.3344559904951!2d50.1111792!3d26.4242269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb927b7f9dd7%3A0xf333326a78a7ec22!2z2YXYpNiz2LPYqSDYr9mK2YjYp9mGINin2YTYrtmE2YrYrCDZhNmE2YXZgtin2YjZhNin2Kog2KfZhNi52KfZhdip!5e1!3m2!1sen!2seg!4v1759434395153!5m2!1sen!2seg"
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
