import { Helmet } from "react-helmet-async";
import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import ServicesSection from "@/components/landing/ServicesSection";
import CateringSection from "@/components/landing/CateringSection";
import FoodGallerySection from "@/components/landing/FoodGallerySection";
import GallerySection from "@/components/landing/GallerySection";
import PricingSection from "@/components/landing/PricingSection";
import TestimonialsSection from "@/components/landing/TestimonialsSection";
import ContactSection from "@/components/landing/ContactSection";
import Footer from "@/components/landing/Footer";
import WhatsAppButton from "@/components/landing/WhatsAppButton";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>باغ تالار ایرانیان | مجلل‌ترین باغ تالار تهران</title>
        <meta
          name="description"
          content="باغ تالار ایرانیان، مکانی رویایی برای برگزاری مراسم عروسی، جشن تولد و همایش‌های شرکتی در تهران. با بیش از ۲۰ سال تجربه."
        />
        <meta
          name="keywords"
          content="باغ تالار، تالار عروسی، باغ عروسی تهران، سالن همایش، جشن تولد، باغ تالار ایرانیان"
        />
        <html lang="fa" dir="rtl" />
      </Helmet>

      <main className="min-h-screen">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <CateringSection />
        <FoodGallerySection />
        <GallerySection />
        <PricingSection />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
