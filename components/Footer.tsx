
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-20 border-t border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-islamic opacity-5 -mr-32 -mt-32"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16">
          <div className="max-w-xs">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 gold-gradient rounded-full flex items-center justify-center text-white">
                <span className="serif text-xl font-black">W</span>
              </div>
              <h2 className="text-xl font-bold tracking-tight serif">Wash And Press Laundries</h2>
            </div>
            <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">
              Located in Al Oroba St, Ar Rahmaniyyah, Riyadh, we provide professional wash and press laundry services with quality care.
            </p>
            <div className="flex gap-4">
              {['instagram', 'twitter', 'facebook', 'linkedin'].map(s => (
                <a key={s} href="#" className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:gold-gradient hover:text-white transition-all shadow-sm">
                  <i className={`fab fa-${s}`}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 lg:gap-24">
             <div>
                <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">Service</h6>
                <ul className="space-y-4 text-sm text-slate-500 font-light">
                   <li><a href="#" className="hover:gold-text">Ihram Care</a></li>
                   <li><a href="#" className="hover:gold-text">Dry Cleaning</a></li>
                   <li><a href="#" className="hover:gold-text">Steam Press</a></li>
                   <li><a href="#" className="hover:gold-text">24/7 Pickups</a></li>
                </ul>
             </div>
             <div>
                <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">Company</h6>
                <ul className="space-y-4 text-sm text-slate-500 font-light">
                   <li><a href="#" className="hover:gold-text">Our Story</a></li>
                   <li><a href="#" className="hover:gold-text">Contact</a></li>
                   <li><a href="#" className="hover:gold-text">Haram Area</a></li>
                   <li><a href="#" className="hover:gold-text">Reviews</a></li>
                </ul>
             </div>
             <div className="col-span-2 md:col-span-1">
                <h6 className="text-xs font-bold uppercase tracking-[0.2em] text-slate-900 mb-8">Languages</h6>
                <div className="flex gap-2">
                   <button className="px-3 py-1 bg-slate-50 rounded text-[10px] font-bold border border-slate-100">EN</button>
                   <button className="px-3 py-1 bg-slate-50 rounded text-[10px] font-bold border border-slate-100">AR</button>
                   <button className="px-3 py-1 bg-slate-50 rounded text-[10px] font-bold border border-slate-100">UR</button>
                </div>
             </div>
          </div>
        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
           <p>© {new Date().getFullYear()} Wash And Press Laundries. Quality in Every Wash.</p>
           <div className="flex gap-8">
              <a href="#" className="hover:text-slate-900 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-slate-900 transition-colors">Terms of Purity</a>
           </div>
        </div>
      </div>
      
      {/* Floating Action for Makkah visitors */}
      <div className="fixed bottom-8 right-8 z-[100] flex flex-col gap-3">
         <a href="https://wa.me/966564213962" className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform">
            <i className="fab fa-whatsapp text-3xl"></i>
         </a>
      </div>
    </footer>
  );
};

export default Footer;
