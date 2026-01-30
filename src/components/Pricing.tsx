import { useState } from 'react';
import { Check, Utensils, Smartphone } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

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
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const [activeOffer, setActiveOffer] = useState<'proeat' | 'prodigitale'>('proeat');

  return (
    <>
      <section id="prestations" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
              Nos <span className="font-playfair italic text-gradient-animated">offres</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-10">
              Des offres premium, sur mesure, pensées pour vos besoins
            </p>

            {/* Switch Toggle */}
            <div className="inline-flex items-center gap-2 p-1.5 bg-muted rounded-full">
              <button
                onClick={() => setActiveOffer('proeat')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeOffer === 'proeat'
                    ? 'bg-foreground text-background shadow-lg'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <Utensils className="w-4 h-4" />
                ProEat
              </button>
              <button
                onClick={() => setActiveOffer('prodigitale')}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  activeOffer === 'prodigitale'
                    ? 'bg-foreground text-background shadow-lg'
                    : 'text-foreground/60 hover:text-foreground'
                }`}
              >
                <Smartphone className="w-4 h-4" />
                ProDigitale
              </button>
            </div>
          </div>

          {/* ProEat Offer */}
          {activeOffer === 'proeat' && (
            <div className="relative fade-in-up max-w-xl mx-auto">
              {/* Limited offer badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl">
                Offre limitée
              </div>

              <div className="pricing-card bento-card relative flex flex-col p-10 ring-2 ring-foreground/20">
                <div className="flex items-center gap-4 mt-8 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-foreground">
                    <Utensils className="w-8 h-8 text-background" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold">ProEat</h3>
                    <p className="text-foreground/60">Optimisation plateforme</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">500€</span>
                </div>

                {/* Urgency notice */}
                <div className="mb-6 p-3 rounded-xl bg-muted border border-border">
                  <p className="text-center text-base font-semibold text-foreground/70">
                    Quelques places restantes
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Nous optimisons les comptes Uber Eats qui perdent actuellement entre 20 et 30% de rendement par semaine. Grâce à notre méthode d'optimisation complète (structure, stratégie, paramétrage et performance), nous transformons ces comptes en leviers de croissance rentables. Nos clients constatent en moyenne une amélioration de <span className="font-semibold text-foreground">+65% de leur rendement</span>.
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {proEatFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4 text-base">
                      <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-foreground" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full py-5 rounded-full font-semibold text-lg btn-liquid-primary"
                >
                  Parler avec un expert
                </button>
              </div>
            </div>
          )}

          {/* ProDigitale Offer */}
          {activeOffer === 'prodigitale' && (
            <div className="relative fade-in-up max-w-xl mx-auto">
              {/* Limited offer badge */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-foreground text-background text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl">
                Offre limitée
              </div>

              <div className="pricing-card bento-card relative flex flex-col p-10 ring-2 ring-foreground/20">
                <div className="flex items-center gap-4 mt-8 mb-6">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-foreground">
                    <Smartphone className="w-8 h-8 text-background" />
                  </div>
                  <div>
                    <h3 className="text-3xl font-extrabold">ProDigitale</h3>
                    <p className="text-foreground/60">Création de contenu</p>
                  </div>
                </div>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl font-extrabold">500€</span>
                  <span className="text-xl text-foreground/60">/mois</span>
                </div>

                {/* Urgency notice */}
                <div className="mb-6 p-3 rounded-xl bg-muted border border-border">
                  <p className="text-center text-base font-semibold text-foreground/70">
                    Quelques places restantes
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-base text-foreground/70 leading-relaxed">
                    Nous créons du contenu professionnel optimisé pour capter l'attention, renforcer votre image de marque et générer des résultats concrets. Chaque contenu est pensé avec une approche stratégique : visibilité, engagement et conversion. Vous ne publiez plus au hasard — <span className="font-semibold text-foreground">vous publiez pour performer</span>.
                  </p>
                </div>

                <ul className="flex-1 space-y-4 mb-10">
                  {proDigitaleFeatures.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-4 text-base">
                      <div className="w-6 h-6 rounded-full bg-foreground/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-4 h-4 text-foreground" />
                      </div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Additional options */}
                <div className="mb-8 space-y-4">
                  <h4 className="text-sm font-semibold text-foreground/40 uppercase tracking-wider">Options supplémentaires</h4>
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                      <span className="text-sm font-medium">Ajout vidéos UGC TikTok + Instagram</span>
                      <span className="font-semibold">+500€</span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-xl bg-muted/50 border border-border">
                      <span className="text-sm font-medium">Shooting photo</span>
                      <span className="font-semibold">400€ <span className="text-xs text-foreground/60">/trimestre</span></span>
                    </div>
                  </div>
                </div>

                <button
                  onClick={() => setIsCalendlyOpen(true)}
                  className="w-full py-5 rounded-full font-semibold text-lg btn-liquid-primary"
                >
                  Parler avec un expert
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default Pricing;