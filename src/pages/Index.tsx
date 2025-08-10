import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      {/* Unified Stretch Background wrapper starts here */}
      <div className="relative overflow-hidden">
        {/* Shared animated & blurred background elements */}
        <div className="absolute inset-0 pointer-events-none z-0">
          {/* Large blurred circles */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-32 right-16 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.2s' }} />
          <div className="absolute top-60 right-24 w-64 h-64 bg-pink-500/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2.2s' }} />
          {/* Streaks */}
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[1200px] h-32 bg-gradient-to-r from-transparent via-blue-400/20 to-transparent blur-2xl rotate-2 pointer-events-none" />
          {/* Floating small dots */}
          {[...Array(24)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/40 to-purple-400/40 rounded-full animate-pulse"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${Math.random() * 95}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>

        {/* All stretch sections placed here */}
        <div className="relative z-10">
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Achievements />
        </div>
      </div>
      {/* Contact out of background stretch to keep distinction */}
      <Contact />
    </div>
  );
};

export default Index;
