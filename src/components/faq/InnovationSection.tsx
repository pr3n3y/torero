import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { WaveShape } from "../WaveShape";

const InnovationSection = () => {
  return (
    <section className=" bg-[#f7f7f5] py-24 relative">
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/top_wave_07.png"
        className="top-0"
      />
      <div className="container mx-auto px-4 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Illustration */}
          <div className="relative">
            <img
              decoding="async"
              width="655"
              height="610"
              src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/image_illustrations_04.png"
              className="attachment-full size-full"
              alt="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/image_illustrations_04.png"
              data-full_image_src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/image_illustrations_04.png"
              title="image_illustrations_04"
              sizes="(max-width: 655px) 100vw, 655px"
            />
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-display text-foreground leading-tight mb-6">
              Be at the forefront of the innovation
            </h2>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Your goals are individual. We believe business advice should be
              too, so we help your business thrive in this work environment.
            </p>

            <Button variant="default" size="lg" className="group">
              <span>Watch Story</span>
              <Play
                className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform"
                fill="currentColor"
              />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSection;
