import { Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from './ContactForm';

const quickLinks = [
  { label: 'Accueil', href: '#' },
  { label: 'Nos Expertises', href: '#expertises' },
  { label: 'Processus', href: '#processus' },
  { label: 'Abonnements', href: '#abonnements' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = [
  { label: 'Branding & Identité', href: '#expertises' },
  { label: 'UX/UI Design', href: '#expertises' },
  { label: 'Création de Contenu', href: '#expertises' },
  { label: 'Solutions Sur-Mesure', href: '#expertises' },
];

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* À Propos */}
          <div>
            <span className="text-2xl font-bold mb-4 block">mylan.group</span>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Mylan.group c'est une équipe partout dans le monde. Une équipe créative impliquée et réactive. Nos portes sont ouvertes, partageons un café.
            </p>
          </div>

          {/* Liens Rapides */}
          <div>
            <h4 className="font-bold mb-4">Liens Rapides</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold mb-4">Services</h4>
            <ul className="space-y-2">
              {serviceLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h4 className="font-bold mb-4">Contactez-nous</h4>
            <ContactForm />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Contact Info */}
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-6 text-sm text-foreground/60">
              <a href="tel:+33650016134" className="flex items-center gap-2 hover:text-foreground transition-colors">
                <Phone className="w-4 h-4 text-red-500" />
                +33 6 50 01 61 34
              </a>
              <a href="mailto:servicebellinepro@gmail.com" className="flex items-center gap-2 hover:text-foreground transition-colors">
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
              © 2026 mylan.group. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
