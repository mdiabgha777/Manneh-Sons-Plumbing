import { Phone, Shield, Clock, Award } from "lucide-react";
import { Button } from "./ui/Button";
import { Link } from "react-router-dom";

const Hero = () => {
  const trustBadges = [
    { icon: Shield, text: "Licensed & Insured" },
    { icon: Clock, text: "Same Day Service" },
    { icon: Award, text: "5-Star Rated" },
  ];

  return (
    <section 
      className="relative bg-gradient-to-br from-primary via-primary to-primary-dark overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-10 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />

      <div className="container-custom relative py-16 md:py-24 lg:py-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6 animate-fade-in">
            <Clock className="w-4 h-4" aria-hidden="true" />
            <span>24/7 Emergency Service Available</span>
          </div>

          {/* Heading */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            Professional Plumbing
            <span className="block text-accent">You Can Trust</span>
          </h1>

          {/* Description */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/90 mb-8 animate-slide-up"
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
            <Button as="a" href="tel:+1234567890" variant="accent" size="lg" className="w-full sm:w-auto" aria-label="Call for emergency service">
              <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
              Call (123) 456-7890
            </Button>
            <Link to="/services">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                View Our Services
              </Button>
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-6 animate-slide-up" style={{ animationDelay: "0.4s" }}>
            {trustBadges.map(({ icon: Icon, text }) => (
              <div key={text} className="flex items-center gap-2 text-primary-foreground/80" title={text}>
                <Icon className="w-5 h-5" aria-hidden="true" />
                <span className="text-sm font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;