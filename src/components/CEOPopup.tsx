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
    const dayNames = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    const monthNames = ['Jan', 'Fév', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Août', 'Sep', 'Oct', 'Nov', 'Déc'];
    
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate(date.getDate() + i);
      days.push({
        dayName: dayNames[date.getDay()],
        date: date.getDate(),
        month: monthNames[date.getMonth()],
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
    <div className="fixed bottom-4 right-4 z-50 animate-fade-in sm:bottom-6 sm:right-6">
      <div className="bg-background/95 backdrop-blur-xl rounded-2xl p-4 sm:p-5 w-[320px] sm:w-[360px] shadow-2xl border border-border/50">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 p-1 rounded-full hover:bg-muted transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4 text-muted-foreground" />
        </button>

        {/* Header with avatar and name */}
        <div className="flex items-start gap-3 mb-4 pr-6">
          {/* Avatar with online indicator */}
          <div className="relative flex-shrink-0">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-red-accent to-red-accent-hover flex items-center justify-center text-white font-bold text-lg">
              M
            </div>
            <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background animate-pulse"></span>
          </div>

          <div className="flex-1 min-w-0">
            <p className="text-base font-semibold text-foreground">Milan</p>
            <p className="text-xs text-muted-foreground">CEO de 909.agency</p>
          </div>
        </div>

        {/* Message */}
        <p className="text-sm text-foreground/80 leading-relaxed mb-4">
          Ne laissez plus l'algorithme décider de vos revenus. Une visibilité maximale et des ventes boostées, sans effort.
        </p>

        {/* Dynamic days selector */}
        <div className="mb-4">
          <p className="text-xs font-medium text-muted-foreground mb-2">Prochaines disponibilités</p>
          <div className="flex gap-1.5">
            {nextDays.map((day, index) => (
              <button
                key={index}
                onClick={() => setSelectedDay(index)}
                className={`flex-1 py-2 px-1 rounded-lg text-center transition-all duration-200 ${
                  selectedDay === index
                    ? 'bg-red-accent text-white shadow-md'
                    : 'bg-muted hover:bg-muted/80 text-foreground/70'
                }`}
              >
                <div className="text-[10px] font-medium uppercase">{day.dayName}</div>
                <div className="text-sm font-bold">{day.date}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Countdown */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-xs text-muted-foreground">Offre expire dans</span>
            <span className="text-sm font-bold text-red-accent">{formatTime(timeLeft)}</span>
          </div>
          <Progress value={progressValue} className="h-1.5 bg-muted" />
        </div>

        {/* CTA Button */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-red-accent hover:bg-red-accent-hover text-white py-3 rounded-xl text-sm text-center font-semibold transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          Prenez un appel gratuit
        </a>
      </div>
    </div>
  );
};

export default CEOPopup;