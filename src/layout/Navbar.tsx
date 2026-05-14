import React, { useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const navRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  
  return (
    <>
      <nav 
        ref={navRef}
        className="fixed top-0 left-0 w-full z-100 flex items-center justify-between px-6 md:px-12 py-5 transition-all duration-300 bg-black/10 backdrop-blur-sm border-b border-white/5"
      >
        <div className='flex items-center gap-9 md:gap-16'>
            {/* 1. Logo Section */}
            <div className="flex items-center gap-2 cursor-pointer relative z-50">
            <div className="text-xl md:text-2xl font-bold tracking-tight text-white flex items-center">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-500">VIS</span>
                <span className="ml-2 text-[10px] md:text-xs font-light tracking-[0.3em] uppercase opacity-70 hidden sm:block">Technology</span>
            </div>
            </div>

            {/* 2. Desktop Navigation Pill */}
            <div className="hidden lg:flex items-center px-8 py-2.5 bg-white/3 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
            <ul className="flex items-center gap-10 text-[13px] font-medium text-gray-400">
                <li className="hover:text-white hover:border-b transition-colors"><a href="/">Home</a></li>
                <li className="hover:text-white hover:border-b transition-colors"><a href="/about">About</a></li>
                <li className="hover:text-white hover:border-b transition-colors"><a href="/services">Services</a></li>
            </ul>
            </div>
        </div>

        {/* 3. Desktop Action Area */}
        <div className="hidden lg:flex items-center gap-6">
          <a href="tel:+2348033432310" className="text-sm font-medium text-gray-300 hover:text-purple-400 transition-colors [cite: 100, 101]">
            +234 803 343 2310 
          </a>
          <button className="px-7 py-2.5 bg-white text-black rounded-full text-sm font-bold hover:bg-purple-500 hover:text-white transition-all duration-300 active:scale-95 shadow-lg shadow-purple-500/20">
            Contact Us
          </button>
        </div>

        {/* 4. Mobile Toggle */}
        <button 
          className="lg:hidden text-white p-2 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* 5. Mobile Full-Screen Overlay */}
      <div className={`fixed inset-0 z-90 bg-black/95 backdrop-blur-2xl transition-transform duration-500 flex flex-col items-center justify-center lg:hidden ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}>
        <ul className="flex flex-col items-center gap-8 text-2xl font-bold text-white mb-10">
          <li><a href="/" onClick={() => setIsOpen(false)}>Home</a></li>
          <li><a href="/about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="/services" onClick={() => setIsOpen(false)}>Services</a></li>
        </ul>
        <div className="flex flex-col items-center gap-4">
           <a href="tel:+2348033432310" className="text-purple-400 font-medium [cite: 100]">+234 803 343 2310</a>
           <button className="px-10 py-4 bg-white text-black rounded-full font-bold">Contact Us</button>
        </div>
      </div>
    </>
  );
};

export default Navbar;