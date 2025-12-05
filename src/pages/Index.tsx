import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { HRSolutionsSection } from "@/components/HRSolutionsSection";
import { RecruitmentProcessSection } from "@/components/RecruitmentProcessSection";
import { BlogSection } from "@/components/BlogSection";
import { InnovationSection } from "@/components/InnovationSection";
import { TeamSection } from "@/components/TeamSection";
import { Footer } from "@/components/Footer";
import heroBlob2 from "@/assets/hero-floating-blob-2.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-blob-01.avif";
import innovationBlob1 from "@/assets/innovation-blob-1.avif";
import innovationBlob2 from "@/assets/innovation-blob-2.avif";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <HRSolutionsSection />
          <div className="absolute hidden md:block z-[9999] top-[29%] left-[198px]  animate-floatUpDown">
            <img
              decoding="async"
              width="480"
              height="415"
              src={heroBlob2}
              className="z-50"
              alt={heroBlob2}
              data-full_image_src={heroBlob2}
              title="hero floating blob 1"
              loading="eager"
              sizes="(max-width: 480px) 100vw, 480px"
            />
          </div>
        </div>
        <RecruitmentProcessSection />
        <div className="overflow-hidden relative">
          <CTASection />
          <BlogSection />
          <div className="absolute  hidden md:block z-[9999] top-[18%] left-6  animate-float">
            <img
              decoding="async"
              width="533"
              height="634"
              src={heroBlob2}
              className="z-50"
              alt={heroBlob2}
              data-full_image_src={heroBlob2}
              title="hero floating blob 1"
              loading="eager"
              sizes="(max-width: 533px) 100vw, 533px"
            />
          </div>
          <div className="absolute hidden md:block  z-[9999] top-[1%] left-44  animate-floatUpDown">
            <img
              decoding="async"
              width="520"
              height="621"
              src={heroBlob1}
              className="z-50"
              alt={heroBlob1}
              data-full_image_src={heroBlob1}
              title="hero floating blob 1"
              loading="eager"
              sizes="(max-width: 520px) 100vw, 520px"
            />
          </div>
          <div className="absolute hidden md:block  z-[9999] top-[1%] right-[30%]  animate-floatUpDown">
            <img
              decoding="async"
              width="475"
              height="750"
              src={heroBlob3}
              className="z-50"
              alt={heroBlob3}
              data-full_image_src={heroBlob3}
              title="hero floating blob 1"
              loading="eager"
              sizes="(max-width: 475px) 100vw, 475px"
            />
          </div>
          <div className="absolute hidden md:block  z-[9999] top-[55%] right-[15%]  animate-floatUpDown">
            <img
              decoding="async"
              width="670"
              height="750"
              src={innovationBlob1}
              className="attachment-full size-full"
              alt={innovationBlob1}
              data-full_image_src={innovationBlob1}
              title="floating_image_06"
              loading="eager"
              sizes="(max-width: 670px) 100vw, 670px"
            />
          </div>
          <div className="absolute hidden md:block  z-[9999] top-[73%] right-[15%]  animate-floatUpDown">
            <img
              decoding="async"
              width="570"
              height="410"
              src={innovationBlob2}
              className="attachment-full size-full"
              alt={innovationBlob2}
              data-full_image_src={innovationBlob2}
              title="floating_image_07"
              loading="eager"
              sizes="(max-width: 570px) 100vw, 570px"
            />
          </div>
          <div className="absolute hidden md:block  z-[9999] top-[68%] right-[3%]  animate-floatUpDown">
            <img
              decoding="async"
              width="240"
              height="285"
              src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_08.avif"
              className="attachment-full size-full"
              alt="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_08.avif"
              data-full_image_src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_08.avif"
              title="floating_image_08"
              loading="eager"
            />
          </div>
          <InnovationSection />
          <TeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
