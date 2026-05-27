import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const VISTIntro: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "expo.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="bg-white/[0.03] border border-white/10 rounded-[48px] p-8 md:p-16 overflow-hidden relative">
        
        {/* Header Text */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="reveal">
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
              Empowering Businesses <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                With Cutting-Edge Solutions
              </span>
            </h2>
          </div>
          <div className="reveal flex gap-3">
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">
               Explore Innovations
             </span>
             <span className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[10px] text-gray-400 uppercase tracking-widest">
               VIST Ecosystem
             </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          
          {/* Main Large Visual: Upgraded with public image path */}
          <div className="reveal lg:col-span-8 aspect-video rounded-[32px] border border-white/10 overflow-hidden relative group">
             <img 
               src="/images/intro.webp" 
               alt="VIST Network Operations Dashboard" 
               className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pr-6">
                <p className="text-gray-200 text-sm md:text-base max-w-xl leading-relaxed">
                  Vauntageo Integrated Systems Technology (VIST) offers a comprehensive range of cutting-edge technology solutions designed to help our clients solve complex business challenges and drive meaningful innovation.
                </p>
             </div>
          </div>

          {/* Side Info / Mission Card */}
          <div className="reveal lg:col-span-4 space-y-8 w-full">
            <div className="p-8 bg-purple-600/10 border border-purple-500/20 rounded-[32px] relative overflow-hidden">
               <div className="absolute -top-4 -right-4 w-24 h-24 bg-purple-500/20 blur-3xl rounded-full" />
               <h3 className="text-xs font-bold text-purple-400 uppercase tracking-widest mb-3">Our Core Mission</h3>
               <p className="text-white text-sm font-medium leading-relaxed">
                 To empower businesses through innovative and sustainable technology solutions. We push boundaries to optimize your infrastructure and drive long-term business processes.
               </p>
            </div>

            {/* Quick Stat Component aligned with the 12+ experience theme */}
            <div className="flex items-center justify-between px-6 py-5 bg-white/[0.02] border border-white/5 rounded-2xl">
               <div>
                  <p className="text-2xl font-bold text-white tracking-tighter">6 +</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Core Service Pillars</p>
               </div>
               <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-pulse" />
               </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default VISTIntro;