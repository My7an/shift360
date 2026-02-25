import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/logo.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
    { href: '#faq', label: 'FAQ' },
  ];

  return (
    <header
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl z-50 transition-all duration-500 rounded-3xl ${
        isScrolled ? 'glass-strong shadow-lg' : 'glass'
      }`}
    >
      <div className="px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link 
          to="/"
          className="flex items-center gap-2 group flex-shrink-0"
        >
          <img src={logo} alt="Shift360" className="h-8 w-auto invert" />
          <span className="font-bold text-lg tracking-tight">Shift360</span>
        </Link>

        <div className="hidden md:flex items-center gap-6">
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleSmoothScroll(e, link.href)}
                className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/packs"
              className="relative text-sm font-medium text-foreground/70 hover:text-foreground transition-all duration-300 whitespace-nowrap"
            >
              Packs
            </Link>
          </nav>
          <a
            href="https://calendly.com/mylanblln/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-liquid-primary text-sm whitespace-nowrap px-6 py-3"
          >
            Parler avec Mylan
          </a>
        </div>

        <button
          className="md:hidden p-2 glass rounded-xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden px-6 pb-6 animate-fade-in">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-muted"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/packs"
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-base font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 py-3 px-4 rounded-xl hover:bg-muted"
            >
              Packs
            </Link>
            <a
              href="https://calendly.com/mylanblln/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-liquid-primary text-center mt-4 py-4 block"
            >
              Parler avec Mylan
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
