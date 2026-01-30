
import React, { useState, useEffect } from 'react';

const SocialProofToast: React.FC = () => {
  const [activeToast, setActiveToast] = useState(0);
  const [visible, setVisible] = useState(false);

  const notifications = [
    { name: 'Priya from Jaipur', action: 'just registered for webinar', time: '2 mins ago' },
    { name: 'Amit from Mumbai', action: 'downloaded the free guide', time: '5 mins ago' },
    { name: '23 people', action: 'are viewing this page right now', time: 'Live' }
  ];

  useEffect(() => {
    const showTimer = setTimeout(() => setVisible(true), 5000);
    
    const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
            setActiveToast(prev => (prev + 1) % notifications.length);
            setVisible(true);
        }, 500);
    }, 15000);

    return () => {
        clearTimeout(showTimer);
        clearInterval(interval);
    };
  }, [notifications.length]);

  return (
    <div className={`fixed bottom-24 md:bottom-10 left-6 z-[80] transition-all duration-500 transform ${visible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="glass px-6 py-4 rounded-2xl flex items-center gap-4 shadow-2xl border-white/10 max-w-xs">
            <div className="w-10 h-10 rounded-full bg-cyan/10 flex items-center justify-center text-xl">🔔</div>
            <div>
                <p className="text-xs font-bold mb-0.5">{notifications[activeToast].name}</p>
                <p className="text-[10px] text-white/60 mb-1">{notifications[activeToast].action}</p>
                <p className="text-[9px] text-cyan/50 font-medium uppercase tracking-widest">{notifications[activeToast].time}</p>
            </div>
        </div>
    </div>
  );
};

export default SocialProofToast;
