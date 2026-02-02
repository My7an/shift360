const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-28 pb-16 px-5 relative overflow-hidden hero-gradient">
      <div className="container mx-auto text-center max-w-5xl relative z-10">
        {/* Top Agency Badge */}
        <div className="flex justify-center mb-6 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-foreground to-foreground/90 text-white shadow-xl">
            <span className="text-yellow-400 text-base">🏆</span>
            <span className="font-semibold text-xs md:text-sm">Top 1 des meilleures agences</span>
          </div>
        </div>

        {/* Main Title with Typography Duo */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold leading-[1.1] mb-6 animate-fade-in tracking-tight">
          votre équipe de design
          <br />
          <span className="font-playfair italic text-red-accent">
            par excellence
          </span>
        </h1>
        
        {/* Subtitle - Professional & Premium */}
        <p className="text-editorial text-lg md:text-xl lg:text-2xl text-foreground/60 mb-8 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          rapidité d'exécution, livré en 72 heures
        </p>

        {/* Social Proof Avatars */}
        <div className="flex flex-col items-center gap-3 mb-10 animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <div className="flex items-center -space-x-2.5">
            <img 
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
              alt="Client" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
              alt="Client" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
              alt="Client" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
            <img 
              src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
              alt="Client" 
              className="w-10 h-10 rounded-full border-2 border-white object-cover"
            />
          </div>
          <p className="text-xs font-medium text-foreground/70">Plus de 500 clients satisfaits</p>
        </div>

        <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://calendly.com/mylanblln/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-primary text-base px-10 py-5"
          >
            Parler avec un spécialiste
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;