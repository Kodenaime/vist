import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Users, CheckCircle, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const ProductsBento: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".bento-reveal", {
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
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-slate-50 border-t border-b border-slate-200/60 rounded-[48px] my-12">
      
      {/* HEADER AREA */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-6 md:gap-12">
        <div className="space-y-4 max-w-xl">
          <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Proprietary Products</span>
          <h2 className="bento-reveal text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
            Flagship Software Solutions Built for Scale
          </h2>
        </div>
        <p className="bento-reveal text-slate-600 max-w-md text-sm sm:text-base leading-relaxed pt-4">
          Automate complex transaction matching and workforce operations with high-performance frameworks designed for modern enterprises.
        </p>
      </div>

      {/* CORE BENTO GRID LAYOUT */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT COLUMN: SmartRecon Solution Panel (Takes 7 columns) */}
        <div className="bento-reveal lg:col-span-7 bg-white border border-slate-200/80 rounded-[40px] p-8 md:p-12 shadow-xs relative overflow-hidden flex flex-col justify-between">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-purple-100 blur-3xl rounded-full pointer-events-none" />
          
          <div>
            <div className="flex gap-4 mb-6">
               <span className="px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[10px] text-purple-700 uppercase tracking-widest font-bold flex items-center gap-1.5">
                 <Layers size={12} /> SmartRecon
               </span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 mb-4">Financial Reconciliation & Workflow</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-8 max-w-xl">
              An innovative account reconciliation solution designed to manage complex transaction matching across multiple verification pipelines. Perfect for Banks, FinTechs, Oil & Gas, and FMCGs.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-slate-100 pt-8">
            {[
              "Real-time discrepancy detection",
              "Multi-channel payment matching",
              "Verify mobile transfers & POS logs",
              "Reduced financial compliance risks"
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <CheckCircle size={16} className="text-purple-600 shrink-0" />
                <p className="text-slate-700 text-xs font-semibold tracking-wide">{text}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* RIGHT COLUMN: HR & Operations Summary Card (Takes 5 columns) */}
        <div className="bento-reveal lg:col-span-5 bg-white border border-slate-200/80 rounded-[40px] p-8 md:p-12 shadow-xs flex flex-col justify-between group relative overflow-hidden">
           <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-xs">
             <Users size={22} />
           </div>
           
           <div className="space-y-4 pt-12">
             <span className="text-[10px] bg-slate-100 text-slate-600 font-bold px-2.5 py-1 rounded-md uppercase tracking-wider inline-block">HR Solution</span>
             <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight">Workforce Automation</h3>
             <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
               Simplify and modernize corporate workforce management. Automate core systems including onboarding parameters, compliance audits, performance analytics, and automated payroll systems.
             </p>
           </div>

           <div className="pt-8 border-t border-slate-100 mt-8 flex justify-between items-center">
             <span className="text-xs font-bold text-slate-500">Centralized HR Platform</span>
             <Link to="/contact?demo=true" className="w-10 h-10 rounded-full bg-slate-50 group-hover:bg-purple-600 border border-slate-200 text-slate-700 group-hover:text-white flex items-center justify-center transition-all">
               <ArrowUpRight size={16} />
             </Link>
           </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsBento;