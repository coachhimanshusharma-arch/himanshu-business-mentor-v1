
import React from 'react';

const ProblemAgitation: React.FC = () => {
  const problems = [
    {
      emoji: '😕',
      title: 'CONFUSION',
      description: 'Online business feels overwhelming. Too many options, no clear path forward.'
    },
    {
      emoji: '😰',
      title: 'WRONG GUIDANCE',
      description: "Followed advice that didn't work. Wasted time and money on wrong strategies."
    },
    {
      emoji: '😤',
      title: 'PRESSURE & HYPE',
      description: 'Tired of "get rich quick" promises. Looking for something genuine and sustainable.'
    },
    {
      emoji: '😞',
      title: 'NO RESULTS',
      description: 'Working hard but going nowhere. Missing the right direction and mentorship support.'
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-midnight/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display font-bold text-2xl md:text-5xl mb-4 md:mb-6 uppercase tracking-tight">DOES THIS SOUND <br /><span className="text-cyan">LIKE YOU?</span></h2>
          <div className="w-16 md:w-24 h-1 bg-cyan mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((prob, idx) => (
            <div key={idx} className="glass-card p-6 md:p-8 rounded-2xl flex flex-col items-center text-center hover:scale-[1.02] transition-transform">
              <span className="text-4xl md:text-5xl mb-4 md:mb-6 animate-pulse" style={{animationDelay: `${idx * 200}ms`}}>{prob.emoji}</span>
              <h3 className="font-display font-bold text-base md:text-xl mb-3 md:mb-4 tracking-wider">{prob.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">{prob.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
            <div className="inline-block glass p-1 rounded-2xl border-white/5">
                <div className="bg-midnight/50 px-6 py-4 md:px-8 md:py-6 rounded-xl flex flex-col sm:flex-row items-center gap-4 md:gap-6 max-w-2xl">
                    <div className="text-3xl">💡</div>
                    <div className="text-center sm:text-left">
                        <p className="text-lg md:text-xl font-bold mb-1">"I was exactly here 5 years ago..."</p>
                        <button onClick={() => document.getElementById('journey')?.scrollIntoView({behavior: 'smooth'})} className="text-cyan font-medium hover:underline text-sm md:text-base">Read my story ↓</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemAgitation;
