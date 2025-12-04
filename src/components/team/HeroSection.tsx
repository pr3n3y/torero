import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroTeam from "@/assets/hero_home_01.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-hero-blob-3.avif";
import { WaveShape } from "../WaveShape";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-start overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[90vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/hero_team.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 t ext-center flex flex-col justify-start items-start">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-[100px] text-medium font-bold text-white mb-6 text-balance ">
            Team
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 mx-auto font-thin">
            Together we can create something all inspirational you need to
            build.
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
