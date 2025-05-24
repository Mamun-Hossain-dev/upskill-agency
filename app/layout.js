// app/layout.tsx
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
import WhatsAppButton from "@/components/Whatsapp";

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
          {/* WhatsApp Button - will be fixed to bottom right */}

          <WhatsAppButton
            phoneNumber="8801640571091" // Replace with your actual WhatsApp number
            message="Hello! I'm interested in your digital services."
          />
        </AuthProvider>
      </body>
    </html>
  );
}
