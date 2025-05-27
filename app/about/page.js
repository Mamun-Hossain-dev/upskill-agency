"use client";

import React, { memo, useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  BadgeCheck,
  Lightbulb,
  Globe,
  Heart,
  Star,
  TrendingUp,
  Settings,
  ArrowRight,
  Target,
  Eye,
} from "lucide-react";
import AboutUs from "@/components/AboutUs";

// Optimized animation configurations with faster timings
const fadeInUp = {
  hidden: { opacity: 0, y: 20, scale: 0.98 },
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

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const heroVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Memoized reusable components
const SectionHeader = memo(({ title, description, className = "" }) => (
  <motion.div className={`text-center mb-16 ${className}`} variants={fadeInUp}>
    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-800">
      {title}
    </h2>
    <p className="text-base md:text-xl text-base-content/90 max-w-3xl mx-auto">
      {description}
    </p>
  </motion.div>
));
SectionHeader.displayName = "SectionHeader";

const FeatureCard = memo(({ icon, title, description }) => (
  <motion.div
    className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 will-change-transform"
    variants={fadeInUp}
    whileHover={{
      y: -4,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
  >
    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-base-content/70">{description}</p>
  </motion.div>
));
FeatureCard.displayName = "FeatureCard";

const ValueCard = memo(({ icon, title, description }) => (
  <motion.div
    className="bg-white p-6 rounded-2xl shadow-md text-center border-2 border-white hover:border-indigo-700 transition-all duration-300 will-change-transform"
    variants={fadeInUp}
    whileHover={{
      scale: 1.02,
      transition: { duration: 0.2, ease: "easeOut" },
    }}
  >
    <div className="flex flex-col items-center gap-2">
      <div className="bg-indigo-100 px-4 py-3 rounded-full">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
    </div>
    <p className="text-base-content/70">{description}</p>
  </motion.div>
));
ValueCard.displayName = "ValueCard";

// Memoized hero section
const HeroSection = memo(() => (
  <motion.div
    className="relative min-h-[400px] w-full mb-16"
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-80px" }}
    variants={heroVariant}
  >
    <Image
      src="/images/banner.jpg"
      alt="About Us"
      fill
      className="object-cover rounded-xl"
      priority
      sizes="(max-width: 768px) 100vw, 80vw"
      loading="eager"
      decoding="sync"
      quality={35}
    />
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
      <div className="text-center text-white px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          About Our Agency
        </motion.h2>
        <motion.p
          className="text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          We are passionate creators, strategists, and developers crafting
          impactful digital experiences.
        </motion.p>
      </div>
    </div>
  </motion.div>
));
HeroSection.displayName = "HeroSection";

// Memoized data arrays
const SERVICES = [
  {
    icon: <Star className="text-primary" size={32} />,
    title: "Quality Assured",
    desc: "Highest standards maintained in all deliverables.",
  },
  {
    icon: <TrendingUp className="text-primary" size={32} />,
    title: "Proven Results",
    desc: "Track record of successful projects and clients.",
  },
  {
    icon: <Settings className="text-primary" size={32} />,
    title: "Custom Solutions",
    desc: "Tailored approaches for unique business needs.",
  },
  {
    icon: <ArrowRight className="text-primary" size={32} />,
    title: "Fast Delivery",
    desc: "Timely execution without compromising quality.",
  },
];

const VALUES = [
  {
    icon: <Target className="text-indigo-700" />,
    title: "Our Mission",
    desc: "Empower businesses with innovative digital solutions for growth and value.",
  },
  {
    icon: <Eye className="text-indigo-700" />,
    title: "Our Vision",
    desc: "Be the most trusted partner for transformative digital experiences.",
  },
  {
    icon: <Heart className="text-indigo-700" />,
    title: "Our Values",
    desc: "Excellence, Innovation, Integrity, Collaboration, Client Success.",
  },
];

// Memoized services grid
const ServicesGrid = memo(() => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {SERVICES.map((item, i) => (
      <FeatureCard
        key={`service-${i}`}
        icon={item.icon}
        title={item.title}
        description={item.desc}
      />
    ))}
  </motion.div>
));
ServicesGrid.displayName = "ServicesGrid";

// Memoized values grid
const ValuesGrid = memo(() => (
  <motion.div
    className="grid grid-cols-1 md:grid-cols-3 gap-10"
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-50px" }}
  >
    {VALUES.map((item, i) => (
      <ValueCard
        key={`value-${i}`}
        icon={item.icon}
        title={item.title}
        description={item.desc}
      />
    ))}
  </motion.div>
));
ValuesGrid.displayName = "ValuesGrid";

export default function AboutSection() {
  // Memoize section header props to prevent re-creation
  const sectionHeaderProps = useMemo(
    () => ({
      title: "Why Choose Us?",
      description:
        "We deliver exceptional results through proven expertise and dedicated service.",
    }),
    []
  );

  return (
    <section className="container mx-auto mb-8">
      <HeroSection />

      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <AboutUs />

        {/* Services Section */}
        <SectionHeader {...sectionHeaderProps} />
        <ServicesGrid />

        {/* Values Section */}
        <ValuesGrid />
      </motion.div>
    </section>
  );
}
