import React from 'react';
import { ArrowUp, Heart, Code, Github, Linkedin, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <footer className="relative bg-[#020617] text-slate-300 pt-16 pb-8 border-t border-white/5 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[150px] radial-glow-purple opacity-40 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12 border-b border-white/5">
          
          {/* About Section */}
          <div className="space-y-5">
            <div className="flex items-center space-x-2.5">
              <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-2 rounded-lg">
                <Code className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold text-white font-display">Subhasis Dhara</span>
            </div>
            <p className="text-slate-400 leading-relaxed text-sm">
              Computer Science Engineering student passionate about creating innovative web systems, AI development, 
              and contributing to the open-source developer community.
            </p>
            <div className="flex space-x-3.5 pt-2">
              <a 
                href="https://github.com/Subhasis495" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="GitHub"
              >
                <Github className="w-4.5 h-4.5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/subhasis-dhara-b8b95b323/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4.5 h-4.5" />
              </a>
              <a 
                href="mailto:subhasisdhara41@gmail.com"
                className="bg-slate-900 border border-white/5 text-slate-400 p-2.5 rounded-xl hover:bg-slate-800 hover:text-white transition-all duration-300 hover:shadow-md hover:shadow-blue-500/10"
                aria-label="Email"
              >
                <Mail className="w-4.5 h-4.5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white font-display">Navigation</h3>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                About Me
              </button>
              <button 
                onClick={() => scrollToSection('skills')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('projects')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('achievements')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Milestones
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-slate-400 hover:text-white hover:translate-x-1 transition-all duration-300"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-5">
            <h3 className="text-lg font-bold text-white font-display">Get In Touch</h3>
            <div className="space-y-3.5 text-sm text-slate-400">
              <div className="flex items-center space-x-2.5">
                <span className="text-blue-400 text-base">📧</span>
                <a href="mailto:subhasisdhara41@gmail.com" className="hover:text-white transition-colors">
                  subhasisdhara41@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-green-400 text-base">📍</span>
                <span>Kolkata, India</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-purple-400 text-base">🎓</span>
                <span>B.Tech CSE Student</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <span className="text-yellow-400 text-base">💼</span>
                <span>Open for Opportunities</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & scroll-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 text-sm text-slate-500">
          <p>© {currentYear} Subhasis Dhara. All rights reserved.</p>
          
          <button 
            onClick={scrollToTop}
            className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-slate-900 border border-white/5 text-slate-400 hover:text-white hover:bg-slate-800 transition-all duration-300 group"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;