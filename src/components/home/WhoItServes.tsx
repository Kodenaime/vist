import React from 'react';
import { Link } from 'react-router';
import { ArrowRight, Shield, Server, Check } from 'lucide-react';

const WhoItServes: React.FC = () => {
  const industries = [
    "Banks & FinTech", "Oil & Gas", "Telecommunications", 
    "FMCG & Retail", "Health Care", "Public Sector"
  ]; 

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Heading & Core Sectors */}
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="text-purple-600 font-bold tracking-widest uppercase text-xs">
              Enterprise Integration
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Smarter Solutions for <br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-600 to-indigo-600">
                Evolving Businesses
              </span>
            </h2>
            <p className="text-slate-600 max-w-lg text-sm sm:text-base leading-relaxed pt-2">
              We deliver a comprehensive suite of cutting-edge technology solutions crafted with absolute precision, leveraging technical advancements to optimize infrastructure and empower your enterprise operations.
            </p>
          </div>

          {/* Dynamic Grid using our explicit Industry Array */}
          <div className="grid grid-cols-2 gap-y-4 gap-x-6 border-y border-slate-100 py-6">
            {industries.map((item, index) => (
              <div key={index} className="flex items-center gap-3 group">
                <div className="w-5 h-5 rounded-md bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 transition-colors group-hover:bg-purple-600 group-hover:text-white">
                  <Check size={12} className="stroke-3" />
                </div>
                <span className="text-slate-700 text-sm font-semibold transition-colors group-hover:text-purple-600">
                  {item}
                </span>
              </div>
            ))} 
          </div>

          {/* VIST Structural Highlights */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="shrink-0">
              <p className="text-3xl font-extrabold text-slate-950 tracking-tighter">6 +</p>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-0.5">Core Pillars</p>
            </div>
            <p className="text-xs font-medium text-slate-500 max-w-xs leading-relaxed">
              Through careful consultation, we work hand-in-hand to strategise, design, and deliver solutions to enhance your digital workflows.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <Link to="/services" className="px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-bold uppercase tracking-wider text-center shadow-md shadow-purple-600/10 flex items-center justify-center gap-2 group transition-all">
              Our Services <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-6 py-3.5 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-full text-xs font-bold uppercase tracking-wider text-center shadow-xs transition-all">
              Request Consultation
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Large Image & Overlays */}
        <div className="relative w-full max-lg:mt-10">
          
          {/* Main Large Visual Container */}
          <div className="w-full aspect-4/5 bg-slate-50 rounded-[48px] border border-slate-200 shadow-md overflow-hidden relative group">
             <img 
               src="/images/explore.webp" 
               alt="VIST Enterprise Architecture Connectivity Network" 
               className="w-full h-full object-cover object-center transform group-hover:scale-103 transition-transform duration-700 ease-out"
             />
             <div className="absolute inset-0 bg-linear-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Floating Glass Cards: Calibrated for Light Glassmorphism */}
          
          {/* Top Card */}
          <div className="absolute top-10 -left-4 md:-left-12 p-5 bg-white/75 backdrop-blur-md border border-slate-200/80 rounded-2xl max-w-[240px] shadow-xl shadow-purple-900/5 z-20">
            <div className="flex items-center gap-2.5 mb-2">
              <Server size={14} className="text-purple-600" />
              <h4 className="text-slate-900 text-xs font-bold tracking-tight">IT Infrastructure</h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Deploying scalable network solutions, premium storage models, and robust server architectures.
            </p>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-10 right-4 md:right-10 p-5 bg-white/75 backdrop-blur-md border border-slate-200/80 rounded-2xl max-w-[240px] shadow-xl shadow-purple-900/5 z-20">
            <div className="flex items-center gap-2.5 mb-2">
              <Shield size={14} className="text-indigo-600" />
              <h4 className="text-slate-900 text-xs font-bold tracking-tight">Enterprise Advisory</h4>
            </div>
            <p className="text-[11px] text-slate-500 font-medium leading-relaxed">
              Mitigating operational liabilities with risk security solutions and custom application strategies.
            </p>
          </div>

          {/* Center Connector Accent */}
          <div className="absolute top-1/2 -left-3 hidden md:flex items-center gap-3 z-20">
             <div className="w-3 h-3 rounded-full bg-purple-600 ring-4 ring-purple-100 shadow-md animate-pulse" />
             <div className="bg-white/90 px-4 py-1.5 backdrop-blur-md rounded-full border border-slate-200/80 shadow-sm">
               <p className="text-[9px] text-slate-700 font-bold tracking-widest uppercase">Precision Engineering</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoItServes;