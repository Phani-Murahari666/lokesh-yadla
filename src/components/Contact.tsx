import { useState } from "react";
import { Send, Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "lokeshyadla403@gmail.com",
      href: "mailto:lokeshyadla403@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7396239664",
      href: "tel:+917396239664",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Rajahmundry, India",
      href: "#",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/lokeshyadla",
      color: "hover:text-gray-900",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/lokesh-yadla-5a36ab348",
      color: "hover:text-blue-600",
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:lokeshyadla403@gmail.com",
      color: "hover:text-red-500",
    },
  ];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Get In <span className="gradient-text">Touch</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Let's discuss opportunities, collaborations, or just have a chat about AI and technology
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-8 gradient-text">
                Let's Start a Conversation
              </h3>
              
              <p className="text-muted-foreground mb-8 leading-relaxed">
                I'm always excited to connect with fellow developers and tech enthusiasts. 
                Whether you have a project in mind, want to collaborate, or just want to discuss 
                the latest in web development and MERN stack, I'd love to hear from you.
              </p>

              {/* Contact Details */}
              <div className="space-y-6 mb-8">
                {contactInfo.map((info) => {
                  const IconComponent = info.icon;
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center p-4 card-glass rounded-lg shadow-soft hover:shadow-medium transition-smooth group"
                    >
                      <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <div className="font-medium text-foreground">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold mb-4 text-foreground">Connect with me</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center transition-smooth hover:scale-110 ${social.color}`}
                        aria-label={social.label}
                      >
                        <IconComponent size={20} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-scale-in">
              <div className="card-glass p-8 rounded-2xl shadow-card">
                <h3 className="text-2xl font-semibold mb-6 gradient-text">Send me a message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Your Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>

                  <Button
                    type="submit"
                    variant="hero"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full group"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </div>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;