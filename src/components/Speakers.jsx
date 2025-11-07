import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const speakers = [
  { name: 'Dr. A. Sharma', role: 'Neurointervention', org: 'AIIMS Delhi' },
  { name: 'Prof. L. Menon', role: 'Stroke Neurology', org: 'Mayo Clinic' },
  { name: 'Dr. R. Patel', role: 'Endovascular', org: 'UCLH' },
  { name: 'Dr. S. Iyer', role: 'Neuro Imaging', org: 'NIMHANS' },
  { name: 'Prof. H. Suzuki', role: 'Neurosurgery', org: 'Keio University' },
  { name: 'Dr. M. Khan', role: 'AI in Neuro', org: 'Cleveland Clinic' },
  { name: 'Dr. P. Rao', role: 'Interventional Neuroradiology', org: 'KIMS' },
  { name: 'Dr. E. Costa', role: 'Functional Neurosurgery', org: 'USP' },
];

const tilt = {
  rest: { rotateX: 0, rotateY: 0, scale: 1 },
  hover: { rotateX: -3, rotateY: 3, scale: 1.03 },
};

const Speakers = () => {
  return (
    <section id="speakers" className="relative py-20 sm:py-28">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.08),transparent_50%)]" />
      <div className="relative container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight">Featured Speakers</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl">A curated lineup of global leaders across neurovascular surgery, endovascular therapy, stroke neurology, imaging, and AI.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><Sparkles className="w-4 h-4" /> Updated weekly</div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.06 } } }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {speakers.map((s, i) => (
            <motion.div
              key={s.name}
              variants={{ hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } }}
              whileHover="hover"
              initial="rest"
              animate="rest"
              className="group perspective"
            >
              <motion.div
                variants={tilt}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="relative rounded-2xl border border-slate-200 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur p-5 shadow-sm hover:shadow-xl"
              >
                <div className="h-28 rounded-xl bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:from-cyan-500/30 group-hover:via-fuchsia-500/30 group-hover:to-violet-500/30 transition" />
                <div className="mt-4">
                  <p className="font-semibold text-lg leading-tight">{s.name}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-300">{s.role}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">{s.org}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
