import React, { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import heroBg from '@/assets/hero-bg.jpg';

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
    toast({
      title: t('تم الإرسال بنجاح', 'Sent Successfully'),
      description: t('سنتواصل معك في أقرب وقت ممكن', 'We will contact you as soon as possible'),
    });
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      titleAr: 'العنوان',
      titleEn: 'Address',
      contentAr: 'قطر – شارع الفروسية، مبنى رقم 292 – الدور الأول مكتب 8',
      contentEn: 'Qatar - Al Furousiya Street, Building No. 292 - First Floor Office 8'
    },
    {
      icon: Phone,
      titleAr: 'الهاتف',
      titleEn: 'Phone',
      contentAr: '+974 55664404 / +974 77776682',
      contentEn: '+974 55664404 / +974 77776682'
    },
    {
      icon: Mail,
      titleAr: 'البريد الإلكتروني',
      titleEn: 'Email',
      contentAr: 'info@aatgco.com',
      contentEn: 'info@aatgco.com'
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
              <Card key={index} className="p-6 text-center hover:shadow-gold transition-shadow">
                <info.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
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
            <Card className="p-8">
              <h2 className="text-3xl font-kufi mb-8 text-primary">
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
                  className="w-full btn-primary flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" />
                  {t('إرسال الرسالة', 'Send Message')}
                </Button>
              </form>
            </Card>

            {/* Map */}
            <Card className="p-0 overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3608.1234567890123!2d51.4444!3d25.2666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjXCsDE2JzAwLjAiTiA1McKwMjYnNDAuMCJF!5e0!3m2!1sen!2sqa!4v1234567890123"
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
    </div>
  );
};

export default Contact;