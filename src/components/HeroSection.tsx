import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { WaveShape } from "./WaveShape";
import heroTeam from "@/assets/hero_home_01.avif";
import heroBlob1 from "@/assets/hero-floating-blob-1.avif";
import heroBlob3 from "@/assets/floating-hero-blob-3.avif";

export const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-[113vh] flex items-center justify-center overflow-hidden "
    >
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[113vh]"
        style={{ backgroundImage: `url(${heroTeam})` }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <div className="absolute z-50 -right-28 animate-floatUpDown">
        <img
          decoding="async"
          width="480"
          height="415"
          src={heroBlob1}
          className="z-50"
          alt={heroBlob1}
          data-full_image_src={heroBlob1}
          title="hero floating blob 1"
          loading="eager"
          sizes="(max-width: 480px) 100vw, 480px"
        />
      </div>
      <div className="absolute z-50 left-0 top-44 animate-floatUpDown">
        <img
          decoding="async"
          width="290"
          height="365"
          src={heroBlob3}
          className="attachment-full size-full"
          alt={heroBlob3}
          data-full_image_src={heroBlob3}
          title="floating_image_02"
          loading="eager"
        />
      </div>
      <div className="absolute z-50 left-1/4 -top-32 animate-floatUpDown">
        <img
          decoding="async"
          width="615"
          height="445"
          src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_01.avif"
          className="attachment-full size-full"
          alt="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_01.avif"
          data-full_image_src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2025/06/floating_image_01.avif"
          title="floating_image_01"
          loading="eager"
          sizes="(max-width: 615px) 100vw, 615px"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-32 t ext-center flex flex-col justify-end items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-[100px] text-medium font-bold text-white mb-6 text-balance text-right">
            Your Vision.
            <br />
            Our Passion.
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 mx-auto text-right dont-thin">
            HR consulting expertise that helps your business thrive.
          </p>
        </motion.div>
      </div>

      {/* Wave Shape at Bottom */}
      <WaveShape variant="coral" position="bottom" />
    </section>
  );
};
