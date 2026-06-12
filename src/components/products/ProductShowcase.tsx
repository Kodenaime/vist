import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MessageSquare, RefreshCw, Users, CheckCircle2,  ShieldCheck, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const ProductShowcase: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-product-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-28 px-6 md:px-12 max-w-7xl mx-auto space-y-32">
      
      {/* ================= HEADER AREA ================= */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Proprietary Software Suite</span>
        <h1 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-none">
          Enterprise Applications
        </h1>
        <p className="text-slate-600 text-base md:text-lg leading-relaxed">
          High-performance platforms engineered by VIST to streamline operations, enhance organizational intelligence, and automate workforce workflows at scale.
        </p>
      </div>

      {/* ================= PRODUCT 1: VISOneCX ================= */}
      <div className="reveal-product-card bg-white border border-slate-200/80 rounded-[48px] p-8 md:p-16 shadow-xl shadow-purple-100/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-[11px] font-bold text-purple-700 uppercase tracking-wider shadow-xs">
              <MessageSquare size={12} /> VISOneCX Suite
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              VSMART AI Contact Center & Customer Support 
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              Powered by OdionAI and game-changing backend integrations, VISOneCX delivers an intelligent automation framework balancing human-like interactions with deep enterprise scalability. Designed to accelerate faster path resolutions while optimizing overhead models.
            </p>
            <div className="p-5 bg-slate-50 border border-slate-200/60 rounded-2xl">
              <p className="text-sm text-slate-700 leading-relaxed font-semibold italic">
                "An AI-Powered Platform that delivers intelligent, omnichannel customer engagement through voice, chat, WhatsApp, email, and social media channels."
              </p>
            </div>
            <div className="pt-4">
              <Link to="/contact?demo=visonecx" className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md shadow-purple-600/10">
                Request VISOneCX Demo <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pl-6">
            {/* Features Glass Box */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-purple-700 uppercase tracking-widest border-b border-slate-100 pb-2">Key Features </h4>
              <ul className="space-y-3">
                {[
                  { title: "Omnichannel Support", detail: "Seamless cross-platform integration over voice, chat, email, and social spaces." },
                  { title: "AI-Driven Assistance", detail: "Natural Language Processing (NLP) built for processing contextual customer intents." },
                  { title: "Smart Routing Systems", detail: "Automatically directs operational tickets to optimize active agent queue lag." },
                  { title: "Self-Service Portals", detail: "AI bots resolving common parameters without requiring direct desk intervention." },
                  { title: "Analytics & Insights", detail: "Real-time dashboards logging system performance and customer sentiment levels." }
                ].map((feat, idx) => (
                  <li key={idx} className="text-sm leading-relaxed"><strong className="text-slate-900 block font-bold">{feat.title}</strong><span className="text-slate-500 font-medium">{feat.detail}</span></li>
                ))}
              </ul>
            </div>

            {/* Benefits & Verticals Stack */}
            <div className="space-y-6">
              <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-3">
                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Benefits </h4>
                <div className="grid grid-cols-1 gap-2.5">
                  {[
                    "Enhanced Customer Experience ",
                    "Optimized Operational Efficiency ",
                    "Lower Structural Resource Costs ",
                    "24/7 Always-On Availability "
                  ].map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm font-bold text-slate-700">
                      <CheckCircle2 size={14} className="text-purple-600 shrink-0" /> {benefit}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-purple-50/50 border border-purple-100 rounded-3xl p-6 space-y-3">
                <h4 className="text-sm font-bold text-purple-800 uppercase tracking-widest">Industry Use Cases </h4>
                <ul className="space-y-2.5 text-sm text-purple-950 font-medium">
                  <li><strong className="font-bold text-purple-900">Banking & Finance:</strong> Balances verification and loan operations.</li>
                  <li><strong className="font-bold text-purple-900">Telecommunications:</strong> System automated troubleshooting logs.</li>
                  <li><strong className="font-bold text-purple-900">FMCG, Retail & E-com:</strong> Real-time track delivery and recommendations.</li>
                  <li><strong className="font-bold text-purple-900">Public Services:</strong> Streamlined citizen communication panels.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= PRODUCT 2: SMARTRECON ================= */}
      <div className="reveal-product-card bg-white border border-slate-200/80 rounded-[48px] p-8 md:p-16 shadow-xl shadow-purple-100/20 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-indigo-50/50 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
          <div className="lg:col-span-5 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-[11px] font-bold text-indigo-700 uppercase tracking-wider shadow-xs">
              <RefreshCw size={12} /> SmartRecon Infrastructure
            </div>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-950 tracking-tight leading-tight">
              SMARTRECON Reconciliation & Workflow 
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed font-medium">
              An innovative account reconciliation model using machine learning and automated systems to clean high-volume accounting transaction records across disconnected pipelines . SmartRecon integrates natively with live databases to track discrepancies and optimize financial close workflows.
            </p>
            <div className="p-4 bg-indigo-50/50 border border-indigo-100 rounded-2xl text-sm font-semibold text-indigo-950">
              <span className="font-bold text-indigo-900 block mb-1">Vertically Calibrated Across:</span>
              Banks, FinTechs, Oil & Gas, FMCGs, Telecommunications, and Health Care networks.
            </div>
            <div className="pt-4">
              <Link to="/contact?demo=smartrecon" className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-md shadow-indigo-600/10">
                Request SmartRecon Demo <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 lg:order-1 grid grid-cols-1 sm:grid-cols-2 gap-8 lg:pr-6">
            {/* Functional Pipeline Details */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-indigo-700 uppercase tracking-widest border-b border-slate-100 pb-2">Operational Scope</h4>
              <ul className="space-y-3 text-sm text-slate-600 font-medium">
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Reconcile high-volume records spanning all commercial channels.</li>
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Dynamic matching for distinct online payment gateways.</li>
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Independent mobile money transfer logs mapping.</li>
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Automated matching verification for ledger accounting balances.</li>
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Align sales revenue entries alongside physical cash deposits.</li>
                <li className="flex items-start gap-2.5"><div className="w-1.5 h-1.5 rounded-full bg-indigo-600 mt-1.5 shrink-0" /> Continuous auditing tracking inventory and invoice logs.</li>
              </ul>
            </div>

            {/* Core Architectural Benefits */}
            <div className="bg-white/60 backdrop-blur-md border border-slate-200/80 rounded-3xl p-6 shadow-xs space-y-4">
              <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-2">Key Benefits </h4>
              <div className="space-y-3.5">
                {[
                  { t: "Automated Reconciliation", d: "Instantly resolves matching parameters." },
                  { t: "Real-Time Detection", d: "Spots core tracking differences immediately." },
                  { t: "Enhanced Cloud Safety", detail: "Built over a secure cloud layer." },
                  { t: "Reduced Compliance Risks", d: "Protects financial auditing data." },
                  { t: "Data-Driven Close", d: "Accelerates monthly reporting operations." }
                ].map((b, i) => (
                  <div key={i} className="text-sm">
                    <strong className="text-slate-900 font-bold flex items-center gap-2">
                      <ShieldCheck size={14} className="text-indigo-600" /> {b.t}
                    </strong>
                    <span className="text-slate-500 font-medium pl-5">{b.d || b.detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================= EXTRA COMPONENT: HR SOLUTION ================= */}
      <div className="reveal-product-card bg-slate-900 text-white rounded-[48px] p-8 md:p-16 relative overflow-hidden shadow-2xl">
        <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-purple-600/20 blur-3xl rounded-full pointer-events-none" />
        
        <div className="max-w-4xl space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-[11px] font-bold text-purple-300 uppercase tracking-wider">
            <Users size={12} /> Resource Automation 
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight leading-none">
            Integrated HR Solution 
          </h2>
          <p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-3xl font-medium">
            Simplify and modernize core workforce infrastructure. Our enterprise HR platform automates operational recruitment, onboarding sequences, unified payroll systems, compliance tracking parameters, and comprehensive performance analytics inside an integrated, high-availability data environment .
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-white/10">
            <div>
              <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-1">Workforce Trends</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Integrated data architecture tracking core company dynamics.</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-1">Employee Empowerment</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Self-service dashboard access optimizing internal support pipelines.</p>
            </div>
            <div>
              <h4 className="text-purple-400 font-bold text-sm uppercase tracking-wider mb-1">Operational Agility</h4>
              <p className="text-gray-400 text-sm leading-relaxed font-medium">Automating back-office compliance parameters smoothly.</p>
            </div>
          </div>

          <div className="pt-4">
            <Link to="/contact" className="px-8 py-4 bg-white hover:bg-slate-100 text-slate-950 font-bold rounded-full text-xs uppercase tracking-wider inline-flex items-center gap-2 transition-all shadow-lg">
              Consult with an Specialist <ArrowUpRight size={14} className="text-purple-600" />
            </Link>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ProductShowcase;