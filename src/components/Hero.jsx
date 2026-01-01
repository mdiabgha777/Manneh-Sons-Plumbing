import { Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section 
      id="hero" className="relative bg-gradient-to-br from-[var(--primary)] via-[var(--primary)] to-[var(--primary-dark)] 
      overflow-hidden text-white"
      aria-labelledby="hero-heading"
    >

      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className=" relative">
        <div className="py-16 px-12 md:py-24 lg:py-32">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[var(--accent)]/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span>24/7 Emergency Service Available</span>
            </div>

            {/* Heading */}
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-[var(--primary-foreground)] leading-tight mb-6 animate-slide-up"
              style={{ animationDelay: "0.1s" }}
            >
              Professional Plumbing
              <span className="block text-[var(--accent)] font-semibold">You Can Trust</span>
            </h1>

            {/* Description */}
            <p 
              className="text-lg md:text-xl text-[var(--primary-foreground)]/90 max-w-2xl mb-8 animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              From emergency repairs to complete installations, our licensed 
              plumbers deliver reliable solutions for your home and business. 
              Fast response times and guaranteed satisfaction.
            </p>

            {/* CTAs */}
            <div 
              className="flex flex-col sm:flex-row gap-4 mb-12 animate-slide-up"
              style={{ animationDelay: "0.3s" }}
            >
              <a href="tel:+2203351530" aria-label="Call for emergency service">
                <Button variant="ghost" size="lg" className="w-full sm:w-auto">
                  <Phone className="w-5 h-5 cursor-pointer" aria-hidden="true" />
                  <span>Call +2203351530</span>
                </Button>
              </a>
              <Link to="/services">
                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer border-[var(--primary-foreground)]/30  hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)]">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Badges */}
            <div 
              className="flex flex-wrap gap-6 animate-slide-up"
              style={{ animationDelay: "0.4s" }}
            >
              {[
                { icon: Shield, text: "Licensed & Insured" },
                { icon: Clock, text: "Same Day Service" },
                { icon: Award, text: "5-Star Rated" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 text-primary-foreground/80">
                  <Icon className="w-5 h-5" aria-hidden="true" />
                  <span className="text-sm font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;