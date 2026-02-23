
import React, { useState, useEffect } from 'react';

const Webinar: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 2, hours: 14, minutes: 35, seconds: 22 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (seconds > 0) seconds--;
        else {
          seconds = 59;
          if (minutes > 0) minutes--;
          else {
            minutes = 59;
            if (hours > 0) hours--;
            else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 md:py-24 px-4 md:px-6">
      <div className="container mx-auto max-w-5xl">
        <div className="relative glass p-6 md:p-16 rounded-[24px] md:rounded-[40px] border-cyan/20 overflow-hidden">
          {/* Red Live Label */}
          <div className="absolute top-4 right-4 md:top-8 md:right-8 flex items-center gap-2 bg-danger/20 px-3 py-1 rounded-full border border-danger/30 z-10">
            <span className="w-2 h-2 bg-danger rounded-full animate-ping"></span>
            <span className="text-[10px] font-bold uppercase tracking-tighter text-danger">LIVE WORKSHOP</span>
          </div>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
            {/* Text Content - Always shows first on mobile */}
            <div className="order-1">
              <span className="text-cyan font-bold tracking-[0.2em] text-xs uppercase mb-4 block">Free Online Workshop</span>
              <h2 className="text-2xl md:text-5xl font-display font-bold mb-6 leading-tight">
                "THE TRUTH ABOUT <br /> ONLINE BUSINESS — <br /> <span className="text-cyan text-glow">FINALLY EXPLAINED"</span>
              </h2>

              <div className="space-y-3 md:space-y-4 mb-8 md:mb-10 text-white/70">
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg md:text-xl shrink-0">📅</span>
                  <div>
                    <p className="font-bold text-white text-sm md:text-base">Next Session: This Saturday</p>
                    <p className="text-xs md:text-sm">7:00 PM IST (Zoom Meeting)</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 md:gap-4">
                  <span className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-white/5 flex items-center justify-center text-lg md:text-xl shrink-0">⏱️</span>
                  <div>
                    <p className="font-bold text-white text-sm md:text-base">60 Minutes Duration</p>
                    <p className="text-xs md:text-sm">Actionable insights + Live Q&A</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-2 md:gap-3 mb-8 md:mb-10">
                {[
                  { label: 'Days', value: timeLeft.days },
                  { label: 'Hrs', value: timeLeft.hours },
                  { label: 'Min', value: timeLeft.minutes },
                  { label: 'Sec', value: timeLeft.seconds }
                ].map((unit, i) => (
                  <div key={i} className="bg-midnight/50 p-2 md:p-3 rounded-xl border border-white/5 text-center">
                    <span className="text-xl md:text-2xl font-display font-bold text-cyan block">{unit.value.toString().padStart(2, '0')}</span>
                    <span className="text-[9px] md:text-[10px] uppercase tracking-widest text-white/30">{unit.label}</span>
                  </div>
                ))}
              </div>

              <button className="w-full py-4 md:py-5 rounded-2xl bg-cta-gradient font-bold text-lg md:text-xl shadow-xl shadow-cyan/20 hover:scale-105 transition-all mb-3 md:mb-4">
                🎯 RESERVE MY FREE SEAT
              </button>
              <div className="flex items-center justify-center gap-4 text-xs text-white/40">
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-success rounded-full"></span> 67 spots filled</span>
                <span className="flex items-center gap-1"><span className="w-1.5 h-1.5 bg-warning rounded-full"></span> Only 33 left</span>
              </div>
            </div>

            {/* Image - Shows second on mobile, beside on desktop */}
            <div className="relative order-2">
              <div className="aspect-[4/5] bg-midnight rounded-2xl md:rounded-3xl overflow-hidden border border-white/10 relative">
                <img
                  src="/truth-section.jpg"
                  alt="Himanshu - Kotkapura Success Event"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6">
                  <div className="glass p-3 md:p-4 rounded-xl border-white/10">
                    <p className="text-xs md:text-sm font-bold mb-1">In this session you'll learn:</p>
                    <ul className="text-[11px] md:text-xs text-white/60 space-y-1.5 md:space-y-2">
                      <li>✓ The 5 fatal mistakes in online business</li>
                      <li>✓ How to build with systems, not hustle</li>
                      <li>✓ The honest reality of income potentials</li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Decorative Glow */}
              <div className="absolute -z-10 -bottom-10 -right-10 w-64 h-64 bg-cyan/20 rounded-full blur-[80px]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Webinar;
