import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Biography from './components/Biography';
import Footer from './components/Footer';
import EntryUnlock from './components/EntryUnlock';

const App: React.FC = () => {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <>
      {!unlocked && <EntryUnlock onUnlock={() => setUnlocked(true)} />}
      <div className={`flex flex-col min-h-screen bg-white transition-opacity duration-1000 ${unlocked ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="flex-grow">
          <section id="home">
            <Hero />
          </section>
          <section id="portfolio" className="py-20">
            <PortfolioGrid />
          </section>
          <section id="about" className="py-20 bg-zinc-50">
            <Biography />
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default App;
