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
    phone: "",
    serviceType: "",
    subject: "",
    message: "",
    marketingConsent: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    } else if (formData.name.length > 50) {
      newErrors.name = "Name cannot exceed 50 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (formData.phone && !/^[\+]?[1-9][\d]{0,15}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }

    if (!formData.serviceType) {
      newErrors.serviceType = "Please select a service type";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    } else if (formData.subject.length < 5) {
      newErrors.subject = "Subject must be at least 5 characters";
    } else if (formData.subject.length > 100) {
      newErrors.subject = "Subject cannot exceed 100 characters";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 20) {
      newErrors.message = "Message must be at least 20 characters";
    } else if (formData.message.length > 1000) {
      newErrors.message = "Message cannot exceed 1000 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage({
          type: "success",
          text: "Thank you for your message! We'll get back to you within 24 hours.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceType: "",
          subject: "",
          message: "",
          marketingConsent: false,
        });
      } else {
        setMessage({
          type: "error",
          text:
            result.message || "Something went wrong. Please try again later.",
        });
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setMessage({
        type: "error",
        text: "Failed to send message. Please check your connection and try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
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
              <ContactItem
                icon={<Mail className="text-indigo-600" size={24} />}
                title="Email Us"
                detail="hello@creativeedge.com"
                href="mailto:hello@creativeedge.com"
              />
              <ContactItem
                icon={<Phone className="text-indigo-500" size={24} />}
                title="Call Us"
                detail="+1 (555) 123-4567"
                href="tel:+15551234567"
              />
              <ContactItem
                icon={<MapPin className="text-indigo-600" size={24} />}
                title="Visit Us"
                detail="123 Creative Street, Design District, CA 94103"
                href="https://maps.google.com"
              />
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
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 hover:text-indigo-700 hover:shadow-xl hover:bg-indigo-50 transition-all duration-300 hover:-translate-y-2 hover:scale-110 transform"
                    >
                      <IconComponent size={20} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Contact Us
            </h2>

            {message.text && (
              <div
                className={`mb-6 p-4 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 text-green-800 border border-green-200"
                    : "bg-red-50 text-red-800 border border-red-200"
                }`}
              >
                {message.text}
              </div>
            )}

            {/* ✅ Form now has onSubmit */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  icon={<User size={18} />}
                  label="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your full name"
                  error={errors.name}
                  required
                />
                <InputField
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

              <div className="grid md:grid-cols-2 gap-4">
                <InputField
                  icon={<Phone size={18} />}
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Your phone number"
                  error={errors.phone}
                  optional
                />
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Service Interest <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <select
                      name="serviceType"
                      value={formData.serviceType}
                      onChange={handleInputChange}
                      className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 appearance-none bg-white ${
                        errors.serviceType
                          ? "border-red-300"
                          : "border-gray-300"
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="graphic-design">Graphic Design</option>
                      <option value="seo">SEO</option>
                      <option value="digital-marketing">
                        Digital Marketing
                      </option>
                      <option value="tech-solutions">Tech Solutions</option>
                      <option value="general">General Inquiry</option>
                    </select>
                    <Briefcase
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                      size={18}
                    />
                  </div>
                  {errors.serviceType && (
                    <p className="text-sm text-red-600">{errors.serviceType}</p>
                  )}
                </div>
              </div>

              <InputField
                label="Subject"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                placeholder="Brief description of your inquiry"
                error={errors.subject}
                required
              />

              <div className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                  Message <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 resize-none ${
                      errors.message ? "border-red-300" : "border-gray-300"
                    }`}
                    placeholder="Describe your project, timeline, budget, or questions..."
                  />
                  <MessageSquare
                    className="absolute left-3 top-4 text-gray-400"
                    size={18}
                  />
                </div>
                {errors.message && (
                  <p className="text-sm text-red-600">{errors.message}</p>
                )}
                <p className="text-sm text-gray-500">
                  The more details you provide, the better we can assist you.
                </p>
              </div>

              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleInputChange}
                  className="mt-1 w-4 h-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                />
                <label className="text-sm text-gray-600">
                  I would like to receive updates about services and offers via
                  email.
                </label>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, label, optional, error, required, ...props }) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
        {optional && <span className="text-gray-400 ml-1">(Optional)</span>}
      </label>
      <div className="relative">
        <input
          className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 ${
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
      {error && <p className="text-sm text-red-600">{error}</p>}
    </div>
  );
}

function ContactItem({ icon, title, detail, href }) {
  const content = (
    <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="flex-shrink-0 mt-1">{icon}</div>
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
        className="block hover:scale-105 transition-transform duration-200"
      >
        {content}
      </a>
    );
  }

  return content;
}
