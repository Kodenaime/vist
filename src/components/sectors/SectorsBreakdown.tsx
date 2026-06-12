import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Building2, Coins, Radio, ShoppingBag, HeartPulse, Landmark,  ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const SectorsBreakdown: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".service-card",
        {
          y: 60,
          opacity: 0,
          scale: 0.95,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.15,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);
  
  const sectorsData = [
    {
      icon: <Coins size={24} className="text-purple-600" />,
      title: "Banking & Finance",
      bgBadge: "bg-purple-50 text-purple-700 border-purple-100",
      challenge: "High transaction volumes, cross-channel data matching discrepancies, and constant compliance audits.",
      solution: "Deploying high-performance ledger automation architectures and automated transaction clearing controls.",
      productFit: "SmartRecon & VISOneCX AI Agents"
    },
    {
      icon: <Building2 size={24} className="text-indigo-600" />,
      title: "Oil & Gas",
      bgBadge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      challenge: "Complex cross-border vendor invoicing, bulk supplier matching, and remote operation connectivity risks.",
      solution: "End-to-end server architecture, robust network security grids, and deep supplier workflow integrations.",
      productFit: "SmartRecon & IT Infrastructure Solutions"
    },
    {
      icon: <Radio size={24} className="text-purple-600" />,
      title: "Telecommunications",
      bgBadge: "bg-purple-50 text-purple-700 border-purple-100",
      challenge: "Massive scale customer support requests, continuous connectivity monitoring, and billing data streams.",
      solution: "Automated network health checks, omnichannel ticket routing, and central performance analytics.",
      productFit: "VISOneCX Customer Platform & Cloud Infrastructure"
    },
    {
      icon: <ShoppingBag size={24} className="text-indigo-600" />,
      title: "FMCG, Retail & E-commerce",
      bgBadge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      challenge: "Multi-location POS synchronization, inventory records matching sales deposits, and order tracking bottlenecks.",
      solution: "Bespoke database sync bridges, intelligent customer follow-up engines, and automated margin reporting.",
      productFit: "SmartRecon Inventory Module & VISOneCX"
    },
    {
      icon: <HeartPulse size={24} className="text-purple-600" />,
      title: "Health Care",
      bgBadge: "bg-purple-50 text-purple-700 border-purple-100",
      challenge: "Patient billing management, strict data confidentiality parameters, and continuous application availability.",
      solution: "Zero-trust cybersecurity protocols, encrypted medical cloud backup arrays, and legacy app modernization.",
      productFit: "Cybersecurity Frameworks & HR Workforce Solution"
    },
    {
      icon: <Landmark size={24} className="text-indigo-600" />,
      title: "Public Sector & Government",
      bgBadge: "bg-indigo-50 text-indigo-700 border-indigo-100",
      challenge: "Fragmented citizen query channels, siloed identity structures, and high human overhead operations.",
      solution: "Centralized self-service portal architectures, unified communication endpoints, and information management.",
      productFit: "VISOneCX Citizen Portals & Enterprise Solutions"
    }
  ];

  return (
    <section ref={containerRef} className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      
      {/* ================= HEADER SECTOR BLOCK ================= */}
      <div className="mb-20 space-y-4 max-w-3xl">
        <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Market Alignment</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-none">
          Sectors We Serve
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
          VIST integrates custom systems across critical industries , resolving deep data vulnerabilities and aligning operational backbones with absolute precision.
        </p>
      </div>

      {/* ================= INDUSTRIES BENTo GRID ================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {sectorsData.map((sector, index) => (
          <div 
            key={index}
            className="reveal-sector-card group relative p-8 bg-slate-50 hover:bg-white border border-slate-200/60 hover:border-purple-200 rounded-[36px] hover:shadow-2xl hover:shadow-purple-100/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            {/* Ambient Graphic Hover Glow */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-100/40 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex justify-between items-center">
                <div className={`p-3.5 rounded-2xl border bg-white shadow-xs transition-all duration-500 border-slate-200 text-slate-900 group-hover:scale-105 group-hover:border-purple-200`}>
                  {sector.icon}
                </div>
                <span className={`px-3 py-1 border rounded-full text-[10px] font-bold uppercase tracking-wider ${sector.bgBadge}`}>
                  Verified Sector
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-extrabold text-slate-950 mb-4 group-hover:text-purple-600 transition-colors">
                  {sector.title}
                </h3>
                
                {/* Structural Challenge vs Solution Breakdown */}
                <div className="space-y-4 text-xs sm:text-sm">
                  <div className="space-y-1">
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider block">Operational Challenge</span>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      {sector.challenge}
                    </p>
                  </div>
                  <div className="space-y-1">
                    <span className="text-[10px] text-purple-500 font-bold uppercase tracking-wider block">VIST Core Strategy</span>
                    <p className="text-slate-700 leading-relaxed font-semibold">
                      {sector.solution}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Target Software Deployment Footprint */}
            <div className="pt-5 border-t border-slate-200/60 mt-6 relative z-10 flex items-center justify-between">
              <div>
                <span className="text-[9px] text-slate-400 font-bold uppercase tracking-widest block">Deployed Product Suite</span>
                <span className="text-sm font-bold text-slate-900 block mt-0.5 group-hover:text-purple-700 transition-colors">
                  {sector.productFit}
                </span>
              </div>
              <div className="w-8 h-8 rounded-full bg-white border border-slate-200 text-slate-400 group-hover:bg-purple-600 group-hover:text-white group-hover:border-purple-600 flex items-center justify-center transition-all shadow-xs">
                <ArrowRight size={14} />
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* ================= BOTTOM ENGAGEMENT CALLOUT ================= */}
      <div className="mt-8 reveal-sector-card bg-white border border-slate-200/80 p-8 md:p-12 rounded-[40px] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-60 h-60 bg-indigo-50/50 blur-3xl rounded-full pointer-events-none" />
        <div className="space-y-2 relative z-10 max-w-2xl text-center md:text-left">
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-950">Don't see your specific market vertical?</h3>
          
        </div>
        <Link to="/contact" className="reveal-sector-card px-6 py-3.5 bg-purple-600 hover:bg-purple-700 text-white font-bold text-xs uppercase tracking-wider rounded-full shadow-md shadow-purple-600/10 shrink-0 transition-all relative z-10">
          Consult With An Expert
        </Link>
      </div>

    </section>
  );
};

export default SectorsBreakdown;