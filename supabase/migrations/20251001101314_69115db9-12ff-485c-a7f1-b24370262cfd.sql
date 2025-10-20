-- Create admin users table
CREATE TABLE public.admin_users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create hero sections table
CREATE TABLE public.hero_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  image_url TEXT,
  button1_text_ar TEXT,
  button1_text_en TEXT,
  button2_text_ar TEXT,
  button2_text_en TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create about sections table
CREATE TABLE public.about_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  content_ar TEXT NOT NULL,
  content_en TEXT NOT NULL,
  image_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create achievements table
CREATE TABLE public.achievements (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  number INTEGER NOT NULL,
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  icon TEXT,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create services table  
CREATE TABLE public.services (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create service images table
CREATE TABLE public.service_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  service_id UUID REFERENCES public.services(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Create vision sections table
CREATE TABLE public.vision_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  content_ar TEXT NOT NULL,
  content_en TEXT NOT NULL,
  ceo_name_ar TEXT,
  ceo_name_en TEXT,
  image_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create featured projects table
CREATE TABLE public.featured_projects (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title_ar TEXT NOT NULL,
  title_en TEXT NOT NULL,
  description_ar TEXT,
  description_en TEXT,
  location_ar TEXT,
  location_en TEXT,
  main_image_url TEXT,
  sort_order INTEGER DEFAULT 0,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create project images table
CREATE TABLE public.project_images (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id UUID REFERENCES public.featured_projects(id) ON DELETE CASCADE,
  image_url TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0
);

-- Create contact info table
CREATE TABLE public.contact_info (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  address_ar TEXT,
  address_en TEXT,
  phone1 TEXT,
  phone2 TEXT,
  email TEXT,
  working_hours_ar TEXT,
  working_hours_en TEXT,
  map_url TEXT,
  facebook_url TEXT,
  instagram_url TEXT,
  twitter_url TEXT,
  tiktok_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create site settings table
CREATE TABLE public.site_settings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  site_name_ar TEXT,
  site_name_en TEXT,
  logo_url TEXT,
  primary_color TEXT DEFAULT '#614231',
  secondary_color TEXT DEFAULT '#9D784A',
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Insert default data
INSERT INTO public.hero_sections (title_ar, title_en)
VALUES ('مؤسسة ديوان الخليج للمقاولات العامة', 'Diwan Al Khaleej General Contracting');

INSERT INTO public.about_sections (title_ar, title_en, content_ar, content_en)
VALUES (
  'نبذة عنا',
  'About Us',
  'تأسست مؤسسة ديوان الخليج للمقاولات العامة وفقًا لمعايير فريدة. خبرة عميقة نستلهم منها رؤيتنا الراسخة لتقديم خدمات إنشائية تتسم بأعلى درجات الجودة والإتقان.',
  'Diwan Al Khaleej General Contracting was established according to unique standards. We draw from deep experience to deliver construction services with the highest quality.'
);

INSERT INTO public.achievements (number, title_ar, title_en, sort_order)
VALUES 
(20, 'مشاريع تم تسليمها', 'Delivered Projects', 1),
(14, 'سنة خبرة', 'Years of Experience', 2),
(30, 'مشروع تصميم خارجي', 'Exterior Design Projects', 3),
(95, 'موظف موارد بشرية', 'HR Employees', 4);

INSERT INTO public.vision_sections (title_ar, title_en, content_ar, content_en, ceo_name_ar, ceo_name_en)
VALUES (
  'رؤيتنا',
  'Our Vision',
  'الاجتهاد والجديّة في العمل، الالتزام بمعايير الجودة والأمان، التطوير المستمر واحترام الوقت لنكون دائمًا في المقدمة.',
  'Dedication and seriousness in work, commitment to quality and safety standards, continuous development and respect for time to always be at the forefront.',
  'المهندس خالد منيب',
  'Engineer Khaled Munib'
);

-- INSERT INTO public.contact_info (
--   address_ar, address_en, phone1, phone2, email, 
--   working_hours_ar, working_hours_en
-- )
-- VALUES (
--   'قطر – شارع الفروسية، مبنى رقم 292 – الدور الأول مكتب 8',
--   'Qatar - Al Furousiya Street, Building 292 - 1st Floor Office 8',
--   '+974 55664404',
--   '+974 77776682',
--   'info@aatgco.com',
--   'السبت - الخميس: 8:00 ص - 6:00 م',
--   'Saturday - Thursday: 8:00 AM - 6:00 PM'
-- );

INSERT INTO public.site_settings (site_name_ar, site_name_en)
VALUES ('ديوان الخليج للمقاولات العامة', 'Diwan Al Khaleej General Contracting');

-- Create storage buckets
INSERT INTO storage.buckets (id, name, public)
VALUES 
  ('website-images', 'website-images', true);

-- Enable RLS for all tables
ALTER TABLE public.admin_users ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.hero_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.achievements ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.vision_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.featured_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.project_images ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_info ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- Create RLS policies for public read access
CREATE POLICY "Public can read hero sections" ON public.hero_sections FOR SELECT USING (true);
CREATE POLICY "Public can read about sections" ON public.about_sections FOR SELECT USING (true);
CREATE POLICY "Public can read achievements" ON public.achievements FOR SELECT USING (true);
CREATE POLICY "Public can read services" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public can read service images" ON public.service_images FOR SELECT USING (true);
CREATE POLICY "Public can read vision sections" ON public.vision_sections FOR SELECT USING (true);
CREATE POLICY "Public can read featured projects" ON public.featured_projects FOR SELECT USING (true);
CREATE POLICY "Public can read project images" ON public.project_images FOR SELECT USING (true);
CREATE POLICY "Public can read contact info" ON public.contact_info FOR SELECT USING (true);
CREATE POLICY "Public can read site settings" ON public.site_settings FOR SELECT USING (true);

-- Storage policies
CREATE POLICY "Public can view images" ON storage.objects FOR SELECT USING (bucket_id = 'website-images');
CREATE POLICY "Admins can upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'website-images');
CREATE POLICY "Admins can update images" ON storage.objects FOR UPDATE USING (bucket_id = 'website-images');
CREATE POLICY "Admins can delete images" ON storage.objects FOR DELETE USING (bucket_id = 'website-images');