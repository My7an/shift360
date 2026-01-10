import { useState } from 'react';
import { Palette, Monitor, FileImage, Wrench, Sparkles } from 'lucide-react';

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
      'Mascotte',
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
      'Supports visuels restaurant',
      'Optimisation Uber Eats/Deliveroo',
      'Menus digitaux',
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
            Nos <span className="font-playfair italic text-gradient-animated">expertises</span>
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Des compétences variées pour tous vos projets créatifs
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
                  ? 'bg-foreground text-background scale-105 shadow-lg'
                  : category.id === 'custom'
                    ? 'bg-gradient-to-r from-red-50 to-red-100 border-2 border-red-500 shadow-lg shadow-red-500/20 hover:shadow-xl hover:shadow-red-500/30 hover:scale-[1.04]'
                    : 'bg-[hsl(0_0%_95%)] border border-[hsl(0_0%_90%)] hover:bg-[hsl(0_0%_92%)] hover:scale-[1.02]'
              }`}
            >
              {/* Large yellow star for Solutions Sur-mesure */}
              {category.id === 'custom' && activeTab !== 'custom' && (
                <div className="absolute -top-3 -right-3">
                  <div className="relative">
                    <Sparkles className="w-8 h-8 text-yellow-500 drop-shadow-[0_0_10px_rgba(234,179,8,0.8)] animate-pulse" />
                    <div className="absolute inset-0 bg-yellow-400/60 rounded-full blur-lg animate-ping" style={{ animationDuration: '1.5s' }} />
                    <div className="absolute inset-0 bg-yellow-300/40 rounded-full blur-xl" />
                  </div>
                </div>
              )}
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
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">{activeCategory.title}</h3>
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
                        className="px-5 py-2.5 rounded-full bg-white border border-[hsl(0_0%_88%)] text-sm font-medium transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] hover:bg-foreground hover:text-background hover:border-foreground"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Copy */}
                <div>
                  <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider mb-5">
                    Notre approche
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