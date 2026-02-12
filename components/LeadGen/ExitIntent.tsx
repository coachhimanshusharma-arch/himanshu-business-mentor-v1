
import React, { useState, useEffect } from 'react';
import { submitLead } from '../../utils/submitLead';

const ExitIntent: React.FC = () => {
  const [show, setShow] = useState(false);
  const [closed, setClosed] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !closed && !show) {
        setShow(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [closed, show]);

  const handleSubmitGuide = async () => {
    if (!/^[6-9]\d{9}$/.test(phone.trim())) return;
    setIsSubmitting(true);
    await submitLead({
      whatsapp: phone.trim(),
      source: 'exit-intent-guide',
    });
    setIsSubmitting(false);
    setSubmitted(true);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-[120] flex items-end md:items-center justify-center p-0 md:p-6 bg-space/90 backdrop-blur-md animate-in fade-in duration-300">
      <div className="w-full max-w-xl glass md:rounded-[40px] rounded-t-[32px] border-warning/20 overflow-hidden relative p-8 md:p-16 text-center shadow-2xl animate-in slide-in-from-bottom duration-500">
        <button onClick={() => { setShow(false); setClosed(true); }} className="absolute top-6 md:top-8 right-6 md:right-8 text-white/30 hover:text-white p-2">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {!submitted ? (
          <>
            <div className="mb-6 md:mb-8">
              <span className="text-5xl md:text-6xl mb-4 md:mb-6 block animate-bounce">🎁</span>
              <h2 className="text-2xl md:text-4xl font-display font-bold mb-2 uppercase tracking-tight text-glow">WAIT! FREE GIFT <br className="hidden md:block" />BEFORE YOU GO</h2>
              <div className="w-20 h-1 bg-warning mx-auto rounded-full mb-4"></div>
              <p className="text-white/60 md:text-lg">Get my exclusive "5 Biggest Mistakes" guide <br className="hidden md:block" />sent directly to your WhatsApp.</p>
            </div>

            <div className="glass p-6 md:p-10 rounded-[2rem] border-white/5 mb-8 flex flex-col items-center">
              <h3 className="text-sm md:text-lg font-bold mb-6 text-warning tracking-[0.2em] uppercase">Limited Time Offer</h3>
              <div className="w-full space-y-4">
                <div className="flex gap-2">
                  <div className="h-14 bg-space/50 border border-white/10 rounded-xl px-4 flex items-center text-sm font-bold text-white/60">+91</div>
                  <input
                    type="tel"
                    maxLength={10}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                    placeholder="WhatsApp Number"
                    className="flex-grow h-14 bg-space/50 border border-white/10 rounded-xl px-5 outline-none focus:border-warning transition-all text-base"
                  />
                </div>
                <button
                  onClick={handleSubmitGuide}
                  disabled={isSubmitting || !/^[6-9]\d{9}$/.test(phone.trim())}
                  className="w-full h-16 rounded-xl bg-warning text-space font-bold text-lg hover:scale-105 active:scale-95 transition-all shadow-xl shadow-warning/20 disabled:opacity-50"
                >
                  {isSubmitting ? '⏳ Sending...' : '📥 SEND ME THE FREE GUIDE'}
                </button>
              </div>
              <p className="mt-4 text-[10px] text-white/30 uppercase tracking-widest">🔒 100% Free • No Spam ever</p>
            </div>

            <button onClick={() => { setShow(false); setClosed(true); }} className="text-white/20 text-xs hover:text-white transition-colors uppercase tracking-widest font-bold">
              No thanks, I'll figure it out myself
            </button>
          </>
        ) : (
          <div className="animate-in zoom-in duration-500">
            <span className="text-6xl mb-6 block">✅</span>
            <h2 className="text-2xl md:text-3xl font-display font-bold mb-4 uppercase">YOU'LL GET IT SOON!</h2>
            <p className="text-white/60 mb-8">The guide will be sent to your WhatsApp shortly.</p>
            <button onClick={() => { setShow(false); setClosed(true); }} className="px-8 py-3 rounded-xl glass font-bold hover:bg-white/10 transition-all">Close</button>
          </div>
        )}

        <div className="h-6 md:hidden"></div>
      </div>
    </div>
  );
};

export default ExitIntent;

