import React, { useState, useEffect, useRef } from 'react';
import { Code, Database, Globe, Smartphone, Brain, Sparkles, GitBranch } from 'lucide-react';

const Skills = () => {
  // Intersection Observer for scroll-triggered progress bars
  const [isVisible, setIsVisible] = useState(false);
  const [animateProgress, setAnimateProgress] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Small delay before starting progress bar fill-in for visual pacing
          setTimeout(() => setAnimateProgress(true), 300);
        }
      },
      { threshold: 0.15 }
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

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: <Code className="w-5 h-5 text-blue-400" />,
      colorClass: 'from-blue-500 to-indigo-500',
      shadowClass: 'shadow-blue-500/10',
      skills: [
        { name: 'Python', level: 85, status: 'Experienced' },
        { name: 'Java', level: 60, status: 'Skillful' },
        { name: 'JavaScript', level: 70, status: 'Skillful' },
        { name: 'HTML/CSS', level: 75, status: 'Skillful' }
      ]
    },
    {
      title: 'Web Development',
      icon: <Globe className="w-5 h-5 text-purple-400" />,
      colorClass: 'from-purple-500 to-pink-500',
      shadowClass: 'shadow-purple-500/10',
      skills: [
        { name: 'React.js', level: 65, status: 'Skillful' },
        { name: 'Frontend Dev', level: 70, status: 'Skillful' },
        { name: 'Responsive Design', level: 72, status: 'Skillful' },
        { name: 'Tailwind CSS', level: 68, status: 'Intermediate' }
      ]
    },
    {
      title: 'Technologies & Tools',
      icon: <Database className="w-5 h-5 text-emerald-400" />,
      colorClass: 'from-emerald-500 to-teal-500',
      shadowClass: 'shadow-emerald-500/10',
      skills: [
        { name: 'Git & GitHub', level: 70, status: 'Daily Use' },
        { name: 'VS Code', level: 80, status: 'Daily Use' },
        { name: 'Node.js', level: 45, status: 'Intermediate' }
      ]
    }
  ];

  const interests = [
    { name: 'Artificial Intelligence', icon: <Brain className="w-5 h-5" />, glowColor: 'group-hover:shadow-purple-500/30 border-purple-500/20 text-purple-400 bg-purple-500/10' },
    { name: 'App Development', icon: <Smartphone className="w-5 h-5" />, glowColor: 'group-hover:shadow-emerald-500/30 border-emerald-500/20 text-emerald-400 bg-emerald-500/10' },
    { name: 'Open Source', icon: <GitBranch className="w-5 h-5" />, glowColor: 'group-hover:shadow-orange-500/30 border-orange-500/20 text-orange-400 bg-orange-500/10' },
    { name: 'Problem Solving', icon: <Code className="w-5 h-5" />, glowColor: 'group-hover:shadow-blue-500/30 border-blue-500/20 text-blue-400 bg-blue-500/10' }
  ];

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] radial-glow-blue opacity-15 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Sparkles className="w-4.5 h-4.5 text-blue-400" />
            <span>Tech Toolbox</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Skills & Expertise
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A breakdown of my programming capabilities, technical utilities, and foundational software engineering skills.
          </p>
        </div>

        {/* Skill Cards Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`glass-panel p-6 sm:p-8 rounded-3xl glow-card hover:shadow-2xl ${category.shadowClass} transition-shadow duration-300`}
            >
              <div className="flex items-center space-x-3.5 mb-8">
                <div className="bg-slate-900/80 border border-white/5 p-3 rounded-2xl">
                  {category.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white font-display">{category.title}</h3>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-xs font-semibold text-slate-400 bg-slate-900/80 border border-white/5 px-2.5 py-1 rounded-lg">
                        {skill.status}
                      </span>
                    </div>
                    
                    {/* Progress Track */}
                    <div className="w-full bg-slate-950 rounded-full h-2.5 overflow-hidden border border-white/5">
                      <div 
                        className={`bg-gradient-to-r ${category.colorClass} h-full rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: animateProgress ? `${skill.level}%` : '0%' }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Areas of Interest */}
        <div className={`glass-panel p-8 sm:p-10 rounded-3xl glow-card mb-12 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-8 text-center font-display">
            Areas of Interest
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <div key={index} className="text-center group cursor-pointer">
                {/* Glowing Circle */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 border transition-all duration-500 transform group-hover:scale-110 group-hover:shadow-lg ${interest.glowColor}`}>
                  {interest.icon}
                </div>
                <p className="text-slate-300 font-medium text-sm sm:text-base group-hover:text-white transition-colors">
                  {interest.name}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Currently Learning Panel */}
        <div className={`glass-panel p-8 sm:p-10 rounded-3xl glow-card bg-gradient-to-r from-slate-950/60 via-slate-900/60 to-blue-950/20 text-center transition-all duration-1000 delay-400 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">Currently Learning</h3>
          <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-xl mx-auto">
            I'm continuously expanding my horizons to master cloud engineering, complex data systems, and algorithmic designs.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {['Java Advanced Concepts', 'AI Agents', 'Data Structures & Algorithms', 'AI/ML Core Basics', 'Database Engine Design'].map((item, index) => (
              <span 
                key={index} 
                className="bg-blue-500/10 border border-blue-500/20 text-blue-400 px-4.5 py-2 rounded-2xl text-xs sm:text-sm font-semibold hover:bg-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                {item}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;