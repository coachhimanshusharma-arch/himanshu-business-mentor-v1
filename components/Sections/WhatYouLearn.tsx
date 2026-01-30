
import React from 'react';
import { MODULES } from '../../constants';

const WhatYouLearn: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-midnight/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">WHAT YOU'LL <span className="text-cyan">LEARN</span></h2>
          <p className="text-white/60">Core areas covered in my exclusive mentorship & training program.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MODULES.map((module, idx) => (
            <div key={idx} className="glass-card p-8 rounded-2xl group border-l-4 border-l-cyan">
              <span className="text-white/40 text-xs font-bold uppercase tracking-widest block mb-4">Module 0{idx + 1}</span>
              <h3 className="text-xl font-bold mb-6 group-hover:text-cyan transition-colors">{module.title}</h3>
              <ul className="space-y-3">
                {module.points.map((point, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-3 text-sm text-white/60">
                    <span className="text-cyan mt-1">✓</span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
            <button 
                onClick={() => {
                    const el = document.getElementById('webinar');
                    el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-cyan/10 border border-cyan/30 text-cyan font-bold hover:bg-cyan hover:text-space transition-all"
            >
                📺 Master these in the Free Webinar
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
            </button>
        </div>
      </div>
    </section>
  );
};

export default WhatYouLearn;
