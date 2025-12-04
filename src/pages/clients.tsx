import { Header } from "@/components/Header";
import { HRSolutionsSection } from "@/components/clients/HRSolutionsSection";
import { RecruitmentProcessSection } from "@/components/RecruitmentProcessSection";
import { CTASection } from "@/components/CTASection";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import heroBlob2 from "@/assets/hero-floating-blob-2.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-blob-01.avif";
import innovationBlob1 from "@/assets/innovation-blob-1.avif";
import innovationBlob2 from "@/assets/innovation-blob-2.avif";
import { TeamSection } from "@/components/clients/TeamSection";
import InnovationSection from "@/components/clients/InnovationSection";
import FloatingBlob from "@/components/FloatingBlob";
import FutureSection from "@/components/clients/FutureSection";
import ProcessSection from "@/components/clients/ProcessSection";
import TestimonialSection from "@/components/clients/TestimonialSection";
import CaseStudiesSection from "@/components/clients/CaseStudiesSection";
import HeroSection from "@/components/clients/HeroSection";
import OurClientsSection from "@/components/clients/OurClientsSection";
import OperationalSection from "@/components/clients/OperationalSection";

const Clients = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <OurClientsSection />
          <OperationalSection />
          <CaseStudiesSection />
   

          {/* Blobs */}
          <FloatingBlob
            height={415}
            width={480}
            className="top-[38%] left-[50%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_03.png"
          />
          <FloatingBlob
            height={415}
            width={480}
            className="top-[62%] left-0 [20%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
          />
          <FloatingBlob
            height={634}
            width={533}
            className="top-[38%] left-10 z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_05.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Clients;
