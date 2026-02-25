import Header from '@/components/Header';
import AnimatedBackground from '@/components/AnimatedBackground';

const Packs = () => {
  return (
    <div className="min-h-screen overflow-x-hidden relative">
      <AnimatedBackground />
      <Header />
      <main className="min-h-screen flex flex-col items-center justify-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-8 tracking-tight text-center">
          Packs en cours de <span className="font-playfair italic text-red-accent">création</span>
        </h1>
        <div className="loading-spinner mb-6"></div>
        <p className="text-muted-foreground text-sm">Bientôt disponible</p>
      </main>
    </div>
  );
};

export default Packs;
