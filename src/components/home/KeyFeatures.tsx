import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Phone, BarChart3 } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const KeyFeatures: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 sm:px-6 md:px-12 max-w-7xl mx-auto overflow-hidden bg-[#050505]">
      
      {/* HEADER AREA */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-12 lg:mb-16 gap-6 md:gap-12">
        <h2 className="feature-reveal text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight max-w-xl">
          Discover the Future of <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
            Voice AI Innovation
          </span>
        </h2>
        <p className="feature-reveal text-gray-400 max-w-md text-sm leading-relaxed pt-2">
          Odion AI provides a seamless bridge between automated business efficiency and a natural, human-like caller experience.
        </p>
      </div>

      {/* CORE BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        
        {/* LEFT CARD: Tall Image Box Fixes */}
        <div className="feature-reveal lg:col-span-4 rounded-[32px] md:rounded-[40px] overflow-hidden border border-white/10 bg-white/5 aspect-[4/3] sm:aspect-video lg:aspect-auto min-h-[350px] lg:min-h-full relative group">
           <img 
             src="/images/about2.webp" 
             alt="Odion AI voice agent model interface" 
             className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
           />
           {/* Subtle glassmorphic darkening overlay so the card blends seamlessly with the dark dark layout */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* RIGHT CARDS: Operational Content Stack */}
        <div className="lg:col-span-8 flex flex-col gap-6 md:gap-8">
          
          {/* Top Row: Business Metrics vs Infrastructure */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
            
            {/* For Businesses Info Block */}
            <div className="feature-reveal md:col-span-7 p-6 sm:p-10 bg-white/[0.03] border border-white/10 rounded-[32px] md:rounded-[40px] relative overflow-hidden flex flex-col justify-between">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-500/10 blur-3xl rounded-full" />
              
              <div>
                <div className="flex gap-4 mb-6">
                   <span className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-[10px] text-purple-300 uppercase tracking-widest font-semibold flex items-center gap-1.5">
                     <Sparkles size={10} /> For Businesses
                   </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">Empower Your Operations</h3>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed mb-6">
                  Deploy instant phone support with zero hiring or training friction. Transition seamlessly via a predictable spend model.
                </p>
              </div>

              <div className="space-y-2.5">
                {[
                  "Onboard simply: buy number → load AI airtime → go live",
                  "Fully personalized agent trained on core operational parameters",
                  "Predictable cost allocations tailored to complex tier systems"
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <div className="w-1 h-1 rounded-full bg-purple-400 shrink-0" />
                    <p className="text-gray-300 text-xs tracking-wide">{text}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Performance Dashboard Summary Card */}
            <div className="feature-reveal md:col-span-5 p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] overflow-hidden flex flex-col justify-between min-h-[220px] md:min-h-full">
               <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400">
                 <BarChart3 size={18} />
               </div>
               
               <div>
                 <h4 className="text-white text-base font-bold mb-2">Day One Dashboard</h4>
                 <p className="text-gray-500 text-xs leading-relaxed">
                   Gain standalone access to central analytics monitoring total calls, core containment rates, and caller intent trends.
                 </p>
               </div>
            </div>
          </div>

          {/* Bottom Row: Caller Benefits & Safety Safeguards */}
          <div className="feature-reveal p-6 sm:p-8 bg-white/[0.02] border border-white/5 rounded-[32px] md:rounded-[40px] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-10">
            <div className="max-w-md">
               <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Phone size={14} />
                  </div>
                  <h4 className="text-white font-bold text-sm sm:text-base">For Callers</h4>
               </div>
               <p className="text-gray-500 text-xs leading-relaxed">
                 Eliminate traditional friction points with vastly shorter wait times, consistent answers 24/7, and seamless secure hand-offs to human support lines when required.
               </p>
            </div>
            
            <div className="flex items-center gap-4 shrink-0 sm:border-l sm:border-white/5 sm:pl-8 w-full sm:w-auto justify-between sm:justify-start">
               <div>
                  <p className="text-3xl sm:text-4xl font-bold text-white tracking-tighter">100%</p>
                  <p className="text-[9px] text-gray-500 uppercase tracking-widest font-medium">Automated Support Availability</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                 <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-ping" />
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;