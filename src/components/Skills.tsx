import { useState } from "react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = {
    programming: {
      title: "Programming Languages",
      skills: [
        { 
          name: "JavaScript", 
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "Java", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "Python", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        { 
          name: "C", 
          level: 75,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"
        },
      ],
    },
    frontend: {
      title: "Frontend Development",
      skills: [
        { 
          name: "React", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        { 
          name: "HTML5", 
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        { 
          name: "CSS3", 
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "Bootstrap", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
      ],
    },
    backend: {
      title: "Backend Development",
      skills: [
        { 
          name: "Node.js", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
        },
        { 
          name: "Express.js", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
        },
        { 
          name: "MongoDB", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "MySQL", 
          level: 75,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        { 
          name: "REST APIs", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg"
        },
        { 
          name: "Firebase", 
          level: 70,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
      ],
    },
    tools: {
      title: "Tools & Technologies",
      skills: [
        { 
          name: "Git & GitHub", 
          level: 90,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "VS Code", 
          level: 95,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
        },
        { 
          name: "Postman", 
          level: 85,
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
        },
        { 
          name: "Netlify", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg"
        },
        { 
          name: "Vercel", 
          level: 80,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        },
        { 
          name: "NPM", 
          level: 85,
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg"
        },
      ],
    },
    soft: {
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 85 },
        { name: "Communication", level: 80 },
        { name: "Time Management", level: 85 },
        { name: "Adaptability", level: 90 },
        { name: "Critical Thinking", level: 85 },
      ],
    },
  };

  const SkillCard = ({ skill }: { skill: any }) => (
    <div className="card-glass p-6 rounded-xl shadow-card hover:shadow-strong transition-smooth group">
      {skill.logo ? (
        <div className="flex items-center mb-4">
          <img 
            src={skill.logo} 
            alt={skill.name} 
            className="w-12 h-12 mr-4 group-hover:scale-110 transition-transform"
          />
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-1">{skill.name}</h4>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
      ) : (
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2">
            <h4 className="font-semibold text-foreground">{skill.name}</h4>
            <span className="text-sm text-muted-foreground">{skill.level}%</span>
          </div>
        </div>
      )}
      
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              My technical expertise in web development and modern technologies
            </p>
          </div>

          {/* Category Selector */}
          <div className="flex justify-center mb-12">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 p-2 card-glass rounded-2xl">
              {Object.entries(skillCategories).map(([key, category]) => (
                <button
                  key={key}
                  onClick={() => setActiveCategory(key)}
                  className={`px-6 py-3 rounded-xl font-medium transition-smooth ${
                    activeCategory === key
                      ? "gradient-bg text-white shadow-medium"
                      : "hover:bg-muted/50 text-foreground"
                  }`}
                >
                  {category.title}
                </button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="animate-fade-in" key={activeCategory}>
            <h3 className="text-2xl font-semibold mb-8 text-center gradient-text">
              {skillCategories[activeCategory as keyof typeof skillCategories].title}
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
                (skill, index) => (
                  <div
                    key={skill.name}
                    className="animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <SkillCard skill={skill} />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;