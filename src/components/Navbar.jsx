import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Droplets } from "lucide-react";
import { Button } from "./ui/Button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className="sticky top-0 z-50 bg-[var(--card)]/95 backdrop-blur-sm border-b border-[var(--border)]"
      aria-label="Main navigation">
      <div className="mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-[var(--primary)] font-serif text-xl md:text-2xl font-bold"
            aria-label="Manneh's Plumbing - Home"
          >
            <Droplets className="w-8 h-8" aria-hidden="true" />
            <span>Manneh & Son's Plumbing</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-6">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className={`text-sm font-medium transition-colors duration-200 ${
                      isActive(link.path)
                        ? "text-[var(--primary)]"
                        : "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                    }`}
                    aria-current={isActive(link.path) ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <a href="tel:+2203351530" aria-label="Call now">
              <Button variant="ghost" size="sm">
                <Phone className="w-4 h-4" aria-hidden="true" />
                <span>Call Now</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[var(--foreground)] hover:text-[var(--primary)] transition-colors"
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-all duration-300 ease-out ${
            isOpen ? "max-h-80 pb-6" : "max-h-0"
          }`}
        >
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block py-2 text-center font-medium transition-colors duration-200 ${
                    isActive(link.path)
                      ? "text-[var(--primary)]"
                      : "text-[var(--muted-foreground)] hover:text-[var(--primary)]"
                  }`}
                  aria-current={isActive(link.path) ? "page" : undefined}
                >
                  {link.name}
                </Link>
              </li>
            ))}

            <li className="pt-2">
              <a href="tel:+2203351530" aria-label="Call now">
                <Button variant="ghost" size="md" className="w-full h-10">
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  <span>Call Now</span>
                </Button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;