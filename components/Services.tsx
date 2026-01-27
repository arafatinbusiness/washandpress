
import React from 'react';

const serviceData = [
  {
    title: 'Purified Ihram Wash',
    desc: 'Strict adherence to Taharah protocols. Fragrance-free and deep-cleaned for pilgrimage sanctity.',
    img: 'https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Precision Dry Cleaning',
    desc: 'Eco-friendly solvents for high-end fabrics, ensuring longevity and a professional finish.',
    img: 'https://images.unsplash.com/photo-1521334885634-95b22749eef3?q=80&w=2070&auto=format&fit=crop'
  },
  {
    title: 'Luxury Thobe Press',
    desc: 'Manual hand-pressing for crisp lines and a prestigious appearance.',
    img: 'https://images.unsplash.com/photo-1489274495757-95c7c837b101?q=80&w=2030&auto=format&fit=crop'
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 lg:px-12 bg-[#F8F9FA]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="gold-accent font-bold uppercase tracking-[0.3em] text-xs mb-4">Our Expertise</h2>
          <h3 className="serif text-4xl md:text-5xl text-slate-900">Mastery in Every Thread</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {serviceData.map((s, i) => (
            <div key={i} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500">
              <div className="h-64 overflow-hidden relative">
                <img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <h4 className="text-white text-xl font-bold">{s.title}</h4>
                </div>
              </div>
              <div className="p-8">
                <p className="text-slate-500 text-sm leading-relaxed mb-6 font-medium">{s.desc}</p>
                <button className="text-gold-accent font-bold text-xs uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                  Learn More <i className="fas fa-arrow-right"></i>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
