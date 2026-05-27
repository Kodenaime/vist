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
    <section ref={containerRef} className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden bg-[#050505]">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        
        {/* LEFT COLUMN: Content (Takes 7 Cols on desktop for breathing room) */}
        <div ref={textRef} className="z-10 lg:col-span-7 space-y-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white">
            Elevate Your Business <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
              With Tech Solutions
            </span>
          </h1>
          
          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Empowering enterprises through innovative technology, from cloud solutions to advanced robotics. 
          </p>

          {/* Social Proof / Stats Card */}
          <div className="flex flex-wrap items-center gap-6 pt-2">
            <div className="flex items-center gap-3 px-5 py-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl">
               <div className="flex -space-x-3">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="w-8 h-8 rounded-full border-2 border-[#050505] bg-gray-700" />
                 ))}
               </div>
               <div className="text-sm">
                 <p className="text-white font-bold">578M +</p>
                 <p className="text-gray-500 text-[10px] uppercase tracking-widest">Active Users</p>
               </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link to="/services" className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold flex items-center justify-center gap-2 transition-all group">
              Explore Services <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/about" className="px-8 py-4 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full font-bold transition-all text-center">
              Learn More
            </Link>
          </div>
        </div>

        {/* RIGHT COLUMN: Visual Elements (Takes 5 Cols on desktop) */}
        <div className="relative lg:col-span-5 w-full aspect-square sm:aspect-video lg:aspect-[4/5] min-h-[400px] lg:min-h-[550px] mt-10 lg:mt-0">
          
          {/* Glass Card Overlay */}
          <div className="absolute top-12 -left-4 md:-left-10 z-20 px-6 py-6 bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl">
            <h3 className="text-4xl font-bold text-white tracking-tight">13+</h3>
            <p className="text-[10px] text-gray-400 uppercase tracking-widest font-medium leading-tight mt-1">
              Years of Industry <br /> Expertise
            </p>
            <div className="flex items-end gap-1 mt-4 h-10">
              {[40, 70, 45, 90, 65, 80].map((h, i) => (
                <div key={i} style={{ height: `${h}%` }} className="w-1.5 bg-indigo-500 rounded-full opacity-80" />
              ))}
            </div>
          </div>

          {/* Main Image Container Fixes */}
          <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 bg-gradient-to-br from-white/5 to-transparent relative z-10">
            <img 
              src="/images/hero.webp" 
              alt="VIST Technology Global Infrastructure Network Solutions" 
              className="w-full h-full object-cover object-center bg-slate-900"
            />
            {/* Added a subtle overlay shadow gradient to integrate the bottom border with our dark canvas */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

      </div>
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full -z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;