import { Check, Sparkles, Crown, Diamond } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: '0',
    description: 'Parfait pour démarrer',
    icon: Sparkles,
    features: [
      '1 demande active',
      'Livraison 72h',
      'Révisions illimitées',
      'Support par email',
      'Fichiers sources inclus',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    name: 'Or',
    price: '0',
    description: 'Pour les équipes ambitieuses',
    icon: Crown,
    features: [
      '3 demandes actives',
      'Livraison 48h',
      'Révisions illimitées',
      'Support prioritaire',
      'Fichiers sources inclus',
      'Accès équipe illimité',
      'Motion design inclus',
    ],
    cta: 'Essayer gratuitement',
    popular: true,
  },
  {
    name: 'Diamond',
    price: '0',
    description: 'Le meilleur de mylan.group',
    icon: Diamond,
    features: [
      'Demandes illimitées',
      'Livraison 24h',
      'Révisions illimitées',
      'Support dédié 24/7',
      'Fichiers sources inclus',
      'Accès équipe illimité',
      'Motion design inclus',
      'Direction artistique',
      'Consultant dédié',
    ],
    cta: 'Contacter l\'équipe',
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="abonnements" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Nos abonnements
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl mx-auto">
            Choisissez le forfait adapté à vos besoins
          </p>
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
                <span className="text-5xl font-bold">{plan.price}€</span>
                <span className="text-foreground/60 ml-2">/mois</span>
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
  );
};

export default Pricing;
