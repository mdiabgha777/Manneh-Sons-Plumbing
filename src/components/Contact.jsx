import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "./ui/Button";
import { Card, CardContent } from "./ui/Card";

const Contact = () => {
  const whatsappNumber = "2203351530";
  const whatsappMessage = encodeURIComponent("Hi! I need plumbing assistance.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <section className="py-16 md:py-24 bg-[var(--background)]" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-[var(--accent)] font-medium mb-2">Get In Touch</p>
            <h2 
              id="contact-heading"
              className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
            >
              Ready to Fix Your
              <span className="block text-[var(--primary)]">Plumbing Problems?</span>
            </h2>
            <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
              Whether it's an emergency repair or a planned installation, we're here to help. Contact us today for fast, reliable plumbing service you can count on.
            </p>

            {/* Contact Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button component="a" href="tel:2203459980" variant="default" size="lg" className="flex-1">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>Call Now</span>
              </Button>
              <Button component="a" href={whatsappLink} target="_blank" rel="noopener noreferrer" variant="ghost" size="lg" className="flex-1">
                <MessageCircle className="w-5 h-5" aria-hidden="true" />
                <span>WhatsApp</span>
              </Button>
            </div>

            {/* Email */}
            <a 
              href="mailto:info@mannehplumbing.com"
              className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--primary-dark)] transition-colors"
            >
              <Mail className="w-5 h-5" aria-hidden="true" />
              <span className="font-medium">info@mannehplumbing.com</span>
            </a>
          </div>

          {/* Right Info Cards */}
          <div className="space-y-4">
            <Card className="animate-slide-up" style={{ animationDelay: "0.1s" }}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[var(--accent)]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">24/7 Emergency Service</h3>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    Plumbing emergencies don't wait, and neither do we. Available around the clock for urgent repairs.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">Service Area</h3>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    Serving Cityville and surrounding areas within a 30-mile radius. Fast response guaranteed.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="animate-slide-up" style={{ animationDelay: "0.3s" }}>
              <CardContent className="flex items-start gap-4 pt-6">
                <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-[var(--primary)]" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="font-semibold text-[var(--foreground)] mb-1">Free Estimates</h3>
                  <p className="text-[var(--muted-foreground)] text-sm">
                    Get a transparent quote before work begins. No hidden fees, just honest pricing.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;