import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/team/HeroSection";
import { TeamSection } from "@/components/team/TeamSection";
import OperationalSection from "@/components/team/OperationalSection";
import FloatingBlob from "@/components/FloatingBlob";
import ProcessSection from "@/components/team/ProcessSection";
import TeamQuoteSection from "@/components/team/TeamQuoteSection";

const Team = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <TeamQuoteSection />
          <TeamSection />
          <OperationalSection />
          <ProcessSection />

          {/* Blobs */}
          <FloatingBlob
            height={415}
            width={480}
            className="top-[62%] left-[10%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_03.png"
          />
          <FloatingBlob
            height={415}
            width={480}
            className="top-[78%] -left-10 z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
          />
          <FloatingBlob
            height={634}
            width={533}
            className="top-[56%] left-[40%] z-[9999]"
            src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_05.png"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Team;
