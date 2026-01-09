import { useState } from 'react';
import { Infinity, RefreshCw, ShieldCheck } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const promises = [
  {
    icon: Infinity,
    title: 'Designs illimités',
    description: 'Abonnez-vous et demandez autant de visuels que vous le souhaitez. Votre créativité n\'a plus de plafond.',
    highlight: false,
  },
  {
    icon: ShieldCheck,
    title: 'Garantie "Test & Go"',
    description: 'Vous n\'aimez pas après une semaine ? On vous rembourse 75%, sans poser de questions.',
    highlight: true,
  },
  {
    icon: RefreshCw,
    title: 'Retouches illimitées',
    description: 'Nous révisons vos visuels jusqu\'à ce que vous soyez 100% satisfait. La perfection est notre seul standard.',
    highlight: false,
  },
];

const PromiseSection = () => {
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  return (
    <>
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-6 tracking-tighter">
              Nos <span className="text-gradient-animated">engagements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {promises.map((promise, index) => (
              <div
                key={index}
                className={`bento-card group p-8 flex flex-col h-full min-h-[280px] fade-in-up transition-all duration-300 hover:scale-[1.02] ${
                  promise.highlight 
                    ? 'shadow-lg shadow-red-500/10 border border-red-500/30' 
                    : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  promise.highlight 
                    ? 'bg-gradient-to-br from-red-500 to-red-600' 
                    : 'bg-gradient-to-br from-red-500/20 to-red-600/10 group-hover:from-red-500 group-hover:to-red-600'
                }`}>
                  <promise.icon className={`w-7 h-7 transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    promise.highlight 
                      ? 'text-white' 
                      : 'text-red-500 group-hover:text-white'
                  }`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{promise.title}</h3>
                <p className="text-base text-foreground/60 leading-relaxed flex-grow">{promise.description}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-12">
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-liquid-primary text-lg"
            >
              Parler à un spécialiste
            </button>
          </div>
        </div>
      </section>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default PromiseSection;