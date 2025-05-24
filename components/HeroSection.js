"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function HeroSection() {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.08,
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const buttonVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
        ease: "easeInOut",
      },
    },
    tap: {
      scale: 0.98,
    },
  };

  const avatarVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (i) => ({
      scale: 1,
      opacity: 1,
      transition: {
        delay: 1.5 + i * 0.1,
        duration: 0.4,
        ease: "backOut",
      },
    }),
    hover: {
      scale: 1.1,
      y: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  const scrollIndicatorVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: 2,
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const title = "Empowering Brands through Design, Code, and Digital Strategy";
  const words = title.split(" ");

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
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0c0128]/95 via-[#32024c]/80 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full px-3 sm:px-4 md:px-10 lg:px-16 xl:px-32 max-w-screen-xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          {/* Animated Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            variants={titleVariants}
          >
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                className="inline-block mr-2 sm:mr-3"
                whileHover={{
                  scale: 1.05,
                  color: "#6366f1",
                  transition: { duration: 0.2 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8"
            variants={itemVariants}
          >
            We transform ideas into exceptional digital experiences that drive
            growth and engagement for forward-thinking businesses.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div className="flex gap-4" variants={itemVariants}>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/quote"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg px-3 py-2 md:px-8 md:py-5 shadow transition-colors"
              >
                Get a Free Quote
              </Link>
            </motion.div>
            <motion.div
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/work"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 text-base md:text-lg px-3 py-1 md:px-8 md:py-5 shadow backdrop-blur-sm transition-colors"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Trusted By Section */}
          <motion.div
            className="mt-12 sm:mt-16 flex items-center flex-wrap gap-4 sm:gap-6"
            variants={itemVariants}
          >
            <div className="flex -space-x-3 sm:-space-x-4">
              {[21, 22, 23, 24].map((seq, index) => (
                <motion.span
                  key={seq}
                  className="relative flex shrink-0 overflow-hidden rounded-full border-2 border-indigo-900 w-9 h-9 sm:w-10 sm:h-10 cursor-pointer"
                  variants={avatarVariants}
                  custom={index}
                  whileHover="hover"
                >
                  <Image
                    src={`https://readdy.ai/api/search-image?query=Professional%20headshot%20portrait%20with%20neutral%20expression%20against%20simple%20gradient%20background%2C%20clean%20corporate%20style&width=100&height=100&seq=${seq}&orientation=squarish`}
                    alt={`Client ${seq}`}
                    width={40}
                    height={40}
                    className="aspect-square object-cover"
                  />
                </motion.span>
              ))}
            </div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              <p className="text-white font-medium text-sm sm:text-base">
                Trusted by 200+ clients worldwide
              </p>
              <motion.div
                className="flex items-center mt-1 text-yellow-400 text-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.3, duration: 0.6 }}
              >
                {Array(5)
                  .fill(0)
                  .map((_, i) => (
                    <motion.i
                      key={i}
                      className="fa-solid fa-star"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{
                        delay: 2.4 + i * 0.1,
                        duration: 0.4,
                        ease: "backOut",
                      }}
                      whileHover={{
                        scale: 1.2,
                        rotate: 360,
                        transition: { duration: 0.3 },
                      }}
                    />
                  ))}
                <span className="ml-2 text-white text-xs sm:text-sm">
                  <span className="mr-1 text-yellow-400">★★★★★</span>
                  5.0 (180+ reviews)
                </span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Animated Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        variants={scrollIndicatorVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#services"
          className="text-white/80 hover:text-white transition-colors"
          animate={{
            y: [0, 10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          whileHover={{
            scale: 1.2,
            color: "#6366f1",
          }}
        >
          <i className="fa-solid fa-chevron-down text-xl sm:text-2xl"></i>
        </motion.a>
      </motion.div>
    </section>
  );
}
