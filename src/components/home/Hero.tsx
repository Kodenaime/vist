import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ArrowRight, Shield, Globe, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router';

const SLIDE_DATA = [
  {
    image: '/background1.webp',
    tagline: 'Enterprise Optimization',
    icon: <Globe size={14} />,
    titlePrimary: 'Integrating Technology.',
    titleSecondary: 'Driving Operational Efficiency.',
    description: 'We align corporate workflows with scalable tech infrastructures. From advisory to execution, VIST designs architectures that transform computational capabilities into measurable business growth.',
  },
  {
    image: '/background2.webp',
    tagline: 'Pan-African Impact',
    icon: <Award size={14} />,
    titlePrimary: 'Empowering African',
    titleSecondary: 'Businesses to Scale Globally.',
    description: 'Delivering world-class technical solutions tailored to regional market complexities. We equip banking, fintech, oil & gas, and FMCG sectors with high-availability application systems.',
  },
  {
    image: '/background3.webp',
    tagline: 'Mission-Critical Protection',
    icon: <Shield size={14} />,
    titlePrimary: 'Secure, Smart and',
    titleSecondary: 'Scalable Infrastructures.',
    description: 'Protecting corporate assets through robust zero-trust network layers, automated backup storage structures, and high-performance server clusters engineered for continuous uptime.',
  },
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textContainerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);
  const timerRef = useRef<number | null>(null);

  const animateSlideEntrance = () => {
    if (bgRef.current && textContainerRef.current) {
      // Cinematic image subtle scale-up
      gsap.fromTo(bgRef.current, 
        { scale: 1.1, opacity: 0.7 }, 
        { scale: 1, opacity: 1, duration: 1.5, ease: 'power3.out' }
      );

      // Smooth centered text slide up and fade in
      const elements = Array.from(textContainerRef.current.children);
      gsap.fromTo(elements,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' }
      );
    }
  };

  const resetSliderTimer = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
    
    timerRef.current = window.setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % SLIDE_DATA.length);
    }, 8000);
  };

  useEffect(() => {
    animateSlideEntrance();
    resetSliderTimer();

    return () => {
      if (timerRef.current) window.clearInterval(timerRef.current);
    };
  }, [currentIndex]);

  const handleNext = () => setCurrentIndex((prev) => (prev + 1) % SLIDE_DATA.length);
  const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + SLIDE_DATA.length) % SLIDE_DATA.length);

  const activeSlide = SLIDE_DATA[currentIndex];

  return (
    <section className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND IMAGE LAYER */}
      <div className="absolute inset-0 z-0">
        <img
          ref={bgRef}
          src={activeSlide.image}
          alt="VIST Global Technology Infrastructure"
          className="w-full h-full object-cover object-center transition-all duration-700 ease-out select-none"
        />
        {/* Balanced dark-vignette overlay ensuring white typography pops on any network image line */}
        <div className="absolute inset-0 bg-slate-950/55 backdrop-blur-[1px]" />
        <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-transparent to-slate-950/30" />
      </div>

      {/* 2. FULLY CENTERED EMBEDDED TEXT CONTENT */}
      <div className="w-full max-w-5xl px-6 md:px-12 z-10 relative text-center">
        <div ref={textContainerRef} className="flex flex-col items-center justify-center space-y-6 md:space-y-8">
          
          {/* Brand Pillar Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-white uppercase tracking-widest shadow-lg">
            <span className="text-purple-400">{activeSlide.icon}</span> 
            {activeSlide.tagline}
          </div>

          {/* Core Core Headlines */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.15] text-white max-w-4xl drop-shadow-sm">
            {activeSlide.titlePrimary} <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 via-purple-300 to-indigo-400">
              {activeSlide.titleSecondary}
            </span>
          </h1>
          
          {/* Structured Context Paragraph */}
          <p className="text-slate-200 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed font-medium drop-shadow-md">
            {activeSlide.description}
          </p>

          {/* Action Navigation Callbacks */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 w-full sm:w-auto">
            <Link 
              to="/services" 
              className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-purple-950 rounded-full font-bold flex items-center justify-center gap-2 shadow-xl transition-all duration-300 group text-sm"
            >
              Explore Our Services 
              <ArrowRight size={16} className="text-purple-600 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact?demo=true" 
              className="w-full sm:w-auto px-8 py-4 bg-purple-600/20 hover:bg-purple-600/30 text-white border border-purple-500/40 backdrop-blur-md rounded-full font-bold transition-all duration-300 text-center text-sm"
            >
              Request a Demo
            </Link>
          </div>
        </div>
      </div>

      {/* 3. CONTROLS: Manual Arrow Overrides */}
      <div className="absolute bottom-10 right-6 md:right-12 z-20 flex items-center gap-3">
        <button 
          onClick={handlePrev}
          className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-purple-600 hover:border-purple-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer active:scale-95"
          aria-label="Previous Slide"
        >
          <ChevronLeft size={18} />
        </button>
        <button 
          onClick={handleNext}
          className="w-11 h-11 rounded-full border border-white/10 bg-white/5 hover:bg-purple-600 hover:border-purple-500 text-white flex items-center justify-center transition-all duration-300 backdrop-blur-md cursor-pointer active:scale-95"
          aria-label="Next Slide"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* 4. PINBAR POSITION METRIC TRACKERS */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {SLIDE_DATA.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1 rounded-full transition-all duration-500 cursor-pointer ${
              index === currentIndex ? 'w-8 bg-purple-400' : 'w-2 bg-white/30 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;