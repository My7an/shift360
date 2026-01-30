import { useState } from 'react';
import { Check, Utensils, Smartphone } from 'lucide-react';

const proEatFeatures = [
  'Organisation complète du projet',
  'Osmose créative avec le client',
  'Design 100 % fait main',
  'Retouches illimitées',
  'Solutions sur mesure',
  'Accompagnement professionnel',
  'Visuels produit et couverture',
  'Structure du menu',
  'Plan marketing',
  'Stratégie',
  'Paramétrage optimisé',
];

const proDigitaleFeatures = [
  'Post Instagram',
  'Bannière Instagram',
  'Story Instagram',
  'Paramétrage optimisé',
  'Stratégie',
  'Organisation complète du projet',
  'Osmose créative avec le client',
  'Qualité d\'experts',
  'Design 100 % fait main',
  'Retouches illimitées',
  'Solutions sur mesure',
  'Accompagnement professionnel',
];

const Pricing = () => {
  const [activeOffer, setActiveOffer] = useState<'proeat' | 'prodigitale'>('proeat');
  const [ugcSelected, setUgcSelected] = useState(false);
  const [shootingSelected, setShootingSelected] = useState(false);

  const basePrice = 500;
  const ugcPrice = 500;
  const shootingPrice = 400;

  const calculateTotal = () => {
    let total = basePrice;
    if (ugcSelected) total += ugcPrice;
    if (shootingSelected) total += shootingPrice;
    return total;
  };

  return (
    <>
      <section id="prestations" className="py-32 px-6 animate-section" style={{ animationDelay: '0.1s' }}>
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter">
              Nos <span className="font-playfair italic text-red-accent">offres</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
              Des offres premium, sur mesure, pensées pour vos besoins
            </p>

            {/* Switch Toggle - More prominent */}
            <div className="inline-flex items-center gap-2 p-2 bg-muted rounded-full shadow-lg border border-border">
              <button
                onClick={() => {
                  setActiveOffer('proeat');
                  setUgcSelected(false);
                  setShootingSelected(false);
                }}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeOffer === 'proeat'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/50'
                }`}
              >
                <Utensils className="w-5 h-5" />
                ProEat
              </button>
              <button
                onClick={() => setActiveOffer('prodigitale')}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-semibold transition-all duration-300 ${
                  activeOffer === 'prodigitale'
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg scale-105'
                    : 'text-foreground/60 hover:text-foreground hover:bg-white/50'
                }`}
              >
                <Smartphone className="w-5 h-5" />
                ProDigitale
              </button>
            </div>
          </div>

          {/* ProEat Offer */}
          {activeOffer === 'proeat' && (
            <div className="relative fade-in-up max-w-xl mx-auto">
              {/* Limited offer badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl">
                Offre limitée
              </div>

              <div className="pricing-card bento-card relative flex flex-col p-10 ring-2 ring-red-500/20">
                <div className="flex items-center gap-4 mt-8 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600">
                    <Utensils className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">ProEat</h3>
                    <p className="text-foreground/60">Optimisation plateforme</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">500€</span>
                </div>

                {/* Urgency notice */}
                <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-center text-base font-semibold text-red-600">
                    Quelques places restantes
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Nous optimisons les comptes Uber Eats qui perdent actuellement entre 20 et 30% de rendement par semaine. Grâce à notre méthode d'optimisation complète (structure, stratégie, paramétrage et performance), nous transformons ces comptes en leviers de croissance rentables. Nos clients constatent en moyenne une amélioration de <span className="font-semibold text-red-accent">+65% de leur rendement</span>.
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {proEatFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4 text-base">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-red-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="https://calendly.com/mylanblln/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 rounded-full font-semibold text-lg btn-liquid-primary text-center"
                >
                  Parler avec un spécialiste
                </a>
              </div>
            </div>
          )}

          {/* ProDigitale Offer */}
          {activeOffer === 'prodigitale' && (
            <div className="relative fade-in-up max-w-xl mx-auto">
              {/* Limited offer badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl">
                Offre limitée
              </div>

              <div className="pricing-card bento-card relative flex flex-col p-10 ring-2 ring-red-500/20">
                <div className="flex items-center gap-4 mt-8 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold">ProDigitale</h3>
                    <p className="text-foreground/60">Création de contenu</p>
                  </div>
                </div>

                {/* Dynamic Price */}
                <div className="mb-6">
                  <span className="text-5xl font-bold">{calculateTotal()}€</span>
                  <span className="text-xl text-foreground/60">/mois</span>
                  {(ugcSelected || shootingSelected) && (
                    <span className="ml-3 text-sm text-red-600 font-medium">
                      (base 500€ + options)
                    </span>
                  )}
                </div>

                {/* Urgency notice */}
                <div className="mb-6 p-3 rounded-xl bg-red-50 border border-red-200">
                  <p className="text-center text-base font-semibold text-red-600">
                    Quelques places restantes
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Nous créons du contenu professionnel optimisé pour capter l'attention, renforcer votre image de marque et générer des résultats concrets. Chaque contenu est pensé avec une approche stratégique : visibilité, engagement et conversion. Vous ne publiez plus au hasard — <span className="font-semibold text-red-accent">vous publiez pour performer</span>.
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-8">
                  {proDigitaleFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4 text-base">
                      <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-red-600" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Additional options - Clickable */}
                <div className="mb-8 space-y-4">
                  <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Options supplémentaires</h4>
                  <div className="flex flex-col gap-3">
                    <button
                      onClick={() => setUgcSelected(!ugcSelected)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        ugcSelected 
                          ? 'bg-red-50 border-red-300 ring-2 ring-red-500/20' 
                          : 'bg-muted/50 border-border hover:border-red-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          ugcSelected ? 'bg-red-500 border-red-500' : 'border-foreground/30'
                        }`}>
                          {ugcSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm font-medium">Ajout vidéos UGC TikTok + Instagram</span>
                      </div>
                      <span className="font-semibold text-red-600">+500€</span>
                    </button>
                    <button
                      onClick={() => setShootingSelected(!shootingSelected)}
                      className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 ${
                        shootingSelected 
                          ? 'bg-red-50 border-red-300 ring-2 ring-red-500/20' 
                          : 'bg-muted/50 border-border hover:border-red-300'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                          shootingSelected ? 'bg-red-500 border-red-500' : 'border-foreground/30'
                        }`}>
                          {shootingSelected && <Check className="w-3 h-3 text-white" />}
                        </div>
                        <span className="text-sm font-medium">Shooting photo</span>
                      </div>
                      <span className="font-semibold">
                        <span className="text-red-600">400€</span>
                        <span className="text-xs text-foreground/60 ml-1">/trimestre</span>
                      </span>
                    </button>
                  </div>
                </div>

                <a
                  href="https://calendly.com/mylanblln/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full py-5 rounded-full font-semibold text-lg btn-liquid-primary text-center"
                >
                  Parler avec un spécialiste
                </a>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Pricing;