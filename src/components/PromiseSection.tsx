import { useState } from 'react';
import { Infinity, Clock, RefreshCw, ShieldCheck, Globe } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const promises = [
  {
    icon: Infinity,
    title: 'Designs illimités',
    description: 'Abonnez-vous et demandez autant de visuels que vous le souhaitez. Votre créativité n\'a plus de plafond.',
  },
  {
    icon: Clock,
    title: '48h Chrono',
    description: 'Postez votre brief dans votre Design Board et recevez votre design en 48h ouvrées. La vélocité au service de votre business.',
  },
  {
    icon: RefreshCw,
    title: 'Retouches illimitées',
    description: 'Nous révisons vos visuels jusqu\'à ce que vous soyez 100% satisfait. La perfection est notre seul standard.',
  },
  {
    icon: ShieldCheck,
    title: 'Garantie "Test & Go"',
    description: 'Vous n\'aimez pas après une semaine ? On vous rembourse 75%, sans poser de questions.',
  },
  {
    icon: Globe,
    title: 'Flux 24/7',
    description: 'Nos équipes travaillent 24h/24 et 7j/7 pour que vos projets avancent pendant que vous dormez.',
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
              Nos <span className="font-serif-elegant text-gradient-animated">engagements</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="bento-card group p-6 flex flex-col fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500/20 to-red-600/10 flex items-center justify-center mb-4 group-hover:from-red-500 group-hover:to-red-600 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                  <promise.icon className="w-6 h-6 text-red-500 group-hover:text-white transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]" />
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