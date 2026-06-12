import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Target, Lightbulb, CheckCircle2, Workflow } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const AboutStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.from(".reveal-about-text", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        },
        y: 35,
        opacity: 0,
        stagger: 0.12,
        duration: 0.9,
        ease: "power4.out",
        delay: 0.1
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-44 pb-28 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      <div className="space-y-24">
        
        {/* ================= TIER 1: PRIMARY CORPORATE IDENTITY ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Main Brand Core (Takes 7 Columns) */}
          <div ref={textRef} className="lg:col-span-7 space-y-6 z-10">
            <div className="reveal-about-text inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold text-purple-700 uppercase tracking-wider">
              <Target size={12} /> Established Corporate Infrastructure
            </div>
            
            <h1 className="reveal-about-text text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-none">
              Vauntageo Integrated <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                Systems Technology
              </span>
            </h1>
            
            <p className="reveal-about-text text-slate-600 text-base md:text-lg leading-relaxed font-medium">
              VIST is a premier information technology service provider passionate about exploring the latest trends and breakthroughs in the ever-evolving world of technology. We partner with enterprises across Africa to transition legacy operations into secure, modular, and high-availability systems ecosystems.
            </p>

            {/* Mission Panel Overhauled to Light Mode Premium Glassmorphism */}
            <div className="reveal-about-text p-8 bg-slate-50/80 backdrop-blur-md border border-slate-200 rounded-[28px] shadow-xs relative overflow-hidden group hover:border-purple-200 transition-colors">
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-purple-100/50 blur-2xl rounded-full pointer-events-none" />
              <h3 className="text-sm font-bold text-purple-700 uppercase tracking-widest mb-2 flex items-center gap-2">
                <Lightbulb size={16} /> Our Core Mission
              </h3>
              <p className="text-slate-700 text-sm leading-relaxed font-semibold">
                To empower businesses through innovative and sustainable technology solutions, pushing the boundaries of advancement to contribute to the betterment of society.
              </p>
            </div>
          </div>

          {/* Right Side: Visual Display Mask (Takes 5 Columns) */}
          <div className="reveal-about-text lg:col-span-5 w-full aspect-square sm:aspect-video lg:aspect-4/5 min-h-[350px] lg:min-h-[520px] rounded-[44px] overflow-hidden border border-slate-200 bg-slate-50 shadow-md relative group">
             <img 
               src="/images/who.webp" 
               alt="VIST Global Infrastructure Information Technology Solutions" 
               className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-linear-to-t from-slate-950/10 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>

        {/* ================= TIER 2: DETAILED BESPOKE DELIVERY DEEP DIVE ================= */}
        <div className="border-t border-slate-100 pt-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Summary Header (Takes 5 Columns) */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest flex items-center gap-2">
              <Workflow size={14} /> Execution Framework
            </span>
            <h2 className="reveal-about-text text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight leading-snug">
              Bespoke Product Development & Project Management
            </h2>
            <p className="reveal-about-text text-xs font-bold text-purple-600/90 italic">
              "Efficiency, Innovative, Bespoke."
            </p>
            <p className="reveal-about-text text-slate-500 text-sm md:text-[16px] leading-relaxed pt-2">
              Our Product Development & Project Management services provide organizations with a structured, end-to-end approach to bringing ideas to life and delivering them successfully.
            </p>
          </div>

          {/* Right Detailed Bulletins (Takes 7 Columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 bg-slate-50 border border-slate-200/60 p-8 md:p-12 rounded-[40px] shadow-xs relative">
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-indigo-100/40 blur-3xl rounded-full pointer-events-none" />
            
            <div className="reveal-about-text space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-200/60 pb-1.5">
                <CheckCircle2 size={16} className="text-purple-600" /> Full Lifecycle Guidance
              </div>
              <p className="text-slate-600 text-sm md:text-[16px] leading-relaxed">
                We guide corporate technical teams through the full execution lifecycle from initial concept design and high-fidelity prototyping to physical system execution, performance monitoring, and live delivery. This ensures all enterprise projects are completed on time, within allocated budget boundaries, and perfectly aligned with overarching business goals.
              </p>
            </div>

            <div className="reveal-about-text space-y-3 relative z-10">
              <div className="flex items-center gap-2 text-sm font-bold text-slate-900 border-b border-slate-200/60 pb-1.5">
                <CheckCircle2 size={16} className="text-indigo-600" /> Agile Methodologies
              </div>
              <p className="text-slate-600 text-sm md:text-[16px] leading-relaxed">
                Leveraging fluid agile methodologies, advanced digital collaboration tools, and strict industry best practices, we help modern enterprises innovate significantly faster, manage ecosystem risks effectively, and achieve measurable outcomes. The result is a streamlined corporate pipeline transforming vision into active infrastructure reality.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutStory;