// app/layout.tsx or app/page.tsx
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

import "./globals.css"; // Tailwind/DaisyUI base styles
import { AuthProvider } from "../context/AuthContext";
import Navigation from "../components/Navigation";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Up skill digital agency | Digital Services",
  description: "Professional web development, digital marketing, and more.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-slate-200">
        <AuthProvider>
          <Navigation />
          <main className="min-h-screen w-full bg-slate-50">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
