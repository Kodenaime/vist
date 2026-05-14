import React from 'react';
import { ExternalLink } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const projects = [
    {
      client: "Cleveland Cavaliers",
      sector: "Hospitality",
      impact: "Automated 24/7 phone bookings and AI-driven customer campaigns.",
      tag: "Customer Engagement"
    },
    {
      client: "Cleveland Cavaliers",
      sector: "Information Technology",
      impact: "Developed cinematic recap and digital engagement systems for 'THRIVE' conference.",
      tag: "Digital Strategy"
    },
    {
      client: "Cleveland Cavaliers",
      sector: "Sports & Media",
      impact: "Implemented interactive 3D web experiences and high-performance GSAP animations.",
      tag: "UX Innovation"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
        <div className="space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Case Study Highlights</h2>
          <p className="text-gray-500 max-w-md text-sm">Strategic solutions delivered to streamline efficiencies and enhance business operations.</p>
        </div>
        <button className="px-6 py-2 border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all">
          View All Work
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <div key={i} className="group relative p-8 bg-white/2 border border-white/10 rounded-[40px] hover:border-purple-500/30 transition-all duration-500 overflow-hidden">
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-purple-600/10 blur-3xl rounded-full group-hover:bg-purple-600/20 transition-all" />
            
            <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-4 block">{p.tag}</span>
            <h3 className="text-2xl font-bold text-white mb-2">{p.client}</h3>
            <p className="text-gray-500 text-[11px] uppercase tracking-widest mb-6">{p.sector}</p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">{p.impact}</p>
            
            <div className="flex items-center gap-2 text-white text-xs font-bold group-hover:text-purple-400 transition-colors cursor-pointer">
              Explore Project <ExternalLink size={14} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CaseStudies;
