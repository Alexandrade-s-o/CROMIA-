
import React, { useState, useEffect } from 'react';
import { PortfolioCategory, PortfolioSubImage } from '../types';

const portfolioData: PortfolioCategory[] = [
  {
    id: 'direccion-arte',
    title: 'Dirección de Arte',
    coverImage: '/direccion-arte/DSC_2554.jpg',
    images: [
      { id: 'da1', url: '/direccion-arte/DSC_2554.jpg' }, // General — cuerpo completo con globo rojo


      { id: 'da17', url: '/direccion-arte/_MG_8878.jpg' },
      { id: 'da18', url: '/direccion-arte/_MG_8883.jpg' },
      { id: 'da19', url: '/direccion-arte/_MG_8885.jpg' },
      { id: 'da20', url: '/direccion-arte/_MG_8887.jpg' },
      { id: 'da21', url: '/direccion-arte/_MG_8889.jpg' },
      { id: 'da22', url: '/direccion-arte/_MG_8894.jpg' },
      { id: 'da23', url: '/direccion-arte/_MG_8896.jpg' },
      { id: 'da24', url: '/direccion-arte/_MG_8900.jpg' },
      { id: 'da25', url: '/direccion-arte/_MG_8904.jpg' },
      { id: 'da26', url: '/direccion-arte/_MG_8905.jpg' },
      { id: 'da27', url: '/direccion-arte/_MG_8909.jpg' },
      { id: 'da28', url: '/direccion-arte/_MG_8913.jpg' },
      { id: 'da29', url: '/direccion-arte/_MG_8918.jpg' },
      { id: 'da30', url: '/direccion-arte/_MG_8924.jpg' },
      { id: 'da31', url: '/direccion-arte/_MG_8926.jpg' },
      { id: 'da32', url: '/direccion-arte/_MG_8930.jpg' },
      { id: 'da33', url: '/direccion-arte/_MG_8931.jpg' },
      { id: 'da34', url: '/direccion-arte/_MG_8933-Recuperado.jpg' },
      { id: 'da35', url: '/direccion-arte/_MG_8936.jpg' },
      { id: 'da36', url: '/direccion-arte/_MG_8937.jpg' },
      { id: 'da37', url: '/direccion-arte/_MG_8938.jpg' },
      { id: 'da38', url: '/direccion-arte/_MG_8939.jpg' },
      { id: 'da39', url: '/direccion-arte/_MG_8942.jpg' },
      { id: 'da40', url: '/direccion-arte/DSC_2578.jpg' },
      { id: 'da41', url: '/direccion-arte/DSC_2579.jpg' },
      { id: 'da42', url: '/direccion-arte/DSC_2559.jpg' },
      { id: 'da43', url: '/direccion-arte/DSC_2580.jpg' },
      { id: 'da44', url: '/direccion-arte/DSC_2613.jpg' },
      { id: 'da45', url: '/direccion-arte/DSC_2614.jpg' },
      { id: 'da46', url: '/direccion-arte/DSC_2615.jpg' },
      { id: 'da47', url: '/direccion-arte/DSC_2616.jpg' },
      { id: 'da48', url: '/direccion-arte/DSC_2617.jpg' },
      { id: 'da49', url: '/direccion-arte/DSC_2618.jpg' },
      { id: 'da50', url: '/direccion-arte/2.JPEG' },
      { id: 'da51', url: '/direccion-arte/21.JPEG' },
      { id: 'da52', url: '/direccion-arte/a.JPEG' },
      { id: 'da53', url: '/direccion-arte/bv.JPEG' },
      { id: 'da54', url: '/direccion-arte/c.JPEG' },
      { id: 'da55', url: '/direccion-arte/c2.JPEG' },
      { id: 'da56', url: '/direccion-arte/d.JPEG' },
      { id: 'da57', url: '/direccion-arte/z.JPEG' },
    ]
  },

  {
    id: 'urbano',
    title: 'Urbano',
    coverImage: '/urbano/_MG_7959.jpg',
    images: [
      { id: 'u1', url: '/urbano/_MG_7959.jpg' },
      { id: 'u2', url: '/urbano/_MG_7962.jpg' },
      { id: 'u3', url: '/urbano/_MG_7967.jpg' },
      { id: 'u4', url: '/urbano/_MG_7980.jpg' },
      { id: 'u5', url: '/urbano/_MG_7982.jpg' },
      { id: 'u6', url: '/urbano/_MG_7988.jpg' },
      { id: 'u7', url: '/urbano/_MG_7996.jpg' },
      { id: 'u8', url: '/urbano/_MG_8009.jpg' },
      { id: 'u9', url: '/urbano/_MG_8452.jpg' },
      { id: 'u10', url: '/urbano/_MG_8456.jpg' },
      { id: 'u11', url: '/urbano/_MG_8460.jpg' },
      { id: 'u12', url: '/urbano/_MG_8468.jpg' },
    ]
  },
  {
    id: 'moda',
    title: 'Moda',
    coverImage: '/MODA/_MG_9230-2.jpg',
    images: [
      { id: 'm1', url: '/MODA/_MG_9114-2.jpg' },
      { id: 'm2', url: '/MODA/_MG_9115-2.jpg' },
      { id: 'm3', url: '/MODA/_MG_9121-2.jpg' },
      { id: 'm4', url: '/MODA/_MG_9122-2.jpg' },
      { id: 'm5', url: '/MODA/_MG_9124-2.jpg' },
      { id: 'm6', url: '/MODA/_MG_9125-2.jpg' },
      { id: 'm7', url: '/MODA/_MG_9150-2.jpg' },
      { id: 'm8', url: '/MODA/_MG_9196-2.jpg' },
      { id: 'm9', url: '/MODA/_MG_9201-2.jpg' },
      { id: 'm10', url: '/MODA/_MG_9213-2.jpg' },
      { id: 'm11', url: '/MODA/_MG_9219-2.jpg' },
      { id: 'm12', url: '/MODA/_MG_9230-2.jpg' },
      { id: 'm13', url: '/MODA/_MG_9233-2.jpg' },
      { id: 'm14', url: '/MODA/_MG_9234-2.jpg' },
      { id: 'm15', url: '/MODA/_MG_9236-2.jpg' },
      { id: 'm16', url: '/MODA/_MG_9237-2.jpg' },
      { id: 'm17', url: '/MODA/_MG_9281.jpg' },
      { id: 'm18', url: '/MODA/_MG_9282.jpg' },
      { id: 'm19', url: '/MODA/_MG_9283.jpg' },
      { id: 'm20', url: '/MODA/_MG_9284.jpg' },
      { id: 'm21', url: '/MODA/_MG_9285.jpg' },
      { id: 'm22', url: '/MODA/_MG_9455.jpg' },
      { id: 'm23', url: '/MODA/_MG_9475.jpg' },
      { id: 'm24', url: '/MODA/_MG_9488.jpg' },
      { id: 'm25', url: '/MODA/_MG_9506.jpg' },
      { id: 'm26', url: '/MODA/_MG_9509.jpg' },
      { id: 'm27', url: '/MODA/_MG_9534.jpg' },
      { id: 'm28', url: '/MODA/_MG_9587.jpg' },
      { id: 'm29', url: '/MODA/_MG_9590.jpg' },
      { id: 'm30', url: '/MODA/_MG_9612.jpg' },
      { id: 'm31', url: '/MODA/_MG_9631.jpg' },
      { id: 'm32', url: '/MODA/_MG_9694.jpg' },
      { id: 'm33', url: '/MODA/_MG_9739.jpg' },
      { id: 'm34', url: '/MODA/_MG_9809.jpg' },
      { id: 'm35', url: '/MODA/_MG_9827.jpg' },
      { id: 'm36', url: '/MODA/_MG_9900.jpg' },
      { id: 'm37', url: '/MODA/_MG_9902.jpg' },
      { id: 'm38', url: '/MODA/IMG_5007.JPG.jpeg' },
      { id: 'm39', url: '/MODA/IMG_5008.JPG.jpeg' },
      { id: 'm40', url: '/MODA/IMG_5009.JPG.jpeg' },
      { id: 'm41', url: '/MODA/IMG_5010.JPG.jpeg' },
      { id: 'm42', url: '/MODA/IMG_5011.JPG.jpeg' },
      { id: 'm43', url: '/MODA/IMG_5012.JPG.jpeg' },
      { id: 'm44', url: '/MODA/IMG_5013.JPG.jpeg' },
      { id: 'm45', url: '/MODA/IMG_5014.JPG.jpeg' },
      { id: 'm46', url: '/MODA/image00001.jpeg' },
      { id: 'm47', url: '/MODA/image00002.jpeg' },
      { id: 'm48', url: '/MODA/image00003.jpeg' },
      { id: 'm49', url: '/MODA/image00004.jpeg' },
      { id: 'm50', url: '/MODA/image00005.jpeg' },
      { id: 'm51', url: '/MODA/image00006.jpeg' },
      { id: 'm52', url: '/MODA/image00007.jpeg' },
      { id: 'm53', url: '/MODA/image00008.jpeg' },
      { id: 'm54', url: '/MODA/image00009.jpeg' },
    ]
  },
  {
    id: 'editorial',
    title: 'Editorial',
    coverImage: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=800&grayscale',
    images: [
      { id: 'e1', url: 'https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200' },
      { id: 'e2', url: 'https://images.unsplash.com/photo-1581067720293-84051b9d4023?auto=format&fit=crop&q=80&w=1200' },
      { id: 'e3', url: 'https://images.unsplash.com/photo-1481824429379-07aa5e5b0739?auto=format&fit=crop&q=80&w=1200' },
    ]
  },
  {
    id: 'foto-producto',
    title: 'Foto Producto',
    coverImage: '/foto-producto/_DSC6043 (3).png',
    images: [
      { id: 'fp1', url: '/foto-producto/_DSC6043 (3).png' },
      { id: 'fp2', url: '/foto-producto/WhatsApp Image 2026-03-01 at 10.41.43 PM (1).jpeg' },
      { id: 'fp3', url: '/foto-producto/Zapatillas_Producto_Fondo Blanco 1 (4).png' },
    ]
  }
];

