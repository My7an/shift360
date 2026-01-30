import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from '@/assets/logo.svg';
import CalendlyModal from './CalendlyModal';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCalendlyOpen, setIsCalendlyOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (!isHomePage) {
      window.location.href = '/' + href;
      return;
    }
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
    { href: '#prestations', label: 'Offres' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 h-16 md:h-20 ${
          isScrolled ? 'glass-strong' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo - Accueil */}
          <Link 
            to="/"
            className="flex items-center gap-2 group flex-shrink-0"
          >
            <img 
              src={Logo} 
              alt="mylan.group" 
              className="h-12 md:h-14 w-auto transition-all duration-300 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation + CTA - Aligned on same row */}
          <div className="hidden md:flex items-center h-full gap-6">
            <nav className="flex items-center h-full gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                  className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </a>
              ))}
              {/* Contact opens Calendly */}
              <button
                onClick={() => setIsCalendlyOpen(true)}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-foreground transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </button>
            </nav>
            {/* CTA Button */}
            <button
              onClick={() => setIsCalendlyOpen(true)}
              className="btn-liquid-primary text-sm whitespace-nowrap px-5 py-2"
            >
              Parler avec un expert
            </button>
          </div>

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
                Parler avec un expert
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