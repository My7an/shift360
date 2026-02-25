import { Star } from 'lucide-react';

const testimonials = [
  { name: 'Souleymane.O', text: 'Parfait, je suis entièrement satisfait du travail, vous avez géré ça de A à Z, rapide et efficace.' },
  { name: 'Ryan.N', text: 'Je suis hyper satisfait du travail, je ne m\'attendais pas à un résultat aussi propre vous avez parfaitement compris la demande et j\'espère retravailler avec vous pour d\'autres restaurants !' },
  { name: 'Souleymane.O', text: 'Je me permet de te dire que toi et ton équipe sont booster !' },
  { name: 'Ryan.K', text: 'Je suis vraiment bluffé par le résultat, je ne pensais pas que ça serait aussi réussi, vous avez tout de suite saisi la demande' },
  { name: 'Dylan.F', text: 'Franchement excellent boulot, je ne m\'attendais pas à un résultat aussi quali !' },
  { name: 'Moha.D', text: 'Service ultra propre, mon compte UberEats est beaucoup mieux structuré et optimisé, j\'ai vu la différence très vite sur les commandes.' },
  { name: 'Damien.F', text: 'Très pro du début à la fin, optimisation Deliveroo + UberEats carrée, visuels produits nickel, je recommande.' },
  { name: 'Karim.L', text: 'Résultat clair sur la performance UberEats, meilleure présentation du menu et taux de conversion en hausse.' },
  { name: 'Nassim.R', text: 'Gros travail d\'optimisation de plateforme, photos, structure et paramétrage — ça a clairement boosté mon resto.' },
  { name: 'Yanis.B', text: 'Je pensais pas que l\'optimisation UberEats pouvait autant jouer, super accompagnement et vraie méthode.' },
  { name: 'Lucas.M', text: 'Super suivi sur les réseaux, contenu Instagram bien pensé et stratégie claire, ça change tout.' },
  { name: 'Enzo.T', text: 'Accompagnement réseaux sociaux au top, posts + bannières + plan de contenu — c\'est carré.' },
  { name: 'Mehdi.A', text: 'Très satisfait du pack digital, on sent la stratégie derrière chaque publication.' },
  { name: 'Rayan.K', text: 'Ils gèrent vraiment la partie Instagram et TikTok, visuels propres et conseils utiles.' },
  { name: 'Sofiane.D', text: 'Bonne organisation, bon accompagnement social media, on ne publie plus au hasard.' },
];

const SocialProof = () => {
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="py-24 overflow-hidden">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 tracking-tight">
          Ils nous font confiance
        </h2>
        <p className="text-lg text-foreground/60 text-center max-w-2xl mx-auto">
          Découvrez les retours de nos clients satisfaits
        </p>
      </div>

      <div className="marquee-container">
        <div className="marquee-track" style={{ animationDuration: '80s' }}>
          {duplicatedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-96 glass rounded-2xl p-6"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-red-accent text-red-accent" />
                ))}
              </div>
              <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                "{testimonial.text}"
              </p>
              <p className="font-semibold text-sm">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
