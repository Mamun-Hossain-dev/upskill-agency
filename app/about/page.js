"use client";

import React from "react";
import {
  BadgeCheck,
  Lightbulb,
  Globe,
  Heart,
  Star,
  TrendingUp,
  Settings,
  ArrowRight,
} from "lucide-react";
import AboutUs from "@/components/AboutUs";

export default function AboutSection() {
  return (
    <section className="container mx-auto">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 bg-gradient-to-br from-primary/90 to-base-100 py-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-indigo-800">
            About Our Agency
          </h2>
          <p className="text-base md:text-xl text-base-content/90 max-w-3xl mx-auto ">
            We are a team of passionate creators, strategists, and developers
            dedicated to crafting impactful digital experiences.
          </p>
        </div>

        <AboutUs />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20 mt-16">
          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <BadgeCheck className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Trusted Expertise</h3>
            <p className="text-base-content/70">
              Years of experience delivering exceptional solutions across
              industries.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Lightbulb className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Innovative Thinking</h3>
            <p className="text-base-content/70">
              We embrace creativity to solve problems and unlock opportunities.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Globe className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
            <p className="text-base-content/70">
              We serve clients around the world with scalable and smart digital
              solutions.
            </p>
          </div>

          <div className="text-center p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mx-auto mb-4">
              <Heart className="text-primary" size={32} />
            </div>
            <h3 className="text-xl font-semibold mb-2">Client-Centric</h3>
            <p className="text-base-content/70">
              Your vision is our mission. We put your goals at the center of our
              strategy.
            </p>
          </div>
        </div>

        <div className="text-center mb-12 hidden lg:block">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose Our Services?
          </h2>
          <p className="text-xl text-base-content/70 max-w-2xl mx-auto">
            We deliver exceptional results through our proven approach and
            dedicated expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
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
              Timely execution without compromising quality or impact.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-6 rounded-2xl shadow-md text-center border-2 border-white hover:border-indigo-700 transition-all">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-base-content/70">
              To empower businesses with innovative digital solutions that drive
              growth, engagement, and lasting value.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center border-2 border-white hover:border-indigo-700 transition-all">
            <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
            <p className="text-base-content/70">
              To be the most trusted creative partner for businesses seeking
              exceptional digital experiences that transform their brand and
              market position.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md text-center border-2 border-white hover:border-indigo-700 transition-all">
            <h3 className="text-2xl font-bold mb-4">Our Values</h3>
            <p className="text-base-content/70">
              Excellence, Innovation, Integrity, Collaboration, and Client
              Success are the core principles that guide everything we do.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
