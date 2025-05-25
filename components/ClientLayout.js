// components/ClientLayout.jsx
"use client";

import { AuthProvider } from "@/context/AuthContext"; // adjust the path
import Navigation from "./Navigation"; // or wherever your nav is
import Footer from "./Footer";

export default function ClientLayout({ children }) {
  return (
    <AuthProvider>
      <Navigation />
      {children}
      <Footer />
    </AuthProvider>
  );
}
