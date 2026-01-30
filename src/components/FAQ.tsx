import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const faqs = [
  {
    question: 'Comment fonctionne votre offre ?',
    answer: 'Vous prenez contact avec un expert pour définir vos besoins. Ensuite, vous accédez à votre espace Trello personnalisé pour piloter vos projets. Nous livrons vos designs en 48 à 72 heures avec un accompagnement professionnel à chaque étape.',
  },
  {
    question: 'Quels sont vos délais de livraison ?',
    answer: 'Nos designs sont livrés en 48 à 72 heures maximum. Ce délai garantit une qualité optimale tout en respectant vos contraintes de temps. Pour les projets plus complexes, nous découpons le travail en étapes successives.',
  },
  {
    question: 'Qu\'est-ce que l\'offre ProEat ?',
    answer: 'L\'offre ProEat est notre offre d\'optimisation de plateformes de livraison (Uber Eats, Deliveroo). Elle inclut : structure du menu, visuels produits, paramétrage optimisé, stratégie marketing et accompagnement professionnel. Nos clients constatent en moyenne +65% d\'amélioration de leur rendement.',
  },
  {
    question: 'Qu\'est-ce que l\'offre ProDigitale ?',
    answer: 'L\'offre ProDigitale est notre offre de création de contenu pour les réseaux sociaux. Elle inclut : posts Instagram, bannières, stories, stratégie de contenu et accompagnement professionnel. Chaque contenu est pensé pour la visibilité, l\'engagement et la conversion.',
  },
  {
    question: 'Pourquoi choisir mylan.group plutôt qu\'un graphiste freelance ?',
    answer: 'Avec mylan.group, vous bénéficiez d\'une organisation professionnelle structurée, d\'un suivi précis via Trello, de délais garantis (48-72h) et de retouches illimitées. Notre approche "osmose créative" garantit une collaboration fluide et des résultats qui dépassent vos attentes.',
  },
  {
    question: 'À quelle vitesse vais-je recevoir mes designs ?',
    answer: 'Nos projets sont livrés en 48 à 72 heures. Nous optimisons notre processus pour garantir rapidité et qualité. Les projets plus complexes sont découpés en étapes pour maintenir ce rythme.',
  },
  {
    question: 'Qui réalise les designs ?',
    answer: 'Tous les designs sont réalisés "fait main" par notre équipe d\'experts, garantissant une cohérence de marque et une qualité que les agences traditionnelles n\'offrent pas. Zéro IA, uniquement du vrai savoir-faire humain.',
  },
  {
    question: 'Et si je n\'aime pas le design ?',
    answer: 'Les retouches sont illimitées. Nous ajustons vos visuels jusqu\'à ce que vous soyez 100% satisfait. La perfection est notre seul standard.',
  },
  {
    question: 'Comment se passe la collaboration ?',
    answer: 'Tout est structuré et organisé. Vous avez accès à un espace Trello dédié pour vos briefs et suivis. Un expert dédié vous accompagne. Pour les échanges stratégiques, nous utilisons Calendly. Communication fluide et professionnelle garantie.',
  },
  {
    question: 'Comment vous contacter ?',
    answer: 'Utilisez notre bouton "Parler avec un expert" pour planifier un échange via Calendly. Pour toute question urgente, contactez-nous à : servicebellinepro@gmail.com. Nous répondons rapidement !',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight">
            Questions <span className="font-playfair italic text-gradient-animated">fréquentes</span>
          </h2>
          <p className="text-lg text-foreground/60">
            Tout ce que vous devez savoir sur nos offres
          </p>
        </div>

        <div className="glass rounded-3xl p-6 md:p-8">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b border-border last:border-0"
              >
                <AccordionTrigger className="text-left font-semibold py-5 hover:no-underline hover:text-foreground/80 transition-colors">
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