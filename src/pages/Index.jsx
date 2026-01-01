import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import ServicesPreview from "../components/ServicesPreview";
import Testimonials from "../components/Testimonials";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        {/* Primary SEO */}
        <title>Manneh&apos;s Plumbing | Reliable Local Plumbing Services</title>
        <meta
          name="description"
          content="Manneh's Plumbing provides reliable residential and commercial plumbing services. Leak repairs, installations, drain issues, and general plumbing maintenance. Call today."
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Manneh's Plumbing",
            "description":
              "Local plumbing services including repairs, installations, and maintenance.",
            "telephone": "+2203351530",
            "priceRange": "$",
          })}
        </script>
      </Helmet>

      <>
        <Hero />
        <ServicesPreview />
        <Testimonials />
        <Contact />
      </>
    </>
  );
};

export default Index;