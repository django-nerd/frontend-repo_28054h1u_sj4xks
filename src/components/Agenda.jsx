import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarDays, Clock, Filter } from 'lucide-react';

const schedule = {
  Day1: [
    { time: '09:00', title: 'Opening & Keynote: Future of Neurovascular', tag: 'Keynote' },
    { time: '10:30', title: 'AI-Assisted Stroke Triage', tag: 'AI' },
    { time: '12:00', title: 'Lunch & Posters', tag: 'Networking' },
    { time: '14:00', title: 'Endovascular Innovations', tag: 'Intervention' },
  ],
  Day2: [
    { time: '09:00', title: 'Imaging Advances for Rapid Diagnosis', tag: 'Imaging' },
    { time: '10:30', title: 'Young Investigators Session', tag: 'Research' },
    { time: '12:00', title: 'Lunch & Industry Demos', tag: 'Networking' },
    { time: '14:00', title: 'Case-Based Panel: Complex Aneurysms', tag: 'Panel' },
  ],
  Day3: [
    { time: '09:00', title: 'Hands-on Workshop: Flow Diversion', tag: 'Workshop' },
    { time: '11:30', title: 'Stroke Systems of Care', tag: 'Systems' },
    { time: '13:00', title: 'Closing Plenary & Awards', tag: 'Plenary' },
  ],
};

const tags = ['All', 'Keynote', 'AI', 'Networking', 'Intervention', 'Imaging', 'Research', 'Panel', 'Workshop', 'Systems', 'Plenary'];

const Agenda = () => {
  const [activeDay, setActiveDay] = useState('Day1');
  const [filter, setFilter] = useState('All');

  const items = schedule[activeDay].filter((i) => filter === 'All' || i.tag === filter);

  return (
    <section id="agenda" className="relative py-20 sm:py-28 bg-slate-50 dark:bg-[#0c1424]">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_bottom,rgba(56,189,248,0.08),transparent_60%)]" />
      <div className="relative container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">Agenda</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Sticky day tabs, category filter, and animated timeline for an at-a-glance plan.</p>
          </div>
          <div className="hidden md:flex gap-2">
            {(['Day1','Day2','Day3']).map((d) => (
              <button key={d} onClick={() => setActiveDay(d)} className={`rounded-full px-4 py-2 text-sm border transition ${activeDay===d? 'bg-cyan-600 text-white border-cyan-600':'border-slate-300 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10'}`}>{d}</button>
            ))}
          </div>
        </div>

        <div className="mt-6 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <div className="md:hidden flex gap-2">
            {(['Day1','Day2','Day3']).map((d) => (
              <button key={d} onClick={() => setActiveDay(d)} className={`rounded-full px-4 py-2 text-sm border transition ${activeDay===d? 'bg-cyan-600 text-white border-cyan-600':'border-slate-300 dark:border-white/20 hover:bg-slate-50 dark:hover:bg-white/10'}`}>{d}</button>
            ))}
          </div>
          <div className="flex items-center gap-2 ml-auto">
            <Filter className="w-4 h-4 text-slate-500" />
            <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="rounded-md border border-slate-300 dark:border-white/20 bg-white dark:bg-[#0b0f1a] px-3 py-2 text-sm">
              {tags.map((t)=> <option key={t} value={t}>{t}</option>)}
            </select>
          </div>
        </div>

        <div className="mt-8 relative">
          <div className="sticky top-20 z-10 -mx-6 sm:mx-0 bg-gradient-to-b from-slate-50/80 to-transparent dark:from-[#0c1424]/80 backdrop-blur py-2 px-6 rounded-t-xl flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <CalendarDays className="w-4 h-4" /> {activeDay}
          </div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pl-6"
          >
            <span className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/70 via-fuchsia-500/70 to-violet-500/70" />
            <AnimatePresence mode="popLayout">
              {items.map((it) => (
                <motion.li
                  key={`${activeDay}-${it.time}-${it.title}`}
                  layout
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.35 }}
                  className="relative ml-2 mb-6 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-4 shadow-sm"
                >
                  <div className="absolute -left-[13px] top-5 h-3 w-3 rounded-full bg-cyan-500 ring-4 ring-cyan-500/20" />
                  <div className="flex items-center gap-3">
                    <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 px-2 py-0.5 text-xs font-medium"><Clock className="w-3 h-3" /> {it.time}</span>
                    <span className="text-sm rounded-full bg-slate-100 dark:bg-white/10 px-2 py-0.5">{it.tag}</span>
                  </div>
                  <p className="mt-2 font-medium">{it.title}</p>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </div>
      </div>
    </section>
  );
};

export default Agenda;
