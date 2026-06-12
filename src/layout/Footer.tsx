import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router';
import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer: React.FC = () => {
  
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050505] pt-20 pb-10 px-6 md:px-12 border-t border-white/5 relative overflow-hidden text-white">
      {/* Background Deep Purple Ambient Decor Glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/3blur-[120px] rounded-full -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* 1. Brand Profile Column */}
        <div className="space-y-6">
          <Link to="/" className="inline-block cursor-pointer">
            {/* Keeping your white asset configuration path to stay crisp over dark backgrounds */}
            <img src="/whitelogo.png" alt="VIST Technology Logo" className="h-12 w-auto object-contain" />
          </Link>
          <p className="text-gray-400 text-sm leading-relaxed max-w-xs font-medium">
            Vauntageo Integrated Systems Technology (VIST) delivers end-to-end IT infrastructure, mission-critical cybersecurity, and automated business software built for scale.
          </p>
        </div>

        {/* 2. Explore Document Hub Column */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-6">Explore</h4>
          <ul className="space-y-4 text-sm text-gray-400 font-medium">
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Resources</li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Blog</li>
            <li className="hover:text-purple-400 cursor-pointer transition-colors">Technical Documents</li>
          </ul>
        </div>

        {/* 3. Core Directory Menu Architecture */}
        <div>
          <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400 mb-6">Menu</h4>
          <ul className="space-y-3.5 text-sm text-gray-400 font-medium">
            <li><Link to="/" className="hover:text-purple-400 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-purple-400 transition-colors">About Us</Link></li>
            <li><Link to="/services" className="hover:text-purple-400 transition-colors">Services</Link></li>
            <li><Link to="/products" className="hover:text-purple-400 transition-colors">Products</Link></li>
            <li><Link to="/sectors" className="hover:text-purple-400 transition-colors">Sectors We Serve</Link></li>
            <li><Link to="/contact" className="hover:text-purple-400 transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* 4. Verified Office & Intake Column */}
        <div className="space-y-6">
          <h4 className="text-sm font-bold uppercase tracking-wider text-purple-400">Office Location</h4>
          <div className="space-y-4 font-medium">
            <div className="flex items-start gap-3 text-sm text-gray-400">
              <MapPin size={16} className="text-purple-500 shrink-0 mt-0.5" />
              <span>Gbagada, Lagos</span>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Phone size={16} className="text-purple-500 shrink-0" />
              <a href="tel:+2349090004231" className="hover:text-purple-400 transition-colors">
                +234 909 000 4231
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-400">
              <Mail size={16} className="text-purple-500 shrink-0" />
              <a href="mailto:business.vistechnology@gmail.com" className="hover:text-purple-400 transition-colors break-all">
                business.vistechnology@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Information Sub-Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex gap-8 text-[11px] text-gray-500 font-bold uppercase tracking-widest order-2 md:order-1">
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Terms</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Privacy Policy</span>
          <span className="hover:text-purple-400 cursor-pointer transition-colors">Cookies</span>
        </div>
        
        <p className="text-[11px] text-gray-500 font-medium order-3 md:order-2 text-center md:text-left">
          © {currentYear} Vauntageo Integrated Systems Technology. All Rights Reserved.
        </p>

        {/* Social Connection Channels */}
        <div className="flex items-center gap-3.5 order-1 md:order-3">
          {[
            { Icon: FaFacebookF, href: "#" },
            { Icon: FaLinkedin, href: "#" },
            { Icon: FaXTwitter, href: "#" }
          ].map((item, i) => (
            <a 
              key={i} 
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-500 transition-all cursor-pointer active:scale-95"
            >
              <item.Icon size={16} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;