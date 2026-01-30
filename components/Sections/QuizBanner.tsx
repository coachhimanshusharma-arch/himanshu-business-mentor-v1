
import React from 'react';

interface QuizBannerProps {
  onStart: () => void;
}

const QuizBanner: React.FC<QuizBannerProps> = ({ onStart }) => {
  return (
    <section className="py-16 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-cta-gradient opacity-10 blur-[100px]"></div>
      <div className="container mx-auto max-w-6xl relative">
        <div className="glass p-10 md:p-16 rounded-[40px] border-cyan/30 flex flex-col items-center text-center shadow-2xl shadow-cyan/10">
          <span className="text-4xl mb-6">🧩</span>
          <h2 className="font-display font-bold text-2xl md:text-4xl mb-4 uppercase tracking-tight">NOT SURE IF THIS IS RIGHT FOR YOU?</h2>
          <p className="text-lg text-white/70 mb-10 max-w-2xl">
            Take our 2-minute assessment to find out if you have the mindset and potential to succeed in online business.
          </p>
          <button 
            onClick={onStart}
            className="px-12 py-5 rounded-2xl bg-white text-space font-bold text-xl hover:scale-105 transition-all shadow-xl shadow-white/10"
          >
            🎯 Start Free Assessment
          </button>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-xs font-medium text-white/40">
            <span className="flex items-center gap-2">✓ Personalized result</span>
            <span className="flex items-center gap-2">✓ No spam</span>
            <span className="flex items-center gap-2">✓ 100% free</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuizBanner;
