
import React from 'react';

interface HeroProps {
  onQuiz: () => void;
  onWebinar: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuiz, onWebinar }) => {
  return (
    <section className="relative pt-6 md:pt-16 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Mobile Badge */}
        <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-6 md:mb-8 border border-cyan/20">
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-ping"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-cyan">✨ Trusted by 500+ Seekers</span>
        </div>

        {/* Video Thumbnail - Mobile First (Higher Priority) */}
        <div className="w-full max-w-2xl glass p-1.5 md:p-3 rounded-2xl mb-8 md:mb-12 shadow-2xl relative group cursor-pointer order-2 md:order-3">
          <div className="aspect-video bg-midnight rounded-xl flex items-center justify-center overflow-hidden relative">
            <img 
              src="https://picsum.photos/seed/himanshu/1280/720" 
              alt="Himanshu Preview" 
              className="w-full h-full object-cover opacity-40 group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 md:w-20 md:h-20 bg-cyan/90 rounded-full flex items-center justify-center pl-1 md:pl-2 group-hover:scale-110 transition-transform shadow-lg shadow-cyan/40">
                    <svg className="w-8 h-8 md:w-10 md:h-10 text-space" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                </div>
            </div>
            <div className="absolute bottom-3 left-3 md:bottom-4 md:left-4 flex items-center gap-2 glass px-2 py-1 md:px-3 md:py-1.5 rounded-lg border-white/10">
                <span className="text-[10px] md:text-xs font-medium">Himanshu's Message (1:30)</span>
            </div>
          </div>
        </div>

        <h1 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight max-w-4xl order-1">
          FROM SMALL TOWN <br />
          TO <span className="text-cyan text-glow relative">GLOBAL MINDSET<span className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan/30 rounded-full"></span></span>
        </h1>

        <p className="text-base md:text-xl text-white/70 max-w-2xl mb-8 md:mb-12 leading-relaxed order-2">
          Build an online business with clarity, proven systems, and real mentorship — <br className="hidden md:block" />
          no hype, no shortcuts, just honest growth.
        </p>

        {/* Upgraded CTAs */}
        <div className="flex flex-col items-center gap-6 w-full md:w-auto order-4">
          <div className="w-full max-w-md">
            <button onClick={onQuiz} className="w-full px-8 py-5 md:py-6 rounded-2xl bg-cta-gradient font-bold text-lg md:text-xl shadow-xl shadow-cyan/30 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group">
              <div className="flex flex-col items-center">
                <span>🚀 YES! SHOW ME HOW TO START</span>
                <span className="text-xs md:text-sm font-medium opacity-80">Get instant free access →</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <p className="mt-3 text-sm text-white/50 font-medium">👥 127 people joined today</p>
          </div>

          <button onClick={onWebinar} className="w-full md:w-auto px-10 py-4 rounded-xl glass border-white/10 font-bold text-base md:text-lg hover:bg-white/5 transition-all flex flex-col items-center gap-1">
            <span>📺 JOIN FREE LIVE TRAINING</span>
            <span className="text-xs font-medium text-cyan opacity-80 tracking-wide">Next: Sat 7PM • 47 seats left</span>
          </button>
          
          <button onClick={() => window.open('https://wa.me/919876543210', '_blank')} className="text-white/60 text-sm hover:text-cyan transition-colors underline underline-offset-4">
            💬 Or WhatsApp me directly →
          </button>
        </div>

        {/* Trust Indicators - Horizontal Scroll on Mobile */}
        <div className="mt-12 md:mt-20 w-full overflow-x-auto no-scrollbar order-5">
            <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-12 min-w-max md:min-w-full px-4 md:px-0 opacity-80">
                <div className="flex flex-col items-start md:items-center min-w-[120px]">
                    <span className="text-cyan text-2xl md:text-3xl font-display font-bold">5+</span>
                    <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Years Exp.</span>
                </div>
                <div className="flex flex-col items-start md:items-center min-w-[120px]">
                    <span className="text-cyan text-2xl md:text-3xl font-display font-bold">500+</span>
                    <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Guided</span>
                </div>
                <div className="flex flex-col items-start md:items-center min-w-[120px]">
                    <span className="text-cyan text-2xl md:text-3xl font-display font-bold">🌏</span>
                    <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Global Reach</span>
                </div>
                <div className="flex flex-col items-start md:items-center min-w-[120px]">
                    <span className="text-cyan text-2xl md:text-3xl font-display font-bold">4.9/5</span>
                    <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Avg Rating</span>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
