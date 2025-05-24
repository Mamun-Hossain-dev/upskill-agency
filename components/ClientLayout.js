"use client";

import Navigation from "@/components/Navigation";
import WhatsAppButton from "@/components/Whatsapp";
import Footer from "@/components/Footer";

export default function ClientLayout({ children }) {
  return (
    <>
      <Navigation />
      <main className="min-h-screen w-full bg-slate-50">{children}</main>
      <Footer />
      <WhatsAppButton
        phoneNumber="8801640571091"
        message="Hello! I'm interested in your digital services. Can you help me?"
      />
    </>
  );
}
