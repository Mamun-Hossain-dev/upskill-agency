"use client";
import { memo, useMemo, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroSection = memo(() => {
  // Memoized animation variants to prevent recreation on each render
  const animationVariants = useMemo(
    () => ({
      container: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      },
      item: {
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.8,
            ease: "easeOut",
          },
        },
      },
      title: {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            delayChildren: 0.5,
            staggerChildren: 0.08,
          },
        },
      },
      letter: {
        hidden: { y: 50, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1,
          transition: {
            duration: 0.5,
            ease: "easeOut",
          },
        },
      },
      button: {
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
      },
      avatar: {
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
      },
      scrollIndicator: {
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
      },
    }),
    []
  );

  // Memoized title processing
  const titleWords = useMemo(() => {
    const title =
      "Empowering Brands through Design, Code, and Digital Strategy";
    return title.split(" ");
  }, []);

  // Memoized user images array
  const userImages = useMemo(
    () => ["user1.jpg", "user2.jpg", "user3.jpg", "user4.jpg"],
    []
  );

  // Memoized stars array
  const stars = useMemo(() => Array(5).fill(0), []);

  // Memoized hover handlers to prevent recreation
  const wordHoverEffect = useMemo(
    () => ({
      scale: 1.05,
      color: "#6366f1",
      transition: { duration: 0.2 },
    }),
    []
  );

  const starHoverEffect = useMemo(
    () => ({
      scale: 1.2,
      rotate: 360,
      transition: { duration: 0.3 },
    }),
    []
  );

  const scrollIndicatorHover = useMemo(
    () => ({
      scale: 1.2,
      color: "#6366f1",
    }),
    []
  );

  // Memoized scroll animation
  const scrollAnimation = useMemo(
    () => ({
      y: [0, 10, 0],
    }),
    []
  );

  const scrollTransition = useMemo(
    () => ({
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    }),
    []
  );

  // Optimized gradient overlay animation
  const gradientAnimation = useMemo(
    () => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { duration: 1.2 },
    }),
    []
  );

  return (
    <section
      id="home"
      className="relative w-full h-[70vh] min-h-[500px] overflow-hidden"
    >
      {/* Optimized Background Image */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <Image
          src="/images/banner3.jpg"
          alt="Hero Background"
          fill
          className="object-cover object-center"
          priority
          quality={80} // Reduced from 100 to 80 for better performance
          sizes="100vw"
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R6i+gaA=="
        />
      </div>

      {/* Gradient Overlay - Optimized */}
      <motion.div
        className="absolute inset-0 z-10 bg-gradient-to-r from-[#0c0128]/95 via-[#32024c]/80 to-transparent"
        {...gradientAnimation}
      />

      {/* Main Content */}
      <motion.div
        className="relative z-20 flex flex-col justify-center h-full px-3 sm:px-4 md:px-10 lg:px-16 xl:px-32 max-w-screen-xl"
        variants={animationVariants.container}
        initial="hidden"
        animate="visible"
      >
        <div className="max-w-3xl">
          {/* Animated Title */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            variants={animationVariants.title}
          >
            {titleWords.map((word, index) => (
              <motion.span
                key={`${word}-${index}`} // More specific key
                variants={animationVariants.letter}
                className="inline-block mr-2 sm:mr-3"
                whileHover={wordHoverEffect}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          {/* Animated Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-gray-200 mb-8"
            variants={animationVariants.item}
          >
            We transform ideas into exceptional digital experiences that drive
            growth and engagement for forward-thinking businesses.
          </motion.p>

          {/* Animated CTA Buttons */}
          <motion.div className="flex gap-4" variants={animationVariants.item}>
            <motion.div
              variants={animationVariants.button}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white text-base md:text-lg px-3 py-2 md:px-8 md:py-5 shadow transition-colors will-change-transform"
              >
                Get in touch
              </Link>
            </motion.div>
            <motion.div
              variants={animationVariants.button}
              whileHover="hover"
              whileTap="tap"
            >
              <Link
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/30 bg-white/10 text-white hover:bg-white/20 text-base md:text-lg px-3 py-2 md:px-8 md:py-5 shadow backdrop-blur-sm transition-colors will-change-transform"
              >
                View Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Animated Trusted By Section */}
          <motion.div
            className="mt-12 sm:mt-16 flex items-center flex-wrap gap-4 sm:gap-6"
            variants={animationVariants.item}
          >
            <div className="flex -space-x-3 sm:-space-x-4">
              {userImages.map((seq, index) => (
                <motion.span
                  key={`avatar-${seq}`}
                  className="relative flex shrink-0 overflow-hidden rounded-full border-2 border-indigo-300 w-9 h-9 sm:w-10 sm:h-10 cursor-pointer will-change-transform"
                  variants={animationVariants.avatar}
                  custom={index}
                  whileHover="hover"
                >
                  <Image
                    src={`/images/users/${seq}`}
                    alt={`Client ${seq}`}
                    width={40}
                    height={40}
                    className="aspect-square object-cover"
                    loading="lazy" // Lazy load user avatars
                    quality={50} // Reduced quality for avatars
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
                {stars.map((_, i) => (
                  <motion.i
                    key={`star-${i}`}
                    className="fa-solid fa-star will-change-transform"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                      delay: 2.4 + i * 0.1,
                      duration: 0.4,
                      ease: "backOut",
                    }}
                    whileHover={starHoverEffect}
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
        variants={animationVariants.scrollIndicator}
        initial="hidden"
        animate="visible"
      >
        <motion.a
          href="#services"
          className="text-white/80 hover:text-white transition-colors will-change-transform"
          animate={scrollAnimation}
          transition={scrollTransition}
          whileHover={scrollIndicatorHover}
        >
          <i className="fa-solid fa-chevron-down text-xl sm:text-2xl"></i>
        </motion.a>
      </motion.div>
    </section>
  );
});

HeroSection.displayName = "HeroSection";

export default HeroSection;
