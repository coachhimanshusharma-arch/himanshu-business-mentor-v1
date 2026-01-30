
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space border-t border-white/5 pt-20 pb-10 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-cta-gradient rounded-lg flex items-center justify-center font-display font-bold text-xl">H</div>
              <span className="font-display font-bold text-xl tracking-tight">HIMANSHU</span>
            </div>
            <p className="text-white/40 text-sm leading-relaxed">Mentor • Leader • Guide. Helping people build sustainable online businesses through systems and mindset.</p>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6">Quick Links</h4>
            <ul className="space-y-4 text-sm text-white/60">
                <li><button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="hover:text-cyan">Home</button></li>
                <li><button onClick={() => document.getElementById('journey')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan">My Journey</button></li>
                <li><button onClick={() => document.getElementById('webinar')?.scrollIntoView({behavior: 'smooth'})} className="hover:text-cyan">Free Webinar</button></li>
                <li><button className="hover:text-cyan">Mentorship Program</button></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-cyan">📱 WhatsApp</a></li>
                <li><a href="#" className="hover:text-cyan">📸 Instagram</a></li>
                <li><a href="#" className="hover:text-cyan">▶️ YouTube</a></li>
                <li><a href="#" className="hover:text-cyan">📧 Email Me</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-sm uppercase tracking-widest mb-6">Legal</h4>
            <ul className="space-y-4 text-sm text-white/60">
                <li><a href="#" className="hover:text-cyan">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-cyan">Terms of Service</a></li>
                <li><a href="#" className="hover:text-cyan">Earnings Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 text-center">
            <div className="bg-white/5 p-6 rounded-2xl mb-10 max-w-3xl mx-auto">
                <span className="text-xs font-bold uppercase tracking-widest text-white/30 block mb-4">⚠️ DISCLAIMER</span>
                <p className="text-[10px] text-white/40 leading-relaxed text-center uppercase tracking-wider">
                    Results vary based on individual effort, learning, and consistency. No income guarantees are made or implied. This is not a get-rich-quick scheme. Success requires time, dedication, and proper guidance. Earnings depend entirely on your actions.
                </p>
            </div>
            <p className="text-sm text-white/30">© 2025 Himanshu. All Rights Reserved. Made with ❤️ in India.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
