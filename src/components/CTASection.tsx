import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlobShape } from "./BlobShape";
import { WaveShape } from "./WaveShape";
import ctaPerson from "@/assets/cta-person.jpg";
import ctabg from "@/assets/cta_bg.avif";
import TopWave from "@/assets/top-wave-01.avif";
import BottomWave from "@/assets/bottom-wave-01.avif";
import { useRef } from "react";

export default function CTASection() {
  const sectionRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section ref={sectionRef} className="relative py-32 h-[130svh] w-full overflow-hidden">
      {/* Parallax Background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center h-[150svh] -top-[10svh]"
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${ctabg})` }}
        />
        <div className="absolute inset-0 bg-black/35" />
      </motion.div>

      <WaveShape
        variant="coral"
        position="bottom"
        wave={TopWave}
        className="top-0 z-10"
      />
      <WaveShape
        variant="coral"
        position="bottom"
        wave={BottomWave}
        className="bottom-0 z-10"
      />

      <div className="container mx-auto z-10 relative h-full">
        <motion.div
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute text-white bottom-[300px] md:w-1/2"
        >
          <h2 className="text-5xl md:text-[64px] font-light mb-6 text-balance leading-tight">
            If you have the idea we will find the right way
          </h2>
          <p className="text-lg md:text-2xl text-white/90 font-light mb-8">
            Our experienced team is dedicated to turning your vision into
            reality. Let's collaborate and create something extraordinary
            together.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="shadow-lg text-sm md:text-lg md:px-8 md:py-6 rounded-lg bg-transparent border-white text-white hover:bg-white hover:text-black transition-colors"
          >
            View all available products
          </Button>
        </motion.div>
      </div>  
    </section>
  );
}
