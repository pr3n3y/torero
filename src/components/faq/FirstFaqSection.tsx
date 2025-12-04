import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
const faqItems1 = [
  {
    id: "01",
    question: "What industries do you specialize in?",
    answer:
      "Curabitur porta metus non tempus luctus. Aliquam et felis condimentum, facilisis ipsum eget, euismod purus. Nam finibus porttitor ligula, in dapibus ante varius non. Phasellus fringilla sapien eu sagittis bibendum. Curabitur dui lectus, semper et vehicula a, ultrices in turpis. Cras tincidunt cursus quam, id velit vel erat fermentum venenatis nec a est. In ac dictum tortor, at porttitor nulla. Vivamus nec blandit mauris. Nulla facilisi. Morbi sem metus, ullamcorper ut bibendum id, iaculis consequat ligula.",
  },
  {
    id: "02",
    question: "Do we really need a business plan?",
    answer:
      "A business plan is essential for any serious venture. It helps you clarify your vision, identify potential challenges, and create a roadmap for success. Our team specializes in creating comprehensive business plans that attract investors and guide your operations effectively.",
  },
  {
    id: "03",
    question: "What makes your business plans so special?",
    answer:
      "Our business plans stand out because we combine deep industry expertise with creative problem-solving. We don't just provide templates – we craft customized strategies that align with your unique goals, market conditions, and competitive landscape.",
  },
  {
    id: "04",
    question: "Do we really need a business plan?",
    answer:
      "Absolutely! A well-crafted business plan serves as your company's foundation. It helps secure funding, attract partners, and provides a clear direction for growth. Our plans are designed to be actionable and results-oriented.",
  },
  {
    id: "05",
    question: "What makes your business plans so special?",
    answer:
      "We focus on practical, executable strategies rather than theoretical frameworks. Each plan is backed by thorough market research, financial projections, and implementation timelines that set you up for sustainable success.",
  },
];


function FirstFaqSection() {
  return (
    <section className="relative py-20 md:py-28  h-[80vh]">
      <div
        className="absolute inset-0 bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_history.png)`,
        }}
      >
      </div>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 transition-all duration-700 `}>
          <h2 className="text-4xl md:text-5xl font-medium  text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-2xl font-thin text-muted-foreground ">
            Frequently asked questions about our business plans.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image */}
          <div className={`relative transition-all duration-700 delay-200`}>
            <div className="relative">
              <img
                src={
                  "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/image_illustrations_05.png"
                }
                alt="Business meeting"
                className="w-full max-w-md "
              />
              {/* Decorative elements */}
             </div>
          </div>

          {/* Accordion */}
          <div
            className={`transition-all duration-700 delay-300`}
          >
            <Accordion
              type="single"
              collapsible
              defaultValue="item-01"
              className="space-y-4"
            >
              {faqItems1.map((item) => (
                <AccordionItem
                  key={item.id}
                  value={`item-${item.id}`}
                  className="border border-border/50 rounded-lg overflow-hidden bg-background shadow-sm hover:shadow-md transition-shadow"
                >
                  <AccordionTrigger className="px-6 py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-primary font-bold text-sm">
                        {item.id}
                      </span>
                      <span className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FirstFaqSection;
