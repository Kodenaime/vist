import { useEffect } from 'react';
import { useLocation } from 'react-router';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const ScrollToTopAndRefresh: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' 
    });

    ScrollTrigger.getAll().forEach(trigger => trigger.kill());

    const timer = setTimeout(() => {
      ScrollTrigger.refresh(true);
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);  

  return null;
};

export default ScrollToTopAndRefresh;