
import React, { useState, useEffect } from 'react';

interface EntryUnlockProps {
    onUnlock: () => void;
}

const EntryUnlock: React.FC<EntryUnlockProps> = ({ onUnlock }) => {
    const [isRevealing, setIsRevealing] = useState(false);
    const [isExiting, setIsExiting] = useState(false);

    // Auto-unlock logic for the demo or just wait for interaction
    const handleInteraction = () => {
        setIsRevealing(true);
        setTimeout(() => {
            setIsExiting(true);
            setTimeout(onUnlock, 800); // Wait for exit animation
        }, 1500); // Sync with slider duration
    };

    return (
        <div className={`fixed inset-0 z-[200] flex items-center justify-center bg-black transition-all duration-1000 ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100'}`}>
            {/* Background Texture/Image */}
            <div
                className="absolute inset-0 bg-cover bg-center grayscale opacity-30 blur-sm scale-110"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?auto=format&fit=crop&q=80&w=1920')` }}
            />
            <div className="absolute inset-0 bg-black/60" />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center gap-12 w-full max-w-sm px-8">
                <div className="text-center animate-fade-in">
                    <h1 className="text-5xl font-black text-white tracking-tighter uppercase mb-2">CROMIA</h1>
                    <p className="text-[9px] text-white/40 uppercase tracking-[0.8em]">Creative Studio</p>
                </div>

                {/* iPhone-style Slider */}
                <div
                    className="group w-full flex flex-col items-center gap-4 cursor-pointer"
                    onMouseEnter={handleInteraction}
                    onTouchStart={handleInteraction}
                >
                    <div className="relative w-full h-[60px] bg-white/5 rounded-full border border-white/10 backdrop-blur-xl flex items-center px-2 overflow-hidden shadow-2xl">
                        {/* Shimmering Text */}
                        <span className={`absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.5em] font-bold transition-opacity duration-300 ${isRevealing ? 'opacity-0' : 'opacity-40 animate-shimmer bg-gradient-to-r from-white/10 via-white to-white/10 bg-[length:200%_100%] bg-clip-text text-transparent'}`}>
                            Slide to Unlock
                        </span>

                        {/* The Gold Slider Dot */}
                        <div
                            className={`h-[44px] w-[44px] rounded-full bg-gradient-to-br from-[#D4A017] to-[#FFD700] shadow-[0_0_20px_rgba(212,160,23,0.4)] flex items-center justify-center transition-all duration-[1.5s] ease-in-out ${isRevealing ? 'translate-x-[calc(100%*6.5)]' : 'translate-x-0'}`}
                        >
                            <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                            </svg>
                        </div>
                    </div>

                    <p className="text-[8px] text-white/20 uppercase tracking-[0.3em] font-medium animate-pulse">
                        Premium Digital Exhibition Ver 2.0
                    </p>
                </div>
            </div>

            <style dangerouslySetInnerHTML={{
                __html: `
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer { animation: shimmer 3s infinite linear; }
        .animate-fade-in { animation: fadeIn 1.5s ease-out forwards; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
        </div>
    );
};

export default EntryUnlock;
