import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import logo from "@/assets/logoo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { lang, toggleLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", labelAr: "الرئيسية", labelEn: "Home" },
    { path: "/about", labelAr: "من نحن", labelEn: "About Us" },
    { path: "/services", labelAr: "خدماتنا", labelEn: "Our Services" },
    { path: "/contact", labelAr: "تواصل معنا", labelEn: "Contact Us" },
  ];

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full mt-5 transition-all duration-300 z-50">
      <div
        className={`container mx-auto px-4 py-4 transition-all duration-300 border border-[#680F67] shadow-lg 
          ${isScrolled ? "bg-background/95 backdrop-blur-sm" : "bg-background/40 backdrop-blur-lg"} 
          md:rounded-full rounded-none`}
      >
        <div className="flex items-center justify-between">
          {/* Logo + Title */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse group">
            <img
              src={logo}
              alt="Diwan Al Khaleej"
              className="h-12 w-12 object-contain rounded-full transition-transform duration-300 group-hover:scale-110"
            />
            <div>
              <h1 className="text-lg md:text-xl font-kufi text-primary transition-colors duration-300">
                {t("مؤسسة ديوان الخليج", "Diwan Al Khaleej")}
              </h1>
              <p className="text-xs md:text-sm text-muted-foreground">
                {t("للمقاولات العامة", "General Contracting")}
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-lg font-medium transition-all duration-300 relative group ${
                  isActive(item.path)
                    ? "text-primary"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {t(item.labelAr, item.labelEn)}
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    isActive(item.path) ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </Link>
            ))}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-elegant hover:shadow-soft transition-all duration-300 hover:scale-105"
            >
              <Globe className="w-5 h-5 animate-pulse-soft" />
              <span className="font-medium">{lang === "ar" ? "EN" : "AR"}</span>
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
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-lg font-medium transition-colors duration-300 hover:text-primary ${
                    isActive(item.path)
                      ? "text-primary font-semibold"
                      : "text-foreground"
                  }`}
                >
                  {t(item.labelAr, item.labelEn)}
                </Link>
              ))}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <Globe className="w-5 h-5" />
                <span className="font-medium">
                  {lang === "ar" ? "English" : "العربية"}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
