import { useState } from "react";
import { Code, Brain, Wrench, Users } from "lucide-react";

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("programming");

  const skillCategories = {
    programming: {
      icon: Code,
      title: "Programming Languages",
      skills: [
        { name: "Python", level: 90 },
        { name: "JavaScript", level: 85 },
        { name: "Java", level: 80 },
        { name: "C++", level: 75 },
        { name: "SQL", level: 85 },
        { name: "R", level: 70 },
      ],
    },
    aiml: {
      icon: Brain,
      title: "AI/ML & Data Science",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 75 },
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
      ],
    },
    tools: {
      icon: Wrench,
      title: "Tools & Technologies",
      skills: [
        { name: "Git & GitHub", level: 90 },
        { name: "Docker", level: 70 },
        { name: "AWS", level: 65 },
        { name: "React", level: 80 },
        { name: "Node.js", level: 75 },
        { name: "MongoDB", level: 80 },
      ],
    },
    soft: {
      icon: Users,
      title: "Soft Skills",
      skills: [
        { name: "Problem Solving", level: 95 },
        { name: "Team Collaboration", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Leadership", level: 80 },
        { name: "Time Management", level: 90 },
        { name: "Adaptability", level: 95 },
      ],
    },
  };

  const ProgressBar = ({ name, level }: { name: string; level: number }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-medium text-foreground">{name}</span>
        <span className="text-sm text-muted-foreground">{level}%</span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className="gradient-bg h-2 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
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
              A comprehensive overview of my technical expertise and capabilities
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Category Selector */}
            <div className="lg:col-span-1">
              <div className="card-glass p-6 rounded-2xl shadow-card">
                <h3 className="text-xl font-semibold mb-6 gradient-text">Skill Categories</h3>
                <div className="space-y-3">
                  {Object.entries(skillCategories).map(([key, category]) => {
                    const IconComponent = category.icon;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveCategory(key)}
                        className={`w-full flex items-center p-3 rounded-lg transition-smooth ${
                          activeCategory === key
                            ? "gradient-bg text-white shadow-medium"
                            : "hover:bg-muted/50 text-foreground"
                        }`}
                      >
                        <IconComponent size={20} className="mr-3" />
                        <span className="font-medium">{category.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Skills Display */}
            <div className="lg:col-span-2">
              <div className="card-glass p-8 rounded-2xl shadow-card min-h-[400px]">
                <div className="animate-fade-in" key={activeCategory}>
                  <h3 className="text-2xl font-semibold mb-6 gradient-text">
                    {skillCategories[activeCategory as keyof typeof skillCategories].title}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    {skillCategories[activeCategory as keyof typeof skillCategories].skills.map(
                      (skill, index) => (
                        <div
                          key={skill.name}
                          className="animate-slide-in"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <ProgressBar name={skill.name} level={skill.level} />
                        </div>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Skills Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-6">
            {Object.entries(skillCategories).map(([key, category]) => {
              const IconComponent = category.icon;
              const avgLevel = Math.round(
                category.skills.reduce((sum, skill) => sum + skill.level, 0) / category.skills.length
              );
              
              return (
                <div
                  key={key}
                  className="text-center p-6 card-glass rounded-xl shadow-soft hover:shadow-medium transition-smooth"
                >
                  <div className="w-16 h-16 gradient-bg rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent size={24} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-foreground mb-2">{category.title}</h4>
                  <div className="text-2xl font-bold gradient-text">{avgLevel}%</div>
                  <div className="text-sm text-muted-foreground">Average Proficiency</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;