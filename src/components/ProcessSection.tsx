import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const steps = [
  {
    number: '01',
    title: 'Choisissez votre abonnement',
    description: 'Nos formules s\'adaptent à votre rythme : 1 ou 2 projets de front. Sans engagement.',
  },
  {
    number: '02',
    title: 'Accédez à votre Design Board',
    description: 'Recevez votre espace Trello personnalisé. C\'est votre QG créatif pour piloter vos priorités.',
  },
  {
    number: '03',
    title: 'Déposez votre brief',
    description: 'Remplissez un brief en 2 minutes ou discutez-en avec nous. On capte vite, on lance rapidement.',
  },
  {
    number: '04',
    title: 'Recevez vos designs',
    description: 'Livraison sous 48h ou 72h selon le forfait. Validez, ajustez, ou passez au projet suivant.',
  },
];

const ProcessSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section id="processus" className="py-24 px-6 relative">
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/8 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Comment ça <span className="font-serif-elegant">marche ?</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Un processus simple et efficace pour vos créations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bento-card group flex flex-col p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-600/0 group-hover:from-red-500/10 group-hover:to-red-600/5 transition-all duration-500"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-6xl md:text-7xl font-bold text-red-500/20 mb-4">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
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
