import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { 
  HelpCircle, 
  Cloud, 
  Server, 
  Shield, 
  Layers, 
  Database, 
  Settings 
} from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Core structured data grid precisely mapped out to VIST's official slides text
  const serviceList = [
    {
      id: "01",
      title: "IT Strategy & Advisory",
      quote: "Strategise. Design. Deliver. Efficiency re-imagined.",
      icon: <HelpCircle size={28} />,
      features: ["Enterprise Alignment", "Technology Roadmaps", "Operational Excellence"],
      desc: "Our advisory team partners with you to align technology with business goals, ensuring every solution drives measurable impact.",
      color: "bg-purple-50 border-purple-100 text-purple-600"
    },
    {
      id: "02",
      title: "Cloud Solutions",
      quote: "Transforming businesses through intelligent cloud solutions.",
      icon: <Cloud size={28} />,
      features: ["Cloud Migration", "Environment Management", "Data Security & Resilience"],
      desc: "We help organizations migrate, manage, and secure their cloud environments ensuring resilience, efficiency, and competitive advantage.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-600"
    },
    {
      id: "03",
      title: "IT Infrastructure Solutions",
      quote: "End-to-end infrastructure solutions for seamless operations.",
      icon: <Server size={28} />,
      features: ["Network Solutions", "Storage Systems", "Server Clusters Architecture"],
      desc: "We design, deploy, and manage end-to-end infrastructure solutions spanning networks, storage, and servers to support mission-critical applications.",
      color: "bg-purple-50 border-purple-100 text-purple-700"
    },
    {
      id: "04",
      title: "Cybersecurity Services",
      quote: "Comprehensive protection across your entire ecosystem.",
      icon: <Shield size={28} />,
      features: ["Risk Assessments", "Compliance Auditing", "Advanced Defense Mechanisms"],
      desc: "We deliver comprehensive cybersecurity solutions that protect your systems, data, and people from evolving operational threats.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-700"
    },
    {
      id: "05",
      title: "Enterprise Solutions & Apps",
      quote: "Efficiency, Innovative, Bespoke.",
      icon: <Layers size={28} />,
      features: ["ERP & CRM Frameworks", "Legacy Modernization", "Custom Architecture Projects"],
      desc: "We deliver enterprise-grade solutions that empower organizations to streamline operations, enhance collaboration, and drive long-term growth.",
      color: "bg-purple-50 border-purple-100 text-purple-600"
    },
    {
      id: "06",
      title: "Data & AI Driven Solutions",
      quote: "Turning data into intelligence for smarter decisions.",
      icon: <Database size={28} />,
      features: ["Data Management", "Machine Learning Systems", "Predictive Analytics Models"],
      desc: "We help organizations harness the power of data and artificial intelligence to drive smarter decisions and automate complex processes.",
      color: "bg-indigo-50 border-indigo-100 text-indigo-600"
    },
    {
      id: "07",
      title: "Product Development",
      quote: "Structured end-to-end approach to bringing ideas to life.",
      icon: <Settings size={28} />,
      features: ["Concept Prototyping", "Agile Monitoring", "Project Management Execution"],
      desc: "We guide corporate teams through the full lifecycle from concept design to successful delivery ensuring projects are completed within budget.",
      color: "bg-purple-50 border-purple-100 text-purple-700"
    }
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".reveal-service-card",
        {
          y: 40,
          opacity: 0,
          scale: 0.98,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.12,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%", // Corrected trigger mapping coordinates
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-24 px-6 md:px-12 max-w-7xl mx-auto bg-white">
      {/* SECTION HEADER BLOCK */}
      <div className="mb-20 space-y-4 max-w-3xl">
        <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Corporate Capabilities</span>
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-950 tracking-tight leading-tight">
          Our Technology Services
        </h1>
        <p className="text-slate-500 text-base md:text-lg leading-relaxed font-medium">
          At Vauntageo Integrated Systems Technology (VIST), we engineer a comprehensive architecture of cutting-edge technology solutions designed to help enterprises resolve complex operational challenges.
        </p>
      </div>

      {/* RENDERED CARDS GRID FRAMEWORK */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 items-stretch">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className="reveal-service-card group relative p-8 bg-purple-300 hover:bg-purple-100 border border-purple-200/60 hover:border-purple-300 rounded-[36px] hover:shadow-xl hover:shadow-purple-100/30 transition-all duration-500 flex flex-col justify-between overflow-hidden"
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div className={`p-4 rounded-2xl border ${service.color} shadow-xs transition-all duration-500 group-hover:scale-105`}>
                  {service.icon}
                </div>
                <span className="text-3xl font-black text-slate-200 transition-colors group-hover:text-purple-100">
                  {service.id}
                </span>
              </div>
              
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-[12px] font-bold text-purple-600/80 italic leading-tight">
                  "{service.quote}"
                </p>
                <p className="text-slate-600 text-sm md:text-[16px] leading-relaxed pt-2">
                  {service.desc}
                </p>
              </div>
            </div>

            <div className="pt-6 border-t border-slate-200/60 mt-6">
              <ul className="space-y-2.5">
                {service.features.map((feat, i) => (
                  <li key={i} className="text-[10px] font-bold text-slate-600 uppercase tracking-widest flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-600" />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceDetails;