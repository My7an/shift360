import { useState } from 'react';
import { Check, Sparkles, Crown, Diamond } from 'lucide-react';
import { Switch } from '@/components/ui/switch';
import CalendlyModal from './CalendlyModal';

const plans = [
  {
    name: 'SOFT',
    monthlyPrice: 1590,
    quarterlyPrice: 1330,
    description: 'Idéal pour démarrer',
    icon: Sparkles,
    features: [
      '1 projet à la fois',
      'Livraison 72h',
      'Web & Print',
      'Retouches illimitées',
      'Collaborateurs illimités',
    ],
    cta: 'Choisir Soft',
    popular: false,
  },
  {
    name: 'AVANCÉ',
    monthlyPrice: 2090,
    quarterlyPrice: 1830,
    description: 'Pour les équipes ambitieuses',
    icon: Crown,
    features: [
      '1 projet à la fois',
      'Livraison 48h',
      'UX/UI Figma',
      'Branding & Rebranding',
      'Sites Webflow & Framer',
    ],
    cta: 'Choisir Avancé',
    popular: true,
  },
  {
    name: 'ULTRA',
    monthlyPrice: 3490,
    quarterlyPrice: 3230,
    description: 'Le meilleur de mylan.group',
    icon: Diamond,
    features: [
      '2 projets simultanés',
      'Livraison 72h',
      'Full services (UX/UI, Web, Branding)',
      'Retouches illimitées',
      'Collaborateurs illimités',
    ],
    cta: 'Choisir Ultra',
    popular: false,
  },
];

const Pricing = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [isQuarterly, setIsQuarterly] = useState(false);

  return (
    <>
      <section id="abonnements" className="py-24 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
              Nos <span className="font-serif-elegant">abonnements</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
              Choisissez le forfait adapté à vos besoins
            </p>

            {/* Switch Mensuel/Trimestriel */}
            <div className="flex items-center justify-center gap-4">
              <span className={`font-medium transition-colors ${!isQuarterly ? 'text-foreground' : 'text-foreground/50'}`}>
                Mensuel
              </span>
              <Switch
                checked={isQuarterly}
                onCheckedChange={setIsQuarterly}
                className="data-[state=checked]:bg-red-500"
              />
              <span className={`font-medium transition-colors ${isQuarterly ? 'text-foreground' : 'text-foreground/50'}`}>
                Trimestriel
                <span className="ml-2 px-2 py-1 text-xs bg-red-500 text-white rounded-full">
                  -15%
                </span>
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bento-card relative flex flex-col p-8 ${
                  plan.popular ? 'ring-2 ring-red-500 glow-red' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-medium rounded-full">
                    Plus populaire
                  </div>
                )}

                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-br from-red-500 to-red-600' 
                      : 'bg-gradient-to-br from-red-500/20 to-red-600/10'
                  }`}>
                    <plan.icon className={`w-6 h-6 ${plan.popular ? 'text-white' : 'text-red-500'}`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{plan.name}</h3>
                    <p className="text-sm text-foreground/60">{plan.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <span className="text-5xl font-bold">
                    {isQuarterly ? plan.quarterlyPrice : plan.monthlyPrice}€
                  </span>
                  <span className="text-foreground/60 ml-2">/mois</span>
                  {isQuarterly && (
                    <p className="text-sm text-foreground/50 mt-1">
                      Facturé trimestriellement
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
                  className={`w-full py-4 rounded-full font-semibold transition-all duration-500 ${
                    plan.popular
                      ? 'btn-liquid-primary'
                      : 'btn-liquid'
                  }`}
                >
                  {plan.cta}
                </button>
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
