
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Smartphone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Projects = () => {
  const [projectsRef, projectsVisible] = useScrollAnimation(0.1);

  const projects = [
    {
      title: "Stock Inventory System",
      description: "A comprehensive inventory management system with real-time stock tracking, automated low-stock alerts, and detailed reporting capabilities.",
      technologies: ["HTML", "CSS", "JavaScript", "MySQL"],
      features: ["Real-time stock tracking", "Low-stock alerts", "Automated reporting"],
      icon: Zap,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Car Crash Detection System",
      description: "An IoT-based safety system that detects vehicle collisions using sensors and automatically sends emergency alerts with location data.",
      technologies: ["Arduino (C++)", "Twilio", "Map API"],
      features: ["MEMS/GPS sensors", "SMS alerts on collision", "Real-time location tracking"],
      icon: Shield,
      gradient: "from-red-500 to-orange-600"
    },
    {
      title: "Canteen Rush Management System",
      description: "A mobile application to streamline canteen operations with online ordering, QR verification, and digital payment integration.",
      technologies: ["HTML", "CSS", "JavaScript", "Firebase"],
      features: ["Online menu browsing", "Order management", "QR verification", "Digital payments"],
      icon: Smartphone,
      gradient: "from-green-500 to-emerald-600"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* REMOVED: section local background gradient and overlays (now inherits unified background) */}
      <div ref={projectsRef} className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-6xl font-bold text-white mb-6 transition-all duration-1000 ${projectsVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 transition-all duration-1000 delay-200 ${projectsVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-gray-300 mt-4 max-w-3xl mx-auto text-xl transition-all duration-1000 delay-400 ${projectsVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Here are some of the projects I've worked on that showcase my{" "}
            <span className="gradient-text font-medium">technical skills</span> and{" "}
            <span className="gradient-text font-medium">problem-solving abilities</span>.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={index} 
                  className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 bg-black/60 backdrop-blur-lg border-gray-800 hover:border-blue-500/50 hover:scale-105 transition-all duration-1000 ${projectsVisible ? 'animate-fade-in' : 'opacity-0'}`}
                  style={{animationDelay: `${600 + index * 200}ms`}}
                >
                  <div className={`h-2 bg-gradient-to-r ${project.gradient} animate-glow`}></div>
                  
                  <CardHeader className="pb-4">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${project.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 animate-float shadow-xl`}>
                      <IconComponent className="w-10 h-10 text-white" />
                    </div>
                    <CardTitle className="text-2xl text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    <p className="text-gray-300 leading-relaxed text-lg">{project.description}</p>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-3 text-lg">Key Features:</h4>
                      <ul className="text-gray-300 space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3 animate-pulse"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex}
                          className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-300 text-sm px-4 py-2 rounded-full backdrop-blur-sm hover:scale-110 transition-transform duration-200 hover:shadow-lg hover:shadow-blue-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

