import { useState } from 'react';
import { Infinity, Clock, RefreshCw, ShieldCheck, Globe } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const promises = [
  {
    icon: Infinity,
    title: 'Designs illimités',
    description: 'Abonnez-vous et libérez votre créativité : demandez autant de visuels que vous le souhaitez, sans aucune restriction.',
  },
  {
    icon: Clock,
    title: '48h Chrono',
    description: 'Postez votre brief dans votre Design Board Trello et recevez votre première proposition sous 48h ouvrées.',
  },
  {
    icon: RefreshCw,
    title: 'Retouches illimitées',
    description: 'Nous révisons vos visuels jusqu\'à ce que vous soyez 100% satisfait. La perfection n\'est pas une option.',
  },
  {
    icon: ShieldCheck,
    title: 'Essai Garanti',
    description: 'Vous n\'êtes pas convaincu après une semaine ? On vous rembourse 75% du montant, sans poser de questions.',
  },
  {
    icon: Globe,
    title: 'Flux 24/7',
    description: 'Notre équipe est mobilisée 24h/24 et 7j/7 pour garantir une réactivité mondiale et constante.',
  },
];

const PromiseSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="py-20 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="bento-card group p-6 flex flex-col"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-4 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-500">
                  <promise.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="text-lg font-bold mb-2">{promise.title}</h3>
                <p className="text-sm text-foreground/60 leading-relaxed">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-liquid-primary text-lg"
            >
              PARLER À UN EXPERT
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default PromiseSection;
