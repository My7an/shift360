import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnimatedBackground from '@/components/AnimatedBackground';

const Accompagnement = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <AnimatedBackground />
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tighter">
            <span className="font-playfair italic text-gradient-animated">Accompagnement</span>
          </h1>
          <p className="text-xl text-foreground/60 mb-12">
            Page en cours de construction
          </p>
          <div className="glass rounded-3xl p-12 min-h-[400px] flex items-center justify-center">
            <p className="text-foreground/50 text-lg">
              Contenu à venir...
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Accompagnement;
