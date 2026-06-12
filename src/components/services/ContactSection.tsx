import React from 'react';
import { Link } from 'react-router';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-white border-t border-slate-100">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* LEFT COLUMN: Corporate Verified Contacts (Takes 5 Columns) */}
        <div className="lg:col-span-5 space-y-10">
          <div className="space-y-4">
            <span className="text-purple-600 text-xs font-bold uppercase tracking-widest block">Get Connected</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-950 tracking-tight">Contact Us</h2>
            <div className="h-1 w-20 bg-linear-to-r from-purple-600 to-indigo-600 rounded-full" />
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-all shadow-xs">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Call Us</p>
                <a href="tel:+2349090004231" className="text-base font-extrabold text-slate-900 hover:text-purple-600 transition-colors">
                  +234 909 000 4231
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-xs">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Email Us</p>
                <a href="mailto:business.vistechnology@gmail.com" className="text-base font-extrabold text-slate-900 hover:text-indigo-600 transition-colors">
                  business.vistechnology@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 group-hover:bg-slate-950 group-hover:text-white transition-all shadow-xs">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-[10px] text-slate-400 uppercase tracking-widest font-bold">Visit Us</p>
                <p className="text-base font-extrabold text-slate-900">Gbagada, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Functional Navigation Callout (Takes 7 Columns) */}
        <div className="lg:col-span-7 w-full">
          <div className="bg-slate-50 border border-slate-200/80 rounded-[40px] p-2 shadow-sm relative overflow-hidden group">
             <div className="absolute top-[-20%] right-[-10%] w-60 h-60 bg-purple-100/70 blur-3xl rounded-full pointer-events-none" />
             
             <div className="w-full rounded-[34px] bg-white border border-slate-100 flex flex-col items-center justify-center p-8 sm:p-12 text-center space-y-6 relative z-10 shadow-xs">
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight">Ready to Transform Your Workflow?</h3>
                <p className="text-slate-500 text-xs sm:text-sm leading-relaxed max-w-sm">
                  Connect with our systems engineering team to request software demos or optimize your corporate cloud infrastructure.
                </p>
                <Link 
                  to="/contact" 
                  className="px-8 py-3.5 bg-purple-600 text-white rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-purple-700 shadow-md shadow-purple-600/10 transition-all active:scale-95"
                >
                  Request Consultation <Send size={12} />
                </Link>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;