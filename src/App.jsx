import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Welcome from './components/Welcome.jsx';
import SplineShowcase from './components/SplineShowcase.jsx';
import Speakers from './components/Speakers.jsx';
import Agenda from './components/Agenda.jsx';
import Pricing from './components/Pricing.jsx';
import Hyderabad from './components/Hyderabad.jsx';
import CTA from './components/CTA.jsx';
import ProgressIndicator from './components/ProgressIndicator.jsx';
import AccentSpline from './components/AccentSpline.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-slate-100 selection:bg-cyan-300/40 selection:text-slate-900">
      <ProgressIndicator />
      <Header />
      <Hero />
      <Welcome />

      {/* Decorative Spline accents near Hyderabad and Pricing */}
      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="grid md:grid-cols-2 gap-6">
          <AccentSpline className="h-48" />
          <AccentSpline className="h-48" />
        </div>
      </div>

      <SplineShowcase />
      <Speakers />
      <Agenda />
      <Pricing />

      <div className="container mx-auto px-6 sm:px-8 max-w-7xl">
        <div className="grid md:grid-cols-3 gap-6">
          <AccentSpline className="h-56" />
          <AccentSpline className="h-56" />
          <AccentSpline className="h-56" />
        </div>
      </div>

      <Hyderabad />
      <CTA />
    </div>
  );
}

export default App;
