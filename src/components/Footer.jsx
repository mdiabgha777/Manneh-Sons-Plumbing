import { Link } from "react-router-dom";
import { Droplet, Phone, Mail, MapPin, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[var(--primary)] text-[var(--primary-foreground)]" role="contentinfo">
      <div className="max-w-7xl mx-auto py-14 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Brand */}
          <div className="space-y-4">
            <Link 
              to="/" 
              className="flex items-center gap-2 font-serif text-xl font-bold"
              aria-label="Manneh's Plumbing - Home"
            >
              <Droplet className="w-7 h-7" aria-hidden="true" />
              <span>Manneh&apos;s</span>
            </Link>
            <p className="text-[var(--primary-foreground)]/80 text-sm leading-relaxed">
              Your trusted local plumbing experts. Available 24/7 for all your 
              residential and commercial plumbing needs.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Our Services", path: "/services" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[var(--primary-foreground)]/80 hover:text-[var(--primary-foreground)] text-sm transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-3">
              {[
                "Emergency Repairs",
                "Leak Detection",
                "Pipe Installation",
                "Drain Cleaning",
                "Water Heaters",
              ].map((service) => (
                <li key={service}>
                  <span className="text-[var(--primary-foreground)]/80 text-sm">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Contact Us</h3>
            <address className="not-italic space-y-3">
              <a 
                href="tel:+2203351530" 
                className="flex items-center gap-3 text-[var(--primary-foreground)]/80 hover:text-[var(--primary-foreground)] text-sm transition-colors duration-200"
              >
                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>+220 3351 530</span>
              </a>
              <a 
                href="mailto:info@mannehplumbing.com" 
                className="flex items-center gap-3 text-[var(--primary-foreground)]/80 hover:text-[var(--primary-foreground)] text-sm transition-colors duration-200"
              >
                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>info@mannehplumbing.com</span>
              </a>
              <p className="flex items-start gap-3 text-[var(--primary-foreground)]/80 text-sm">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
                <span>Serrekunda, Banjul, Gambia</span>
              </p>
              <p className="flex items-center gap-3 text-[var(--primary-foreground)]/80 text-sm">
                <Clock className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                <span>24/7 Emergency Service</span>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-[var(--primary-foreground)]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[var(--primary-foreground)]/70 text-sm">
              © {currentYear} Manneh&apos;s Plumbing. All rights reserved.
            </p>
            <p className="text-[var(--primary-foreground)]/70 text-sm">
              Licensed & Insured | Lic# PLB-123456
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;