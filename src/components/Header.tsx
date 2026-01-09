import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from '@/assets/logo.svg';
import CalendlyModal from './CalendlyModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: '#processus', label: 'Comment ça marche ?' },
    { href: '#projets', label: 'Projets' },
    { href: '#abonnements', label: 'Abonnements' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo - Accueil */}
          <a 
            href="#" 
            onClick={(e) => handleSmoothScroll(e, '#')}
            className="flex items-center gap-2 group"
          >
            <img 
              src={Logo} 
              alt="mylan.group" 
              className="h-10 md:h-14 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </a>

          {/* Desktop Navigation - Always visible */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 py-2 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </a>
            ))}
            {/* Contact opens Calendly */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 py-2 group"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </button>
          </nav>

          {/* CTA Button - Desktop */}
          <button
            onClick={() => setIsCalendlyOpen(true)}
            className="hidden md:inline-flex btn-liquid-primary text-sm"
          >
            Parler à un expert
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 glass rounded-xl"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden glass-strong mt-2 mx-4 rounded-2xl p-6 animate-fade-in">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-2"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCalendlyOpen(true);
                }}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-2 text-left"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  setIsCalendlyOpen(true);
                }}
                className="btn-liquid-primary text-center mt-4"
              >
                Parler à un expert
              </button>
            </nav>
          </div>
        )}
      </header>

      <CalendlyModal isOpen={isCalendlyOpen} onClose={() => setIsCalendlyOpen(false)} />
    </>
  );
};

export default Header;