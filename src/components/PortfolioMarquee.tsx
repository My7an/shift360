import portfolioMenuboard1 from '@/assets/portfolio-menuboard-1.png';
import portfolioFlyers1 from '@/assets/portfolio-flyers-1.png';
import portfolioInstagramFlyers from '@/assets/portfolio-instagram-flyers.png';
import portfolioMenuboard2 from '@/assets/portfolio-menuboard-2.png';
import portfolioBigUs from '@/assets/portfolio-big-us.png';
import portfolioUberEats from '@/assets/portfolio-ubereats.png';
import portfolioChickenCafe from '@/assets/portfolio-chicken-cafe.png';
import portfolioCoqCook from '@/assets/portfolio-coq-cook.png';
import portfolioOcaliCrousty from '@/assets/portfolio-ocali-crousty.png';
import portfolioStreetSaveur from '@/assets/portfolio-street-saveur.png';
import portfolioSupremeGrill from '@/assets/portfolio-supreme-grill.png';

const portfolioItems = [
  { id: 1, title: 'Menuboards', category: 'Food', image: portfolioMenuboard1 },
  { id: 2, title: 'Flyers', category: 'Food', image: portfolioFlyers1 },
  { id: 3, title: 'Instagram / Flyers / ProEat', category: 'Food', image: portfolioInstagramFlyers },
  { id: 4, title: 'Menuboards', category: 'Food', image: portfolioMenuboard2 },
  { id: 5, title: 'Instagram / Flyers', category: 'Food', image: portfolioBigUs },
  { id: 6, title: 'Visuel Uber Eats', category: 'Food', image: portfolioUberEats },
  { id: 7, title: 'ProDigitale', category: 'Accompagnement Instagram', image: portfolioChickenCafe },
  { id: 8, title: 'ProDigitale', category: 'Accompagnement Instagram', image: portfolioCoqCook },
  { id: 9, title: 'ProDigitale', category: 'Accompagnement Instagram', image: portfolioOcaliCrousty },
  { id: 10, title: 'Visuels Uber Eats', category: 'Food', image: portfolioStreetSaveur },
  { id: 11, title: 'Visuels Uber Eats', category: 'Food', image: portfolioSupremeGrill },
];

const PortfolioMarquee = () => {
  return (
    <section id="projets" className="py-24 overflow-hidden relative animate-section" style={{ animationDelay: '0.2s' }}>
      {/* Subtle red glow accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-500/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6 mb-16 relative">
        {/* Imposing Title */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tighter">
            Nos <span className="font-playfair italic text-red-accent">réalisations</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full"></div>
          <p className="text-editorial text-xl md:text-2xl text-foreground/60 max-w-2xl mx-auto pt-2">
            Plus de 500 projets livrés pour des entreprises du monde entier
          </p>
        </div>
      </div>
      
      {/* Horizontal scrolling large frames */}
      <div className="px-6 relative">
        <div className="horizontal-scroll py-4">
          {portfolioItems.map((item) => (
            <div
              key={item.id}
              className="w-[280px] md:w-[320px] lg:w-[380px] flex-shrink-0 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-500 hover:scale-[1.02]"
              style={{ aspectRatio: '3/4' }}
            >
              <div className="relative w-full h-full">
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                  <span className="text-white/80 text-xs font-medium">{item.category}</span>
                  <h3 className="text-white text-lg font-bold">{item.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioMarquee;