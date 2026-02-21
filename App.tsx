
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PortfolioGrid from './components/PortfolioGrid';
import Biography from './components/Biography';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
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
  );
};

export default App;
