import { useState, useEffect } from 'react';
import logo from '@/assets/logo.svg';

const SplashScreen = () => {
  const [phase, setPhase] = useState<'visible' | 'zooming' | 'done'>('visible');

  useEffect(() => {
    const zoomTimer = setTimeout(() => setPhase('zooming'), 1400);
    const doneTimer = setTimeout(() => setPhase('done'), 6500);
    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity ease-out ${
        phase === 'zooming' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{
        transitionDuration: '3000ms',
        transitionTimingFunction: 'cubic-bezier(0.22, 0.61, 0.36, 1)',
        pointerEvents: phase === 'zooming' ? 'none' : 'auto',
      }}
    >
      <img
        src={logo}
        alt="Shift360"
        className={`w-[220px] sm:w-[300px] ${
          phase === 'zooming' ? 'scale-[20]' : 'scale-100'
        }`}
        style={{
          filter: 'invert(1)',
          transition: 'transform 5000ms cubic-bezier(0.16, 1, 0.3, 1)',
        }}
      />
    </div>
  );
};

export default SplashScreen;
