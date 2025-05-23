"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import {
  User,
  Mail,
  Phone,
  Edit3,
  Save,
  X,
  MessageSquare,
  Star,
} from "lucide-react";
import axios from "axios";

export default function UserProfile() {
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [userReviews, setUserReviews] = useState([]);
  const [reviewsLoading, setReviewsLoading] = useState(true);

  const { user, updateProfile, isAuthenticated } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  useEffect(() => {
    if (user) {
      // Populate form with current user data
      setValue("name", user.name || "");
      setValue("phone", user.phone || "");
      setValue("bio", user.bio || "");

      // Fetch user reviews
      fetchUserReviews();
    }
  }, [user, setValue]);

  const fetchUserReviews = async () => {
    try {
      const response = await axios.get("/api/reviews/my-reviews");
      setUserReviews(response.data);
    } catch (error) {
      console.error("Error fetching reviews:", error);
    } finally {
      setReviewsLoading(false);
    }
  };

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const result = await updateProfile(data);

      if (result.success) {
        setMessage({ type: "success", text: result.message });
        setIsEditing(false);
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Failed to update profile. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setMessage({ type: "", text: "" });
    // Reset form to original values
    setValue("name", user.name || "");
    setValue("phone", user.phone || "");
    setValue("bio", user.bio || "");
  };

  const renderStars = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={16}
            className={
              star <= rating
                ? "text-warning fill-current"
                : "text-base-content/30"
            }
          />
        ))}
      </div>
    );
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body text-center">
            <h2 className="card-title justify-center">Access Denied</h2>
            <p>Please log in to view your profile.</p>
            <div className="card-actions justify-center">
              <button
                className="btn btn-primary"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-8 text-gray-800">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Profile Header */}
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="avatar placeholder">
                  <div className="bg-primary text-primary-content rounded-full w-16 h-16">
                    <span className="text-2xl font-bold">
                      {user?.name?.charAt(0)?.toUpperCase() || "U"}
                    </span>
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold">{user?.name}</h1>
                  <p className="text-base-content/70">{user?.email}</p>
                  <div className="badge badge-primary mt-1">
                    {user?.role === "admin" ? "Administrator" : "Client"}
                  </div>
                </div>
              </div>

              {!isEditing && (
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn btn-outline btn-primary"
                >
                  <Edit3 size={16} className="mr-2" />
                  Edit Profile
                </button>
              )}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Profile Information */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">Profile Information</h2>

              {message.text && (
                <div
                  className={`alert ${
                    message.type === "success" ? "alert-success" : "alert-error"
                  } mb-4`}
                >
                  <span>{message.text}</span>
                </div>
              )}

              {isEditing ? (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  {/* Name Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Full Name</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        className={`input input-bordered w-full pl-10 ${
                          errors.name ? "input-error" : ""
                        }`}
                        {...register("name", {
                          required: "Name is required",
                          minLength: {
                            value: 2,
                            message: "Name must be at least 2 characters",
                          },
                        })}
                      />
                      <User
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                        size={18}
                      />
                    </div>
                    {errors.name && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.name.message}
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Phone Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">
                        Phone Number
                      </span>
                    </label>
                    <div className="relative">
                      <input
                        type="tel"
                        placeholder="Enter your phone number"
                        className={`input input-bordered w-full pl-10 ${
                          errors.phone ? "input-error" : ""
                        }`}
                        {...register("phone")}
                      />
                      <Phone
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                        size={18}
                      />
                    </div>
                    {errors.phone && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.phone.message}
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Bio Field */}
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text font-medium">Bio</span>
                    </label>
                    <textarea
                      placeholder="Tell us about yourself..."
                      className={`textarea textarea-bordered h-24 ${
                        errors.bio ? "textarea-error" : ""
                      }`}
                      {...register("bio", {
                        maxLength: {
                          value: 500,
                          message: "Bio cannot exceed 500 characters",
                        },
                      })}
                    />
                    {errors.bio && (
                      <label className="label">
                        <span className="label-text-alt text-error">
                          {errors.bio.message}
                        </span>
                      </label>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 justify-end">
                    <button
                      type="button"
                      onClick={handleCancelEdit}
                      className="btn btn-ghost"
                    >
                      <X size={16} className="mr-2" />
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className={`btn btn-primary ${
                        isLoading ? "loading" : ""
                      }`}
                    >
                      {isLoading ? (
                        "Saving..."
                      ) : (
                        <>
                          <Save size={16} className="mr-2" />
                          Save Changes
                        </>
                      )}
                    </button>
                  </div>
                </form>
              ) : (
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <User className="text-base-content/50" size={20} />
                    <div>
                      <p className="font-medium">Full Name</p>
                      <p className="text-base-content/70">
                        {user?.name || "Not provided"}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="text-base-content/50" size={20} />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-base-content/70">{user?.email}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="text-base-content/50" size={20} />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-base-content/70">
                        {user?.phone || "Not provided"}
                      </p>
                    </div>
                  </div>

                  {user?.bio && (
                    <div className="flex items-start gap-3">
                      <MessageSquare
                        className="text-base-content/50 mt-1"
                        size={20}
                      />
                      <div>
                        <p className="font-medium">Bio</p>
                        <p className="text-base-content/70">{user.bio}</p>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* My Reviews */}
          <div className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title mb-4">My Reviews</h2>

              {reviewsLoading ? (
                <div className="text-center py-8">
                  <div className="loading loading-spinner loading-md"></div>
                  <p className="mt-2 text-base-content/70">
                    Loading reviews...
                  </p>
                </div>
              ) : userReviews.length > 0 ? (
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {userReviews.map((review) => (
                    <div
                      key={review._id}
                      className="border border-base-300 rounded-lg p-4"
                    >
                      <div className="flex items-center justify-between mb-2">
                        {renderStars(review.rating)}
                        <div
                          className={`badge ${
                            review.isApproved
                              ? "badge-success"
                              : "badge-warning"
                          }`}
                        >
                          {review.isApproved ? "Published" : "Pending"}
                        </div>
                      </div>

                      {review.service && (
                        <p className="text-sm text-primary font-medium mb-2">
                          Service: {review.service}
                        </p>
                      )}

                      <p className="text-base-content/70 text-sm">
                        {review.comment}
                      </p>

                      <p className="text-xs text-base-content/50 mt-2">
                        Submitted on{" "}
                        {new Date(review.createdAt).toLocaleDateString()}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-8">
                  <MessageSquare
                    className="mx-auto text-base-content/30 mb-4"
                    size={48}
                  />
                  <p className="text-base-content/70">No reviews yet</p>
                  <p className="text-sm text-base-content/50 mt-1">
                    Share your experience with our services
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
