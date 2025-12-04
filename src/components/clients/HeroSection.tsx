import React from "react";
import { WaveShape } from "../WaveShape";

const clientLogos = [
  {
    name: "TRIANGLE",
    style: "font-body text-4xl font-bold tracking-widest text-gray-400",
  },
  {
    name: "limita",
    style: "font-body text-4xl font-bold text-gray-400",
    prefix: "∧∧∧",
  },
  { name: "DORCOL", style: "font-body text-4xl tracking-wide  font-bold text-gray-400" },
  { name: "skittared", style: "font-body text-4xl italic font-bold text-gray-400" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex flex-col items-center justify-start overflow-hidden ">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[80vh]"
        style={{
          backgroundImage: `url(https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/09/hero_clients.jpg)`,
        }}
      >
        <div className="absolute inset-0 bg-black/35" />
      </div>

      <WaveShape
        variant="coral"
        position="bottom"
        wave="https://nifty.bold-themes.com/swirl/wp-content/uploads/sites/5/2020/08/Wave_White_bottom_right_shape_03.png"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-lg">
          <h1 className="font-display text-5xl md:text-8xl font-medium text-white mb-6 opacity-0 animate-fade-in">
            Clients
          </h1>
          <p
            className="text-white text-2xl leading-relaxed font-thin opacity-0 animate-fade-in max-w-lg"
            style={{ animationDelay: "0.2s" }}
          >
            We exceed our client’s expectations. Here, you can find some of the
            clients we have worked with.
          </p>
        </div>
      </div>

      {/* Bottom Section with Logos */}
      <div className="relative z-10 bg-gradient-to-b from-transparent to-dark/90 py-12">
        <div className="container mx-auto px-6">
          <p
            className="text-center text-white/60  tracking-wider mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s" }}
          >
            You'll be in good company
          </p>
          <div
            className="flex flex-wrap justify-center items-center gap-12 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            {clientLogos.map((logo, index) => (
              <div key={index} className="flex items-center gap-1">
                {logo.prefix && (
                  <span className="text-gray-400 text-">{logo.prefix}</span>
                )}
                <span className={logo.style}>{logo.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
