import { ArrowRight } from "lucide-react";

export const StrategicIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="40" r="30" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
    <circle cx="40" cy="40" r="20" stroke="url(#gradient1)" strokeWidth="2" fill="none" />
    <circle cx="40" cy="40" r="5" fill="url(#gradient1)" />
    <path d="M40 10V20M40 60V70M10 40H20M60 40H70" stroke="url(#gradient1)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="25" cy="25" r="4" fill="#4F9DA6" />
    <circle cx="55" cy="25" r="4" fill="#4F9DA6" />
    <circle cx="25" cy="55" r="4" fill="#1A0841" />
    <circle cx="55" cy="55" r="4" fill="#1A0841" />
    <path d="M25 25L40 40L55 25" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
    <path d="M25 55L40 40L55 55" stroke="url(#gradient1)" strokeWidth="1.5" fill="none" />
  </svg>
);

export const BusinessIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <rect x="15" y="25" width="50" height="40" rx="3" stroke="url(#gradient2)" strokeWidth="2" fill="none" />
    <path d="M25 25V20C25 17.2386 27.2386 15 30 15H50C52.7614 15 55 17.2386 55 20V25" stroke="url(#gradient2)" strokeWidth="2" />
    <rect x="20" y="35" width="12" height="8" rx="1" fill="#4F9DA6" />
    <rect x="34" y="35" width="12" height="8" rx="1" fill="#1A0841" />
    <rect x="48" y="35" width="12" height="8" rx="1" fill="#4F9DA6" />
    <path d="M25 50H55" stroke="url(#gradient2)" strokeWidth="2" />
    <path d="M25 55H45" stroke="url(#gradient2)" strokeWidth="2" />
  </svg>
);

export const InvestmentIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <rect x="15" y="50" width="12" height="20" fill="url(#gradient3)" rx="2" />
    <rect x="34" y="35" width="12" height="35" fill="#4F9DA6" rx="2" />
    <rect x="53" y="20" width="12" height="50" fill="#1A0841" rx="2" />
    <path d="M15 45L34 30L53 38L70 15" stroke="url(#gradient3)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="15" cy="45" r="3" fill="#4F9DA6" />
    <circle cx="34" cy="30" r="3" fill="#4F9DA6" />
    <circle cx="53" cy="38" r="3" fill="#4F9DA6" />
    <circle cx="70" cy="15" r="3" fill="#1A0841" />
    <path d="M64 15H70V21" stroke="#1A0841" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const AcquisitionsIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <rect x="10" y="15" width="25" height="30" rx="3" stroke="url(#gradient4)" strokeWidth="2" fill="none" />
    <rect x="45" y="35" width="25" height="30" rx="3" stroke="url(#gradient4)" strokeWidth="2" fill="none" />
    <path d="M35 30H45" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    <path d="M35 50H45" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" strokeDasharray="3 3" />
    <circle cx="22.5" cy="25" r="5" fill="#4F9DA6" />
    <path d="M15 38H30" stroke="#4F9DA6" strokeWidth="2" />
    <circle cx="57.5" cy="45" r="5" fill="#1A0841" />
    <path d="M50 58H65" stroke="#1A0841" strokeWidth="2" />
    <path d="M40 20L45 25L40 30" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M40 40L45 45L40 50" stroke="url(#gradient4)" strokeWidth="2" strokeLinecap="round" fill="none" />
  </svg>
);

export const CompanyIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient5" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <rect x="25" y="20" width="30" height="45" rx="3" stroke="url(#gradient5)" strokeWidth="2" fill="none" />
    <rect x="30" y="25" width="8" height="8" rx="1" fill="#4F9DA6" />
    <rect x="42" y="25" width="8" height="8" rx="1" fill="#4F9DA6" />
    <rect x="30" y="38" width="8" height="8" rx="1" fill="#1A0841" />
    <rect x="42" y="38" width="8" height="8" rx="1" fill="#1A0841" />
    <rect x="35" y="52" width="10" height="13" fill="url(#gradient5)" rx="1" />
    <path d="M40 10V20" stroke="url(#gradient5)" strokeWidth="2" />
    <circle cx="40" cy="8" r="3" fill="#4F9DA6" />
  </svg>
);

