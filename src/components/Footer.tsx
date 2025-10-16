import React, { useState } from "react";
import { Send, MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import logo from "@/assets/logoo.png";
import emailjs from "emailjs-com";
import { supabase } from "@/lib/supabaseClient"; // ✅ تأكدي من المسار

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    image: null as File | null,
  });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      let imageUrl = "";

      if (formData.image) {
        const fileName = `${Date.now()}_${formData.image.name}`;
        const { data, error } = await supabase.storage
          .from("uploads") 
          .upload(fileName, formData.image);

        if (error) throw error;

        const { data: publicUrlData } = supabase.storage
          .from("uploads")
          .getPublicUrl(fileName);

        imageUrl = publicUrlData.publicUrl;
      }

      await emailjs.send(
        "service_fyvejxu", // ID الخدمة
        "template_qldbw3b", // ID التمبلت
        {
          name: formData.name,
          phone: formData.phone,
          email1: formData.email,
          message: formData.message,
          image_url: imageUrl || "No image uploaded",
        },
        "C3M0YROcBqpbbk2iC" 
      );

      toast({
        title: t("تم الإرسال بنجاح", "Sent Successfully"),
        description: t("سنتواصل معك قريباً", "We will contact you soon"),
      });

      setFormData({
        name: "",
        phone: "",
        email: "",
        message: "",
        image: null,
      });
    } catch (error: any) {
      toast({
        title: t("حدث خطأ", "Error Occurred"),
        description: error.message || "Upload failed",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-gradient-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Form Section */}
          <div className="md:col-span-2 bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl md:text-3xl font-kufi mb-6 text-center">
              {t("لطلب عرض سعر لمشروعك", "Request a Quote for Your Project")}
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Input
                  placeholder={t("الاسم الكامل", "Full Name")}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl"
                />
                <Input
                  type="tel"
                  placeholder={t("رقم الهاتف", "Phone Number")}
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  required
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl"
                />
              </div>

              <Input
                type="email"
                placeholder={t("البريد الإلكتروني", "Email")}
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl"
              />

              <Textarea
                placeholder={t("رسالتك", "Your Message")}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                required
                rows={4}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/70 rounded-xl"
              />

              <input
                type="file"
                accept="image/*"
                onChange={(e) =>
                  setFormData({
                    ...formData,
                    image: e.target.files?.[0] || null,
                  })
                }
                className="bg-white/10 border-white/20 text-white rounded-xl p-2 w-full"
              />

              <Button
                type="submit"
                disabled={loading}
                className="w-full bg-white/20 hover:bg-white/30 text-white font-semibold py-3 flex items-center justify-center gap-2 rounded-xl transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 animate-pulse-soft" />
                {loading ? t("جارٍ الإرسال...", "Sending...") : t("إرسال", "Submit")}
              </Button>
            </form>
          </div>

          {/* Info Section */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-4">
              <img src={logo} alt="Company Logo" className="h-12 w-auto" />
              <div>
                <h3 className="text-xl font-bold">
                  {t("مؤسسة ديوان الخليج", "Diwan Al Khaleej")}
                </h3>
                <p className="text-sm opacity-80">
                  {t(
                    "للمقاولات العامة - أكثر من 14 عاماً من الخبرة",
                    "General Contracting - 14+ Years of Excellence"
                  )}
                </p>
              </div>
            </div>

            <p className="text-sm leading-relaxed opacity-90">
              {t(
                "نحن متخصصون في تنفيذ مشاريع المقاولات والبناء والتشطيبات وفق أعلى معايير الجودة والاحترافية، لنحقق رؤية عملائنا بأفضل صورة.",
                "We specialize in executing contracting, construction, and finishing projects with the highest standards of quality and professionalism, bringing our clients' vision to life."
              )}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-6 text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {t("العنوان", "Address")}
                  </h4>
                  <p>
                    {t(
                      "المنطقة الشرقية - الدمام...",
                      "Eastern Province - Dammam.."
                    )}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {t("الهاتف", "Phone")}
                  </h4>
                  <p>+0500912995</p>
                  <p>+966 500 912 995</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">
                    {t("البريد الإلكتروني", "Email")}
                  </h4>
                  <p>diwan.alkhalij.est@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-6 text-center text-sm opacity-80">
          <p>
            © 2025{" "}
            {t(
              "مؤسسة ديوان الخليج للمقاولات العامة",
              "Diwan Al Khaleej General Contracting"
            )}
          </p>
          <p className="text-xs mt-2">
            {t("جميع الحقوق محفوظة", "All Rights Reserved")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
