import { ExternalLink, Github, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Web Application",
      description: "Full-stack e-commerce platform built with MERN stack featuring user authentication, product catalog, shopping cart, and payment integration with Stripe.",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe API", "JWT"],
      github: "https://github.com/lokeshyadla",
      demo: "https://ecommerce-demo.netlify.app",
      category: "Full Stack",
    },
    {
      title: "Task Management Dashboard",
      description: "Responsive task management application with real-time updates, drag-and-drop functionality, and team collaboration features built using React and Firebase.",
      techStack: ["React", "Firebase", "Material-UI", "React DnD", "Context API"],
      github: "https://github.com/lokeshyadla",
      demo: "https://taskmanager-demo.netlify.app",
      category: "Frontend",
    },
    {
      title: "Weather Forecast App",
      description: "Modern weather application providing real-time weather data, 7-day forecasts, and location-based services with beautiful UI and responsive design.",
      techStack: ["React", "OpenWeather API", "Tailwind CSS", "Geolocation API"],
      github: "https://github.com/lokeshyadla",
      demo: "https://weather-forecast-demo.netlify.app",
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