import React from 'react';
import { ArrowRight } from 'lucide-react';

const WhoItServes: React.FC = () => {
  const industries = [
    "Restaurants", "Hotels", "Logistics", 
    "Retail", "Hospitals/Clinics", "Other Service Providers"
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* LEFT SIDE: Heading & Small Card */}
        <div className="space-y-12">
          <div>
            <p className="text-purple-400 font-semibold tracking-widest uppercase text-xs mb-4">
              Workflow With Custom AI Tools
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Your AI Partner for <br /> Smarter Faster Solutions
            </h2>

            <div className="mt-8 grid grid-cols-2 gap-y-4 gap-x-2">
              {industries.map((item, index) => (
                <div key={index} className="flex items-center gap-2 group">
                  <div className="w-1.5 h-1.5 rounded-full bg-purple-500 group-hover:scale-150 transition-transform" />
                  <span className="text-gray-300 text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-gray-400 mt-6 max-w-sm">
              Providing 24/7 phone support for SMBs without the need for hiring or staffing a physical call centre.
            </p>
          </div>

          {/* Small Feature Image/Box */}
          <div className="w-64 h-80 bg-white/5 rounded-[32px] border border-white/10 flex items-center justify-center italic text-gray-600">
            [AI Interaction Image]
          </div>

          <div className="flex items-center gap-8">
            <div>
              <p className="text-3xl font-bold text-white tracking-tighter">123.4+</p>
              <p className="text-xs text-gray-500 uppercase tracking-widest mt-1">Technology</p>
            </div>
            <p className="text-sm text-gray-300 max-w-[120px]">Discover The Future Of AI Innovation</p>
          </div>
          
          <div className="flex gap-4">
            <button className="px-6 py-3 bg-indigo-600 rounded-full text-sm font-bold flex items-center gap-2 group">
              Read More <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-6 py-3 bg-purple-500 rounded-full text-sm font-bold flex items-center gap-2">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        </div>

        {/* RIGHT SIDE: Large Image & Overlays */}
        <div className="relative">
          {/* Main Large Visual */}
          <div className="w-full aspect-4/5 bg-white/5 rounded-[48px] border border-white/10 overflow-hidden">
             {/* Use robot touching network image prompt here */}
             <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
               [Robotic Hand Interaction Visual]
             </div>
          </div>

          {/* Floating Glass Cards for Industries */}
          {/* Top Card */}
          <div className="absolute top-10 -left-12 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-[240px] shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_purple]" />
              <h4 className="text-white font-bold tracking-tight">AI For Hospitality</h4>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Empowering Hotels and Restaurants with seamless booking and intake[cite: 26, 28, 88].
            </p>
          </div>

          {/* Bottom Card */}
          <div className="absolute bottom-10 left-10 p-6 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-3xl max-w-[240px] shadow-2xl">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-2 h-2 rounded-full bg-indigo-500 shadow-[0_0_10px_indigo]" />
              <h4 className="text-white font-bold tracking-tight">Scalable Logistics</h4>
            </div>
            <p className="text-[11px] text-gray-400 leading-relaxed">
              Managing 24/7 customer status checks and updates for logistics firms[cite: 30, 89].
            </p>
          </div>

          {/* Center Connector */}
          <div className="absolute top-1/2 -left-6 flex items-center gap-4">
             <div className="w-3 h-3 rounded-full bg-white ring-4 ring-white/10" />
             <div className="bg-white/5 px-4 py-2 backdrop-blur-md rounded-full border border-white/10">
               <p className="text-xs text-white font-semibold">AI For Everyone</p>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default WhoItServes;