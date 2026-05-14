import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Contact Info */}
        <div className="space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tighter italic">Contact Us</h2>
            <div className="h-1.5 w-32 bg-linear-to-r from-purple-500 to-indigo-500 rounded-full" />
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-indigo-600/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <Phone size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                <a href="tel:+2348033432310" className="text-xl font-bold text-white">+234 803 343 2310 </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-purple-600/10 border border-purple-500/20 flex items-center justify-center text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all">
                <Mail size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                <a href="mailto:business@vistechnology.ng" className="text-xl font-bold text-white">business@vistechnology.ng </a>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Visit Us</p>
                <p className="text-xl font-bold text-white">Gbagada, Lagos </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Visual Form Placeholder */}
        <div className="relative group">
          <div className="absolute -inset-4 bg-linear-to-r from-purple-500/20 to-indigo-500/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
          <div className="relative bg-white/3 border border-white/10 rounded-[48px] p-1 overflow-hidden">
             
             <div className="aspect-square w-full rounded-[44px] bg-slate-900 flex flex-col items-center justify-center p-12 text-center space-y-6">
                <h3 className="text-2xl font-bold text-white italic">Ready to Cook?</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Fill out our request consultation form to streamline your business efficiencies.</p>
                <button className="mt-4 px-10 py-4 bg-white text-black rounded-full font-bold flex items-center gap-3 hover:bg-purple-500 hover:text-white transition-all">
                  Request Consultation <Send size={18} />
                </button>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;