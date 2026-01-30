import { useState, useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const CALENDLY_URL = 'https://calendly.com/mylanblln/30min';
const COUNTDOWN_SECONDS = 120; // 2 minutes

const CEOPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);
  const [timeLeft, setTimeLeft] = useState(COUNTDOWN_SECONDS);
  const [selectedDay, setSelectedDay] = useState(0);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Generate next 5 days dynamically
  const getNextDays = () => {
    const days = [];
    const dayNames = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
    
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        name: dayNames[date.getDay()],
        date: date.getDate().toString().padStart(2, '0'),
        month: (date.getMonth() + 1).toString().padStart(2, '0'),
      });
    }
    return days;
  };

  const nextDays = getNextDays();

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
      // Play pop sound
      try {
        audioRef.current = new Audio('data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2teleC8dW6bL59CyazolUrjd6dC4ezsoS7Xf6cy3fz0oRbDe6cO0hEIqPqnb6L2wiEcsNqLW57WsikwuLZnR5K+nj1IvJI/L4qmil1YwH4XE4KKdm1owGXq94p2YnV4xFG+04ZiTn2MzEGat4JOOnWY2DV2l3o+Km2o5ClOc3IqGmW08B0mS2YWBl3A/BECI1n98lXNCAT180nh3knZGADpyznJxkHpKADZqyWxuj31OADN');
        audioRef.current.volume = 0.3;
        audioRef.current.play().catch(() => {});
      } catch (e) {}
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  // Countdown timer
  useEffect(() => {
    if (!isVisible || isDismissed) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          handleDismiss();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [isVisible, isDismissed]);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    sessionStorage.setItem('ceo-popup-dismissed', 'true');
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressValue = (timeLeft / COUNTDOWN_SECONDS) * 100;

  if (isDismissed || !isVisible) return null;

  return (
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

        {/* Header with avatar */}
        <div className="flex items-start gap-4 mb-4">
          {/* Avatar with online indicator */}
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face"
              alt="Milan"
              className="w-14 h-14 rounded-full object-cover border-2 border-white"
            />
            <span className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
          </div>

          <div className="flex-1 pt-1">
            <p className="text-lg font-bold text-foreground mb-1">Milan</p>
            <p className="text-sm text-foreground/70 leading-relaxed">
              Ne laissez plus l'algorithme décider de vos revenus. Une visibilité maximale et des ventes boostées, sans effort.
            </p>
          </div>
        </div>

        {/* Dynamic days selector */}
        <div className="mb-4">
          <p className="text-xs font-medium text-foreground/50 mb-2 uppercase tracking-wider">Prochaines disponibilités</p>
          <div className="flex gap-2">
            {nextDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex-1 py-2 px-1 rounded-lg text-center transition-all duration-200 ${
                  selectedDay === index
                    ? 'bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg'
                    : 'bg-muted hover:bg-muted/80 text-foreground/70'
                }`}
              >
                <div className="text-xs font-medium truncate">{day.name.slice(0, 3)}</div>
                <div className="text-sm font-bold">{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-foreground/50">Offre expire dans</span>
            <span className="text-sm font-bold text-red-accent">{formatTime(timeLeft)}</span>
          </div>
          <Progress value={progressValue} className="h-2 bg-muted" />
        </div>

        {/* CTA Button */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full btn-liquid-primary py-4 text-sm text-center font-semibold"
        >
          Prenez un appel gratuit
        </a>
      </div>
    </div>
  );
};

export default CEOPopup;