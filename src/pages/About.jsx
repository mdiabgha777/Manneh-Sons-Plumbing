import { Helmet } from "react-helmet-async";
import { Shield, Users, Clock, Award, CheckCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Link } from "react-router-dom";

const values = [
  {
    icon: Shield,
    title: "Reliable Service",
    description: "We take our work seriously. When we commit to a job, we show up and get it done properly.",
  },
  {
    icon: Users,
    title: "Skilled Team",
    description: "Our plumbers are trained, experienced, and focused on doing quality work, not shortcuts.",
  },
  {
    icon: Clock,
    title: "Quick Response",
    description: "Plumbing problems can’t wait. We respond fast to reduce damage and inconvenience.",
  },
  {
    icon: Award,
    title: "Quality Standards",
    description: "We use trusted materials and proven methods to ensure long-lasting results.",
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Manneh & Sons Plumbing</title>
        <meta
          name="description"
          content="Learn more about Manneh & Sons Plumbing — a trusted local plumbing service committed to quality, honesty, and reliable workmanship."
        />
      </Helmet>

      <main>
        {/* Hero */}
        <section className="bg-[var(--primary)] py-16 md:py-24">
          <div className="container-custom animate-slide-in">
            <h1 className="text-4xl md:text-5xl font-bold text-[var(--primary-foreground)] mb-6">
              About Manneh & Sons Plumbing
            </h1>
            <p className="text-xl text-[var(--primary-foreground)]/90">
              A family-run plumbing service focused on honest work, fair pricing,
              and dependable results.
            </p>
          </div>
        </section>

        {/* Story */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-custom grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[var(--accent)] font-medium mb-2">Who We Are</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Built on Trust and Hard Work
              </h2>

              <div className="space-y-4 text-[var(--muted-foreground)]">
                <p>
                  Manneh & Sons Plumbing was built with one goal in mind: to provide
                  reliable plumbing services that people can trust.
                </p>
                <p>
                  We believe plumbing work should be done correctly the first time.
                  That means clear communication, fair pricing, and respect for
                  our customers’ homes and businesses.
                </p>
                <p>
                  Whether it’s a small repair or a full installation, we approach
                  every job with the same level of care and professionalism.
                </p>
              </div>

              <div className="mt-8">
                <Link to="/contact">
                  <Button size="lg">Contact Our Team</Button>
                </Link>
              </div>
            </div>

            {/* Simple Trust Box */}
            <div className="bg-[var(--card)] border-2 border-[var(--input)] rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-4">
                What You Can Expect
              </h3>
              <ul className="space-y-3">
                {[
                  "Honest advice and clear pricing",
                  "Respect for your time and property",
                  "Quality materials and workmanship",
                  "Local service you can rely on",
                ].map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle className="w-5 h-5 text-[var(--accent)] mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="section-padding bg-[var(--secondary)]/50">
          <div className="container-custom">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <p className="text-[var(--accent)] font-medium mb-2">Our Values</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work
              </h2>
              <p className="text-[var(--muted-foreground)]">
                These principles guide every job we take on.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="bg-[var(--card)] border-2 border-[var(--input)] rounded-xl p-6 text-center"
                  >
                    <div className="w-14 h-14 bg-[var(--primary)]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-[var(--primary)]" />
                    </div>
                    <h3 className="font-semibold mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-[var(--background)]">
          <div className="container-custom">
            <div className="bg-[var(--primary)] rounded-2xl p-8 md:p-12 text-[var(--primary-foreground)] text-center">
              <h3 className="text-2xl font-bold mb-4">
                Need a Plumber You Can Trust?
              </h3>
              <p className="mb-6 text-[var(--primary-foreground)]/90">
                Get in touch today and let us handle your plumbing the right way.
              </p>
              <Link to="/contact">
                <Button size="lg" variant="secondary">
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default About;