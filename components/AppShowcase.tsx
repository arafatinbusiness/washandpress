
import React from 'react';

const AppShowcase: React.FC = () => {
  return (
    <section id="apps" className="py-24 px-6 lg:px-12 app-gradient text-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="relative">
             {/* Decorative Phone Visual */}
             <div className="relative z-10 w-full max-w-[320px] mx-auto aspect-[9/19] bg-slate-800 rounded-[3rem] border-[10px] border-slate-700 shadow-2xl overflow-hidden">
                <div className="p-6 bg-slate-900 h-full flex flex-col justify-between">
                   <div className="space-y-4">
                      <div className="w-1/2 h-4 bg-slate-700 rounded"></div>
                      <div className="w-full h-32 bg-gold-accent/20 rounded-xl flex items-center justify-center">
                         <i className="fas fa-tshirt text-4xl text-gold-accent opacity-50"></i>
                      </div>
                      <div className="space-y-2">
                        <div className="w-full h-3 bg-slate-700 rounded"></div>
                        <div className="w-2/3 h-3 bg-slate-700 rounded"></div>
                      </div>
                   </div>
                   <div className="bg-gold-accent text-slate-900 py-3 rounded-full text-center text-xs font-bold">
                      TRACK ORDER
                   </div>
                </div>
             </div>
             {/* Back Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] bg-gold-accent/10 rounded-full blur-[100px]"></div>
          </div>

          <div>
            <h2 className="gold-accent font-bold uppercase tracking-[0.4em] text-[10px] mb-6">Smart Ecosystem</h2>
            <h3 className="serif text-4xl md:text-6xl mb-10 leading-tight">Digital Purity at Your Fingertips</h3>
            
            <div className="space-y-12">
               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-mobile-alt text-2xl gold-accent"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Customer App</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">Schedule pickups, track your laundry's journey in real-time, and make secure payments from your smartphone.</p>
                  </div>
               </div>

               <div className="flex gap-6">
                  <div className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <i className="fas fa-route text-2xl text-blue-400"></i>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Driver Logistics</h4>
                    <p className="text-slate-400 font-light text-sm leading-relaxed">Our specialized driver app ensures optimized routing through Madinah's unique traffic, guaranteeing 2-hour express turnarounds.</p>
                  </div>
               </div>

               <div className="flex gap-4 pt-6">
                  <button className="flex items-center gap-3 bg-white text-slate-900 px-6 py-3 rounded-xl font-bold text-xs">
                     <i className="fab fa-apple text-xl"></i> App Store
                  </button>
                  <button className="flex items-center gap-3 bg-white/10 text-white px-6 py-3 rounded-xl font-bold text-xs border border-white/20">
                     <i className="fab fa-google-play text-xl"></i> Google Play
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
