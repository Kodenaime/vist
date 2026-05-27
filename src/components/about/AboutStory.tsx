import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutStory: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (textRef.current) {
        // Target individual elements within the text block for a clean staggered slide-up
        const elements = Array.from(textRef.current.children);
        
        gsap.fromTo(elements,
          {
            y: 30,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.2,
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto bg-[#050505]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Side: Copy (Takes 7 columns for premium readability) */}
        <div ref={textRef} className="lg:col-span-7 space-y-8 z-10">
          <div>
            <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">
              Who We Are
            </h4>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Vauntageo Integrated <br /> Systems Technology
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            VIST is an information technology service provider passionate about exploring the latest trends and breakthroughs in the ever-evolving world of technology.
          </p>

          <div className="p-8 bg-white/[0.02] border-l-4 border-purple-500 rounded-r-2xl backdrop-blur-md border border-white/5">
            <h3 className="text-white font-bold mb-2 italic">Our Mission</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              To empower businesses through innovative and sustainable technology solutions, pushing the boundaries of advancement to contribute to the betterment of society.
            </p>
          </div>
        </div>

        {/* Right Side: Visual Asset Container (Takes 5 columns) */}
        <div className="lg:col-span-5 w-full aspect-square sm:aspect-video lg:aspect-[4/5] min-h-[350px] lg:min-h-[500px] rounded-[48px] overflow-hidden border border-white/10 bg-white/5 relative group">
           <img 
             src="/images/who.webp" 
             alt="VIST Global Infrastructure Information Technology Solutions" 
             className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
           />
           {/* Vignette blend layer */}
           <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/50 via-transparent to-transparent pointer-events-none" />
        </div>

      </div>
    </section>
  );
};

export default AboutStory;