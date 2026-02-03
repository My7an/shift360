import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const quickLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Nos Expertises', href: '#expertises' },
  { label: 'Processus', href: '#processus' },
  { label: 'Offres', href: '#prestations' },
];

const serviceLinks = [
  { label: 'Optimisation de plateforme', href: '#expertises' },
  { label: 'Création de contenu', href: '#expertises' },
];

const socialLinks = [
  { 
    label: 'TikTok', 
    href: 'https://www.tiktok.com/@mylan.group',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
      </svg>
    )
  },
  { 
    label: 'Instagram', 
    href: 'https://www.instagram.com/mylan.group/',
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    )
  },
];

const Footer = () => {
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
  };

  return (
    <footer id="contact" className="py-20 px-6 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* À Propos */}
          <div>
            <span className="text-3xl font-bold mb-6 block tracking-tight">Shift360</span>
            <p className="text-sm text-foreground/60 leading-relaxed mb-6">
              Shift360 est une équipe mondiale impliquée et réactive. Studio de design premium, structuré et orienté performance.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-foreground/60 hover:text-foreground hover:bg-red-100 hover:text-red-600 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-foreground/60 hover:text-red-accent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-foreground/60 hover:text-red-accent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold mb-4 text-lg">Contactez-nous</h4>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-foreground/60">
              <a href="tel:+33650016134" className="flex items-center gap-2 hover:text-red-accent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Phone className="w-4 h-4 text-red-accent" />
                +33 6 50 01 61 34
              </a>
              <a href="mailto:servicebellinepro@gmail.com" className="flex items-center gap-2 hover:text-red-accent transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Mail className="w-4 h-4 text-red-accent" />
                servicebellinepro@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-accent" />
                Lille
              </span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-foreground/50">
              © 2026 Shift360. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;