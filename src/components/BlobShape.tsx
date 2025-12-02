interface BlobShapeProps {
  variant?: 'teal' | 'coral' | 'purple';
  className?: string;
  animate?: boolean;
}

export const BlobShape = ({ variant = 'teal', className = '', animate = true }: BlobShapeProps) => {
  const gradientColors = {
    teal: { start: '#00B4D8', end: '#48CAE4' },
    coral: { start: '#FF8A5B', end: '#FF6B9D' },
    purple: { start: '#A78BFA', end: '#818CF8' },
  };

  const colors = gradientColors[variant];
  const gradientId = `blob-gradient-${variant}`;

  return (
    <div className={`absolute ${animate ? 'animate-float' : ''} ${className}`}>
      <svg viewBox="0 0 400 400" className="w-full h-full opacity-90">
        <defs>
          <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={colors.start} stopOpacity="0.7" />
            <stop offset="100%" stopColor={colors.end} stopOpacity="0.5" />
          </linearGradient>
        </defs>
        <path
          fill={`url(#${gradientId})`}
          d="M380.5,292.9c-44.5,51.7-130.8,90.4-203.2,74.4S49.8,266.9,30.9,193.1s-6.5-158.2,60.7-192.2s163.5-8.6,228.8,37.4S425,241.2,380.5,292.9z"
        />
      </svg>
    </div>
  );
};
