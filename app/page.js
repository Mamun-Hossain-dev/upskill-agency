import AboutUs from "@/components/AboutUs";
import ContactForm from "@/components/ContactForm";
import OurApproach from "@/components/DataDriven";
import HeroSection from "@/components/HeroSection";
import OurServices from "@/components/OurSevices";
import TrustedSection from "@/components/TrustedSection";

export default function HomePage() {
  return (
    <>
      {/* Hero section needs full width */}
      <HeroSection />

      {/* trust by companies section */}
      <TrustedSection />

      {/* our services section */}
      <OurServices />

      {/* data driven section */}
      <OurApproach />

      {/* about us */}
      <AboutUs />

      {/* Other content with constrained width */}
      <section className="max-w-4xl mx-auto w-full px-4 py-12">
        {/* <ContactForm /> */}
      </section>
    </>
  );
}
