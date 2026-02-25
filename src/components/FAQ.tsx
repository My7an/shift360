import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const faqs = [
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
    answer: 'Tout est structuré et organisé. Vous avez accès à un espace Trello dédié pour vos briefs et suivis. Un spécialiste dédié vous accompagne. Pour les échanges stratégiques, nous utilisons Calendly. Communication fluide et professionnelle garantie.',
  },
  {
    question: 'Comment vous contacter ?',
    answer: 'Utilisez notre bouton "Parler avec Mylan" pour planifier un échange via Calendly. Pour toute question urgente, contactez-nous à : service@shift360.fr. Nous répondons rapidement !',
  },
  {
    question: 'À quelle vitesse vais-je recevoir mes designs ?',
    answer: 'Nos designs sont livrés en 48 à 72 heures maximum. Ce délai garantit une qualité optimale tout en respectant vos contraintes de temps. Pour les projets plus complexes, nous découpons le travail en étapes successives.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
            Questions fréquentes
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
