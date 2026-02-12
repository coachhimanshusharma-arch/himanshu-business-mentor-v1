
import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../../utils/submitLead';

interface HeaderProps {
  onConnect: () => void;
  onWebinar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onConnect, onWebinar }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-2 md:py-3 shadow-lg' : 'bg-transparent py-4 md:py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 md:w-10 md:h-10 bg-cta-gradient rounded-lg flex items-center justify-center font-display font-bold text-lg md:text-xl shadow-lg shadow-cyan/20">H</div>
          <span className="font-display font-bold text-lg md:text-xl tracking-tight hidden xs:block">HIMANSHU</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <button onClick={() => document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' })} className="hover:text-cyan transition-colors font-medium">About</button>
          <button onClick={onWebinar} className="hover:text-cyan transition-colors font-medium">Webinar</button>
          <button onClick={onConnect} className="px-6 py-2.5 rounded-full bg-cta-gradient font-bold text-sm hover:scale-105 active:scale-95 transition-all shadow-lg shadow-cyan/20">
            🚀 Connect
          </button>
        </nav>

        {/* Mobile Buttons */}
        <div className="flex items-center gap-3 md:hidden">
          {isScrolled && (
            <button onClick={onConnect} className="px-4 py-1.5 rounded-full bg-cta-gradient font-bold text-xs animate-in fade-in zoom-in duration-300">
              🚀 Start
            </button>
          )}
          <button className="p-1" onClick={() => setMobileMenuOpen(true)} aria-label="Open Menu">
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 h-[3px] bg-cyan transition-all duration-75" style={{ width: `${scrollProgress}%` }} />

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-space/95 backdrop-blur-xl flex flex-col p-6 animate-in slide-in-from-right duration-300">
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-cta-gradient rounded-lg flex items-center justify-center font-display font-bold text-lg">H</div>
              <span className="font-display font-bold text-lg">HIMANSHU</span>
            </div>
            <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white/50">
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-6 text-xl font-display font-bold">
            <button onClick={() => { setMobileMenuOpen(false); document.getElementById('journey')?.scrollIntoView({ behavior: 'smooth' }) }} className="text-left border-b border-white/5 pb-4">My Journey</button>
            <button onClick={() => { setMobileMenuOpen(false); onWebinar() }} className="text-left border-b border-white/5 pb-4 flex justify-between items-center">
              Free Webinar <span className="text-[10px] bg-danger px-2 py-0.5 rounded text-white animate-pulse">LIVE</span>
            </button>
            <button onClick={() => { setMobileMenuOpen(false); onConnect() }} className="text-left border-b border-white/5 pb-4 text-cyan">Start Your Journey</button>
          </div>

          <div className="mt-auto space-y-4">
            <button onClick={() => { setMobileMenuOpen(false); onConnect(); }} className="w-full py-4 rounded-xl bg-cta-gradient text-lg font-bold shadow-xl shadow-cyan/20">🚀 GET FREE ACCESS</button>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} className="w-full py-4 rounded-xl bg-success/10 border border-success/30 text-success text-center block text-lg font-bold">💬 WHATSAPP</a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
