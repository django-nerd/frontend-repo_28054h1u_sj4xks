import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[100vh] overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/yji5KWXyD-xKVkWj/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Overlays to ensure readability without blocking interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/30 via-[#0b0f1a]/60 to-[#0b0f1a]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.12),transparent_60%)]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-7xl flex items-center min-h-[100vh]">
        <div className="w-full">
          <motion.div
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md dark:text-white text-slate-900 dark:border-white/10 dark:bg-white/10"
            >
              26th Annual Conference • Cerebrovascular Society of India
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-4 text-4xl sm:text-6xl font-extrabold leading-[1.1] tracking-tight"
            >
              NEUROVASCON 2026
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="mt-3 text-lg/relaxed text-white/90 max-w-2xl"
            >
              Hyderabad, India • 2 – 4 October 2026 • Organized by PAN Research Foundation • Co-Hosted by RENOVA Institute of Neurological Sciences
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-6 flex flex-wrap gap-3"
            >
              <a
                href="#pricing"
                className="inline-flex items-center rounded-lg bg-cyan-500 px-5 py-3 text-white font-semibold shadow-lg shadow-cyan-500/25 hover:bg-cyan-600 transition"
              >
                Register Now
              </a>
              <a
                href="#about"
                className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 text-white backdrop-blur hover:bg-white/20 transition"
              >
                Event Overview
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/80 max-w-2xl"
            >
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">2–4 Oct 2026</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Hyderabad, India</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Neurovascular • Neuroscience</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Save the Date</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
