import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import { lazy, Suspense } from "react";
import LazySection from "@/components/ui/LazySection";
import ExperienceSection from "@/components/ExperienceSection";
import ProfitSection from "@/components/ProfitSection";
import FreezerSection from "@/components/FreezerSection";
const ProductVarietySection = lazy(() => import("@/components/ProductVarietySection"));
const PicoleSection = lazy(() => import("@/components/PicoleSection"));
const HowItWorksSection = lazy(() => import("@/components/HowItWorksSection"));
const BenefitsSection = lazy(() => import("@/components/BenefitsSection"));
const RegistrationSection = lazy(() => import("@/components/RegistrationSection"));
const FAQSection = lazy(() => import("@/components/FAQSection"));
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
        <LazySection>
          <Suspense fallback={null}>
            <ProductVarietySection />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <PicoleSection />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <HowItWorksSection />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <BenefitsSection />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <RegistrationSection />
          </Suspense>
        </LazySection>
        <LazySection>
          <Suspense fallback={null}>
            <FAQSection />
          </Suspense>
        </LazySection>
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Index;
