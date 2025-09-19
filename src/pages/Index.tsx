import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProfitSection from "@/components/ProfitSection";
import FreezerSection from "@/components/FreezerSection";
import ProductVarietySection from "@/components/ProductVarietySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import RegistrationSection from "@/components/RegistrationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProfitSection />
        <FreezerSection />
        <ProductVarietySection />
        <HowItWorksSection />
        <BenefitsSection />
        <RegistrationSection />
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
