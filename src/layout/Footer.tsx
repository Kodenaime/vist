import React from 'react';
import {  Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 md:px-12 border-t border-white/5 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -z-10" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Brand Column */}
        <div className="space-y-6">
          <div className="text-2xl font-bold tracking-tight text-white flex items-center">
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-indigo-500">VIS</span>
            <span className="ml-1 text-xs font-light tracking-[0.2em] uppercase opacity-80">Technology</span>
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Empowering businesses through innovative and sustainable technology solutions. 
          </p>
        </div>

        {/* 2. Explore Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Resources</li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Documents</li>
          </ul>
        </div>

        {/* 3. Menu Column */}
        <div>
          <h4 className="text-white font-bold mb-6">Menu</h4>
          <ul className="space-y-4 text-sm text-gray-500">
            <li><a href="/" className="hover:text-purple-400 transition-colors">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400 transition-colors">About</a></li>
            <li><a href="/services" className="hover:text-purple-400 transition-colors">Services</a></li>
            <li><a href="/contact" className="hover:text-purple-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* 4. Office Location Column */}
        <div className="space-y-6">
          <h4 className="text-white font-bold">Office Location</h4>
          <div className="space-y-4">
            <div className="flex items-start gap-3 text-sm text-gray-500">
              <MapPin size={18} className="text-purple-500 shrink-0" />
              <span>Gbagada, Lagos </span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Phone size={18} className="text-purple-500 shrink-0" />
              <a href="tel:+2348033432310" className="hover:text-white transition-colors">+234 803 343 2310 [cite: 100]</a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <Mail size={18} className="text-purple-500 shrink-0" />
              <a href="mailto:business@vistechnology.ng" className="hover:text-white transition-colors">business@vistechnology.ng [cite: 101]</a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[11px] text-gray-600 uppercase tracking-widest">
          <span className="hover:text-white cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-white cursor-pointer transition-colors">Privacy</span>
          <span className="hover:text-white cursor-pointer transition-colors">Cookies</span>
        </div>
        
        <p className="text-[11px] text-gray-600">
          © 2026 Vauntageo Integrated Systems Technology. All Rights Reserved.
        </p>

        <div className="flex items-center gap-4">
          {[FaFacebookF, FaLinkedin, FaXTwitter].map((Icon, i) => (
            <div key={i} className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-500 hover:text-white hover:border-purple-500 transition-all cursor-pointer">
              <Icon size={18} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;