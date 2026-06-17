import React, { useState, useEffect, useRef } from 'react';
import { Award, Calendar, Trophy, BookOpen, Code, Star, Sparkles, ChevronRight } from 'lucide-react';

const Achievements = () => {
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

  const achievements = [
    {
      title: 'NPTEL Python Certification',
      description: 'Successfully completed the prestigious NPTEL Python programming certification with top performance recognition.',
      date: '2025',
      icon: <BookOpen className="w-5 h-5" />,
      category: 'Certification',
      glowColor: 'from-blue-500 to-indigo-500',
      badgeClass: 'text-blue-400 bg-blue-400/10 border-blue-500/20',
      nodeColor: 'bg-blue-500 text-white shadow-blue-500/30'
    },
    {
      title: 'First Python Project Launch',
      description: 'Programmed an interactive 2D arcade system using Python Pygame, establishing foundational structures in game architectures.',
      date: '2024',
      icon: <Code className="w-5 h-5" />,
      category: 'Milestone',
      glowColor: 'from-green-500 to-emerald-500',
      badgeClass: 'text-green-400 bg-green-400/10 border-green-500/20',
      nodeColor: 'bg-green-500 text-white shadow-green-500/30'
    },
    {
      title: 'Frontend Development Launch',
      description: 'Started engineering modern single-page applications using React, HTML5, CSS3, JavaScript ES6, and styling libraries.',
      date: '2024',
      icon: <Star className="w-5 h-5" />,
      category: 'Learning',
      glowColor: 'from-purple-500 to-pink-500',
      badgeClass: 'text-purple-400 bg-purple-400/10 border-purple-500/20',
      nodeColor: 'bg-purple-500 text-white shadow-purple-500/30'
    },
    {
      title: 'Portfolio Website Launch',
      description: 'Designed and deployed a responsive developer portfolio website showcasing my custom projects and academic stats.',
      date: '2026',
      icon: <Trophy className="w-5 h-5" />,
      category: 'Project',
      glowColor: 'from-orange-500 to-amber-500',
      badgeClass: 'text-orange-400 bg-orange-400/10 border-orange-500/20',
      nodeColor: 'bg-orange-500 text-white shadow-orange-500/30'
    },
    {
      title: 'Open Source Contributions',
      description: 'Began building public repositories, making pull requests, and maintaining code repositories on GitHub.',
      date: '2024',
      icon: <Award className="w-5 h-5" />,
      category: 'Contribution',
      glowColor: 'from-indigo-500 to-blue-500',
      badgeClass: 'text-indigo-400 bg-indigo-400/10 border-indigo-500/20',
      nodeColor: 'bg-indigo-500 text-white shadow-indigo-500/30'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '10+', textGlow: 'from-blue-400 to-indigo-400', shadow: 'shadow-blue-500/5' },
    { label: 'Technologies Learned', value: '10+', textGlow: 'from-green-400 to-emerald-400', shadow: 'shadow-emerald-500/5' },
    { label: 'GitHub Repositories', value: '30+', textGlow: 'from-purple-400 to-pink-400', shadow: 'shadow-purple-500/5' },
    { label: 'Certifications', value: '30+', textGlow: 'from-orange-400 to-amber-400', shadow: 'shadow-orange-500/5' }
  ];

  const futureGoals = [
    {
      title: "Advanced Certifications",
      desc: "Acquire specialized industry credentials in Advanced Java frameworks, React architectures, and AI/ML model deployment.",
      icon: <BookOpen className="w-5 h-5 text-purple-400" />
    },
    {
      title: "Full-Stack Platforms",
      desc: "Build massive, microservices-driven full-stack architectures utilizing Node, Express, MongoDB, and secure API gateways.",
      icon: <Code className="w-5 h-5 text-blue-400" />
    },
    {
      title: "Open Source Engagement",
      desc: "Devise helper utilities and contribute code blocks to popular opensource projects, packages, and frameworks.",
      icon: <Trophy className="w-5 h-5 text-amber-400" />
    }
  ];

  return (
    <section 
      id="achievements" 
      ref={sectionRef}
      className="py-24 bg-[#020617] relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] radial-glow-blue opacity-15 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] radial-glow-purple opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-20 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs sm:text-sm font-semibold mb-4">
            <Trophy className="w-4.5 h-4.5 text-purple-400" />
            <span>Success Stories</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Achievements & Milestones
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A snapshot of completed milestones, academic metrics, and ongoing learning credentials.
          </p>
        </div>

        {/* Stats Counter Grid */}
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 transition-all duration-1000 delay-150 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`glass-panel p-6 rounded-3xl glow-card text-center hover:scale-[1.02] transition-transform duration-300 ${stat.shadow}`}
            >
              <div className={`text-3xl sm:text-4xl font-extrabold bg-gradient-to-r ${stat.textGlow} bg-clip-text text-transparent font-display mb-1.5`}>
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-slate-500 font-semibold uppercase tracking-wider">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Timeline Structure */}
        <div className="relative mb-24">
          
          {/* Animated vertical track */}
          <div className="absolute left-6 md:left-1/2 top-4 bottom-4 transform md:-translate-x-1/2 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 opacity-20" />
          
          <div className="space-y-10">
            {achievements.map((achievement, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={index} 
                  className={`relative flex flex-col md:flex-row items-start md:items-center ${
                    isEven ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  
                  {/* Timeline Glowing Node */}
                  <div className="absolute left-6 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center border border-white/10 ${achievement.nodeColor} transition-transform hover:scale-110 duration-300`}>
                      {achievement.icon}
                    </div>
                  </div>

                  {/* Card Content block */}
                  <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${
                    isEven ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="glass-panel p-6 sm:p-7 rounded-3xl glow-card hover:shadow-2xl transition-all duration-300">
                      
                      {/* Badge and Date */}
                      <div className="flex items-center justify-between mb-4">
                        <span className={`px-2.5 py-1 rounded-xl text-[10px] sm:text-xs font-bold uppercase tracking-wider border ${achievement.badgeClass}`}>
                          {achievement.category}
                        </span>
                        
                        <div className="flex items-center text-xs text-slate-500 font-semibold">
                          <Calendar className="w-3.5 h-3.5 mr-1.5 text-slate-400" />
                          <span>{achievement.date}</span>
                        </div>
                      </div>

                      {/* Info */}
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2 font-display group-hover:text-blue-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>

                  {/* Empty space filler for desktop spacing */}
                  <div className="hidden md:block w-1/2"></div>

                </div>
              );
            })}
          </div>
        </div>

        {/* Future Goals Panels */}
        <div className={`transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-panel p-8 sm:p-10 rounded-3xl glow-card bg-gradient-to-br from-slate-900/60 via-slate-950/60 to-purple-950/20">
            
            <div className="text-center mb-10">
              <div className="bg-slate-950 border border-white/5 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              </div>
              <h3 className="text-xl sm:text-3xl font-bold text-white mb-2 font-display">Target Goals Roadmap</h3>
              <p className="text-sm sm:text-base text-slate-400 max-w-xl mx-auto leading-relaxed">
                A forecast of milestones I plan to tackle in my near-future engineering sprint.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {futureGoals.map((goal, idx) => (
                <div key={idx} className="bg-slate-950/80 border border-white/5 p-5 rounded-2xl flex flex-col items-start hover:border-slate-800 transition-colors">
                  <div className="bg-slate-900 border border-white/5 p-2 rounded-xl mb-4">
                    {goal.icon}
                  </div>
                  <h4 className="font-bold text-white text-base mb-2 font-display flex items-center">
                    <span>{goal.title}</span>
                    <ChevronRight className="w-4 h-4 ml-1 text-slate-500" />
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{goal.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Achievements;