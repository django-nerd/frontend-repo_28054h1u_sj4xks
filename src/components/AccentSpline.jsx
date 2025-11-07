import React from 'react';
import Spline from '@splinetool/react-spline';

// A lightweight decorative Spline accent. Non-blocking overlays, no negative z-index.
const AccentSpline = ({ className = '' }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/40 dark:bg-white/5 backdrop-blur ${className}`}>
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/30 to-white dark:via-[#0b0f1a]/30 dark:to-[#0b0f1a]" />
      <div className="relative z-10 p-4 text-xs text-slate-600 dark:text-slate-300">Interactive accent · drag to explore</div>
    </div>
  );
};

export default AccentSpline;
