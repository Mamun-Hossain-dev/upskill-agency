import ContactForm from "@/components/ContactForm";
import HeroSection from "@/components/HeroSection";

// app/page.js
export default function HomePage() {
  return (
    <section className="max-w-4xl mx-auto text-center">
      {/* hero section */}
      <HeroSection />
      {/* contact with us  */}
      <div>
        <ContactForm />
      </div>
    </section>
  );
}
