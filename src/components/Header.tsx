import React, { useState, useEffect } from 'react';
import { Menu, X, Code, User, FolderOpen, Mail, Trophy, Home } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', name: 'Home', icon: <Home className="w-4 h-4" /> },
    { id: 'about', name: 'About', icon: <User className="w-4 h-4" /> },
    { id: 'skills', name: 'Skills', icon: <Code className="w-4 h-4" /> },
    { id: 'projects', name: 'Projects', icon: <FolderOpen className="w-4 h-4" /> },
    { id: 'achievements', name: 'Achievements', icon: <Trophy className="w-4 h-4" /> },
    { id: 'contact', name: 'Contact', icon: <Mail className="w-4 h-4" /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Simple active section detection
      const scrollPosition = window.scrollY + 150;
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
    setActiveSection(sectionId);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-slate-950/75 backdrop-blur-lg border-b border-white/5 py-3 shadow-2xl shadow-blue-950/10' 
        : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          {/* Logo with Spin Effect on hover */}
          <div 
            onClick={() => scrollToSection('home')} 
            className="flex items-center space-x-2.5 cursor-pointer group"
          >
            <div className="bg-gradient-to-tr from-blue-500 to-purple-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-md shadow-blue-500/20">
              <Code className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent group-hover:to-white transition-all duration-300 font-display">
              Subhasis Dhara
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1.5 bg-slate-900/40 p-1.5 rounded-full border border-white/5 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-1.5 ${
                    isActive 
                      ? 'text-white bg-gradient-to-r from-blue-600/30 to-purple-600/30 shadow-inner border border-white/10' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>
                  {isActive && (
                    <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action: Let's Connect CTA */}
          <div className="hidden md:block">
            <button
              onClick={() => scrollToSection('contact')}
              className="relative group overflow-hidden px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5 active:translate-y-0"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <span className="relative z-10">Let's Connect</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-xl bg-slate-900/60 border border-white/5 text-slate-300 hover:text-white focus:outline-none hover:bg-slate-800/60 transition-colors"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div className={`fixed inset-0 top-[65px] z-40 w-full bg-slate-950/95 backdrop-blur-xl border-t border-white/5 transition-all duration-500 md:hidden ${
        isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}>
        <div className="max-w-7xl mx-auto px-4 py-8 space-y-4">
          <nav className="flex flex-col space-y-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full px-5 py-4 rounded-xl text-base font-semibold flex items-center space-x-4 transition-all duration-300 ${
                    isActive 
                      ? 'bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-white border border-white/10 pl-7' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <span className={`${isActive ? 'text-blue-400' : 'text-slate-500'}`}>
                    {item.icon}
                  </span>
                  <span>{item.name}</span>
                </button>
              );
            })}
          </nav>
          
          <div className="pt-4 border-t border-white/5">
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center hover:opacity-90 transition-opacity"
            >
              Let's Connect
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;