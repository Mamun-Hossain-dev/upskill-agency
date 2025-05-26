"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import {
  FaSearch,
  FaLightbulb,
  FaPaintBrush,
  FaCogs,
  FaChartLine,
} from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo } from "react";

// Animation variant
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.8, ease: "easeOut" },
  }),
};

// Step card component
const StepCard = ({ icon, title, delay }) => (
  <motion.div
    className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
    variants={fadeUp}
    initial="hidden"
    animate="visible"
    custom={delay}
  >
    {icon}
    <p className="text-gray-800 font-medium">{title}</p>
  </motion.div>
);

export default function OurApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const approachSteps = useMemo(
    () => [
      {
        icon: <FaSearch className="text-indigo-600 w-6 h-6" />,
        title: "Research & Discovery",
      },
      {
        icon: <FaLightbulb className="text-indigo-600 w-6 h-6" />,
        title: "Strategic Planning",
      },
      {
        icon: <FaPaintBrush className="text-indigo-600 w-6 h-6" />,
        title: "Creative Development",
      },
      {
        icon: <FaCogs className="text-indigo-600 w-6 h-6" />,
        title: "Implementation & Testing",
      },
      {
        icon: <FaChartLine className="text-indigo-600 w-6 h-6" />,
        title: "Analysis & Optimization",
      },
    ],
    []
  );

  const chartData = useMemo(
    () => [
      { name: "Q1", valueGrowth: 4000, performanceScore: 2400 },
      { name: "Q2", valueGrowth: 3000, performanceScore: 1398 },
      { name: "Q3", valueGrowth: 2000, performanceScore: 9800 },
      { name: "Q4", valueGrowth: 2780, performanceScore: 3908 },
      { name: "Q5", valueGrowth: 1890, performanceScore: 4800 },
      { name: "Q6", valueGrowth: 2390, performanceScore: 3800 },
      { name: "Q7", valueGrowth: 3490, performanceScore: 4300 },
    ],
    []
  );

  return (
    <section
      ref={ref}
      className="px-4 py-12 md:py-20 bg-slate-50 container mx-auto"
    >
      <motion.h2
        className="text-lg font-semibold inline bg-indigo-200 px-3 py-2 rounded text-indigo-700 text-center"
        variants={fadeUp}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        Our Approach
      </motion.h2>

      <div className="flex items-start justify-between gap-10 mt-8 flex-wrap md:flex-nowrap">
        {/* Left Column */}
        <motion.div
          className="w-full md:w-1/2"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.2}
        >
          <h3 className="text-xl md:text-2xl text-gray-800 font-bold mb-4">
            Data-Driven Strategy with Creative Excellence
          </h3>
          <p className="text-gray-700 mb-8">
            We combine analytical insights with creative innovation to deliver
            solutions that not only look exceptional but also perform
            exceptionally well.
          </p>
          <div className="space-y-4">
            {approachSteps.map((step, index) => (
              <StepCard
                key={index}
                icon={step.icon}
                title={step.title}
                delay={0.3 + index * 0.1}
              />
            ))}
          </div>
        </motion.div>

        {/* Right Column: Chart */}
        <motion.div
          className="w-full md:w-1/2 bg-white p-6 rounded-lg shadow-md h-[500px]"
          variants={fadeUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          custom={0.5}
        >
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={chartData}
              margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />
              <Area
                type="monotone"
                dataKey="valueGrowth"
                stroke="#6366f1"
                fill="#c7d2fe"
                strokeWidth={3}
                dot={false}
                name="Value Growth"
                isAnimationActive={false}
              />
              <Area
                type="monotone"
                dataKey="performanceScore"
                stroke="#ec4899"
                fill="#fbcfe8"
                strokeWidth={3}
                dot={false}
                name="Performance Score"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
}
