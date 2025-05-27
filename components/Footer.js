import Link from "next/link";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const services = [
    "Web Development",
    "Graphic Design",
    "SEO Optimization",
    "Digital Marketing",
    "Tech Solutions",
  ];

  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Latest works", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="bg-base-300 text-base-content">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">
                <span className="text-primary">UpSkill Digital </span> Agency
              </span>
            </div>
            <p className="text-base-content/70 text-sm">
              We are a full-service digital agency helping businesses grow
              through innovative web solutions, creative design, and strategic
              marketing.
            </p>

            {/* Social Media Links */}
            <div className="flex gap-3">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/profile.php?id=61575251046929"
                className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content"
                aria-label="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content"
                aria-label="Twitter"
              >
                <Twitter size={18} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/upskilldigitalagency/?igsh=cXNrN2UyZnBkbXhp#"
                className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content"
                aria-label="Instagram"
              >
                <Instagram size={18} />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/upskill-it-institute-digital-agency/posts/?feedView=all"
                className="btn btn-ghost btn-sm btn-circle hover:bg-primary hover:text-primary-content"
                aria-label="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href={`/services?category=${encodeURIComponent(service)}`}
                    className="text-base-content/70 hover:text-primary text-sm transition-colors"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-base-content/70 hover:text-primary text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a
                    href="mailto:Upskilldigitalagency@gmail.com"
                    className="text-base-content/70 hover:text-primary text-sm transition-colors"
                  >
                    Upskilldigitalagency@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="text-primary flex-shrink-0" size={18} />
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a
                    href="tel:+15551234567"
                    className="text-base-content/70 hover:text-primary text-sm transition-colors"
                  >
                    +8801619599140
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-base-content/70 text-sm">
                    78 Faidabad transmitter moor
                    <br />
                    Uttarkhan, Dhaka-1230
                    <br />
                    Bangladesh
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Signup */}
      {/* <div className="bg-base-200">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-2">Stay Updated</h3>
            <p className="text-base-content/70 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="input input-bordered flex-1"
              />
              <button className="btn btn-primary">Subscribe</button>
            </div>
          </div>
        </div>
      </div> */}

      {/* Bottom Bar */}
      <div className="bg-base-300 border-t border-base-content/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/70 text-sm">
              © {currentYear} UpSkill Digital Agency. All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link
                href="#"
                className="text-base-content/70 hover:text-primary text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-base-content/70 hover:text-primary text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-base-content/70 hover:text-primary text-sm transition-colors"
              >
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
