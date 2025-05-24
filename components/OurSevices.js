"use client";

import Link from "next/link";
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
import services from "@/data/services.json";

// Icon map with consistent sizing
const iconMap = {
  "Digital Marketing": (
    <BarChart3 className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Social Media Advertising": (
    <Target className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Social Media Management": (
    <Users className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Google Ads (Search, Display & YouTube)": (
    <Search className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Facebook Campaign with Pixel & Conversion API": (
    <Settings className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "B2B Lead Generation": (
    <Globe className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Instagram Organic Growth": (
    <Star className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "YouTube SEO & Organic Video Promotion": (
    <Play className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Website SEO (Search Engine Optimization)": (
    <TrendingUp className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Website Creation & Design": (
    <Palette className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
  "Video Editing": (
    <Camera className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
  ),
};

const sectionVariants = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 1,
      bounce: 0.2,
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function OurServices() {
  const limitedServices = services.slice(0, 3); // Show only first 3

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={sectionVariants}
      className="container mx-auto bg-white py-16 px-4 sm:px-6 lg:px-8 rounded"
    >
      <motion.div className="max-w-7xl mx-auto text-center space-y-3 px-5 md:px-16">
        <motion.h2
          className="text-lg font-semibold inline bg-indigo-200 px-3 py-2 rounded text-indigo-700 text-center"
          variants={cardVariants}
        >
          Our Services
        </motion.h2>
        <motion.p
          className="mt-8 text-3xl font-bold text-gray-900 md:text-4xl"
          variants={cardVariants}
        >
          Comprehensive Solutions for Digital Success
        </motion.p>
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-600"
          variants={cardVariants}
        >
          We offer a full spectrum of creative and technical services to help
          your business thrive in the digital landscape.
        </motion.p>
      </motion.div>

      <motion.div
        className="mt-12 grid gap-8 md:gap-12 lg:gap-24 sm:grid-cols-2 md:grid-cols-3 max-w-7xl mx-auto px-2 md:px-6"
        variants={sectionVariants}
      >
        {limitedServices.map((service) => (
          <motion.div
            key={service.id}
            variants={cardVariants}
            whileHover={{ scale: 1.03 }}
            className="bg-slate-50 rounded-xl shadow-md hover:shadow-lg overflow-hidden transition-all"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6 border-[1px] border-white hover:border-indigo-600 transition-colors duration-200">
              <div className="flex items-center gap-2 mb-3">
                {iconMap[service.title] || (
                  <Code className="w-6 h-6 min-w-[1.5rem] min-h-[1.5rem] text-indigo-600" />
                )}
                <h3 className="text-lg font-semibold text-indigo-700">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-700 text-sm">{service.description}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div className="mt-10 text-center" variants={cardVariants}>
        <Link href="/services">
          <button className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-lg transition">
            Show More <ArrowRight className="w-4 h-4" />
          </button>
        </Link>
      </motion.div>
    </motion.section>
  );
}
