
import React, { useEffect, useRef, useState } from 'react';

const Biography: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.1 });

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const socialMedia = [
    { name: 'Instagram', url: '#', handle: '@cromiastudio' },
    { name: 'Behance', url: '#', handle: 'cromia' },
    { name: 'LinkedIn', url: '#', handle: 'cromia-studio' },
    { name: 'YouTube', url: '#', handle: 'CromiaTV' }
  ];

  return (
    <div ref={sectionRef} className="container mx-auto px-6 max-w-7xl">
      <div className={`flex flex-col lg:flex-row items-stretch gap-12 lg:gap-24 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        {/* Left Column: Text & Context */}
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <span className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-4 flex items-center gap-2">
            Sobre el Estudio
            <span className="w-1 h-1 rounded-full bg-[#D4A017]" />
          </span>
          <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter text-zinc-900 mb-10 leading-[0.85]">
            CROMIA <br />Studio
          </h2>
          <div className="space-y-6 text-zinc-500 font-light leading-relaxed text-base italic border-l-2 border-zinc-100 pl-8 mb-12">
            <p>
              CROMIA es un estudio de fotografía y dirección creativa que fusiona la estética minimalista con una visión radical del arte visual.
            </p>
            <p>
              Nuestra experiencia colaborando con marcas globales nos ha permitido refinar un estilo poderoso que destaca en el mercado contemporáneo.
            </p>
          </div>

          {/* Llamativo Social Links Section */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {socialMedia.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="group relative block p-6 border border-zinc-100 overflow-hidden transition-all duration-500 hover:border-zinc-900"
              >
                <div className="relative z-10">
                  <span className="block text-[8px] font-bold uppercase tracking-[0.3em] text-zinc-400 group-hover:text-zinc-500 transition-colors">
                    {social.name}
                  </span>
                  <span className="block text-xs font-black uppercase tracking-tighter text-zinc-900 mt-1">
                    {social.handle}
                  </span>
                </div>
                {/* Background Hover Effect */}
                <div className="absolute bottom-0 right-0 p-2 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="text-4xl font-black italic select-none">{social.name.charAt(0)}</span>
                </div>
                <div className="absolute left-0 bottom-0 w-0 h-0.5 bg-[#D4A017] group-hover:w-full transition-all duration-700" />
              </a>
            ))}
          </div>

          <div className="mt-12">
            <a href="mailto:hello@cromia.studio" className="group inline-flex items-center space-x-4 text-xs font-black uppercase tracking-widest text-zinc-900">
              <span className="border-b-2 border-zinc-900 pb-1 group-hover:text-[#D4A017] group-hover:border-[#D4A017] transition-all">
                Contactar para Colaboraciones
              </span>
              <svg className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right Column: Imagery & Bold Visuals */}
        <div className="w-full lg:w-7/12 relative group">
          <div className="relative h-full min-h-[600px] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&q=80&w=1200&grayscale"
              alt="CROMIA Studio"
              className="w-full h-full object-cover grayscale transition-transform duration-[15s] group-hover:scale-110"
            />
            {/* Artistic Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

            {/* Vertical Social Label - Editorial Style */}
            <div className="absolute top-0 right-0 h-full flex items-center pr-4">
              <span className="rotate-90 origin-right text-[10px] font-bold uppercase tracking-[1em] text-white/40 whitespace-nowrap">
                FOLLOW THE JOURNEY
              </span>
            </div>

            {/* Floating Brand Mark */}
            <div className="absolute bottom-12 left-12 w-24 h-24 border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:border-white/60 transition-colors duration-700">
              <span className="text-white text-3xl font-black tracking-tighter">CS</span>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-zinc-900 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-700" />
          <div className="absolute -top-6 -right-6 w-32 h-32 border-t border-r border-zinc-200 -z-10" />
        </div>
      </div>
    </div>
  );
};

export default Biography;
