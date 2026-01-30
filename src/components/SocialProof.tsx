import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Souleymane.O', offer: 'ProEat', text: 'Parfait, je suis entièrement satisfait du travail, vous avez géré ça de A à Z, rapide et efficace.' },
  { name: 'Ryan.N', offer: 'ProEat', text: 'Je suis hyper satisfait du travail, je ne m\'attendais pas à un résultat aussi propre vous avez parfaitement compris la demande et j\'espère retravailler avec vous pour d\'autres restaurants !' },
  { name: 'Souleymane.O', offer: 'ProDigitale', text: 'Je me permet de te dire que toi et ton équipe sont booster !' },
  { name: 'Ryan.K', offer: 'ProEat', text: 'Je suis vraiment bluffé par le résultat, je ne pensais pas que ça serait aussi réussi, vous avez tout de suite saisi la demande' },
  { name: 'Dylan.F', offer: 'ProEat', text: 'Franchement excellent boulot, je ne m\'attendais pas à un résultat aussi quali !' },
  { name: 'Moha.D', offer: 'ProEat', text: 'Service ultra propre, mon compte Uber Eats est beaucoup mieux structuré et optimisé, j\'ai vu la différence très vite sur les commandes.' },
  { name: 'Damien.F', offer: 'ProEat', text: 'Très pro du début à la fin, optimisation Deliveroo + Uber Eats carrée, visuels produits nickel, je recommande.' },
  { name: 'Karim.L', offer: 'ProEat', text: 'Résultat clair sur la performance Uber Eats, meilleure présentation du menu et taux de conversion en hausse.' },
  { name: 'Nassim.R', offer: 'ProEat', text: 'Gros travail d\'optimisation de plateforme, photos, structure et paramétrage — ça a clairement boosté mon resto.' },
  { name: 'Yanis.B', offer: 'ProEat', text: 'Je pensais pas que l\'optimisation Uber Eats pouvait autant jouer, super accompagnement et vraie méthode.' },
  { name: 'Lucas.M', offer: 'ProDigitale', text: 'Super suivi sur les réseaux, contenu Instagram bien pensé et stratégie claire, ça change tout.' },
  { name: 'Enzo.T', offer: 'ProDigitale', text: 'Accompagnement réseaux sociaux au top, posts + bannières + plan de contenu — c\'est carré.' },
  { name: 'Mehdi.A', offer: 'ProDigitale', text: 'Très satisfait du pack digital, on sent la stratégie derrière chaque publication.' },
  { name: 'Rayan.K', offer: 'ProDigitale', text: 'Ils gèrent vraiment la partie Instagram et TikTok, visuels propres et conseils utiles.' },
  { name: 'Sofiane.D', offer: 'ProDigitale', text: 'Bonne organisation, bon accompagnement social media, on ne publie plus au hasard.' },
];

const SocialProof = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4 tracking-tight">
          Ils nous font <span className="font-playfair italic text-red-accent">confiance</span>
        </h2>
        <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto">
          Découvrez les retours de nos clients satisfaits
        </p>
      </div>

      {/* Testimonials Marquee */}
      <div className="marquee-container">
        <div className="marquee-track" style={{ animationDuration: '80s' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center justify-between">
                <p className="font-semibold text-sm">{testimonial.name}</p>
                <span className="text-xs px-3 py-1 rounded-full bg-foreground/10 text-foreground/70 font-medium">
                  {testimonial.offer}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;