import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone } from "lucide-react";

const footerLinks = {
  Product: [
    { label: "Pricing", path: "/pricing" },
    { label: "Features", path: "/#features" },
    { label: "Industries", path: "/#industries" },
  ],
  Company: [
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
    { label: "Blog", path: "/blog" },
  ],
  Legal: [
    { label: "Terms of Service", path: "/terms" },
    { label: "Privacy Policy", path: "/privacy" },
  ],
};

const Footer = () => {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2.5">
              <img src={logo} alt="AlixVoice AI" className="h-9 w-9 rounded-lg" />
              <span className="font-display text-xl font-bold">
                Alix<span className="text-secondary">Voice</span> AI
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm text-primary-foreground/70 leading-relaxed">
              Your 24/7 AI Receptionist & Customer Support System. Never miss a customer call again.
            </p>
            <div className="mt-5 flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="mailto:support@alixvoice.ai" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail className="h-4 w-4" /> support@alixvoice.ai
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 font-display text-sm font-semibold uppercase tracking-wider text-primary-foreground/50">
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="text-sm text-primary-foreground/70 transition-colors hover:text-secondary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} AlixVoice AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
