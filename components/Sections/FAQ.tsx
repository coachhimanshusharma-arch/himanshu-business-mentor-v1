
import React, { useState } from 'react';
import { FAQS } from '../../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 bg-space">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">FREQUENTLY ASKED <span className="text-cyan">QUESTIONS</span></h2>
          <div className="w-24 h-1 bg-cyan mx-auto rounded-full"></div>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden border-white/5">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold md:text-lg">{faq.question}</span>
                <span className={`transition-transform duration-300 text-cyan text-2xl ${openIndex === i ? 'rotate-45' : ''}`}>+</span>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${openIndex === i ? 'max-h-[500px]' : 'max-h-0'}`}
              >
                <div className="p-6 pt-0 text-white/60 leading-relaxed border-t border-white/5">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
