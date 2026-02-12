
import React, { useState, useEffect } from 'react';
import { WHATSAPP_NUMBER } from '../../utils/submitLead';

interface FloatingCTAProps {
  onConnect: () => void;
}

const FloatingCTA: React.FC<FloatingCTAProps> = ({ onConnect }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 25% scroll or 400px
      const scrolled = window.scrollY > 400;
      setShow(scrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsApp = () => {
    const msg = encodeURIComponent("Hi Himanshu! I found you online and want to learn about starting an online business.");
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
  };

  return (
    <>
      {/* WhatsApp Floating Button - Desktop & Mobile */}
      <div className={`fixed z-[90] transition-all duration-500 transform ${show ? 'scale-100 opacity-100' : 'scale-0 opacity-0'} bottom-24 md:bottom-8 right-6`}>
        <div className="relative group">
          <div className="absolute -top-12 right-0 bg-space/90 glass px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden md:block border border-white/10">
            💬 Chat with me
          </div>
          <button
            onClick={handleWhatsApp}
            className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-cta-gradient p-[2px] shadow-2xl shadow-success/30 animate-float"
          >
            <div className="w-full h-full rounded-full bg-[#25D366] flex items-center justify-center transition-transform hover:scale-110 active:scale-90">
              <svg className="w-8 h-8 md:w-9 md:h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.438 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              <span className="absolute -top-1 -right-1 w-5 h-5 bg-danger border-2 border-white rounded-full flex items-center justify-center text-[10px] font-bold text-white">1</span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Sticky Dual CTA Bar */}
      <div className={`fixed bottom-0 left-0 right-0 z-[100] md:hidden glass bg-space/80 border-t border-white/10 p-4 pb-6 transition-all duration-500 transform ${show ? 'translate-y-0' : 'translate-y-full shadow-none'}`}>
        <div className="flex gap-3 max-w-lg mx-auto">
          <button
            onClick={handleWhatsApp}
            className="w-[35%] h-14 rounded-2xl glass border-success/30 text-success flex flex-col items-center justify-center leading-tight active:scale-95 transition-all"
          >
            <span className="text-xl">💬</span>
            <span className="text-[10px] font-bold uppercase tracking-widest">WhatsApp</span>
          </button>
          <button
            onClick={onConnect}
            className="flex-grow h-14 rounded-2xl bg-cta-gradient font-bold text-base shadow-xl shadow-cyan/20 flex flex-col items-center justify-center leading-tight active:scale-[0.98] transition-all"
          >
            <span>🚀 GET FREE ACCESS</span>
            <span className="text-[10px] font-medium opacity-80 uppercase tracking-tighter">Instant access →</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default FloatingCTA;
