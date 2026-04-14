import { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('About us');

  // Automatically update active tab based on scroll position
  useEffect(() => {
    if (location.pathname !== '/') return; // Only track scroll on home page

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab('Services');
          } else if (activeTab === 'Services') {
            // Revert to About us immediately when services leaves the viewport
            setActiveTab('About us');
          }
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0 }
    );

    const servicesEl = document.getElementById('services');
    if (servicesEl) {
      observer.observe(servicesEl);
    }

    return () => {
      if (servicesEl) observer.unobserve(servicesEl);
    };
  }, [location.pathname, activeTab]);

  const handleServicesClick = (e) => {
    e.preventDefault();
    setActiveTab('Services');
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleAboutClick = (e) => {
    e.preventDefault();
    setActiveTab('About us');
    navigate('/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBlogsClick = (e) => {
    e.preventDefault();
    setActiveTab('Blogs');
    // Implement blog navigation when ready
  };

  const handleAuditClick = () => {
    navigate('/analyze');
  };

  const getTabStyles = (tabName) => {
    return activeTab === tabName
      ? "text-white border-b-2 border-blue-500 pb-1 font-headline tracking-tight transition-colors duration-300 cursor-pointer"
      : "text-slate-400 font-medium font-headline tracking-tight hover:text-white transition-colors duration-300 cursor-pointer";
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#121317]/60 backdrop-blur-xl">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-8 h-20">
        <div className="flex items-center text-2xl font-bold tracking-tighter text-white font-headline" style={{textShadow: "0 0 20px rgba(177, 197, 255, 0.3)"}}>
          <img alt="Dazk Logo" className="h-10 w-auto object-contain" src="https://lh3.googleusercontent.com/aida/ADBb0ugq4jAjLMtCtKHusMr7BUz97SitvRY4GrhFJmnfg7nsmijetaZquqSceq-sQkc9cVQAkkUvdBYGTbi883fyjVxg_viX4fU7NUxHaManCxfDRYPU25AQ5Z_n7XK2HWa9gYKdwezhKvf4VVFC0eIdpq0kFOGkXChIeLJ3pVcaW68BpQGDtR4ckLE6OMKbG8lWQ4iUCexDBmaZgjLn1Hny42rKuNh5VBN0eWe0fJitJXU9NpvNduBDnlinmljlCX6n_x7lX6gnl8h1aUY" style={{filter: "drop-shadow(0 0 10px rgba(177, 197, 255, 0.3))"}} />
          <span className="ml-3 text-2xl font-bold tracking-tight font-serif text-white align-middle">DAZK INC.</span>
          <span className="ml-2 text-sm font-normal text-slate-400 opacity-80 tracking-normal align-middle leading-tight">Cloud Consulting</span>
        </div>
        <div className="hidden md:flex gap-8">
          <a onClick={handleAboutClick} className={getTabStyles('About us')}>About us</a>
          <a href="#services" onClick={handleServicesClick} className={getTabStyles('Services')}>Services</a>
          <a onClick={handleBlogsClick} className={getTabStyles('Blogs')}>Blogs</a>
        </div>
        {location.pathname !== '/analyze' && (
          <button onClick={handleAuditClick} className="hidden md:block primary-cta px-6 py-2.5 rounded-xl text-on-primary font-bold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(13,110,253,0.3)] active:scale-95">Get Free Audit</button>
        )}
      </div>
    </nav>
  );
}
