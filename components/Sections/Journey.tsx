
import React from 'react';

const Journey: React.FC = () => {
  const milestones = [
    {
      year: '2019',
      title: 'THE BEGINNING',
      description: 'Started from a small town with no background, no connections, no shortcuts. Just curiosity and hunger to learn.',
      image: '/beginning.jpg'
    },
    {
      year: '2020',
      title: 'THE STRUGGLE',
      description: 'First 1-2 years were tough. No clear guidance. People taught selling, not understanding. Made every mistake possible.',
      image: '/struggle.jpg'
    },
    {
      year: '2021',
      title: 'THE SHIFT',
      description: 'Mindset changed when I focused on solving problems instead of selling products. Everything started changing.',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&q=80&w=800'
    },
    {
      year: '2023',
      title: 'THE GROWTH',
      description: 'Built systems, learned modern tools, reached manager level, started mentoring others and speaking on big stages.',
      image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&q=80&w=800' // Representing the auditorium photo provided
    },
    {
      year: '2025',
      title: 'THE EXPANSION',
      description: 'International exposure - Bali, Singapore. Now helping others find the same clarity I wish I had across the globe.',
      image: 'https://images.unsplash.com/photo-1518107616385-ad30891079ad?auto=format&fit=crop&q=80&w=800'
    }
  ];

  return (
    <section id="journey" className="py-24 px-4 md:px-6 relative overflow-hidden bg-space">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet/5 rounded-full blur-[100px] -z-10"></div>

      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-20">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 uppercase tracking-tight">MY <span className="text-cyan text-glow">JOURNEY</span></h2>
          <p className="text-white/60 text-lg">From confusion to clarity, this is how it unfolded...</p>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full mt-6"></div>
        </div>

        <div className="relative">
          {/* Vertical Line - Centered on desktop, left on mobile */}
          <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan via-violet/50 to-transparent md:-translate-x-1/2"></div>

          {milestones.map((item, idx) => (
            <div key={idx} className={`relative mb-16 md:mb-24 flex flex-col md:flex-row items-start md:items-center ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              {/* Dot */}
              <div className="absolute left-[11px] md:left-1/2 md:-translate-x-1/2 w-5 h-5 md:w-8 md:h-8 rounded-full border-4 border-space bg-cyan shadow-[0_0_15px_rgba(0,212,255,0.5)] z-20"></div>

              {/* Content Card */}
              <div className={`w-full md:w-[45%] pl-12 md:pl-0 ${idx % 2 === 0 ? 'md:pl-16' : 'md:pr-16'}`}>
                <div className="glass-card p-6 md:p-8 rounded-[2rem] border-white/5 group hover:border-cyan/30 transition-all duration-500">
                  <span className="text-cyan font-display font-bold text-xs md:text-sm tracking-[0.3em] block mb-3 uppercase">{item.year}</span>
                  <h3 className="text-xl md:text-2xl font-display font-bold mb-4 group-hover:text-cyan transition-colors tracking-tight">{item.title}</h3>
                  <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">{item.description}</p>
                  <div className="rounded-2xl overflow-hidden aspect-[4/3] md:aspect-video relative">
                    <img
                      src={item.image}
                      alt={item.title}
                      className={`w-full h-full ${idx <= 1 ? 'object-contain bg-black/40' : 'object-cover grayscale group-hover:grayscale-0'} transition-all duration-700 group-hover:scale-110`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space/80 via-transparent to-transparent opacity-60"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass p-8 md:p-12 rounded-[2.5rem] border-cyan/20 text-center relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-full h-1 bg-cta-gradient"></div>
          <p className="text-xl md:text-3xl font-accent italic mb-8 leading-relaxed">"Success is not about selling products — it's about solving problems and building people."</p>
          <div className="flex flex-col items-center">
            <div className="w-12 h-1 bg-cyan mb-4 rounded-full"></div>
            <span className="font-display font-bold text-cyan tracking-[0.4em] text-sm md:text-base uppercase">— HIMANSHU</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Journey;
