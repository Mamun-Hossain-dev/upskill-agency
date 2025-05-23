"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Star, MessageSquare, Briefcase } from "lucide-react";
import axios from "axios";

export default function ReviewForm({ onReviewSubmitted }) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [rating, setRating] = useState(0);
  const [hoveredRating, setHoveredRating] = useState(0);

  const { user, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onSubmit = async (data) => {
    if (!isAuthenticated) {
      setMessage({
        type: "error",
        text: "You must be logged in to submit a review.",
      });
      return;
    }

    if (rating === 0) {
      setMessage({ type: "error", text: "Please select a rating." });
      return;
    }

    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const reviewData = {
        ...data,
        rating,
      };

      const response = await axios.post("/api/reviews", reviewData);

      setMessage({
        type: "success",
        text: "Thank you for your review! It will be published after approval.",
      });

      reset();
      setRating(0);

      if (onReviewSubmitted) {
        onReviewSubmitted(response.data.review);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        "Failed to submit review. Please try again.";
      setMessage({ type: "error", text: errorMessage });
    } finally {
      setIsLoading(false);
    }
  };

  const handleRatingClick = (value) => {
    setRating(value);
    setValue("rating", value);
  };

  if (!isAuthenticated) {
    return (
      <div className="card bg-white shadow-xl border border-base-200 rounded-2xl">
        <div className="card-body text-center space-y-4">
          <h3 className="card-title justify-center text-xl font-semibold text-gray-800">
            Share Your Experience
          </h3>
          <p className="text-base-content/70">
            Please log in to submit a review about our services.
          </p>
          <div className="card-actions justify-center">
            <button
              className="btn btn-primary rounded-lg"
              onClick={() => (window.location.href = "/login")}
            >
              Login to Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-white shadow-xl border border-base-200 rounded-2xl">
      <div className="card-body space-y-6">
        <h3 className="card-title flex items-center gap-2 text-xl font-semibold text-primary">
          <MessageSquare size={24} />
          Share Your Experience
        </h3>
        <p className="text-base-content/70">
          Help others by sharing your experience with our services.
        </p>

        {message.text && (
          <div
            className={`alert text-sm rounded-lg ${
              message.type === "success" ? "alert-success" : "alert-error"
            }`}
          >
            <span>{message.text}</span>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Rating */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Your Rating</span>
            </label>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  className={`btn btn-circle btn-sm transition-transform duration-150 ${
                    star <= (hoveredRating || rating)
                      ? "text-warning"
                      : "text-base-content/30"
                  }`}
                  onClick={() => handleRatingClick(star)}
                  onMouseEnter={() => setHoveredRating(star)}
                  onMouseLeave={() => setHoveredRating(0)}
                  aria-label={`Set rating to ${star}`}
                >
                  <Star
                    size={24}
                    fill={
                      star <= (hoveredRating || rating)
                        ? "currentColor"
                        : "none"
                    }
                  />
                </button>
              ))}
              <span className="ml-2 text-sm text-base-content/70">
                {rating > 0 && (
                  <>
                    {rating} star{rating !== 1 ? "s" : ""} -{" "}
                    {rating === 1
                      ? "Poor"
                      : rating === 2
                      ? "Fair"
                      : rating === 3
                      ? "Good"
                      : rating === 4
                      ? "Very Good"
                      : "Excellent"}
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Service Used */}
          <div className="form-control">
            <label className="label">
              <span className="label-text font-medium">Service Used</span>
              <span className="label-text-alt text-base-content/50">
                (Optional)
              </span>
            </label>
            <div className="relative text-gray-600">
              <select
                className="select select-bordered w-1/2 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                {...register("service")}
              >
                <option value="">Select a service</option>
                <option value="Web Development">Web Development</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="SEO">SEO</option>
                <option value="Digital Marketing">Digital Marketing</option>
                <option value="Tech Solutions">Tech Solutions</option>
                <option value="Other">Other</option>
              </select>
              <Briefcase
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                size={18}
              />
            </div>
          </div>

          {/* Comment */}
          <div className="form-control text-gray-900 font-medium flex flex-col space-y-1.5">
            <label className="label">
              <span className="label-text font-semibold text-black text-lg">
                Your Review
              </span>
            </label>
            <textarea
              placeholder="Tell us about your experience with our services..."
              className={`textarea textarea-bordered h-32 resize-none rounded-lg ${
                errors.comment ? "textarea-error border-error" : ""
              } focus:outline-none focus:ring-2 focus:ring-primary`}
              {...register("comment", {
                required: "Please share your experience",
                minLength: {
                  value: 10,
                  message: "Review must be at least 10 characters long",
                },
                maxLength: {
                  value: 500,
                  message: "Review cannot exceed 500 characters",
                },
              })}
            />
            {errors.comment && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.comment.message}
                </span>
              </label>
            )}
            <label className="label">
              <span className="label-text-alt text-base-content/50">
                Be honest and helpful in your review
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="card-actions justify-end space-x-2">
            <button
              type="button"
              className="btn btn-ghost text-sm hover:bg-base-200 rounded-lg"
              onClick={() => {
                reset();
                setRating(0);
                setMessage({ type: "", text: "" });
              }}
              aria-label="Clear review form"
            >
              Clear
            </button>
            <button
              type="submit"
              disabled={isLoading || rating === 0}
              className={`btn btn-primary text-sm rounded-lg transition-all duration-300 ${
                isLoading ? "loading" : ""
              }`}
              aria-label="Submit review"
            >
              {isLoading ? "Submitting..." : "Submit Review"}
            </button>
          </div>
        </form>

        <div className="divider my-6" />

        <div className="text-sm text-base-content/60 leading-relaxed">
          <p>
            <strong>Note:</strong> All reviews are moderated and will be
            published after approval. Please keep your review respectful and
            honest.
          </p>
        </div>
      </div>
    </div>
  );
}
