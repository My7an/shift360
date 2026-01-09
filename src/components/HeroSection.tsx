const HeroSection = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center pt-32 pb-20 px-6">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Main Title with Typography Duo */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.1] mb-8 animate-fade-in tracking-tight">
          Votre équipe design,
          <br />
          <span className="font-serif-elegant text-[1.1em] bg-gradient-to-r from-red-500 via-red-600 to-red-500 bg-clip-text text-transparent">
            par abonnement.
          </span>
        </h1>
        
        {/* Subtitle - Editorial Italic */}
        <p className="text-editorial text-xl md:text-2xl lg:text-3xl text-foreground/70 mb-14 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Vos designs professionnels et en illimité.
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
