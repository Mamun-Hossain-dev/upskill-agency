// latest-works/page.jsx
"use client";

import Link from "next/link";
import Image from "next/image";
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
import { memo, useMemo } from "react";

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
    client: "Amihan",
    country: "Philippines",
    service: "Social Media Advertising & Google Ads",
    title: "Full-Funnel Advertising Campaigns",
    category: "Digital Marketing",
    description:
      "I worked with Amihan to run result-driven advertising campaigns on both social media platforms and Google Ads. My responsibilities included market research, campaign setup, ad creative development, and continuous performance monitoring. These campaigns helped increase online visibility, attract new customers, and achieve measurable business growth.",
    clientImage: "/images/clients/one1.png",
    workImage: "/portfolio/eco.jpg",
    tags: ["Advertising", "Google Ads", "Strategy"],
    featured: true,
  },
  {
    id: 2,
    client: "Isabella",
    country: "Canada",
    service: "Social Media Management, YouTube Video SEO & Video Editing",
    title: "YouTube & Social Growth Strategy",
    category: "Digital Marketing",
    description:
      "I collaborated with Isabella to manage her social media presence and grow her YouTube channel. My tasks included creating and scheduling engaging social media content, optimizing YouTube videos for SEO (titles, tags, descriptions, and thumbnails), and editing videos to ensure high-quality, audience-friendly content. This holistic approach helped increase her online visibility and grow her follower base across platforms.",
    clientImage: "/images/clients/two2.png",
    workImage: "/portfolio/isabella.jpg",
    tags: ["YouTube SEO", "Video Editing", "Social Management"],
    featured: true,
  },
  {
    id: 3,
    client: "Richard",
    country: "United States",
    service: "Social Media Management",
    title: "Strategic Social Presence Management",
    category: "Digital Marketing",
    description:
      "I worked closely with Richard to manage and maintain his brand's presence across major social media platforms. My responsibilities included creating visually appealing content, scheduling regular posts, engaging with the audience, and tracking performance metrics. Through a consistent and strategic approach, we were able to enhance brand engagement and community growth.",
    clientImage: "/images/clients/there3.png",
    workImage: "/portfolio/richard.jpg",
    tags: ["Content", "Engagement", "Analytics"],
    featured: true,
  },
  {
    id: 4,
    client: "Seojoon",
    country: "South Korea",
    service: "Social Media Management",
    title: "Brand Social Media Growth",
    category: "Digital Marketing",
    description:
      "We managed Seojoon's social presence across platforms with content creation, scheduling, engagement, and analytics. Engagement and visibility significantly improved.",
    clientImage: "/images/clients/four4.png",
    workImage: "/portfolio/seojoon.png",
    tags: ["Content", "Engagement", "Scheduling"],
    featured: true,
  },
  {
    id: 5,
    client: "Hyun",
    country: "South Korea",
    service: "Social Media Advertising",
    title: "Targeted Social Ads",
    category: "Digital Marketing",
    description:
      "Ran optimized ad campaigns for Hyun focusing on awareness and conversions. Strong engagement and great ROI.",
    clientImage: "/images/clients/five5.png",
    workImage: "/portfolio/hyon.png",
    tags: ["Ads", "Optimization", "Conversions"],
    featured: false,
  },
  {
    id: 6,
    client: "Lucas",
    country: "United States",
    service: "Website Creation & Management",
    title: "Professional Business Website",
    category: "Web Development",
    description:
      "Designed and managed Lucas's business website with full setup, SEO, and maintenance. Site is secure and fully responsive.",
    clientImage: "/images/clients/six6.png",
    workImage: "/portfolio/lucas.jpeg",
    tags: ["Web Design", "SEO", "Maintenance"],
    featured: false,
  },
  {
    id: 7,
    client: "Raphael",
    country: "France",
    service: "Social Media Management & Video Editing",
    title: "Social & Video Brand Presence",
    category: "Digital Marketing",
    description:
      "I partnered with Raphael to manage his social media presence and produce high-quality video content for his brand. My work included planning and scheduling engaging posts, interacting with the audience, and editing videos for various platforms to ensure a professional and consistent look. These efforts helped strengthen his brand identity and improve audience engagement.",
    clientImage: "/images/clients/seven7.png",
    workImage: "/portfolio/rafael.jpeg",
    tags: ["Social Media", "Video Editing", "Branding"],
    featured: false,
  },
  {
    id: 8,
    client: "Feng",
    country: "China",
    service: "B2B Lead Generation",
    title: "Qualified B2B Lead Campaign",
    category: "Lead Generation",
    description:
      "I worked with Feng to generate high-quality B2B leads tailored to his target market and business goals. My tasks included researching potential clients, building verified lead lists, and using tools like LinkedIn and email outreach to connect with decision-makers. The campaign successfully provided a consistent stream of qualified leads, helping to grow his business network and opportunities.",
    clientImage: "/images/clients/eight8.png",
    workImage: "/portfolio/feng.jpg",
    tags: ["B2B", "Leads", "Outreach"],
    featured: false,
  },
];

// Optimized animation variants
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for smoother animation
    },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const PortfolioCard = memo(({ project }) => {
  const IconComponent = useMemo(
    () => categoryIcons[project.category] || Code,
    [project.category]
  );

  return (
    <motion.div
      variants={cardVariants}
      className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden group relative will-change-transform"
      whileHover={{
        y: -4,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
      layout={false} // Disable layout animations for better performance
    >
      <Link href={`/portfolio/${project.id}`}>
        <figure className="h-64 overflow-hidden relative">
          <Image
            src={project.workImage}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            quality={65}
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
});

PortfolioCard.displayName = "PortfolioCard";

// Optimized floating elements with reduced complexity
const FloatingElement = memo(({ className, delay = 0 }) => (
  <motion.div
    className={className}
    animate={{
      y: [-8, 8, -8],
      opacity: [0.3, 0.5, 0.3],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
    style={{ willChange: "transform, opacity" }}
  />
));

FloatingElement.displayName = "FloatingElement";

const Banner = memo(() => {
  return (
    <section className="relative h-96 md:h-[500px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="w-full h-full relative">
          <Image
            src="/images/banner2.webp"
            alt="Portfolio Banner"
            fill
            sizes="100vw"
            className="object-cover"
            quality={65}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
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
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            Explore our recent work and see how we have helped businesses across
            industries achieve their digital goals.
          </motion.p>

          {/* Floating elements */}
          <FloatingElement
            className="absolute top-20 right-20 w-20 h-20 bg-indigo-500/20 rounded-full blur-xl"
            delay={0}
          />
          <FloatingElement
            className="absolute bottom-32 right-32 w-16 h-16 bg-purple-500/20 rounded-full blur-lg"
            delay={1}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
});

Banner.displayName = "Banner";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-base-100">
      {/* Banner Section */}
      <Banner />

      {/* Portfolio Grid Section */}
      <section className="py-16 container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-indigo-600">
            Our Latest Works
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {portfolioData.map((project) => (
            <motion.div key={project.id} variants={cardVariants}>
              <PortfolioCard project={project} />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
