// app/layout.js
// "use client";

import "./globals.css"; // Tailwind/DaisyUI base styles
import { AuthProvider } from "../context/AuthContext";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "YourAgency | Digital Services",
  description: "Professional web development, digital marketing, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="container mx-auto">
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen px-4 py-8 bg-base-200">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
