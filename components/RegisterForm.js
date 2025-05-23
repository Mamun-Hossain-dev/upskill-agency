"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, User, Mail, Phone, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { register: registerUser } = useAuth();
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm();

  const password = watch("password");

  const onSubmit = async (data) => {
    setIsLoading(true);
    setMessage({ type: "", text: "" });

    try {
      const result = await registerUser(data);

      if (result.success) {
        setMessage({ type: "success", text: result.message });
        reset();
        // Redirect to dashboard or home page after successful registration
        setTimeout(() => {
          router.push("/dashboard");
        }, 2000);
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      setMessage({
        type: "error",
        text: "Registration failed. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8 text-gray-600">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-base-content">
            Create your account
          </h2>
          <p className="mt-2 text-sm text-base-content/70">
            Join our agency and start your journey with us
          </p>
        </div>

        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            {message.text && (
              <div
                className={`alert ${
                  message.type === "success" ? "alert-success" : "alert-error"
                } mb-4`}
              >
                <span>{message.text}</span>
              </div>
            )}

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your full name"
                    className={`input input-bordered w-full pl-10 ${
                      errors.name ? "input-error" : ""
                    }`}
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

              {/* Email Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Email Address</span>
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className={`input input-bordered w-full pl-10 ${
                      errors.email ? "input-error" : ""
                    }`}
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Please enter a valid email address",
                      },
                    })}
                  />
                  <Mail
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                    size={18}
                  />
                </div>
                {errors.email && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.email.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Phone Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Phone Number</span>
                  <span className="label-text-alt text-base-content/50">
                    (Optional)
                  </span>
                </label>
                <div className="relative">
                  <input
                    type="tel"
                    placeholder="Enter your phone number"
                    className={`input input-bordered w-full pl-10 ${
                      errors.phone ? "input-error" : ""
                    }`}
                    {...register("phone", {
                      pattern: {
                        value: /^[\+]?[1-9][\d]{0,15}$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
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

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Create a password"
                    className={`input input-bordered w-full pl-10 pr-10 ${
                      errors.password ? "input-error" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
                      },
                      pattern: {
                        value: /^(?=.*[A-Za-z])(?=.*\d)/,
                        message:
                          "Password must contain at least one letter and one number",
                      },
                    })}
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                    size={18}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-base-content/50 hover:text-base-content"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
                {errors.password && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.password.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Confirm Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">
                    Confirm Password
                  </span>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Confirm your password"
                    className={`input input-bordered w-full pl-10 ${
                      errors.confirmPassword ? "input-error" : ""
                    }`}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) =>
                        value === password || "Passwords do not match",
                    })}
                  />
                  <Lock
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-base-content/50"
                    size={18}
                  />
                </div>
                {errors.confirmPassword && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.confirmPassword.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Terms Agreement */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className={`checkbox checkbox-primary ${
                      errors.terms ? "checkbox-error" : ""
                    }`}
                    {...register("terms", {
                      required: "You must agree to the terms and conditions",
                    })}
                  />
                  <span className="label-text">
                    I agree to the{" "}
                    <Link href="/terms" className="link link-primary">
                      Terms and Conditions
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="link link-primary">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {errors.terms && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      {errors.terms.message}
                    </span>
                  </label>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`btn btn-primary w-full ${
                  isLoading ? "loading" : ""
                }`}
              >
                {isLoading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

            {/* Login Link */}
            <div className="divider">Already have an account?</div>
            <div className="text-center">
              <Link href="/login" className="link link-primary">
                Sign in to your account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
