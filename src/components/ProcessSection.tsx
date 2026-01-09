import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const steps = [
  {
    number: '01',
    title: 'Choisissez l\'abonnement',
    description: 'Nos formules s\'adaptent à votre rythme : 1 ou 2 projets en parallèle, 48h ou 72h de délai. Design illimité et sans engagement.',
  },
  {
    number: '02',
    title: 'Accédez à votre Design Board',
    description: 'Une fois activé, recevez votre espace Trello personnalisé. Votre QG pour piloter briefs, priorités et livraisons.',
  },
  {
    number: '03',
    title: 'Déposez votre brief',
    description: 'Besoin d\'un logo ou d\'une landing ? Remplissez un brief en quelques minutes. On capte vite, on lance rapidement.',
  },
  {
    number: '04',
    title: 'Recevez vos designs',
    description: 'Livraison sous 48h ou 72h. Validez, demandez des ajustements ou passez à la suite. Flexible et à votre rythme.',
  },
];

const ProcessSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section id="processus" className="py-32 px-6 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
              Comment ça <span className="font-serif-elegant text-gradient-animated">marche ?</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Un processus simple et efficace pour vos créations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bento-card group flex flex-col p-8 relative overflow-hidden fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-6xl md:text-7xl font-extrabold text-red-500/20 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-extrabold mb-3">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
                    {step.description}
                  </p>
                  <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className="btn-liquid text-sm py-2 px-4 self-start"
                  >
                    PARLER À UN EXPERT
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default ProcessSection;