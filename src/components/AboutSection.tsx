import mylanPortrait from '@/assets/mylan-portrait.png';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Portrait */}
          <div className="flex-shrink-0">
            <div className="relative">
              <img
                src={mylanPortrait}
                alt="Mylan, fondateur de Shift360"
                className="w-64 h-80 md:w-72 md:h-96 object-cover rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)]"
              />
              <div className="absolute -inset-px rounded-2xl border border-border/30 pointer-events-none" />
            </div>
          </div>

          {/* Text */}
          <div className="space-y-6 text-center lg:text-left max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Enchanté, moi c'est{' '}
              <span className="text-red-accent">Mylan</span>.
            </h2>

            <div className="space-y-4 text-foreground/65 text-[15px] md:text-base leading-relaxed">
              <p>
                Depuis plus de 5 ans, j'aide les entreprises à améliorer leur image et à développer leur chiffre d'affaires grâce à des solutions visuelles efficaces.
              </p>
              <p>
                À la base, c'est une passion. Avec le temps, je me suis formé, j'ai obtenu un Bac+2 et surtout appris énormément sur le terrain et en autodidacte.
              </p>
              <p>
                Aujourd'hui, j'accompagne les entreprises qui veulent créer un univers visuel fort, attirer plus de clients et renforcer leur crédibilité.
              </p>
              <p>
                Chaque projet est différent, c'est pourquoi je propose toujours des solutions personnalisées, pensées pour durer et construire une collaboration sur le long terme.
              </p>
              <p>
                J'accorde aussi beaucoup d'importance au contact humain : comprendre les personnes derrière les projets est pour moi essentiel.
              </p>
              <p className="text-foreground/80 font-medium">
                Si vous voulez donner une nouvelle dimension à votre image, on peut en parler.
              </p>
            </div>

            <div className="pt-2">
              <a
                href="https://calendly.com/mylanblln/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-liquid text-sm px-8 py-3 inline-block"
              >
                Discutons ensemble
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
