
import React, { useEffect, useRef, useState } from 'react';

const InstagramProfile: React.FC = () => {
    const wistiaMediaIds = [
        'gmxbuzzcxx',
        'uv152hdopp',
        '302ajnfoyi',
        'aehq45hmo2',
        '6gmc4uly6r',
        'puv0o47l6s'
    ];

    const sectionRef = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    const [scriptsLoaded, setScriptsLoaded] = useState(false);

    // Lazy load: Only load Wistia scripts when section is near viewport
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { rootMargin: '300px' }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    // Load Wistia scripts only when section becomes visible
    useEffect(() => {
        if (!isVisible) return;

        const existingPlayerScript = document.querySelector('script[src="https://fast.wistia.com/player.js"]');
        if (!existingPlayerScript) {
            const playerScript = document.createElement('script');
            playerScript.src = 'https://fast.wistia.com/player.js';
            playerScript.async = true;
            document.head.appendChild(playerScript);
        }

        wistiaMediaIds.forEach((id) => {
            const existing = document.querySelector(`script[src="https://fast.wistia.com/embed/${id}.js"]`);
            if (!existing) {
                const script = document.createElement('script');
                script.src = `https://fast.wistia.com/embed/${id}.js`;
                script.async = true;
                script.type = 'module';
                document.head.appendChild(script);
            }
        });

        setScriptsLoaded(true);
    }, [isVisible]);

    const highlights = [
        { title: 'SINGAPORE', img: 'https://flagcdn.com/w320/sg.png' },
        { title: 'BALI', img: 'https://flagcdn.com/w320/id.png' },
        { title: 'GOA', img: 'https://loremflickr.com/320/320/goa,beach' },
        { title: 'UDAIPUR', img: 'https://loremflickr.com/320/320/udaipur,palace' },
        { title: 'MANALI 2.0', img: 'https://loremflickr.com/320/320/manali,snow' }
    ];

    // Card width: 200px on mobile, 260px on desktop + 20px gap
    const cardWidthMobile = 200;
    const cardWidthDesktop = 260;
    const gap = 20;
    const totalCards = wistiaMediaIds.length;

    return (
        <section ref={sectionRef} className="py-12 bg-black text-white relative overflow-hidden">
            <div className="container mx-auto max-w-4xl px-4">

                {/* Profile Header */}
                <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 mb-12">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full p-[2px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600 shrink-0">
                        <div className="w-full h-full rounded-full bg-black flex items-center justify-center overflow-hidden border-2 border-black relative group">
                            <img
                                src="/instagram-profile.jpg"
                                alt="Himanshu"
                                className="w-full h-full object-cover"
                                loading="lazy"
                            />
                        </div>
                    </div>

                    <div className="flex-1 text-center md:text-left">
                        <div className="flex flex-col md:flex-row items-center gap-4 mb-4 justify-center md:justify-start">
                            <h2 className="text-xl md:text-2xl font-bold">himanshu.19970</h2>
                            <div className="flex gap-2">
                                <button onClick={() => window.open('https://www.instagram.com/himanshu.19970', '_blank')} className="px-6 py-1.5 bg-blue-500 rounded-lg text-sm font-semibold hover:bg-blue-600 transition-colors">Follow</button>
                                <button className="px-4 py-1.5 bg-white/10 rounded-lg text-sm font-semibold hover:bg-white/20 transition-colors">Message</button>
                            </div>
                        </div>

                        <div className="flex justify-center md:justify-start gap-6 mb-4 text-sm md:text-base">
                            <span><strong>1,645</strong> posts</span>
                            <span><strong>18.6K</strong> followers</span>
                            <span><strong>161</strong> following</span>
                        </div>

                        <div className="text-sm md:text-base text-white/90 space-y-1">
                            <p className="font-semibold">🍁 HIMANSHU 🍁</p>
                            <p className="text-white/60">Entrepreneur</p>
                            <p>&gt; Punjab 📍 | Business coach 💼</p>
                            <p>🚀 ਆਪਣੀਆਂ skills ਨਾਲ online business ਚ ਕਮਾਈ ਕਰੋ 👇</p>
                            <p>&gt; Want to build income through onl... <span className="text-white/60 cursor-pointer">more</span></p>
                            <a href="https://wa.link/12nt6p" target="_blank" rel="noopener noreferrer" className="text-blue-200 hover:text-blue-100 hover:underline flex items-center gap-1 justify-center md:justify-start mt-1">
                                🔗 <span className="font-semibold">wa.link/12nt6p</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Highlights */}
                <div className="flex gap-4 md:gap-8 overflow-x-auto pb-4 mb-16 no-scrollbar justify-start md:justify-center px-4">
                    {highlights.map((h, i) => (
                        <div key={i} className="flex flex-col items-center gap-2 min-w-[70px] cursor-pointer group">
                            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full p-[2px] bg-white/10 group-hover:scale-105 transition-transform shrink-0 border border-white/5">
                                <div className="w-full h-full rounded-full bg-black border-2 border-black flex items-center justify-center overflow-hidden">
                                    <img src={h.img} alt={h.title} className="w-full h-full object-cover" loading="lazy" />
                                </div>
                            </div>
                            <span className="text-xs font-medium tracking-wide whitespace-nowrap">{h.title}</span>
                        </div>
                    ))}
                </div>

                {/* Viral Reels Marquee */}
                <div className="text-center mb-10">
                    <h3 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 bg-clip-text text-transparent inline-block mb-3 uppercase tracking-tighter">VIRAL REELS</h3>
                    <p className="text-white/50 text-xs uppercase tracking-[0.2em] font-medium">Top Trending Content</p>
                </div>
            </div>

            {/* Marquee Container - Wistia Videos */}
            <div className="w-full overflow-hidden py-4">
                <div
                    className="reels-marquee-track flex"
                    style={{
                        gap: `${gap}px`,
                        willChange: 'transform',
                    }}
                >
                    {[...wistiaMediaIds, ...wistiaMediaIds].map((mediaId, i) => (
                        <div
                            key={i}
                            className="reels-card inline-block shrink-0 rounded-2xl overflow-hidden shadow-2xl border border-white/10"
                        >
                            {scriptsLoaded ? (
                                <div
                                    style={{ width: '100%', height: '100%' }}
                                    dangerouslySetInnerHTML={{
                                        __html: `
                                            <style>
                                                wistia-player[media-id='${mediaId}']:not(:defined) {
                                                    background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/${mediaId}/swatch');
                                                    display: block;
                                                    filter: blur(5px);
                                                    padding-top: 177.78%;
                                                }
                                            </style>
                                            <wistia-player
                                                media-id="${mediaId}"
                                                aspect="0.5625"
                                                autoplay="true"
                                                muted="true"
                                                loop="true"
                                                playsinline="true"
                                                silentAutoplay="allow"
                                                style="width:100%;height:100%;"
                                            ></wistia-player>
                                        `
                                    }}
                                />
                            ) : (
                                <div className="w-full h-full bg-white/5 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white/40" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M8 5v14l11-7z" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            <style>{`
                /* Mobile card sizing */
                .reels-card {
                    width: ${cardWidthMobile}px;
                    height: ${Math.round(cardWidthMobile * 16 / 9)}px;
                }

                /* Desktop card sizing */
                @media (min-width: 768px) {
                    .reels-card {
                        width: ${cardWidthDesktop}px;
                        height: ${Math.round(cardWidthDesktop * 16 / 9)}px;
                    }
                }

                @keyframes reelsScroll {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-${totalCards} * (${cardWidthMobile}px + ${gap}px))); }
                }

                @media (min-width: 768px) {
                    @keyframes reelsScroll {
                        0% { transform: translateX(0); }
                        100% { transform: translateX(calc(-${totalCards} * (${cardWidthDesktop}px + ${gap}px))); }
                    }
                }

                .reels-marquee-track {
                    animation: reelsScroll 35s linear infinite;
                }
                .reels-marquee-track:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default InstagramProfile;
