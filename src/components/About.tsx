import React, { useState, useEffect, useRef } from 'react';
import { GraduationCap, Code, Target, Heart, Sparkles, MapPin } from 'lucide-react';

const About = () => {
  // Intersection Observer for scroll reveal
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Compute exact age from birthdate (March 30, 2005)
  const calculateAge = () => {
    const birthDate = new Date('2005-03-30');
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  };

  const journeySteps = [
    {
      title: "Started Programming",
      desc: "Began my coding journey with C and Python, building foundational command-line tools.",
      color: "from-blue-500 to-indigo-500",
      accent: "border-blue-500/20 text-blue-400"
    },
    {
      title: "Expanded Skillset",
      desc: "Currently mastering Advanced Java, exploring Machine Learning and Data Science fundamentals.",
      color: "from-purple-500 to-pink-500",
      accent: "border-purple-500/20 text-purple-400"
    },
    {
      title: "Building Applications",
      desc: "Developed interactive Pygame applications, frontend web utilities, and script tools.",
      color: "from-emerald-500 to-teal-500",
      accent: "border-emerald-500/20 text-emerald-400"
    },
    {
      title: "Future Horizons",
      desc: "Aspiring to design production-level AI agents and specialize in secure full-stack cloud architectures.",
      color: "from-amber-500 to-orange-500",
      accent: "border-amber-500/20 text-amber-400"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      {/* Decorative Blur Backgrounds */}
      <div className="absolute top-1/3 right-0 w-[400px] h-[400px] radial-glow-purple opacity-20 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-[300px] h-[300px] radial-glow-blue opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4.5 h-4.5 text-purple-400 animate-spin-slow" />
            <span>Discover my story</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            About Me
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A deep-dive into my academic background, technical pathway, interests, and professional vision.
          </p>
        </div>

        {/* Content Grid */}
        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Left Column (Academic & Details) (7/12 cols) */}
          <div className="space-y-8 lg:col-span-7">
            
            {/* Education Timeline Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card relative">
              <div className="flex items-center space-x-3.5 mb-6">
                <div className="bg-blue-500/10 p-2.5 rounded-xl border border-blue-500/20">
                  <GraduationCap className="w-6 h-6 text-blue-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Academic Background</h3>
              </div>

              <div className="space-y-6 border-l border-white/5 pl-4 sm:pl-6 ml-2 sm:ml-3">
                {/* College Education */}
                <div className="relative">
                  <span className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3 h-3 bg-blue-400 rounded-full ring-4 ring-blue-500/20" />
                  <div className="hover:-translate-y-0.5 transition-transform">
                    <h4 className="font-semibold text-white text-base sm:text-lg">B.Tech in Computer Science Engineering</h4>
                    <p className="text-blue-400 text-sm font-medium">Brainware University, Kolkata</p>
                    <div className="flex justify-between items-center mt-1">
                      <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">3rd Year (2023 - 2027)</span>
                    </div>
                  </div>
                </div>

                {/* Higher Secondary */}
                <div className="relative">
                  <span className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3 h-3 bg-purple-400 rounded-full ring-4 ring-purple-500/20" />
                  <div className="hover:-translate-y-0.5 transition-transform">
                    <h4 className="font-semibold text-white text-base sm:text-lg">Higher Secondary Examination</h4>
                    <p className="text-purple-400 text-sm font-medium">Jadavpur N.K. Pal High School, Kolkata</p>
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Science Stream (2021 - 2023)</span>
                  </div>
                </div>

                {/* Secondary */}
                <div className="relative">
                  <span className="absolute -left-[27px] sm:-left-[35px] top-1.5 w-3 h-3 bg-indigo-400 rounded-full ring-4 ring-indigo-500/20" />
                  <div className="hover:-translate-y-0.5 transition-transform">
                    <h4 className="font-semibold text-white text-base sm:text-lg">Secondary Examination</h4>
                    <p className="text-indigo-400 text-sm font-medium">Panchasayar Siksha Niketan, Kolkata</p>
                    <span className="text-xs text-slate-500 font-semibold tracking-wider uppercase">Graduated (2015 - 2021)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Career Goals */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card">
              <div className="flex items-center space-x-3.5 mb-4">
                <div className="bg-emerald-500/10 p-2.5 rounded-xl border border-emerald-500/20">
                  <Target className="w-5 h-5 text-emerald-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Career Goals</h3>
              </div>
              <p className="text-slate-400 leading-relaxed text-sm sm:text-base">
                To build high-performance software systems specializing in full-stack development and autonomous AI agents. 
                My roadmap focuses on joining dynamic teams working on scalable backend architectures and machine learning systems 
                that solve complex, real-world problems.
              </p>
            </div>

            {/* Interests Section */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card">
              <div className="flex items-center space-x-3.5 mb-5">
                <div className="bg-pink-500/10 p-2.5 rounded-xl border border-pink-500/20">
                  <Heart className="w-5 h-5 text-pink-400" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-display">Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {['Web Systems', 'Artificial Intelligence', 'App Architecture', 'Tech Projects', 'Data Structure & Algorithms', 'Open Source'].map((interest, idx) => (
                  <span 
                    key={idx} 
                    className="bg-slate-900/80 border border-white/5 px-4 py-2 rounded-2xl text-xs sm:text-sm font-medium text-slate-300 hover:text-white hover:border-purple-500/30 hover:bg-slate-800/80 transition-all duration-300 transform hover:scale-105"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Journey timeline & Stats grid) (5/12 cols) */}
          <div className="space-y-8 lg:col-span-5">
            
            {/* My Journey Timeline */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card bg-gradient-to-br from-slate-900/60 via-slate-950/60 to-purple-950/20">
              <h3 className="text-2xl font-bold text-white mb-6 font-display">My Learning Path</h3>
              
              <div className="space-y-6 relative">
                <div className="absolute left-[9px] top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-amber-500 opacity-30" />
                
                {journeySteps.map((step, idx) => (
                  <div key={idx} className="flex items-start space-x-4 relative group">
                    {/* Bullet circle with color */}
                    <div className="w-5 h-5 rounded-full bg-slate-950 border-2 border-slate-700 flex items-center justify-center z-10 group-hover:scale-110 transition-transform">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${step.color}`} />
                    </div>
                    
                    <div className="space-y-1">
                      <h4 className="font-semibold text-white text-sm sm:text-base group-hover:text-blue-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Facts Metrics */}
            <div className="glass-panel p-6 rounded-3xl glow-card bg-slate-950">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-5 font-display text-center">Quick Facts</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {/* Fact 1 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-center hover:bg-slate-900 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent font-display">
                    4th
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase mt-1">
                    Year Student
                  </div>
                </div>

                {/* Fact 2 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-center hover:bg-slate-900 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-display">
                    {calculateAge()}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase mt-1">
                    Years Old
                  </div>
                </div>

                {/* Fact 3 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-center hover:bg-slate-900 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent font-display">
                    10+
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase mt-1">
                    Projects Built
                  </div>
                </div>

                {/* Fact 4 */}
                <div className="bg-slate-900/50 border border-white/5 rounded-2xl p-4 text-center hover:bg-slate-900 transition-colors">
                  <div className="text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-display">
                    3
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase mt-1">
                    NPTEL Certificate
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default About;