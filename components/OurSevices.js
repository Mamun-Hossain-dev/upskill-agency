"use client";

import { useEffect, useState, memo, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  BarChart3,
  Camera,
  Globe,
  Palette,
  Play,
  Search,
  Settings,
  Star,
  Target,
  TrendingUp,
  Users,
  ArrowRight,
  Code,
} from "lucide-react";
import { motion } from "framer-motion";

const iconStyle = "w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600";

// Memoized icon map for performance
const iconMap = {
  "Digital Marketing": <BarChart3 className={iconStyle} />,
  "Social Media Advertising": <Target className={iconStyle} />,
  "Social Media Management": <Users className={iconStyle} />,
  "Google Ads (Search, Display & YouTube)": <Search className={iconStyle} />,
  "Facebook Campaign with Pixel & Conversion API": (
    <Settings className={iconStyle} />
  ),
  "B2B Lead Generation": <Globe className={iconStyle} />,
  "Instagram Organic Growth": <Star className={iconStyle} />,
  "YouTube SEO & Organic Video Promotion": <Play className={iconStyle} />,
  "Website SEO (Search Engine Optimization)": (
    <TrendingUp className={iconStyle} />
  ),
  "Website Creation & Design": <Palette className={iconStyle} />,
  "Video Editing": <Camera className={iconStyle} />,
};

// Optimized animation variants with faster timings
const sectionVariants = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.6,
      bounce: 0.15,
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 25, scale: 0.95 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const headerVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut",
    },
  },
};

// Memoized service card component
const ServiceCard = memo(({ service, index }) => {
  const serviceIcon = useMemo(
    () => iconMap[service.title] || <Code className={iconStyle} />,
    [service.title]
  );

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      className="bg-slate-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all duration-300 will-change-transform"
    >
      <div className="relative w-full h-48">
        <Image
          src={service.image}
          alt={service.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          priority={index === 0}
          className="object-cover"
          loading={index === 0 ? "eager" : "lazy"}
          decoding="async"
          quality={60}
        />
      </div>
      <div className="p-6 border border-white hover:border-indigo-600 transition-colors duration-200">
        <div className="flex items-center gap-2 mb-3">
          {serviceIcon}
          <h3 className="text-lg font-semibold text-indigo-700">
            {service.title}
          </h3>
        </div>
        <p className="text-gray-700 text-sm">{service.description}</p>
      </div>
    </motion.div>
  );
});

ServiceCard.displayName = "ServiceCard";

// Memoized header section
const HeaderSection = memo(() => (
  <motion.div className="max-w-7xl mx-auto text-center space-y-3 px-5 md:px-16">
    <motion.h2
      className="text-lg font-semibold inline bg-indigo-200 px-3 py-2 rounded text-indigo-700 text-center"
      variants={headerVariants}
    >
      Our Services
    </motion.h2>
    <motion.p
      className="mt-8 text-3xl font-bold text-gray-900 md:text-4xl"
      variants={headerVariants}
    >
      Comprehensive Solutions for Digital Success
    </motion.p>
    <motion.p
      className="mt-4 text-base md:text-lg text-gray-600"
      variants={headerVariants}
    >
      We offer a full spectrum of creative and technical services to help your
      business thrive in the digital landscape.
    </motion.p>
  </motion.div>
));

HeaderSection.displayName = "HeaderSection";

// Memoized CTA section
const CTASection = memo(() => (
  <motion.div className="mt-10 text-center" variants={cardVariants}>
    <Link href="/services">
      <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200">
        Show More <ArrowRight className="w-4 h-4" />
      </button>
    </Link>
  </motion.div>
));

CTASection.displayName = "CTASection";

export default function OurServices() {
  const [services, setServices] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    const loadServices = async () => {
      try {
        const res = await fetch("/data/services.json");
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();

        if (isMounted) {
          setServices(data.slice(0, 3));
          setIsLoading(false);
        }
      } catch (err) {
        console.error("Failed to load services data:", err);
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    loadServices();

    return () => {
      isMounted = false;
    };
  }, []);

  // Memoize services grid to prevent unnecessary re-renders
  const servicesGrid = useMemo(
    () => (
      <motion.div
        className="mt-12 grid gap-8 md:gap-12 lg:gap-24 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-2 md:px-6"
        variants={sectionVariants}
      >
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </motion.div>
    ),
    [services]
  );

  if (isLoading) {
    return (
      <section className="container mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8 rounded">
        <div className="max-w-7xl mx-auto text-center">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-32 mx-auto mb-4"></div>
            <div className="h-10 bg-gray-200 rounded w-96 mx-auto mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-80 mx-auto"></div>
          </div>
          <div className="mt-12 grid gap-8 md:gap-12 lg:gap-24 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-2 md:px-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-xl h-48 mb-4"></div>
                <div className="p-6">
                  <div className="h-6 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2, margin: "-50px" }}
      variants={sectionVariants}
      className="container mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8 rounded"
    >
      <HeaderSection />
      {servicesGrid}
      <CTASection />
    </motion.section>
  );
}
