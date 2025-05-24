"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Emily Carter",
      position: "Founder & CEO",
      company: "EduGrowth Solutions",
      rating: 5,
      review:
        "Working with this team was a game-changer. Their ability to understand our goals and translate them into a functional, engaging website exceeded all expectations.",
      image:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Michael Thompson",
      position: "Training Director",
      company: "NextGen Skills Hub",
      rating: 4,
      review:
        "Our online training portal is now faster, more user-friendly, and mobile-optimized. We've received great feedback from participants and instructors alike.",
      image:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Sophia Lin",
      position: "Event Manager",
      company: "InspireEd Conferences",
      rating: 5,
      review:
        "They helped us launch a sleek event registration system with real-time analytics. It streamlined our process and impressed attendees.",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a2c9f9?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "James Mitchell",
      position: "Marketing Lead",
      company: "CareerConnect Fairs",
      rating: 5,
      review:
        "From SEO to responsive design, they covered every detail. Our career fair attendance doubled thanks to the improved site visibility.",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 5,
      name: "Ava Rodríguez",
      position: "Digital Learning Coordinator",
      company: "TechBridge Academy",
      rating: 4,
      review:
        "We needed a scalable LMS with custom features. They delivered exactly that. Support has been top-notch too.",
      image:
        "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 6,
      name: "Ethan Kim",
      position: "Founder",
      company: "SkillSpring Webinars",
      rating: 5,
      review:
        "Highly professional and responsive. The booking system and integrations work flawlessly across all devices.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 7,
      name: "Lily Nguyen",
      position: "Operations Manager",
      company: "EduNexus",
      rating: 5,
      review:
        "They simplified our event logistics with a powerful dashboard. Our team productivity increased significantly.",
      image:
        "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 8,
      name: "David Parker",
      position: "Director of Learning",
      company: "FuturePath Training",
      rating: 4,
      review:
        "Reliable, creative, and efficient. We appreciated their collaborative approach and attention to detail.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 9,
      name: "Grace Lee",
      position: "Program Manager",
      company: "UpSkill Global",
      rating: 5,
      review:
        "The custom portal they built saved us countless hours of admin work. Our users love the experience too.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 10,
      name: "Ryan Davis",
      position: "Head of Events",
      company: "BrightFuture Forums",
      rating: 4,
      review:
        "From planning to deployment, they were with us every step. The interactive agenda and real-time updates wowed our attendees.",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328f9b90?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 11,
      name: "Natalie Brown",
      position: "Strategy Consultant",
      company: "BrightPath Advisors",
      rating: 5,
      review:
        "They brought our vision to life with such precision. The website reflects our brand perfectly, and client inquiries have significantly increased.",
      image:
        "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 12,
      name: "Kevin Liu",
      position: "Founder & CEO",
      company: "EduSphere",
      rating: 5,
      review:
        "We were impressed with their ability to handle our LMS platform. The UX improvements alone boosted course completion rates by 70%.",
      image:
        "https://images.unsplash.com/photo-1546456073-6712f79251bb?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 13,
      name: "Aisha Khan",
      position: "Director of Communications",
      company: "HealthBridge",
      rating: 4,
      review:
        "Timely delivery, creative design, and strategic thinking. They were a true extension of our in-house team.",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 14,
      name: "Daniel Moore",
      position: "Lead Developer",
      company: "PixelForge",
      rating: 5,
      review:
        "As a developer, I appreciated the clean code and thoughtful design systems they implemented. Collaboration was smooth and efficient.",
      image:
        "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=150&h=150&fit=crop&crop=face",
    },
    {
      id: 15,
      name: "Isabella Grace",
      position: "Marketing Strategist",
      company: "VisionCraft",
      rating: 5,
      review:
        "Their campaign ideas were refreshingly innovative. We saw a spike in engagement metrics and customer retention after launching.",
      image:
        "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=150&h=150&fit=crop&crop=face",
    },
  ];

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoPlaying, testimonials.length]);

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const renderStars = (rating) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 transition-all ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  return (
    <div className="max-w-6xl mx-auto px-4 py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          {`Don't just take our word for it. Here's what our clients have to say about working with us.`}
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-white transition-shadow duration-300">
          <div
            className="flex transition-all duration-[1200ms] ease-in-out transform-gpu"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full flex-shrink-0">
                <div className="p-10 md:p-14 lg:p-20">
                  <div className="flex flex-col lg:flex-row items-center gap-10">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover shadow-xl border-4 border-white hover:scale-105 transition-transform"
                    />
                    <div className="flex-1 text-center lg:text-left">
                      <div className="flex justify-center lg:justify-start mb-4">
                        {renderStars(testimonial.rating)}
                      </div>
                      <blockquote className="text-xl leading-relaxed text-slate-700 italic mb-6 transition-opacity duration-700">
                        “{testimonial.review}”
                      </blockquote>
                      <h4 className="text-xl font-bold text-indigo-800">
                        {testimonial.name}
                      </h4>
                      <p className="text-gray-500">{testimonial.position}</p>
                      <p className="text-slate-600 font-semibold">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-md hover:shadow-xl transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center mt-8 space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentIndex === index
                ? "bg-indigo-600 scale-125"
                : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

      {/* Auto-play Toggle */}
      <div className="text-center mt-6">
        <button
          onClick={() => setIsAutoPlaying(!isAutoPlaying)}
          className="text-sm text-indigo-500 hover:text-indigo-700 transition-all duration-200"
        >
          {isAutoPlaying ? "⏸️ Pause Auto-play" : "▶️ Resume Auto-play"}
        </button>
      </div>
    </div>
  );
};

export default TestimonialsSlider;
