import { useState } from 'react';
import { Palette, Monitor, FileImage, Wrench } from 'lucide-react';

const categories = [
  {
    id: 'branding',
    icon: Palette,
    title: 'Branding & Identité',
    tagline: 'Construisez une identité marquante qui laisse une empreinte à chaque interaction.',
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
    copy: 'On crée une identité cohérente, mémorable et alignée avec votre vision. Du naming à la charte complète, on façonne une marque qui vous ressemble et qui marque les esprits.',
  },
  {
    id: 'uxui',
    icon: Monitor,
    title: 'UX/UI Design',
    tagline: 'Des sites élégants, des apps intuitives et conçues pour la conversion.',
    services: [
      'Design Systems',
      'Maquette Figma mobile & desktop',
      'Création de sites Webflow & Framer',
      'Prototypes interactifs',
    ],
    copy: 'On conçoit votre site pour qu\'il fonctionne. Navigation fluide, structure intuitive, visuels impactants. Un site bien designé est votre meilleur commercial.',
  },
  {
    id: 'content',
    icon: FileImage,
    title: 'Création de Contenu',
    tagline: 'Des supports print & digitaux qui captivent et engagent vos clients.',
    services: [
      'Brochures',
      'Pitch Decks & Présentations',
      'Assets social media',
      'Kakémonos',
      'Packaging',
      'Infographies',
      'Livres blancs',
      'Motion design',
    ],
    copy: 'Que ce soit pour Instagram ou une présentation stratégique, on livre des visuels impactants (statiques ou animés) et des textes percutants. Pensés pour être vus et partagés.',
  },
  {
    id: 'custom',
    icon: Wrench,
    title: 'Solutions Sur-mesure',
    tagline: 'Des solutions créatives qui s\'adaptent à vos besoins spécifiques.',
    services: [
      'Design d\'événements',
      'Templates internes',
      'Kits de marque',
      'Audit UX',
      'Design de produits innovants',
      'Support créa récurrent',
    ],
    copy: 'On adore sortir du cadre. Un mix de design, conseil ou accompagnement long terme ? Dis-nous ce que tu as en tête, on le rend concret, beau et fonctionnel.',
  },
];

const ExpertisesSection = () => {
  const [activeTab, setActiveTab] = useState('branding');
  const activeCategory = categories.find((cat) => cat.id === activeTab);

  return (
    <section id="expertises" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
            Nos <span className="font-serif-elegant text-gradient-animated">expertises</span>
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
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                activeTab === category.id
                  ? 'bg-black text-white scale-105'
                  : 'glass hover:bg-white/20 hover:scale-105'
              }`}
            >
              <category.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        {activeCategory && (
          <div className="bento-card p-8 md:p-12 fade-in-up" key={activeCategory.id}>
            <div className="flex flex-col gap-8">
              {/* Header */}
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center">
                  <activeCategory.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight">{activeCategory.title}</h3>
                  <p className="text-foreground/60 text-lg italic mt-1">"{activeCategory.tagline}"</p>
                </div>
              </div>

              {/* Two columns layout */}
              <div className="grid md:grid-cols-2 gap-8">
                {/* Services */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                    Services inclus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {activeCategory.services.map((service, index) => (
                      <span
                        key={index}
                        className="px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-white/20"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/50 uppercase tracking-wider mb-4">
                    Notre approche
                  </h4>
                  <p className="text-lg text-foreground/70 leading-relaxed">
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