import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import FilterSection from '../components/FilterSection';
import { products, categories } from '../data/products';

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm]         = useState('');

  const filtered = useMemo(() => {
    let list = products;
    if (activeCategory !== 'all') list = list.filter(p => p.category === activeCategory);
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      list = list.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q));
    }
    return list;
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-brand-black pt-20">

      {/* Hero */}
      <div className="bg-brand-charcoal border-b border-brand-border py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-brand-red" /> Full Menu
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wide leading-none">
              WHAT WE<br /><span className="text-brand-red">SERVE</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">

        {/* Search */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="max-w-xl mb-8">
          <div className="relative">
            <input
              type="text"
              placeholder="Search dishes..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="w-full bg-brand-card border-2 border-brand-border text-white placeholder-brand-muted px-5 py-4 rounded-xl font-body focus:border-brand-red focus:outline-none transition-colors pr-12"
            />
            <svg className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </motion.div>

        {/* Filters */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
          <FilterSection categories={categories} activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
        </motion.div>

        {/* Count */}
        <p className="font-body text-brand-muted text-sm mb-8">
          Showing <span className="text-white font-semibold">{filtered.length}</span> of {products.length} dishes
        </p>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.04, duration: 0.4 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24">
            <p className="font-display text-4xl text-brand-muted uppercase tracking-wide mb-3">No Results</p>
            <p className="font-body text-brand-muted text-sm">Try a different search term or category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Menu;