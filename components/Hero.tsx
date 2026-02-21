
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative h-[90vh] flex items-center justify-center overflow-hidden bg-zinc-900">
      {/* Background Image with grayscale filter */}
      <div
        className="absolute inset-0 bg-cover bg-center grayscale transition-all duration-[2s] hover:grayscale-0 hover:scale-105 active:grayscale-0 active:scale-105 opacity-60 animate-fade-in"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=1920')` }}
      />

      {/* Texture overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />

      <div className="relative z-10 text-center text-white px-4">
        {/* Gold Accent Line */}
        <div className="mx-auto mb-8 h-px w-20 bg-gradient-to-r from-transparent via-[#D4A017] to-transparent animate-fade-in" />
        <h1 className="text-6xl md:text-9xl font-black tracking-tighter uppercase mb-2 leading-none animate-slide-up">
          CROMIA
        </h1>
        <p className="text-xs md:text-sm font-light tracking-[0.6em] uppercase opacity-80 mt-4 animate-fade-in-delayed flex items-center justify-center gap-4">
          <span>Photography</span>
          <span className="w-1 h-1 rounded-full bg-[#D4A017]" />
          <span>Creative Direction</span>
        </p>
        <div className="mt-12 flex justify-center animate-fade-in-delayed-more">
          <a
            href="#portfolio"
            className="px-8 py-3 border border-white/20 text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-white hover:text-black transition-all duration-500"
          >
            Explorar Portafolio
          </a>
        </div>
      </div>

      {/* Animated Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-50 animate-bounce">
        <svg className="w-5 h-5 text-[#D4A017]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fadeIn 2s ease-out forwards; }
        .animate-slide-up { animation: slideUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-delayed { animation: fadeIn 2s ease-out 0.8s both; }
        .animate-fade-in-delayed-more { animation: fadeIn 2s ease-out 1.2s both; }
      `}} />
    </div>
  );
};

export default Hero;
