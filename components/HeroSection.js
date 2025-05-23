import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/banner3.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0c0128]/95 via-[#32024c]/80 to-transparent" />

      {/* Main Content */}
      <div className="relative z-20 flex flex-col justify-center h-full px-3 sm:px-4 md:px-10 lg:px-16 xl:px-32 max-w-screen-xl ">
        <div className="max-w-3xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            Empowering Brands through Design, Code, and Digital Strategy
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8">
            We transform ideas into exceptional digital experiences that drive
            growth and engagement for forward-thinking businesses.
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4">
            <Link
              href="/quote"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg px-3 py-2 md:px-8 md:py-5 shadow transition"
            >
              Get a Free Quote
            </Link>
            <Link
              href="/work"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 text-base md:text-lg px-3 py-1 md:px-8 md:py-5 shadow backdrop-blur-sm transition"
            >
              View Our Work
            </Link>
          </div>

          {/* Trusted By Section */}
          <div className="mt-12 sm:mt-16 flex items-center flex-wrap gap-4 sm:gap-6">
            <div className="flex -space-x-3 sm:-space-x-4">
              {[21, 22, 23, 24].map((seq) => (
                <span
                  key={seq}
                  className="relative flex shrink-0 overflow-hidden rounded-full border-2 border-indigo-900 w-9 h-9 sm:w-10 sm:h-10"
                >
                  <Image
                    src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20with%20neutral%20expression%20against%20simple%20gradient%20background%2C%20clean%20corporate%20style&width=100&height=100&seq=${seq}&orientation=squarish`}
                    alt={`Client ${seq}`}
                    width={40}
                    height={40}
                    className="aspect-square object-cover"
                  />
                </span>
              ))}
            </div>
            <div>
              <p className="text-white font-medium text-sm sm:text-base">
                Trusted by 200+ clients worldwide
              </p>
              <div className="flex items-center mt-1 text-yellow-400 text-sm">
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                <span className="ml-2 text-white text-xs sm:text-sm">
                  5.0 (180+ reviews)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-20">
        <a
          href="#services"
          className="text-white/80 hover:text-white transition-colors"
        >
          <i className="fa-solid fa-chevron-down text-xl sm:text-2xl"></i>
        </a>
      </div>
    </section>
  );
}
