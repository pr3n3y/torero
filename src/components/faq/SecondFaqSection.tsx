import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { WaveShape } from "../WaveShape";
const faqItems2 = [
  {
    id: "01",
    question: "Do we really need a business plan?",
    answer:
      "Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop on focusing solely on the bottom line. Podcasting operational change management inside of workflows to establish a framework. Taking seamless key performance indicators offline to maximise the long tail.",
  },
  {
    id: "02",
    question: "What makes your business plans so special?",
    answer:
      "Our unique methodology combines data-driven insights with creative strategy development. We analyze market trends, competitive landscapes, and growth opportunities to create plans that are both innovative and practical.",
  },
  {
    id: "03",
    question: "Do we really need a business plan?",
    answer:
      "Yes, having a solid business plan is crucial for success. It serves as a roadmap for your business journey and helps you stay focused on your goals while adapting to market changes.",
  },
  {
    id: "04",
    question: "What makes your business plans so special?",
    answer:
      "We pride ourselves on delivering actionable, results-oriented business plans that are tailored to your specific industry and market conditions. Our team of experts ensures every plan is thoroughly researched and strategically sound.",
  },
];

function SecondFaqSection() {
  return (
    <section className="py-20 md:py-28   relative overflow-hidden h-[90vh]">
      <div
        className="absolute inset-0 bg-cover bg-center h-[90vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/background_history.png)`,
        }}
      ></div>
      <div className="container mx-auto px-6  relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - FAQ */}
          <div className={`transition-all duration-700`}>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-teal-light rounded-lg flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl md:text-5xl font-medium text-foreground">
                FAQ Strategy
              </h2>
            </div>

            <Accordion
              type="single"
              collapsible
              defaultValue="strategy-01"
              className="space-y-4"
            >
              {faqItems2.map((item) => (
                <AccordionItem
                  key={`strategy-${item.id}`}
                  value={`strategy-${item.id}`}
                  className="border-b border-border/30"
                >
                  <AccordionTrigger className="py-4 hover:no-underline group">
                    <div className="flex items-center gap-4 text-left">
                      <span className="text-primary font-bold text-sm">
                        {item.id}
                      </span>
                      <span className="font-medium   text-foreground group-hover:text-primary transition-colors">
                        {item.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-2 text-muted-foreground leading-relaxed pl-10">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          {/* Right side - Image */}
          <div className={`relative transition-all duration-700 delay-200 `}>
            <div
              className="relative w-full aspect-square overflow-hidden"
              style={{
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
            >
              <img
                src={
                  "https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/fluid_hero_04-1536x1024.jpg"
                }
                alt="Team collaboration"
                className="w-full rounded-lg shadow-xl"
              />
              {/* Decorative circles */}
            </div>
          </div>
        </div>
      </div>
      <WaveShape
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_grey_bottom_left_shape_01.png"
        className="bottom-0"
      />
    </section>
  );
}

export default SecondFaqSection;
