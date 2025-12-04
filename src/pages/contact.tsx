import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/contact/HeroSection";
import JoinTeamSection from "@/components/contact/JoinTeamSecion";
import ContactInfoSection from "@/components/contact/ContactInfoSection";
import MapSection from "@/components/contact/MapSection";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <div className="overflow-hidden relative">
          <HeroSection />
          <ContactInfoSection />
          <MapSection />  
          <JoinTeamSection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
