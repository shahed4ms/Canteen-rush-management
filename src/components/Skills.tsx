
import { Card, CardContent } from "@/components/ui/card";
import { Code, Globe, Zap, Star, Figma, FileText } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "C", level: 85 },
        { name: "Python", level: 70 },
        { name: "Java", level: 75 },
        { name: "R", level: 70 },
        { name: "SQL", level: 60 }
      ],
      color: "from-blue-500 to-cyan-500",
      accent: "blue"
    },
    {
      title: "Web Technologies",
      icon: Globe,
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 70 }
      ],
      color: "from-green-500 to-emerald-500",
      accent: "green"
    },
    {
      title: "UI/UX Design",
      icon: Figma,
      skills: [
        { name: "Figma", level: 90 }
      ],
      color: "from-purple-500 to-pink-500",
      accent: "purple"
    },
    {
      title: "Productivity Tools",
      icon: FileText,
      skills: [
        { name: "MS Excel", level: 75 }
      ],
      color: "from-orange-500 to-red-500",
      accent: "orange"
    }
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      {/* Background Elements removed, now controlled globally */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent animate-fade-in">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-4 animate-scale-in" style={{animationDelay: '0.2s'}}></div>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto animate-slide-up" style={{animationDelay: '0.4s'}}>
            Crafting digital experiences with cutting-edge technologies
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="group relative overflow-hidden bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 animate-fade-in" style={{animationDelay: `${index * 0.3}s`}}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                  
                  <CardContent className="p-8 relative z-10">
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300 shadow-lg animate-scale-in`} style={{animationDelay: `${index * 0.3 + 0.2}s`}}>
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300 animate-slide-up" style={{animationDelay: `${index * 0.3 + 0.4}s`}}>
                          {category.title}
                        </h3>
                        <div className="flex items-center mt-1 animate-fade-in" style={{animationDelay: `${index * 0.3 + 0.6}s`}}>
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400 animate-pulse" style={{animationDelay: `${index * 0.3 + 0.8 + i * 0.1}s`}} />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="group/skill">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-gray-300 font-medium group-hover/skill:text-white transition-colors duration-200 animate-slide-up" style={{animationDelay: `${index * 0.3 + 1 + skillIndex * 0.1}s`}}>
                              {skill.name}
                            </span>
                            <span className="text-sm text-gray-400 animate-fade-in" style={{animationDelay: `${index * 0.3 + 1.2 + skillIndex * 0.1}s`}}>
                              {skill.level}%
                            </span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                            <div 
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out hover:shadow-lg animate-scale-in`}
                              style={{
                                width: `${skill.level}%`,
                                animationDelay: `${index * 0.3 + 1.4 + skillIndex * 0.2}s`
                              }}
                            ></div>
                          </div>
                        </div>
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

export default Skills;
