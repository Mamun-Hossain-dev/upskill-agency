import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('/images/hero-bg.svg')] bg-cover bg-center"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
            {/* Text Content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                Welcome to{" "}
                <span className="text-shadow-indigo-600">YourAgency</span>
              </h1>
              <p className="text-lg md:text-xl mb-8 text-primary-content/90">
                We offer top-tier{" "}
                <span className="font-semibold">web development</span>,{" "}
                <span className="font-semibold">design</span>, and{" "}
                <span className="font-semibold">digital marketing</span>{" "}
                services tailored to elevate your business.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="btn btn-primary btn-lg shadow-md hover:scale-105 transition-transform"
                >
                  Contact Us
                </Link>
                <Link
                  href="/quote"
                  className="btn btn-outline btn-primary btn-lg hover:scale-105 transition-transform"
                >
                  Get a Free Quote
                </Link>
              </div>
            </div>

            {/* Visual Element */}
            <div className="relative">
              <div className="w-full max-w-md mx-auto animate-fade-in-up">
                <Image
                  src="/images/banner3.jpg"
                  alt="Agency illustration"
                  width={500}
                  height={500}
                  className="w-full drop-shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
