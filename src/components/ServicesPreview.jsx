import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {services} from "../data/services";
import { Card, CardHeader, CardContent } from "./ui/Card";
import { Button } from "./ui/Button";

const ServicesPreview = () => {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--background)]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[var(--accent)] font-medium mb-3">
            What We Offer
          </p>
          <h2
            id="services-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          >
            Our Plumbing Services
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            From routine maintenance to emergency repairs, we deliver reliable
            plumbing solutions for homes and businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Card
                key={service.title}
                hover
                className="h-full border border-[var(--ring)] shadow-sm animate-slide-up"
                style={{ animationDelay: `${index * 0.08}s` }}
              >
                <CardHeader className="pb-2">
                  <div className="w-12 h-12 rounded-lg bg-[var(--primary)]/10 flex items-center justify-center mb-4">
                    <Icon
                      className="w-6 h-6 text-[var(--primary)]"
                      aria-hidden="true"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-[var(--foreground)]">
                    {service.title}
                  </h3>
                </CardHeader>

                <CardContent>
                  <p className="text-sm text-[var(--muted-foreground)] leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link to="/services">
            <Button variant="default" size="lg" className="inline-flex gap-2">
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5" aria-hidden="true" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
