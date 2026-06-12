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
          start: "top 75%",
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* Main Container Card: Light Glassmorphism with high-refraction soft shading */}
      <div className="bg-linear-to-b from-slate-50 to-white border border-slate-200/70 rounded-[48px] p-8 md:p-16 overflow-hidden relative shadow-xl shadow-purple-100/30">
        
        {/* Decorative Background Ambient Blur Elements */}
        <div className="absolute top-[-20%] left-[-10%] w-[400px] h-[400px] bg-purple-200/30 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-5%] w-[300px] h-[300px] bg-indigo-100/40 blur-[100px] rounded-full pointer-events-none" />

        {/* Header Text */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <div className="reveal">
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Integrating Technology. <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                Empowering Ecosystems.
              </span>
            </h2>
          </div>
          <div className="reveal flex flex-wrap gap-2.5">
             <span className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-[10px] font-bold text-slate-600 uppercase tracking-widest shadow-xs">
               Explore Innovations
             </span>
             <span className="px-4 py-1.5 rounded-full bg-purple-50 border border-purple-100 text-[10px] font-bold text-purple-700 uppercase tracking-widest shadow-xs">
               VIST Ecosystem
             </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Main Large Visual Wrapper */}
          <div className="reveal lg:col-span-8 aspect-video rounded-[32px] border border-slate-200 overflow-hidden relative group shadow-sm bg-slate-100">
             <img 
               src="/images/intro.webp" 
               alt="VIST Network Operations Dashboard" 
               className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
             />
             {/* Gradient overlay calibrated to keep typography completely legible over light images */}
             <div className="absolute inset-0 bg-linear-to-t from-slate-950/80 via-slate-950/20 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 md:bottom-8 md:left-8 z-20 pr-6">
                <p className="text-white text-sm md:text-base max-w-xl leading-relaxed font-medium drop-shadow-xs">
                  Vauntageo Integrated Systems Technology (VIST) offers a comprehensive range of cutting-edge technology solutions designed to help clients solve complex business challenges and drive meaningful innovation.
                </p>
             </div>
          </div>

          {/* Side Info / Mission Card Stack */}
          <div className="reveal lg:col-span-4 flex flex-col justify-between gap-6 w-full">
            
            {/* Core Mission Panel: White frosted glass aesthetic */}
            <div className="p-8 bg-white/70 backdrop-blur-md border border-slate-200/80 rounded-[32px] relative overflow-hidden shadow-xs flex-1 flex flex-col justify-center">
               <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-100/60 blur-2xl rounded-full pointer-events-none" />
               <h3 className="text-[11px] font-extrabold text-purple-600 uppercase tracking-widest mb-3">Our Core Mission</h3>
               <p className="text-slate-700 text-sm font-semibold leading-relaxed">
                 To empower businesses through innovative and sustainable technology solutions. We push systemic parameters to optimize your operational infrastructure and drive long-term digital conversion.
               </p>
            </div>

            {/* Quick Stat Component: Light-reflective border wrapper */}
            <div className="flex items-center justify-between px-6 py-5 bg-white border border-slate-200/80 rounded-2xl shadow-xs">
               <div>
                  <p className="text-3xl font-extrabold text-slate-950 tracking-tighter">6 +</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">Core Service Pillars</p>
               </div>
               <div className="w-10 h-10 rounded-full bg-purple-50 border border-purple-100 flex items-center justify-center">
                  <div className="w-2 h-2 bg-purple-600 rounded-full animate-pulse" />
               </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default VISTIntro;