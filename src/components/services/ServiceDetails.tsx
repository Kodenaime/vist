import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShieldCheck, Cloud, Cpu, Database, Network, Briefcase } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ServiceDetails:React.FC = () => {
  const containerRef = useRef(null);

  const serviceList = [
    {
      id: "01",
      title: "IT Advisory & Support",
      icon: <Briefcase size={32} />,
      features: ["Strategic Consultation", "Managed IT Support", "Digital Transformation"],
      desc: "Delivering unparalleled service quality to ensure your organization stays ahead. ",
      color: "from-purple-500/20"
    },
    {
      id: "02",
      title: "Infrastructure & Servers",
      icon: <Network size={32} />,
      features: ["Network Solutions", "Storage Management", "Server Architecture"],
      desc: "Building robust backbones designed to solve complex business challenges. ",
      color: "from-indigo-500/20"
    },
    {
      id: "03",
      title: "Enterprise & Security",
      icon: <ShieldCheck size={32} />,
      features: ["Risk Assessment", "Security Solutions", "Enterprise Apps"],
      desc: "Protecting business assets through proactive threat detection and mitigation. ",
      color: "from-blue-500/20"
    },
    {
      id: "04",
      title: "Cloud & Communications",
      icon: <Cloud size={32} />,
      features: ["Cloud Migration", "Unified Communications", "Optimization"],
      desc: "Leveraging the latest advancements to empower your business connectivity. ",
      color: "from-purple-600/20"
    },
    {
      id: "05",
      title: "Data & Odion AI",
      icon: <Database size={32} />,
      features: ["Predictive Analytics", "AI Implementation", "Actionable Insights"],
      desc: "Turning raw data into strategic breakthroughs in an ever-evolving world. ",
      color: "from-indigo-600/20"
    },
    {
      id: "06",
      title: "Automation & Dev",
      icon: <Cpu size={32} />,
      features: ["Robotics (RPA)", "Bespoke App Dev", "Workflow Streamlining"],
      desc: "Pushing the boundaries of technological advancement to create unique products. ",
      color: "from-purple-400/20"
    }
  ];

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

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="mb-20 space-y-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter italic">
          Our Services
        </h1>
        <p className="text-gray-500 max-w-2xl leading-relaxed">
          At Vauntageo Integrated Systems Technology (VIST), we offer a comprehensive range of cutting-edge technology solutions designed to help our clients solve business challenges.  119]
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {serviceList.map((service, index) => (
          <div 
            key={index}
            className={`service-card group relative p-8 bg-white/2 border border-white/5 rounded-[40px] hover:bg-white/5 transition-all duration-500 overflow-hidden`}
          >
            {/* Background Glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-linear-to-br ${service.color} blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
            
            <div className="relative z-10 space-y-6">
              <div className="flex justify-between items-start">
                <div className="p-4 bg-white/5 border border-white/10 rounded-2xl text-purple-400 group-hover:scale-110 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
                <span className="text-4xl font-black text-white/5 group-hover:text-white/10 transition-colors">
                  {service.id}
                </span>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed mb-6">
                  {service.desc}
                </p>
              </div>

              <div className="pt-6 border-t border-white/5">
                <ul className="space-y-2">
                  {service.features.map((feat, i) => (
                    <li key={i} className="text-[11px] text-gray-400 uppercase tracking-widest flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-purple-500" />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetails;