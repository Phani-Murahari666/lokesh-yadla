import { Download, Eye, FileText, Award, Briefcase, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Resume = () => {
  const resumeData = {
    education: [
      {
        degree: "B.Tech in Artificial Intelligence & Machine Learning",
        institution: "XYZ Institute of Technology",
        period: "2021 - 2024",
        cgpa: "3.8/4.0",
        highlights: ["Dean's List", "AI Research Assistant", "Hackathon Winner"],
      },
      {
        degree: "Higher Secondary (Science)",
        institution: "ABC Higher Secondary School",
        period: "2019 - 2021",
        cgpa: "92%",
        highlights: ["Mathematics Olympiad", "Science Fair Winner"],
      },
    ],
    experience: [
      {
        position: "AI Research Intern",
        company: "TechCorp Solutions",
        period: "Jun 2023 - Aug 2023",
        achievements: [
          "Developed ML models for predictive analytics",
          "Improved model accuracy by 15%",
          "Presented findings to senior management",
        ],
      },
      {
        position: "Teaching Assistant",
        company: "XYZ Institute of Technology",
        period: "Feb 2023 - Present",
        achievements: [
          "Assisted in Data Structures & Algorithms course",
          "Mentored 50+ students in programming concepts",
          "Developed automated grading system",
        ],
      },
    ],
    achievements: [
      "Winner - National AI Hackathon 2023",
      "Best Project Award - College Tech Fest",
      "Published research paper on Computer Vision",
      "Google Developer Student Club Lead",
      "Contributor to Open Source Projects",
    ],
  };

  return (
    <section id="resume" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Resume</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my academic journey, experience, and achievements
            </p>
          </div>

          {/* Resume Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
              Download PDF Resume
            </Button>
            <Button variant="minimal" size="lg" className="group">
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View Online Resume
            </Button>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Education */}
            <div className="animate-slide-in">
              <div className="card-glass p-8 rounded-2xl shadow-card h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                    <GraduationCap size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">Education</h3>
                </div>

                <div className="space-y-6">
                  {resumeData.education.map((edu, index) => (
                    <div key={index} className="border-l-4 border-primary/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 gradient-bg rounded-full"></div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{edu.degree}</h4>
                      <div className="text-primary font-medium mb-1">{edu.institution}</div>
                      <div className="text-sm text-muted-foreground mb-2">{edu.period}</div>
                      <div className="text-sm font-medium text-foreground mb-2">CGPA: {edu.cgpa}</div>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight, idx) => (
                          <span
                            key={idx}
                            className="px-2 py-1 text-xs gradient-bg text-white rounded-full"
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Experience */}
            <div className="animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <div className="card-glass p-8 rounded-2xl shadow-card h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                    <Briefcase size={24} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">Experience</h3>
                </div>

                <div className="space-y-6">
                  {resumeData.experience.map((exp, index) => (
                    <div key={index} className="border-l-4 border-secondary/30 pl-6 relative">
                      <div className="absolute -left-2 top-0 w-4 h-4 bg-secondary rounded-full"></div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">{exp.position}</h4>
                      <div className="text-secondary font-medium mb-1">{exp.company}</div>
                      <div className="text-sm text-muted-foreground mb-3">{exp.period}</div>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Achievements */}
          <div className="mt-8 animate-scale-in" style={{ animationDelay: "0.4s" }}>
            <div className="card-glass p-8 rounded-2xl shadow-card">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 gradient-bg rounded-full flex items-center justify-center mr-4">
                  <Award size={24} className="text-white" />
                </div>
                <h3 className="text-2xl font-semibold gradient-text">Achievements & Awards</h3>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {resumeData.achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center p-4 bg-muted/50 rounded-lg hover:bg-muted/70 transition-smooth"
                  >
                    <Award size={16} className="text-primary mr-3 flex-shrink-0" />
                    <span className="text-sm text-foreground">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="mt-12 text-center">
            <div className="card-glass p-8 rounded-2xl shadow-card inline-block">
              <FileText size={48} className="text-primary mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-foreground mb-2">Want the full details?</h4>
              <p className="text-muted-foreground mb-4">
                Download my complete resume for a detailed overview of my skills, projects, and experience.
              </p>
              <Button variant="hero" size="lg" className="group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get Complete Resume
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;