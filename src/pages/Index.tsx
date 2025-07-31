import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToActionSection from "@/components/CallToActionSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import WellnessEssentials from "@/components/WellnessEssentials";
import NulifeWellness from "@/components/WellnessEssentials";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <NulifeWellness/>
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      {/* <CallToActionSection />
      <ContactSection /> */}
      <Footer />
    </div>
  );
};

export default Index;
