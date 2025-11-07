import React, { useEffect, useState } from 'react';

// Sticky progress bar + active section highlight based on headings with ids
const ProgressIndicator = () => {
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(pct);

      const sections = Array.from(document.querySelectorAll('section[id]'));
      let current = '';
      for (const sec of sections) {
        const rect = sec.getBoundingClientRect();
        if (rect.top <= 120 && rect.bottom >= 120) {
          current = sec.id;
          break;
        }
      }
      setActive(current);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="fixed top-0 inset-x-0 z-50">
      <div className="h-1 bg-transparent">
        <div className="h-full bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-violet-500" style={{ width: `${progress}%` }} />
      </div>
      <nav className="mx-auto mt-2 hidden md:flex max-w-7xl items-center gap-3 rounded-full border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-[#0b0f1a]/70 backdrop-blur px-3 py-1 text-xs">
        {[
          { id: 'about', label: 'About' },
          { id: 'interactive-3d', label: '3D' },
          { id: 'speakers', label: 'Speakers' },
          { id: 'agenda', label: 'Agenda' },
          { id: 'pricing', label: 'Pricing' },
          { id: 'hyderabad', label: 'Hyderabad' },
          { id: 'register', label: 'Register' },
        ].map((item) => (
          <a key={item.id} href={`#${item.id}`} className={`px-3 py-1 rounded-full transition ${active===item.id ? 'bg-cyan-600 text-white':'hover:bg-slate-100 dark:hover:bg-white/10'}`}>
            {item.label}
          </a>
        ))}
      </nav>
    </div>
  );
};

export default ProgressIndicator;
