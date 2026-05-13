import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const OdionIntro: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "expo.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-white/3 border border-white/10 rounded-[48px] p-8 md:p-16 overflow-hidden relative">
        
        {/* Header Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Build Smarter with <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-500">Odion AI Agent</span>
            </h2>
          </div>
          <div className="reveal flex gap-3">
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">Simplifying AI for Everyone</span>
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">Powered by Odion AI</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Main Large Visual Placeholder */}
          <div className="reveal lg:col-span-8 aspect-video bg-white/5 rounded-[32px] border border-white/10 overflow-hidden relative group">
             {/*  - Robot Call Center Image should go here */}
             <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
             <div className="absolute bottom-8 left-8">
                <p className="text-gray-400 text-sm max-w-sm">
                  Odion AI offers businesses a dedicated channel number with a built-in AI customer support agent to handle requests end-to-end.
                </p>
             </div>
          </div>

          {/* Side Info / Stats */}
          <div className="reveal lg:col-span-4 space-y-8">
            <div className="p-8 bg-indigo-600/10 border border-indigo-500/20 rounded-[32px] relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-500/20 blur-3xl rounded-full" />
               <h3 className="text-5xl font-bold text-white tracking-tighter">100%</h3>
               <p className="text-xs text-indigo-300 uppercase tracking-widest mt-2">Automated Containment</p>
               <p className="text-gray-500 text-xs mt-4 leading-relaxed">
                 Answers calls in the business name, handles bookings, product sales, and escalates to humans only when needed[cite: 19, 43].
               </p>
            </div>

            <div className="flex items-center justify-between px-2">
               <div>
                  <p className="text-3xl font-bold text-white tracking-tighter">57.42+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Optimization Rate</p>
               </div>
               <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" />
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OdionIntro;