// latest-works/page.jsx
"use client";

import Link from "next/link";
import {
  ExternalLink,
  Eye,
  Palette,
  Code,
  TrendingUp,
  ArrowRight,
  Star,
  Users,
  Target,
  Smartphone,
  ShoppingCart,
  Camera,
} from "lucide-react";
import { motion } from "framer-motion";

const categoryIcons = {
  "Digital Marketing": TrendingUp,
  "Graphic Design": Palette,
  "Web Development": Code,
  "Mobile App": Smartphone,
  "E-commerce": ShoppingCart,
  Photography: Camera,
};

// Portfolio data
const portfolioData = [
  {
    id: 1,
    client: "Seojoon",
    country: "South Korea",
    service: "Social Media Management",
    title: "Brand Social Media Growth",
    category: "Digital Marketing",
    description:
      "We managed Seojoon's social presence across platforms with content creation, scheduling, engagement, and analytics. Engagement and visibility significantly improved.",
    clientImage: "/portfolio/seojoon.jpg",
    workImage: "portfolio/eco.jpg",
    tags: ["Content", "Engagement", "Scheduling"],
    featured: true,
  },
  {
    id: 2,
    client: "Hyun",
    country: "South Korea",
    service: "Social Media Advertising",
    title: "Targeted Social Ads",
    category: "Digital Marketing",
    description:
      "Ran optimized ad campaigns for Hyun focusing on awareness and conversions. Strong engagement and great ROI.",
    clientImage: "/portfolio/hyun.jpg",
    workImage: "portfolio/product.jpg",
    tags: ["Ads", "Optimization", "Conversions"],
    featured: false,
  },
  {
    id: 3,
    client: "Richard",
    country: "United States",
    service: "Social Media Advertising & Google Ads",
    title: "Cross-Platform Ad Campaigns",
    category: "Digital Marketing",
    description:
      "Managed social + Google Ads for Richard. Full funnel strategy, A/B testing, and strong lead generation with high ROI.",
    clientImage: "/portfolio/richard.jpg",
    workImage: "portfolio/work2.png",
    tags: ["Google Ads", "Social Media", "A/B Testing"],
    featured: true,
  },
  {
    id: 4,
    client: "Lucas",
    country: "United States",
    service: "Website Creation & Management",
    title: "Professional Business Website",
    category: "Web Development",
    description:
      "Designed and managed Lucas's business website with full setup, SEO, and maintenance. Site is secure and fully responsive.",
    clientImage: "/portfolio/lucas.jpg",
    workImage: "portfolio/work3.png",
    tags: ["Web Design", "SEO", "Maintenance"],
    featured: false,
  },
  {
    id: 5,
    client: "Ava",
    country: "Australia",
    service: "Graphic Design",
    title: "Brand Identity Design",
    category: "Graphic Design",
    description:
      "Created a full brand identity including logo, color palette, and marketing materials that gave Ava's brand a professional look and cohesive feel.",
    clientImage: "/portfolio/ava.jpg",
    workImage: "portfolio/corporet.jpeg",
    tags: ["Logo", "Branding", "Colors"],
    featured: true,
  },
  {
    id: 6,
    client: "Kenji",
    country: "Japan",
    service: "Mobile App UI/UX",
    title: "Mobile Shopping App Design",
    category: "Mobile App",
    description:
      "Crafted a sleek, intuitive interface for a mobile shopping platform, enhancing user experience and driving customer satisfaction.",
    clientImage: "/portfolio/kenji.jpg",
    workImage: "portfolio/mobile.webp",
    tags: ["UI/UX", "Shopping", "Mobile"],
    featured: false,
  },
  {
    id: 7,
    client: "Isabella",
    country: "Italy",
    service: "E-commerce Development",
    title: "Online Boutique Store",
    category: "E-commerce",
    description:
      "Developed a high-converting boutique e-commerce store with secure payment integration and product management dashboard.",
    clientImage: "/portfolio/isabella.jpg",
    workImage: "portfolio/mobile.webp",
    tags: ["E-commerce", "Store", "Payments"],
    featured: false,
  },
  {
    id: 8,
    client: "Mohamed",
    country: "UAE",
    service: "Photography",
    title: "Luxury Product Photography",
    category: "Photography",
    description:
      "Captured luxury product shots for high-end advertising campaigns. Images were used across print and digital media.",
    clientImage: "/portfolio/mohamed.jpg",
    workImage: "portfolio/mobile.webp",
    tags: ["Luxury", "Products", "Photography"],
    featured: false,
  },
];

const PortfolioCard = ({ project }) => {
  const IconComponent = categoryIcons[project.category] || Code;
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group relative"
    >
      <Link href={`/portfolio/${project.id}`}>
        <figure className="h-64 overflow-hidden relative">
          <img
            src={project.workImage}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          {project.featured && (
            <div className="absolute top-4 right-4">
              <div className="badge badge-secondary gap-1">
                <Star size={12} /> Featured
              </div>
            </div>
          )}
        </figure>

        <div className="card-body">
          <div className="flex items-center gap-3 mb-2">
            <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg">
              <IconComponent className="text-primary" size={20} />
            </div>
            <div>
              <h3 className="card-title text-lg text-base-content group-hover:text-indigo-600 transition-colors duration-300">
                {project.title}
              </h3>
              <p className="text-sm text-base-content/60">{project.service}</p>
            </div>
          </div>

          <p className="text-base-content/70 mb-4 line-clamp-3">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {project.tags.map((tag, tagIndex) => (
              <span
                key={tagIndex}
                className="badge badge-outline badge-xs group-hover:bg-indigo-100 group-hover:text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="card-actions justify-end">
            <span className="btn btn-sm btn-outline group-hover:bg-indigo-600 group-hover:text-white border-indigo-600 hover:border-transparent transition-all duration-300">
              View Details <ArrowRight size={14} className="ml-1" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const Banner = () => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="images/banner2.webp"
          alt="Portfolio Banner"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            >
              <span className="text-gradient bg-gradient-to-r from-white to-indigo-300 bg-clip-text text-transparent">
                Featured Projects
              </span>
              <br />
              <span className="text-white">& Case Studies</span>
            </motion.h1>
          </motion.div>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore our recent work and see how we have helped businesses across
            industries achieve their digital goals.
          </motion.p>

          {/* Floating elements */}
          <motion.div
            className="absolute top-20 right-20 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"
            animate={{
              y: [-10, 10, -10],
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <motion.div
            className="absolute bottom-32 right-32 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"
            animate={{
              y: [10, -10, 10],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Banner Section */}
      <Banner />

      {/* Portfolio Grid Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
            Our Latest Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioData.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
            >
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
