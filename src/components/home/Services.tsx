import React from 'react';
import { Monitor, Cloud, Shield, Cpu, Code, Database } from 'lucide-react';

const pulseAnimation = `
  @keyframes pulse-slow {
    0%, 100% { transform: scale(1); opacity: 1; }
    50% { transform: scale(1.02); opacity: 0.9; }
  }
`;

const Services: React.FC = () => {
  const services = [
    {
      title: "IT Strategy & Advisory",
      desc: "Careful consultation to strategise, design and deliver solutions that streamline efficiencies.",
      icon: <Monitor className="text-purple-500" />,
      offset: "mb-12"
    },
    {
      title: "Cloud Solutions",
      desc: "Migration, management, and security to ensure your organization stays ahead in the landscape.",
      icon: <Cloud className="text-indigo-500" />,
      offset: "mt-12" 
    },
    {
      title: "Robotics & AI",
      desc: "Pushing boundaries with Robotics Process Automation and Odion AI Voice Agents.",
      icon: <Cpu className="text-purple-400" />,
      offset: "mb-12"
    },
    {
      title: "Bespoke Development",
      desc: "Custom software and legacy system modernisation tailored to your business operations.",
      icon: <Code className="text-indigo-400" />,
      offset: "mt-12" 
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">

      <style>{pulseAnimation}</style>

      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Transform Ideas into Reality with <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-500">
            Cutting-Edge AI Solutions
          </span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div 
            key={index}
            className={`group relative p-8 rounded-[32px] bg-white/3 border border-white/10 transition-all duration-500 hover:bg-white/6 hover:border-purple-500/50 animate-pulse-slow ${service.offset}`}
          >
            {/* Pulsating Glow Effect */}
            <div className="absolute inset-0 rounded-[32px] bg-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity blur-xl" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                {service.icon}
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>
              
              <div className="mt-8 flex items-center text-xs font-bold text-purple-400 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                Explore Solution <span className="ml-2">→</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;