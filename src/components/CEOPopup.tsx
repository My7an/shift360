import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import CalendlyModal from './CalendlyModal';

const CEOPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    // Check if already dismissed in session
    const dismissed = sessionStorage.getItem('ceo-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 5 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('ceo-popup-dismissed', 'true');
  };

  if (isDismissed || !isVisible) return null;

  return (
    <>
      <div className="fixed bottom-6 right-6 z-50 animate-fade-in">
        <div className="glass-strong rounded-2xl p-5 max-w-sm shadow-2xl border border-border">
          {/* Close button */}
          <button
            onClick={handleDismiss}
            className="absolute top-3 right-3 p-1.5 rounded-full hover:bg-muted transition-colors"
            aria-label="Fermer"
          >
            <X className="w-4 h-4 text-foreground/60" />
          </button>

          {/* Content */}
          <div className="flex items-start gap-4">
            {/* Avatar with online indicator */}
            <div className="relative flex-shrink-0">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
                alt="CEO"
                className="w-14 h-14 rounded-full object-cover border-2 border-white"
              />
              <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></span>
            </div>

            <div className="flex-1 pt-1">
              <p className="text-xs font-medium text-foreground/60 mb-1">CEO de 909.agency</p>
              <p className="text-sm text-foreground leading-relaxed mb-4">
                Ne laissez plus l'algorithme décider de vos revenus. Une visibilité maximale et des ventes boostées, sans effort.
              </p>
              <button
                onClick={() => {
                  setIsCalendlyOpen(true);
                  handleDismiss();
                }}
                className="w-full btn-liquid-primary py-3 text-sm"
              >
                Prenez un appel gratuit
              </button>
            </div>
          </div>
        </div>
      </div>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default CEOPopup;