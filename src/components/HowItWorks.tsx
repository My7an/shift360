import { Gem, Unlock, Sparkles, Paintbrush } from 'lucide-react';

const steps = [
  {
    icon: Gem,
    title: 'Une expertise haute couture',
    description: 'Oubliez l\'IA et la sous-traitance. Chaque pixel est pensé et créé à la main pour vous, avec une précision artisanale.',
  },
  {
    icon: Unlock,
    title: 'La liberté absolue',
    description: 'Un abonnement fixe, clair et net. Aucun frais caché, aucune chaîne : vous restez parce que vous aimez notre travail, pas parce que vous y êtes obligé.',
  },
  {
    icon: Sparkles,
    title: 'L\'audace créative',
    description: 'Une qualité exceptionnelle qui repousse les limites, accessible en un clic, à chaque instant de votre croissance.',
  },
  {
    icon: Paintbrush,
    title: 'Design fait main',
    description: 'Chaque concept est unique, dessiné exclusivement pour votre marque pour garantir une identité que personne d\'autre n\'aura.',
  },
];

const HowItWorks = () => {
  return (
    <section id="comment-ca-marche" className="py-28 px-6 relative">
      {/* Subtle glow */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto max-w-7xl relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 tracking-tighter">
            Comment ça <span className="font-serif-elegant">marche ?</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-editorial text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto">
            Simple, rapide, efficace. Découvrez notre approche unique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bento-card group flex flex-col p-8 lg:p-10 relative overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-500"></div>
              
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-6 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-red-500/25">
                  <step.icon className="w-7 h-7 text-red-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-xl font-bold mb-4 tracking-tight">{step.title}</h3>
                <p className="text-foreground/60 leading-relaxed text-[15px]">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;