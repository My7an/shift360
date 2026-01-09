import { useState } from 'react';
import { Palette, Monitor, FileImage, Wrench } from 'lucide-react';

const categories = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identité',
    services: [
      'Logo et déclinaisons',
      'Identité visuelle',
      'Charte graphique',
      'Iconographie',
      'Typographies',
      'Illustrations',
      'Avatars',
      'Colorimétrie',
    ],
    description: 'Construisez une identité marquante qui laisse une empreinte. Du naming à la charte complète, on façonne une marque qui vous ressemble et qui marque les esprits.',
  },
  {
    id: 'uxui',
    icon: Monitor,
    title: 'UX/UI Design',
    services: [
      'Design Systems',
      'Maquette Figma Mobile & Desktop',
      'Création de sites Webflow & Framer',
      'Prototypes interactifs',
    ],
    description: 'Des sites élégants et des apps intuitives conçues pour la conversion. Chaque écran est pensé pour la navigation fluide et l\'impact visuel. Un site bien designé est votre meilleur commercial.',
  },
  {
    id: 'content',
    icon: FileImage,
    title: 'Création de Contenu',
    services: [
      'Brochures',
      'Pitch Decks',
      'Assets Social Media',
      'Packaging',
      'Infographies',
      'Livres blancs',
      'Motion design',
    ],
    description: 'Des supports qui captivent. Que ce soit pour Instagram ou un lancement produit, on crée des contenus (statiques ou animés) pensés pour être vus, lus et partagés.',
  },
  {
    id: 'custom',
    icon: Wrench,
    title: 'Solutions Sur-Mesure',
    services: [
      'Accompagnement hybride',
      'Audit UX',
      'Design d\'événements',
      'Kits de marque',
    ],
    description: 'On adore sortir du cadre. Design pour événements ou support créa récurrent pour vos équipes internes : dis-nous ce que tu as en tête, on le rend concret.',
  },
];

const ExpertisesSection = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="expertises" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Nos <span className="font-serif-elegant">expertises</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Des compétences variées pour tous vos projets créatifs
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === category.id
                  ? 'bg-black text-white'
                  : 'glass hover:bg-white/20'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeCategory && (
          <div className="bento-card p-8 md:p-12">
            <div className="flex flex-col md:flex-row gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                    <activeCategory.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold">{activeCategory.title}</h3>
                </div>
                <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                  {activeCategory.description}
                </p>
              </div>
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                  Services inclus
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeCategory.services.map((service, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium"
                    >
                      {service}
                    </span>
                  ))}
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
