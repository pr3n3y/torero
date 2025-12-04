import React from 'react';

const clientLogos = [
  { name: 'cogito', icon: '🦉', style: 'text-gray-400 text-4xl font-bold' },
  { name: 'TRIANGLE', icon: '△', style: 'text-gray-400 tracking-widest text-4xl font-bold' },
  { name: 'Express', icon: '▶', style: 'text-gray-400 text-4xl font-bold' },
  { name: 'limita', prefix: '∧∧∧', style: 'text-gray-400 font-semibold text-4xl font-bold' },
  { name: 'DORCOL', icon: '◇', style: 'text-gray-400 tracking-wide text-4xl font-bold' },
  { name: 'skittared', style: 'text-teal italic font-semibold text-4xl font-bold' },
  { name: 'espace', icon: '◠', style: 'text-gray-400 text-4xl font-bold' },
  { name: 'digital cube', icon: '⬡', style: 'text-gray-400 text-4xl font-bold' },
  { name: 'novalab', style: 'text-gray-500 font-bold text-4xl font-bold' },
  { name: 'Lighthouse', icon: '◎', style: 'text-gray-400 text-4xl font-bold' },
  { name: 'WAVE', style: 'text-gray-400 tracking-wider text-4xl font-bold' },
  { name: 'WHEELCO', icon: '⚙', style: 'text-gray-400 text-4xl font-bold' },
];

const OurClientsSection = () => {
  return (
    <section className="pt-24  relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 opacity-0 animate-fade-in">
            Our Clients
          </h2>
          <p className="text-2xl text-muted-foreground opacity-0 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            We explore some of{' '}
            <span className="text-orange underline decoration-wavy decoration-orange/50">
              the latest trends and strategies
            </span>
          </p>
        </div>

        {/* Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 ma x-w-4xl mx-auto">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-2 py-6 px-4 rounded-lg hover:bg-muted/50 transition-colors duration-300 opacity-0 animate-fade-in"
              style={{ animationDelay: `${0.1 + index * 0.05}s` }}
            >
              {logo.icon && <span className="text-4xl text-gray-400">{logo.icon}</span>}
              {logo.prefix && <span className="text-sm text-gray-400">{logo.prefix}</span>}
              <span className={`font-body whitespace-nowrap ${logo.style}`}>{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClientsSection;
