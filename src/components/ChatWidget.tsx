import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mail } from 'lucide-react';
import { faqs } from './FAQ';
import logo from '@/assets/logo.svg';

interface Message {
  id: number;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

const knowledgeBase = faqs.map(faq => ({
  keywords: faq.question.toLowerCase().split(' ').filter(w => w.length > 3),
  question: faq.question,
  answer: faq.answer,
}));

// Comprehensive site knowledge for the chatbot
const siteKnowledge = {
  offer: 'ULTRA - Offre premium sur mesure',
  delivery: '48 à 72 heures',
  tools: 'Figma, Adobe Creative Suite (Photoshop, Illustrator, InDesign), Webflow, Framer',
  services: ['Branding', 'Logo', 'UX/UI Design', 'Sites web', 'Print', 'Social media', 'Motion design', 'Packaging'],
  revisions: 'Retouches illimitées incluses',
  features: [
    'Organisation complète du projet',
    'Osmose créative',
    'Qualité d\'experts',
    'Design 100% fait main',
    'Accompagnement professionnel',
    'Expert dédié',
  ],
};

const findBestAnswer = (userMessage: string): string | null => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for greeting
  if (lowerMessage.match(/^(bonjour|salut|hello|hi|hey|coucou)/)) {
    return "Bonjour ! 👋 Je suis ravi de vous accueillir chez mylan.group. Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser vos questions sur notre offre ULTRA, nos services ou notre processus de travail.";
  }

  // Check for thank you
  if (lowerMessage.match(/(merci|thanks|thank you)/)) {
    return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. Vous pouvez aussi parler directement avec un expert en utilisant notre bouton de prise de rendez-vous. 😊";
  }

  // Check for pricing/tarif
  if (lowerMessage.match(/(prix|tarif|coût|coute|combien|offre|pack|ultra)/)) {
    return `Nous proposons une offre unique et premium : **ULTRA**\n\n💎 Cette prestation sur mesure inclut :\n• Organisation complète du projet\n• Osmose créative avec le client\n• Qualité d'experts\n• Design 100% fait main\n• Livraison en 48 à 72 heures\n• Retouches illimitées\n• Accompagnement professionnel\n\nPas d'abonnement, pas de contraintes. Je vous invite à parler avec un expert pour discuter de votre projet !`;
  }

  // Check for delivery/délai
  if (lowerMessage.match(/(délai|delai|livraison|48h|72h|temps|rapide|vite)/)) {
    return `Nos délais de livraison sont optimisés pour la rapidité :\n\n⚡ **Livraison en 48 à 72 heures**\n\nCe délai s'applique pour chaque projet individuel. Nous travaillons rapidement sans jamais compromettre la qualité. Les projets complexes sont découpés en étapes successives pour maintenir ce rythme.`;
  }

  // Check for tools/logiciels
  if (lowerMessage.match(/(logiciel|outil|figma|photoshop|adobe|webflow|framer|software)/)) {
    return `Notre équipe travaille avec les meilleurs outils du marché :\n\n🎨 Design : ${siteKnowledge.tools}\n\nNous maîtrisons également les outils de prototypage, de motion design et de création de sites web modernes. Chaque livrable est fourni dans le format de votre choix !`;
  }

  // Check for what's included
  if (lowerMessage.match(/(inclus|comprend|contient|offre|ultra)/)) {
    return `Notre offre ULTRA inclut tout ce dont vous avez besoin :\n\n✅ Organisation complète du projet\n✅ Osmose créative avec le client\n✅ Qualité d'experts\n✅ Design 100% fait main\n✅ Livraison en 48 à 72 heures\n✅ Retouches illimitées\n✅ Solutions sur mesure\n✅ Accompagnement professionnel\n✅ Expert dédié\n\nTout cela sans abonnement et sans contraintes !`;
  }

  // Check for revisions/retouches
  if (lowerMessage.match(/(retouche|révision|revision|modif|ajust|correc)/)) {
    return `${siteKnowledge.revisions} ! 🎨\n\nNous révisons vos visuels jusqu'à ce que vous soyez 100% satisfait. La perfection est notre seul standard. Il n'y a pas de limite au nombre de modifications que vous pouvez demander.`;
  }

