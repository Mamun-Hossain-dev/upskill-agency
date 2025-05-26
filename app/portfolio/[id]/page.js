"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  MapPin,
  Star,
  Calendar,
  User,
  Briefcase,
} from "lucide-react";
import { motion } from "framer-motion";

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
    clientImage: "/images/clients/one.png",
    workImage: "portfolio/eco.jpg",
    tags: ["Content", "Engagement", "Scheduling"],
    featured: true,
    duration: "3 months",
    year: "2024",
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
    clientImage: "/images/clients/two.png",
    workImage: "portfolio/product.jpg",
    tags: ["Ads", "Optimization", "Conversions"],
    featured: false,
    duration: "2 months",
    year: "2024",
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
    clientImage: "/images/clients/three.png",
    workImage: "portfolio/work2.png",
    tags: ["Google Ads", "Social Media", "A/B Testing"],
    featured: true,
    duration: "4 months",
    year: "2024",
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
    clientImage: "/images/clients/four.png",
    workImage: "portfolio/work3.png",
    tags: ["Web Design", "SEO", "Maintenance"],
    featured: false,
    duration: "6 weeks",
    year: "2024",
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
    clientImage: "/images/users/user1.jpg",
    workImage: "portfolio/corporet.jpeg",
    tags: ["Logo", "Branding", "Colors"],
    featured: true,
    duration: "5 weeks",
    year: "2024",
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
    clientImage: "/images/users/user2.jpg",
    workImage: "portfolio/mobile.webp",
    tags: ["UI/UX", "Shopping", "Mobile"],
    featured: false,
    duration: "8 weeks",
    year: "2024",
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
    clientImage: "",
    workImage: "portfolio/mobile.webp",
    tags: ["E-commerce", "Store", "Payments"],
    featured: false,
    duration: "10 weeks",
    year: "2024",
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
    clientImage: "/",
    workImage: "portfolio/mobile.webp",
    tags: ["Luxury", "Products", "Photography"],
    featured: false,
    duration: "3 weeks",
    year: "2024",
  },
];

export default function ProjectDetailPage() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    if (id) {
      const matched = portfolioData.find((item) => item.id === parseInt(id));
      setProject(matched);
    }
  }, [id]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="loading loading-spinner loading-lg text-indigo-600 mb-4"></div>
          <p className="text-gray-500">Loading project details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-indigo-600 hover:text-indigo-800 transition mb-8 group"
          >
            <ArrowLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
              size={18}
            />
            Back to Portfolio
          </Link>

          {/* Header Section */}
          <div className="bg-white rounded-2xl shadow-lg p-4 mb-8 border border-gray-200">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8 lg:gap-3 lg:items-center">
              {/* Project Info */}
              <div className="basis-[90%] lg:basis-[60%]">
                <div className="flex items-center gap-3 mb-4">
                  <span className="badge badge-primary badge-lg px-4 py-4 text-white font-medium">
                    {project.category}
                  </span>
                  {project.featured && (
                    <span className="badge badge-warning badge-lg px-4 py-4 text-white font-medium">
                      Featured
                    </span>
                  )}
                </div>

                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                  {project.title}
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-gray-600">
                  <div className="flex items-center gap-3">
                    <User size={18} className="text-indigo-600" />
                    <span className="font-medium">Client:</span>
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-green-600" />
                    <span className="font-medium">Location:</span>
                    <span>{project.country}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Briefcase size={18} className="text-purple-600" />
                    <span className="font-medium">Service:</span>
                    <span>{project.service}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-orange-600" />
                    <span className="font-medium">Duration:</span>
                    <span>{project.duration}</span>
                  </div>
                </div>
              </div>

              {/* Client Image */}
              <div className="flex-shrink-0 text-center px-4 md:px-1">
                <div className="relative">
                  <div className=" w-full md:w-1/2 lg:w-full h-1/2 mx-auto rounded-md overflow-hidden border-2 border-indigo-500 shadow-lg">
                    <Image
                      src={project.clientImage}
                      alt={`${project.client} - Client`}
                      width={328}
                      height={228}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* <div className="absolute -bottom-2 -right-2 bg-indigo-600 text-white rounded-full p-2">
                    <Star size={16} />
                  </div> */}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mt-4">
                  {project.client}
                </h3>
                <p className="text-gray-500 text-sm">{project.country}</p>
              </div>
            </div>
          </div>

          {/* Project Image and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Work Image */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Project Showcase
                </h2>
                <div className="rounded-xl overflow-hidden shadow">
                  <Image
                    src={`/${project.workImage}`}
                    alt={project.title}
                    width={800}
                    height={500}
                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  About This Project
                </h2>
                <p className="text-gray-600 leading-relaxed text-lg">
                  {project.description}
                </p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Technologies & Skills
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tags.map((tag, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:shadow-md transition"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              <div className="bg-indigo-600 rounded-2xl shadow-lg p-6 text-white">
                <h2 className="text-2xl font-bold mb-4">Project Highlights</h2>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Completion Year</span>
                    <span className="font-bold">{project.year}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Project Duration</span>
                    <span className="font-bold">{project.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="opacity-90">Status</span>
                    <span className="font-bold text-green-300">Completed</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-200">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Interested in Similar Work?
              </h2>
              <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
                Let’s discuss how we can bring your vision to life with the same
                level of dedication and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href={"/contact"}>
                  <button className="btn btn-primary btn-lg px-8 hover:bg-indigo-900 text-white font-medium">
                    Start a Project
                  </button>
                </Link>
                <Link
                  href="/portfolio"
                  className="btn btn-outline btn-lg px-8 border-indigo-600 text-indigo-600 hover:bg-indigo-50 "
                >
                  View More Projects
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
