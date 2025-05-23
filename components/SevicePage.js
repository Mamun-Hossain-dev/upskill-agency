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
} from "lucide-react";
import axios from "axios";
import Link from "next/link";

// Icon mapping for services
const serviceIcons = {
  code: Code,
  palette: Palette,
  search: Search,
  trending: TrendingUp,
  settings: Settings,
  star: Star,
};

export default function ServicesPage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetchServices();
  }, []);

  const fetchServices = async () => {
    try {
      const response = await axios.get("/api/services");
      setServices(response.data);
    } catch (error) {
      setError("Failed to load services");
      console.error("Error fetching services:", error);
    } finally {
      setLoading(false);
    }
  };

  const categories = [
    "All",
    ...new Set(services.map((service) => service.category)),
  ];

  const filteredServices =
    selectedCategory === "All"
      ? services
      : services.filter((service) => service.category === selectedCategory);

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
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-focus text-primary-content py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl md:text-2xl text-primary-content/90 max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business grow and
            succeed in the modern world
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="text-center mb-12">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`btn ${
                    selectedCategory === category
                      ? "btn-primary"
                      : "btn-outline btn-primary"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Services Grid */}
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => {
                const IconComponent = serviceIcons[service.icon] || Settings;

                return (
                  <div
                    key={service._id}
                    className="card bg-base-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="card-body">
                      {/* Service Icon */}
                      <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                        <IconComponent className="text-primary" size={32} />
                      </div>

                      {/* Service Category Badge */}
                      <div className="badge badge-primary badge-outline mb-2">
                        {service.category}
                      </div>

                      {/* Service Title */}
                      <h3 className="card-title text-xl mb-2">
                        {service.title}
                      </h3>

                      {/* Service Description */}
                      <p className="text-base-content/70 mb-4 line-clamp-3">
                        {service.description}
                      </p>

                      {/* Service Features */}
                      {service.features && service.features.length > 0 && (
                        <div className="mb-4">
                          <h4 className="font-medium mb-2">Key Features:</h4>
                          <ul className="space-y-1">
                            {service.features
                              .slice(0, 3)
                              .map((feature, index) => (
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
                      )}

                      {/* Service Price */}
                      <div className="mb-4">
                        <span className="text-2xl font-bold text-primary">
                          {service.price}
                        </span>
                      </div>

                      {/* Action Buttons */}
                      <div className="card-actions justify-between items-center">
                        <Link
                          href={`/services/${service._id}`}
                          className="btn btn-outline btn-primary"
                        >
                          Learn More
                        </Link>
                        <Link
                          href={`/quote?service=${encodeURIComponent(
                            service.title
                          )}`}
                          className="btn btn-primary"
                        >
                          Get Quote
                          <ArrowRight size={16} className="ml-1" />
                        </Link>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold mb-2">No Services Found</h3>
              <p className="text-base-content/70">
                No services found for the selected category.
              </p>
            </div>
          )}
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
            <Link href="/quote" className="btn btn-outline btn-lg">
              Get Free Quote
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
