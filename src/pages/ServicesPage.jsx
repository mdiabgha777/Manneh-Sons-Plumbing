import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Wrench,
  Droplet,
  Pipette,
  ThermometerSun,
  ShowerHead,
  AlertTriangle,
  Home,
  Building2,
  Phone,
  CheckCircle,
} from "lucide-react";
import { Card, CardHeader, CardContent } from "../components/ui/Card";
import { Button } from "../components/ui/Button";

const services = [
  {
    icon: AlertTriangle,
    title: "Emergency Plumbing",
    description:
      "Burst pipes, severe leaks, and flooding require immediate attention. Our emergency team is available 24/7 to respond quickly and minimize damage.",
    features: [
      "24/7 availability",
      "Fast response time",
      "Temporary fixes available",
      "Damage control support",
    ],
  },
  {
    icon: Droplet,
    title: "Leak Detection & Repair",
    description:
      "Hidden leaks can cause serious damage if ignored. We locate and repair leaks efficiently to protect your property.",
    features: [
      "Non-invasive detection",
      "Wall & slab leak repair",
      "Water damage prevention",
      "Accurate diagnosis",
    ],
  },
  {
    icon: Pipette,
    title: "Drain Cleaning",
    description:
      "Blocked or slow drains can lead to bigger plumbing issues. We clear clogs and restore proper flow safely and effectively.",
    features: [
      "Stubborn clog removal",
      "Drain inspections",
      "Preventive cleaning",
      "Odor elimination",
    ],
  },
  {
    icon: Wrench,
    title: "Pipe Installation & Repair",
    description:
      "From new installations to pipe replacements, we handle all types of residential and commercial piping work.",
    features: [
      "New pipe installation",
      "Pipe replacements",
      "Leak repairs",
      "Durable materials",
    ],
  },
  {
    icon: ThermometerSun,
    title: "Water Heater Services",
    description:
      "We install, repair, and maintain water heaters to keep your hot water running efficiently and reliably.",
    features: [
      "Tank & tankless systems",
      "Repair & replacement",
      "Efficiency upgrades",
      "Routine maintenance",
    ],
  },
  {
    icon: ShowerHead,
    title: "Fixture Installation",
    description:
      "Professional installation of faucets, toilets, sinks, showers, and other plumbing fixtures.",
    features: [
      "Bathroom & kitchen fixtures",
      "Leak-free installation",
      "Old fixture removal",
      "Clean, precise work",
    ],
  },
];

const ServicesPage = () => {
  return (
    <>
      <Helmet>
        <title>Plumbing Services | Manneh & Son&apos;s Plumbing</title>
        <meta
          name="description"
          content="Manneh & Son's Plumbing provides emergency plumbing, leak detection, drain cleaning, pipe repair, water heaters, and fixture installation for homes and businesses."
        />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-[var(--primary)] py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-3xl animate-slide-up">
              <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-6">
                Our Plumbing Services
              </h1>
              <p className="text-xl text-[var(--primary-foreground)]/90 mb-8">
                Reliable plumbing solutions for homes and businesses.
                Done right, the first time.
              </p>

              <div className="flex flex-wrap gap-6">
                <div className="flex items-center gap-2 text-[var(--primary-foreground)]/80">
                  <Home className="w-5 h-5" />
                  <span>Residential</span>
                </div>
                <div className="flex items-center gap-2 text-[var(--primary-foreground)]/80">
                  <Building2 className="w-5 h-5" />
                  <span>Commercial</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service) => {
                const Icon = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="border-2 border-[var(--input)]"
                  >
                    <CardHeader>
                      <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-7 h-7 text-[var(--primary)]" />
                        </div>
                        <div>
                          <h2 className="text-xl font-semibold mb-2">
                            {service.title}
                          </h2>
                          <p className="text-sm text-[var(--muted-foreground)]">
                            {service.description}
                          </p>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <ul className="grid grid-cols-2 gap-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex gap-2 items-center">
                            <CheckCircle className="w-4 h-4 text-[var(--accent)]" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[var(--primary)]">
          <div className="container-custom text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-[var(--primary-foreground)] mb-4">
              Need a Reliable Plumber?
            </h2>
            <p className="text-[var(--primary-foreground)]/90 mb-8 max-w-2xl mx-auto">
              Contact Manneh & Son&apos;s Plumbing today and get the job done properly.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+2203351530">
                <Button variant="accent" size="lg">
                  <Phone className="w-5 h-5" />
                  <span>Call Now</span>
                </Button>
              </a>

              <Link to="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[var(--primary-foreground)]/30 text-[var(--primary-foreground)] hover:bg-[var(--primary-foreground)] hover:text-[var(--primary)]"
                >
                  Get a Free Estimate
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ServicesPage;