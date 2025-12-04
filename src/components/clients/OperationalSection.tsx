import { Play } from "lucide-react";
import { Button } from "../ui/button";
import { WaveShape } from "../WaveShape";

const OperationalSection = () => {
  return (
    <section className="relative py-20 overflow-hidden h-[150vh]">
      {/* Background with blob shapes */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[150vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_team.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black" />
      </div>

      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/top_wave_05.png"
        className="top-0"
      />
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_White_bottom_right_shape_02.png"
        className="bottom-0"
      />

      <div className="container mx-auto px-4 relative z-10 h-full">
        <div className="grid lg:grid-cols-[60%,40%] gap-12 h-full  items-center">
          {/* Left - Image with play button */}
          <div className="relative">
            {/* Right - Content */}
            <div className="lg:pl-8 mt-44 ">
              <h2 className="text-4xl md:text-6xl font-thin text-white font-display text-foreground leading-tight mb-6">
                The operational processes are what drives the business
              </h2>
              <p className="text-2xl text-white text-muted-foreground mb-8 leading-relaxed">
                Somnox sleep robot is now available in the world famous Harrods
                flagship store in London to help you succeed.
              </p>
              <Button variant="outline" size="lg" className="group">
                <span>View All Available Products</span>
                <Play className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
            {/* Main Image Container with blob mask */}
            <div className="relative"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalSection;
