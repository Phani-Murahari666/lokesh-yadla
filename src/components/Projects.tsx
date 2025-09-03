import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Weather App",
      description: "Modern weather application providing real-time weather data and forecasts with beautiful UI and responsive design.",
      techStack: ["HTML", "CSS", "JavaScript", "OpenWeather API"],
      category: "Frontend",
    },
    {
      title: "To-Do List",
      description: "Interactive task management application with add, delete, and mark complete functionality using local storage.",
      techStack: ["HTML", "CSS", "JavaScript", "Local Storage"],
      category: "Frontend",
    },
    {
      title: "SignIn/SignUp Forms",
      description: "Responsive user authentication forms with validation, modern design and smooth animations.",
      techStack: ["HTML", "CSS", "JavaScript", "Form Validation"],
      category: "Frontend",
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
              A showcase of my web development projects demonstrating MERN stack expertise and modern web technologies
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


                {/* Hover Effect */}
                <div className="absolute inset-0 gradient-subtle opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;