import { ArrowRight, CheckCircle2, Users } from "lucide-react";
import { Button } from "../ui/button";
import { WaveShape } from "../WaveShape";
import { motion } from "framer-motion";
const about = {
  icon: Users,
  title: "HR Solutions for Your Company",
  description:
    "We are a young and creative company and we offer you fresh HR ideas.",
  paragraph:
    "Torero team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions in the pursuit of making your business work better.",
  features: [
    "Valuation Services",
    "Development of Financial Models",
    "Corporate Financial Advisory",
    "Deal Structuring",
    "Feasibility Studies & Business Plans",
  ],
  button: "Explore Solutions",
  link: "",
};

const ProcessSection = () => {
  return (
    <section className="py-24  flex flex-col  gap-y-48 relative">
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_grey_bottom_left_shape_01.png"
        className="bottom-0"
      />
      <div
        className="absolute inset-0 z-0 bg-cover bg-center  h-[100%]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_about_01.png)`,
        }}
      />
      <div className=" bg-background">
        <div className="container mx-auto px-4">
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
            <div>
              <h2 className="text-4xl md:text-5xl font-medium font-display text-foreground leading-tight mb-6">
                Create more leads and grow your business
              </h2>
              <p className="text-2xl font-thin text-muted-foreground mb-4 leading-relaxed">
                We can help you with picking out the best people for your
                company and its work.
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test. Override the digital divide with
                additional clickthroughs from DevOps nanotechnology immersion.
              </p>
              <Button variant="outline" size="lg" className="group">
                <span>READ MORE</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="  overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Content */}
            <div>
              <h2 className="text-4xl md:text-5xl font-medium font-display text-foreground leading-tight mb-6">
                The operational processes of a business are what drives the
                business itself
              </h2>
              <p className="text-2xl font-thin text-muted-foreground mb-5 leading-relaxed">
                We're here to inform which tactics need funding and which are
                drains on resources.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <div
                  className={`overflow-hidden h-full  bg-transparent border-0`}
                >

                 
                    <p className="text-base font-extralight mb-4">
                      {about.paragraph}
                    </p>

                    <ul className="space-y-2 mb-6">
                      {about.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button variant="outline" className="w-">
                      Learn More
                    </Button>
                </div>
              </motion.div>
              {/* Progress Bars */}
              <div className="space-y-2">
                {/* <ProgressBar
                  label="Strategy Consulting"
                  percentage={90}
                  delay={0}
                />
                <ProgressBar
                  label="Operations Careers"
                  percentage={50}
                  delay={200}
                />
                <ProgressBar
                  label="Management Consulting"
                  percentage={80}
                  delay={400}
                /> */}
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
