"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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

    // Simulate API call
    setTimeout(() => {
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
      setIsLoading(false);
    }, 2000);
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      label: "Facebook",
      color: "hover:text-blue-600",
    },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:text-sky-500" },
    {
      icon: Instagram,
      href: "#",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: Linkedin,
      href: "#",
      label: "LinkedIn",
      color: "hover:text-blue-700",
    },
    { icon: Github, href: "#", label: "GitHub", color: "hover:text-gray-800" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const slideInRight = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-12 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Contact Info */}
          <motion.div className="space-y-8" variants={slideInLeft}>
            <motion.div variants={itemVariants}>
              <motion.h1
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Lets Start a{" "}
                <motion.span
                  className="text-indigo-700"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Conversation
                </motion.span>
              </motion.h1>
              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Ready to discuss your project? Fill out the form and our team
                will get back to you within 24 hours.
              </motion.p>
            </motion.div>

            <motion.div className="space-y-6" variants={containerVariants}>
              {[
                {
                  icon: <Mail className="text-indigo-600" size={24} />,
                  title: "Email Us",
                  detail: "hello@creativeedge.com",
                  href: "mailto:hello@creativeedge.com",
                },
                {
                  icon: <Phone className="text-indigo-500" size={24} />,
                  title: "Call Us",
                  detail: "+1 (555) 123-4567",
                  href: "tel:+15551234567",
                },
                {
                  icon: <MapPin className="text-indigo-600" size={24} />,
                  title: "Visit Us",
                  detail: "123 Creative Street, Design District, CA 94103",
                  href: "https://maps.google.com",
                },
              ].map((contact, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <ContactItem {...contact} />
                </motion.div>
              ))}
            </motion.div>

            <motion.div variants={itemVariants}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Follow Us
              </h3>
              <motion.div
                className="flex space-x-4"
                variants={containerVariants}
              >
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className={`w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center text-gray-500 ${social.color} transition-colors duration-300`}
                      variants={itemVariants}
                      whileHover={{
                        scale: 1.15,
                        y: -8,
                        boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
                      }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                    >
                      <motion.div
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <IconComponent size={20} />
                      </motion.div>
                    </motion.a>
                  );
                })}
              </motion.div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-6 shadow-lg"
              variants={itemVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
              }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Business Hours
              </h3>
              <motion.div
                className="space-y-2 text-gray-600"
                variants={containerVariants}
              >
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" },
                ].map((schedule, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between"
                    variants={itemVariants}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span>{schedule.day}</span>
                    <span>{schedule.hours}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10"
            variants={slideInRight}
            whileHover={{
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            }}
            transition={{ duration: 0.3 }}
          >
            <motion.h2
              className="text-3xl font-bold text-gray-900 mb-6"
              variants={itemVariants}
            >
              Contact Us
            </motion.h2>

            <AnimatePresence>
              {message.text && (
                <motion.div
                  className={`mb-6 p-4 rounded-lg ${
                    message.type === "success"
                      ? "bg-green-50 text-green-800 border border-green-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                  initial={{ opacity: 0, scale: 0.95, y: -10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {message.text}
                </motion.div>
              )}
            </AnimatePresence>

            <motion.div className="space-y-6" variants={containerVariants}>
              <motion.div variants={itemVariants}>
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
              </motion.div>

              <motion.div variants={itemVariants}>
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
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Service Interest{" "}
                  <span className="text-gray-400 ml-1">(Optional)</span>
                </label>
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
              </motion.div>

              <motion.div className="space-y-2" variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700">
                  Description <span className="text-red-500">*</span>
                </label>
                <motion.div
                  className="relative"
                  whileFocus={{ scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                >
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
                </motion.div>
                <AnimatePresence>
                  {errors.description && (
                    <motion.p
                      className="text-sm text-red-600"
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                    >
                      {errors.description}
                    </motion.p>
                  )}
                </AnimatePresence>
                <p className="text-sm text-gray-500">
                  The more details you provide, the better we can assist you.
                </p>
              </motion.div>

              <motion.button
                type="button"
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full bg-indigo-700 text-white py-3 px-6 rounded-lg font-semibold hover:bg-indigo-800 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed duration-200 flex items-center justify-center space-x-2"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2 }}
              >
                <AnimatePresence mode="wait">
                  {isLoading ? (
                    <motion.div
                      key="loading"
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Sending...</span>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="send"
                      className="flex items-center space-x-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <motion.div
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Send size={20} />
                      </motion.div>
                      <span>Send Message</span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
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
      <motion.div
        className="relative"
        whileFocus={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
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
      </motion.div>
      <AnimatePresence>
        {error && (
          <motion.p
            className="text-sm text-red-600"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            {error}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

function ContactItem({ icon, title, detail, href }) {
  const content = (
    <motion.div
      className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-sm transition-shadow duration-200"
      whileHover={{
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        y: -2,
      }}
      transition={{ duration: 0.2 }}
    >
      <motion.div
        className="flex-shrink-0 mt-1"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.2 }}
      >
        {icon}
      </motion.div>
      <div>
        <h3 className="font-semibold text-gray-900">{title}</h3>
        <p className="text-gray-600 mt-1">{detail}</p>
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <motion.a href={href} className="block" whileTap={{ scale: 0.98 }}>
        {content}
      </motion.a>
    );
  }

  return content;
}
