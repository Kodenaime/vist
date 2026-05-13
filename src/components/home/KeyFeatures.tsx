import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const KeyFeatures: React.FC = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".feature-reveal", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
        },
        x: (i) => i % 2 === 0 ? -30 : 30,
        opacity: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power3.out"
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      {/* Header Area */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-16 gap-8">
        <h2 className="feature-reveal text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight">
          Discover the Future of <br /> AI Innovation
        </h2>
        <p className="feature-reveal text-gray-400 max-w-md text-sm leading-relaxed">
          Odion AI provides a seamless bridge between automated efficiency and human-centric support, catering to both business operations and customer satisfaction.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* LEFT: Tall Image Visual */}
        <div className="feature-reveal lg:col-span-4 rounded-[40px] overflow-hidden border border-white/10 bg-white/5 aspect-3/4 lg:aspect-auto relative group">
           {/* IMAGE PROMPT: High-tech control room with blue data visualizations */}
           <div className="absolute inset-0 bg-linear-to-t from-indigo-900/40 to-transparent" />
           <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
             [Control Center Visual]
           </div>
        </div>

        {/* RIGHT: Content Stack */}
        <div className="lg:col-span-8 flex flex-col gap-8">
          
          {/* Top Row: Business Benefits */}
          <div className="grid grid-cols-2 gap-8">
            <div className="feature-reveal p-10 bg-white/3 border border-white/10 rounded-[40px] relative overflow-hidden">
              <div className="flex gap-4 mb-6">
                 <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-500/30 text-[10px] text-purple-300 uppercase tracking-widest">For Businesses</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Empower Your Vision with AI</h3>
              <ul className="space-y-3">
                {[
                  "Instant phone support with no hiring or training required [cite: 65]",
                  "Predictable spend via airtime and simple onboarding [cite: 65]",
                  "Personalised agent trained on core and peripheral business aspects [cite: 66]"
                ].map((text, i) => (
                  <li key={i} className="text-gray-400 text-xs flex items-start gap-2">
                    <span className="text-purple-500 mt-1">•</span> {text}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Small Decorative Image Placeholder */}
            <div className="feature-reveal hidden md:block rounded-[32px] bg-white/5 border border-white/10 h-64 overflow-hidden">
               <div className="w-full h-full flex items-center justify-center text-gray-800 italic">[AI Node Map]</div>
            </div>
          </div>

          {/* Bottom Row: Caller Benefits & Experience */}
          <div className="feature-reveal p-8 bg-white/2 border border-white/5 rounded-[40px] flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="max-w-md">
               <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 bg-indigo-400 rounded-full" />
                  </div>
                  <h4 className="text-white font-bold">For Callers</h4>
               </div>
               <p className="text-gray-500 text-xs leading-relaxed mb-4">
                 Experience shorter wait times and consistent, 24/7 accessibility to real-time support on-the-go.
               </p>
            </div>
            
            <div className="flex items-center gap-6 pr-4">
               <div className="text-right">
                  <p className="text-4xl font-bold text-white tracking-tighter">12+</p>
                  <p className="text-[10px] text-gray-500 uppercase tracking-widest">Digital Experience</p>
               </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;