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

// Icon mapping for project categories
const categoryIcons = {
  "Digital Marketing": TrendingUp,
  "Graphic Design": Palette,
  "Web Development": Code,
  "Mobile App": Smartphone,
  "E-commerce": ShoppingCart,
  Photography: Camera,
};

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

// Optimized Portfolio Card Component
const PortfolioCard = ({ project }) => {
  const IconComponent = categoryIcons[project.category] || Code;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group relative">
      {/* Project Image with Overlay */}
      <figure className="h-64 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />

        {/* Overlay with Actions */}
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

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-4 right-4">
            <div className="badge badge-secondary gap-1">
              <Star size={12} />
              Featured
            </div>
          </div>
        )}
      </figure>

      <div className="card-body">
        {/* Category Icon and Title */}
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

        {/* Description */}
        <p className="text-base-content/70 mb-4 line-clamp-3">
          {project.description}
        </p>

        {/* Tags */}
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

        {/* Action Buttons */}
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
    </div>
  );
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-base-100 text-gray-950">
      {/* Hero Section with Banner */}
      <section
        className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106, 17, 203, 0.5), rgba(138, 43, 226, 0.5)), url('/images/banner2.webp')",
        }}
      >
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full animate-pulse opacity-20"></div>
          <div
            className="absolute top-3/4 right-1/4 w-24 h-24 bg-white/10 rounded-full animate-pulse opacity-30"
            style={{ animationDelay: "1s" }}
          ></div>
          <div
            className="absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-pulse opacity-25"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8">
            Featured Projects & Case Studies
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto">
            Explore our recent work and see how we have helped businesses across
            industries achieve their digital goals.
          </p>
        </div>

        {/* Gradient overlay at bottom */}
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

      {/* Project Highlights Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Code className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">50+</h3>
              <p className="text-base-content/70">Projects Completed</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2">40+</h3>
              <p className="text-base-content/70">Happy Clients</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2">200%</h3>
              <p className="text-base-content/70">Average ROI</p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2">5.0</h3>
              <p className="text-base-content/70">Client Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-base-200 via-base-200 to-base-300 py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Like What You See?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
            Lets create something amazing together. View all our projects or
            start your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg transition-all duration-300 hover:scale-105 hover:shadow-xl group">
              <span className="flex items-center">
                View All Projects
                <ExternalLink size={18} className="ml-2" />
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

      {/* Optimized CSS */}
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

        /* Reduce animations on mobile for better performance */
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
