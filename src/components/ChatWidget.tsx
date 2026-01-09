import { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

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
          <div className="h-72 p-4 overflow-y-auto">
            <div className="glass rounded-2xl p-3 max-w-[85%] mb-4">
              <p className="text-sm">
                Bonjour! 👋 Comment puis-je vous aider aujourd'hui?
              </p>
            </div>
            <div className="glass rounded-2xl p-3 max-w-[85%]">
              <p className="text-sm">
                Vous pouvez me poser des questions sur nos services, tarifs, ou prendre rendez-vous directement.
              </p>
            </div>
          </div>

          {/* Input */}
          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Votre message..."
                className="flex-1 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500/50"
              />
              <button className="w-10 h-10 rounded-full bg-gradient-to-r from-red-500 to-red-600 text-white flex items-center justify-center hover:scale-105 transition-transform">
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
