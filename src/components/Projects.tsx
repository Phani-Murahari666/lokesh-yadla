import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Virtual Mouse using Gestures",
      description: "Computer vision project that enables mouse control through hand gestures using MediaPipe and OpenCV. Features include click, scroll, and cursor movement detection.",
      techStack: ["Python", "OpenCV", "MediaPipe", "TensorFlow"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Computer Vision",
    },
    {
      title: "ESG Risk Analysis AI",
      description: "Machine learning model to analyze Environmental, Social, and Governance risks for sustainable investment decisions using NLP and financial data.",
      techStack: ["Python", "NLTK", "Scikit-learn", "Pandas", "Flask"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Finance AI",
    },
    {
      title: "Sentiment Analysis Dashboard",
      description: "Real-time sentiment analysis system for social media data with interactive dashboard for visualization and trend monitoring.",
      techStack: ["Python", "React", "D3.js", "Twitter API", "MongoDB"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "NLP",
    },
    {
      title: "Hologram Brain Visualization",
      description: "3D brain visualization using holographic display technology for medical education and research purposes with AR integration.",
      techStack: ["Unity", "C#", "ARCore", "Blender", "Python"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "AR/VR",
    },
    {
      title: "Smart Attendance System",
      description: "Automated attendance tracking using facial recognition with real-time processing and anti-spoofing mechanisms.",
      techStack: ["Python", "Face Recognition", "SQLite", "Tkinter"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Computer Vision",
    },
    {
      title: "Predictive Healthcare Analytics",
      description: "Machine learning platform for predicting patient outcomes and optimizing treatment plans using historical medical data.",
      techStack: ["Python", "XGBoost", "Streamlit", "PostgreSQL"],
      github: "https://github.com",
      demo: "https://demo.com",
      category: "Healthcare AI",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A showcase of my technical projects demonstrating AI/ML expertise and problem-solving skills
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group card-glass p-6 rounded-2xl shadow-card hover:shadow-strong transition-smooth animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Project Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-semibold gradient-bg text-white rounded-full">
                    {project.category}
                  </span>
                </div>

                {/* Project Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:gradient-text transition-smooth">
                  {project.title}
                </h3>

                {/* Project Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-muted text-muted-foreground rounded-md border"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Links */}
                <div className="flex space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group/btn hover:gradient-bg hover:text-white hover:border-transparent"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    className="flex-1 group/btn"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                      Live Demo
                    </a>
                  </Button>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button variant="hero" size="lg" className="group">
              <Eye className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;