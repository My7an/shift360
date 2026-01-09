import { Clock, Shield, Sparkles, Zap, Users, HeartHandshake, Palette, Globe } from 'lucide-react';

const benefits = [
  { icon: Clock, title: 'Livraison 48h max', description: 'Chaque demande livrée en 48h maximum' },
  { icon: Shield, title: 'Sans engagement', description: 'Annulez à tout moment, sans questions' },
  { icon: Sparkles, title: 'Expertise 2026', description: 'Technologies et tendances actuelles' },
  { icon: Zap, title: 'File d\'attente illimitée', description: 'Ajoutez autant de demandes que nécessaire' },
  { icon: Users, title: 'Équipe dédiée', description: 'Des designers seniors à votre service' },
  { icon: HeartHandshake, title: 'Satisfaction garantie', description: 'Révisions jusqu\'à satisfaction complète' },
  { icon: Palette, title: 'Tous types de design', description: 'UI, branding, illustration, motion...' },
  { icon: Globe, title: 'Support 24/7', description: 'Une équipe disponible en continu' },
];

const Benefits = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Pourquoi nous <span className="font-serif-elegant">choisir ?</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Les avantages qui font la différence
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bento-card group p-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-4 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
                <benefit.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-lg font-bold mb-2">{benefit.title}</h3>
              <p className="text-sm text-foreground/60">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;