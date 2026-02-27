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

const row1 = [portfolioChickenCafe, portfolioStreetSaveur, portfolioBigUs, portfolioMenuboard1];
const row2 = [portfolioFlyers1, portfolioInstagramFlyers, portfolioMenuboard2, portfolioUberEats];
const row3 = [portfolioCoqCook, portfolioOcaliCrousty, portfolioSupremeGrill, portfolioChickenCafe];

interface MarqueeRowProps {
  images: string[];
  direction: 'left' | 'right';
  duration: number;
  onImageClick: (src: string) => void;
}

const MarqueeRow = ({ images, direction, duration, onImageClick }: MarqueeRowProps) => {
  // Double the images for seamless loop
  const doubled = [...images, ...images];

  return (
    <div className="overflow-hidden group/row">
      <div
        className="flex gap-4 w-max group-hover/row:[animation-play-state:paused]"
        style={{
          animation: `marquee-${direction} ${duration}s linear infinite`,
        }}
      >
        {doubled.map((img, i) => (
          <div
            key={i}
            className="w-[260px] md:w-[300px] lg:w-[360px] flex-shrink-0 rounded-[6px] overflow-hidden cursor-pointer transition-transform duration-500 hover:scale-[1.03]"
            style={{ aspectRatio: '3/4' }}
            onClick={() => onImageClick(img)}
          >
            <img
              src={img}
              alt="Réalisation Shift360"
              className="w-full h-full object-cover"
              draggable={false}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioMarquee = () => {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  return (
    <>
      <style>{`
        @keyframes marquee-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-left {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
      `}</style>

      <section id="projets" className="py-24 overflow-hidden relative animate-section" style={{ animationDelay: '0.2s' }}>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-6 mb-16 relative">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Nos réalisations
            </h2>
          </div>
        </div>

        <div className="space-y-4">
          <MarqueeRow images={row1} direction="right" duration={35} onImageClick={setLightboxImage} />
          <MarqueeRow images={row2} direction="left" duration={40} onImageClick={setLightboxImage} />
          <MarqueeRow images={row3} direction="right" duration={38} onImageClick={setLightboxImage} />
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
