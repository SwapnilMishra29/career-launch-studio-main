import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import ServicesSection from "@/components/ServicesSection";
import PricingSection from "@/components/PricingSection";
import HowItWorks from "@/components/HowItWorks";
import ReferralSection from "@/components/ReferralSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import UpdatePolicySection from "@/components/UpdatePolicySection";
import OrderSection from "@/components/OrderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <WhyChooseUs />
      <ServicesSection />
      <PricingSection />
      <HowItWorks />
      <TestimonialsSection />
      <ReferralSection />
      <UpdatePolicySection />
      <OrderSection />
      <Footer />
    </main>
  );
};

export default Index;
