import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi,
} from '@/components/ui/carousel';

const advantages = [
  {
    title: 'Prix mensuel fixe',
    description: 'Un seul tarif, clair et net. Zéro surprise, zéro stress.',
  },
  {
    title: 'Projets livrés en 48h',
    description: 'Top chrono lancé. Rapide, efficace, sans compromis sur la qualité.',
  },
  {
    title: 'Retouches illimitées',
    description: 'On ajuste, on affine, on peaufine. On s\'arrête seulement quand vous adorez.',
  },
  {
    title: 'Jusqu\'à 2 collaborateurs inclus',
    description: 'Travaillez à plusieurs, sans surcoût. Alors, on partage le plan ?',
  },
  {
    title: 'Pause ou annulation à tout moment',
    description: 'Besoin de souffler ? Aucun souci. Vous êtes libre, toujours.',
  },
  {
    title: 'Organisation aux petits oignons',
    description: 'Projets partagés, calendrier clair, suivi fluide. Tout est structuré.',
  },
  {
    title: 'Osmose créative',
    description: 'On ne fait pas que produire. On réfléchit avec vous, pour vous.',
  },
  {
    title: 'Design 100 % fait main',
    description: 'Zéro visuel généré par IA. Uniquement du vrai savoir-faire humain.',
  },
  {
    title: 'Qualité d\'expert garantie',
    description: 'Exigence, précision, excellence. Chaque livraison est pensée pour performer.',
  },
];

const AdvantagesCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();

  const scrollPrev = () => api?.scrollPrev();
  const scrollNext = () => api?.scrollNext();

  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter pr-4">
            Nos <span className="text-gradient-animated">avantages</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tout ce qui fait la différence avec mylan.group
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
                  {/* Image placeholder */}
                  <div className="w-full aspect-square bg-gradient-to-br from-red-500/10 to-red-600/5 rounded-2xl mb-6 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500/20 to-red-600/10" />
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
