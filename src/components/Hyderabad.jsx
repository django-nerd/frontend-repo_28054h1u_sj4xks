import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cards = [
  { title: 'Charminar', desc: 'The iconic 16th-century monument and mosque at the heart of Old Hyderabad.' },
  { title: 'Golconda Fort', desc: 'Ancient fortress known for its acoustic architecture and panoramic views.' },
  { title: 'Hussain Sagar Lake', desc: 'Scenic lake with the giant Buddha statue and evening boat rides.' },
];

const Hyderabad = () => {
  return (
    <section id="hyderabad" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0c1424]">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="flex items-center justify-between gap-4">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Explore Hyderabad</h2>
          <span className="hidden sm:inline-flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300"><MapPin className="w-4 h-4" /> City of Pearls</span>
        </div>
        <p className="mt-3 text-slate-600 dark:text-slate-300 max-w-3xl">From timeless heritage to a thriving tech scene, Hyderabad blends culture and innovation. Make the most of your visit.</p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((c) => (
            <div key={c.title} className="group rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 shadow-sm hover:shadow-lg transition relative">
              <div className="h-32 bg-gradient-to-br from-cyan-500/20 via-fuchsia-500/20 to-violet-500/20 group-hover:from-cyan-500/30 group-hover:via-fuchsia-500/30 group-hover:to-violet-500/30 transition" />
              <div className="p-5">
                <h3 className="font-semibold text-lg">{c.title}</h3>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{c.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hyderabad;
