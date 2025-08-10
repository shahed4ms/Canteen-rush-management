
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, MapPin, Calendar, User, Target } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const About = () => {
  const [aboutRef, aboutVisible] = useScrollAnimation(0.2);

  return (
    <section id="about" className="py-24 relative overflow-hidden" ref={aboutRef}>
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <h2 className={`text-6xl font-bold text-white mb-6 transition-all duration-1000 ${aboutVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-white via-blue-300 to-purple-300 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className={`w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mb-6 transition-all duration-1000 delay-200 ${aboutVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'}`}></div>
          <p className={`text-gray-300 text-lg max-w-3xl mx-auto transition-all duration-1000 delay-400 ${aboutVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            Passionate about creating innovative solutions through technology
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          {/* Popup Animation for Main Card */}
          <Card className={`border-l-4 border-l-blue-500 shadow-xl hover:shadow-2xl transition-shadow bg-black/60 border-gray-800/70 backdrop-blur-md 
            ${aboutVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <CardContent className="p-10">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <div className={`space-y-8 transition-all duration-1000 delay-600 ${aboutVisible ? 'animate-slide-in-left' : 'opacity-0 -translate-x-10'}`}>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">My Journey</h3>
                      <p className="text-gray-300 leading-relaxed mb-4">
                        I am an engineering student pursuing my 3rd year in <span className="text-blue-400 font-medium">B.Tech Computer Science and Business Systems</span> at Dr.N.G.P Institute of Technology, Coimbatore. I'm a passionate and motivated student eager to explore and learn in the field of technology.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white mb-4">Vision & Goals</h3>
                      <p className="text-gray-300 leading-relaxed">
                        Open to new challenges, adaptable to emerging trends, and committed to building a strong skillset for future career growth. Enthusiastic about <span className="text-green-400 font-medium">continuous learning</span>, <span className="text-purple-400 font-medium">innovation</span>, and hands-on experience to develop a robust professional profile.
                      </p>
                    </div>
                  </div>
                </div>
                <Card className={`border-l-4 border-l-blue-500 bg-black/40 backdrop-blur-sm border-gray-800 hover:border-gray-600 transition-all duration-500 hover:scale-105 transition-all duration-1000 delay-800 ${aboutVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-10'}`}>
                  <CardContent className="p-8">
                    <h4 className="text-2xl font-semibold text-white mb-6 flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center mr-4">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      Education
                    </h4>
                    <div className="space-y-6">
                      <div className="p-6 bg-gray-900/50 rounded-lg border border-gray-800">
                        <h5 className="font-medium text-white text-lg mb-3">B.Tech - Computer Science and Business Systems</h5>
                        <div className="space-y-2">
                          <div className="flex items-center text-gray-300">
                            <MapPin className="w-4 h-4 mr-2 text-blue-400" />
                            <span>Dr.N.G.P Institute of Technology, Coimbatore</span>
                          </div>
                          <div className="flex items-center text-gray-300">
                            <Calendar className="w-4 h-4 mr-2 text-green-400" />
                            <span>2023 – Present</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
