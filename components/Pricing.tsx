
import React, { useState } from 'react';

const categories = [
  { 
    name: 'Pilgrimage Special',
    items: [
      { name: 'Ihram Set (2 Pieces)', wash: '15', dry: '25' },
      { name: 'Cotton Thobe', wash: '10', dry: '18' },
      { name: 'Abaya (Standard)', wash: '12', dry: '22' }
    ]
  },
  {
    name: 'Apparel',
    items: [
      { name: 'Formal Shirt', wash: '7', dry: '15' },
      { name: 'Suit (2-Piece)', wash: '-', dry: '45' },
      { name: 'Casual Trousers', wash: '8', dry: '15' }
    ]
  }
];

const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-24 bg-white px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gold-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Pricing Guide</h2>
          <h3 className="serif text-4xl text-slate-900 mb-4">Transparent Rate List</h3>
          <p className="text-slate-500 font-medium">All prices are in SAR. No hidden fees.</p>
        </div>

        <div className="space-y-12">
          {categories.map((cat, i) => (
            <div key={i} className="bg-slate-50 rounded-3xl p-8 md:p-12 shadow-inner">
              <h4 className="text-xl font-bold mb-8 text-slate-800 border-b border-slate-200 pb-4 flex items-center gap-3">
                <span className="w-1.5 h-8 bg-gold-accent rounded-full"></span> {cat.name}
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs uppercase tracking-widest text-slate-400 border-b border-slate-200">
                      <th className="pb-4 font-bold">Item Name</th>
                      <th className="pb-4 font-bold text-center">Wash & Press</th>
                      <th className="pb-4 font-bold text-center">Dry Clean</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {cat.items.map((item, ii) => (
                      <tr key={ii} className="group hover:bg-white transition-colors">
                        <td className="py-5 font-bold text-slate-700">{item.name}</td>
                        <td className="py-5 text-center font-bold text-slate-900">SAR {item.wash}</td>
                        <td className="py-5 text-center font-bold text-gold-accent">SAR {item.dry}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center p-6 border-2 border-dashed border-slate-200 rounded-3xl">
           <p className="text-sm text-slate-400">Need bulk hotel cleaning? <a href="#" className="gold-accent font-bold underline">Contact for Corporate Rates</a></p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
