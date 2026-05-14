import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const GetStarted: React.FC = () => {
  const dayOneFeatures = [
    "Branded greetings and menus",
    "Answers to FAQs",
    "Order/booking intake",
    "Status checks",
    "Secure hand-off to a human line",
    "Call summaries",
    "Volume & containment dashboard"
  ];

  const tiers = [
    { name: "Starter", focus: "Small volume" },
    { name: "Business", focus: "Feature depth" },
    { name: "Pro", focus: "Service level commitments" }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center bg-white/2 border border-white/5 rounded-[48px] p-8 md:p-16">
        
        {/* Left: Day One Features List */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Features Businesses <br /> 
            <span className="text-purple-400 font-normal italic">Get on Day One</span>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {dayOneFeatures.map((feature, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="text-indigo-500 shrink-0 mt-1" size={18} />
                <span className="text-gray-400 text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Commercial Model & CTA */}
        <div className="space-y-8 bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10">
          <h3 className="text-2xl font-bold text-white">Commercial Model</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            The AI Support Plan operates on a tiered subscription model, designed to accommodate businesses of different sizes, operational complexity, and service requirements.
          </p>
          
          <div className="flex flex-col gap-3">
            {tiers.map((tier, i) => (
              <div key={i} className="flex justify-between items-center px-6 py-4 bg-black/20 rounded-2xl border border-white/5 group hover:border-purple-500/50 transition-colors">
                <span className="text-white font-bold">{tier.name}</span>
                <span className="text-[10px] text-gray-500 uppercase tracking-widest">{tier.focus}</span>
              </div>
            ))}
          </div>

          <button className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full font-bold flex items-center justify-center gap-3 transition-all group shadow-xl shadow-indigo-600/20">
            Activate AI Airtime <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;