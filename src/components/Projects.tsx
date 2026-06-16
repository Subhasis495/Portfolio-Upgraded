import React, { useState, useEffect, useRef } from 'react';
import { Github, Code, Calendar, Sparkles, FolderGit } from 'lucide-react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
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

  const projects = [
    {
      title: 'Health Pilot',
      description: 'A health monitoring dashboard that tracks hydration activity levels, and time to take breaks between sessions with real-time data visualization and personalized insights.',
      tech: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Supabase'],
      category: 'React',
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2024',
      glowColor: 'group-hover:border-blue-500/30 shadow-blue-500/5',
      badgeColor: 'text-blue-400 bg-blue-400/10'
    },
    {
      title: 'Smart-Disease-Predictor',
      description: 'A simple machine learning web app to predict diseases based on symptoms using a Random Forest and SVM.',
      tech: ['Python', 'Pandas', 'Scikit-learn', 'Streamlit'],
      category: 'Python',
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2025',
      glowColor: 'group-hover:border-emerald-500/30 shadow-emerald-500/5',
      badgeColor: 'text-emerald-400 bg-emerald-400/10'
    },
    {
      title: 'Bookstore Management System REST API Development',
      description: 'A RESTful API for managing a bookstore with user authentication, book inventory, and order management built with Spring Boot.',
      tech: ['Java', 'Spring Boot', 'MySQL'],
      category: 'Java',
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2026',
      glowColor: 'group-hover:border-purple-500/30 shadow-purple-500/5',
      badgeColor: 'text-purple-400 bg-purple-400/10'
    },
    {
      title: 'Weather App',
      description: 'A dynamic weather client fetching realtime temperature, wind, and forecast conditions using OpenWeather APIs with responsive UI styling.',
      tech: ['JavaScript', 'API Integration', 'CSS', 'HTML'],
      category: 'JavaScript',
      github: 'https://github.com/Subhasis495/Weather-App',
      status: 'Completed',
      date: '2024',
      glowColor: 'group-hover:border-orange-500/30 shadow-orange-500/5',
      badgeColor: 'text-orange-400 bg-orange-400/10'
    },
    {
      title: 'Tank Game in Python',
      description: 'An interactive 2D arcade game built with Python and Pygame module featuring asset engines, collision models, and GUI layout schemes.',
      tech: ['Python', 'Pygame', 'UI'],
      category: 'Python',
      github: 'https://github.com/Subhasis495/Tank-Game-in-Python',
      status: 'Completed',
      date: '2024',
      glowColor: 'group-hover:border-pink-500/30 shadow-pink-500/5',
      badgeColor: 'text-pink-400 bg-pink-400/10'
    },
    {
      title: 'E-commerce Frontend',
      description: 'A responsive storefront system focusing on high-end layout flows, product detail views, dynamic filters, and custom user navigations.',
      tech: ['React', 'JavaScript', 'CSS', 'Responsive Design'],
      category: 'React',
      github: 'https://github.com/Subhasis495',
      status: 'Completed',
      date: '2024',
      glowColor: 'group-hover:border-teal-500/30 shadow-teal-500/5',
      badgeColor: 'text-teal-400 bg-teal-400/10'
    }
  ];

  const filters = ['All', 'Python', 'React', 'JavaScript'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/2 right-10 w-[400px] h-[400px] radial-glow-purple opacity-20 pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 w-[500px] h-[500px] radial-glow-blue opacity-15 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold mb-4">
            <FolderGit className="w-4.5 h-4.5 text-emerald-400" />
            <span>Showcase Portfolio</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            My Projects
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Explore a selection of systems and applications I've designed along my software engineering journey.
          </p>
        </div>

        {/* Filter Navigation Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-100 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex bg-slate-950 p-1.5 rounded-2xl border border-white/5 backdrop-blur-md">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/15'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className={`glass-panel p-6 sm:p-7 rounded-3xl glow-card hover:shadow-2xl transition-all duration-300 group flex flex-col justify-between ${project.glowColor}`}
            >
              <div>
                
                {/* Title & Status */}
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors font-display line-clamp-1">
                    {project.title}
                  </h3>
                  
                  <div className="flex items-center space-x-2 shrink-0 ml-2">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider ${
                      project.status === 'Completed' 
                        ? 'text-emerald-400 bg-emerald-400/10 border border-emerald-500/20' 
                        : 'text-amber-400 bg-amber-400/10 border border-amber-500/20'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                {/* Calendar Date Badge */}
                <div className="flex items-center text-xs text-slate-500 mb-4">
                  <Calendar className="w-3.5 h-3.5 mr-1 text-slate-400" />
                  <span>Year: {project.date}</span>
                </div>
                
                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className={`text-[11px] sm:text-xs font-medium px-2.5 py-1 rounded-xl bg-slate-900 border border-white/5 text-slate-300`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Github Link */}
                <div className="flex justify-center pt-2">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center space-x-2 bg-slate-950 border border-white/5 text-slate-300 hover:text-white px-5 py-2.5 rounded-xl hover:bg-slate-900 hover:border-white/15 transition-all duration-300 font-semibold text-sm w-full justify-center shadow-inner"
                  >
                    <Github className="w-4.5 h-4.5" />
                    <span>View Repository</span>
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Showcase */}
        <div className={`mt-20 transition-all duration-1000 delay-300 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="glass-panel p-8 sm:p-10 rounded-3xl glow-card text-center bg-gradient-to-r from-slate-950 via-slate-900 to-purple-950/20">
            <div className="bg-slate-950 border border-white/5 w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-5">
              <Code className="w-6 h-6 text-blue-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">More Developments Coming Soon!</h3>
            <p className="text-sm sm:text-base text-slate-400 mb-6 max-w-xl mx-auto leading-relaxed">
              I'm actively researching microservice designs, deep learning tools, and frontend optimizations. Follow my GitHub page to explore current code updates.
            </p>
            <a 
              href="https://github.com/Subhasis495" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5"
            >
              <Github className="w-5 h-5" />
              <span>Follow on GitHub</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;