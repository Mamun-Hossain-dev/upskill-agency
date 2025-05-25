"use client";
import {
  ExternalLink,
  Eye,
  Filter,
  Palette,
  Code,
  TrendingUp,
  ArrowRight,
  Play,
  Star,
  Users,
  Target,
  Globe,
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

// Portfolio data
const portfolioData = [
  {
    id: 1,
    title: "Eco-Friendly Brand Identity",
    category: "Graphic Design",
    description:
      "Complete brand identity design for sustainable products company including logo, packaging, and marketing materials.",
    image: "/images/portfolio/eco-brand.jpg",
    tags: ["Branding", "Logo Design", "Packaging"],
    featured: true,
    stats: {
      views: "2.5K",
      likes: "89",
      shares: "34",
    },
  },
  {
    id: 2,
    title: "E-commerce Platform Redesign",
    category: "Web Development",
    description:
      "Modern, responsive e-commerce platform with improved UX/UI, resulting in 40% increase in conversions.",
    image: "/images/portfolio/ecommerce.jpg",
    tags: ["React", "Node.js", "E-commerce"],
    featured: true,
    stats: {
      views: "3.2K",
      likes: "127",
      shares: "56",
    },
  },
  {
    id: 3,
    title: "Social Media Growth Campaign",
    category: "Digital Marketing",
    description:
      "Comprehensive social media strategy that increased follower count by 300% and engagement by 150%.",
    image: "/images/portfolio/social-campaign.jpg",
    tags: ["Social Media", "Content Strategy", "Analytics"],
    featured: true,
    stats: {
      views: "4.1K",
      likes: "203",
      shares: "78",
    },
  },
  {
    id: 4,
    title: "Mobile App UI/UX Design",
    category: "Mobile App",
    description:
      "Intuitive mobile app design for fitness tracking with seamless user experience and modern interface.",
    image: "/images/portfolio/mobile-app.jpg",
    tags: ["UI/UX", "Mobile Design", "Prototyping"],
    featured: false,
    stats: {
      views: "1.8K",
      likes: "92",
      shares: "23",
    },
  },
  {
    id: 5,
    title: "Corporate Website Overhaul",
    category: "Web Development",
    description:
      "Complete website redesign for financial services company with focus on trust, security, and user experience.",
    image: "/images/portfolio/corporate-site.jpg",
    tags: ["WordPress", "SEO", "Security"],
    featured: false,
    stats: {
      views: "2.9K",
      likes: "156",
      shares: "67",
    },
  },
  {
    id: 6,
    title: "Product Launch Campaign",
    category: "Digital Marketing",
    description:
      "Multi-channel marketing campaign for tech startup product launch, achieving 500% ROI in first quarter.",
    image: "/images/portfolio/product-launch.jpg",
    tags: ["PPC", "Content Marketing", "Analytics"],
    featured: false,
    stats: {
      views: "3.7K",
      likes: "189",
      shares: "94",
    },
  },
  {
    id: 7,
    title: "Restaurant Brand Package",
    category: "Graphic Design",
    description:
      "Complete branding package for upscale restaurant including menu design, signage, and digital assets.",
    image: "/images/portfolio/restaurant-brand.jpg",
    tags: ["Branding", "Print Design", "Digital Assets"],
    featured: false,
    stats: {
      views: "2.1K",
      likes: "134",
      shares: "45",
    },
  },
  {
    id: 8,
    title: "SaaS Dashboard Development",
    category: "Web Development",
    description:
      "Complex dashboard interface for B2B SaaS platform with real-time analytics and data visualization.",
    image: "/images/portfolio/saas-dashboard.jpg",
    tags: ["React", "D3.js", "API Integration"],
    featured: false,
    stats: {
      views: "2.6K",
      likes: "178",
      shares: "52",
    },
  },
  {
    id: 9,
    title: "Influencer Marketing Campaign",
    category: "Digital Marketing",
    description:
      "Strategic influencer partnerships for beauty brand resulting in 250% increase in brand awareness.",
    image: "/images/portfolio/influencer-campaign.jpg",
    tags: ["Influencer Marketing", "Brand Awareness", "ROI"],
    featured: false,
    stats: {
      views: "5.2K",
      likes: "267",
      shares: "123",
    },
  },
  {
    id: 10,
    title: "Photography Portfolio Website",
    category: "Web Development",
    description:
      "Elegant portfolio website for professional photographer with gallery, booking system, and client portal.",
    image: "/images/portfolio/photo-portfolio.jpg",
    tags: ["Portfolio", "Gallery", "Booking System"],
    featured: false,
    stats: {
      views: "1.9K",
      likes: "98",
      shares: "31",
    },
  },
];

// Portfolio Card Component
const PortfolioCard = ({ project, index }) => {
  const IconComponent = categoryIcons[project.category] || Code;

  return (
    <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden group relative animate-fade-in-up">
      {/* Project Image with Overlay */}
      <figure className="h-64 overflow-hidden relative">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
          loading="lazy"
        />

        {/* Overlay with Actions */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
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
          <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-primary/20 to-primary/10 rounded-lg transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <IconComponent
              className="text-primary transition-all duration-300"
              size={20}
            />
          </div>
          <div>
            <h3 className="card-title text-lg transition-all duration-300 group-hover:text-primary">
              {project.title}
            </h3>
            <p className="text-sm text-base-content/60">{project.category}</p>
          </div>
        </div>

        {/* Description */}
        <p className="text-base-content/70 mb-4 line-clamp-3 transition-colors duration-300 group-hover:text-base-content/90">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="badge badge-outline badge-xs transition-all duration-300 group-hover:badge-primary group-hover:scale-105"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-between items-center text-sm text-base-content/60 mb-4">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-primary">
              <Eye size={14} />
              {project.stats.views}
            </span>
            <span className="flex items-center gap-1 transition-colors duration-300 group-hover:text-secondary">
              <Star size={14} />
              {project.stats.likes}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-between">
          <button className="btn btn-sm btn-outline group-hover:btn-primary transition-all duration-300 hover:scale-105">
            View Details
          </button>
          <button className="btn btn-sm btn-primary group-hover:btn-accent transition-all duration-300 hover:scale-105 overflow-hidden relative">
            <span className="relative z-10 flex items-center">
              View Project
              <ArrowRight
                size={14}
                className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
              />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/5 to-transparent rounded-full transform translate-x-16 -translate-y-16 transition-all duration-700 group-hover:scale-150 group-hover:opacity-50"></div>
    </div>
  );
};

// Filter Button Component (Static version)
const FilterButton = ({ category, isActive, icon: Icon }) => (
  <div
    className={`btn btn-sm transition-all duration-300 ${
      isActive
        ? "btn-primary shadow-lg scale-105"
        : "btn-outline hover:btn-primary hover:scale-105"
    }`}
  >
    {Icon && <Icon size={16} />}
    {category}
  </div>
);

export default function PortfolioPage() {
  const categories = [
    { name: "All Projects", icon: Filter },
    { name: "Digital Marketing", icon: TrendingUp },
    { name: "Graphic Design", icon: Palette },
    { name: "Web Development", icon: Code },
    { name: "Mobile App", icon: Smartphone },
  ];

  // Get featured projects for initial display
  const featuredProjects = portfolioData.filter((project) => project.featured);
  const regularProjects = portfolioData.filter((project) => !project.featured);
  const displayProjects = [...featuredProjects, ...regularProjects];

  return (
    <div className="min-h-screen bg-base-100 text-gray-950 overflow-x-hidden">
      {/* Hero Section with Banner */}
      <section
        className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106, 17, 203, 0.5), rgba(138, 43, 226, 0.5)), url('/images/banner2.webp')",
        }}
      >
        {/* Animated floating elements */}
        <div className="absolute inset-0 overflow-hidden">
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
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white animate-fade-in-up">
            Our Portfolio
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-8 animate-fade-in-up animation-delay-300">
            Featured Projects & Case Studies
          </p>
          <p className="text-base md:text-lg text-white/80 max-w-4xl mx-auto animate-fade-in-up animation-delay-600">
            Explore our recent work and see how we have helped businesses across
            industries achieve their digital goals.
          </p>
        </div>

        {/* Animated wave effect at bottom */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-base-100 to-transparent"></div>
      </section>

      {/* Filter Section - Static Display */}
      <section className="py-12 bg-base-200/50 animate-fade-in-up animation-delay-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <FilterButton
                key={category.name}
                category={category.name}
                icon={category.icon}
                isActive={index === 0} // "All Projects" is active by default
              />
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-16 animate-fade-in-up animation-delay-400">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {displayProjects.map((project, idx) => (
              <PortfolioCard key={project.id} project={project} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats Section */}
      <section className="py-16 bg-gradient-to-r from-base-200 to-base-300 animate-fade-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent">
              Portfolio Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <Code className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                50+
              </h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Projects Completed
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-secondary/20 to-secondary/10 rounded-full mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <Users className="text-secondary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-secondary mb-2 group-hover:scale-110 transition-transform duration-300">
                40+
              </h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Happy Clients
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-accent mb-2 group-hover:scale-110 transition-transform duration-300">
                200%
              </h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Average ROI
              </p>
            </div>

            <div className="text-center group cursor-pointer">
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-secondary/10 rounded-full mx-auto mb-4 transition-all duration-500 group-hover:scale-125 group-hover:rotate-12">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                5.0
              </h3>
              <p className="text-base-content/70 group-hover:text-base-content transition-colors duration-300">
                Client Rating
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-base-200 via-base-200 to-base-300 py-16 relative overflow-hidden animate-fade-in-up">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 animate-pulse"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 transition-all duration-500 hover:scale-105">
            Like What You See?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
            Lets create something amazing together. View all our projects or
            start your own.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn btn-primary btn-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:btn-accent group overflow-hidden relative">
              <span className="relative z-10 flex items-center">
                View All Projects
                <ExternalLink size={18} className="ml-2" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            <button className="btn btn-outline btn-lg transform transition-all duration-300 hover:scale-110 hover:shadow-xl hover:btn-primary group">
              Start Your Project
              <ArrowRight
                size={18}
                className="ml-2 transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>
          </div>
        </div>
      </section>

      {/* Enhanced CSS for server-side rendering */}
      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in-up {
          animation: fade-in-up 1s ease-out forwards;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-300 {
          animation-delay: 0.3s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced hover effects for better interactivity */
        .card {
          will-change: transform, box-shadow;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
        }

        .card:hover {
          transform: translateY(-8px);
        }

        /* Ensure good performance on all devices */
        @media (max-width: 768px) {
          .card:hover {
            transform: translateY(-4px);
          }

          .group-hover\:rotate-12:hover {
            transform: rotate(6deg) scale(1.1);
          }
        }

        /* Gradient text effect */
        .hover\:bg-clip-text:hover {
          background-clip: text;
          -webkit-background-clip: text;
        }
      `}</style>
    </div>
  );
}
