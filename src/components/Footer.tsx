import { MessageCircle, Mail, MapPin, Clock, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png"

const Footer = () => {
  const quickLinks = [
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Referral Program", href: "#referral" },
  ];

  const policies = [
    { label: "Terms & Conditions", href: "#terms" },
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Refund Policy", href: "#refund" },
  ];

  return (
    <footer id="contact" className="bg-gradient-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-15 h-15 rounded-xl bg-gradient-accent flex items-center justify-center">
  <img 
  src={logo} 
  alt="CampusCraft Logo" 
  className="h-12 md:h-14 lg:h-16 w-auto object-contain transition-transform duration-300 hover:scale-110"
 />
            </div>
              <span className="font-display font-bold text-xl">
                Campus<span className="text-coral-light">Craft</span>
              </span>
            </div>
            <p className="text-primary-foreground/70 text-sm mb-6">
              Your Career, Professionally Built. We help students stand out with ATS-friendly resumes and stunning portfolio websites.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Policies</h4>
            <ul className="space-y-3">
              {policies.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg mb-4">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-coral-light" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">WhatsApp</p>
                  <p className="text-sm font-medium">+91 9203303204</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
               
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Working Hours</p>
                  <p className="text-sm font-medium">Mon – Sat | 10 AM – 8 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-primary-foreground/60">Location</p>
                  <p className="text-sm font-medium">Serving Students Across India 🇮🇳</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Terms Section */}
      <div id="terms" className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <h4 className="font-display font-bold text-lg mb-4">⚠️ Terms & Conditions</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            <li>• 50% advance required before starting work</li>
            <li>• 1 free update included in each package (within 7 days)</li>
            <li>• Unlimited revisions are not allowed</li>
            <li>• Referral rewards paid only after order completion</li>
            <li>• CampusCraft holds the right to refuse service in case of misuse</li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} CampusCraft. All rights reserved.
            </p>
            <p className="text-sm text-primary-foreground/60">
              Made with ❤️ for students across India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
