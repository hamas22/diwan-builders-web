import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';
import emailjs from 'emailjs-com';

const Contact: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .send(
        "service_fyvejxu",   
        "template_swthfcg",  
        {
          name: formData.name,
          email1: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: "mazntulib229@gmail.com",
        },
        "C3M0YROcBqpbbk2iC" 
      )
      .then(
        () => {
          toast({
            title: t("تم الإرسال بنجاح", "Sent Successfully"),
            description: t("سنتواصل معك في أقرب وقت ممكن", "We will contact you as soon as possible"),
          });
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          toast({
            title: t("حدث خطأ", "Error Occurred"),
            description: error.text,
          });
        }
      );
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleAr: 'العنوان',
      titleEn: 'Address',
      contentAr: 'المنطقة الشرقية - الدمام - حي مدينة العمال - شارع بلال بن رباح',
      contentEn: 'Eastern Province - Dammam - Al-Omal District - Bilal Bin Rabah Street'
    },

  
    {
      icon: Phone,
      titleAr: 'الهاتف',
      titleEn: 'Phone',
      contentAr: ' 0500912995+ / 966 500 912 995+',
      contentEn: ' +0500912995 / +966 500 912 995'
    },
    {
      icon: Mail,
      titleAr: 'البريد الإلكتروني',
      titleEn: 'Email',
      contentAr: 'diwan.alkhalij.est@gmail.com',
      contentEn: 'diwan.alkhalij.est@gmail.com'
    },
    {
      icon: Clock,
      titleAr: 'ساعات العمل',
      titleEn: 'Working Hours',
      contentAr: 'السبت - الخميس: 8:00 ص - 5:00 م',
      contentEn: 'Sat - Thu: 8:00 AM - 5:00 PM'
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
            {t('تواصل معنا', 'Contact Us')}
          </h1>
          <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
            {t(
              'نحن هنا لمساعدتك في تحقيق مشروع أحلامك',
              'We are here to help you achieve your dream project'
            )}
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="p-6 text-center hover:shadow-luxury transition-all duration-300 hover:-translate-y-1 animate-fade-in group" 
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <info.icon className="w-12 h-12 mx-auto mb-4 text-primary group-hover:animate-float" />
                <h3 className="text-lg font-semibold mb-2">
                  {t(info.titleAr, info.titleEn)}
                </h3>
                <p className="text-muted-foreground">
                  {t(info.contentAr, info.contentEn)}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 shadow-luxury animate-fade-in-up">
              <h2 className="text-3xl font-kufi mb-8 text-primary animate-float">
                {t('أرسل لنا رسالة', 'Send Us a Message')}
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    placeholder={t('الاسم الكامل', 'Full Name')}
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                  />
                  <Input
                    type="email"
                    placeholder={t('البريد الإلكتروني', 'Email')}
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                  />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Input
                    type="tel"
                    placeholder={t('رقم الهاتف', 'Phone Number')}
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    required
                  />
                  <Input
                    placeholder={t('الموضوع', 'Subject')}
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                    required
                  />
                </div>
                
                <Textarea
                  placeholder={t('رسالتك', 'Your Message')}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  required
                  rows={6}
                />
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-primary text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5 animate-pulse-soft" />
                  {t('إرسال الرسالة', 'Send Message')}
                </Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="p-0 overflow-hidden shadow-luxury animate-fade-in-up rounded-2xl" style={{ animationDelay: '0.2s' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1728.3344559904951!2d50.1111792!3d26.4242269!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e49fb927b7f9dd7%3A0xf333326a78a7ec22!2z2YXYpNiz2LPYqSDYr9mK2YjYp9mGINin2YTYrtmE2YrYrCDZhNmE2YXZgtin2YjZhNin2Kog2KfZhNi52KfZhdip!5e1!3m2!1sen!2seg!4v1759434395153!5m2!1sen!2seg"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '500px' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Card>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-kufi mb-8 text-primary animate-fade-in">
            {t('تابعنا على وسائل التواصل الاجتماعي', 'Follow Us on Social Media')}
          </h2>
          
          <div className="flex justify-center gap-6 flex-wrap">
            {[
              { icon: Instagram, name: 'Instagram', link: 'https://www.instagram.com/diwan.alkhalij.est/', color: 'hover:text-pink-600', delay: '0.1s' },
              { icon: Facebook, name: 'Facebook', link: 'https://www.facebook.com/dywan.alkhlyj/', color: 'hover:text-blue-600', delay: '0.2s' },
              { 
                icon: () => (
                  <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                ), 
                name: 'TikTok', 
                link: 'https://www.tiktok.com/@diwan.alkhalij.est',
                color: 'hover:text-black', 
                delay: '0.3s' 
              },
              { icon: Twitter, name: 'Twitter', link: 'https://x.com/diwan_alkhalij?s=11&t=iFJQdqsULs2Lrf1zDVev2Q', color: 'hover:text-blue-400', delay: '0.4s' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`group p-4 bg-white rounded-xl shadow-soft transition-all duration-300 hover:shadow-luxury hover:-translate-y-1 animate-scale-up ${social.color}`}
                style={{ animationDelay: social.delay }}
              >
                <social.icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <p className="mt-2 text-sm font-medium text-muted-foreground group-hover:text-foreground">
                  {social.name}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
