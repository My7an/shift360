import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#comment-ca-marche', label: 'Comment ça marche ?' },
    { href: '#projets', label: 'Projets' },
    { href: '#abonnements', label: 'Abonnements' },
    { href: '#contact', label: 'Contact' },
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'glass-strong py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo - Accueil */}
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight transition-all duration-300 group-hover:text-red-500">mylan.group</span>
        </a>

        {/* Desktop Navigation - Always visible */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 py-2 group"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </a>
          ))}
        </nav>

        {/* CTA Button - Desktop */}
        <a
          href="https://calendly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex btn-liquid-primary text-sm"
        >
          Parler à un expert
        </a>

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
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://calendly.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-liquid-primary text-center mt-4"
            >
              Parler à un expert
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
