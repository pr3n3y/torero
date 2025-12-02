import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Users, TrendingUp, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import { WaveShape } from "./WaveShape";
import Wave from "@/assets/section2-wave-01.avif";
import Blob1 from "@/assets/section2-blob-01.avif";

const about = {
  icon: Users,
  title: "HR Solutions for Your Company",
  description:
    "We are a young and creative company and we offer you fresh HR ideas.",
  paragraph:
    "Nifty team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions in the pursuit of making your business work better.",
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

const solutions = [
  {
    icon: Users,
    title: "HR Solutions for Your Company",
    description:
      "We are a new company with strong ideas and growing experience. We are proud to have professionals who know exactly what you need.",
    features: [
      "Advanced system",
      "Learning and growth",
      "Talent management",
      "Proactive recruitment",
    ],
  },
  {
    icon: TrendingUp,
    title: "Let Us Introduce to You",
    description: "Our team specializes in matching talent with opportunity.",
    tag: "Company",
    image: blog1,
  },
  {
    icon: Target,
    title: "100% Percent Score Rate",
    description: "We deliver exceptional results every time.",
    tag: "Featured",
    image: blog2,
  },
  {
    icon: CheckCircle2,
    title: "Recruiting Done Better",
    description: "Modern solutions for modern challenges.",
    tag: "Services",
  },
];

export const HRSolutionsSection = () => {
  const Icon = about.icon;
  return (
    <section
      id="services"
      className="py-20 bg-[#f7f7f5] mx-auto w-full relative "
    >
      <WaveShape wave={Wave} />
      <div className=" absolute z-0   inset-0">
        <img
          decoding="async"
          width="480"
          height="415"
          src={Blob1}
          className="z-50"
          alt={Blob1}
          data-full_image_src={Blob1}
          title="blob 1"
          loading="eager"
          sizes="(max-width: 480px) 100vw, 480px"
        />
      </div>
      <div className="container grid md:grid-cols-2">
        <div className="container mx-auto px-0 md:px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className={`overflow-hidden h-full  bg-transparent border-0`}>
              <div className="relative hidden md:block h-48 overflow-hidden">
                {/* Circular border decoration */}
                <div className="absolute -top-8 -right-8 w-32 h-32 border-[3px] border-transparent rounded-full z-10" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 border-[3px] border-transparent rounded-full z-10" />
              </div>
              <div className="p-3 md:p-6">
                <h3 className="text-2xl md:text-[44px] font-medium mb-3 ">{about.title}</h3>
                <p className="text-md md:text-[23px] font-light mb-4">
                  {about.description}
                </p>
                <p className="text-base font-extralight mb-4">
                  {about.paragraph}
                </p>

                <ul className="space-y-2 mb-6">
                  {about.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-">
                  Learn More
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-0 md:px-4 relative">
          <div className="grid md:grid-cols-2 gap-6">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className={`overflow-hidden h-full hover:shadow-medium transition-shadow ${
                      index === 0 ? "md:col-span-2 lg:col-span-1 " : ""
                    }`}
                  >
                    {solution.image && (
                      <div className="relative h-48 overflow-hidden">
                        {/* Circular border decoration */}
                        <div className="absolute -top-8 -right-8 w-32 h-32 border-[3px] border-primary/30 rounded-full z-10" />
                        <div className="absolute -bottom-6 -left-6 w-24 h-24 border-[3px] border-accent/30 rounded-full z-10" />
                        <img
                          src={solution.image}
                          alt={solution.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}
                    <div className="p-6">
                      {solution.tag && (
                        <span className="inline-block px-3 py-1 text-xs font-semibold bg-primary/10 text-primary rounded-full mb-4">
                          {solution.tag}
                        </span>
                      )}

                      <h3 className="text-xl font-bold mb-3">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        {solution.description}
                      </p>

                      {solution.features && (
                        <ul className="space-y-2 mb-6">
                          {solution.features.map((feature, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm"
                            >
                              <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      )}

                      <Button variant="outline" className="w-full">
                        Learn More
                      </Button>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
