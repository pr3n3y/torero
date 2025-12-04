import { ArrowRight } from "lucide-react";
import { WaveShape } from "../WaveShape";

const experiences = [
  {
    image:
      "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/service_01-1280x960.jpg",
    title: "Private individuals products & services",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative indicators offline.",
  },
  {
    image:
      "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/service_01-1280x960.jpg",
    title: "Small & medium business clients acquisition",
    description:
      "Leverage agile frameworks to provide a robust synopsis for high level overviews iterative indicators offline.",
  },
  {
    image:
      "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/service_01-1280x960.jpg",
    title: "Corporate clients & services",
    description:
      "Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day.",
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-24 pt-52 bg-background relative">
      <WaveShape
        wave={
          "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/top_wave_06.png"
        }
        className="top-0"
      />
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 `}
        >
          <h2 className="text-3xl md:text-5xl font-medium text-foreground mb-4">
            Capitalizing on the real-world experience
          </h2>
          <p className="text-2xl font-thin text-muted-foreground">
            We explore some of the latest trends and strategies
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div
              key={exp.title}
              className={`group relative border overflow-hidden rounded-2xl transition-all duration-700 `}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {exp.title}
                </h3>
                {exp.description && (
                  <p className="text-sm text-muted-foreground  mb-4">
                    {exp.description}
                  </p>
                )}
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors group/link"
                >
                  READ MORE
                  <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
