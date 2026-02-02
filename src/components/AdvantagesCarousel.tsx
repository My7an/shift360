import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';
import advantageHandmade from '@/assets/advantage-handmade.png';

const advantages = [
  {
    title: 'Livraison en 72h',
    description: 'Rapidité garantie. Vos designs livrés en 72 heures maximum, sans compromis sur la qualité.',
    image: null,
  },
  {
    title: 'Retouches illimitées',
    description: 'On ajuste, on affine, on peaufine. On s\'arrête seulement quand vous adorez.',
    image: null,
  },
  {
    title: 'Organisation aux petits oignons',
    description: 'Projets partagés, calendrier clair, suivi fluide. Tout est structuré.',
    image: null,
  },
  {
    title: 'Osmose créative',
    description: 'On ne fait pas que produire. On réfléchit avec vous, pour vous.',
    image: null,
  },
  {
    title: 'Design 100 % fait main',
    description: 'Zéro visuel généré par IA. Uniquement du vrai savoir-faire humain.',
    image: advantageHandmade,
  },
  {
    title: 'Qualité d\'expert garantie',
    description: 'Exigence, précision, excellence. Chaque livraison est pensée pour performer.',
    image: null,
  },
  {
    title: 'Accompagnement professionnel',
    description: 'Un expert dédié vous accompagne à chaque étape de votre projet.',
    image: null,
  },
  {
    title: 'Solutions sur mesure',
    description: 'Chaque projet est unique. Nous adaptons notre approche à vos besoins spécifiques.',
    image: null,
  },
];

const AdvantagesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="py-32 px-6 animate-section" style={{ animationDelay: '0.35s' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter pr-4">
            Nos <span className="font-playfair italic text-red-accent">avantages</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tout ce qui fait la différence avec 909.agency
          </p>
        </div>

        <Carousel
          setApi={setApi}
          opts={{
            align: 'start',
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {advantages.map((advantage, index) => (
              <CarouselItem key={index} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                <div className="bento-card h-full min-h-[320px] flex flex-col p-6">
                  {/* Image */}
                  <div className="w-full aspect-square bg-gradient-to-br from-foreground/5 to-foreground/10 rounded-2xl mb-6 flex items-center justify-center overflow-hidden">
                    {advantage.image ? (
                      <img src={advantage.image} alt={advantage.title} className="w-3/4 h-3/4 object-contain" />
                    ) : (
                      <div className="w-16 h-16 rounded-full bg-foreground/10" />
                    )}
                  </div>
                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2">{advantage.title}</h3>
                  <p className="text-sm text-foreground/60 leading-relaxed">{advantage.description}</p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>

        {/* Navigation buttons */}
        <div className="flex justify-center gap-4 mt-8">
          <button
            onClick={scrollPrev}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-all duration-300"
            aria-label="Précédent"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={scrollNext}
            className="w-12 h-12 rounded-full border border-foreground/20 flex items-center justify-center hover:bg-foreground/5 transition-all duration-300"
            aria-label="Suivant"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default AdvantagesCarousel;