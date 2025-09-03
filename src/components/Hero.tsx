import { Download, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
const profileImage = "/lovable-uploads/6e328af3-c5b9-4210-9f80-78bab855352e.png";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle opacity-50"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-secondary/10 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Profile Image */}
          <div className="mb-8 relative inline-block">
            <div className="w-48 h-48 mx-auto relative">
              <img
                src={profileImage}
                alt="Lokesh Yadla - B.Tech Student"
                className="w-full h-full rounded-full object-cover shadow-strong border-4 border-white"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-secondary/20"></div>
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-foreground">Lokesh</span>{" "}
            <span className="gradient-text">Yadla</span>
          </h1>
          
          <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-4">
            B.Tech Student • Graduation 2027
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            MERN Stack Developer | Web Development Enthusiast | CGPA: 7.5/10
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download Resume
            </Button>
            <Button variant="minimal" size="lg" className="group">
              <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              Contact Me
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/lokeshyadla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/lokesh-yadla-5a36ab348"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:lokeshyadla403@gmail.com"
              className="text-muted-foreground hover:text-primary transition-smooth hover:scale-110 transform"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;