import { useState } from 'react';
import { Check, Diamond } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const ultraFeatures = [
  'Organisation complète du projet',
  'Osmose créative avec le client',
  'Qualité d\'experts',
  'Design 100 % fait main',
  'Livraison en 48 à 72 heures',
  'Retouches illimitées',
  'Solutions sur mesure',
  'Accompagnement professionnel',
  'Expert dédié',
];

const Pricing = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section id="prestations" className="py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
              Nos <span className="font-playfair italic text-gradient-animated">prestations</span>
            </h2>
            <p className="text-lg text-foreground/60 max-w-2xl mx-auto mb-8">
              Une offre premium, sur mesure, sans abonnement
            </p>
          </div>

          {/* Single ULTRA Offer */}
          <div className="relative fade-in-up max-w-xl mx-auto">
            {/* Popular badge */}
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-6 py-2.5 bg-gradient-to-r from-red-500 to-red-600 text-white text-sm font-semibold rounded-full whitespace-nowrap z-20 shadow-xl border-2 border-white flex items-center justify-center">
              Offre Premium
            </div>

            <div className="pricing-card bento-card relative flex flex-col p-10 ring-2 ring-red-500 glow-red">
              <div className="flex items-center gap-4 mt-8 mb-6">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center bg-gradient-to-br from-red-500 to-red-600">
                  <Diamond className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-extrabold">ULTRA</h3>
                  <p className="text-foreground/60">Le meilleur de MYLAN.group</p>
                </div>
              </div>

              <div className="mb-8">
                <p className="text-lg text-foreground/70 leading-relaxed">
                  Une offre <span className="font-semibold text-foreground">premium</span> et <span className="font-semibold text-foreground">sur mesure</span>, 
                  conçue pour répondre parfaitement à vos besoins créatifs. 
                  Pas d'abonnement, pas de contraintes — uniquement des résultats exceptionnels.
                </p>
              </div>

              <div className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20">
                <p className="text-center text-lg font-semibold text-red-500">
                  Livraison en 48 à 72 heures
                </p>
              </div>

              <ul className="flex-1 space-y-4 mb-10">
                {ultraFeatures.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-4 text-base">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-red-500" />
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
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default Pricing;