export const PrivatePlacementIcon = ({ className = '' }: { className?: string }) => (
  <svg className={className} viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="gradient6" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4F9DA6" />
        <stop offset="100%" stopColor="#1A0841" />
      </linearGradient>
    </defs>
    <circle cx="40" cy="25" r="12" stroke="url(#gradient6)" strokeWidth="2" fill="none" />
    <path d="M25 65C25 50.0883 35.0883 40 40 40C44.9117 40 55 50.0883 55 65" stroke="url(#gradient6)" strokeWidth="2" fill="none" />
    <path d="M40 30V20M35 25H45" stroke="url(#gradient6)" strokeWidth="2" strokeLinecap="round" />
    <circle cx="20" cy="50" r="8" stroke="#4F9DA6" strokeWidth="2" fill="none" />
    <circle cx="60" cy="50" r="8" stroke="#1A0841" strokeWidth="2" fill="none" />
    <path d="M28 50H32" stroke="#4F9DA6" strokeWidth="1.5" />
    <path d="M48 50H52" stroke="#1A0841" strokeWidth="1.5" />
    <circle cx="20" cy="50" r="3" fill="#4F9DA6" />
    <circle cx="60" cy="50" r="3" fill="#1A0841" />
  </svg>
);

export const HRIcon = ({ className = '', step = 1 }: { className?: string; step?: number }) => {
  const colors = {
    1: { primary: '#4F9DA6', secondary: '#1A0841' },
    2: { primary: '#1A0841', secondary: '#4F9DA6' },
    3: { primary: '#4F9DA6', secondary: '#1A0841' },
    4: { primary: '#1A0841', secondary: '#4F9DA6' },
  };
  const { primary, secondary } = colors[step as keyof typeof colors] || colors[1];

  return (
    <svg className={className} viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="30" cy="30" r="28" stroke={primary} strokeWidth="2" fill="none" />
      <text x="30" y="35" textAnchor="middle" fill={secondary} fontSize="18" fontWeight="bold">
        {step}
      </text>
    </svg>
  );
};


const services = [
  {
    icon: StrategicIcon,
    title: 'Strategic Consulting Services',
    featured: true,
  },
  {
    icon: BusinessIcon,
    title: 'Company & Business Setup',
    featured: true,
  },
  {
    icon: InvestmentIcon,
    title: 'Investment & Management',
    featured: false,
  },
  {
    icon: AcquisitionsIcon,
    title: 'Acquisitions Consulting',
    featured: false,
  },
  {
    icon: CompanyIcon,
    title: 'Company Management',
    featured: false,
  },
  {
    icon: PrivatePlacementIcon,
    title: 'Private Placement Consulting',
    featured: false,
  },
];

const ServiceCard = ({ 
  service, 
  index, 
}: { 
  service: typeof services[0]; 
  index: number;
}) => {
  const IconComponent = service.icon;
  
  return (
    <div
      className={`group bg-card rounded-xl p-8 border border-border hover:border-primary/30 card-hover cursor-pointer transition-all duration-500
      `}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col items-center text-center">
        <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
          <IconComponent className="w-20 h-20" />
        </div>
        <h3 className="text-lg font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <a
          href="#"
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors group/link"
        >
          READ MORE
          <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const FeatureSection = () => {

  return (
    <section className="py-24 bg-[#f7f7f5]" >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between mb-16 gap-8">
          <div className={`max-w-xl transition-all duration-700 `}>
            <h2 className="text-3xl md:text-6xl  font-medium text-foreground mb-4">
              Be at the forefront of{' '}
              <span className="text-primary">Innovation</span>
            </h2>
            <p className="text-2xl font-thin text-muted-foreground mb-6">
              We're here to inform which tactics need funding and which are drains on resources.
            </p>
            <button className="btn-outline flex items-center gap-2 group">
              Explore Solutions
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Featured cards - top row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 max-w-2xl">
            {services.slice(0, 2).map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index}  />
            ))}
          </div>
        </div>

        {/* Bottom row of cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.slice(2).map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index + 2}  />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;