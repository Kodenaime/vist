import React from 'react';
import { Link } from 'react-router';
import { ArrowRight } from 'lucide-react';

const WhoItServes: React.FC = () => {
  const industries = [
    "Restaurants", "Hotels", "Logistics", 
    "Retail", "Hospitals/Clinics", "Other Service Providers"
  ]; 

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT SIDE: Heading & Core Sectors */}
        <div className="space-y-12">
          <div>
            <p className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4">
              Enterprise Integration
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Smarter Solutions for <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">
                Evolving Businesses
              </span>
            </h2>

            {/* Dynamic Grid using our explicit Industry Array */}
            <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-4">
              {industries.map((item, index) => (
                <div key={index} className="flex items-center gap-2.5 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_8px_rgba(168,85,247,0.5)]" />
                  <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                    {item}
                  </span>
                </div>
              ))} 
            </div>

            <p className="text-gray-400 mt-8 max-w-lg text-sm leading-relaxed">
              We deliver a comprehensive suite of cutting-edge technology solutions crafted with absolute precision, leveraging technical advancements to optimize infrastructure and empower your enterprise operations          </p>
          </div>

          {/* VIST Structural Highlights */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8 pt-6 border-t border-white/5">
            <div>
              <p className="text-3xl font-bold text-white tracking-tighter">6 +</p>
              <p className="text-[10px] text-gray-500 uppercase tracking-widest mt-1">Core Pillars</p>
            </div>
            <p className="text-xs text-gray-400 max-w-xs leading-relaxed">
              Through careful consultation, we work hand-in-hand to strategise, design, and deliver solutions to enhance your digital workflows</p>
          </div>
          
          <div className="flex gap-4">
            <Link to="/services" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold flex items-center gap-2 group transition-all duration-300">
              Our Services <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/contact" className="px-6 py-3 bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-full text-sm font-bold transition-all duration-300">
              Request Consultation
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE: Large Image & Overlays */}
        <div className="relative w-full">
          {/* Main Large Visual Container */}
          <div className="w-full aspect-[4/5] bg-white/5 rounded-[48px] border border-white/10 overflow-hidden relative group">
             {/* Global City Data Mesh Image prompt works perfect here */}
             <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent z-10" />
             <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
               <img src="/images/explore.webp" alt="" />
             </div>
          </div>

          {/* Floating Glass Cards mapping to VIST Service Sectors */}
          {/* Top Card */}
          <div className="absolute top-10 -left-6 md:-left-12 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-[240px] shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_#a855f7]" />
              <h4 className="text-white text-sm font-bold tracking-tight">IT Infrastructure</h4>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Deploying scalable network solutions, premium storage models, and robust server architectures.
            </p>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-10 right-6 md:right-10 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-[240px] shadow-2xl z-20">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_#6366f1]" />
              <h4 className="text-white text-sm font-bold tracking-tight">Enterprise Advisory</h4>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Mitigating operational liabilities with risk security solutions and custom application strategies.
            </p>
          </div>

          {/* Center Connector Accent */}
          <div className="absolute top-1/2 -left-3 hidden md:flex items-center gap-4 z-20">
             <div className="w-3 h-3 rounded-full bg-white ring-4 ring-purple-500/30 shadow-[0_0_15px_#fff]" />
             <div className="bg-white/5 px-4 py-2 backdrop-blur-md rounded-full border border-white/10">
               <p className="text-[10px] text-gray-300 font-semibold tracking-widest uppercase">Precision Engineering</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoItServes;