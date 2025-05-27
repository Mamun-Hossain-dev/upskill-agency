// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // safe: it's dynamic client-only
import WhatsAppButton from "@/components/Whatsapp";
import Head from "next/head"; // Explicit head for favicon fallback

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "UpSkill Digital Agency | Digital Services",
  description:
    "Professional web development, digital marketing, SEO, and digital solutions to grow your business online.",
  keywords:
    "web development, digital marketing, SEO, digital agency, Bangladesh",
  authors: [{ name: "UpSkill Digital Agency" }],
  openGraph: {
    title: "UpSkill Digital Agency | Digital Services",
    description:
      "Professional web development, digital marketing, SEO, and digital solutions to grow your business online.",
    type: "website",
    locale: "en_US",
    url: "https://upskilldigitalagency.com",
    siteName: "UpSkill Digital Agency",
  },
  icons: {
    icon: "/favicon.ico", // use .ico for better support
    shortcut: "/favicon.ico",
    apple: "/favicon.png", // apple-specific
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={poppins.variable}>
      <Head>
        {/* Fallback for older browsers and added safety */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
      </Head>

      <body className={`${poppins.className} bg-slate-200 antialiased`}>
        <ClientLayout>{children}</ClientLayout>
        <WhatsAppButton />
      </body>
    </html>
  );
}
