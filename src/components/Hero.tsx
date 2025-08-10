import { Button } from "@/components/ui/button";
import { ArrowDown, Sparkles, Code, Zap, Globe, Star, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Hero = () => {
  const [heroRef, heroVisible] = useScrollAnimation(0.1);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-40 right-40 w-64 h-64 bg-gradient-to-r from-green-500/25 to-emerald-500/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
        <div className="absolute bottom-40 left-40 w-72 h-72 bg-gradient-to-r from-pink-500/25 to-rose-500/25 rounded-full blur-2xl animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>
      
      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Enhanced Floating Icons */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 left-16 animate-float" style={{animationDelay: '1s'}}>
          <Code className="w-8 h-8 text-blue-400/50" />
        </div>
        <div className="absolute top-64 right-24 animate-float" style={{animationDelay: '2s'}}>
          <Zap className="w-6 h-6 text-purple-400/50" />
        </div>
        <div className="absolute bottom-48 left-32 animate-float" style={{animationDelay: '0.5s'}}>
          <Globe className="w-7 h-7 text-green-400/50" />
        </div>
        <div className="absolute top-48 right-16 animate-float" style={{animationDelay: '3s'}}>
          <Sparkles className="w-5 h-5 text-yellow-400/50" />
        </div>
        <div className="absolute bottom-32 right-32 animate-float" style={{animationDelay: '1.5s'}}>
          <Star className="w-6 h-6 text-pink-400/50" />
        </div>
        <div className="absolute top-20 right-20 animate-float" style={{animationDelay: '2.5s'}}>
          <Rocket className="w-7 h-7 text-cyan-400/50" />
        </div>
      </div>
      
      {/* REMOVED FADE-OUT GRADIENT: bottom of hero fades into About section */}
      {/* <div className="pointer-events-none absolute left-0 right-0 bottom-0 h-40 z-20"
        style={{
          background: "linear-gradient(to bottom, rgba(0,0,0,0) 0%, #000 90%)"
        }}
      /> */}

      <div className="container mx-auto px-4 text-center z-10 relative">
        
        
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight flex flex-col items-center">
            <span
              className={`inline-block text-2xl md:text-3xl lg:text-4xl font-semibold text-white transition-all duration-1000 delay-200 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ letterSpacing: '0.04em' }}
            >
              Mohammad
            </span>
            <span
              className={`inline-block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent font-extrabold text-5xl md:text-7xl lg:text-8xl transition-all duration-1000 delay-300 ${heroVisible ? 'animate-slide-up' : 'opacity-0 translate-y-10'}`}
              style={{ lineHeight: 1.1 }}
            >
              SHAHED
            </span>
          </h1>
        </div>
        
        <div className={`mb-8 transition-all duration-1000 delay-400 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl text-gray-300">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent font-semibold">
              Engineering Student
            </span>
            <span className="hidden md:block text-gray-600">•</span>
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
              Frontend and UI/UX Designer
            </span>
          </div>
        </div>
        
        <div className={`mb-12 transition-all duration-1000 delay-600 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed text-lg">
            Passionate about <span className="text-blue-400 font-medium">technology</span> and committed to building{" "}
            <span className="text-purple-400 font-medium">innovative solutions</span> through continuous learning{" "}
            and <span className="text-green-400 font-medium">hands-on experience</span>.
          </p>
        </div>
        
        <div className={`flex flex-col sm:flex-row gap-6 justify-center mb-16 transition-all duration-1000 delay-800 ${heroVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-10 py-4 text-lg rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 group"
          >
            <span className="mr-3">Explore My Work</span>
            <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          <Button 
            onClick={() => scrollToSection('contact')}
            variant="outline" 
            className="border-2 border-blue-400/60 text-blue-400 hover:bg-blue-400/20 hover:text-blue-300 hover:border-blue-300 px-10 py-4 text-lg rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </Button>
        </div>
        
        <div className={`animate-bounce transition-all duration-1000 delay-1000 ${heroVisible ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-10 h-10 mx-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center animate-pulse shadow-lg">
            <ArrowDown className="w-5 h-5 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
