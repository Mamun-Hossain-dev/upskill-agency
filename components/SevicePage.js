"use client";
import { useState, useEffect } from "react";
import {
  Code,
  Palette,
  Search,
  TrendingUp,
  Settings,
  Star,
  ArrowRight,
  Check,
  Play,
  Camera,
  Globe,
  Users,
  Target,
  BarChart3,
} from "lucide-react";
import Link from "next/link";

// Icon mapping for services - using more generic mapping since backend uses SVG paths
const serviceIcons = {
  marketing: BarChart3,
  ads: Target,
  management: Users,
  "google-ads": Search,
  "facebook-pixel": Target,
  b2b: Users,
  instagram: Camera,
  youtube: Play,
  seo: TrendingUp,
  "web-design": Globe,
  "video-editing": Camera,
  // Default fallbacks
  code: Code,
  palette: Palette,
  search: Search,
  trending: TrendingUp,
  settings: Settings,
  star: Star,
};

// Function to get icon based on service title or icon path
const getServiceIcon = (service) => {
  const iconPath = service.icon;
  if (iconPath) {
    const iconName = iconPath.split("/").pop().replace(".svg", "");
    return serviceIcons[iconName] || Settings;
  }

  // Fallback based on title keywords
  const title = service.title.toLowerCase();
  if (title.includes("marketing")) return BarChart3;
  if (title.includes("ads") || title.includes("advertising")) return Target;
  if (title.includes("management")) return Users;
  if (title.includes("google")) return Search;
  if (title.includes("facebook")) return Target;
  if (title.includes("b2b")) return Users;
  if (title.includes("instagram")) return Camera;
  if (title.includes("youtube")) return Play;
  if (title.includes("seo")) return TrendingUp;
  if (title.includes("website") || title.includes("web")) return Globe;
  if (title.includes("video")) return Camera;

  return Settings;
};

// Function to generate category based on service title
const getServiceCategory = (service) => {
  const title = service.title.toLowerCase();
  if (title.includes("marketing")) return "Marketing";
  if (
    title.includes("ads") ||
    title.includes("advertising") ||
    title.includes("campaign")
  )
    return "Advertising";
  if (title.includes("management")) return "Management";
  if (title.includes("b2b") || title.includes("lead")) return "Lead Generation";
  if (title.includes("instagram") || title.includes("social"))
    return "Social Media";
  if (title.includes("seo")) return "SEO";
  if (title.includes("website") || title.includes("web"))
    return "Web Development";
  if (title.includes("video")) return "Creative";
  return "Digital Services";
};

