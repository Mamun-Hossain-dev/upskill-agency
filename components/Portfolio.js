"use client";

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

// Icon mapping
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
    title: "Eco-Friendly Brand Identity",
    category: "Graphic Design",
    description:
      "Complete brand identity design for sustainable products company including logo, packaging, and marketing materials.",
    image: "/portfolio/eco.jpg",
    tags: ["Branding", "Logo Design", "Packaging"],
    featured: false,
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description:
      "Modern, responsive e-commerce platform with improved UX/UI, resulting in significant increase in conversions.",
    image: "/portfolio/work2.png",
    tags: ["React", "Node.js", "E-commerce"],
    featured: false,
  },
  {
    id: 3,
    title: "Mobile App UI/UX Design",
    category: "Mobile App",
    description:
      "Intuitive mobile app design for fitness tracking with seamless user experience and modern interface.",
    image: "/portfolio/mobile.webp",
    tags: ["UI/UX", "Mobile Design", "Prototyping"],
    featured: false,
  },
  {
    id: 4,
    title: "Corporate Website Overhaul",
    category: "Web Development",
    description:
      "Complete website redesign for financial services company with focus on trust, security, and user experience.",
    image: "/portfolio/corporet.jpeg",
    tags: ["WordPress", "SEO", "Security"],
    featured: false,
  },
  {
    id: 5,
    title: "Social Media Growth Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive social media strategy that increased follower count by 300% and engagement by 150% across multiple platforms.",
    image: "/portfolio/work3.png",
    tags: ["Social Media", "Content Strategy", "Analytics"],
    featured: true,
  },
  {
    id: 6,
    title: "Product Launch Campaign",
    category: "Digital Marketing",
    description:
      "Multi-channel marketing campaign for tech startup product launch, achieving exceptional ROI in first quarter.",
    image: "/portfolio/product.jpg",
    tags: ["PPC", "Content Marketing", "Analytics"],
    featured: true,
  },
];

// Card Component with animation
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
      {/* Image */}
      <figure className="h-64 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
            <div className="flex gap-2">
              <button className="btn btn-circle btn-sm bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur-sm">
                <Eye size={16} className="text-white" />
              </button>
              <button className="btn btn-circle btn-sm bg-white/20 border-white/30 hover:bg-white/30 backdrop-blur-sm">
                <ExternalLink size={16} className="text-white" />
              </button>
            </div>
            <div className="badge badge-primary badge-sm">
              {project.category}
            </div>
          </div>
        </div>

        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="badge badge-secondary gap-1">
              <Star size={12} />
              Featured
            </div>
          </div>
        )}
      </figure>

      {/* Body */}
      <div className="card-body">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg transition-transform duration-300 group-hover:scale-110">
            <IconComponent className="text-primary" size={20} />
          </div>
          <div>
            <h3 className="card-title text-lg transition-colors duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-base-content/60">{project.category}</p>
          </div>
        </div>

        <p className="text-base-content/70 mb-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="badge badge-outline badge-xs transition-all duration-300 group-hover:badge-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="card-actions justify-between">
          <button className="btn btn-sm btn-outline group-hover:btn-primary transition-all duration-300">
            View Details
          </button>
          <button className="btn btn-sm btn-primary group-hover:btn-accent transition-all duration-300">
            <span className="flex items-center">
              View Project
              <ArrowRight
                size={14}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

// Main Page
export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-base-100 text-gray-950">
      {/* Hero Section */}
      <section
        className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106, 17, 203, 0.5), rgba(138, 43, 226, 0.5)), url('/images/banner2.webp')",
        }}
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse opacity-20"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse opacity-30"></div>
          <div className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse opacity-25"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-7xl font-bold mb-6 text-white"
          >
            Our Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-4"
          >
            Featured Projects & Case Studies
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-white/80 max-w-4xl mx-auto"
          >
            Explore our recent work and see how we have helped businesses across
            industries achieve their digital goals.
          </motion.p>
        </div>

        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-base-100 to-transparent"></div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {portfolioData.map((project) => (
              <PortfolioCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                label: "Projects Completed",
                value: "50+",
                color: "primary",
              },
              {
                icon: Users,
                label: "Happy Clients",
                value: "40+",
                color: "secondary",
              },
              {
                icon: TrendingUp,
                label: "Average ROI",
                value: "200%",
                color: "accent",
              },
              {
                icon: Star,
                label: "Client Rating",
                value: "5.0",
                color: "primary",
              },
            ].map(({ icon: Icon, label, value, color }, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="text-center group cursor-pointer"
              >
                <div
                  className={`flex items-center justify-center w-16 h-16 bg-gradient-to-br from-${color}/20 to-${color}/10 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110`}
                >
                  <Icon className={`text-${color}`} size={32} />
                </div>
                <h3 className={`text-3xl font-bold text-${color} mb-2`}>
                  {value}
                </h3>
                <p className="text-base-content/70">{label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-base-200 via-base-200 to-base-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        </div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Like What You See?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto"
          >
            Lets create something amazing together. View all our projects or
            start your own.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <span className="flex items-center">
                View All Projects <ExternalLink size={18} className="ml-2" />
              </span>
            </button>
            <button className="btn btn-outline btn-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:btn-primary group">
              Start Your Project
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Inline Styles */}
      <style jsx>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .card {
          will-change: transform;
        }
        .card:hover {
          transform: translateY(-4px);
        }
        @media (max-width: 768px) {
          .group-hover\\:scale-110:hover {
            transform: scale(1.05);
          }
          .card:hover {
            transform: translateY(-2px);
          }
        }
      `}</style>
    </div>
  );
}
