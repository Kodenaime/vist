import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { PhoneCall, Zap, UserCheck, ShieldCheck } from 'lucide-react';

const OdionDeepDive: React.FC = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
  gsap.fromTo(
    scrollRef.current,
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
    <section ref={scrollRef} className="py-24 px-6 md:px-12 max-w-7xl mx-auto border-t border-white/5">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">What is Odion AI?</h2>
        <div className="h-1.5 w-32 bg-linear-to-r from-purple-500 to-indigo-500 mx-auto rounded-full" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
        <div className="card-reveal space-y-6">
          <p className="text-gray-300 text-lg leading-relaxed">
            Odion AI offers businesses a dedicated channel number equipped with a built-in AI customer support agent. 
            It answers in your brand voice, delivering a natural experience that handles requests end-to-end[cite: 19, 43].
          </p>
          
          <div className="p-6 bg-white/5 border border-white/10 rounded-2xl">
            <h4 className="text-purple-400 font-bold mb-3 flex items-center gap-2">
              <Zap size={18} /> The "AI Airtime" Model
            </h4>
            <p className="text-gray-400 text-sm">
              Businesses subscribe to "AI airtime" at a premium rate to activate and keep the service running seamlessly[cite: 20].
            </p>
          </div>
        </div>

        <div className="card-reveal relative aspect-video rounded-[32px] overflow-hidden border border-white/10 bg-white/5">
           {/* Image: AI Robot with headset at workstation */}
           <div className="absolute inset-0 bg-linear-to-tr from-indigo-500/20 to-transparent" />
           <div className="w-full h-full flex items-center justify-center text-gray-700 italic">
             [AI Voice Agent Interface Visual]
           </div>
        </div>
      </div>

      {/* Feature Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {[
          { 
            title: "End-to-End Actions", 
            desc: "Handles service bookings, product sales, and common inquiries automatically.", 
            icon: <PhoneCall /> 
          },
          { 
            title: "Smart Escalation", 
            desc: "Transfers to a human only when issues exceed predefined thresholds or by request[cite: 49, 53].", 
            icon: <UserCheck /> 
          },
          { 
            title: "Trained on You", 
            desc: "Agent is trained on your proprietary data, policies, and workflows.", 
            icon: <ShieldCheck /> 
          },
          { 
            title: "Actionable Insights", 
            desc: "Receive call summaries and performance analytics after every interaction[cite: 55, 57].", 
            icon: <Zap /> 
          }
        ].map((feature, i) => (
          <div key={i} className="card-reveal p-8 bg-white/3 border border-white/10 rounded-3xl hover:bg-white/6 transition-all">
            <div className="w-12 h-12 rounded-xl bg-purple-500/20 text-purple-400 flex items-center justify-center mb-6">
              {feature.icon}
            </div>
            <h5 className="text-white font-bold mb-3">{feature.title}</h5>
            <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OdionDeepDive;