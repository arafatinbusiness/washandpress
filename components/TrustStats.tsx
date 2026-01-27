
import React from 'react';

const stats = [
  { label: 'Customer Rating', value: '4.8/5.0', icon: 'fa-star text-yellow-500' },
  { label: 'Verified Reviews', value: '491+', icon: 'fa-comments text-blue-500' },
  { label: 'Orders Completed', value: '50,000+', icon: 'fa-check-circle text-green-500' },
  { label: 'Haram Proximity', value: '2-Min Walk', icon: 'fa-walking text-gold-accent' },
];

const TrustStats: React.FC = () => {
  return (
    <section className="bg-white py-16 border-b border-slate-100 relative z-20 -mt-10 mx-6 lg:mx-12 rounded-3xl shadow-xl">
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="flex items-center gap-3 mb-2">
                <i className={`fas ${stat.icon} text-lg`}></i>
                <span className="text-2xl md:text-3xl font-extrabold text-slate-900">{stat.value}</span>
              </div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStats;
