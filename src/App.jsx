import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Welcome from './components/Welcome.jsx';
import Pricing from './components/Pricing.jsx';
import Hyderabad from './components/Hyderabad.jsx';
import CTA from './components/CTA.jsx';
import ConferenceInfo from './components/ConferenceInfo.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-slate-100 selection:bg-cyan-300/40 selection:text-slate-900">
      <Header />
      <Hero />
      <Welcome />
      <Pricing />
      <Hyderabad />
      <CTA />
      <ConferenceInfo />
    </div>
  );
}

export default App;
