import { motion } from 'framer-motion';
import { ClipboardCheck, Search, UserCheck, Award } from 'lucide-react';

const steps = [
  {
    icon: ClipboardCheck,
    title: 'Post a Job',
    description: 'Create detailed job listings that attract the right candidates.',
  },
  {
    icon: Search,
    title: 'Find Candidates',
    description: 'Use our advanced tools to discover qualified professionals.',
  },
  {
    icon: UserCheck,
    title: 'Screening',
    description: 'Thoroughly evaluate candidates to ensure the perfect match.',
  },
  {
    icon: Award,
    title: 'Hire',
    description: 'Complete the hiring process seamlessly and efficiently.',
  },
];

export const RecruitmentProcessSection = () => {
  return (
    <section className="relative py-20 bg-white muted/30 overflow-hidden">
      {/* Circular border decorations */}
      <div className="absolute top-20 right-20 w-48 h-48 border-[3px] border-primary/20 rounded-full" />
      <div className="absolute bottom-32 left-16 w-32 h-32 border-[3px] border-accent/20 rounded-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Steps of Recruitment Process</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined process ensures you find exactly what you need, precisely when you need it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
