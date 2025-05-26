"use client";

import React, { memo } from "react";
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

// Animation configurations
const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  show: { transition: { staggerChildren: 0.15 } },
};

// Reusable components with display names
const SectionHeader = memo(({ title, description, className }) => (
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

const FeatureCard = memo(({ icon, title, description, variants }) => (
  <motion.div
    className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
    variants={variants}
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
    className="bg-white p-6 rounded-2xl shadow-md text-center border-2 border-white hover:border-indigo-700 transition-all"
    variants={fadeInUp}
  >
    <div className="flex flex-col items-center gap-2">
      <div className="bg-indigo-100 px-4 py-3 rounded-full">{icon}</div>
      <h3 className="text-2xl font-bold mb-4">{title}</h3>
    </div>
    <p className="text-base-content/70">{description}</p>
  </motion.div>
));
ValueCard.displayName = "ValueCard";

// Data arrays
const HIGHLIGHTS = [
  {
    icon: <BadgeCheck className="text-primary" size={32} />,
    title: "Trusted Expertise",
    desc: "Years of experience delivering exceptional solutions across industries.",
  },
  {
    icon: <Lightbulb className="text-primary" size={32} />,
    title: "Innovative Thinking",
    desc: "We embrace creativity to solve problems and unlock opportunities.",
  },
  {
    icon: <Globe className="text-primary" size={32} />,
    title: "Global Impact",
    desc: "We serve clients worldwide with scalable digital solutions.",
  },
  {
    icon: <Heart className="text-primary" size={32} />,
    title: "Client-Centric",
    desc: "Your vision is our mission. We prioritize your goals.",
  },
];

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

export default function AboutSection() {
  return (
    <section className="container mx-auto mb-8">
      <motion.div
        className="relative min-h-[400px] w-full mb-16"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
      >
        <Image
          src="/images/banner.webp"
          alt="About Us"
          fill
          className="object-cover rounded-xl"
          priority
          sizes="(max-width: 768px) 100vw, 80vw"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-xl">
          <div className="text-center text-white px-4">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About Our Agency
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              We are passionate creators, strategists, and developers crafting
              impactful digital experiences.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <AboutUs />

        {/* Highlights Section */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 mt-16"
          variants={staggerContainer}
        >
          {HIGHLIGHTS.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.desc}
              variants={fadeInUp}
            />
          ))}
        </motion.div>

        {/* Services Section */}
        <SectionHeader
          title="Why Choose Us?"
          description="We deliver exceptional results through proven expertise and dedicated service."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
          variants={staggerContainer}
        >
          {SERVICES.map((item, i) => (
            <FeatureCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.desc}
              variants={fadeInUp}
            />
          ))}
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10"
          variants={staggerContainer}
        >
          {VALUES.map((item, i) => (
            <ValueCard
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.desc}
            />
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
