import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="/lovable-uploads/ade91ec2-0570-4ac5-bf0e-086d3a90d011.png" 
                alt="NuLife 2 Living Logo" 
                className="w-12 h-12"
              />
              <h3 className="text-xl font-bold text-background">
                NuLife 2 Living
              </h3>
            </div>
            <p className="text-background/80 leading-relaxed">
              A sanctuary for healing, meditation, and emotional support. 
              Helping individuals rediscover themselves through professional care and peaceful retreats.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="#services" 
                  className="text-background/80 hover:text-background transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Our Services
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className="text-background/80 hover:text-background transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-background transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-background mb-4">Get in Touch</h4>
            <div className="space-y-2 text-background/80">
              <p>(555) 123-4567</p>
              <p>info@nulife2living.com</p>
              <p>123 Healing Way<br />Wellness Valley, CA 90210</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors hover:scale-110"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors hover:scale-110"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors hover:scale-110"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="text-background/80 hover:text-background transition-colors hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60">
            © 2024 NuLife 2 Living Homes, LLC. All rights reserved. | Designed with care for your healing journey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;