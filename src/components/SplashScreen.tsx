import { useState, useEffect } from 'react';
import logo from '@/assets/logo.svg';

const SplashScreen = () => {
  const [phase, setPhase] = useState<'visible' | 'zooming' | 'done'>('visible');

  useEffect(() => {
    // Step 1: Show logo for 1s
    const zoomTimer = setTimeout(() => setPhase('zooming'), 1200);
    const doneTimer = setTimeout(() => setPhase('done'), 4500);
    return () => {
      clearTimeout(zoomTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-black transition-opacity duration-[2000ms] ease-out ${
        phase === 'zooming' ? 'opacity-0' : 'opacity-100'
      }`}
      style={{ pointerEvents: phase === 'zooming' ? 'none' : 'auto' }}
    >
      <img
        src={logo}
        alt="Shift360"
        className={`w-[220px] sm:w-[300px] transition-transform duration-[3000ms] ease-[cubic-bezier(0.25,0.1,0.25,1)] ${
          phase === 'zooming' ? 'scale-[20]' : 'scale-100'
        }`}
        style={{
          filter: 'invert(1)',
        }}
      />
    </div>
  );
};

export default SplashScreen;
