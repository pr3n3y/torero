import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import {
  CheckCircle2,
  Users,
  TrendingUp,
  Target,
  ClipboardCheck,
  Search,
  UserCheck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import { WaveShape } from "../WaveShape";
import Wave from "@/assets/section2-wave-01.avif";
import Blob1 from "@/assets/section2-blob-01.avif";
import { useEffect, useRef, useState } from "react";

const about = {
  icon: Users,
  title: "Long-term vision and trajectory",
  description:
    "We are a young and creative company and we offer you fresh HR ideas.",
  paragraph: `Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive.                              
Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation X is on the runway heading towards a streamlined cloud solution user generated.`,
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

const steps = [
  {
    icon: ClipboardCheck,
    title: "90%",
    description: "Modeling and Analytics",
  },
  {
    icon: Search,
    title: "99%",
    description: "Financing Options",
  },
  {
    icon: UserCheck,
    title: "0%",
    description: "TFinancing Solutions",
  },
];

interface TimelineItem {
  year: string;
  date: string;
  title: string;
  description?: string;
}

const timelineData: TimelineItem[] = [
  {
    year: "2016",
    date: "JANUARY 2016",
    title: "New office in London",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking.",
  },
  {
    year: "",
    date: "JULY 2016",
    title: "Certificate of Accreditation",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination.",
  },
  {
    year: "2018",
    date: "JANUARY 2018",
    title: "New office in Amsterdam",
    description:
      "At the end of the day, going forward, a new normal that has evolved from generation X is on the runway.",
  },
  {
    year: "2019",
    date: "FEBRUARY 2019",
    title: "New office in NY",
    description:
      "Heading towards a streamlined cloud solution user generated content in real-time.",
  },
  {
    year: "",
    date: "MARCH 2020",
    title: "More than 100 workers",
    description:
      "Growing our team to deliver exceptional results across the globe.",
  },
];

export const HRSolutionsSection = () => {
  const [visibleItems, setVisibleItems] = useState<Set<number>>(new Set());
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(
            entry.target.getAttribute("data-index") || "0"
          );
          if (entry.isIntersecting) {
            setVisibleItems((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-20  mx-auto w-full relative ">
      <WaveShape wave={Wave} />

      <div className="container grid md:grid-cols-2 gap-20">
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
                <h3 className="text-2xl md:text-[44px] leading-10 font-medium mb-3 ">
                  {about.title}
                </h3>
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
              </div>
              <div className="w-full h-0.5 bg-gray-200 my-10 mx-5" />
              <div className="grid md:grid-cols-3 gap-8 py-5">
                {steps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="text-center group"
                    >
                      <div className="relative inline-block mb-6">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl group-hover:bg-primary/30 transition-all" />
                        <div className="relative bg-primary/10 p-6 rounded-full group-hover:scale-110 transition-transform">
                          <Icon className="h-12 w-12 text-primary" />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>
        <div className="container mx-auto px-0 md:px-4 py-20 relative">
          <div className="absolute left-[40px] top-0 bottom-0 w-0.5 bg-primary/20" />

          <div className="space-y-12">
            {timelineData.map((item, index) => (
              <div
                key={index}
                ref={(el) => (itemRefs.current[index] = el)}
                data-index={index}
                className={`relative pl-16 transition-all duration-700 ${
                  visibleItems.has(index)
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 translate-x-8"
                }`}
              >
                {/* Year Badge */}
                {item.year && (
                  <div className="absolute left-0  translate-x-[calc(-50%+24px)] -top-2">
                    <div className="w-16 h-16 rounded-full bg-white text-primary flex items-center justify-center text-lg font-bold">
                      {item.year}
                    </div>
                  </div>
                )}

                {/* Timeline Dot */}
                {!item.year && (
                  <div className="absolute left-6 top-2 w-3 h-3 -translate-x-1/2 rounded-full bg-primary" />
                )}

                {/* Content */}
                <div className={item.year ? "pt-6" : ""}>
                  <span className="text-xs text-primary font-semibold tracking-wider uppercase">
                    {item.date}
                  </span>
                  <h3 className="text-xl font-display text-foreground mt-1 mb-2">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
