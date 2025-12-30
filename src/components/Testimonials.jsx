import React from "react";
import { testimonials } from "../data/testimonials";
import { Star } from "lucide-react";
import { Card, CardHeader, CardContent } from "./ui/Card";

const Testimonials = () => {
  return (
    <section
      className="py-16 md:py-24 bg-[var(--secondary)]/50"
      aria-labelledby="testimonials-heading"
    >
      <div className="container-custom">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <p className="text-[var(--accent)] font-medium mb-3">Our Clients</p>
          <h2
            id="testimonials-heading"
            className="text-3xl md:text-4xl font-bold text-[var(--foreground)] mb-4"
          >
            What Our Customers Say
          </h2>
          <p className="text-[var(--muted-foreground)] leading-relaxed">
            We pride ourselves on providing fast, reliable, and professional plumbing services.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <Card
              key={t.name}
              className="h-full animate-slide-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader className="pb-2">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{t.name}</h3>
                <p className="text-sm text-[var(--muted-foreground)]">{t.role}</p>
              </CardHeader>

              <CardContent>
                <p className="text-sm text-[var(--muted-foreground)] leading-relaxed mb-2">
                  "{t.message}"
                </p>
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400" />
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-gray-300" />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;