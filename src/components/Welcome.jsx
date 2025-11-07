import React from 'react';
import { motion } from 'framer-motion';

const Welcome = () => {
  return (
    <section id="about" className="relative py-16 sm:py-24 bg-white dark:bg-[#0b0f1a]">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-500/0 via-cyan-500/5 to-transparent" />
      <div className="relative container mx-auto px-6 sm:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-8 items-start"
        >
          <div className="md:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Welcome Message</h2>
            <p className="mt-4 text-slate-700 dark:text-slate-300 text-lg leading-relaxed">
              It is our pleasure to invite you to NEUROVASCON 2026, the 26th Annual Conference of the Cerebrovascular Society of India. Hosted in the vibrant city of Hyderabad, this year’s edition brings together global experts in neurovascular and cerebrovascular sciences to explore cutting-edge research, clinical innovations, and future-ready technologies.
            </p>
            <p className="mt-4 text-slate-700 dark:text-slate-300">
              Organized by PAN Research Foundation and co-hosted by RENOVA Institute of Neurological Sciences, the conference will feature keynote sessions, live demonstrations, hands-on workshops, and multidisciplinary panels designed to inspire, educate, and connect.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#pricing" className="inline-flex items-center rounded-md bg-cyan-600 text-white px-4 py-2 font-semibold hover:bg-cyan-700 transition">View Pricing</a>
              <a href="#committee" className="inline-flex items-center rounded-md border border-slate-300 dark:border-white/20 px-4 py-2 hover:bg-slate-50 dark:hover:bg-white/10 transition">Organising Committee</a>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="rounded-xl border bg-white dark:bg-white/5 dark:border-white/10 border-slate-200 p-6 shadow-sm">
              <h3 className="font-semibold text-slate-900 dark:text-white">Quick Facts</h3>
              <ul className="mt-3 space-y-2 text-slate-700 dark:text-slate-300">
                <li>Dates: 2–4 October 2026</li>
                <li>City: Hyderabad, India</li>
                <li>Theme: Neurovascular • Neuroscience • Technology</li>
                <li>Audience: Clinicians, Researchers, Students</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Welcome;
