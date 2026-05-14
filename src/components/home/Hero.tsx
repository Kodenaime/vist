import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
  const ctx = gsap.context(() => {
    if (textRef.current) {
      const elements = Array.from(textRef.current.children);
      
      gsap.from(elements, {
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1.2,
        ease: "power4.out",
        delay: 0.5
      });
    }
  }, containerRef);
  
  return () => ctx.revert();
}, []); 

  return (
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* LEFT COLUMN: Content */}
        <div ref={textRef} className="z-10">
          <h1 className="hero-animate text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
            Elevate Your Business <br /> 
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-500">
              With AI Solutions
            </span>
          </h1>
          
          <p className="hero-animate text-gray-400 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
            Empowering enterprises through innovative technology, from cloud solutions to advanced robotics. 
          </p>

          {/* Social Proof / Stats Card */}
          <div className="hero-animate flex flex-wrap items-center gap-6 mb-10">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
               <div className="flex -space-x-3">
                 {[1,2,3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-700" />
                 ))}
               </div>
               <div className="text-sm">
                 <p className="text-white font-bold">578M +</p>
                 <p className="text-gray-500 text-[10px] uppercase tracking-widest">Active Users</p>
               </div>
            </div>
          </div>

          <div className="hero-animate flex flex-col sm:flex-row gap-4">
            <Link to="/services" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
              Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all">
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Elements */}
        <div className="relative hero-animate h-[400px] md:h-[600px] w-full">
          {/* Glass Card Overlay */}
          <div className="absolute top-1/4 -left-10 z-20 px-6 py-8 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold text-white">13+</h3>
            <p className="text-xs text-gray-400 uppercase tracking-tighter leading-tight mt-1">
              Years of Industry <br /> Expertise [cite: 123]
            </p>
            <div className="flex items-end gap-1 mt-6 h-12">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-2 bg-indigo-500 rounded-full animate-pulse" />
              ))}
            </div>
          </div>

          {/* Main Image Container */}
          <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 bg-linear-to-br from-white/5 to-transparent">
            {/* REPLACE WITH YOUR CINEMATIC AI IMAGE */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-500 italic">
               [Hero Visual Placeholder]
            </div>
          </div>
        </div>
      </div>
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/20 blur-[120px] rounded-full -z-10" />
    </section>
  );
};

export default Hero;