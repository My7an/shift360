import { useState } from 'react';
import { Check, Sparkles, Crown, Diamond } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import CalendlyModal from './CalendlyModal';

const plans = [
  {
    name: 'Soft',
    monthlyPrice: 1590,
    quarterlyPrice: 1330,
    boosterMonthlyPrice: 2690,
    boosterQuarterlyPrice: 2290,
    description: 'Idéal pour démarrer',
    icon: Sparkles,
    features: [
      '1 projet à la fois',
      'Livraison 72h',
      'Web & Print',
      'Retouches illimitées',
      'Collaborateurs illimités',
      'Expert dédié',
    ],
    cta: 'Parler à un spécialiste',
    popular: false,
  },
  {
    name: 'Avancé',
    monthlyPrice: 2090,
    quarterlyPrice: 1830,
    boosterMonthlyPrice: 3490,
    boosterQuarterlyPrice: 2990,
    description: 'Pour les équipes ambitieuses',
    icon: Crown,
    features: [
      '1 projet à la fois',
      'Livraison 48h',
      'Web & Print',
      'UX/UI Figma',
      'Branding & Rebranding',
      'Sites Webflow & Framer',
      'Retouches illimitées',
      'Collaborateurs illimités',
    ],
    cta: 'Parler à un spécialiste',
    popular: true,
  },
  {
    name: 'Ultra',
    monthlyPrice: 3490,
    quarterlyPrice: 3230,
    boosterMonthlyPrice: 6190,
    boosterQuarterlyPrice: 5290,
    description: 'Le meilleur de DesignShift',
    icon: Diamond,
    features: [
      '2 projets à la fois',
      'Livraison 72h',
      'Web & Print',
      'UX/UI Figma',
      'Branding & Rebranding',
      'Sites Webflow & Framer',
      'Retouches illimitées',
      'Collaborateurs illimités',
    ],
    cta: 'Parler à un spécialiste',
    popular: false,
  },
];

const Pricing = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isQuarterly, setIsQuarterly] = useState(false);
  const [isBooster, setIsBooster] = useState(false);

  const getPrice = (plan: typeof plans[0]) => {
    if (isBooster) {
      return isQuarterly ? plan.boosterQuarterlyPrice : plan.boosterMonthlyPrice;
    }
    return isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice;
  };

  return (
    <>
      <section id="abonnements" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
              Nos <span className="font-playfair italic text-gradient-animated">abonnements</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
              Choisissez le forfait adapté à vos besoins
            </p>

            {/* Switches Container */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
              {/* Switch Mensuel/Trimestriel */}
              <div className="flex items-center gap-4">
                <span className={`font-medium transition-all duration-300 ${!isQuarterly ? 'text-foreground' : 'text-foreground/50'}`}>
                  Mensuel
                </span>
                <Switch
                  checked={isQuarterly}
                  onCheckedChange={setIsQuarterly}
                  className="data-[state=checked]:bg-red-500"
                />
                <span className={`font-medium transition-all duration-300 ${isQuarterly ? 'text-foreground' : 'text-foreground/50'}`}>
                  Trimestriel
                  <span className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                    -15%
                  </span>
                </span>
              </div>

              {/* Separator */}
              <div className="hidden sm:block w-px h-6 bg-foreground/20" />

              {/* Switch Booster +1 Projet */}
              <div className="flex items-center gap-4">
                <span className={`font-medium transition-all duration-300 ${!isBooster ? 'text-foreground/50' : 'text-foreground/50'}`}>
                  Standard
                </span>
                <Switch
                  checked={isBooster}
                  onCheckedChange={setIsBooster}
                  className="data-[state=checked]:bg-red-500"
                />
                <span className={`font-medium transition-all duration-300 ${isBooster ? 'text-foreground' : 'text-foreground/50'}`}>
                  +1 projet simultané
                  <span className="ml-2 px-2 py-1 text-xs bg-gradient-to-r from-red-500 to-red-600 text-white rounded-full">
                    Boost
                  </span>
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div key={index} className="relative overflow-visible fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {plan.popular && (
                  <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl border-2 border-white flex items-center justify-center">
                    Plus populaire
                  </div>
                )}

                <div
                  className={`pricing-card bento-card relative flex flex-col p-8 ${
                    plan.popular ? 'ring-2 ring-red-500 glow-red' : ''
                  }`}
                >
                  <div className={`flex items-center gap-3 ${plan.popular ? 'mt-8' : ''} mb-4`}>
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      plan.popular 
                        ? 'bg-gradient-to-br from-red-500 to-red-600' 
                        : 'bg-gradient-to-br from-red-500/20 to-red-600/10'
                    }`}>
                      <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-red-500'}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-extrabold">{plan.name}</h3>
                      <p className="text-sm text-foreground/60">{plan.description}</p>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-1 flex-wrap">
                      <span className="text-4xl md:text-5xl font-extrabold">
                        {getPrice(plan)}€
                      </span>
                      <span className="text-sm text-foreground/60">/mois</span>
                    </div>
                    {isQuarterly && (
                      <p className="text-sm text-foreground/50 mt-1">
                        Facturé trimestriellement
                      </p>
                    )}
                    {isBooster && (
                      <p className="text-sm text-red-500 mt-1 font-medium">
                        +1 projet simultané inclus
                      </p>
                    )}
                  </div>

                  <ul className="flex-1 space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3 text-sm">
                        <Check className="w-5 h-5 text-red-500 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button
                    onClick={() => setIsCalendlyOpen(true)}
                    className={`w-full py-4 rounded-full font-semibold transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                      plan.popular
                        ? 'btn-liquid-primary'
                        : 'btn-liquid'
                    }`}
                  >
                    {plan.cta}
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

export default Pricing;