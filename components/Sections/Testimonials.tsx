
import React, { useState } from 'react';
import { TESTIMONIALS } from '../../constants';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-24 px-6 bg-midnight/10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">WHAT PEOPLE ARE <span className="text-cyan">SAYING</span></h2>
          <div className="flex justify-center gap-1">
            {[1,2,3,4,5].map(i => <span key={i} className="text-warning text-xl">★</span>)}
          </div>
        </div>

        <div className="relative">
          <div className="glass-card p-10 md:p-16 rounded-[40px] text-center border-white/5 relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-cyan rounded-full flex items-center justify-center font-bold text-space text-3xl">“</div>
            
            <p className="text-xl md:text-2xl font-medium mb-12 leading-relaxed">
              "{TESTIMONIALS[activeIndex].content}"
            </p>

            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-cta-gradient p-1 mb-4">
                <div className="w-full h-full rounded-full bg-space flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/150?u=${TESTIMONIALS[activeIndex].id}`} alt={TESTIMONIALS[activeIndex].name} />
                </div>
              </div>
              <h4 className="font-display font-bold text-lg">{TESTIMONIALS[activeIndex].name}</h4>
              <p className="text-sm text-white/40">{TESTIMONIALS[activeIndex].role}</p>
              <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-[10px] text-success font-bold tracking-widest uppercase">
                ✅ Verified Member
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-10 gap-3">
            {TESTIMONIALS.map((_, i) => (
              <button 
                key={i} 
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${i === activeIndex ? 'bg-cyan w-8' : 'bg-white/20'}`}
              />
            ))}
          </div>
          
          <div className="absolute top-1/2 -translate-y-1/2 left-0 -ml-12 md:-ml-20 hidden sm:block">
            <button 
                onClick={() => setActiveIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1))}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-0 -mr-12 md:-mr-20 hidden sm:block">
            <button 
                onClick={() => setActiveIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1))}
                className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
