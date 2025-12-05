import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactInfoSection = () => {
  const offices = [
    {
      label: "HEADQUARTERS",
      city: "Mumbai",
      address: "Creative Industrial Centre, NM Joshi Marg, Lower Parel East",
      zip: "Maharashtra 400013",
    },
    {
      label: "PLAN YOUR VISIT",
      city: "Working hours:",
      address: "Monday - Friday",
      zip: "10 am to 7 pm EST",
    },
  ];

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Contact Info */}
          <div className="animate-fade-in">
            <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4 block">
              HOW CAN WE HELP YOU OUT?
            </span>
            <h2 className="text-4xl font-medium md:text-4xl font-display text-foreground mb-8">
              Reach out to us in the nearest office.
            </h2>

            <a
              href="tel:02247474747"
              className="text-4xl md:text-5xl font-thin font-display text-primary hover:text-primary/80 transition-colors block mb-12"
            >
              022-4747-4747
            </a>

            {/* Offices Grid */}
            <div className="grid grid-cols-2 gap-8 mb-12">
              {offices.map((office, index) => (
                <div key={index}>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider block mb-2">
                    {office.label}
                  </span>
                  <h4 className="text-xl font-medium font-bold text-foreground mb-1">
                    {office.city}
                  </h4>
                  <p className="text-[17px] text-muted-foreground text-sm">
                    {office.address}
                  </p>
                  <p className=" text-[17px] text-muted-foreground text-sm">
                    {office.zip}
                  </p>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div>
              <h4 className="text-lg font-display text-foreground mb-4">
                Social Media
              </h4>
              <div className="flex gap-3">
                {["facebook", "twitter", "instagram", "linkedin"].map(
                  (social) => (
                    <a
                      key={social}
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground hover:bg-primary/80 transition-colors"
                    >
                      {social === "facebook" && (
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 8 16"
                          fill="currentColor"
                        >
                          <path d="M5.19 16V8.7h2.44l.37-2.84H5.19V4.04c0-.82.23-1.38 1.4-1.38h1.5V.11C7.75.08 6.87 0 5.84 0 3.7 0 2.24 1.3 2.24 3.7v2.16H0v2.84h2.24V16h2.95z" />
                        </svg>
                      )}
                      {social === "twitter" && (
                        <svg
                          width="18"
                          height="14"
                          viewBox="0 0 16 14"
                          fill="currentColor"
                        >
                          <path d="M16 1.66c-.59.26-1.22.44-1.88.52.68-.4 1.2-1.05 1.44-1.81-.63.38-1.33.65-2.08.8A3.27 3.27 0 0 0 11.08 0c-1.81 0-3.28 1.47-3.28 3.28 0 .26.03.51.08.75C5.16 3.88 2.73 2.58 1.11.6c-.28.49-.45 1.05-.45 1.66 0 1.14.58 2.14 1.46 2.73-.54-.02-1.04-.16-1.49-.41v.04c0 1.59 1.13 2.91 2.63 3.21-.27.08-.56.12-.86.12-.21 0-.42-.02-.62-.06.42 1.3 1.63 2.25 3.06 2.28a6.57 6.57 0 0 1-4.07 1.4c-.26 0-.52-.01-.78-.04A9.25 9.25 0 0 0 5.03 13c6.03 0 9.33-5 9.33-9.33 0-.14 0-.28-.01-.42.64-.46 1.2-1.04 1.64-1.7z" />
                        </svg>
                      )}
                      {social === "instagram" && (
                        <svg
                          width="18"
                          height="18"
                          viewBox="0 0 16 16"
                          fill="currentColor"
                        >
                          <path d="M8 1.44c2.14 0 2.39.01 3.23.05.78.04 1.2.16 1.48.27.37.14.64.32.92.6.28.28.46.55.6.92.11.28.23.7.27 1.48.04.84.05 1.1.05 3.23s-.01 2.39-.05 3.23c-.04.78-.16 1.2-.27 1.48-.14.37-.32.64-.6.92-.28.28-.55.46-.92.6-.28.11-.7.23-1.48.27-.84.04-1.09.05-3.23.05s-2.39-.01-3.23-.05c-.78-.04-1.2-.16-1.48-.27-.37-.14-.64-.32-.92-.6-.28-.28-.46-.55-.6-.92-.11-.28-.23-.7-.27-1.48C1.45 10.39 1.44 10.14 1.44 8s.01-2.39.05-3.23c.04-.78.16-1.2.27-1.48.14-.37.32-.64.6-.92.28-.28.55-.46.92-.6.28-.11.7-.23 1.48-.27C5.61 1.45 5.86 1.44 8 1.44zM8 0C5.83 0 5.55.01 4.7.05c-.84.04-1.42.17-1.92.37-.52.2-.96.47-1.4.91-.44.44-.71.88-.91 1.4-.2.5-.33 1.08-.37 1.92C.01 5.55 0 5.83 0 8s.01 2.45.05 3.3c.04.84.17 1.42.37 1.92.2.52.47.96.91 1.4.44.44.88.71 1.4.91.5.2 1.08.33 1.92.37.85.04 1.13.05 3.35.05s2.5-.01 3.35-.05c.84-.04 1.42-.17 1.92-.37.52-.2.96-.47 1.4-.91.44-.44.71-.88.91-1.4.2-.5.33-1.08.37-1.92.04-.85.05-1.13.05-3.35s-.01-2.5-.05-3.35c-.04-.84-.17-1.42-.37-1.92-.2-.52-.47-.96-.91-1.4-.44-.44-.88-.71-1.4-.91-.5-.2-1.08-.33-1.92-.37C10.45.01 10.17 0 8 0z" />
                          <path d="M8 3.89a4.11 4.11 0 1 0 0 8.22 4.11 4.11 0 0 0 0-8.22zm0 6.78a2.67 2.67 0 1 1 0-5.34 2.67 2.67 0 0 1 0 5.34z" />
                          <circle cx="12.27" cy="3.73" r=".96" />
                        </svg>
                      )}
                      {social === "linkedin" && (
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 14 14"
                          fill="currentColor"
                        >
                          <path d="M12.82 0H1.18C.53 0 0 .53 0 1.18v11.64c0 .65.53 1.18 1.18 1.18h11.64c.65 0 1.18-.53 1.18-1.18V1.18C14 .53 13.47 0 12.82 0zM4.15 11.93H2.07V5.25h2.08v6.68zM3.11 4.32c-.67 0-1.21-.54-1.21-1.21 0-.67.54-1.21 1.21-1.21.67 0 1.21.54 1.21 1.21 0 .67-.54 1.21-1.21 1.21zm8.93 7.61h-2.08V8.68c0-.77-.01-1.77-1.08-1.77-1.08 0-1.25.84-1.25 1.71v3.31H5.55V5.25h2v.91h.03c.28-.53.96-1.08 1.98-1.08 2.12 0 2.51 1.4 2.51 3.21v3.64z" />
                        </svg>
                      )}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="bg-gray-200/20 border border-border rounded-lg p-8 shadow-sm">
              <span className="text-xs font-thin text-muted-foreground uppercase tracking-wider mb-4 block">
                CONTACT US
              </span>
              <h3 className="text-2xl md:text-4xl font-medium max-w-lg font-display text-foreground mb-8">
                Leave us a little info, and we'll be in touch.
              </h3>

              <form
                className="space-y-6"
                action="https://api.web3forms.com/submit"
                method="POST"
              >
                {/* Web3Forms Required Hidden Fields */}
                <input
                  type="hidden"
                  name="access_key"
                  value="61b1a6c9-b872-4183-b069-07dc34bb5a40"
                />
                <input
                  type="hidden"
                  name="subject"
                  value="New Contact Form Submission"
                />
                <input type="hidden" name="from_name" value="Your Website" />

                <div>
                  <label className="text-primary mb-2 block">
                    Name (required)
                  </label>
                  <Input
                    type="text"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0"
                  />
                </div>

                <div>
                  <label className="text-primary mb-2 block">
                    Your Email (required)
                  </label>
                  <Input
                    type="email"
                    name="email"
                    required
                    placeholder="Your email"
                    className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0"
                  />
                </div>

                <div>
                  <label className="text-primary mb-2 block">
                    Subject (optional)
                  </label>
                  <Input
                    type="text"
                    name="user_subject"
                    placeholder="Your subject"
                    className="border-0 border-b border-border rounded-none bg-transparent focus-visible:ring-0 focus-visible:border-primary px-0"
                  />
                </div>

                <div>
                  <label className="text-primary mb-2 block">
                    Project details
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="Brief project details"
                    className="border border-border rounded-md bg-transparent focus-visible:ring-0 focus-visible:border-primary min-h-[120px]"
                  />
                </div>

                <Button
                  type="submit"
                  variant="outline"
                  className="border-foreground text-foreground hover:bg-foreground hover:text-background"
                >
                  Send a message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInfoSection;
