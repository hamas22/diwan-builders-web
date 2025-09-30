import React, { useState } from 'react';
import { Send } from 'lucide-react';
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
        <div className="mb-12">
          <h2 className="text-3xl font-kufi mb-8 text-center">
            {t('لطلب عرض سعر لمشروعك', 'Request a Quote for Your Project')}
          </h2>
          
          <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Input
                placeholder={t('الاسم الكامل', 'Full Name')}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
              <Input
                type="tel"
                placeholder={t('رقم الهاتف', 'Phone Number')}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                required
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
              />
            </div>
            <Textarea
              placeholder={t('رسالتك', 'Your Message')}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
              required
              rows={4}
              className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/70"
            />
            <Button 
              type="submit"
              className="w-full bg-secondary hover:bg-secondary-light text-white font-semibold py-3 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
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