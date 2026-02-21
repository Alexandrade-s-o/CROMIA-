
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Portafolio', href: '#portfolio' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#footer' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md py-3 border-b border-zinc-100 shadow-sm' : 'bg-transparent py-6'
      }`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Logo Section */}
        <a href="#home" className="flex items-center space-x-3 group transition-transform hover:scale-105 active:scale-95">
          <div className="relative w-12 h-12 md:w-16 md:h-16 overflow-hidden rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 border-2 border-white/10 group-hover:border-[#D4A017]/50">
            <img
              src="/assets/logo.jpg"
              alt="CROMIA"
              className="w-full h-full object-cover"
            />
          </div>
          <div className={`hidden sm:block overflow-hidden transition-all duration-500 ${scrolled ? 'max-w-0 opacity-0' : 'max-w-xs opacity-100'}`}>
            <div className="text-[10px] font-black uppercase tracking-[0.3em] text-zinc-900 leading-tight">
              CROMIA
              <span className="block font-light text-[7px] tracking-[0.1em] opacity-40">Creative Studio</span>
            </div>
          </div>
        </a>

        <ul className="hidden md:flex items-center space-x-10 text-[10px] font-bold uppercase tracking-[0.3em] text-zinc-900">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative py-1 group overflow-hidden inline-block"
              >
                <span className="inline-block transition-transform duration-300 group-hover:-translate-y-full">
                  {link.name}
                </span>
                <span className="absolute left-0 top-full inline-block transition-transform duration-300 group-hover:-translate-y-full text-zinc-400">
                  {link.name}
                </span>
              </a>
            </li>
          ))}
          <li>
            <a
              href="#footer"
              className="px-5 py-2.5 bg-zinc-900 text-white hover:bg-[#D4A017] hover:text-black transition-all duration-300"
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button className="text-zinc-900 p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 8h16M4 16h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
