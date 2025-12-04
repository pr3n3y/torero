import { Header } from "@/components/Header";
import { HRSolutionsSection } from "@/components/services/HRSolutionsSection";
import { RecruitmentProcessSection } from "@/components/RecruitmentProcessSection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import heroBlob2 from "@/assets/hero-floating-blob-2.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-blob-01.avif";
import innovationBlob1 from "@/assets/innovation-blob-1.avif";
import innovationBlob2 from "@/assets/innovation-blob-2.avif";
import { HeroSection } from "@/components/services/HeroSection";
import { TeamSection } from "@/components/services/TeamSection";
import InnovationSection from "@/components/services/InnovationSection";
import OperationalSection from "@/components/services/OperationalSection";
import FloatingBlob from "@/components/FloatingBlob";
import FutureSection from "@/components/services/FutureSection";
import ProcessSection from "@/components/services/ProcessSection";
import TestimonialSection from "@/components/services/TestimonialSection";
import CaseStudiesSection from "@/components/services/CaseStudiesSection";
import ProcessStepSection from "@/components/services/ProcessStepSection";
import { CTASection } from "@/components/services/CTASection";
import FeatureSection from "@/components/services/Features";
import ExperienceSection from "@/components/services/ExperienceSection";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <FeatureSection />
          <ExperienceSection />
          <OperationalSection />
          <ProcessStepSection />
          <CTASection />
          

          {/* Blobs */}
          <FloatingBlob
            height={415}
            width={480}
            className="top-[78%] left-[10%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_03.png"
          />
          <FloatingBlob
            height={415}
            width={480}
            className="top-[90%] left-[5%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
          />
          <FloatingBlob
            height={634}
            width={533}
            className="top-[76%] left-[40%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_05.png"
          />



          <FloatingBlob
            height={750}
            width={670}
            className="top-[41%] left-[30%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_06.png"
          />
          <FloatingBlob
            height={410}
            width={570}
            className="top-[55%] right-[5%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_07.png"
          />
          <FloatingBlob
            height={634}
            width={533}
            className="top-[58%] left-0 z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
