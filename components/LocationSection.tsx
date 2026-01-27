
import React from 'react';

const LocationSection: React.FC = () => {
  return (
    <section id="location" className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-16 items-center">
          <div className="lg:col-span-2">
            <h2 className="gold-accent font-bold uppercase tracking-[0.3em] text-[10px] mb-4">Visit Our Facility</h2>
            <h3 className="serif text-4xl text-slate-900 mb-8 leading-tight">Madinah’s Heart <br/>of Cleanliness</h3>
            
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-gold">
                <p className="text-xs uppercase tracking-widest font-bold text-slate-400 mb-2">Address</p>
                <p className="text-slate-700 font-bold leading-relaxed">
                  King Faisal Rd, Saja,<br />
                  Madinah 42311, Saudi Arabia
                </p>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center font-bold">
                  <i className="fas fa-clock"></i>
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-800">24/7 Always Open</p>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Serving you anytime</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center font-bold">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <div>
                   <p className="text-sm font-bold text-slate-800">+966 56 421 3962</p>
                   <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">raadlaundry.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-3 h-[500px] rounded-[2.5rem] overflow-hidden shadow-2xl relative border-8 border-slate-50">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.123456789!2d39.5692!3d24.5247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbe6c8c8c8c8d%3A0x1234567890abcdef!2sSaja%20by%20Warwick%2C%20Madinah!5e0!3m2!1sen!2ssa!4v1700000000000!5m2!1sen!2ssa" 
              className="w-full h-full grayscale-[20%]"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
            <div className="absolute top-6 right-6 p-4 bg-white/90 backdrop-blur-md rounded-2xl shadow-lg border border-white/50">
               <div className="flex items-center gap-3">
                  <i className="fas fa-map-marker-alt gold-accent"></i>
                  <p className="text-xs font-bold text-slate-900">Located in Saja by Warwick</p>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
