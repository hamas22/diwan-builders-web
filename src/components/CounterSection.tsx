import React, { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';

interface CounterItemProps {
  target: number;
  label: string;
  suffix: string;
}

const CounterItem: React.FC<CounterItemProps> = ({ target, label, suffix }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, target]);

  return (
    <div ref={ref} className="text-center animate-counter">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2 animate-glow">
        {count}{suffix}
      </div>
      <p className="text-lg text-white/90">{label}</p>
    </div>
  );
};

const CounterSection: React.FC = () => {
  const { t } = useLanguage();

  const counters = [
    { target: 20, suffix: '+', labelAr: 'مشاريع تم تسليمها', labelEn: 'Projects Delivered' },
    { target: 14, suffix: '', labelAr: 'سنة خبرة', labelEn: 'Years of Experience' },
    { target: 30, suffix: '', labelAr: 'مشروع تصميم خارجي', labelEn: 'Exterior Design Projects' },
    { target: 95, suffix: '+', labelAr: 'موظف موارد بشرية', labelEn: 'HR Employees' },
  ];

  return (
    <div className="parallax-section bg-fixed bg-cover bg-center relative">
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(180deg, hsl(23 50% 28% / 0.9), hsl(23 50% 20% / 0.95)), url('/images/parallax-bg.jpg')`
        }}
      />
      <div className="container mx-auto px-4 relative z-10 py-20">
        <h2 className="text-4xl md:text-5xl font-kufi text-white text-center mb-12">
          {t('إنجازات مؤسستنا', 'Our Achievements')}
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {counters.map((counter, index) => (
            <CounterItem
              key={index}
              target={counter.target}
              suffix={counter.suffix}
              label={t(counter.labelAr, counter.labelEn)}
            />
          ))}
        </div>
        
        <p className="text-center text-white/90 max-w-3xl mx-auto text-lg leading-relaxed">
          {t(
            'نؤمن بقدرتنا على تحقيق مستوى متميز في أسواق التصميم والبناء عبر تطبيق معايير الجودة، الاحترافية، والمصداقية بما يضمن لنا المنافسة محليًا وإقليميًا.',
            'We believe in our ability to achieve excellence in design and construction markets through applying quality standards, professionalism, and credibility, ensuring our competitiveness locally and regionally.'
          )}
        </p>
      </div>
    </div>
  );
};

export default CounterSection;