import { Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Brand Section */}
            <div className="md:col-span-1">
              <h3 className="text-2xl font-bold gradient-text mb-4">Lokesh Yadla</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Passionate web developer and B.Tech student building modern web applications. 
                Always excited to learn, collaborate, and create innovative solutions.
              </p>
              <div className="flex items-center text-muted-foreground">
                <span>Made with</span>
                <Heart size={16} className="mx-2 text-red-500 animate-pulse" />
                <span>using React & Tailwind CSS</span>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <div className="space-y-2">
                {quickLinks.map((link) => (
                  <button
                    key={link.label}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-smooth hover:translate-x-1 transform"
                  >
                    {link.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="md:col-span-1">
              <h4 className="text-lg font-semibold text-foreground mb-4">Get in Touch</h4>
              <div className="space-y-2 text-muted-foreground">
                <div>lokeshyadla403@gmail.com</div>
                <div>+91 7396239664</div>
                <div>Rajahmundry, India</div>
              </div>
              
              {/* Back to Top Button */}
              <div className="mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={scrollToTop}
                  className="group hover:gradient-bg hover:text-white hover:border-transparent"
                >
                  <ArrowUp size={16} className="mr-2 group-hover:-translate-y-1 transition-transform" />
                  Back to Top
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Lokesh Yadla. All rights reserved.
            </div>
            
            <div className="text-muted-foreground text-sm">
              <span>Built with modern technologies | </span>
              <span className="gradient-text font-medium">Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;