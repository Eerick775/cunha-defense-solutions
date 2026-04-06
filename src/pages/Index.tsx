import HeroSection from "@/components/HeroSection";
import UrgencySection from "@/components/UrgencySection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import ProcessSection from "@/components/ProcessSection";
import FinalCTASection from "@/components/FinalCTASection";
import FooterSection from "@/components/FooterSection";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <UrgencySection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <WhyChooseSection />
      <ProcessSection />
      <FinalCTASection />
      <FooterSection />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
