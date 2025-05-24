"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../context/AuthContext";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });

  const { login } = useAuth();
  const router = useRouter();

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
      const result = await login(data.email, data.password);

      if (result.success) {
        setMessage({ type: "success", text: result.message });
        reset();
        // Redirect to dashboard or previous page
        const redirectTo = router.query.redirect || "/dashboard";
        setTimeout(() => {
          router.push(redirectTo);
        }, 1500);
      } else {
        setMessage({ type: "error", text: result.message });
      }
    } catch (error) {
      setMessage({ type: "error", text: "Login failed. Please try again." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex justify-center bg-base-200 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-base-content">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-base-content/70">
            Sign in to your account to continue
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

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-6 text-gray-700"
            >
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

              {/* Password Field */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-medium">Password</span>
                  <Link
                    href="/forgot-password"
                    className="label-text-alt link link-primary"
                  >
                    Forgot password?
                  </Link>
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    className={`input input-bordered w-full pl-10 pr-10 ${
                      errors.password ? "input-error" : ""
                    }`}
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password must be at least 6 characters",
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

              {/* Remember Me */}
              <div className="form-control">
                <label className="label cursor-pointer justify-start gap-3">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    {...register("rememberMe")}
                  />
                  <span className="label-text text-gray-800 font-medium">
                    Remember me
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`btn btn-primary w-full ${
                  isLoading ? "loading" : ""
                }`}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </button>
            </form>

            {/* Register Link */}
            <div className="divider">Do not have an account?</div>
            <div className="text-center">
              <Link href="/register" className="link link-primary">
                Create a new account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
