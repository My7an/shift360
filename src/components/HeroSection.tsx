import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative overflow-hidden hero-gradient">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          {/* Floating Badge */}
          <div className="flex justify-center mb-8 animate-fade-in">
            <div className="badge-floating">
              <span className="ping-dot"></span>
              <span>Commencer aujourd'hui</span>
            </div>
          </div>

          {/* Main Title with Typography Duo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] mb-8 animate-fade-in tracking-tighter">
            votre équipe de design
            <br />
            <span className="font-playfair italic text-red-accent">
              par excellence
            </span>
          </h1>
          
          {/* Subtitle - Professional & Premium */}
          <p className="text-editorial text-xl md:text-2xl lg:text-3xl text-foreground/60 mb-10 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            rapidité d'exécution, livré en 72 heures
          </p>

          {/* Social Proof Avatars */}
          <div className="flex flex-col items-center gap-4 mb-14 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="flex items-center -space-x-3">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face" 
                alt="Client" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face" 
                alt="Client" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face" 
                alt="Client" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
              <img 
                src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face" 
                alt="Client" 
                className="w-12 h-12 rounded-full border-2 border-white object-cover"
              />
            </div>
            <p className="text-sm font-medium text-foreground/70">Plus de 500 clients satisfaits</p>
          </div>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-liquid-primary text-lg px-12 py-6"
            >
              Parler avec un spécialiste
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HeroSection;