// Function to generate features based on service type
const getServiceFeatures = (service) => {
  const title = service.title.toLowerCase();

  if (title.includes("digital marketing")) {
    return [
      "Multi-platform strategy development",
      "Performance tracking and analytics",
      "ROI optimization",
      "Conversion rate improvement",
    ];
  }
  if (title.includes("social media advertising")) {
    return [
      "Targeted audience research",
      "Creative ad design",
      "Campaign optimization",
      "Performance reporting",
    ];
  }
  if (title.includes("social media management")) {
    return [
      "Content calendar planning",
      "Daily posting and scheduling",
      "Community engagement",
      "Brand voice consistency",
    ];
  }
  if (title.includes("google ads")) {
    return [
      "Keyword research and optimization",
      "Ad copy creation",
      "Landing page optimization",
      "Conversion tracking",
    ];
  }
  if (title.includes("facebook campaign")) {
    return [
      "Facebook Pixel implementation",
      "Conversion API setup",
      "Advanced audience targeting",
      "ROI tracking and optimization",
    ];
  }
  if (title.includes("b2b lead")) {
    return [
      "LinkedIn prospecting",
      "Email outreach campaigns",
      "Lead qualification process",
      "CRM integration",
    ];
  }
  if (title.includes("instagram")) {
    return [
      "Hashtag strategy optimization",
      "Content planning and creation",
      "Engagement boost techniques",
      "Follower growth tracking",
    ];
  }
  if (title.includes("youtube")) {
    return [
      "Video keyword optimization",
      "Thumbnail design and testing",
      "Channel optimization",
      "Analytics and reporting",
    ];
  }
  if (title.includes("website seo")) {
    return [
      "Keyword research and analysis",
      "On-page optimization",
      "Technical SEO audit",
      "Link building strategies",
    ];
  }
  if (title.includes("website creation")) {
    return [
      "Responsive design",
      "SEO optimization",
      "Performance optimization",
      "Cross-browser compatibility",
    ];
  }
  if (title.includes("video editing")) {
    return [
      "Professional video editing",
      "Color correction and grading",
      "Motion graphics and effects",
      "Multi-format delivery",
    ];
  }

  return [
    "Professional service delivery",
    "Dedicated account management",
    "Regular progress reports",
    "Quality assurance",
  ];
};

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      // Try to fetch from public directory first
      let response = await fetch("/api/services");

      // Fallback to public directory
      if (!response.ok) {
        response = await fetch("/services.json");
      }

      // Another fallback to data directory in public
      if (!response.ok) {
        response = await fetch("/data/services.json");
      }

      if (!response.ok) {
        throw new Error("Failed to fetch services");
      }

      const data = await response.json();
      setServices(data);
    } catch (error) {
      // Fallback to hardcoded data if all fetches fail
      const fallbackServices = [
        {
          id: "1",
          title: "Digital Marketing",
          description:
            "Comprehensive digital marketing strategies that drive traffic, engagement, and conversions across all major platforms.",
          icon: "/icons/services/marketing.svg",
          image: "/images/servicesImage/digital.jpg",
        },
        {
          id: "2",
          title: "Social Media Advertising",
          description:
            "Reach your ideal audience with powerful ad strategies across Facebook, Instagram, and LinkedIn.",
          icon: "/icons/services/ads.svg",
          image: "/images/servicesImage/social.webp",
        },
        {
          id: "3",
          title: "Social Media Management",
          description:
            "We manage your entire social presence with content creation, scheduling, and audience engagement.",
          icon: "/icons/services/management.svg",
          image: "/images/servicesImage/management.jpg",
        },
        {
          id: "4",
          title: "Google Ads (Search, Display & YouTube)",
          description:
            "Launch high-converting Google Ads campaigns to drive traffic and leads with certified experts.",
          icon: "/icons/services/google-ads.svg",
          image: "/images/servicesImage/google-ads.jpg",
        },
        {
          id: "5",
          title: "Facebook Campaign with Pixel & Conversion API",
          description:
            "Data-driven Facebook ad campaigns with complete Pixel and Conversion API setup for tracking and ROI.",
          icon: "/icons/services/facebook-pixel.svg",
          image: "/images/servicesImage/facebook.jpg",
        },
        {
          id: "6",
          title: "B2B Lead Generation",
          description:
            "Get verified, high-quality B2B leads via LinkedIn, Google, and personalized email outreach strategies.",
          icon: "/icons/services/b2b.svg",
          image: "/images/servicesImage/b2b.jpg",
        },
        {
          id: "7",
          title: "Instagram Organic Growth",
          description:
            "Grow your Instagram with real followers and engagement using authentic, organic growth methods.",
          icon: "/icons/services/instagram.svg",
          image: "/images/servicesImage/insta.jpg",
        },
        {
          id: "8",
          title: "YouTube SEO & Organic Video Promotion",
          description:
            "Rank your videos on YouTube search and boost organic views through proven SEO techniques.",
          icon: "/icons/services/youtube.svg",
          image: "/images/servicesImage/youtube.jpg",
        },
        {
          id: "9",
          title: "Website SEO (Search Engine Optimization)",
          description:
            "Boost your website's visibility with keyword research, on-page & technical SEO, and backlinks.",
          icon: "/icons/services/seo.svg",
          image: "/images/servicesImage/web-seo.jpg",
        },
        {
          id: "10",
          title: "Website Creation & Design",
          description:
            "Modern, responsive, SEO-friendly websites built to convert — from portfolios to full e-commerce sites.",
          icon: "/icons/services/web-design.svg",
          image: "/images/servicesImage/web.jpg",
        },
        {
          id: "11",
          title: "Video Editing",
          description:
            "Professional video editing for social media, YouTube, and marketing campaigns that stand out.",
          icon: "/icons/services/video-editing.svg",
          image: "/images/servicesImage/video.webp",
        },
      ];

      setServices(fallbackServices);
      console.warn("Using fallback services data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="loading loading-spinner loading-lg"></div>
            <p className="mt-4 text-base-content/70">Loading services...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-base-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <div className="alert alert-error max-w-md mx-auto">
              <span>{error}</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-100 text-gray-950">
      {/* Hero Section with Background Image */}
      <section
        className="relative bg-gradient-to-br from-primary to-primary-focus text-primary-content py-20 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "linear-gradient(rgba(106, 17, 203, 0.4), rgba(138, 43, 226, 0.6)), url('/images/servicesImage/banner4.jpg')",
        }}
      >
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 text-white">
            Our Services
          </h1>
          <p className="text-lg md:text-xl text-white max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and
            succeed in the modern world
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => {
              const IconComponent = getServiceIcon(service);
              const category = getServiceCategory(service);
              const features = getServiceFeatures(service);

              return (
                <div
                  key={`${service.id}-${idx}`}
                  className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-102 cursor-pointer overflow-hidden"
                >
                  {/* Service Image */}
                  {service.image && (
                    <figure className="h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </figure>
                  )}

                  <div className="card-body">
                    {/* Service Icon */}
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                      <IconComponent className="text-primary" size={32} />
                    </div>

                    {/* Service Category Badge */}
                    <div className="badge badge-primary badge-outline mb-2">
                      {category}
                    </div>

                    {/* Service Title */}
                    <h3 className="card-title text-xl mb-2">{service.title}</h3>

                    {/* Service Description */}
                    <p className="text-base-content/70 mb-4 line-clamp-3">
                      {service.description}
                    </p>

                    {/* Service Features */}
                    <div className="mb-4">
                      <h4 className="font-medium mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {features.slice(0, 3).map((feature, index) => (
                          <li
                            key={index}
                            className="flex items-center text-sm text-base-content/70"
                          >
                            <Check
                              size={16}
                              className="text-success mr-2 flex-shrink-0"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Button */}
                    <div className="card-actions justify-center">
                      <button className="btn btn-primary w-full">
                        Learn More
                        <ArrowRight size={16} className="ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-base-200 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto">
            Lets discuss your project and find the perfect solution for your
            business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="btn btn-primary btn-lg">
              Contact Us Today
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
              We deliver exceptional results through our proven approach and
              dedicated expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Star className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Quality Assured</h3>
              <p className="text-base-content/70">
                We maintain the highest standards in all our deliverables.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <TrendingUp className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Proven Results</h3>
              <p className="text-base-content/70">
                Track record of successful projects and satisfied clients.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <Settings className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Custom Solutions</h3>
              <p className="text-base-content/70">
                Tailored approaches to meet your unique business requirements.
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
                <ArrowRight className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-2">Fast Delivery</h3>
              <p className="text-base-content/70">
                Efficient processes to deliver your projects on time.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
