import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AboutStory: React.FC = () => {
  const textRef = useRef(null);

  useEffect(() => {
  gsap.fromTo(
    textRef.current,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.2,
      ease: "expo.out",
      delay: 0.2,
    }
  );
}, []);

  return (
    <section className="pt-40 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Copy */}
        <div ref={textRef} className="space-y-8">
          <div>
            <h4 className="text-purple-400 font-bold uppercase tracking-widest text-xs mb-4">Who We Are</h4>
            <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">
              Vauntageo Integrated <br /> Systems Technology
            </h1>
          </div>
          
          <p className="text-gray-400 text-lg leading-relaxed">
            VIST is an information technology service provider passionate about exploring the latest trends and breakthroughs in the ever-evolving world of technology.
          </p>

          <div className="p-8 bg-white/5 border-l-4 border-purple-500 rounded-r-2xl backdrop-blur-md">
            <h3 className="text-white font-bold mb-2 italic">Our Mission</h3>
            <p className="text-gray-400 text-sm">
              To empower businesses through innovative and sustainable technology solutions, pushing the boundaries of advancement to contribute to the betterment of society.
            </p>
          </div>
        </div>

        {/* Right Side: Visual */}
        <div className="relative aspect-square rounded-[48px] overflow-hidden border border-white/10 bg-white/5">
           {/* Image: Global connectivity or high-tech city */}
           <div className="absolute inset-0 bg-linear-to-br from-purple-600/20 to-transparent" />
           <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
             [Global Tech Innovation Visual]
           </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;
