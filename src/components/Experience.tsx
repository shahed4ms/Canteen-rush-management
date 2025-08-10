
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Building, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Experience = () => {
  const [experienceRef, experienceVisible] = useScrollAnimation(0.2);

  return (
    <section
      id="experience"
      className="relative py-24"
      style={{ minHeight: "660px" }}
      ref={experienceRef}
    >
      {/* Background Elements removed, now controlled globally */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4 drop-shadow-lg">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-400 mx-auto" />
        </div>
        <div className="max-w-3xl mx-auto">
          {/* Popup Animation for Main Card */}
          <Card className={`border-l-4 border-l-blue-500 shadow-xl hover:shadow-2xl transition-shadow bg-black/60 border-gray-800/70 backdrop-blur-md
            ${experienceVisible ? 'animate-scale-in' : 'opacity-0 scale-95'}`}>
            <CardHeader>
              <CardTitle className="flex items-center text-xl">
                <Building className="w-5 h-5 text-blue-500 mr-3" />
                <span
                  className="inline-block px-3 py-1 rounded-lg font-bold text-white bg-gradient-to-r from-blue-500 via-purple-500 to-teal-400 shadow-lg"
                  style={{ backgroundBlendMode: 'multiply' }}
                >
                  UI/UX Intern
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="font-medium">Litz Tech, Coimbatore</span>
                </div>
                <div className="flex items-center text-gray-300">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>June 2025</span>
                </div>
                <div className="mt-4">
                  <p className="text-gray-300 leading-relaxed">
                    Gained exposure to user interface and user experience design principles through practical sessions. 
                    Developed understanding of design thinking, user research, and creating intuitive digital experiences.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
