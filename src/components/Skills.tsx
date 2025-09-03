const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "🌐",
      skills: [
        { 
          name: "HTML", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
        },
        { 
          name: "CSS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
        },
        { 
          name: "JavaScript", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
        },
        { 
          name: "React", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
        },
        { 
          name: "Tailwind CSS", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg"
        },
        { 
          name: "Bootstrap", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
        },
      ],
    },
    {
      title: "Backend Development",
      icon: "🗄️",
      skills: [
        { 
          name: "PHP", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
        },
      ],
    },
    {
      title: "Intermediate Programming",
      icon: "</>",
      skills: [
        { 
          name: "Python", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
        },
        { 
          name: "Java", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
        },
        { 
          name: "DSA", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
        },
      ],
    },
    {
      title: "Database",
      icon: "🗃️",
      skills: [
        { 
          name: "MongoDB", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg"
        },
        { 
          name: "MySQL", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
        },
        { 
          name: "Firebase", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
      ],
    },
    {
      title: "Version Control",
      icon: "📚",
      skills: [
        { 
          name: "Git", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
        },
        { 
          name: "GitHub", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
        },
      ],
    },
    {
      title: "Deployment",
      icon: "☁️",
      skills: [
        { 
          name: "Vercel", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg"
        },
        { 
          name: "Firebase", 
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
        },
        { 
          name: "Render", 
          logo: "https://www.vectorlogo.zone/logos/render/render-icon.svg"
        },
      ],
    },
  ];

  const SkillIcon = ({ skill }: { skill: any }) => (
    <div className="flex flex-col items-center p-4 group">
      <img 
        src={skill.logo} 
        alt={skill.name} 
        className="w-12 h-12 mb-2 group-hover:scale-110 transition-transform"
      />
      <span className="text-sm font-medium text-foreground text-center">{skill.name}</span>
    </div>
  );

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <p className="text-sm font-semibold gradient-text mb-2 uppercase tracking-wider">TECHNICAL SKILLSET</p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              My <span className="gradient-text">Skills</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={category.title}
                className="card-glass p-8 rounded-2xl shadow-card hover:shadow-strong transition-smooth animate-scale-in group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Category Header */}
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white text-xl mr-4">
                    {category.icon}
                  </div>
                  <h3 className="text-lg font-bold text-foreground group-hover:gradient-text transition-smooth">
                    {category.title}
                  </h3>
                </div>

                {/* Skills Icons */}
                <div className="grid grid-cols-3 gap-4">
                  {category.skills.map((skill) => (
                    <SkillIcon key={skill.name} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;