  // Check for services
  if (lowerMessage.match(/(service|créa|design|logo|site|brand|print|motion|social)/)) {
    return `Nous proposons une large gamme de services créatifs :\n\n🎨 Branding & Identité : Logo, charte graphique, mascotte\n💻 UX/UI Design : Maquettes Figma, prototypes\n🌐 Sites Web : Webflow, Framer\n📱 Social Media : Posts, stories, assets\n🖨️ Print : Brochures, cartes, packaging\n🎬 Motion Design : Animations, vidéos\n\nTout cela avec notre offre ULTRA, livré en 48-72h !`;
  }

  // Check for how it works/process
  if (lowerMessage.match(/(comment|marche|fonctionne|processus|étape|etape|commencer)/)) {
    return `Notre processus est simple et professionnel :\n\n1️⃣ **Échange stratégique** : Parlez avec un expert pour définir vos besoins\n2️⃣ **Design Board** : Accédez à votre espace Trello personnalisé\n3️⃣ **Brief** : Déposez vos demandes en quelques minutes\n4️⃣ **Livraison** : Recevez vos designs en 48 à 72 heures\n\nRetouches illimitées incluses jusqu'à satisfaction totale !`;
  }

  // Find matching FAQ
  let bestMatch = { score: 0, answer: '' };
  
  for (const item of knowledgeBase) {
    let score = 0;
    for (const keyword of item.keywords) {
      if (lowerMessage.includes(keyword)) {
        score++;
      }
    }
    if (score > bestMatch.score) {
      bestMatch = { score, answer: item.answer };
    }
  }

  if (bestMatch.score >= 2) {
    return bestMatch.answer;
  }

  // Fallback for common questions we might have missed
  if (lowerMessage.match(/(qui|êtes|equipe|team|designer)/)) {
    return "Nous sommes mylan.group, une équipe de designers experts dédiée à créer des visuels professionnels pour votre entreprise. Notre offre ULTRA vous garantit une prestation premium, sur mesure, avec un accompagnement professionnel et des délais rapides (48-72h).";
  }

  return null;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! Je suis l'Expert mylan.group. Je suis là pour répondre à toutes vos questions sur nos prestations design. Comment puis-je vous aider ?",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: message,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setMessage('');
    setIsTyping(true);

    // Simulate AI thinking
    setTimeout(() => {
      const answer = findBestAnswer(message);
      
      let botResponse: string;
      if (answer) {
        botResponse = answer;
      } else {
        botResponse = `Je comprends votre question, mais pour vous apporter la meilleure réponse possible, je vous invite à parler directement avec un expert. 📧\n\nÉcrivez-nous à : servicebellinepro@gmail.com\nOu utilisez le bouton "Parler avec un expert" pour planifier un échange.\n\nNous vous répondrons dans les plus brefs délais !`;
      }

      const botMessage: Message = {
        id: messages.length + 2,
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };

      setIsTyping(false);
      setMessages(prev => [...prev, botMessage]);
    }, 1000 + Math.random() * 500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
          isOpen 
            ? 'bg-foreground text-background rotate-90' 
            : 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg hover:scale-110'
        }`}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 glass-strong rounded-3xl overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4 flex items-center gap-3">
            <img src={logo} alt="mylan.group" className="w-10 h-10 rounded-full bg-white p-1" />
            <div>
              <h3 className="text-white font-bold">Expert mylan.group</h3>
              <p className="text-white/80 text-sm">En ligne • Répond en quelques secondes</p>
            </div>
          </div>

          {/* Messages */}
          <div className="h-72 p-4 overflow-y-auto space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`rounded-2xl p-3 max-w-[85%] ${
                    msg.isUser
                      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white'
                      : 'glass'
                  }`}
                >
                  <p className="text-sm whitespace-pre-line">{msg.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="glass rounded-2xl p-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
                    <span className="w-2 h-2 bg-foreground/50 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="px-4 pb-2 flex gap-2 flex-wrap">
            <button
              onClick={() => setMessage("Comment fonctionne votre offre ULTRA ?")}
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              💎 Offre ULTRA
            </button>
            <button
              onClick={() => setMessage("Quels sont vos délais de livraison ?")}
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
            >
              ⚡ Délais
            </button>
            <a
              href="mailto:servicebellinepro@gmail.com"
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)] flex items-center gap-1"
            >
              <Mail size={12} /> Email
            </a>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Votre message..."
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center hover:scale-105 transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              >
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatWidget;
