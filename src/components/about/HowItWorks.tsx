import React from 'react';
import { Settings, MessageSquare, LineChart, ShieldAlert } from 'lucide-react';

const HowItWorks: React.FC = () => {
  const steps = [
    {
      phase: "Phase 01: Setup",
      title: "Subscription & Training",
      desc: "A business subscribes to the AI Support Plan. Through secure API integration, the AI agent is trained on your proprietary data, policies, and operational workflows.",
      icon: <Settings className="text-purple-400" />
    },
    {
      phase: "Phase 02: Launch",
      title: "Real-Time Interaction",
      desc: "When a customer calls, the AI agent answers in your brand voice. It can take orders, manage bookings, and provide account updates in real time.",
      icon: <MessageSquare className="text-indigo-400" />
    },
    {
      phase: "Phase 03: Oversight",
      title: "Escalation & Insights",
      desc: "Issues exceeding thresholds trigger automatic human escalation. After each call, receive concise summaries, actionable insights, and performance analytics.",
      icon: <LineChart className="text-purple-400" />
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="flex flex-col items-center text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 italic">How It Works</h2>
        <p className="text-gray-500 max-w-2xl text-sm leading-relaxed">
          Odion’s Voice AI Agent integrates seamlessly into your existing infrastructure to deliver a natural, human-like experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {steps.map((step, i) => (
          <div key={i} className="group p-10 bg-white/2 border border-white/10 rounded-[40px] hover:bg-white/6 transition-all duration-500">
            <span className="text-[10px] font-bold text-purple-500 uppercase tracking-widest mb-6 block">
              {step.phase}
            </span>
            <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
              {step.icon}
            </div>
            <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
            <p className="text-gray-500 text-xs leading-relaxed">
              {step.desc}
            </p>
          </div>
        ))}
      </div>

      {/* Operational Highlights Box */}
      <div className="mt-16 p-8 md:p-12 bg-indigo-600/5 border border-indigo-500/10 rounded-[48px] flex flex-col md:flex-row gap-12 items-center">
         <div className="flex-1 space-y-6">
            <h4 className="text-2xl font-bold text-white flex items-center gap-3">
              <ShieldAlert className="text-indigo-400" /> Maintaining Human Oversight
            </h4>
            <p className="text-gray-400 text-sm leading-relaxed">
              The escalation to a human representative can be triggered either by direct customer request or automatically when complex issues exceed predefined thresholds[cite: 53]. This ensures improved customer experience and continuous service availability while keeping your team in control where necessary.
            </p>
         </div>
         <div className="flex-1 grid grid-cols-2 gap-4">
            {["Call Summaries", "Conversation Highlights", "Intent Trends", "Resolution Rates"].map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <p className="text-[10px] text-gray-500 uppercase tracking-widest">{stat}</p>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
};

export default HowItWorks;