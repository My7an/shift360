import { Infinity, Users, RefreshCw } from 'lucide-react';

const steps = [
  {
    icon: Infinity,
    title: 'Un abonnement design illimité',
    description: 'Demandes illimitées, révisions illimitées. Un forfait simple pour tous vos besoins design.',
  },
  {
    icon: Users,
    title: 'Partagez l\'accès avec vos collaborateurs',
    description: 'Invitez toute votre équipe sans frais supplémentaires. Collaboration fluide et transparente.',
  },
  {
    icon: RefreshCw,
    title: 'Retouches illimitées jusqu\'à satisfaction',
    description: 'On ne s\'arrête pas tant que vous n\'êtes pas 100% satisfait. C\'est notre promesse.',
  },
];

const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Comment ça marche?
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Simple, rapide, efficace. Découvrez notre processus en 3 étapes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bento-card group flex flex-col items-center text-center p-8 lg:p-10"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
                <step.icon className="w-8 h-8 text-red-500 group-hover:text-white transition-colors duration-500" />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-foreground/60 leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
