import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Shield, Cloud, Server, HelpCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

gsap.registerPlugin(ScrollTrigger);

const ServicesPillars: React.FC = () => {
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

  const services = [
    {
      icon: <HelpCircle className="text-purple-600" size={24} />,
      title: "IT Strategy & Advisory",
      quote: "Strategise. Design. Deliver. Efficiency re-imagined.",
      desc: "From consultation to execution, we craft IT strategies that transform efficiency into growth. Our advisory team partners with you to align technology with business goals."
    },
    {
      icon: <Cloud className="text-indigo-600" size={24} />,
      title: "Cloud Solutions",
      quote: "Transforming businesses through intelligent cloud solutions.",
      desc: "We help organizations migrate, manage, and secure their cloud environments ensuring resilience, efficiency, and competitive advantage in today's digital landscape."
    },
    {
      icon: <Server className="text-purple-600" size={24} />,
      title: "IT Infrastructure Solutions",
      quote: "End-to-end infrastructure solutions for seamless operations.",
      desc: "We design, deploy, and manage end-to-end infrastructure solutions spanning networks, storage, and servers to support mission-critical applications."
    },
    {
      icon: <Shield className="text-indigo-600" size={24} />,
      title: "Cybersecurity Services",
      quote: "Proactive protection for enterprise digital assets.",
      desc: "Defend your corporate ecosystem against vulnerabilities. We implement comprehensive zero-trust frameworks, threat management, and robust data governance safety safeguards."
    }
  ];

  return (
    <section ref={containerRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white border-t border-slate-100">
      
      {/* HEADER AREA */}
      <div className="max-w-3xl mb-16 space-y-4">
        <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Capabilities</span>
        <h2 className="text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight">
          Enterprise Services Built <br /> For High Availability
        </h2>
        <p className="text-slate-500 text-base leading-relaxed">
          VIST partners with leading institutions to deliver secure, smart, and scalable engineering workflows tailored to regional market complexities.
        </p>
      </div>

      {/* SERVICES DISPLAY CONTAINER */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {services.map((item, idx) => (
          <div 
            key={idx} 
            className="service-card bg-purple-300 hover:bg-purple-100 border border-purple-200/60 hover:border-purple-300 p-8 rounded-[32px] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
          >
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">{item.title}</h3>
                <p className="text-xs font-semibold text-purple-600/80 italic">"{item.quote}"</p>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-6">
              <Link to="/services" className="inline-flex items-center gap-2 text-xs font-bold text-slate-800 group-hover:text-purple-600 transition-colors uppercase tracking-wider">
                Learn More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPillars;