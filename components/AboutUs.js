"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useMemo } from "react";

// Fade-up animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.8, 0.25, 1],
    },
  },
};

const AboutUs = () => {
  const stats = useMemo(
    () => [
      { value: "240+", label: "Clients Worldwide" },
      { value: "400+", label: "Projects Completed" },
      { value: "10+", label: "Industry Awards" },
    ],
    []
  );

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ staggerChildren: 0.3 }}
      className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-16 px-3 md:px-4 bg-white container mx-auto"
    >
      {/* Left Column */}
      <motion.div variants={fadeUp} className="space-y-6">
        <h2 className="text-lg font-semibold inline bg-indigo-200 px-3 py-2 rounded text-indigo-700 text-center">
          About us
        </h2>

        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-8">
          We are a Team of Creative Problem Solvers
        </h2>

        <p className="text-gray-600 text-base leading-relaxed">
          Founded in 2018, UpSkill Digital Agency has grown from a small design
          studio to a full-service digital agency with a passion for creating
          impactful digital experiences that drive real business results.
        </p>

        <p className="text-gray-600 text-base leading-relaxed">
          Our diverse team brings together expertise in design, development, and
          marketing to deliver integrated solutions that help our clients stand
          out in today’s competitive digital landscape.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-6 pt-4 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl font-bold text-indigo-700">
                {stat.value}
              </h3>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        <Link
          href="/about"
          className="inline-block mt-6 px-6 py-3 bg-indigo-700 text-white rounded-xl hover:bg-indigo-800 transition"
        >
          Learn More About Us
        </Link>
      </motion.div>

      {/* Right Column */}
      <motion.div
        variants={fadeUp}
        className="relative w-full h-[500px] rounded-2xl overflow-hidden shadow-lg"
      >
        <Image
          src="/images/servicesImage/team.jpg"
          alt="About us"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
          priority
        />

        {/* Rating badge */}
        <div className="absolute bottom-6 left-7 right-1 bg-white bg-opacity-90 p-4 rounded-xl shadow flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className="text-yellow-400 w-5 h-5 fill-yellow-400"
            />
          ))}
          <span className="ml-2 text-gray-700 text-sm font-medium">
            Rated 5.0/5.0 from over 180 client reviews
          </span>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AboutUs;