const PortfolioGrid: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<PortfolioCategory | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') handleNext();
      if (event.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [activeIndex, selectedCategory]);

  const handleKeys = (event: KeyboardEvent) => {
    if (activeIndex === null) return;
    if (event.key === 'Escape') setActiveIndex(null);
    if (event.key === 'ArrowRight') handleNext();
    if (event.key === 'ArrowLeft') handlePrev();
  };

  const handleNext = () => {
    if (selectedCategory && activeIndex !== null) {
      setActiveIndex((prev) => (prev! + 1) % selectedCategory.images.length);
    }
  };

  const handlePrev = () => {
    if (selectedCategory && activeIndex !== null) {
      setActiveIndex((prev) => (prev! - 1 + selectedCategory.images.length) % selectedCategory.images.length);
    }
  };

  const handleCategoryClick = (category: PortfolioCategory) => {
    setSelectedCategory(category);
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedCategory(null);
    setActiveIndex(null);
  };

  const getCollageClasses = (index: number) => {
    const mod = index % 6;
    switch (mod) {
      case 0: return 'md:col-span-2 md:row-span-1 aspect-[16/9] md:aspect-auto';
      case 3: return 'md:col-span-1 md:row-span-2 aspect-[3/4] md:aspect-auto';
      default: return 'md:col-span-1 md:row-span-1 aspect-[1/1] md:aspect-auto';
    }
  };

  const activeImage = selectedCategory && activeIndex !== null ? selectedCategory.images[activeIndex] : null;

  return (
    <div className="w-full relative">
      <div className="container mx-auto px-6 mb-12 flex flex-col items-center">
        {!selectedCategory ? (
          <>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-zinc-900 animate-slide-up">
              Portafolio
            </h2>
            <div className="w-12 h-px bg-zinc-900 mt-4 opacity-20" />
          </>
        ) : (
          <div className="flex flex-col items-center animate-fade-in-quick">
            <button
              onClick={handleBack}
              className="group flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-zinc-900 transition-colors mb-4"
            >
              <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Regresar</span>
            </button>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-zinc-900">
              {selectedCategory.title}
            </h2>
            {selectedCategory.id === 'moda' && (
              <div className="mt-4 h-1 w-24 bg-[#FFD1DC] rounded-full animate-fade-in" />
            )}
          </div>
        )}

      </div>

      {/* Moda Section Ambient Glow */}
      {selectedCategory?.id === 'moda' && (
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] pointer-events-none opacity-20" style={{
          background: 'radial-gradient(circle at center, #FFD1DC 0%, transparent 70%)'
        }} />
      )}

      {!selectedCategory ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-0.5 bg-zinc-100">
          {portfolioData.map((category) => (
            <div
              key={category.id}
              className="group relative aspect-[3/4] overflow-hidden bg-white cursor-pointer"
              onClick={() => handleCategoryClick(category)}
            >
              <img
                src={category.coverImage}
                alt={category.title}
                className="w-full h-full object-cover grayscale transition-all duration-[1s] group-hover:scale-110 group-hover:grayscale-0 group-active:grayscale-0 group-active:scale-110"
                style={{ transitionDelay: '0.8s' }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/5 transition-colors duration-500 flex items-center justify-center">
                <div className="text-center">
                  <span className="text-white text-2xl font-black uppercase tracking-tighter mb-4 block" style={{ borderBottom: '2px solid #D4A017' }}>
                    Ver {category.title}
                  </span>

                  {/* Central Unlocker */}
                  <div className="mx-auto w-32 flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <span className="text-[10px] text-white/80 uppercase tracking-[0.6em] font-black">Unlock</span>
                    <div className="w-full h-1 bg-white/30 rounded-full overflow-hidden backdrop-blur-sm">
                      <div className="h-full bg-[#D4A017] w-0 group-hover:w-full transition-all duration-[0.8s] ease-in-out" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-4 left-6">
                <span className="text-white text-[10px] font-medium uppercase tracking-[0.2em] opacity-80 group-hover:opacity-100">
                  CROMIA Studio
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 md:grid-flow-dense gap-0.5 bg-zinc-200">
          {selectedCategory.images.map((image, idx) => (
            <div
              key={image.id}
              className={`group relative overflow-hidden bg-white cursor-pointer ${getCollageClasses(idx)}`}
              onClick={() => setActiveIndex(idx)}
            >
              <img
                src={image.url}
                alt={`${selectedCategory.title} ${idx}`}
                className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105 group-active:grayscale-0 group-active:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />

              <div className="absolute bottom-6 left-6 pointer-events-none">
                <span className="text-white text-[9px] font-bold uppercase tracking-[0.3em] opacity-80 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]">
                  CROMIA Studio
                </span>
              </div>
              <div className="absolute top-6 right-6 pointer-events-none">
                <span className="text-white/20 text-[10px] font-light">{(idx + 1).toString().padStart(2, '0')}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Full UI Modal with Navigation */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-modal-reveal"
          onClick={() => setActiveIndex(null)}
        >
          {/* Close Button */}
          <button className="absolute top-6 right-6 text-white/50 hover:text-white transition-colors p-2 z-[110]">
            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation Arrows */}
          <button
            className="absolute left-4 md:left-8 z-[110] text-white/30 hover:text-white transition-colors p-4"
            onClick={(e) => { e.stopPropagation(); handlePrev(); }}
          >
            <svg className="w-12 h-12 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            className="absolute right-4 md:right-8 z-[110] text-white/30 hover:text-white transition-colors p-4"
            onClick={(e) => { e.stopPropagation(); handleNext(); }}
          >
            <svg className="w-12 h-12 md:w-20 md:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative w-full h-full flex items-center justify-center p-4 md:p-12 group/modal"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              key={activeImage.id}
              src={activeImage.url}
              className="max-w-full max-h-full object-contain grayscale group-hover/modal:grayscale-0 group-active/modal:grayscale-0 transition-all duration-[1s] ease-in-out cursor-zoom-out animate-image-reveal"
              style={{ transitionDelay: '1.5s' }}
              alt="Full view"
              onClick={() => setActiveIndex(null)}
            />

            {/* Central iPhone-style Unlocker for the Modal */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none group-hover/modal:opacity-0 group-active/modal:opacity-0 transition-opacity duration-300" style={{ transitionDelay: '1.5s' }}>
              <div className="w-56 flex flex-col items-center gap-4">
                <span className="text-[11px] text-white/90 uppercase tracking-[0.9em] font-black drop-shadow-2xl animate-shimmer bg-gradient-to-r from-white/20 via-white to-white/20 bg-[length:200%_100%] bg-clip-text text-transparent">
                  Slide to Reveal
                </span>
                <div className="w-full h-[3px] bg-white/10 rounded-full overflow-hidden backdrop-blur-xl border border-white/5 shadow-2xl">
                  <div className="h-full bg-gradient-to-r from-[#D4A017] to-[#FFD700] w-0 group-hover/modal:w-full group-active/modal:w-full transition-all duration-[1.5s] cubic-bezier(0.65, 0, 0.35, 1)" />
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center pointer-events-none w-full">
              <span className={`text-[8px] font-bold uppercase tracking-[0.8em] ${selectedCategory?.id === 'moda' ? 'text-[#FFD1DC]' : 'text-white/30'}`}>
                Exhibición Digital — CROMIA Studio ({(activeIndex! + 1)} / {selectedCategory?.images.length})
              </span>
            </div>
          </div>
          {selectedCategory?.id === 'moda' && (
            <div className="absolute inset-0 pointer-events-none opacity-10" style={{
              background: 'radial-gradient(circle at center, #FFD1DC 0%, transparent 80%)'
            }} />
          )}
        </div>
      )}

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes modalReveal {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes imageReveal {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes slideUpGrid {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes tutorialSlide {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(200%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-modal-reveal { animation: modalReveal 0.4s ease-out forwards; }
        .animate-image-reveal { animation: imageReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-up { animation: slideUpGrid 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-fade-in-quick { animation: modalReveal 0.5s ease-out forwards; }
        .animate-tutorial-slide { animation: tutorialSlide 3s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 3s infinite linear; }
      `}} />
    </div>
  );
};

export default PortfolioGrid;
