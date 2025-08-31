const FloatingElements = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-primary rounded-full opacity-20 floating"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-accent/30 rounded-lg rotate-45 floating-delayed"></div>
      <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-primary/20 rounded-full floating"></div>
      <div className="absolute top-60 right-1/3 w-8 h-8 bg-gradient-primary rounded-full opacity-40 floating-delayed"></div>
      
      {/* Particle dots */}
      <div className="particle-container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      
      {/* Animated lines */}
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
            <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path 
          d="M0,100 Q400,50 800,100 T1600,100" 
          stroke="url(#lineGradient)" 
          strokeWidth="2" 
          fill="none"
          className="animate-pulse-glow"
        />
      </svg>
    </div>
  );
};

export default FloatingElements;