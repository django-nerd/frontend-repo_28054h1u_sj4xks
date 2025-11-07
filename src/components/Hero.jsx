import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const Hero = () => {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Gradients overlay (non-blocking) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0f1a]/40 via-[#0b0f1a]/60 to-[#0b0f1a]" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 sm:px-8 max-w-7xl flex items-center min-h-[90vh]">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs backdrop-blur-md dark:text-white text-slate-900 dark:border-white/10 dark:bg-white/10">
              26th Annual Conference of the Cerebrovascular Society of India
            </span>
            <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight">
              NEUROVASCON 2026
            </h1>
            <p className="mt-3 text-lg/relaxed text-white/90 max-w-2xl">
              Hyderabad, India • 2 – 4 October 2026 • Organized by PAN Research Foundation • Co-Hosted by RENOVA Institute of Neurological Sciences
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
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
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-white/80 max-w-2xl">
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">2–4 Oct 2026</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Hyderabad, India</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Neurovascular • Neuroscience</div>
              <div className="rounded-lg border border-white/10 bg-white/5 p-3">Save the Date</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
