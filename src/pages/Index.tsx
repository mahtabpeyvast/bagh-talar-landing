import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import GallerySection from "@/components/landing/GallerySection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>باغ تالار نارنجستان | مجلل‌ترین باغ تالار تهران</title>
        <meta
          name="description"
          content="باغ تالار نارنجستان، مکانی رویایی برای برگزاری مراسم عروسی، جشن تولد و همایش‌های شرکتی در تهران. با بیش از ۲۰ سال تجربه."
        />
        <meta
          name="keywords"
          content="باغ تالار، تالار عروسی، باغ عروسی تهران، سالن همایش، جشن تولد"
        />
        <html lang="fa" dir="rtl" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
};

export default Index;
