"use client";
import { FaGoogle, FaApple, FaSpotify, FaAmazon } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
import { RiNetflixFill } from "react-icons/ri";
import { motion } from "framer-motion";

export default function TrustedSection() {
  const companies = [
    { name: "Google", icon: <FaGoogle /> },
    { name: "Apple", icon: <FaApple /> },
    { name: "Microsoft", icon: <FaMicrosoft /> },
    { name: "Spotify", icon: <FaSpotify /> },
    { name: "Amazon", icon: <FaAmazon /> },
    { name: "Netflix", icon: <RiNetflixFill /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    hover: {
      scale: 1.05,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto mt-[80px] mb-[52px] text-gray-600 px-2"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="text-indigo-800 text-xl text-center uppercase font-semibold mb-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Trusted by Industry Leaders
      </motion.h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5 md:gap-10 justify-center items-center text-center font-medium">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center gap-2 bg-slate-300 rounded py-6 hover:shadow-md cursor-pointer transition-all"
            variants={itemVariants}
            whileHover="hover"
          >
            <motion.div className="text-3xl text-indigo-800">
              {company.icon}
            </motion.div>
            <motion.h2 className="text-sm font-semibold text-gray-800">
              {company.name}
            </motion.h2>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
