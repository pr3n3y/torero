import { CheckCircle } from "lucide-react";

const services = [
  "Valuation Services",
  "Development of Financial Models",
  "Corporate Financial Advisory",
  "Deal Structuring",
];

const TeamQuoteSection = () => {
  return (
    <section className="py-12  relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className="relative  animate-fade-in-left">
            <div className="relative">
              <span>
                <img
                  decoding="async"
                  width="690"
                  height="850"
                  src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/team_02.png"
                  className="attachment-full size-full"
                  alt="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/team_02.png"
                  data-full_image_src="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/team_02.png"
                  title="team_02"
                  sizes="(max-width: 690px) 100vw, 690px"
                />
              </span>
            </div>
          </div>

          {/* Content Side */}
          <div
            className="animate-fade-in-right"
            style={{ animationDelay: "200ms" }}
          >
            {/* Quote Mark */}
            <div className="text-8xl font-display text-primary/20 leading-none mb-2">
              "
            </div>

            <h2 className="text-2xl md:text-3xl font-medium font-display text-foreground mb-6 leading-relaxed">
              We help our clients reimagine, restructure and renew business
              functions to create agile and resilient organizations.
            </h2>

            {/* Signature */}
            <div className="mb-8">
              <p className="text-primary font-medium">Keenan Webber</p>
              <p className="text-muted-foreground text-sm">CEO</p>
              <div className="mt-2">
                <svg
                  width="120"
                  height="40"
                  viewBox="0 0 120 40"
                  className="text-foreground"
                >
                  <path
                    d="M10 30 Q30 10 50 25 T90 20 Q100 18 110 25"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    className="opacity-60"
                  />
                </svg>
              </div>
            </div>

            <p className="text-muted-foreground mb-8">
              A global mindset and a collaborative culture. We work to
              understand your issues and are driven to ask better questions in
              the pursuit of making your business work better.
            </p>

            {/* Services List */}
            <div className="space-y-3">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 opacity-0 animate-fade-in"
                  style={{ animationDelay: `${400 + index * 100}ms` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamQuoteSection;
