import { Helmet } from "react-helmet-async";
import { Phone, Mail, MessageCircle, MapPin, Clock } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";

const ContactPage = () => {
  const whatsappNumber = "2203351530";
  const whatsappMessage = encodeURIComponent("Hi! I need plumbing assistance.");
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <>
      <Helmet>
        <title>Contact Us | Manneh & Son&apos;s Plumbing</title>
        <meta
          name="description"
          content="Contact Manneh & Son's Plumbing for fast, reliable service. Call (123) 456-7890, email info@mannehsons.com, or message us on WhatsApp. 24/7 emergency service."
        />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-[var(--primary)] py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-6 animate-slide-up">
                Contact Manneh & Son&apos;s Plumbing
              </h1>
              <p
                className="text-xl text-[var(--primary-foreground)]/90 animate-slide-up"
                style={{ animationDelay: "0.1s" }}
              >
                Have a plumbing emergency or need a quote? We're here to help. Reach out anytime—we respond fast.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              
              {/* Contact Info */}
              <div>
                <h2 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                  Get In Touch
                </h2>
                <p className="text-[var(--muted-foreground)] mb-8 leading-relaxed">
                  Whether you have a quick question or need emergency service, we're just a call, email, or message away.
                </p>

                {/* Contact Methods */}
                <div className="space-y-6 mb-10">
                  <a
                    href="tel:+1234567890"
                    className="flex items-start gap-4 p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                      <Phone className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">Phone</h3>
                      <p className="text-[var(--primary)] font-medium">(123) 456-7890</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Available 24/7</p>
                    </div>
                  </a>

                  <a
                    href="mailto:info@mannehsons.com"
                    className="flex items-start gap-4 p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--primary)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--primary)]/20 transition-colors">
                      <Mail className="w-6 h-6 text-[var(--primary)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">Email</h3>
                      <p className="text-[var(--primary)] font-medium">info@mannehsons.com</p>
                      <p className="text-[var(--muted-foreground)] text-sm">We respond within 24 hours</p>
                    </div>
                  </a>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 bg-[var(--card)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)] transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[var(--accent)]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-[var(--foreground)] mb-1">WhatsApp</h3>
                      <p className="text-[var(--accent)] font-medium">Message us directly</p>
                      <p className="text-[var(--muted-foreground)] text-sm">Quick responses, easy communication</p>
                    </div>
                  </a>
                </div>

                {/* Quick Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="tel:+1234567890" className="flex-1">
                    <Button variant="primary" size="lg" className="w-full">
                      <Phone className="w-5 h-5" />
                      <span>Call Now</span>
                    </Button>
                  </a>
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <Button variant="accent" size="lg" className="w-full">
                      <MessageCircle className="w-5 h-5" />
                      <span>WhatsApp</span>
                    </Button>
                  </a>
                </div>
              </div>

              {/* Business Info */}
              <div className="space-y-6">
                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--primary)]/10 rounded-lg flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-[var(--primary)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-2">Our Location</h3>
                        <address className="not-italic text-[var(--muted-foreground)] leading-relaxed">
                          4007 Tippa Garage Ave.<br />
                          Banjul, The Gambia
                        </address>
                        <p className="text-sm text-[var(--muted-foreground)] mt-2">
                          Serving Serrekunda and Surrounding areas. 
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-[var(--accent)]/10 rounded-lg flex items-center justify-center">
                        <Clock className="w-6 h-6 text-[var(--accent)]" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-[var(--foreground)] mb-2">Business Hours</h3>
                        <div className="text-[var(--muted-foreground)] space-y-1">
                          <p><span className="font-medium text-[var(--foreground)]">Mon-Fri:</span> 8am - 6pm</p>
                          <p><span className="font-medium text-[var(--foreground)]">Sat:</span> 9am - 4pm</p>
                          <p><span className="font-medium text-[var(--foreground)]">Sun:</span> Closed</p>
                          <p className="text-[var(--accent)] font-medium mt-3">
                            24/7 Emergency Service Available
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[var(--primary)] border-[var(--primary)]">
                  <CardContent className="pt-6">
                    <h3 className="font-semibold text-[var(--primary-foreground)] text-lg mb-2">
                      Plumbing Emergency?
                    </h3>
                    <p className="text-[var(--primary-foreground)]/90 mb-4">
                      Don't panic! Our emergency team is standing by 24/7. Call us immediately for burst pipes, severe leaks, or flooding.
                    </p>
                    <a href="tel:+2203351530">
                      <Button variant="accent" size="lg" className="w-full">
                        <Phone className="w-5 h-5" />
                        <span>Emergency: 220 3351530</span>
                      </Button>
                    </a>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ContactPage;