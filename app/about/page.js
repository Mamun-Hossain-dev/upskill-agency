"use client";

import React, { memo } from "react";
import { motion } from "framer-motion";
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
    desc: "We serve clients around the world with scalable and smart digital solutions.",
  },
  {
    icon: <Heart className="text-primary" size={32} />,
    title: "Client-Centric",
    desc: "Your vision is our mission. We put your goals at the center of our strategy.",
  },
];

const SERVICES = [
  {
    icon: <Star className="text-primary" size={32} />,
    title: "Quality Assured",
    desc: "We maintain the highest standards in all our deliverables.",
  },
  {
    icon: <TrendingUp className="text-primary" size={32} />,
    title: "Proven Results",
    desc: "Track record of successful projects and satisfied clients.",
  },
  {
    icon: <Settings className="text-primary" size={32} />,
    title: "Custom Solutions",
    desc: "Tailored approaches to meet your unique business requirements.",
  },
  {
    icon: <ArrowRight className="text-primary" size={32} />,
    title: "Fast Delivery",
    desc: "Timely execution without compromising quality or impact.",
  },
];

const VALUES = [
  {
    icon: <Target className="text-indigo-700" />,
    title: "Our Mission",
    desc: "To empower businesses with innovative digital solutions that drive growth, engagement, and lasting value.",
  },
  {
    icon: <Eye className="text-indigo-700" />,
    title: "Our Vision",
    desc: "To be the most trusted creative partner for businesses seeking exceptional digital experiences that transform their brand and market position.",
  },
  {
    icon: <Heart className="text-indigo-700" />,
    title: "Our Values",
    desc: "Excellence, Innovation, Integrity, Collaboration, and Client Success are the core principles that guide everything we do.",
  },
];

export default function AboutSection() {
  return (
    <section className="container mx-auto mb-8">
      <motion.div
        className="container mx-auto px-4"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <SectionHeader
          title="About Our Agency"
          description="We are a team of passionate creators, strategists, and developers dedicated to crafting impactful digital experiences."
          className="bg-gradient-to-br from-primary/90 to-base-100 py-8"
        />

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
        <motion.div
          className="text-center mb-12 hidden lg:block"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            We deliver exceptional results through our proven approach and
            dedicated expertise.
          </p>
        </motion.div>

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
