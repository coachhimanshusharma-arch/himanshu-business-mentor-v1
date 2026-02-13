
import React from 'react';
import { WHATSAPP_NUMBER } from '../../utils/submitLead';


interface HeroProps {
  onQuiz: () => void;
  onWebinar: () => void;
}

const Hero: React.FC<HeroProps> = ({ onQuiz, onWebinar }) => {
  return (
    <section className="relative pt-6 md:pt-16 pb-16 md:pb-24 px-4 md:px-6 overflow-hidden">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-cyan/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-violet/10 rounded-full blur-[80px] md:blur-[120px] -z-10 animate-pulse delay-1000"></div>

      <div className="container mx-auto max-w-6xl flex flex-col items-center text-center">
        {/* Mobile Badge */}
        <div className="inline-flex items-center gap-2 glass px-3 py-1 rounded-full mb-6 md:mb-8 border border-cyan/20">
          <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-ping"></span>
          <span className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-cyan">✨ Trusted by 500+ Seekers</span>
        </div>

        {/* Video Thumbnail - Mobile First (Higher Priority) */}
        <div className="w-full max-w-2xl glass p-1.5 md:p-3 rounded-2xl mb-8 md:mb-12 shadow-2xl relative group cursor-pointer order-2 md:order-3">
          <div className="aspect-video bg-midnight rounded-xl overflow-hidden relative">
            <script src="https://fast.wistia.com/player.js" async></script>
            <script src="https://fast.wistia.com/embed/cr6pj4s5hy.js" async type="module"></script>
            <style>
              {`wistia-player[media-id='cr6pj4s5hy']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/cr6pj4s5hy/swatch'); display: block; filter: blur(5px); padding-top:56.25%; }`}
            </style>
            {/* @ts-ignore */}
            <wistia-player media-id="cr6pj4s5hy" aspect="1.7777777777777777" autoplay>
              <div className="wistia_preload_transcript_outer_wrapper" style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '-56.25%' }}>
                <div className="wistia_preload_transcript_inner_wrapper" style={{ overflow: 'auto' }}>
                  <p className="wistia_preload_transcript_text" aria-hidden="true" tabIndex={-1} style={{ textAlign: 'justify', fontSize: '5px !important' }}>
                    Guys, अगर आप इस video को देख रहे हो तो आप भी उसी जगह पे हो जिस जगह पे मैं आज से छह साल पहले था. मैं हिमांशु हूँ और Punjab के बड़े छोटे से शहर कोटकोबरा से मैं belong करता हूं और जब मुझे यह business मिला था, मैं भी आपकी तरह confused ही था कि यार मैं इस business में कामयाब हो पाऊंगा. क्या यह business मेरे लिए काम करेगा? क्या यह कोई fake fraud तो नहीं है और क्या यह मेरे लिए business बना है? इन सब चीज़ों के अंदर मैं confuse था. लेकिन फिर एक चीज़ समझ आई कि problem business में नहीं होती है. Problem business को समझने में होती है. अगर आप भी online business के अंदर कामयाब होना चाहते हो तो आपको बिना किसी shortcut के, बिना किसी hype के सिर्फ़ system को समझना है. अगर आप system को समझ के apply करते हो तो आपके दिमाग से वह pressure हट जाता है और आप easily business को start up कर सकते हैं. आज मैं अच्छे level पर काम कर रहा हूं अच्छी income earn कर रहा हूं मेरे साथ काफी young लड़के लड़कियां house wife काम कर रही हैं और जो मैंने पिछले छह साल में सीखा वह मैं आगे pass कर रहा हूं. दो हज़ार पच्चीस में मैं Bali Singapore जैसी countries travel करके आया और यह travelling सिर्फ lifestyle के लिए नहीं थी बल्कि इससे एक exposure मिलता है और उस exposure से एक direction मिलती है ज़िंदगी में आगे बढ़ने के लिए. तो आप अगर right platform का part बनना चाहते हो skill based long term system का part बनना चाहते हो without किसी pressure के. तो आप बिल्कुल right page पर हो. तो नीचे दिए गए apply button पर click करना है और यह जो form है यह कोई normal बात नहीं है. यह एक conversation है ज़िंदगी की शुरुआत की. आपकी एक छोटी सी decision आपका एक छोटा सा फ़ैसला आपको एक अच्छी life तक लेकर जा सकता है. All the best.
                  </p>
                </div>
              </div>
              {/* @ts-ignore */}
            </wistia-player>
          </div>
        </div>

        <h1 className="font-display font-bold text-3xl md:text-6xl lg:text-7xl mb-4 md:mb-6 leading-tight max-w-4xl order-1">
          FROM SMALL TOWN <br />
          TO <span className="text-cyan text-glow relative">GLOBAL MINDSET<span className="absolute -bottom-1 left-0 right-0 h-1 bg-cyan/30 rounded-full"></span></span>
        </h1>

        <p className="text-base md:text-xl text-white/70 max-w-2xl mb-8 md:mb-12 leading-relaxed order-2">
          Build an online business with clarity, proven systems, and real mentorship — <br className="hidden md:block" />
          no hype, no shortcuts, just honest growth.
        </p>

        {/* Upgraded CTAs */}
        <div className="flex flex-col items-center gap-6 w-full md:w-auto order-4">
          <div className="w-full max-w-md">
            <button onClick={onQuiz} className="w-full px-8 py-5 md:py-6 rounded-2xl bg-cta-gradient font-bold text-lg md:text-xl shadow-xl shadow-cyan/30 hover:scale-[1.02] active:scale-[0.98] transition-all relative overflow-hidden group">
              <div className="flex flex-col items-center">
                <span>🚀 YES! SHOW ME HOW TO START</span>
                <span className="text-xs md:text-sm font-medium opacity-80">Get instant free access →</span>
              </div>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
            <p className="mt-3 text-sm text-white/50 font-medium">👥 127 people joined today</p>
          </div>

          <button onClick={onWebinar} className="w-full md:w-auto px-10 py-4 rounded-xl glass border-white/10 font-bold text-base md:text-lg hover:bg-white/5 transition-all flex flex-col items-center gap-1">
            <span>📺 JOIN FREE LIVE TRAINING</span>
            <span className="text-xs font-medium text-cyan opacity-80 tracking-wide">Next: Sat 7PM • 47 seats left</span>
          </button>

          <button onClick={() => window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank')} className="text-white/60 text-sm hover:text-cyan transition-colors underline underline-offset-4">
            💬 Or WhatsApp me directly →
          </button>
        </div>

        {/* Trust Indicators - Horizontal Scroll on Mobile */}
        <div className="mt-12 md:mt-20 w-full overflow-x-auto no-scrollbar order-5">
          <div className="flex md:grid md:grid-cols-4 gap-6 md:gap-12 min-w-max md:min-w-full px-4 md:px-0 opacity-80">
            <div className="flex flex-col items-start md:items-center min-w-[120px]">
              <span className="text-cyan text-2xl md:text-3xl font-display font-bold">5+</span>
              <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Years Exp.</span>
            </div>
            <div className="flex flex-col items-start md:items-center min-w-[120px]">
              <span className="text-cyan text-2xl md:text-3xl font-display font-bold">500+</span>
              <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Guided</span>
            </div>
            <div className="flex flex-col items-start md:items-center min-w-[120px]">
              <span className="text-cyan text-2xl md:text-3xl font-display font-bold">🌏</span>
              <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Global Reach</span>
            </div>
            <div className="flex flex-col items-start md:items-center min-w-[120px]">
              <span className="text-cyan text-2xl md:text-3xl font-display font-bold">4.9/5</span>
              <span className="text-[10px] md:text-sm text-white/50 uppercase tracking-widest font-bold">Avg Rating</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
