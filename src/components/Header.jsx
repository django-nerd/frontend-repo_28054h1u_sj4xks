import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Calendar, MapPin } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const stored = localStorage.getItem('theme') || 'system';
    setTheme(stored);
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const isDark = theme === 'dark' || (theme === 'system' && prefersDark);
    root.classList.toggle('dark', isDark);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const next = () => setTheme((t) => (t === 'light' ? 'dark' : 'light'));

  const isDarkUi = typeof window !== 'undefined' && document.documentElement.classList.contains('dark');

  return (
    <button
      aria-label="Toggle theme"
      onClick={next}
      className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur px-3 py-2 text-slate-700 dark:text-white hover:bg-white dark:hover:bg-white/20 transition"
    >
      {isDarkUi ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
    </button>
  );
};

const Header = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setOpen(false);
    };
    const onScroll = () => {
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
    window.addEventListener('resize', onResize);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener('resize', onResize);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const nav = [
    { href: '#about', id: 'about', label: 'About' },
    { href: '#interactive-3d', id: 'interactive-3d', label: '3D' },
    { href: '#speakers', id: 'speakers', label: 'Speakers' },
    { href: '#agenda', id: 'agenda', label: 'Agenda' },
    { href: '#pricing', id: 'pricing', label: 'Pricing' },
    { href: '#hyderabad', id: 'hyderabad', label: 'Hyderabad' },
    { href: '#register', id: 'register', label: 'Register' },
  ];

  return (
    <header className="fixed top-2 inset-x-0 z-40">
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-4 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-[#0b0f1a]/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:supports-[backdrop-filter]:bg-[#0b0f1a]/60"
      >
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
            <div className="leading-tight">
              <p className="font-extrabold tracking-tight">NEUROVASCON 2026</p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 flex items-center gap-1"><Calendar className="w-3 h-3" /> 2–4 Oct • <MapPin className="w-3 h-3" /> Hyderabad</p>
            </div>
          </a>

          <div className="hidden lg:flex items-center gap-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className={`text-sm font-medium rounded-full px-3 py-1 transition ${active===n.id ? 'bg-cyan-600 text-white' : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-white/10'}`}
              >
                {n.label}
              </a>
            ))}
            <ThemeToggle />
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700 transition">Register</a>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <ThemeToggle />
            <button
              aria-label="Open menu"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-md border border-slate-200 dark:border-white/10 bg-white/70 dark:bg-white/10 backdrop-blur p-2"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </nav>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lg:hidden fixed inset-0 z-50 bg-black/40"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 260, damping: 30 }}
              className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-[#0b0f1a] border-l border-slate-200 dark:border-white/10 p-6"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-gradient-to-br from-cyan-500 to-fuchsia-500" />
                  <p className="font-bold">NEUROVASCON 2026</p>
                </div>
                <button aria-label="Close" onClick={() => setOpen(false)} className="p-2 rounded-md hover:bg-slate-100 dark:hover:bg-white/10">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="mt-6 space-y-2">
                {nav.map((n) => (
                  <a key={n.href} href={n.href} onClick={() => setOpen(false)} className={`block rounded-lg px-3 py-2 ${active===n.id ? 'bg-cyan-600 text-white' : 'text-slate-800 dark:text-slate-100 hover:bg-slate-100 dark:hover:bg-white/10'}`}>
                    {n.label}
                  </a>
                ))}
              </div>
              <a href="#pricing" onClick={() => setOpen(false)} className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700">Register</a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
