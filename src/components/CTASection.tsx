import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { BlobShape } from "./BlobShape";
import { WaveShape } from "./WaveShape";
import ctaPerson from "@/assets/cta-person.jpg";
import ctabg from "@/assets/cta_bg.avif";
import TopWave from "@/assets/top-wave-01.avif";
import BottomWave from "@/assets/bottom-wave-01.avif";

export const CTASection = () => {
  return (
    <section className="relative py-32 h-[130svh] w-full">
      <div
        className="absolute inset-0 bg-cover bg-center h-[130svh]"
        style={{ backgroundImage: `url(${ctabg})` }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <WaveShape
        variant="coral"
        position="bottom"
        wave={TopWave}
        className="top-0"
      />
      <WaveShape
        variant="coral"
        position="bottom"
        wave={BottomWave}
        className="bottom-0"
      />

      <div className="container mx-auto   z-10 relative h-full">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="absolute text-white bottom-[300px] w-1/2 "
        >
          <h2 className="text-[64px] font-light mb-6 text-balance leading-tight">
            If you have the idea we will find the right way
          </h2>
          <p className="text-2xl text-white/90 font-light mb-8">
            Our experienced team is dedicated to turning your vision into
            reality. Let's collaborate and create something extraordinary
            together.
          </p>
          <Button size="lg" variant="outline" className="shadow-medium text-lg p-8 rounded-lg bg-transparent">
            View all available products
          </Button>
        </motion.div>
      </div>  
    </section>
  );
};
