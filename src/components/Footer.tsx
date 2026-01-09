import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="py-16 px-6 border-t border-white/10">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <span className="text-2xl font-bold">mylan.group</span>
            <p className="text-sm text-foreground/60 mt-2">
              © 2026 mylan.group. Tous droits réservés.
            </p>
          </div>

          {/* Contact */}
          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-red-500" />
            <a 
              href="mailto:servicebellinepro@gmail.com"
              className="text-foreground/80 hover:text-foreground transition-colors"
            >
              servicebellinepro@gmail.com
            </a>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              Politique de confidentialité
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground transition-colors">
              CGV
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
