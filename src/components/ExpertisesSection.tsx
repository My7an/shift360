import { useState } from 'react';
import { Settings, FileImage } from 'lucide-react';

const categories = [
  {
    id: 'platform',
    icon: Settings,
    title: 'Optimisation de plateforme',
    tagline: 'Maximisez vos performances sur les plateformes de livraison.',
    services: [
      'Optimisation Uber Eats',
      'Optimisation Deliveroo',
      'Visuels photos produit',
      'Visuels photos bannière',
      'Structure du menu',
      'Plan marketing',
      'Stratégie',
      'Paramétrage optimisé',
    ],
    copy: 'Nous optimisons vos comptes Uber Eats et Deliveroo pour maximiser votre rendement. Structure, visuels, paramétrage, chaque détail est pensé pour booster vos commandes.',
  },
  {
    id: 'content',
    icon: FileImage,
    title: 'Création de contenu',
    tagline: 'Du contenu professionnel pour vos réseaux sociaux.',
    services: [
      'Post Instagram',
      'Bannière Instagram',
      'Vidéo Instagram',
      'Vidéo TikTok',
      'Support visuel',
    ],
    copy: 'Besoin de support visuels. Remplissez un brief en quelques minutes. On capte vite, on lance rapidement avec une qualité premium.',
  },
];

const ExpertisesSection = () => {
  const [activeTab, setActiveTab] = useState('platform');
  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="expertises" className="py-32 px-6 animate-section" style={{ animationDelay: '0.3s' }}>
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter">
            Nos <span className="font-playfair italic text-red-accent">expertises</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Des compétences spécialisées pour booster votre activité
          </p>
        </div>

        {/* Tabs - Premium pill style */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`relative flex items-center gap-3 px-7 py-4 rounded-full font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeTab === category.id
                  ? 'bg-gradient-to-r from-red-500 to-red-600 text-white scale-105 shadow-lg'
                  : 'bg-[hsl(0_0%_95%)] border border-[hsl(0_0%_90%)] hover:bg-[hsl(0_0%_92%)] hover:scale-[1.02]'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content - Premium Bento card */}
        {activeCategory && (
          <div className="bento-card p-10 md:p-14 fade-in-up" key={activeCategory.id}>
            <div className="flex flex-col gap-10">
              {/* Header */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center flex-shrink-0 shadow-lg">
                  <activeCategory.icon className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">{activeCategory.title}</h3>
                  <p className="text-foreground/60 text-lg md:text-xl italic mt-2">"{activeCategory.tagline}"</p>
                </div>
              </div>

              {/* Two columns layout */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* Services */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-5">
                    Services inclus
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {activeCategory.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-5 py-2.5 rounded-full bg-white border border-[hsl(0_0%_88%)] text-sm font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-red-500 hover:text-white hover:border-red-500"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-5">
                    Détails
                  </h4>
                  <p className="text-lg md:text-xl text-foreground/70 leading-relaxed">
                    {activeCategory.copy}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExpertisesSection;