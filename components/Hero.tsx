
import React from 'react';

interface HeroProps {
  onLoginClick?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onLoginClick }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Relevant Background: Professional steaming and laundry setup */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?q=80&w=2071&auto=format&fit=crop" 
          alt="Professional Steam Pressing" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-slate-900/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full pt-20">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 mb-6 bg-gold-accent/90 text-white px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-[0.2em]">
            <i className="fas fa-certificate"></i> Wash And Press Laundries
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
            مغسلة غسيل وكي <br />
            <span className="serif italic gold-accent">Wash and press Laundry</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-xl leading-relaxed font-light">
            4.1(221) • Al Oroba St, Ar Rahmaniyyah, Riyadh 12341, Saudi Arabia • Open · Closes 10 PM • +966 55 560 6882 • PM57+PW Ar Rahmaniyyah, Riyadh Saudi Arabia
          </p>
          
          <div className="flex flex-wrap gap-4">
            <button className="bg-gold-accent text-white px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-white hover:text-gold-accent transition-all shadow-xl">
              Book A Pickup
            </button>
            {onLoginClick && (
              <button 
                onClick={onLoginClick}
                className="bg-white text-slate-800 px-10 py-4 rounded-lg font-bold text-sm uppercase tracking-widest hover:bg-slate-100 transition-all shadow-xl"
              >
                Login to POS
              </button>
            )}
            <div className="flex items-center gap-4 bg-white/10 backdrop-blur-md px-6 py-4 rounded-lg border border-white/20">
               <div className="flex text-yellow-400 text-sm">
                  {[1,2,3,4].map(i => <i key={i} className="fas fa-star"></i>)}
                  <i className="fas fa-star-half-alt"></i>
               </div>
               <span className="text-white text-xs font-semibold">4.1 (221 Reviews)</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Proximity Indicator */}
      <div className="absolute bottom-12 left-4 lg:left-12 flex items-center gap-3 lg:gap-4 bg-white p-3 lg:p-4 rounded-xl lg:rounded-2xl shadow-2xl border-l-4 border-gold">
         <div className="w-10 h-10 lg:w-12 lg:h-12 bg-slate-100 rounded-lg lg:rounded-xl flex items-center justify-center text-slate-900">
            <i className="fas fa-map-marked-alt text-lg lg:text-xl"></i>
         </div>
         <div>
            <p className="text-xs lg:text-[10px] uppercase tracking-widest font-bold text-slate-600 lg:text-slate-400">Location</p>
            <p className="text-sm lg:text-sm font-bold text-slate-800">Al Oroba St, Ar Rahmaniyyah, Riyadh 12341, Saudi Arabia</p>
         </div>
      </div>
    </section>
  );
};

export default Hero;
