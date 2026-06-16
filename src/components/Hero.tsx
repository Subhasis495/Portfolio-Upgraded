import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Download, MapPin, Calendar, ArrowRight } from 'lucide-react';

const Hero = () => {
  // Typewriter effect state
  const words = [
    "Computer Science Engineer",
    "Aspiring Software Developer",
    "AI & Web Dev Enthusiast",
    "Tech Problem Solver"
  ];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleTyping = () => {
      const fullWord = words[currentWordIndex];
      if (!isDeleting) {
        // Typing characters
        setCurrentText(fullWord.substring(0, currentText.length + 1));
        setTypingSpeed(100);

        if (currentText === fullWord) {
          // Pause at the end of word
          timer = setTimeout(() => setIsDeleting(true), 2000);
          return;
        }
      } else {
        // Deleting characters
        setCurrentText(fullWord.substring(0, currentText.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/MY RESUME.pdf'; 
    link.download = 'MY RESUME.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section 
      id="home" 
      className="relative pt-32 pb-20 bg-gradient-to-b from-slate-950 via-slate-900 to-[#030712] min-h-screen flex items-center overflow-hidden"
    >
      {/* Decorative Radial Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] radial-glow-blue opacity-30 pointer-events-none -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] radial-glow-purple opacity-30 pointer-events-none translate-x-1/2 translate-y-1/2" />
      
      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Info Column (7/12 cols on large screen) */}
          <div className="space-y-8 lg:col-span-7 text-left">
            <div className="space-y-4">
              
              {/* Salutation with Glow */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold tracking-wide">
                <span>👋 Welcome to my Portfolio</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-500 bg-clip-text text-transparent">Subhasis Dhara</span>
              </h1>
              
              {/* Typewriter text wrapper */}
              <div className="h-10 sm:h-12 flex items-center">
                <p className="text-lg sm:text-2xl text-slate-300 font-medium font-display">
                  I am a <span className="text-blue-400 border-r-2 border-blue-400 pr-1 animate-pulse">{currentText}</span>
                </p>
              </div>

              {/* Quick Info Badges */}
              <div className="flex flex-wrap gap-4 pt-2 text-sm text-slate-400">
                <div className="flex items-center space-x-2 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-xl">
                  <MapPin className="w-4 h-4 text-blue-400" />
                  <span>Kolkata, India</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-900/60 border border-white/5 px-3 py-1.5 rounded-xl">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>Born March 30, 2005</span>
                </div>
              </div>
            </div>
            
            <p className="text-base sm:text-lg text-slate-400 leading-relaxed max-w-xl">
              I'm a passionate B.Tech student, exploring the fascinating world of web development, AI agents, and building innovative tech solutions. Currently diving deep into Python, Java, and full stack technologies.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={handleDownloadCV}
                className="group flex items-center space-x-2 bg-slate-900 border border-white/10 text-slate-200 hover:text-white px-6 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 hover:bg-slate-800 hover:border-white/20 hover:-translate-y-0.5"
              >
                <Download className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                <span>Download CV</span>
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex items-center space-x-4 pt-4">
              <span className="text-xs font-semibold text-slate-500 uppercase tracking-widest mr-2">Profiles</span>
              <a 
                href="https://github.com/Subhasis495" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="GitHub Profile"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/subhasis-dhara-b8b95b323/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:subhasisdhara41@gmail.com" 
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="Send Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Graphic Column (5/12 cols on large screen) */}
          <div className="lg:col-span-5 flex justify-center relative pt-8 lg:pt-0">
            <div className="relative">
              
              {/* Outer Glowing Background circle */}
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-600 rounded-full blur-[40px] opacity-20 animate-pulse-glow" />

              {/* Profile Picture Container with Dual ring gradients */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 bg-gradient-to-tr from-blue-500 via-indigo-600 to-purple-500 rounded-full p-[3px] shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <div className="w-full h-full bg-[#030712] rounded-full p-1.5 overflow-hidden">
                  <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                    <img 
                      src="/my_best.jpg" 
                      alt="Subhasis Dhara" 
                      className="w-full h-full object-cover object-center scale-[1.05] hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Floating Languages Badges with specialized float durations */}
              
              {/* Java Badge - Float Slow */}
              <div className="absolute -top-3 -right-3 px-4 py-2 bg-slate-950/80 border border-amber-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/5 animate-float-slow group cursor-pointer hover:border-amber-500/50 transition-colors">
                <span className="text-sm font-bold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent font-display">Java</span>
              </div>
              
              {/* Python Badge - Float Medium */}
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-slate-950/80 border border-green-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/5 animate-float-medium group cursor-pointer hover:border-green-500/50 transition-colors">
                <span className="text-sm font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent font-display">Python</span>
              </div>
              
              {/* React Badge - Float Fast */}
              <div className="absolute top-1/2 -left-10 px-4 py-2 bg-slate-950/80 border border-cyan-500/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/5 animate-float-fast group cursor-pointer hover:border-cyan-500/50 transition-colors">
                <span className="text-sm font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-display">React</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;