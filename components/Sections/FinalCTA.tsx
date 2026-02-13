
import React from 'react';

interface FinalCTAProps {
  onQuiz: () => void;
  onWebinar: () => void;
  onForm: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onQuiz, onWebinar, onForm }) => {
  const options = [
    {
      title: '🧩 OPTION 1: TAKE THE QUIZ',
      desc: 'Not sure yet? Take a 2-min assessment to see if this is right for you.',
      btn: 'Start Free Assessment →',
      action: onQuiz
    },
    {
      title: '📺 OPTION 2: JOIN FREE WEBINAR',
      desc: 'Learn everything in a 60-min live session with Q&A.',
      btn: 'Reserve My Seat →',
      action: onWebinar,
      highlight: true
    },
    {
      title: '💬 OPTION 3: WHATSAPP DIRECTLY',
      desc: 'Have questions? Message me directly on WhatsApp.',
      btn: 'Chat on WhatsApp →',
      action: () => window.open('https://wa.me/917888392033', '_blank')
    }
  ];

  return (
    <section className="py-24 px-6 bg-hero-gradient">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6 uppercase">READY TO GET <span className="text-cyan">STARTED?</span></h2>
          <p className="text-white/60">Choose the path that best fits your current situation.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {options.map((opt, i) => (
            <div key={i} className={`p-1 rounded-3xl ${opt.highlight ? 'bg-cta-gradient' : 'bg-white/5'}`}>
              <div className="glass p-8 rounded-[22px] h-full flex flex-col text-left">
                <h3 className="font-display font-bold text-lg mb-4 text-cyan">{opt.title}</h3>
                <p className="text-white/60 text-sm mb-10 flex-grow leading-relaxed">{opt.desc}</p>
                <button
                  onClick={opt.action}
                  className={`w-full py-4 rounded-xl font-bold text-sm transition-all ${opt.highlight ? 'bg-white text-space shadow-lg shadow-white/10' : 'bg-white/10 hover:bg-white/20'}`}
                >
                  {opt.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
