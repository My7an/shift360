const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-tight mb-8 animate-fade-in">
          Votre département
          <br />
          <span className="bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
            design illimité.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-foreground/70 mb-12 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Expertise 24/7. Livraison 48h.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <a
            href="https://calendly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-primary text-base px-10 py-5"
          >
            Commencer maintenant
          </a>
          <a href="#comment-ca-marche" className="btn-liquid text-base">
            Découvrir comment ça marche
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
