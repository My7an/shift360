import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const faqs = [
  {
    question: 'Comment fonctionne l\'abonnement ?',
    answer: 'Une fois abonné, vous accédez à votre tableau Trello privé. Vous y déposez autant de demandes de design que vous souhaitez. Nous les traitons une par une (ou deux selon le forfait) avec une livraison sous 48h.',
  },
  {
    question: 'Qu\'entendez-vous par "Design Illimité" ?',
    answer: 'Il n\'y a aucune limite au nombre de demandes que vous pouvez mettre dans votre file d\'attente. Nous travaillons sur vos projets chaque jour ouvré jusqu\'à ce que votre liste soit vide.',
  },
  {
    question: 'Pourquoi ne pas simplement embaucher un graphiste ?',
    answer: 'Un designer senior coûte aujourd\'hui plus de 50 000 €/an, sans compter les charges et les avantages. Avec mylan.group, vous avez la même expertise pour une fraction du prix, avec la flexibilité d\'arrêter quand vous voulez.',
  },
  {
    question: 'À quelle vitesse vais-je recevoir mes designs ?',
    answer: 'En moyenne, la majorité des demandes sont livrées en moins de 48 heures. Les projets plus complexes (gros sites web, présentations denses) peuvent être découpés en plusieurs étapes de 48h.',
  },
  {
    question: 'Qui réalise les designs ?',
    answer: 'Tous les designs sont réalisés "fait main" par notre fondateur et expert, garantissant une cohérence de marque et une qualité que les agences avec sous-traitants n\'ont pas.',
  },
  {
    question: 'Et si je n\'aime pas le design ?',
    answer: 'Pas d\'inquiétude. Les révisions sont illimitées. Nous ajustons le curseur jusqu\'à ce que vous soyez 100% enchanté par le résultat.',
  },
  {
    question: 'Y a-t-il des services exclus ?',
    answer: 'Nous ne réalisons pas de montage vidéo lourd (cinéma), de modélisation 3D complexe ou de design maximaliste. Nous nous concentrons sur le branding, l\'UI/UX et le design graphique premium.',
  },
  {
    question: 'Puis-je mettre mon abonnement en pause ?',
    answer: 'Oui, absolument. Si vous n\'avez plus de besoins pour le moment, vous pouvez mettre en pause et revenir plus tard. Votre cycle de facturation s\'arrêtera là où vous l\'avez laissé.',
  },
  {
    question: 'Comment se passe le paiement ?',
    answer: 'Tout est sécurisé via Stripe. Vous recevez une facture automatique chaque mois. C\'est simple, transparent et sans engagement.',
  },
  {
    question: 'Comment communiquer avec vous ?',
    answer: 'Tout se passe sur Trello pour les demandes et via Calendly pour les points stratégiques. Pour toute urgence ou question bloquante, contactez-nous à : servicebellinepro@gmail.com.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Questions <span className="text-gradient-animated">fréquentes</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Tout ce que vous devez savoir
          </p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-white/10 last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline hover:text-red-500 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-foreground/70 pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;