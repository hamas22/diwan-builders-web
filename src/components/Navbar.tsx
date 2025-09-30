import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import logo from '@/assets/logo.png';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: '/', labelAr: 'الرئيسية', labelEn: 'Home' },
    { path: '/about', labelAr: 'من نحن', labelEn: 'About Us' },
    { path: '/services', labelAr: 'خدماتنا', labelEn: 'Our Services' },
    { path: '/contact', labelAr: 'تواصل معنا', labelEn: 'Contact Us' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-md shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <img src={logo} alt="Diwan Al Khaleej" className="h-14 w-14 object-contain" />
            <div className="hidden md:block">
              <h1 className="text-2xl font-kufi text-primary">
                {t('مؤسسة ديوان الخليج', 'Diwan Al Khaleej')}
              </h1>
              <p className="text-sm text-muted-foreground">
                {t('للمقاولات العامة', 'General Contracting')}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-colors duration-300 hover:text-primary ${
                  isActive(item.path) ? 'text-primary border-b-2 border-primary' : 'text-foreground'
                }`}
              >
                {t(item.labelAr, item.labelEn)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language === 'ar' ? 'EN' : 'AR'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground hover:text-primary transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block py-3 px-4 text-lg font-medium transition-colors duration-300 hover:bg-primary/10 ${
                  isActive(item.path) ? 'text-primary bg-primary/5' : 'text-foreground'
                }`}
              >
                {t(item.labelAr, item.labelEn)}
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="w-full text-start py-3 px-4 flex items-center gap-2 hover:bg-primary/10 transition-colors"
            >
              <Globe className="w-5 h-5" />
              <span className="font-medium">{language === 'ar' ? 'English' : 'العربية'}</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;