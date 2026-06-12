import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutVIST: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".reveal-about-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%", 
          toggleActions: "play none none none"
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 1,
        ease: "power4.out"
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white border-b border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">      

        {/* 1. IMAGE CONTAINER */}
        <div className="reveal-about-item lg:col-span-5 w-full aspect-square sm:aspect-video lg:aspect-4/5 min-h-[350px] lg:min-h-[500px] rounded-[40px] overflow-hidden border border-slate-200 bg-slate-50 shadow-md relative group">
          <img 
            src="/images/about.webp" 
            alt="VIST Corporate Technology Advisory Ecosystem" 
            className="w-full h-full object-cover  transform group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-linear-to-t from-slate-900/5 via-transparent to-transparent pointer-events-none" />
        </div> 

        {/* 2. CORPORATE CONTENT */}
        <div className="lg:col-span-7 w-full space-y-8">
          <div className="space-y-4">
            <h3 className="reveal-about-item text-purple-600 font-bold text-xs uppercase tracking-widest flex items-center gap-3">
              <span className="w-6 h-0.5 bg-purple-600 rounded-full" />
              Transform Ideas into Reality
            </h3>
            <h2 className="reveal-about-item text-3xl md:text-5xl font-extrabold text-slate-950 tracking-tight leading-tight">
              Vauntageo Integrated <br /> Systems Technology
            </h2>
            <p className="reveal-about-item text-slate-600 text-base leading-relaxed">
              VIST is a premier information technology service provider passionate about exploring breakthroughs in the ever-evolving world of technology. We deliver a comprehensive range of cutting-edge technology solutions designed to help our clients solve complex business challenges.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-6 border-t border-slate-100">
            <div className="reveal-about-item space-y-2">
              <h4 className="text-slate-900 text-lg font-bold">Empowering Businesses</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                We empower businesses through innovative and sustainable technology solutions. We are committed to pushing the boundaries of technological advancement to create products that help drive efficiency.
              </p>
            </div>
            <div className="reveal-about-item space-y-2">
              <h4 className="text-slate-900 text-lg font-bold">Strategic Consultation</h4>
              <p className="text-slate-500 text-sm leading-relaxed">
                Through careful consultation, we work with you to strategise, design and deliver solutions that will streamline efficiencies and improve your business processes to enhance operations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutVIST;