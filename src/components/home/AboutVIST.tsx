import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutVIST: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-fade", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 md:px-12 max-w-7xl mx-auto border-y border-white/5 bg-linear-to-b from-transparent via-purple-900/5 to-transparent">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">      
        

        {/* 2. Image Placeholder (Center) */}
        <div className="w-full h-full rounded-[40px] overflow-hidden border border-white/10 bg-linear-to-br from-white/5 to-transparent">
            {/* REPLACE WITH YOUR CINEMATIC AI IMAGE */}
            <div className="w-full h-full bg-slate-800 flex items-center justify-center text-gray-500 italic">
               <img src="/images/about.webp" alt="" />
            </div>
          </div> 

        {/* 3. Mission & Value Content */}
        <div className="about-fade w-full  space-y-8">
          <div className="space-y-4">
            <h3 className="text-white font-semibold text-lg flex items-center gap-3">
              <span className="w-8 h-px bg-purple-500" />
              Transform Ideas into Reality
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Vauntageo Integrated Systems Technology (VIST) is a premier information technology service provider. 
              We are passionate about exploring breakthroughs in the ever-evolving world of technology.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 pt-4 border-t border-white/10">
            <div>
              <h4 className="text-white text-lg font-bold mb-2">Power of AI at Your Fingertips</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                We empower businesses through innovative and sustainable solutions that drive efficiency and contribute to the betterment of society.
              </p>
            </div>
            <div>
              <h4 className="text-white text-lg font-bold mb-2">AI Partner for Smarter</h4>
              <p className="text-gray-500 text-sm leading-relaxed">
                Through careful consultation, we strategise and deliver solutions to streamline efficiencies and enhance your business operations.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutVIST;