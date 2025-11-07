import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users } from 'lucide-react';

const ConferenceInfo = () => {
  return (
    <section id="committee" className="py-16 sm:py-24 bg-white dark:bg-[#0b0f1a]">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="grid lg:grid-cols-3 gap-10">
          {/* Organising Committee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Organising Committee</h2>
            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/5">
                <h3 className="font-semibold">Dr. D. Raja Reddy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Organising Chairman</p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/5">
                <h3 className="font-semibold">Dr. Syed Ameer Basha Paspala</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Organising Secretary</p>
              </div>
              <div className="rounded-xl border border-slate-200 dark:border-white/10 p-5 bg-white dark:bg-white/5">
                <h3 className="font-semibold">Dr. T V Ramakrishna Murthy</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">Organising Secretary</p>
              </div>
            </div>

            {/* Explore Hyderabad */}
            <div className="mt-12">
              <h3 className="text-2xl font-bold tracking-tight">Explore Hyderabad</h3>
              <p className="mt-3 text-slate-700 dark:text-slate-300">
                Discover the City of Pearls — from the iconic Charminar and Golconda Fort to vibrant cuisine and modern tech corridors. Plan your travel and make the most of your conference visit.
              </p>
              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {['Charminar', 'Hussain Sagar Lake', 'Ramoji Film City'].map((place) => (
                  <div key={place} className="rounded-xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5">
                    <div className="h-28 bg-gradient-to-br from-cyan-500/20 to-fuchsia-500/20" />
                    <div className="p-4">
                      <p className="font-medium">{place}</p>
                      <p className="text-sm text-slate-600 dark:text-slate-300">Hyderabad, India</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Side CTA */}
          <motion.aside
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="h-fit rounded-2xl border border-slate-200 dark:border-white/10 bg-gradient-to-b from-white to-slate-50 dark:from-white/10 dark:to-white/5 p-6"
          >
            <h3 className="text-xl font-bold">Save The Date</h3>
            <div className="mt-4 space-y-3 text-sm">
              <div className="flex items-center gap-2"><Calendar className="w-4 h-4" /> 2–4 October 2026</div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /> Hyderabad, India</div>
              <div className="flex items-center gap-2"><Users className="w-4 h-4" /> PAN Research Foundation • RENOVA Institute</div>
            </div>
            <a href="https://www.neurovascon2026.com" target="_blank" rel="noreferrer" className="mt-6 inline-flex w-full items-center justify-center rounded-lg bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700 transition">
              Visit Website
            </a>
            <a href="#pricing" className="mt-2 inline-flex w-full items-center justify-center rounded-lg border border-slate-300 dark:border-white/20 px-4 py-2 hover:bg-slate-50 dark:hover:bg-white/10 transition">
              Register Now
            </a>
          </motion.aside>
        </div>

        {/* Footer */}
        <div className="mt-20 border-t border-slate-200 dark:border-white/10 pt-8 text-center text-sm text-slate-600 dark:text-slate-400">
          <p>Organized by PAN Research Foundation • Co-Hosted by RENOVA Institute of Neurological Sciences</p>
          <p className="mt-1">© 2026 Neurovascon. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ConferenceInfo;
