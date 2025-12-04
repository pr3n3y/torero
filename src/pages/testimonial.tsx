import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/testimonial/HeroSection";
import ProcessSection from "@/components/testimonial/ProcessSection";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import ProcessSection2 from "@/components/testimonial/ProcessSection2";

const Testimonials = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <ProcessSection />
          <TestimonialSection />
          <ProcessSection2 />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Testimonials;
