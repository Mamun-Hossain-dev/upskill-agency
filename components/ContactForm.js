"use client";
import { useState } from "react";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
} from "lucide-react";

export default function ContactSection() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    description: "",
  });
  const [errors, setErrors] = useState({});

  // Replace with your Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "f28ee327-2198-4f06-85f3-fafa4bd47ecb";

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    } else if (formData.description.length < 10) {
      newErrors.description = "Description must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("access_key", WEB3FORMS_ACCESS_KEY);
      formDataToSend.append("name", formData.name);
      formDataToSend.append("email", formData.email);
      formDataToSend.append("service", formData.service || "Not specified");
      formDataToSend.append("message", formData.description);
      formDataToSend.append(
        "subject",
        `New Contact Form Submission from ${formData.name}`
      );

      // Optional: Add redirect URL (Web3Forms will redirect after submission)
      // formDataToSend.append("redirect", "https://your-website.com/thank-you");

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formDataToSend,
      });

      const result = await response.json();

      if (result.success) {
        setMessage({
          type: "success",
          text: "Thank you for your message! We'll get back to you soon.",
        });
        setFormData({
          name: "",
          email: "",
          service: "",
          description: "",
        });
      } else {
        setMessage({
          type: "error",
          text: result.message || "Something went wrong. Please try again.",
        });
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setMessage({
        type: "error",
        text: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/share/15bVsy2EFN/",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    {
      icon: Instagram,
      href: "https://www.instagram.com/upskilldigitalagency/?igsh=cXNrN2UyZnBkbXhp#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/company/upskill-it-institute-digital-agency/posts/?feedView=all",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8 opacity-0 animate-slideInLeft">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                Lets Start a{" "}
                <span className="text-indigo-700">Conversation</span>
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                Ready to discuss your project? Fill out the form and our team
                will get back to you within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="text-indigo-600" size={24} />,
                  title: "Email Us",
                  detail: "Upskilldigitalagency@gmail.com",
                  href: "mailto:Upskilldigitalagency@gmail.com",
                },
                {
                  icon: <Phone className="text-indigo-500" size={24} />,
                  title: "Call Us",
                  detail: "+880 1619599140",
                  href: "tel:+880 1619599140",
                },
                {
                  icon: <MapPin className="text-indigo-600" size={24} />,
                  title: "Visit Us",
                  detail:
                    "78 Faidabad transmitter moor, Design Uttarkhan, Dhaka-1230",
                  href: "https://www.google.com/maps/place/Upskill+It+Institute/@23.8799222,90.4142166,20z/data=!4m6!3m5!1s0x3755c50aa9cdbcf9:0x754341fb9fa3aee5!8m2!3d23.8799284!4d90.4144107!16s%2Fg%2F11t84rxfvw?entry=ttu&g_ep=EgoyMDI1MDUyMS4wIKXMDSoASAFQAw%3D%3D",
                },
              ].map((contact, index) => (
                <div
                  key={index}
                  className="hover:scale-105 hover:translate-x-1 transition-all duration-200"
                >
                  <ContactItem {...contact} />
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      target="_blank"
                      rel="noopener noreferrer"
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 ${social.color} transition-all duration-300 hover:scale-115 hover:-translate-y-2 hover:shadow-lg`}
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:scale-102 hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((schedule, index) => (
                  <div
                    key={index}
                    className="flex justify-between hover:translate-x-1 transition-transform duration-200"
                  >
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 opacity-0 animate-slideInRight hover:shadow-3xl transition-shadow duration-300">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>

            {message.text && (
              <div
                className={`mb-6 p-4 rounded-lg transform transition-all duration-300 ${
                  message.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200 scale-100"
                    : "bg-red-50 text-red-800 border border-red-200 scale-100"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="space-y-6">
              <div>
                <AnimatedInputField
                  icon={<User size={18} />}
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  error={errors.name}
                  required
                />
              </div>

              <div>
                <AnimatedInputField
                  icon={<Mail size={18} />}
                  label="Email Address"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  error={errors.email}
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Service Interest{" "}
                  <span className="text-gray-400 ml-1">(Optional)</span>
                </label>
                <div className="relative hover:scale-102 transition-transform duration-200">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white transition-all duration-200"
                  >
                    <option value="">Select a service (optional)</option>
                    <option value="web-development">Web Development</option>
                    <option value="graphic-design">Graphic Design</option>
                    <option value="seo">SEO</option>
                    <option value="digital-marketing">Digital Marketing</option>
                    <option value="tech-solutions">Tech Solutions</option>
                    <option value="consulting">Consulting</option>
                    <option value="general">General Inquiry</option>
                  </select>
                  <Briefcase
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    size={18}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <div className="relative hover:scale-101 transition-transform duration-200">
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none transition-all duration-200 ${
                      errors.description ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Tell us about your project, requirements, or questions..."
                  />
                  <MessageSquare
                    className="absolute left-3 top-4 text-gray-400"
                    size={18}
                  />
                </div>
                {errors.description && (
                  <p className="text-sm text-red-600 opacity-0 animate-fadeIn">
                    {errors.description}
                  </p>
                )}
                <p className="text-sm text-gray-500">
                  The more details you provide, the better we can assist you.
                </p>
              </div>

              <button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed duration-200 flex items-center justify-center space-x-2 hover:scale-102 active:scale-98 transition-all"
              >
                {isLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>Sending...</span>
                  </div>
                ) : (
                  <div className="flex items-center space-x-2">
                    <Send
                      size={20}
                      className="hover:translate-x-1 transition-transform duration-200"
                    />
                    <span>Send Message</span>
                  </div>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-5px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out forwards;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out forwards;
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }

        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }

        .hover\\:scale-105:hover {
          transform: scale(1.05);
        }

        .hover\\:scale-115:hover {
          transform: scale(1.15);
        }

        .hover\\:scale-101:hover {
          transform: scale(1.01);
        }

        .active\\:scale-98:active {
          transform: scale(0.98);
        }

        .hover\\:shadow-3xl:hover {
          box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15);
        }
      `}</style>
    </div>
  );
}

function AnimatedInputField({
  icon,
  label,
  optional,
  error,
  required,
  ...props
}) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
      </label>
      <div className="relative hover:scale-102 transition-transform duration-200">
        <input
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-all duration-200 ${
            error ? "border-red-300" : "border-gray-300"
          }`}
          {...props}
        />
        {icon && (
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
            {icon}
          </div>
        )}
      </div>
      {error && (
        <p className="text-sm text-red-600 opacity-0 animate-fadeIn">{error}</p>
      )}
    </div>
  );
}

function ContactItem({ icon, title, detail, href }) {
  const content = (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm transition-all duration-200 hover:shadow-lg hover:-translate-y-1">
      <div className="flex-shrink-0 mt-1 hover:scale-110 hover:rotate-3 transition-transform duration-200">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{detail}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block active:scale-98 transition-transform duration-200"
      >
        {content}
      </a>
    );
  }

  return content;
}
