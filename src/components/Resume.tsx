import { Download, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  return (
    <section id="resume" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Download my resume to learn more about my academic journey and skills
            </p>
          </div>

          {/* Download Resume Button */}
          <div className="text-center mb-12">
            <a href="/sample-resume.pdf" download="Lokesh_Yadla_Resume.pdf">
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Education Summary */}
          <div className="card-glass p-8 rounded-2xl shadow-card animate-fade-in">
            <h3 className="text-2xl font-semibold mb-6 gradient-text flex items-center justify-center">
              <GraduationCap className="mr-3" size={28} />
              Education
            </h3>
            <div className="text-center">
              <div className="border-l-4 border-primary/30 pl-6 inline-block text-left">
                <h4 className="text-xl font-semibold text-foreground">B.Tech in Engineering</h4>
                <p className="text-lg text-muted-foreground">GIET Engineering College, Rajahmundry</p>
                <p className="text-muted-foreground">2023 - 2027 | Current CGPA: 7.5/10</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Specializing in MERN Stack Development and Web Technologies
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;