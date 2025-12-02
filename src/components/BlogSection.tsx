import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { BlobShape } from "./BlobShape";
import blog1 from "@/assets/blog-1.jpg";
import blog2 from "@/assets/blog-2.jpg";
import blog3 from "@/assets/blog-3.jpg";
import blog4 from "@/assets/blog-4.jpg";
import blog5 from "@/assets/blog-5.jpg";
import blog6 from "@/assets/blog-6.jpg";
import blogBottomWave from "@/assets/blog-bottom-wave.avif";
import { WaveShape } from "./WaveShape";

const articles = [
  {
    image: blog1,
    title: "Why it's important to create a great customer service",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",
    category: "Business",
     date: "January 11, 2018"
  },
  {
    image: blog2,
    title: "How to make your company more successful",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",
    category: "Growth",
     date: "January 11, 2018"
  },
  {
    image: blog3,
    title:
      "Here's What's Actually Worth Buying Now According to A Psychologist",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",

    category: "Lifestyle",
     date: "January 11, 2018"
  },
  {
    image: blog4,
    title: "The future of work and management",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",

    category: "Management",
     date: "January 11, 2018"
  },
  {
    image: blog5,
    title: "How to engage customers: 5 Ways to Deliver In A Crisis",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",

    category: "Strategy",
     date: "January 11, 2018"
  },
  {
    image: blog6,
    title: "What is great for new product launches",
    description:
      "Holistically pontificate installed base portals after maintainable products. Phosfluorescently engage worldwide methodologies with technology.",

    category: "Innovation",
     date: "January 11, 2018"
  },
];

export const BlogSection = () => {
  return (
    <section id="blog" className="relative py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Latest Articles
          </h2>
          <p className="text-lg text-muted-foreground">
            Stay up-to-date with our latest news and insights
          </p>
        </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-8 mb-8">
        {articles.map((article, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden group cursor-pointer hover:shadow-xl transition-all duration-300 rounded-lg bg-white">
                {/* Image Section with Overlay Text */}
                <div className="relative overflow-hidden h-[400px]">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Dark Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"></div>
                  
                  {/* Date Badge */}
                  <div className="absolute top-5 left-5 z-10">
                    <p className="text-white text-xs font-medium tracking-wide">
                      {article.date}
                    </p>
                  </div>
                  
                  {/* Title Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h3 className="text-white text-2xl font-bold leading-tight">
                      {article.title}
                    </h3>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 bg-white">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5 line-clamp-3">
                    {article.description}
                  </p>
                  
                  {/* Read More Button */}
                  <button className="flex items-center gap-2 text-gray-900 font-semibold text-sm uppercase tracking-wider group/btn hover:gap-3 transition-all duration-300">
                    <span>Read More</span>
                    <div className="w-8 h-8 rounded-full border-2 border-gray-900 flex items-center justify-center group-hover/btn:bg-gray-900 group-hover/btn:text-white transition-all duration-300">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <button className="text-primary font-semibold hover:underline flex items-center gap-2 mx-auto">
            View all articles
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
      <WaveShape wave={blogBottomWave} className="bottom-0" />
    </section>
  );
};
