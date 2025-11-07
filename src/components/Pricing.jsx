import React from 'react';
import { motion } from 'framer-motion';

const tiers = [
  { name: 'Member', price: '₹15,000', desc: 'Early Bird Offer' },
  { name: 'Non Member', price: '₹18,000', desc: 'Early Bird Offer' },
  { name: 'Students', price: '₹12,000', desc: 'Early Bird Offer' },
  { name: 'Accompanying Person', price: '₹11,000', desc: 'Early Bird Offer' },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-16 sm:py-24 bg-slate-50 dark:bg-[#0c1424]">
      <div className="container mx-auto px-6 sm:px-8 max-w-6xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">Pricing</h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">Early bird discounts available for a limited time.</p>
        </div>
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            show: { opacity: 1, transition: { staggerChildren: 0.08 } },
          }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {tiers.map((t) => (
            <motion.div
              key={t.name}
              variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
              className="rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-white/5 p-6 shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-lg font-semibold">{t.name}</h3>
              <div className="mt-2 text-3xl font-extrabold tracking-tight">{t.price}</div>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{t.desc}</p>
              <button className="mt-6 w-full rounded-lg bg-cyan-600 px-4 py-2 text-white font-semibold hover:bg-cyan-700 transition">Register</button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;
