import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero_home_01.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-hero-blob-3.avif";
import { WaveShape } from "../WaveShape";

export const HeroSection = () => {
  return (
    <section
      id="about"
      className="relative min-h-[80vh] flex items-center justify-start overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/hero_contact.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 t ext-center flex flex-col justify-start items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-[100px] text-medium font-bold text-white mb-6 text-balance ">
            FAQ
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mb-8 mx-auto font-thin max-w-xl">
            We are a young and creative company and we offer you fresh business ideas.
          </p>
        </motion.div>
      </div>

      {/* Wave Shape at Bottom */}
      <WaveShape
        variant="coral"
        position="bottom"
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_White_bottom_right_shape_03.png"
      />
    </section>
  );
};
