import React from 'react';
import Hero from './components/Hero.jsx';
import Welcome from './components/Welcome.jsx';
import Pricing from './components/Pricing.jsx';
import ConferenceInfo from './components/ConferenceInfo.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#0b0f1a] dark:text-slate-100 selection:bg-cyan-300/40 selection:text-slate-900">
      <Hero />
      <Welcome />
      <Pricing />
      <ConferenceInfo />
    </div>
  );
}

export default App;
