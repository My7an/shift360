import { useEffect } from 'react';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

interface CalendlyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const CalendlyModal = ({ isOpen, onClose }: CalendlyModalProps) => {
  useEffect(() => {
    if (isOpen) {
      // Load Calendly widget script
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.body.appendChild(script);

      return () => {
        document.body.removeChild(script);
      };
    }
  }, [isOpen]);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[85vh] p-0 glass-strong border-white/30 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl font-bold">
              Réservez un <span className="font-serif-elegant">rendez-vous</span>
            </DialogTitle>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6 h-full">
          <div
            className="calendly-inline-widget w-full h-full rounded-2xl overflow-hidden"
            data-url="https://calendly.com/mylanblln/30min"
            style={{ minWidth: '320px', height: '600px' }}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendlyModal;