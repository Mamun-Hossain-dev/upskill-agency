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

const data = [
  { name: "Q1", valueGrowth: 4000, performanceScore: 2400 },
  { name: "Q2", valueGrowth: 3000, performanceScore: 1398 },
  { name: "Q3", valueGrowth: 2000, performanceScore: 9800 },
  { name: "Q4", valueGrowth: 2780, performanceScore: 3908 },
  { name: "Q5", valueGrowth: 1890, performanceScore: 4800 },
  { name: "Q6", valueGrowth: 2390, performanceScore: 3800 },
  { name: "Q7", valueGrowth: 3490, performanceScore: 4300 },
];

const approachSteps = [
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
];

export default function OurApproach() {
  return (
    <section className="px-4 py-12 md:py-20 bg-slate-50 container mx-auto">
      <h2 className="text-lg font-semibold inline bg-indigo-200 px-3 py-2 rounded text-indigo-700 text-center">
        Our Approach
      </h2>

      <div className="flex items-center justify-between gap-10 md:justify-between mt-8 flex-wrap md:flex-nowrap">
        {/* Left Column */}
        <div>
          <h3 className="text-xl font-medium text-indigo-600 mb-4">
            Data-Driven Strategy with Creative Excellence
          </h3>
          <p className="text-gray-700 mb-8">
            We combine analytical insights with creative innovation to deliver
            solutions that not only look exceptional but also perform
            exceptionally well.
          </p>
          <div className="space-y-4">
            {approachSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-sm"
              >
                {step.icon}
                <p className="text-gray-800 font-medium">{step.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Chart */}
        <div className="bg-white p-6 rounded-lg shadow-md w-full h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 30, left: 0, bottom: 20 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend verticalAlign="bottom" height={36} />

              {/* Value Growth: Indigo Area + Line */}
              <Area
                type="monotone"
                dataKey="valueGrowth"
                stroke="#6366f1" // dark indigo
                fill="#c7d2fe" // light indigo
                strokeWidth={3}
                dot={false}
                name="Value Growth"
              />

              {/* Performance Score: Pink/Red Area + Line */}
              <Area
                type="monotone"
                dataKey="performanceScore"
                stroke="#ec4899" // rose-500
                fill="#fbcfe8" // rose-200
                strokeWidth={3}
                dot={false}
                name="Performance Score"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
