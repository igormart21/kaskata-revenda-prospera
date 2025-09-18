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
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Separator } from "@/components/ui/separator";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ExperienceSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ProfitSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <ProductVarietySection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <HowItWorksSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <BenefitsSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <RegistrationSection />
        <div className="container mx-auto px-4">
          <Separator className="my-16 bg-gradient-to-r from-transparent via-border to-transparent" />
        </div>
        <FAQSection />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
