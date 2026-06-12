import React, {  useState } from 'react';
import { Menu, X, Phone, Layers } from 'lucide-react';
import { Link, useLocation } from 'react-router';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Helper function to handle active page typography highlights
  const isActive = (path: string) => location.pathname === path;

  return (
    <>
      <nav 
        className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 md:px-12 py-4 transition-all duration-300 bg-white/70 backdrop-blur-md border-b border-slate-200/80 shadow-xs"
      >
        <div className="flex items-center gap-8 xl:gap-12">
          {/* 1. Logo Section - Swapped to look crisp on a light canvas */}
          <Link to="/" className="cursor-pointer shrink-0">
            <img src="/logo.png" alt="VIST Technology Logo" className="h-12 w-auto object-contain" />
          </Link>

          {/* 2. Desktop Navigation Architecture  */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-6 xl:gap-8 text-[14px] font-semibold text-slate-600">
              <li>
                <Link 
                  to="/" 
                  className={`transition-colors py-2 block border-b-2 ${isActive('/') ? 'text-purple-600 border-purple-600' : 'border-transparent hover:text-purple-600'}`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  to="/about" 
                  className={`transition-colors py-2 block border-b-2 ${isActive('/about') ? 'text-purple-600 border-purple-600' : 'border-transparent hover:text-purple-600'}`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/services" 
                  className={`transition-colors py-2 block border-b-2 ${isActive('/services') ? 'text-purple-600 border-purple-600' : 'border-transparent hover:text-purple-600'}`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  to="/products" 
                  className={`transition-colors py-2 block border-b-2 ${isActive('/products') ? 'text-purple-600 border-purple-600' : 'border-transparent hover:text-purple-600'}`}
                >
                  Products
                </Link>
              </li>
              <li>
                <Link 
                  to="/sectors" 
                  className={`transition-colors py-2 block border-b-2 ${isActive('/sectors') ? 'text-purple-600 border-purple-600' : 'border-transparent hover:text-purple-600'}`}
                >
                  Sectors We Serve
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 3. Desktop Action Area  */}
        <div className="hidden lg:flex items-center gap-5 xl:gap-6">
          <a 
            href="tel:+2349090004231" 
            className="flex items-center gap-2 text-sm font-bold text-slate-700 hover:text-purple-600 transition-colors"
          >
            <Phone size={14} className="text-purple-600" />
            +234 909 000 4231
          </a>
          
          <Link 
            to="/contact?demo=true" 
            className="px-5 py-2.5 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-full text-xs font-bold tracking-wider uppercase border border-purple-200/60 transition-all flex items-center gap-1.5"
          >
            <Layers size={12} /> Request a Demo
          </Link>

          <Link 
            to="/contact" 
            className="px-6 py-2.5 bg-purple-600 text-white rounded-full text-xs font-bold tracking-wider uppercase hover:bg-purple-700 transition-all shadow-md shadow-purple-600/10 active:scale-95"
          >
            Contact Us
          </Link>
        </div>

        {/* 4. Mobile Toggle */}
        <button 
          className="lg:hidden text-slate-800 p-2 relative z-50 rounded-xl hover:bg-slate-100 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* 5. Mobile Full-Screen Overlay  */}
      <div 
        className={`fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out flex flex-col pt-32 px-8 lg:hidden ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col gap-6 text-xl font-bold text-slate-900 border-b border-slate-100 pb-8">
          <li><Link to="/" onClick={() => setIsOpen(false)} className={isActive('/') ? 'text-purple-600' : ''}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)} className={isActive('/about') ? 'text-purple-600' : ''}>About Us</Link></li>
          <li><Link to="/services" onClick={() => setIsOpen(false)} className={isActive('/services') ? 'text-purple-600' : ''}>Services</Link></li>
          <li><Link to="/products" onClick={() => setIsOpen(false)} className={isActive('/products') ? 'text-purple-600' : ''}>Products</Link></li>
          <li><Link to="/sectors" onClick={() => setIsOpen(false)} className={isActive('/sectors') ? 'text-purple-600' : ''}>Sectors We Serve</Link></li>
        </ul>
        
        <div className="flex flex-col gap-4 mt-8">
          <a 
            href="tel:+2349090004231" 
            className="text-slate-800 font-bold flex items-center gap-2 text-base"
          >
            <Phone size={16} className="text-purple-600" />
            +234 909 000 4231
          </a>
          <div className="grid grid-cols-2 gap-4 pt-2">
            <Link 
              to="/contact?demo=true" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 bg-slate-50 border border-slate-200 text-slate-700 font-bold text-xs uppercase tracking-wider text-center rounded-xl"
            >
              Request Demo
            </Link>
            <Link 
              to="/contact" 
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 bg-purple-600 text-white font-bold text-xs uppercase tracking-wider text-center rounded-xl shadow-xs"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;