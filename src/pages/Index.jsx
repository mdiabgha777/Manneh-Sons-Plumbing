import { Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import Services from "../components/Services";
// import Testimonials from "../components/Testimonials";
// import Contact from "../components/Contact";

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

        {/* Canonical (ONLY if this is your real domain) */}
        {/* <link rel="canonical" href="https://mannehsplumbing.com" /> */}

        {/* Basic Local Business Schema (safe version) */}
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

      <main>
        <Hero />
        <Services />
       {/*  <Testimonials />
        <Contact /> */}
      </main>
    </>
  );
};

export default Index;