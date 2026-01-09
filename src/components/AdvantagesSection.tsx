import { 
  Package, 
  Zap, 
  Repeat, 
  BadgeCheck, 
  Hand, 
  Users, 
  PauseCircle, 
  FileText 
} from 'lucide-react';

const advantages = [
  { icon: Package, title: 'Abonnement tout-en-un' },
  { icon: Zap, title: 'Rendu 48h' },
  { icon: Repeat, title: 'Retouches illimitées' },
  { icon: BadgeCheck, title: 'Prix fixe sans frais cachés' },
  { icon: Hand, title: 'Qualité experte (Pas d\'IA, tout est fait main)' },
  { icon: Users, title: 'Jusqu\'à 2 utilisateurs simultanés' },
  { icon: PauseCircle, title: 'Pause ou annulation à tout moment' },
  { icon: FileText, title: 'Workflow documenté et partagé' },
];

const AdvantagesSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Nos <span className="font-serif-elegant">avantages</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Tout ce qui fait la différence avec mylan.group
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bento-card group p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center flex-shrink-0 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
                <advantage.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              <span className="font-semibold text-sm leading-tight">{advantage.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
