import { 
  Package, 
  Zap, 
  Repeat, 
  BadgeCheck, 
  Hand, 
  Users, 
  PauseCircle, 
  FileText,
  Lightbulb,
  Heart
} from 'lucide-react';

const advantages = [
  { icon: Package, title: 'Abonnement tout-en-un', subtitle: 'Tous vos besoins au même endroit' },
  { icon: Zap, title: 'Projets rendus en 48h', subtitle: 'Rapidité garantie' },
  { icon: Repeat, title: 'Retouches illimitées', subtitle: 'Satisfaction prioritaire' },
  { icon: BadgeCheck, title: 'Prix fixe mensuel', subtitle: 'Sans frais cachés, sans engagement' },
  { icon: Heart, title: 'Qualité d\'expert garantie', subtitle: 'Excellence à chaque livraison' },
  { icon: Users, title: 'Jusqu\'à 2 utilisateurs', subtitle: 'Up to 2 users' },
  { icon: PauseCircle, title: 'Pause ou annulation', subtitle: 'À tout moment' },
  { icon: FileText, title: 'Organisation totale', subtitle: 'Rangé, documenté, partagé' },
  { icon: Lightbulb, title: 'Osmose créative', subtitle: 'On réfléchit avec vous' },
  { icon: Hand, title: 'Designs faits main', subtitle: 'Zéro IA, zéro sous-traitance, 100% humain' },
];

const AdvantagesSection = () => {
  return (
    <section className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
            Nos <span className="font-serif-elegant text-gradient-animated">avantages</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tout ce qui fait la différence avec mylan.group
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bento-card group p-6 flex flex-col items-start gap-4 fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <advantage.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
              </div>
              <div>
                <span className="font-bold text-sm leading-tight block">{advantage.title}</span>
                <span className="text-xs text-foreground/50 mt-1 block">{advantage.subtitle}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;