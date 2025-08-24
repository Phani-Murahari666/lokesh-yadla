const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="w-24 h-1 gradient-bg mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="animate-slide-in">
              <h3 className="text-2xl font-semibold mb-6 text-foreground">
                Passionate about AI & Machine Learning
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated B.Tech student specializing in Artificial Intelligence and Machine Learning, 
                  driven by a passion for creating intelligent solutions that can make a real difference in the world.
                </p>
                
                <p>
                  My journey in tech began with curiosity about how machines can learn and adapt. 
                  Since then, I've been exploring various domains including computer vision, natural language processing, 
                  and deep learning architectures.
                </p>
                
                <p>
                  When I'm not coding, you'll find me reading research papers, contributing to open-source projects, 
                  or experimenting with the latest AI frameworks. I believe in continuous learning and staying 
                  updated with the rapidly evolving field of artificial intelligence.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">15+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">3.8</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2024</div>
                  <div className="text-sm text-muted-foreground">Graduation Year</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="animate-scale-in">
              <div className="relative">
                {/* Main card */}
                <div className="card-glass p-8 rounded-2xl shadow-card">
                  <h4 className="text-xl font-semibold mb-4 gradient-text">Academic Focus</h4>
                  <ul className="space-y-3">
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      Machine Learning Algorithms
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      Deep Neural Networks
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      Computer Vision
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      Natural Language Processing
                    </li>
                    <li className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 gradient-bg rounded-full mr-3"></div>
                      Data Science & Analytics
                    </li>
                  </ul>
                </div>

                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 gradient-bg rounded-full opacity-20 animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-secondary/20 rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;