import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Phone } from 'lucide-react';
import CounterSection from '@/components/CounterSection';
import ServicesSlider from '@/components/ServicesSlider';
import pro1 from '@/assets/pro1.png';
import pro2 from '@/assets/pro2.png';
import pro3 from '@/assets/pro3.png'; 
import pro4 from '@/assets/pro4.png'; 
import hero from '@/assets/final.png'; 
import hero1 from '@/assets/final1.png'; 

import about from '@/assets/about-image.jpg'; 
import mentor from '@/assets/mentor.png'; 


import { Link } from "react-router-dom";

const Home: React.FC = () => {
  const { t, lang } = useLanguage();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
<section className="relative h-[70vh] md:h-[80vh] lg:h-[100vh] overflow-hidden">
  <div className="absolute inset-0">
    <img
      src={hero}
      alt="Hero"
      className="w-full h-full object-cover object-center z-0 "
    />
  </div>


    <div className="absolute inset-0 z-30">
    <img
      src={hero1}
      alt="Hero"
      className="w-full h-full object-cover object-center "
    />

  </div>


    <div className="relative flex items-center justify-start h-full md:px-16" dir="ltr">
    <div className="text-center">
      <h1
        className={` z-10 relative inline-block font-kufi font-bold text-white transition-all duration-500  ${
          lang === 'ar'
            ? 'text-[20px] md:text-3xl lg:text-[50px] leading-snug'
            : 'text-1xl md:text-4xl lg:text-4xl leading-tight'
        }`}
      >
<span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-[90px] sm:h-[110px] md:h-[130px] lg:h-[150px] bg-[#c97f23] -z-20"></span>

        {t('ديوان الخليج للمقاولات العامة', 'Diwan Al Khaleej General Contracting')}
      </h1>
      <div className="flex flex-col md:flex-row gap-4 mt-20 lg:mt-[220px] items-center justify-center z-40 relative">
        <Link to="/about">
          <Button
            className="px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-full shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center gap-2"
          >
            <ArrowDown className="w-6 h-6 lg:w-7 lg:h-7 animate-bounce" />
            {t('من نحن', 'About us')}
          </Button>
        </Link>

        <Link to="/contact">
          <Button
            className="px-8 lg:px-12 py-4 lg:py-5 text-lg lg:text-xl border-2 border-white-950 text-white rounded-full shadow-lg bg-transparent hover:bg-gradient-to-r hover:from-orange-500 hover:to-white-500 hover:text-white hover:scale-110 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center gap-2"
          >
            <Phone className="w-6 h-6 lg:w-7 lg:h-7 transition-transform duration-500 group-hover:rotate-12" />
            {t('اتصل الآن', 'Call Now')}
          </Button>
        </Link>
      </div>
    </div>
  </div>



  {/* المحتوى */}

  {/* Scroll Indicator */}
   <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce z-30">
    <button
      onClick={() => scrollToSection('about-preview')}
      className="text-white hover:text-white/80 transition-colors"
    >
      <ArrowDown className="w-8 h-8" />
    </button>

  </div>
</section>



      {/* About Section */}
      <section id="about-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="section-title">
                {t('نبذة عنا', 'About Us')}
              </h2>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8">
                {t(
                  'تأسست مؤسسة ديوان الخليج للمقاولات العامة لتكون نموذجاً في الإبداع الهندسي والالتزام بالجودة العالية. نعمل على تنفيذ مشاريعنا بمعايير دقيقة تضمن رضا عملائنا وتحقق استدامة حقيقية في كل تفاصيل البناء.',
                  'Diwan Al Khaleej General Contracting was founded to be a model of engineering creativity and high-quality commitment. We execute our projects with precise standards to ensure client satisfaction and real sustainability in every detail of construction.'
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
                src={about} 
                alt="Construction" 
                className="rounded-xl shadow-elegant w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <ServicesSlider />

      {/* Vision Section */}
<section
  className="parallax-section py-24 relative overflow-hidden"
  style={{
    backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.85), hsl(36 36% 45% / 0.9)), url(${pro1})`,
    backgroundAttachment: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
    <div
      className="relative group flex justify-center md:justify-start w-full md:w-1/2"
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <div className="absolute -inset-8 opacity-[25%] z-0 hidden sm:block">
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-600 via-orange-500 to-amber-400 rounded-full blur-2xl animate-spin-slower" />
        <div className="absolute inset-0 bg-gradient-to-l from-amber-500 via-yellow-500 to-orange-500 rounded-full blur-2xl animate-pulse-slow opacity-50" />
      </div>

      <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 flex items-end justify-center">
        <div className="absolute inset-0 rounded-full border-4 border-white/20 z-0 group-hover:border-white/40 transition-all duration-700" />
        <img
          src={mentor}
          alt="CEO"
          className="relative z-10 w-[115%] h-[115%] object-cover rounded-full transform transition-all duration-700 group-hover:scale-[1.2] group-hover:rotate-2 origin-bottom"
          loading="lazy"
        />
      </div>
    </div>

    {/* ديف الرؤية */}
<div
  className="mx-auto max-w-4xl lg:ml-56 bg-white/10 backdrop-blur-md border border-white/20 rounded-3xl shadow-2xl p-6 sm:p-8 md:p-10 text-white animate-fade-in text-right w-full md:w-3/4 lg:w-1/2"
  dir="rtl"
  data-aos="fade-left"
  data-aos-duration="1000"
>
  <h2 className="text-3xl sm:text-4xl md:text-5xl font-kufi mb-4 sm:mb-6 text-yellow-300 drop-shadow-lg text-center">
    {t("رؤيتنا", "Our Vision")}
  </h2>

  <p className="text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 text-justify sm:text-right">
    {t(
      "نسعى إلى الريادة في عالم المقاولات عبر تقديم حلول هندسية متكاملة ومستدامة، تجمع بين الجودة، الإبداع، والدقة في التنفيذ لنصنع مستقبلاً عمرانيًا يليق بوطننا.",
      "We strive to lead the contracting world by offering integrated and sustainable engineering solutions that combine quality, creativity, and precision to build a better future."
    )}
  </p>

  <p className="text-lg sm:text-xl font-semibold text-orange-300 mt-4 text-center md:text-right">
    {t(
      "الرئيس التنفيذي: المهندس محمد سعيد الجدي",
      "CEO: Engineer Mohamed Saeid Al Jadi"
    )}
  </p>
</div>

  </div>

  <style>{`
    @keyframes spin-slower {
      to {
        transform: rotate(360deg);
      }
    }
    @keyframes pulse-slow {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    .animate-spin-slower {
      animation: spin-slower 12s linear infinite;
    }
    .animate-pulse-slow {
      animation: pulse-slow 4s ease-in-out infinite;
    }
  `}</style>
</section>




      {/* Project Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-4">
              <img 
                src={pro1} 
                alt="Featured Project" 
                className="rounded-xl shadow-elegant w-full h-96 object-cover"
              />
              <div className="grid grid-cols-3 gap-4">
                <img src={pro2} alt="Project Detail 1" className="rounded-lg h-24 w-full object-cover" />
                <img src={pro3} alt="Project Detail 2" className="rounded-lg h-24 w-full object-cover" />
                <img src={pro4} alt="Project Detail 3" className="rounded-lg h-24 w-full object-cover" />
              </div>
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="section-title">
                {t('أحد أفضل مشاريع شركتنا', 'One of Our Best Projects')}
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
  {t(
    "المنطقة الشرقية - الدمام - حي مدينة العمال - شارع بلال بن رباح",
    "Eastern Province - Dammam - Al-Omal District - Bilal Bin Rabah Street"
  )}
</p>

                <p className="leading-relaxed">
                  {t(
                    'يُعد هذا المشروع من أبرز إنجازاتنا التي تعكس التزامنا بالجودة والدقة في التنفيذ. استخدمنا فيه أحدث المواد والتقنيات لضمان مستوى متميز من المتانة والجمال.',
                    'This project stands as one of our major achievements, reflecting our commitment to quality and precision. We used advanced materials and techniques to ensure durability and beauty.'
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CounterSection />


      {/* Contact Section */}
      <section id="contact-preview" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">
              {t('تواصل معنا', 'Contact Us')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t(
                'يسعدنا تواصلك معنا لأي استفسارات أو تعاون مستقبلي. فريقنا دائمًا جاهز لخدمتك.',
                'We are delighted to hear from you for any inquiries or future collaborations. Our team is always ready to assist you.'
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
                        "المنطقة الشرقية - الدمام - حي مدينة العمال - شارع بلال بن رباح",
    "Eastern Province - Dammam - Al-Omal District - Bilal Bin Rabah Street"
)}
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2 text-primary">
                  {t('الهاتف', 'Phone')}
                </h3>
                <p className="text-muted-foreground" dir="ltr">
                  +966 500 912 995
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
