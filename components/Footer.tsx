
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socials = [
    { name: 'LinkedIn', icon: 'LI', url: '#' },
    { name: 'Facebook', icon: 'FB', url: '#' },
    { name: 'Instagram', icon: 'IG', url: '#' },
    { name: 'Behance', icon: 'BE', url: '#' },
    { name: 'YouTube', icon: 'YT', url: '#' },
  ];

  return (
    <footer id="footer" className="bg-zinc-900 text-white py-12 relative overflow-hidden">
      {/* Subtle gold glow in the background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 40% at 50% 100%, rgba(212,160,23,0.05) 0%, transparent 70%)' }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">

          <div className="flex space-x-6">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="footer-social-btn w-10 h-10 rounded-full flex items-center justify-center text-[10px] font-bold tracking-tighter transition-all duration-300"
                style={{ border: '1px solid rgba(255,255,255,0.15)' }}
                title={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="text-center md:text-right">
            <p className="text-[10px] font-light tracking-[0.2em] uppercase opacity-50 mb-2">
              Based in Bogotá, Colombia
            </p>
            <p className="text-sm font-medium tracking-widest uppercase">
              © {currentYear}{' '}
              <span style={{ color: '#D4A017' }}>CROMIA</span> Studio
            </p>
          </div>

        </div>

        {/* Gold divider line */}
        <div
          className="mt-12 pt-8 text-center text-[8px] uppercase tracking-[0.4em] opacity-30"
          style={{ borderTop: '1px solid rgba(212,160,23,0.15)' }}
        >
          Minimalist Prototype | Monochromatic Series
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .footer-social-btn:hover {
          background: rgba(212,160,23,0.15) !important;
          border-color: rgba(212,160,23,0.5) !important;
          color: #D4A017 !important;
          transform: translateY(-2px);
        }
      `}} />
    </footer>
  );
};

export default Footer;
