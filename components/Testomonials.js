"use client";
import React, { useState, useEffect, useCallback, memo } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

// Add display name to memoized component
const TestimonialSlide = memo(({ testimonial }) => (
  <div className="w-full flex-shrink-0">
    <div className="p-10 md:p-14 lg:p-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">
        <div className="relative w-28 h-28 lg:w-36 lg:h-36 rounded-full overflow-hidden shadow-xl border-4 border-violet-500 hover:scale-105 transition-transform">
          <Image
            src={testimonial.image}
            alt={testimonial.name}
            fill
            className="object-cover"
            quality={55}
            sizes="(max-width: 768px) 7rem, 9rem"
            priority={false}
          />
        </div>

        <div className="flex-1 text-center lg:text-left">
          <div className="flex justify-center lg:justify-start mb-4">
            {Array.from({ length: 5 }, (_, i) => (
              <Star
                key={i}
                className={`w-5 h-5 transition-all ${
                  i < testimonial.rating
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <blockquote className="text-xl leading-relaxed text-slate-700 italic mb-6 transition-opacity duration-700">
            “{testimonial.review}”
          </blockquote>
          <h4 className="text-xl font-bold text-indigo-800">
            {testimonial.name}
          </h4>
          <p className="text-gray-500">{testimonial.position}</p>
          <p className="text-slate-600 font-semibold">{testimonial.company}</p>
        </div>
      </div>
    </div>
  </div>
));

// Set display name for the component
TestimonialSlide.displayName = "TestimonialSlide";

const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [testimonials, setTestimonials] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const response = await fetch("/data/testimonials.json");
        const data = await response.json();
        setTestimonials(data);
      } catch (error) {
        console.error("Error loading testimonials:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTestimonials();
  }, []);

  const handleNavigation = useCallback(
    (direction) => {
      setCurrentIndex((prev) => {
        if (direction === "next") {
          return prev === testimonials.length - 1 ? 0 : prev + 1;
        }
        return prev === 0 ? testimonials.length - 1 : prev - 1;
      });
      setIsAutoPlaying(false);
    },
    [testimonials.length]
  );

  const nextSlide = useCallback(
    () => handleNavigation("next"),
    [handleNavigation]
  );
  const prevSlide = useCallback(
    () => handleNavigation("prev"),
    [handleNavigation]
  );

  const goToSlide = useCallback((index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  }, []);

  useEffect(() => {
    if (isAutoPlaying && testimonials.length > 0) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 6000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, testimonials.length]);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        <div className="animate-pulse">Loading testimonials...</div>
      </div>
    );
  }

  if (!testimonials.length) {
    return (
      <div className="max-w-6xl mx-auto px-4 py-20 text-center">
        No testimonials available
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          What Our Clients Say
        </h2>
        <p className="text-lg text-gray-600 font-medium max-w-2xl mx-auto">
          Dont just take our word for it. Heres what our clients have to say
          about working with us.
        </p>
      </div>

      <div className="relative">
        <div className="overflow-hidden rounded-3xl shadow-2xl bg-white transition-shadow duration-300">
          <div
            className="flex transition-all duration-[1200ms] ease-in-out transform-gpu"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial) => (
              <TestimonialSlide
                key={testimonial.id}
                testimonial={testimonial}
              />
            ))}
          </div>
        </div>

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
