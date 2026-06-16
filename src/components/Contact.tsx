import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      const response = await fetch('https://formspree.io/f/xjkrzdld', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _replyto: formData.email
        }),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      
      // Reset status after 6 seconds
      setTimeout(() => setSubmitStatus('idle'), 6000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-24 bg-[#030712] relative overflow-hidden"
    >
      {/* Background radial glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] radial-glow-purple opacity-20 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[450px] radial-glow-blue opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs sm:text-sm font-semibold mb-4">
            <Mail className="w-4.5 h-4.5 text-blue-400" />
            <span>Communication Portal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display mb-4">
            Get In Touch
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-4" />
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, full-stack collaborations, or academic engineering developments.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Contact Details Left Column (5/12 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Info Cards Panel */}
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4 font-display">Let's Connect!</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                If you are looking for a dedicated developer to join your project, have questions about my work, or just want to chat about AI/ML design, drop me a message!
              </p>

              <div className="space-y-5">
                {/* Email info */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-blue-500/10 p-3 rounded-xl border border-blue-500/25 text-blue-400 group-hover:scale-105 transition-transform duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Email</h4>
                    <a href="mailto:subhasisdhara41@gmail.com" className="text-white hover:text-blue-400 text-sm sm:text-base font-semibold transition-colors">
                      subhasisdhara41@gmail.com
                    </a>
                  </div>
                </div>

                {/* Location info */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/25 text-emerald-400 group-hover:scale-105 transition-transform duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Location</h4>
                    <span className="text-white text-sm sm:text-base font-semibold">
                      Kolkata, India
                    </span>
                  </div>
                </div>

                {/* Response info */}
                <div className="flex items-center space-x-4 group">
                  <div className="bg-purple-500/10 p-3 rounded-xl border border-purple-500/25 text-purple-400 group-hover:scale-105 transition-transform duration-300">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-400 text-xs sm:text-sm uppercase tracking-wide">Response Speed</h4>
                    <span className="text-white text-sm sm:text-base font-semibold">
                      Usually within 24 hours
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Social media links */}
            <div className="glass-panel p-6 rounded-3xl glow-card">
              <h4 className="font-bold text-white mb-4 font-display">Social Media Networks</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/Subhasis495" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-950 border border-white/5 text-slate-400 p-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/5"
                  aria-label="GitHub Profile Link"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/in/subhasis-dhara-b8b95b323/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-slate-950 border border-white/5 text-slate-400 p-3 rounded-xl hover:bg-slate-900 hover:text-white transition-all duration-300 flex items-center justify-center hover:shadow-lg hover:shadow-blue-500/5"
                  aria-label="LinkedIn Profile Link"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>

          {/* Form Right Column (7/12 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl glow-card relative">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 font-display">Send a Message</h3>
              
              {/* Form Success notification */}
              {submitStatus === 'success' && (
                <div className="flex items-start space-x-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 p-4 rounded-2xl mb-6 animate-fade-in-up">
                  <CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5 text-emerald-400" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">Message Sent Successfully!</p>
                    <p className="text-xs sm:text-sm text-emerald-500/80 mt-0.5">Thank you for reaching out. I will respond to your inquiry shortly!</p>
                  </div>
                </div>
              )}

              {/* Form Error notification */}
              {submitStatus === 'error' && (
                <div className="flex items-start space-x-3 bg-red-500/10 border border-red-500/20 text-red-400 p-4 rounded-2xl mb-6 animate-fade-in-up">
                  <AlertCircle className="w-5 h-5 shrink-0 mt-0.5 text-red-400" />
                  <div>
                    <p className="font-bold text-sm sm:text-base">Message Delivery Failed</p>
                    <p className="text-xs sm:text-sm text-red-500/80 mt-0.5">Please check connection or email me directly at subhasisdhara41@gmail.com</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Name field */}
                  <div>
                    <label htmlFor="name" className="block text-xs sm:text-sm font-semibold text-slate-400 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-600 text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  {/* Email field */}
                  <div>
                    <label htmlFor="email" className="block text-xs sm:text-sm font-semibold text-slate-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-600 text-sm"
                      placeholder="your@email.com"
                    />
                  </div>

                </div>

                {/* Subject field */}
                <div>
                  <label htmlFor="subject" className="block text-xs sm:text-sm font-semibold text-slate-400 mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-600 text-sm"
                    placeholder="What is this regarding?"
                  />
                </div>

                {/* Message field */}
                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-semibold text-slate-400 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="w-full bg-slate-950 border border-white/5 rounded-xl py-3 px-4 text-white focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 focus:outline-none transition-all duration-300 placeholder-slate-600 resize-none text-sm"
                    placeholder="Describe your project, timeline, or just say hi!"
                  ></textarea>
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3.5 px-6 rounded-xl hover:shadow-lg hover:shadow-blue-500/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 text-sm sm:text-base hover:-translate-y-0.5 active:translate-y-0"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;