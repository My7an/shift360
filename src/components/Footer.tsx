import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import ContactForm from './ContactForm';

const quickLinks = [
  { label: 'Accueil', href: '#', isRoute: false },
  { label: 'Nos Expertises', href: '#expertises', isRoute: false },
  { label: 'Processus', href: '#processus', isRoute: false },
  { label: 'Prestations', href: '#prestations', isRoute: false },
  { label: 'Pack', href: '/pack', isRoute: true },
  { label: 'Accompagnement', href: '/accompagnement', isRoute: true },
];

const serviceLinks = [
  { label: 'Branding & Identité', href: '#expertises' },
  { label: 'UX/UI Design', href: '#expertises' },
  { label: 'Création de Contenu', href: '#expertises' },
  { label: 'Solutions Sur-Mesure', href: '#expertises' },
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
    <footer id="contact" className="py-20 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
          {/* À Propos */}
          <div>
            <span className="text-3xl font-extrabold mb-6 block tracking-tight">MYLAN.group</span>
            <p className="text-sm text-foreground/60 leading-relaxed">
              MYLAN.group est une équipe mondiale impliquée et réactive. Studio de design premium, structuré et orienté performance.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-extrabold mb-4 text-lg">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  {link.isRoute ? (
                    <Link
                      to={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={(e) => handleSmoothScroll(e, link.href)}
                      className="text-sm text-foreground/60 hover:text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-extrabold mb-4 text-lg">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    onClick={(e) => handleSmoothScroll(e, link.href)}
                    className="text-sm text-foreground/60 hover:text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-extrabold mb-4 text-lg">Contactez-nous</h4>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-foreground/60">
              <a href="tel:+33650016134" className="flex items-center gap-2 hover:text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Phone className="w-4 h-4 text-red-500" />
                +33 6 50 01 61 34
              </a>
              <a href="mailto:servicebellinepro@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.4,0,0.2,1)]">
                <Mail className="w-4 h-4 text-red-500" />
                servicebellinepro@gmail.com
              </a>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-red-500" />
                Lille
              </span>
            </div>

            {/* Copyright */}
            <p className="text-sm text-foreground/50">
              © 2026 MYLAN.group. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
