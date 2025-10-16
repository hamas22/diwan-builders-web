import React, { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import {
  Building,
  Wrench,
  Paintbrush,
  Home,
  Ruler,
  Shield,
} from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import sheed1 from "@/assets/sheed1.png";
import sheed2 from "@/assets/sheed2.png";
import sheed3 from "@/assets/sheed3.png";
import decor1 from "@/assets/decor1.png";
import decor2 from "@/assets/decor2.png";
import decor3 from "@/assets/decor3.png";
import decor4 from "@/assets/decor4.png";
import decor5 from "@/assets/decor5.png";
import decor6 from "@/assets/decor6.png";
import decor7 from "@/assets/decor7.png";
import decor8 from "@/assets/decor8.png";
import decor9 from "@/assets/decor9.png";
import decor10 from "@/assets/decor10.png";
import decor11 from "@/assets/decor11.png";
import decor12 from "@/assets/decor12.png";
import cera1 from "@/assets/cera1.png";
import cera2 from "@/assets/cera2.png";
import cera3 from "@/assets/cera3.png";
import cera4 from "@/assets/cera4.png";
import revo1 from "@/assets/revo1.png";
import shet from "@/assets/shet.png";
import eshraf from "@/assets/eshraf.png";

interface Service {
  id: number;
  icon: any;
  titleAr: string;
  titleEn: string;
  descriptionAr: string;
  descriptionEn: string;
  detailsAr: string;
  detailsEn: string;
  images: string[];
}

const Services: React.FC = () => {
  const { t } = useLanguage();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [galleryImages, setGalleryImages] = useState<string[] | null>(null);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  useEffect(() => {
    const revealOnScroll = () => {
      const sections = document.querySelectorAll(".service-section");
      sections.forEach((sec, index) => {
        const rect = sec.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          setTimeout(() => {
            setVisibleSections((prev) => [...new Set([...prev, index])]);
          }, index * 150);
        }
      });
    };
    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();
    return () => window.removeEventListener("scroll", revealOnScroll);
  }, []);

  const services: Service[] = [
    {
      id: 1,
      icon: Building,
      titleAr: "أعمال التشييد والبناء",
      titleEn: "Construction Works",
      descriptionAr: "تنفيذ مشاريع البناء من الأساسات حتى التسليم بأعلى جودة.",
      descriptionEn:
        "Executing construction projects from foundation to delivery with top quality.",
      detailsAr:
        "نقدم كافة أعمال البناء للمشاريع السكنية والتجارية والصناعية مع استخدام أفضل المواد.",
      detailsEn:
        "We handle all construction works for residential, commercial, and industrial projects using premium materials.",
      images: [sheed1, sheed2, sheed3],
    },
    {
      id: 2,
      icon: Wrench,
      titleAr: "الترميم",
      titleEn: "Renovation",
      descriptionAr: "ترميم وتجديد المباني القديمة لتبدو كالجديدة.",
      descriptionEn: "Renovating and restoring old buildings to look brand new.",
      detailsAr:
        "نقوم بأعمال الترميم الكامل والتقوية الإنشائية للمباني المتضررة أو القديمة.",
      detailsEn:
        "We provide full renovation and structural reinforcement for damaged or old buildings.",
      images: [revo1],
    },
    {
      id: 3,
      icon: Home,
      titleAr: "التشطيب العام",
      titleEn: "General Finishing",
      descriptionAr: "تشطيبات متكاملة بتصاميم أنيقة وجودة عالية.",
      descriptionEn:
        "Comprehensive finishing with elegant design and high quality.",
      detailsAr:
        "ننفذ جميع مراحل التشطيب من الأرضيات إلى الأسقف وفقًا لأحدث المعايير.",
      detailsEn:
        "We carry out all finishing stages from floors to ceilings with modern standards.",
      images: [shet],
    },
    {
      id: 4,
      icon: Paintbrush,
      titleAr: "الدهانات والديكورات الجبسية",
      titleEn: "Painting & Gypsum Decor",
      descriptionAr: "تنفيذ أجمل التصاميم الجبسية والدهانات الفاخرة.",
      descriptionEn: "Executing luxurious paint and gypsum designs.",
      detailsAr:
        "نقدم ديكورات جبسية مميزة ودهانات عصرية تضيف لمسة فخامة لكل مساحة.",
      detailsEn:
        "We provide elegant gypsum decorations and modern paints that add luxury to every space.",
      images: [
        decor1,
        decor2,
        decor3,
        decor4,
        decor5,
        decor6,
        decor7,
        decor8,
        decor9,
        decor10,
        decor11,
        decor12,
      ],
    },
    {
      id: 5,
      icon: Ruler,
      titleAr: "أعمال الرخام والسيراميك",
      titleEn: "Marble & Ceramic Works",
      descriptionAr: "تصميم وتركيب الرخام والسيراميك بدقة وأناقة.",
      descriptionEn:
        "Designing and installing marble and ceramic with precision and elegance.",
      detailsAr:
        "نوفر جميع أعمال الأرضيات والحوائط باستخدام أجود أنواع الرخام والسيراميك.",
      detailsEn:
        "We offer all flooring and wall works using high-quality marble and ceramic.",
      images: [cera1, cera2, cera3, cera4],
    },
    {
      id: 6,
      icon: Shield,
      titleAr: "الإشراف الهندسي",
      titleEn: "Engineering Supervision",
      descriptionAr: "إشراف هندسي دقيق لضمان تنفيذ المشروع بأعلى جودة.",
      descriptionEn:
        "Accurate engineering supervision to ensure top-quality project execution.",
      detailsAr:
        "يشرف مهندسونا المتخصصون على جميع مراحل التنفيذ لضمان الجودة والالتزام بالمواصفات.",
      detailsEn:
        "Our expert engineers supervise all execution phases to ensure quality and compliance.",
      images: [eshraf],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section
        className="relative py-32 text-white text-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(35,30,20,0.85), rgba(90,70,40,0.85)), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <h1 className="text-5xl md:text-6xl font-kufi mb-6 animate-fade-in">
          {t("خدماتنا", "Our Services")}
        </h1>
        <p className="text-xl max-w-3xl mx-auto animate-fade-in-up">
          {t(
            "نقدم مجموعة شاملة من خدمات المقاولات والبناء بأعلى معايير الجودة",
            "We offer a comprehensive range of contracting and construction services with the highest quality standards"
          )}
        </p>

        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-gray-200 to-transparent"></div>
      </section>

      {/* Services Section */}
      <section className="py-24 container mx-auto px-6 space-y-32 bg-gray-200">
        {services.map((service, index) => {
          const isEven = index % 2 === 0;
          const hasImages = service.images.length > 0;

          return (
            <div
              key={service.id}
              className={`service-section flex flex-col lg:flex-row items-center gap-12 transition-all duration-700 ${
                visibleSections.includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${!isEven ? "lg:flex-row-reverse" : ""}`}
            >
              {/* Image Section */}
              <div className="flex-1 flex flex-col justify-center items-center">
                {hasImages ? (
                  <div className="w-full space-y-5">
                    <div className="overflow-hidden rounded-xl shadow-xl">
                      <img
                        src={service.images[0]}
                        alt={service.titleEn}
                        className="w-full h-[350px] object-cover hover:scale-105 transition-transform duration-700 cursor-pointer"
                        onClick={() => setSelectedImage(service.images[0])}
                      />
                    </div>

                    {/* Thumbnails */}
                    {service.images.length > 1 && (
                      <div className="flex gap-3 justify-center flex-wrap">
                        {service.images.slice(1, 4).map((img, i) => (
                          <img
                            key={i}
                            src={img}
                            alt=""
                            className="w-24 h-24 object-cover rounded-lg shadow-md cursor-pointer hover:scale-110 transition-all duration-500"
                            onClick={() => setSelectedImage(img)}
                          />
                        ))}

                        {service.images.length > 4 && (
                          <button
                            onClick={() => setGalleryImages(service.images)}
                            className="px-4 py-2 bg-amber-600 text-white text-sm rounded-lg hover:bg-amber-700 transition"
                          >
                            {t("عرض المزيد", "View More")}
                          </button>
                        )}
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="bg-gray-100 rounded-xl p-16 text-center w-full shadow-inner">
                    <service.icon className="w-20 h-20 mb-4 text-amber-600 mx-auto" />
                    <p className="text-gray-500 text-lg">
                      {t("لا توجد صور متاحة", "No images available")}
                    </p>
                  </div>
                )}
              </div>

              {/* Text Section */}
              <div className="flex-1">
                <div className="relative bg-white/80 backdrop-blur-md p-8 rounded-2xl shadow-lg border-card">
                  <service.icon className="w-14 h-14 text-amber-600 mb-4" />
                  <h3 className="text-3xl font-semibold mb-4 text-gray-800">
                    {t(service.titleAr, service.titleEn)}
                  </h3>
                  <p className="text-gray-600 text-lg mb-4">
                    {t(service.descriptionAr, service.descriptionEn)}
                  </p>
                  <p className="text-gray-500 leading-relaxed">
                    {t(service.detailsAr, service.detailsEn)}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Image Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl p-0 bg-transparent border-none shadow-none flex justify-center items-center">
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Full view"
              className="max-h-[80vh] max-w-[90%] object-contain rounded-lg shadow-2xl"
            />
          )}
        </DialogContent>
      </Dialog>

      {/* Gallery Dialog */}
      <Dialog
        open={!!galleryImages}
        onOpenChange={() => setGalleryImages(null)}
      >
        <DialogContent className="max-w-5xl bg-white p-6 rounded-xl">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages?.map((img, i) => (
              <img
                key={i}
                src={img}
                alt=""
                className="w-full h-48 object-cover rounded-lg cursor-pointer hover:scale-105 transition-all duration-500"
                onClick={() => setSelectedImage(img)}
              />
            ))}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Services;

/* ✨ Extra CSS ✨ */
const style = document.createElement("style");
style.innerHTML = `
.border-card {
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
}
.border-card::before,
.border-card::after {
  content: "";
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  transition: all 0.4s ease;
}
.border-card::before {
  top: 0;
  right: 0;
  border-top: 3px solid #b45309;
  border-right: 3px solid #b45309;
}
.border-card::after {
  bottom: 0;
  left: 0;
  border-bottom: 3px solid #b45309;
  border-left: 3px solid #b45309;
}
.border-card:hover::before,
.border-card:hover::after {
  width: 100%;
  height: 100%;
  border-radius: 20px;
}
`;
document.head.appendChild(style);
