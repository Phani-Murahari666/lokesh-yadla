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
                Passionate about Web Development & MERN Stack
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a dedicated B.Tech student at GIET Engineering College, Rajahmundry, graduating in 2027. 
                  With a strong academic performance (CGPA: 7.5/10), I'm passionate about web development 
                  and the MERN stack, building innovative web applications.
                </p>
                
                <p>
                  I focus on creating responsive, user-friendly applications using modern technologies. 
                  I've completed 2+ projects and continuously expand my skills in full-stack development, 
                  always eager to learn new technologies and frameworks.
                </p>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">7.5</div>
                  <div className="text-sm text-muted-foreground">CGPA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">10+</div>
                  <div className="text-sm text-muted-foreground">Technologies</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">2027</div>
                  <div className="text-sm text-muted-foreground">Graduation Year</div>
                </div>
              </div>
            </div>

            {/* Visual Elements */}
            <div className="animate-scale-in">
              <div className="relative">
                {/* Profile image placeholder */}
                <div className="card-glass p-8 rounded-2xl shadow-card text-center">
                  <div className="w-32 h-32 gradient-bg rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">LY</span>
                  </div>
                  <h4 className="text-xl font-semibold gradient-text">Web Developer</h4>
                  <p className="text-muted-foreground mt-2">Building innovative solutions</p>
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