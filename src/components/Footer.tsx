import React, { useState } from 'react';
import { Send, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: t('تم الإرسال بنجاح', 'Sent Successfully'),
      description: t('سنتواصل معك قريباً', 'We will contact you soon'),
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-4">
        {/* Contact Info Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-12 animate-fade-in">
          <div className="flex items-start gap-3 group">
            <MapPin className="w-6 h-6 mt-1 opacity-80 group-hover:animate-bounce-soft" />
            <div>
              <h4 className="font-semibold mb-1">{t('العنوان', 'Address')}</h4>
              <p className="text-sm opacity-90">
                {t('قطر – شارع الفروسية، مبنى رقم 292', 'Qatar - Al Furousiya Street, Building 292')}
              </p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <Phone className="w-6 h-6 mt-1 opacity-80 group-hover:animate-bounce-soft" />
            <div>
              <h4 className="font-semibold mb-1">{t('الهاتف', 'Phone')}</h4>
              <p className="text-sm opacity-90">+974 55664404</p>
              <p className="text-sm opacity-90">+974 77776682</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <Mail className="w-6 h-6 mt-1 opacity-80 group-hover:animate-bounce-soft" />
            <div>
              <h4 className="font-semibold mb-1">{t('البريد الإلكتروني', 'Email')}</h4>
              <p className="text-sm opacity-90">info@aatgco.com</p>
            </div>
          </div>
          
          <div className="flex items-start gap-3 group">
            <Clock className="w-6 h-6 mt-1 opacity-80 group-hover:animate-bounce-soft" />
            <div>
              <h4 className="font-semibold mb-1">{t('ساعات العمل', 'Working Hours')}</h4>
              <p className="text-sm opacity-90">
                {t('السبت - الخميس: 8:00 ص - 5:00 م', 'Sat - Thu: 8:00 AM - 5:00 PM')}
              </p>
            </div>
          </div>
        </div>
        
        {/* Quote Form */}
        <div className="mb-12 p-8 bg-white/5 backdrop-blur-sm rounded-2xl animate-fade-in-up">
          <h2 className="text-3xl font-kufi mb-8 text-center animate-float">
            {t('لطلب عرض سعر لمشروعك', 'Request a Quote for Your Project')}
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder={t('الاسم الكامل', 'Full Name')}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl transition-all duration-300 focus:bg-white/15"
              />
              <Input
                type="tel"
                placeholder={t('رقم الهاتف', 'Phone Number')}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl transition-all duration-300 focus:bg-white/15"
              />
            </div>
            <Textarea
              placeholder={t('رسالتك', 'Your Message')}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={4}
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/60 rounded-xl transition-all duration-300 focus:bg-white/15"
            />
            <Button 
              type="submit"
              className="w-full bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white font-semibold py-3 flex items-center justify-center gap-2 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-luxury"
            >
              <Send className="w-5 h-5 animate-pulse-soft" />
              {t('إرسال', 'Submit')}
            </Button>
          </form>
        </div>
        
        <div className="border-t border-white/20 pt-8 text-center">
          <p className="text-sm opacity-90">
            © 2024 {t('مؤسسة ديوان الخليج للمقاولات العامة', 'Diwan Al Khaleej General Contracting')}
          </p>
          <p className="text-xs mt-2 opacity-70">
            {t('جميع الحقوق محفوظة', 'All Rights Reserved')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;