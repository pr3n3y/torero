import { FileText, Users, MessageSquare, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveShape } from "../WaveShape";

const steps = [
  {
    icon: FileText,
    title: "Identify the HR Requirement",
    step: 1,
  },
  {
    icon: Users,
    title: "Identify possible sources of HR Supply",
    step: 2,
  },
  {
    icon: MessageSquare,
    title: "Communicating the Information",
    step: 3,
  },
  {
    icon: ClipboardCheck,
    title: "Receiving Application",
    step: 4,
  },
];

const ProcessStepSection = () => {
  return (
    <section className="pb-24 relative overflow-hidden">
 
      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-medium font-display text-foreground mb-4 opacity-0 animate-fade-in">
            Steps of Recruitment Process
          </h2>
          <p
            className="text-2xl text-thin text-muted-foreground max-w-lg mx-auto opacity-0 animate-fade-in"
            style={{ animationDelay: "100ms" }}
          >
            We can help you with picking out the best people for your company.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative opacity-0 animate-fade-in"
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-px border-t-2 border-dashed border-muted-foreground/30" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-2xl bg-background border border-border flex items-center justify-center shadow-sm">
                    <step.icon className="w-10 h-10 text-foreground" />
                  </div>

                  {/* Step number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {step.step}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-foreground font-medium max-w-[180px]">
                  {step.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div
          className="flex justify-center opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms" }}
        >
          <Button variant="outline" className="rounded-full px-8">
            Online Application
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProcessStepSection;
