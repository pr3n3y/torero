import { Header } from "@/components/Header";
import { HRSolutionsSection } from "@/components/product/HRSolutionsSection";
import { RecruitmentProcessSection } from "@/components/RecruitmentProcessSection";
import { CTASection } from "@/components/CTASection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import heroBlob2 from "@/assets/hero-floating-blob-2.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-blob-01.avif";
import innovationBlob1 from "@/assets/innovation-blob-1.avif";
import innovationBlob2 from "@/assets/innovation-blob-2.avif";
import { HeroSection } from "@/components/product/HeroSection";
import { TeamSection } from "@/components/product/TeamSection";
import InnovationSection from "@/components/product/InnovationSection";
import OperationalSection from "@/components/product/OperationalSection";
import FloatingBlob from "@/components/FloatingBlob";
import FutureSection from "@/components/product/FutureSection";
import ProcessSection from "@/components/product/ProcessSection";
import TestimonialSection from "@/components/product/TestimonialSection";
import CaseStudiesSection from "@/components/product/CaseStudiesSection";
import { ProductDescSection } from "@/components/product/ProductDescSection";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <ProductDescSection />
          <FutureSection />
          <OperationalSection />
          <ProcessSection />
          

          {/* Blobs */}
          <FloatingBlob
            height={415}
            width={480}
            className="top-[45%] right-[30%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_03.png"
          />
          <FloatingBlob
            height={415}
            width={480}
            className="top-[58%] right-[20%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
          />
          <FloatingBlob
            height={634}
            width={533}
            className="top-[45%] -right-10 z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_05.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
