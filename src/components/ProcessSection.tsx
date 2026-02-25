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
  return (
    <section id="processus" className="py-32 px-6 relative animate-section" style={{ animationDelay: '0.4s' }}>
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter">
            Comment ça <span className="italic text-red-accent">fonctionne ?</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Un processus simple, structuré et professionnel
          </p>
        </div>

        <div className="bento-grid md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bento-card group flex flex-col relative overflow-hidden fade-in-up transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(220,38,38,0.1)]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/0 to-red-500/0 group-hover:from-red-500/5 group-hover:to-red-500/3 transition-all duration-500 rounded-[28px]"></div>

              <div className="relative z-10 flex flex-col h-full">
                <span className="text-7xl md:text-8xl font-extrabold text-foreground/10 mb-6 leading-none transition-all duration-200 group-hover:text-red-accent group-hover:scale-105">
                  {step.number}
                </span>
                <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
                  {step.description}
                </p>
                <a
                  href="https://calendly.com/mylanblln/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-liquid text-sm py-3 px-5 self-start inline-block"
                >
                  Parler avec Mylan
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
