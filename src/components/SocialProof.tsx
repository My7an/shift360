import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Marie L.', role: 'CEO, TechStart', text: 'mylan.group a transformé notre approche design. Rapide, créatif, impeccable.' },
  { name: 'Thomas R.', role: 'Fondateur, InnovateLab', text: 'Le meilleur investissement pour notre startup. ROI immédiat.' },
  { name: 'Sophie M.', role: 'Directrice Marketing, Scale', text: 'Qualité exceptionnelle, délais respectés. Je recommande à 100%.' },
  { name: 'Antoine D.', role: 'CTO, FastGrowth', text: 'Plus besoin d\'équipe design interne. mylan.group gère tout.' },
  { name: 'Julie B.', role: 'CMO, BrandUp', text: 'Créativité sans limite. Chaque projet dépasse nos attentes.' },
  { name: 'Marc P.', role: 'Founder, NextLevel', text: 'Réactivité incroyable. Support toujours disponible et efficace.' },
];

const logos = [
  'Spotify', 'Airbnb', 'Slack', 'Stripe', 'Notion', 'Figma', 'Vercel', 'Linear'
];

const SocialProof = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 tracking-tight">
          Ils nous font <span className="font-serif-elegant">confiance</span>
        </h2>
        <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto">
          Rejoignez plus de 200 entreprises satisfaites
        </p>
      </div>

      {/* Testimonials Marquee */}
      <div className="marquee-container mb-16">
        <div className="marquee-track" style={{ animationDuration: '50s' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-80 glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div>
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <p className="text-xs text-foreground/60">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Logos Marquee */}
      <div className="marquee-container">
        <div className="marquee-track marquee-track-reverse" style={{ animationDuration: '30s' }}>
          {duplicatedLogos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 glass px-8 py-4 rounded-xl"
            >
              <span className="text-lg font-semibold text-foreground/60">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;