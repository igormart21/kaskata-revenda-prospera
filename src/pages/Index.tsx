import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProfitSection from "@/components/ProfitSection";
import ProductVarietySection from "@/components/ProductVarietySection";
import HowItWorksSection from "@/components/HowItWorksSection";
import BenefitsSection from "@/components/BenefitsSection";
import RegistrationSection from "@/components/RegistrationSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ExperienceSection />
        <ProfitSection />
        <ProductVarietySection />
        <HowItWorksSection />
        <BenefitsSection />
        <RegistrationSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
