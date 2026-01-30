import { useState } from 'react';
import CalendlyModal from './CalendlyModal';

const steps = [
  {
    number: '01',
    title: 'Échange stratégique',
    description: 'Parlez avec un spécialiste pour comprendre vos besoins. Nous posons les bonnes questions pour cadrer votre projet.',
  },
  {
    number: '02',
    title: 'Accédez à votre Design Board',
    description: 'Une fois activé, recevez votre espace Trello personnalisé. Votre QG pour piloter briefs, priorités et livraisons avec une organisation professionnelle.',
  },
  {
    number: '03',
    title: 'Déposez votre brief',
    description: 'Besoin de support visuels. Remplissez un brief en quelques minutes. On capte vite, on lance rapidement avec une qualité premium.',
  },
  {
    number: '04',
    title: 'Recevez vos designs',
    description: 'Livraison sous 48h à 72h. Validez, demandez des ajustements illimités ou passez à la suite. Accompagnement professionnel à chaque étape.',
  },
];

const ProcessSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section id="processus" className="py-32 px-6 relative animate-section" style={{ animationDelay: '0.4s' }}>
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-foreground/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="container mx-auto max-w-6xl relative">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter">
              Comment ça <span className="font-playfair italic text-red-accent">marche ?</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
              Un processus simple, structuré et professionnel
            </p>
          </div>

          <div className="bento-grid md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="bento-card group flex flex-col relative overflow-hidden fade-in-up transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.1)]"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-foreground/0 to-foreground/0 group-hover:from-foreground/5 group-hover:to-foreground/3 transition-all duration-500 rounded-[28px]"></div>

                <div className="relative z-10 flex flex-col h-full">
                  <span className="text-7xl md:text-8xl font-extrabold text-foreground/10 mb-6 leading-none transition-all duration-200 group-hover:text-foreground group-hover:scale-105">
                    {step.number}
                  </span>
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                    {step.description}
                  </p>
                  <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className="btn-liquid text-sm py-3 px-5 self-start"
                  >
                    Parler avec un spécialiste
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