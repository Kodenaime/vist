import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [status, setStatus] = useState<'IDLE' | 'LOADING' | 'SUCCESS' | 'ERROR'>('IDLE');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('LOADING');
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setStatus('SUCCESS');
        form.reset();
      } else {
        const data = await response.json();
        throw new Error(data.error || 'Oops! There was a problem submitting your form.');
      }
    } catch (error: any) {
      setStatus('ERROR');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
    }
  };

  return (
    <main className="min-h-screen bg-[#050505] pt-36 pb-24 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start relative z-10">
        
        {/* LEFT COLUMN: Corporate Office Information (Takes 5 columns) */}
        <div className="lg:col-span-5 space-y-12">
          <div className="space-y-4">
            <span className="text-purple-400 text-xs font-bold uppercase tracking-widest block">Get In Touch</span>
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tighter">Let's Connect.</h1>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              Have a project in mind or need expert advisory? Reach out to our team to streamline your enterprise infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-all">
                <Phone size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Call Us</p>
                <a href="tel:+2348033432310" className="text-base font-bold text-white hover:text-purple-400 transition-colors">+234 803 343 2310</a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Email Us</p>
                <a href="mailto:business.vistechnology@gmail.com" className="text-base font-bold text-white hover:text-indigo-400 transition-colors">business.vistechnology@gmail.com</a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Email Us</p>
                <a href="mailto:business@vistechnology.ng" className="text-base font-bold text-white hover:text-indigo-400 transition-colors">business@vistechnology.ng</a>
              </div>
            </div>

            <div className="flex items-center gap-5 group">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 group-hover:bg-white group-hover:text-black transition-all">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest font-medium">Office Location</p>
                <p className="text-base font-bold text-white">Gbagada, Lagos</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Functional Form Panel (Takes 7 columns) */}
        <div className="lg:col-span-7 w-full relative">
          <div className="bg-white/2 border border-white/10 rounded-[40px] p-8 md:p-12 backdrop-blur-3xl relative overflow-hidden">
            
            {/* Conditional Rendering based on form submission states */}
            {status === 'SUCCESS' ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4 animate-fade-in">
                <div className="w-16 h-16 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-gray-400 text-sm max-w-sm">
                  Thank you for reaching out to VIST. A strategic tech consultant will review your inquiry and get back to you shortly.
                </p>
                <button 
                  onClick={() => setStatus('IDLE')}
                  className="mt-6 px-6 py-2.5 border border-white/10 rounded-full text-xs font-bold text-white uppercase tracking-widest hover:bg-white hover:text-black transition-all"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {status === 'ERROR' && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-400 rounded-2xl flex items-center gap-3 text-sm">
                    <AlertCircle size={18} className="shrink-0" />
                    <p>{errorMessage}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Full Name</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name" 
                      required
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email" 
                      required
                      placeholder="johndoe@company.com"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Subject</label>
                  <input 
                    type="text" 
                    id="subject"
                    name="subject" 
                    required
                    placeholder="e.g., Bespoke Application Development Inquiry"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Your Message</label>
                  <textarea 
                    id="message"
                    name="message" 
                    required
                    rows={5}
                    placeholder="Tell us about your technical challenges or consultation needs..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                  />
                </div>

                <button 
                  type="submit" 
                  disabled={status === 'LOADING'}
                  className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:bg-indigo-800 disabled:cursor-not-allowed text-white font-bold rounded-xl flex items-center justify-center gap-2.5 transition-all text-sm group"
                >
                  {status === 'LOADING' ? (
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <>
                      Send Message <Send size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Aesthetic Background Ambient Blur Elements */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] bg-purple-600/[0.07] blur-[120px] rounded-full -z-10 pointer-events-none" />
      <div className="absolute bottom-10 right-[-10%] w-[400px] h-[400px] bg-indigo-600/[0.07] blur-[120px] rounded-full -z-10 pointer-events-none" />
    </main>
  );
};

export default Contact;