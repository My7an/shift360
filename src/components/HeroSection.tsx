import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Spline 3D Background - Centered */}
        <div className="absolute inset-0 z-0">
          <spline-viewer 
            url="https://prod.spline.design/E3BsMnQmkihkMgR8/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        
        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-b from-background/60 via-background/40 to-background/80 pointer-events-none" />
        
        <div className="container mx-auto text-center max-w-5xl relative z-10 pointer-events-none">
          {/* Floating Badge */}
          <div className="flex justify-center mb-8 pointer-events-auto">
            <div className="badge-floating">
              <span className="ping-dot"></span>
              <span>Commencer aujourd'hui</span>
            </div>
          </div>

          {/* Main Title with Typography Duo */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold leading-[1.05] mb-8 animate-fade-in tracking-tighter">
            Vos designs professionnels
            <br />
            <span className="font-playfair italic text-gradient-animated">
              livrés en 72 heures.
            </span>
          </h1>
          
          {/* Subtitle - Professional & Premium */}
          <p className="text-editorial text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-14 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Rapidité d'exécution, qualité experte et organisation structurée.
            <br className="hidden md:block" />
            <span className="text-foreground/50">Votre équipe de design par excellence, sans abonnement.</span>
          </p>

          <div className="flex justify-center animate-fade-in pointer-events-auto" style={{ animationDelay: '0.4s' }}>
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
