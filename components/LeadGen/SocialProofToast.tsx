
import React, { useState, useEffect } from 'react';

const SocialProofToast: React.FC = () => {
  const [activeToast, setActiveToast] = useState(0);
  const [visible, setVisible] = useState(false);

  const notifications = [
    { name: 'Priya from Jaipur', action: 'just registered', time: '2 min' },
    { name: 'Amit from Mumbai', action: 'downloaded guide', time: '5 min' },
    { name: '23 people', action: 'viewing now', time: 'Live' }
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
    <div className={`fixed top-4 left-4 z-[80] transition-all duration-500 transform ${visible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
      <div className="bg-black/70 backdrop-blur-sm px-3 py-2 rounded-xl flex items-center gap-2 shadow-lg border border-white/10 max-w-[200px]">
        <span className="text-sm">🔔</span>
        <div className="min-w-0">
          <p className="text-[10px] font-bold truncate">{notifications[activeToast].name}</p>
          <p className="text-[9px] text-white/50 truncate">{notifications[activeToast].action} · <span className="text-cyan/60">{notifications[activeToast].time}</span></p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
