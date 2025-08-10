import { Card, CardContent } from "@/components/ui/card";
import { Award, FileText, Trophy, Star } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      title: "Digital Skills: User Experience",
      organization: "Accenture",
      type: "Course",
      icon: Award,
      color: "bg-indigo-500"
    },
    {
      title: "Basic Certification in Swift",
      organization: "Great Learning",
      type: "Certification",
      icon: Award,
      color: "bg-yellow-500"
    },
    {
      title: "Basic Certification in Java",
      organization: "Great Learning", 
      type: "Certification",
      icon: Award,
      color: "bg-blue-500"
    },
    {
      title: "Diploma in Computer Application",
      organization: "NIRDS",
      type: "Diploma",
      icon: FileText,
      color: "bg-green-500"
    },
    {
      title: "SUITS Certification in C Programming",
      organization: "Bharathidasan University",
      type: "Certification",
      icon: Star,
      color: "bg-purple-500"
    },
    {
      title: "SUITS Certification in Graphic Designing",
      organization: "Bharathidasan University",
      type: "Certification",
      icon: Trophy,
      color: "bg-red-500"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Achievements & Certifications</h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Recognition of my commitment to continuous learning and skill development in various technology domains.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => {
              const IconComponent = achievement.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow border-l-4 border-l-blue-500 bg-gray-900 border-gray-800">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`w-12 h-12 ${achievement.color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-white mb-1 leading-tight">
                          {achievement.title}
                        </h3>
                        <p className="text-blue-400 font-medium text-sm mb-1">
                          {achievement.organization}
                        </p>
                        <span className="inline-block bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">
                          {achievement.type}
                        </span>
                      </div>
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

export default Achievements;
