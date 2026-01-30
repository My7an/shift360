import { Clock, Settings, RefreshCw, BadgeCheck } from 'lucide-react';

const promises = [
  {
    icon: Clock,
    title: 'Design en 72 heures',
    description: 'Délais courts et processus optimisé. Nous respectons vos deadlines avec une efficacité opérationnelle maximale.',
    highlight: false,
    showBadge: false,
  },
  {
    icon: RefreshCw,
    title: 'Retouches illimitées',
    description: 'Nous révisons vos visuels jusqu\'à ce que vous soyez 100% satisfait. La perfection est notre seul standard.',
    highlight: true,
    showBadge: true,
  },
  {
    icon: Settings,
    title: 'Organisation aux petits oignons',
    description: 'Organisation complète et structurée. Processus clair, gestion professionnelle des projets, suivi précis et communication fluide.',
    highlight: false,
    showBadge: false,
  },
];

const PromiseSection = () => {
  return (
    <section className="py-24 px-6 animate-section" style={{ animationDelay: '0.1s' }}>
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 tracking-tighter">
            Nos <span className="font-playfair italic text-red-accent">engagements</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promises.map((promise, index) => (
            <div
              key={index}
              className={`bento-card group p-8 flex flex-col h-full min-h-[280px] fade-in-up transition-all duration-300 hover:scale-[1.02] relative ${
                promise.highlight 
                  ? 'shadow-lg shadow-foreground/10 border border-foreground/20' 
                  : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Badge for highlighted card */}
              {promise.showBadge && (
                <div className="absolute top-4 right-4 animate-pulse">
                  <div className="relative">
                    <BadgeCheck className="w-8 h-8 text-foreground drop-shadow-lg" />
                    <div className="absolute inset-0 bg-foreground/20 rounded-full blur-md animate-ping" style={{ animationDuration: '2s' }} />
                  </div>
                </div>
              )}
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                promise.highlight 
                  ? 'bg-gradient-to-br from-red-500 to-red-600' 
                  : 'bg-foreground/10 group-hover:bg-gradient-to-br group-hover:from-red-500 group-hover:to-red-600'
              }`}>
                <promise.icon className={`w-7 h-7 transition-colors duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
                  promise.highlight 
                    ? 'text-white' 
                    : 'text-foreground group-hover:text-white'
                }`} />
              </div>
              <h3 className="text-xl font-bold mb-3">{promise.title}</h3>
              <p className="text-base text-foreground/60 leading-relaxed flex-grow">{promise.description}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <a
            href="https://calendly.com/mylanblln/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-primary text-lg"
          >
            Parler avec un spécialiste
          </a>
        </div>
      </div>
    </section>
  );
};

export default PromiseSection;