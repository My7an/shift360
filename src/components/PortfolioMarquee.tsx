import { useState } from 'react';
import { X } from 'lucide-react';
import portfolioMenuboard1 from '@/assets/portfolio-menuboard-1.png';
import portfolioFlyers1 from '@/assets/portfolio-flyers-1.png';
import portfolioInstagramFlyers from '@/assets/portfolio-instagram-flyers.png';
import portfolioMenuboard2 from '@/assets/portfolio-menuboard-2.png';
import portfolioBigUs from '@/assets/portfolio-big-us.png';
import portfolioUberEats from '@/assets/portfolio-ubereats.png';
import portfolioChickenCafe from '@/assets/portfolio-chicken-cafe.png';
import portfolioCoqCook from '@/assets/portfolio-coq-cook.png';
import portfolioOcaliCrousty from '@/assets/portfolio-ocali-crousty.png';
import portfolioStreetSaveur from '@/assets/portfolio-street-saveur.png';
import portfolioSupremeGrill from '@/assets/portfolio-supreme-grill.png';

const portfolioItems = [
  { id: 1, image: portfolioMenuboard1 },
  { id: 2, image: portfolioFlyers1 },
  { id: 3, image: portfolioInstagramFlyers },
  { id: 4, image: portfolioMenuboard2 },
  { id: 5, image: portfolioBigUs },
  { id: 6, image: portfolioUberEats },
  { id: 7, image: portfolioChickenCafe },
  { id: 8, image: portfolioCoqCook },
  { id: 9, image: portfolioOcaliCrousty },
  { id: 10, image: portfolioStreetSaveur },
  { id: 11, image: portfolioSupremeGrill },
];

const PortfolioMarquee = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <section id="projets" className="py-24 overflow-hidden relative animate-section" style={{ animationDelay: '0.2s' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 mb-16 relative">
          <div className="text-center space-y-4">
            <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
              Nos <span className="italic text-red-accent">réalisations</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary/80 mx-auto rounded-full"></div>
          </div>
        </div>
        
        <div className="px-6 relative">
          <div className="horizontal-scroll py-4">
            {portfolioItems.map((item) => (
              <div
                key={item.id}
                className="w-[280px] md:w-[320px] lg:w-[380px] flex-shrink-0 rounded-sm overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
                style={{ aspectRatio: '3/4' }}
                onClick={() => setLightboxImage(item.image)}
              >
                <div className="relative w-full h-full">
                  <img 
                    src={item.image} 
                    alt="Réalisation Shift360"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in cursor-pointer"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-foreground/80 hover:text-foreground transition-colors z-10"
            onClick={() => setLightboxImage(null)}
            aria-label="Fermer"
          >
            <X size={32} />
          </button>
          <img
            src={lightboxImage}
            alt="Réalisation Shift360"
            className="max-w-[90vw] max-h-[90vh] object-contain rounded-sm animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </>
  );
};

export default PortfolioMarquee;
