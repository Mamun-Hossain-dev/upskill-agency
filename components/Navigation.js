"use client";

import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X, User, LogOut, Settings, MessageSquare } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logout, isAuthenticated, isAdmin } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push("/");
  };

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="navbar bg-base-100 shadow-md sticky top-0 z-50 text-gray-700 px-2 rounded-md">
      <div className="navbar-start">
        {/* Mobile menu button */}
        <div className="dropdown lg:hidden">
          <button
            className="btn btn-ghost"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {isMenuOpen && (
            <ul className="menu menu-sm dropdown-content mt-3 z-50 p-2 shadow bg-base-100 rounded-box w-52">
              {navigation.map((item) => (
                <li key={item.name} className="text-lg font-medium">
                  <Link
                    href={item.href}
                    className={router.pathname === item.href ? "active" : ""}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              <div className="divider"></div>
              <li>
                <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
                  Get Quote
                </Link>
              </li>
            </ul>
          )}
        </div>

        {/* Logo */}
        <Link href="/" className="btn btn-ghost text-xl font-bold">
          <i className="text-primary">logo</i>
        </Link>
      </div>

      {/* Desktop Navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navigation.map((item) => (
            <li key={item.name} className="text-lg font-medium">
              <Link
                href={item.href}
                className={`${
                  router.pathname === item.href ? "active" : ""
                } hover:bg-primary/10`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="navbar-end gap-2">
        {/* User Menu */}
        {isAuthenticated ? (
          <div className="dropdown dropdown-end">
            <button className="btn btn-ghost btn-circle avatar">
              <div className="w-8 rounded-full bg-primary text-primary-content flex items-center justify-center">
                <span className="text-sm font-bold">
                  {user?.name?.charAt(0)?.toUpperCase() || "U"}
                </span>
              </div>
            </button>
            <ul className="mt-3 z-50 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
              <li className="menu-title">
                <span>Hello, {user?.name}</span>
              </li>
              <div className="divider my-1"></div>
              <li>
                <Link href="/profile" className="flex items-center gap-2">
                  <User size={16} />
                  Profile
                </Link>
              </li>
              {isAdmin && (
                <li>
                  <Link href="/admin" className="flex items-center gap-2">
                    <Settings size={16} />
                    Admin Dashboard
                  </Link>
                </li>
              )}
              <li>
                <Link href="/reviews" className="flex items-center gap-2">
                  <MessageSquare size={16} />
                  Leave Review
                </Link>
              </li>
              <div className="divider my-1"></div>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 text-error"
                >
                  <LogOut size={16} />
                  Logout
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-ghost btn-sm">
              Login
            </Link>
            <Link href="/register" className="btn btn-primary btn-sm">
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
