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
    <section id="projets" className="py-20 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4">
          Nos réalisations
        </h2>
        <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto">
          Plus de 500 projets livrés pour des entreprises du monde entier
        </p>
      </div>
      
      <div className="space-y-6">
        <MarqueeRow items={row1Items} />
        <MarqueeRow items={row2Items} reverse />
        <MarqueeRow items={row3Items} />
      </div>
    </section>
  );
};

export default PortfolioMarquee;
