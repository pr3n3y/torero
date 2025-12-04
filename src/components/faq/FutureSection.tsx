import { ArrowRight, TrendingUp, BarChart3, PieChart, Users } from "lucide-react";
import { Button } from "../ui/button";

const services = [
  {
    icon: TrendingUp,
    title: "Developing Financing Options",
    description: "We help you weather today's uncertainty through our best team needs."
  },
  {
    icon: BarChart3,
    title: "Improving Your Business Planning",
    description: "Strategic planning to ensure long-term success and growth."
  },
  {
    icon: PieChart,
    title: "Financial Modeling and Analytics",
    description: "Data-driven insights for informed decision making."
  },
  {
    icon: Users,
    title: "Delivering Financing Solutions",
    description: "Comprehensive financing tailored to your unique needs."
  }
];

const FutureSection = () => {
  return (
    <section className="relative pb-24 overflow-hidden">
      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light font-display text-foreground leading-tight mb-6">
              Future is brighter when you're more prepared
            </h2>
            <p className="text-2xl text-muted-foreground mb-8 leading-relaxed">
              Capitalize on low hanging fruit to identify a ballpark value added. Override the digital divide with additional clickthroughs from DevOps.
            </p>
            <Button variant="default" size="lg">
              <span>Our Process</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Right - Services Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group p-6 bg-background rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 border border-border/50 hover:border-primary/20 opacity-0 animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-lg font-display text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>


    </section>
  );
};

export default FutureSection;
