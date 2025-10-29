import React from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { motion } from 'framer-motion';

import jotun from '@/assets/jotun.png';
import jazeera from '@/assets/jazeera2.png';
import partner2 from '@/assets/benaa.png';
import partner3 from '@/assets/tawn.png';
import partner4 from '@/assets/medad.png';
import partner5 from '@/assets/inovest.png';
import partner6 from '@/assets/group.png';

const partners = [
  { img: jotun },
  { img: jazeera },
  { img: partner2 },
  { img: partner3 },
  { img: partner4 },
  { img: partner5 },
  { img: partner6 },
];

const PartnerSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section className="relative py-8 overflow-hidden">
      <div className="container mx-auto relative px-4 py-6 rounded-[2rem] border-[4px] border-[#c99737] bg-gradient-to-br from-[#3a260f] via-[#4a2f13] to-[#3a260f] shadow-[0_0_25px_rgba(201,151,55,0.6)] backdrop-blur-sm">

        <div className="text-center mb-10">
          <div className="inline-block px-6 py-3 rounded-xl border-2 border-[#c99737] shadow-[0_0_20px_rgba(201,151,55,0.4)] bg-[#4a2f13]/70 backdrop-blur-md">
            <h2 className="text-2xl md:text-4xl font-kufi text-white font-bold tracking-wide drop-shadow-md">
              {t('شركاؤنا', 'Our Partners')}
            </h2>
          </div>
        </div>

        <div className="flex justify-center gap-10 mb-14 flex-wrap">
          {partners.slice(0, 2).map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/80 rounded-2xl border-2 border-[#c99737]/70 shadow-[0_0_20px_rgba(201,151,55,0.4)] hover:shadow-[0_0_25px_rgba(201,151,55,0.7)] p-4 w-[150px] md:w-[170px] flex items-center justify-center hover:scale-110 transition-all duration-500"
            >
              <img
                src={partner.img}
                alt="Partner logo"
                className="w-full h-full object-contain rounded-xl transition-transform duration-500 group-hover:scale-125"
              />
            </motion.div>
          ))}
        </div>

        <div className="flex justify-center flex-wrap gap-8 md:gap-12">
          {partners.slice(2).map((partner, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              viewport={{ once: true }}
              className="group bg-white/100 rounded-xl border-2 border-[#c99737]/70 shadow-[0_0_15px_rgba(201,151,55,0.4)] hover:shadow-[0_0_25px_rgba(201,151,55,0.7)] p-4 w-[110px] md:w-[130px] flex items-center justify-center hover:scale-110 transition-all duration-500"
            >
              <img
                src={partner.img}
                alt="Partner logo"
                className="w-full h-full object-contain rounded-lg group-hover:scale-125 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSection;
