import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const HeroSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Spline 3D Robot - Positioned on the right */}
        <div className="absolute inset-0 z-0 flex items-center justify-end">
          <div className="w-full h-full md:w-[60%] md:h-full md:absolute md:right-0 md:top-0">
            <spline-viewer 
              url="https://prod.spline.design/E3BsMnQmkihkMgR8/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
        
        {/* Subtle gradient overlay - only on left side for text readability */}
        <div className="absolute inset-0 z-[1] bg-gradient-to-r from-background via-background/70 to-transparent pointer-events-none" />
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="flex flex-col items-start text-left max-w-2xl">
            {/* Main Title with Typography Duo */}
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] mb-8 animate-fade-in tracking-tighter">
              Votre équipe design,
              <br />
              <span className="font-serif-elegant text-[1.05em] bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
                par abonnement.
              </span>
            </h1>
            
            {/* Subtitle - Same font, Italic style */}
            <p className="text-editorial text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-14 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              Vos designs professionnels et en illimité.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="btn-liquid-primary text-base px-10 py-5"
              >
                Commencer maintenant
              </button>
              <a 
                href="#comment-ca-marche" 
                onClick={(e) => handleSmoothScroll(e, '#comment-ca-marche')}
                className="btn-liquid text-base"
              >
                Découvrir comment ça marche
              </a>
            </div>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default HeroSection;