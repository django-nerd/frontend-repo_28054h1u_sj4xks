import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Calendar, MapPin, Users } from 'lucide-react';

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative py-24 sm:py-32">
    <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.08),transparent_60%)]" />
    <div className="relative container mx-auto px-6 sm:px-8 max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl"
      >
        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight">{title}</h2>
        {subtitle && (
          <p className="mt-3 text-base sm:text-lg text-slate-600 dark:text-slate-300">{subtitle}</p>
        )}
      </motion.div>
      <div className="mt-10">{children}</div>
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.6 }}
    whileHover={{ y: -4, scale: 1.02 }}
    className="group rounded-2xl border border-slate-200/50 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-md p-6 shadow-sm hover:shadow-lg transition-shadow"
  >
    <div className="flex items-center gap-3">
      <div className="grid h-10 w-10 place-items-center rounded-xl bg-cyan-500/10 text-cyan-500">
        <Icon size={20} />
      </div>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="mt-3 text-slate-600 dark:text-slate-300">{desc}</p>
  </motion.div>
);

const SplineBand = () => (
  <div className="relative overflow-hidden rounded-3xl border border-slate-200/50 dark:border-white/10 bg-gradient-to-b from-white/40 to-white/10 dark:from-white/5 dark:to-transparent backdrop-blur-xl">
    <div className="absolute inset-0">
      <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
    </div>
    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-white dark:via-[#0b0f1a]/40 dark:to-[#0b0f1a]" />
    <div className="relative z-10 p-8 sm:p-12">
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl sm:text-3xl font-bold"
      >
        Interactive 3D — Minimal, Futuristic, Digital
      </motion.h3>
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="mt-2 text-slate-600 dark:text-slate-300 max-w-2xl"
      >
        Explore the live 3D object. Rotate, pan, and interact — the overlay won’t block your pointer, ensuring a smooth experience.
      </motion.p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <FeatureCard icon={Calendar} title="Dates" desc="2 – 4 Oct 2026 • Save your spot early and get the best rates." />
        <FeatureCard icon={MapPin} title="Venue" desc="Hyderabad, India • World-class convention destination." />
        <FeatureCard icon={Users} title="Community" desc="Join leading experts in neurovascular science and innovation." />
      </div>
    </div>
  </div>
);

const SplineShowcase = () => {
  return (
    <>
      <Section
        id="interactive-3d"
        title="Interactive 3D Showcase"
        subtitle="A dedicated band highlighting our hero Spline asset with contextual information and motion."
      >
        <SplineBand />
      </Section>

      <Section id="details" title="More you can do" subtitle="We’ve layered in tasteful motion and micro-interactions across the page.">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Scroll-linked reveals</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Sections animate gently into view, creating a narrative flow without overwhelming motion.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Hover micro-interactions</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Cards subtly lift, buttons gain depth, and icons glow to encourage exploration.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Theme-aware aesthetics</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Light and dark modes are fully supported, with balanced contrast and color harmony.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-2xl border border-slate-200/50 dark:border-white/10 p-6 bg-white/70 dark:bg-white/5 backdrop-blur"
          >
            <h3 className="text-xl font-semibold">Spline layering</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">We integrate 3D scenes without negative z-index and with non-blocking overlays for clarity and interaction.</p>
          </motion.div>
        </div>
      </Section>
    </>
  );
};

export default SplineShowcase;
