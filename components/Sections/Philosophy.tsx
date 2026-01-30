
import React from 'react';

const Philosophy: React.FC = () => {
  const points = [
    { bad: 'Get rich quick', good: 'Build real skills' },
    { bad: 'Pressure selling', good: 'Value-based approach' },
    { bad: 'Fake motivation', good: 'Honest guidance' },
    { bad: 'Chase random people', good: 'Attract right people' },
    { bad: 'Income screenshots', good: 'Real education' },
    { bad: 'Quick fixes', good: 'Long-term growth' }
  ];

  return (
    <section className="py-24 px-6 bg-space">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">MY APPROACH IS <span className="text-cyan">DIFFERENT</span></h2>
          <p className="text-white/60">Network marketing isn't wrong — the approach usually is.</p>
        </div>

        <div className="glass rounded-3xl overflow-hidden border-white/5 grid md:grid-cols-2">
          {/* Not This */}
          <div className="p-8 md:p-12 border-b md:border-b-0 md:border-r border-white/5 bg-danger/5">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-danger text-2xl">❌</span>
              <h3 className="text-2xl font-display font-bold uppercase tracking-tighter">NOT THIS</h3>
            </div>
            <ul className="space-y-6">
              {points.map((p, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white/40 line-through">
                  <span className="w-1.5 h-1.5 bg-danger rounded-full"></span>
                  <span className="text-lg">{p.bad}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* But This */}
          <div className="p-8 md:p-12 bg-success/5">
            <div className="flex items-center gap-3 mb-10">
              <span className="text-success text-2xl">✅</span>
              <h3 className="text-2xl font-display font-bold uppercase tracking-tighter">BUT THIS</h3>
            </div>
            <ul className="space-y-6">
              {points.map((p, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className="w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                    <svg className="w-4 h-4 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  <span className="text-lg font-medium">{p.good}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
