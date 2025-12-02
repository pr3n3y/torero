import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { WaveShape } from './WaveShape';
import { BlobShape } from './BlobShape';
import innovationHero from '@/assets/innovation-bg.avif';
import innovationBottomWave from '@/assets/innovation-bottom-wave.avif';
import innovationTopWave from '@/assets/innovation-top-wave.avif';

export const InnovationSection = () => {
  return (
    <section className="relative min-h-[110vh] flex items-center justify-center overflow-hidden bg-[#f7f7f5]">

      <WaveShape  wave={innovationBottomWave} className='bottom-0 z-50' />
      <WaveShape  wave={innovationTopWave} className='top-0 z-50' />
      {/* Background Image with Overlay */}
       <div
        className="absolute inset-0 bg-cover bg-center h-[130svh]"
        style={{ backgroundImage: `url(${innovationHero})` }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>


      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-[30%,70%] gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* <img
              src={innovationHero}
              alt="Innovation leader"
              className="rounded-3xl shadow-large w-full h-auto"
            /> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-[64px] mb-6 text-balance font-medium">
              Be at the forefront of the new innovation
            </h2>
            <p className="text-[24px] text-white/90 mb-8 font-thin w-[70%]">
              Join us in shaping the future of work. We're committed to pushing boundaries 
              and creating innovative solutions that make a real difference.
            </p>
            <Button size="lg" variant="secondary" className="shadow-medium text-base p-5">
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

    </section>
  );
};
