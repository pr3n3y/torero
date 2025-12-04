import { Quote } from "lucide-react";
import { WaveShape } from "../WaveShape";
import FloatingBlob from "../FloatingBlob";

const TestimonialSection = () => {
  return (
    <section className="relative py-32 overflow-hidden h-[140vh]">
      {/* Background with dark gradient and blobs */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[140vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_about_us_02.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-black/80 via-black/25 to-transparent" />
      </div>
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/top_wave_05.png"
        className="top-0"
      />
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_White_bottom_right_shape_02.png"
        className="bottom-0"
      />

      <FloatingBlob
        height={415}
        width={480}
        className="top-20  right-[55%] z-[9999]"
        src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_03.png"
      />
      <FloatingBlob
        height={750}
        width={475}
        className="top-5 right-[30%] z-[9999]"
        src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_05.png"
      />
      <FloatingBlob
        height={533}
        width={634}
        className="bottom-0 -left-[15%] z-[9999]"
        src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/floating_image_04.png"
      />

      <div className="container flex items-center mt-36 px-4 relative h-full w-full z-10">
        <div className="max-w-4xl text-left w-full ">
          {/* Quote Icon */}
          <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx -auto mb-8">
            <Quote className="w-8 h-8 text-primary-foreground" />
          </div>

          {/* Quote Text */}
          <blockquote className="text-2xl md:text-5xl font-thin italic font-display text-white  leading-relaxed mb-10 opacity-0 animate-fade-in">
            "We're thrilled with the end result – especially the fact that the
            project went live in time for a series of important meetings in the
            nation's capital."
          </blockquote>

          {/* Author */}
          <div className="opacity-0 animate-fade-in animation-delay-400">
            <p className="text-primary-foreground font-semibold text-lg">
              Richars Garret
            </p>
            <p className="text-primary-foreground/60">Tailwindcss</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
