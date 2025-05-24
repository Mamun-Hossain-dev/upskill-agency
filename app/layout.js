// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/ClientLayout"; // safe: it's dynamic client-only

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
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "UpSkill Digital Agency | Digital Services",
    description:
      "Professional web development, digital marketing, SEO, and digital solutions to grow your business online.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="light" className={poppins.variable}>
      <body className={`${poppins.className} bg-slate-200 antialiased`}>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
