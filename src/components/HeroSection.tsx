import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto text-center max-w-5xl relative z-10">
          {/* Floating Badge */}
          <div className="flex justify-center mb-8">
            <div className="badge-floating">
              <span className="ping-dot"></span>
              <span>Commencer aujourd'hui</span>
            </div>
          </div>

          {/* Main Title with Typography Duo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] mb-8 animate-fade-in tracking-tighter">
            votre équipe de design
            <br />
            <span className="font-playfair italic text-gradient-animated">
              par excellence
            </span>
          </h1>
          
          {/* Subtitle - Professional & Premium */}
          <p className="text-editorial text-xl md:text-2xl lg:text-3xl text-foreground/60 mb-14 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            rapidité d'exécution, livré en 72 heures
          </p>

          <div className="flex justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-liquid-primary text-lg px-12 py-6"
            >
              Parler avec un expert
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HeroSection;