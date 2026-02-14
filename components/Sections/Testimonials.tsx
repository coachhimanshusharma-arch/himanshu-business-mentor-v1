import React, { useEffect } from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'wistia-player': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
        'media-id'?: string;
        aspect?: string;
        autoplay?: boolean;
      };
    }
  }
}

const Testimonials: React.FC = () => {
  useEffect(() => {
    // Load Wistia Player Core
    const script1 = document.createElement('script');
    script1.src = "https://fast.wistia.com/player.js";
    script1.async = true;
    document.body.appendChild(script1);

    // Load individual video scripts
    const videoIds = ['fo5gqfzq1h', 'x77lledwug', 'kx5rsl3ov5'];
    videoIds.forEach(id => {
      const s = document.createElement('script');
      s.src = `https://fast.wistia.com/embed/${id}.js`;
      s.async = true;
      s.type = "module";
      document.body.appendChild(s);
    });

    return () => {
      // Cleanup if needed (optional for landing pages)
    }
  }, []);

  return (
    <section className="py-24 px-6 bg-midnight/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-3xl md:text-5xl mb-6">SUCCESS <span className="text-cyan">STORIES</span></h2>
          <p className="text-white/60 text-lg">See what our community members have achieved</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Video 1 */}
          <div className="glass p-2 rounded-2xl border-white/5 relative group">
            <style>{`wistia-player[media-id='fo5gqfzq1h']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/fo5gqfzq1h/swatch'); display: block; filter: blur(5px); padding-top:179.17%; }`}</style>
            {/* @ts-ignore */}
            <wistia-player media-id="fo5gqfzq1h" aspect="0.5581395348837209" autoplay></wistia-player>
          </div>

          {/* Video 2 */}
          <div className="glass p-2 rounded-2xl border-white/5 relative group">
            <style>{`wistia-player[media-id='x77lledwug']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/x77lledwug/swatch'); display: block; filter: blur(5px); padding-top:133.33%; }`}</style>
            {/* @ts-ignore */}
            <wistia-player media-id="x77lledwug" aspect="0.75" autoplay></wistia-player>
          </div>

          {/* Video 3 */}
          <div className="glass p-2 rounded-2xl border-white/5 relative group">
            <style>{`wistia-player[media-id='kx5rsl3ov5']:not(:defined) { background: center / contain no-repeat url('https://fast.wistia.com/embed/medias/kx5rsl3ov5/swatch'); display: block; filter: blur(5px); padding-top:176.8%; }`}</style>
            {/* @ts-ignore */}
            <wistia-player media-id="kx5rsl3ov5" aspect="0.565625" autoplay></wistia-player>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
