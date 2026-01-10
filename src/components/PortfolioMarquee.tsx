import portfolioBranding from '@/assets/portfolio-branding.jpg';
import portfolioApp from '@/assets/portfolio-app.jpg';
import portfolioWeb from '@/assets/portfolio-web.jpg';
import portfolioPackaging from '@/assets/portfolio-packaging.jpg';
import portfolioDashboard from '@/assets/portfolio-dashboard.jpg';
import portfolioEcommerce from '@/assets/portfolio-ecommerce.jpg';

const portfolioItems = [
  { id: 1, title: 'Brand Identity', category: 'Branding', image: portfolioBranding },
  { id: 2, title: 'App Design', category: 'UI/UX', image: portfolioApp },
  { id: 3, title: 'Web Platform', category: 'Development', image: portfolioWeb },
  { id: 4, title: 'Packaging Design', category: 'Branding', image: portfolioPackaging },
  { id: 5, title: 'Dashboard', category: 'UI/UX', image: portfolioDashboard },
  { id: 6, title: 'E-commerce', category: 'Web', image: portfolioEcommerce },
];

const MarqueeRow = ({ items, reverse = false }: { items: typeof portfolioItems; reverse?: boolean }) => {
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="marquee-container py-3">
      <div className={`marquee-track ${reverse ? 'marquee-track-reverse' : ''}`} style={{ animationDuration: '60s' }}>
        {duplicatedItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            className="flex-shrink-0 w-72 h-48 md:w-96 md:h-60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-105"
          >
            <div className="relative w-full h-full">
              <img 
                src={item.image} 
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                <span className="text-white/80 text-sm font-medium">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PortfolioMarquee = () => {
  const row1Items = portfolioItems.slice(0, 3);
  const row2Items = portfolioItems.slice(2, 5);
  const row3Items = portfolioItems.slice(3, 6);

  return (
    <section id="projets" className="py-24 overflow-hidden relative">
      {/* Subtle red glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-16 relative">
        {/* Imposing Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            Nos <span className="font-playfair italic text-gradient-animated">réalisations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-editorial text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto pt-2">
            Plus de 500 projets livrés pour des entreprises du monde entier
          </p>
        </div>
      </div>
      
      <div className="space-y-6 relative">
        <MarqueeRow items={row1Items} />
        <MarqueeRow items={row2Items} reverse />
        <MarqueeRow items={row3Items} />
      </div>

      {/* Brochure Button */}
      <div className="flex justify-center mt-12">
        <a
          href="https://figma.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-8 py-4 rounded-full font-semibold border-2 border-red-500 text-red-500 bg-transparent hover:bg-red-50 transition-all duration-300 hover:scale-[1.02]"
        >
          Voir notre brochure
        </a>
      </div>
    </section>
  );
};

export default PortfolioMarquee;