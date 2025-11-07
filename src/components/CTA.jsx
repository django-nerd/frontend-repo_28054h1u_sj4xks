import React from 'react';
import { motion } from 'framer-motion';

function downloadICS() {
  const title = 'NEUROVASCON 2026';
  const description = '26th Annual Conference of the Cerebrovascular Society of India — Hyderabad, India';
  const location = 'Hyderabad, India';
  // Event dates: 2–4 Oct 2026 in local time. Using UTC for portability.
  const start = '20261002T040000Z';
  const end = '20261004T130000Z';
  const ics = `BEGIN:VCALENDAR\nVERSION:2.0\nPRODID:-//NEUROVASCON//2026//EN\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nBEGIN:VEVENT\nUID:${Date.now()}@neurovascon2026\nSUMMARY:${title}\nDTSTAMP:${new Date().toISOString().replace(/[-:]/g,'').split('.')[0]}Z\nDTSTART:${start}\nDTEND:${end}\nLOCATION:${location}\nDESCRIPTION:${description}\nEND:VEVENT\nEND:VCALENDAR`;
  const blob = new Blob([ics], { type: 'text/calendar;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'neurovascon-2026.ics';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

const CTA = () => {
  return (
    <section id="register" className="relative py-16 sm:py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-fuchsia-500/10 to-transparent" />
      <div className="relative container mx-auto px-6 sm:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/10 backdrop-blur p-8 sm:p-12 text-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold tracking-tight">Save Your Seat for NEUROVASCON 2026</h3>
          <p className="mt-3 text-slate-700 dark:text-slate-300">Early bird pricing now open for Members, Non-Members, Students, and Accompanying Persons.</p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a href="#pricing" className="inline-flex items-center rounded-lg bg-cyan-600 px-5 py-3 text-white font-semibold hover:bg-cyan-700 transition">Register Now</a>
            <a href="#about" className="inline-flex items-center rounded-lg border border-slate-300 dark:border-white/20 px-5 py-3 hover:bg-slate-50 dark:hover:bg-white/10 transition">Learn More</a>
            <button onClick={downloadICS} className="inline-flex items-center rounded-lg border border-cyan-300/60 text-cyan-700 dark:text-cyan-300 px-5 py-3 hover:bg-cyan-50 dark:hover:bg-white/10 transition">Add to Calendar (.ics)</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
