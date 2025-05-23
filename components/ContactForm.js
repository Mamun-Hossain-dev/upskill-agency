"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Briefcase,
} from "lucide-react";
import axios from "axios";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      await axios.post("/api/contact", data);
      setMessage({
        type: "success",
        text: "Thank you for your message! We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to send message. Please try again.";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="card bg-base-100 shadow-2xl p-6 md:p-10 rounded-2xl">
        <h2 className="text-3xl font-bold mb-2 text-violet-800">
          Get In Touch
        </h2>
        <p className="text-base-content/70 mb-6">
          Ready to start your project? Send us a message and we will respond
          within 24 hours.
        </p>

        {message.text && (
          <div
            className={`alert ${
              message.type === "success" ? "alert-success" : "alert-error"
            } shadow-sm mb-6`}
          >
            <span>{message.text}</span>
          </div>
        )}

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-6 text-gray-800"
        >
          {/* Name & Email */}
          <div className="grid md:grid-cols-2 gap-4 ">
            <InputField
              icon={<User size={18} />}
              label="Full Name"
              placeholder="Your full name"
              error={errors.name?.message}
              {...register("name", {
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters",
                },
                maxLength: {
                  value: 50,
                  message: "Name cannot exceed 50 characters",
                },
              })}
            />
            <InputField
              icon={<Mail size={18} />}
              label="Email Address"
              placeholder="your.email@example.com"
              type="email"
              error={errors.email?.message}
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Please enter a valid email address",
                },
              })}
            />
          </div>

          {/* Phone & Service Type */}
          <div className="grid md:grid-cols-2 gap-4">
            <InputField
              icon={<Phone size={18} />}
              label="Phone Number"
              placeholder="Your phone number"
              optional
              type="tel"
              error={errors.phone?.message}
              {...register("phone", {
                pattern: {
                  value: /^[\+]?[1-9][\d]{0,15}$/,
                  message: "Please enter a valid phone number",
                },
              })}
            />

            <div className="form-control">
              <label className="label font-medium">Service Interest</label>
              <div className="relative">
                <select
                  className="select select-bordered w-full pl-10"
                  {...register("serviceType", {
                    required: "Please select a service type",
                  })}
                >
                  <option value="">Select a service</option>
                  <option>Web Development</option>
                  <option>Graphic Design</option>
                  <option>SEO</option>
                  <option>Digital Marketing</option>
                  <option>Tech Solutions</option>
                  <option>General Inquiry</option>
                </select>
                <Briefcase
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                  size={18}
                />
              </div>
              {errors.serviceType && (
                <label className="label">
                  <span className="label-text-alt text-error">
                    {errors.serviceType.message}
                  </span>
                </label>
              )}
            </div>
          </div>

          {/* Subject */}
          <InputField
            label="Subject"
            placeholder="Brief description of your inquiry"
            error={errors.subject?.message}
            {...register("subject", {
              required: "Subject is required",
              minLength: { value: 5, message: "Minimum 5 characters" },
              maxLength: { value: 100, message: "Maximum 100 characters" },
            })}
          />

          {/* Message */}
          <div className="form-control">
            <label className="label font-medium">Message</label>
            <div className="relative">
              <textarea
                className={`textarea textarea-bordered w-full pl-10 h-32 pt-3 resize-none ${
                  errors.message ? "textarea-error" : ""
                }`}
                placeholder="Describe your project, timeline, budget, or questions..."
                {...register("message", {
                  required: "Message is required",
                  minLength: { value: 20, message: "At least 20 characters" },
                  maxLength: { value: 1000, message: "Max 1000 characters" },
                })}
              ></textarea>
              <MessageSquare
                className="absolute left-3 top-4 text-base-content/50"
                size={18}
              />
            </div>
            {errors.message && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.message.message}
                </span>
              </label>
            )}
            <label className="label">
              <span className="label-text-alt text-base-content/50">
                The more details you provide, the better we can assist you.
              </span>
            </label>
          </div>

          {/* Marketing Consent */}
          <div className="form-control">
            <label className="label cursor-pointer gap-3">
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                {...register("marketingConsent")}
              />
              <span className="label-text text-sm">
                I would like to receive updates about services and offers via
                email.
              </span>
            </label>
          </div>

          {/* Submit */}
          <div className="form-control mt-6">
            <button
              type="submit"
              disabled={isLoading}
              className={`btn btn-primary btn-lg ${isLoading ? "loading" : ""}`}
            >
              {isLoading ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2" size={20} />
                  Send Message
                </>
              )}
            </button>
          </div>
        </form>

        {/* Contact Info */}
        <div className="divider mt-10">Or contact us directly</div>
        <div className="grid md:grid-cols-3 gap-4 mt-6">
          <ContactInfo
            icon={<Mail size={24} />}
            title="Email"
            detail="info@youragency.com"
          />
          <ContactInfo
            icon={<Phone size={24} />}
            title="Phone"
            detail="+1 (555) 123-4567"
          />
          <ContactInfo
            icon={<MessageSquare size={24} />}
            title="Response Time"
            detail="Within 24 hours"
          />
        </div>
      </div>
    </div>
  );
}

function InputField({ icon, label, optional, error, ...props }) {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text font-medium">{label}</span>
        {optional && (
          <span className="label-text-alt text-base-content/50">
            (Optional)
          </span>
        )}
      </label>
      <div className="relative">
        <input
          className={`input input-bordered w-full pl-10 ${
            error ? "input-error" : ""
          }`}
          {...props}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50">
          {icon}
        </div>
      </div>
      {error && (
        <label className="label">
          <span className="label-text-alt text-error">{error}</span>
        </label>
      )}
    </div>
  );
}

function ContactInfo({ icon, title, detail }) {
  return (
    <div className="text-center p-4 bg-base-200 rounded-xl shadow-sm">
      <div className="text-primary mb-2">{icon}</div>
      <p className="font-medium">{title}</p>
      <p className="text-sm text-base-content/70">{detail}</p>
    </div>
  );
}
