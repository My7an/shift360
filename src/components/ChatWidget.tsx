import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Mail } from 'lucide-react';
import { faqs } from './FAQ';

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

const findBestAnswer = (userMessage: string): string | null => {
  const lowerMessage = userMessage.toLowerCase();
  
  // Check for greeting
  if (lowerMessage.match(/^(bonjour|salut|hello|hi|hey|coucou)/)) {
    return "Bonjour ! 👋 Je suis l'assistant virtuel de mylan.group. Comment puis-je vous aider aujourd'hui ? N'hésitez pas à me poser vos questions sur nos services, tarifs ou notre processus de travail.";
  }

  // Check for thank you
  if (lowerMessage.match(/(merci|thanks|thank you)/)) {
    return "Avec plaisir ! N'hésitez pas si vous avez d'autres questions. 😊";
  }

  // Check for pricing/tarif
  if (lowerMessage.match(/(prix|tarif|coût|coute|combien|abonnement|forfait)/)) {
    return "Nous proposons trois forfaits adaptés à vos besoins : Basic, Or et Diamond. Chaque forfait offre des designs illimités avec différents niveaux de service. Je vous invite à consulter notre section Abonnements pour découvrir les détails, ou à prendre rendez-vous avec un expert pour une recommandation personnalisée !";
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

  return null;
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Bonjour ! 👋 Je suis l'assistant de mylan.group. Comment puis-je vous aider ?",
      isUser: false,
      timestamp: new Date(),
    },
    {
      id: 2,
      text: "Vous pouvez me poser des questions sur nos services, tarifs, ou prendre rendez-vous directement.",
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
        botResponse = `Je comprends votre question, mais pour vous apporter la meilleure réponse possible, je vous invite à contacter directement notre équipe. 📧\n\nÉcrivez-nous à : servicebellinepro@gmail.com\n\nNous vous répondrons dans les plus brefs délais !`;
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
        className={`fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 ${
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
          <div className="bg-gradient-to-r from-red-500 to-red-600 p-4">
            <h3 className="text-white font-bold">Assistant mylan.group</h3>
            <p className="text-white/80 text-sm">En ligne • Répond en quelques secondes</p>
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
              onClick={() => setMessage("Quels sont vos tarifs ?")}
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              💰 Tarifs
            </button>
            <button
              onClick={() => setMessage("Comment ça marche ?")}
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors"
            >
              🔄 Processus
            </button>
            <a
              href="mailto:servicebellinepro@gmail.com"
              className="text-xs glass px-3 py-1.5 rounded-full hover:bg-white/20 transition-colors flex items-center gap-1"
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
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
              <button 
                onClick={handleSend}
                className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform"
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