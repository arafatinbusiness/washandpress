
import React, { useState, useEffect } from 'react';

interface HeaderProps {
  onLoginClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ onLoginClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-white shadow-xl py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 gold-gradient rounded-full flex items-center justify-center text-white shadow-lg">
            <span className="serif text-2xl font-black">R</span>
          </div>
          <div>
            <h1 className={`text-xl font-bold tracking-tight serif leading-tight ${isScrolled ? 'text-slate-900' : 'text-white'}`}>
              Raad Laundry
            </h1>
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
              <span className={`text-[10px] uppercase tracking-[0.2em] font-bold ${isScrolled ? 'text-slate-500' : 'text-white/70'}`}>Open · Closes 1:30 AM</span>
            </div>
          </div>
        </div>

        <nav className="hidden md:flex items-center space-x-10">
          {['Services', 'Pricing', 'Location'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-bold uppercase tracking-widest hover:text-[#D4AF37] transition-colors ${isScrolled ? 'text-slate-600' : 'text-white/90'}`}>
              {item}
            </a>
          ))}
          <a href="tel:+966564213962" className="gold-gradient text-white px-7 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:scale-105 transition-transform">
            Request Pickup
          </a>
          {onLoginClick && (
            <button 
              onClick={onLoginClick}
              className="bg-white text-slate-800 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg hover:bg-slate-100 transition-colors"
            >
              Login / Sign Up
            </button>
          )}
        </nav>
        
        <button className="md:hidden text-2xl" style={{ color: isScrolled ? '#1a1a1a' : '#fff' }}>
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
