import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const FEATURES = [
  { icon: '🔥', title: 'Flame-Grilled',    desc: 'Every cut grilled to perfection over an open flame for that unmistakable smoky flavor.' },
  { icon: '🌍', title: 'Global Flavors',   desc: 'From desi biryanis to Korean BBQ — five world cuisines under one roof.' },
  { icon: '⭐', title: 'Premium Quality',  desc: 'Hand-selected ingredients sourced from trusted local and international suppliers.' },
  { icon: '🚴', title: 'Fast Delivery',    desc: 'Hot and fresh at your door in 30–45 minutes, every time.' },
];

const MARQUEE = ['Premium Steaks', '·', 'Desi Cuisine', '·', 'Korean BBQ', '·', 'Chinese Wok', '·', 'American Grill', '·', 'Fast Food', '·'];

const Home = () => {
  const featured = products.filter(p => p.featured).slice(0, 6);

  return (
    <div className="min-h-screen bg-brand-black">
      <Hero />

      {/* ── Marquee strip ── */}
      <div className="bg-brand-red py-3 overflow-hidden border-y border-brand-redDark">
        <div className="marquee-track select-none">
          {[...MARQUEE, ...MARQUEE].map((item, i) => (
            <span key={i} className="font-display text-white text-lg tracking-widest uppercase mx-6 whitespace-nowrap">
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── Featured dishes ── */}
      <section className="py-24 bg-brand-black">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14"
          >
            <div>
              <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-brand-red" /> Our Specialties
              </p>
              <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wide leading-none">
                FEATURED<br /><span className="text-brand-red">DISHES</span>
              </h2>
            </div>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-widest text-brand-muted border border-brand-border px-6 py-3 rounded-lg hover:text-white hover:border-white transition-all whitespace-nowrap"
            >
              Full Menu
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featured.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className="py-24 bg-brand-charcoal border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16"
          >
            <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-3">Why Choose Us</p>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wide">
              THE <span className="text-brand-red">DIFFERENCE</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                whileHover={{ y: -6 }}
                className="bg-brand-card border border-brand-border rounded-2xl p-7 group hover:border-brand-red transition-colors duration-300"
              >
                <div className="text-4xl mb-5">{f.icon}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-3 group-hover:text-brand-red transition-colors">{f.title}</h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Brand Story ── */}
      <section className="py-24 bg-brand-black overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
                <span className="inline-block w-8 h-px bg-brand-red" /> Since 2009
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wide leading-none mb-6">
                OUR<br /><span className="text-brand-red">STORY</span>
              </h2>
              <p className="font-body text-brand-muted text-base leading-relaxed mb-4">
                SteakJees was born from a single obsession: to serve food that genuinely moves people. Starting from a small kitchen in Karachi, we've grown into a multi-cuisine destination loved by thousands.
              </p>
              <p className="font-body text-brand-muted text-base leading-relaxed mb-8">
                Our chefs blend traditional recipes with modern techniques — every plate is a statement of craftsmanship.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-body font-bold text-sm uppercase tracking-widest bg-brand-red text-white px-6 py-3 rounded-lg hover:bg-brand-redDark transition-colors"
              >
                Learn More
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>

            {/* Visual grid */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { label: '50k+', sub: 'Orders Served',    bg: 'bg-brand-red' },
                { label: '4.9★', sub: 'Average Rating',   bg: 'bg-brand-card border border-brand-border' },
                { label: '15+',  sub: 'Years of Mastery', bg: 'bg-brand-card border border-brand-border' },
                { label: '5',    sub: 'World Cuisines',   bg: 'bg-brand-red' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.03 }}
                  className={`${item.bg} rounded-2xl p-8 flex flex-col justify-end`}
                  style={{ minHeight: '160px' }}
                >
                  <p className="font-display text-5xl text-white tracking-wider leading-none">{item.label}</p>
                  <p className="font-body text-white/60 text-xs uppercase tracking-widest mt-2">{item.sub}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-20 bg-brand-red overflow-hidden relative">
        <div className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-3xl mx-auto text-center px-6"
        >
          <h2 className="font-display text-5xl md:text-7xl text-white uppercase tracking-wide mb-6">
            ORDER NOW
          </h2>
          <p className="font-body text-white/80 text-lg mb-8">
            Fresh, hot, and delivered to your door in 30–45 minutes across Karachi, Lahore & Islamabad.
          </p>
          <Link to="/menu">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: '#0A0A0A' }}
              whileTap={{ scale: 0.97 }}
              className="bg-white text-brand-red font-body font-black px-10 py-4 rounded-xl uppercase tracking-widest text-sm transition-all duration-300"
            >
              View Full Menu →
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;