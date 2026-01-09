import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Comment fonctionne l\'abonnement illimité?',
    answer: 'Une fois abonné, vous pouvez soumettre autant de demandes design que vous le souhaitez. Notre équipe les traite une par une (ou plusieurs en parallèle selon votre forfait) avec des délais de livraison garantis.',
  },
  {
    question: 'Quels types de design proposez-vous?',
    answer: 'Nous couvrons tous les besoins: UI/UX, branding, illustration, motion design, présentations, réseaux sociaux, packaging, et bien plus encore.',
  },
  {
    question: 'Comment puis-je annuler mon abonnement?',
    answer: 'Vous pouvez annuler à tout moment depuis votre espace client. Aucun engagement, aucune pénalité. Vous gardez accès jusqu\'à la fin de votre période payée.',
  },
  {
    question: 'Qui sont vos designers?',
    answer: 'Notre équipe est composée de designers seniors avec plus de 5 ans d\'expérience, sélectionnés parmi les meilleurs talents mondiaux.',
  },
  {
    question: 'Et si je ne suis pas satisfait?',
    answer: 'Nous offrons des révisions illimitées jusqu\'à votre satisfaction complète. Si vous n\'êtes toujours pas satisfait, nous vous remboursons.',
  },
  {
    question: 'Comment communiquer avec l\'équipe?',
    answer: 'Vous disposez d\'un espace client dédié, d\'un chat en direct avec votre designer, et d\'un support par email. Pour les forfaits premium, un consultant dédié vous accompagne.',
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-24 px-6">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Questions fréquentes
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
