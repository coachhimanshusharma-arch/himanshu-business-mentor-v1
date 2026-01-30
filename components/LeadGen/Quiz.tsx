
import React, { useState } from 'react';
import { QuizStep } from '../../types';

interface QuizProps {
  onClose: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onClose }) => {
  const [step, setStep] = useState<QuizStep>(QuizStep.INTRO);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [email, setEmail] = useState('');

  const next = (id: string, value: string) => {
    setAnswers({ ...answers, [id]: value });
    if (step === QuizStep.Q1) setStep(QuizStep.Q2);
    else if (step === QuizStep.Q2) setStep(QuizStep.Q3);
    else if (step === QuizStep.Q3) setStep(QuizStep.Q4);
    else if (step === QuizStep.Q4) setStep(QuizStep.Q5);
    else if (step === QuizStep.Q5) setStep(QuizStep.RESULT);
  };

  const renderStep = () => {
    switch (step) {
      case QuizStep.INTRO:
        return (
          <div className="text-center">
            <span className="text-4xl mb-6 block">🧩</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4">IS ONLINE BUSINESS <br />RIGHT FOR YOU?</h2>
            <p className="text-white/60 mb-10">Take this 2-minute assessment to find out + get a personalized recommendation.</p>
            <div className="space-y-4 text-sm text-left mb-10 inline-block">
                <div className="flex items-center gap-3"><span className="text-cyan">✓</span> 5 quick questions</div>
                <div className="flex items-center gap-3"><span className="text-cyan">✓</span> Instant results</div>
                <div className="flex items-center gap-3"><span className="text-cyan">✓</span> Personalized advice</div>
            </div>
            <button onClick={() => setStep(QuizStep.Q1)} className="w-full py-5 rounded-2xl bg-cta-gradient font-bold text-xl shadow-xl shadow-cyan/20">🚀 Start Assessment</button>
            <p className="mt-6 text-xs text-white/30">1,247 people took this quiz</p>
          </div>
        );
      case QuizStep.Q1:
        return (
          <div>
            <span className="text-cyan text-xs font-bold uppercase tracking-widest mb-2 block">Question 01 of 05</span>
            <h2 className="text-xl md:text-2xl font-bold mb-8">What is your current income source?</h2>
            <div className="space-y-4">
              {['Student', 'Working Professional', 'Home-maker', 'Business Owner'].map(opt => (
                <button key={opt} onClick={() => next('income', opt)} className="w-full text-left p-5 rounded-2xl glass border-white/10 hover:border-cyan hover:bg-cyan/10 transition-all font-medium">{opt}</button>
              ))}
            </div>
          </div>
        );
      case QuizStep.Q2:
        return (
          <div>
            <span className="text-cyan text-xs font-bold uppercase tracking-widest mb-2 block">Question 02 of 05</span>
            <h2 className="text-xl md:text-2xl font-bold mb-8">What is your main goal right now?</h2>
            <div className="space-y-4">
              {['Extra Side Income', 'Financial Freedom', 'Learn New Skills', 'Quitting my 9-5 Job'].map(opt => (
                <button key={opt} onClick={() => next('goal', opt)} className="w-full text-left p-5 rounded-2xl glass border-white/10 hover:border-cyan hover:bg-cyan/10 transition-all font-medium">{opt}</button>
              ))}
            </div>
          </div>
        );
      case QuizStep.RESULT:
        return (
          <div className="text-center animate-in zoom-in duration-500">
            <h2 className="text-3xl font-display font-bold mb-4 uppercase tracking-tight">HIGH POTENTIAL! 🌟</h2>
            <div className="w-full bg-white/5 h-4 rounded-full mb-6 overflow-hidden">
                <div className="h-full bg-cta-gradient w-[85%] rounded-full shadow-lg shadow-cyan/20"></div>
            </div>
            <p className="text-lg font-bold mb-6">Score: 85% Match</p>
            <p className="text-white/60 mb-10 leading-relaxed">Based on your answers, you have strong potential for success with the right guidance and systems.</p>
            <div className="glass p-8 rounded-2xl border-white/10 text-left mb-8">
                <h4 className="font-bold mb-4">Get your detailed roadmap:</h4>
                <input 
                    type="email" 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full bg-space border border-white/10 rounded-xl px-5 py-3 mb-4 focus:border-cyan outline-none transition-all"
                />
                <button onClick={onClose} className="w-full py-4 rounded-xl bg-cyan text-space font-bold hover:scale-105 transition-all">Get My Personalized Roadmap</button>
            </div>
            <button onClick={onClose} className="text-white/30 text-xs hover:text-white">Close Assessment</button>
          </div>
        );
      default:
        return (
          <div className="text-center">
            <h2 className="text-xl font-bold mb-8">Assessment in progress...</h2>
            <button onClick={() => setStep(QuizStep.RESULT)} className="w-full py-4 glass rounded-xl">Skip to Results</button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-6 bg-space/95 backdrop-blur-xl">
      <div className="w-full max-w-xl glass rounded-[40px] border-white/10 overflow-hidden relative p-10 md:p-16 shadow-2xl shadow-cyan/10">
        <button onClick={onClose} className="absolute top-8 right-8 text-white/30 hover:text-white">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {renderStep()}
      </div>
    </div>
  );
};

export default Quiz;
