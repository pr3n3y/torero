import { ArrowRight, Quote } from "lucide-react";
import { Button } from "../ui/button";

const ProcessSection = () => {
  return (
    <section className="py-24  flex flex-col  gap-y-48 relative">
      <div
        className="absolute inset-0 z-0 bg-cover bg-center  h-[100%]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_about_01.png)`,
        }}
      />
      <div className=" bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-medium font-display text-foreground mb-4">
              Customer experience
            </h2>
            <p className="text-2xl text-thin text-muted-foreground max-w-xl mx-auto">
              We explore some of the latest trends and strategies
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
              >
                <img
                  decoding="async"
                  width="1920"
                  height="1280"
                  src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/fluid_hero_04.jpg"
                  className="attachment-full size-full"
                  alt="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/fluid_hero_04.jpg"
                  data-full_image_src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/fluid_hero_04.jpg"
                  title="fluid_hero_04"
                  loading="eager"
                  sizes="(max-width: 1920px) 100vw, 1920px"
                />
              </div>
            </div>

            {/* Right - Content */}

            <div className="max-w-4xl text-left w-full ">
              {/* Quote Icon */}
              <div className="p-3 w-fit bg-primary rounded-full flex items-center justify-center mx -auto mb-8">
                <Quote className="size-4 text-primary-foreground" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-4xl md:text-5xl font-medium font-display text-foreground leading-tight mb-8">
                "We're thrilled with the end result – especially the fact that
                the project went live in time for a series of important meetings
                in the nation's capital."
              </blockquote>

              {/* Author */}
              <div className="opacity-0 animate-fade-in animation-delay-400">
                <p className=" font-semibold text-lg">Richars Garret</p>
                <p className="text-black/60">Tailwindcss</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="  overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div className="max-w-4xl text-left w-full ">
              {/* Quote Icon */}
              <div className="p-3 w-fit bg-primary rounded-full flex items-center justify-center mx -auto mb-8">
                <Quote className="size-4 text-primary-foreground" />
              </div>

              {/* Quote Text */}
              <blockquote className="text-4xl md:text-5xl font-medium font-display text-foreground leading-tight mb-8">
                "We're thrilled with the end result – especially the fact that
                the project went live in time for a series of important meetings
                in the nation's capital."
              </blockquote>

              {/* Author */}
              <div className="opacity-0 animate-fade-in animation-delay-400">
                <p className=" font-semibold text-lg">Richars Garret</p>
                <p className="text-black/60">Tailwindcss</p>
              </div>
            </div>

            {/* Right - Image with blob */}
            <div className="relative">
              <div
                className="relative w-full aspect-square overflow-hidden"
                style={{
                  borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=987&q=80"
                  alt="Professional businessman"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
