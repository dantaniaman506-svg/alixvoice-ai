import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PricingSection from "@/components/home/PricingSection";
import ExtraMinutesSection from "@/components/home/ExtraMinutesSection";

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-8">
        <PricingSection />
        <ExtraMinutesSection />
      </div>
      <Footer />
    </div>
  );
};

export default Pricing;
