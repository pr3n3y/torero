import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import { WaveShape } from "../WaveShape";

const caseStudies = [
  {
    title: "Coping Under the Current Climate",
    category: "Consulting · Employees",
    tag: "Consulting",
    image:
      "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2018/09/portfolio_05-720x1080.avif",
  },
  {
    title: "Putting the Right Value on Your Company",
    category: "Tech · Partners",
    tag: "Consulting",
    image:
      "	https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2018/09/portfolio_04-720x1080.avif",
  },
  {
    title: "Regulatory Framework and Changes",
    category: "Finance · Strategy",
    tag: "Consulting",
    image:
      "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2018/09/portfolio_03-720x1080.avif",
  },
];

const CaseStudiesSection = () => {
  return (
    <section className="relative pb-36  overflow-hidden">
      <WaveShape wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_grey_bottom_left_shape_01.png" className="bottom-0" />
      <div
        className="absolute inset-0 bg-cover bg-center h-[113vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_about_02.png)`,
        }}
      />
      <div className="container mx-auto px-4 relative z-20 ">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium font-display text-foreground mb-4">
            Case Studies
          </h2>
          <p className="text-2xl text-thin text-muted-foreground max-w-xl mx-auto">
            We explore some of the latest trends and strategies
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="group cursor-pointer opacity-0 animate-fade-in h-[600px] "
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden  h-full rounded-2xl mb-4">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-black/40  via-transparent" />

                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-thin text-white/90 tracking-wider uppercase">
                      {study.category}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-medium font-display text-white mb-4 leading-tight">
                      {study.title}
                    </h3>
                    <button className="flex items-center gap-2 text-white text-sm font-semibold uppercase tracking-wider group-hover:gap-3 transition-all">
                      <span>Read More</span>
                      <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <span className="text-lg">→</span>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* CTA Button */}
        <div className="text-center">
          <Button variant="outline" size="lg" className="group">
            <span>All Case Studies</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
