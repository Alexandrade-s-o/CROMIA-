
import React, { useEffect, useState } from 'react';

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const updatePosition = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
            if (!isVisible) setIsVisible(true);
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (
                target.tagName === 'A' ||
                target.tagName === 'BUTTON' ||
                target.onclick ||
                target.closest('.cursor-pointer') ||
                target.closest('a')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', updatePosition);
        document.addEventListener('mouseover', handleMouseOver);

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            document.removeEventListener('mouseover', handleMouseOver);
        };
    }, [isVisible]);

    if (!isVisible) return null;

    return (
        <>
            {/* Main Cursor Dot */}
            <div
                className="fixed top-0 left-0 w-2 h-2 bg-zinc-900 rounded-full z-[9999] pointer-events-none mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
                    transition: 'transform 0.1s ease-out'
                }}
            />

            {/* Cursor Ring */}
            <div
                className="fixed top-0 left-0 w-10 h-10 border border-zinc-900 rounded-full z-[9998] pointer-events-none mix-blend-difference"
                style={{
                    transform: `translate3d(${position.x - 20}px, ${position.y - 20}px, 0) scale(${isHovering ? 2.5 : 1})`,
                    backgroundColor: isHovering ? 'rgba(212,160,23,0.1)' : 'transparent',
                    borderColor: isHovering ? '#D4A017' : 'rgba(0,0,0,0.2)',
                    transition: 'transform 0.3s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.3s ease, border-color 0.3s ease'
                }}
            />

            <style dangerouslySetInnerHTML={{
                __html: `
        @media (max-width: 768px) {
          .fixed { display: none !important; }
        }
        body, a, button {
          cursor: none !important;
        }
      `}} />
        </>
    );
};

export default CustomCursor;
