import React from 'react';
import { motion } from 'framer-motion';

const FilterSection = ({ categories, activeCategory, onCategoryChange }) => (
  <div className="flex flex-wrap justify-center gap-3 mb-10">
    {categories.map((cat, i) => (
      <motion.button
        key={cat.id}
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.05 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        onClick={() => onCategoryChange(cat.id)}
        className={`relative px-5 py-2.5 rounded-full font-body font-semibold text-sm uppercase tracking-wider transition-all duration-300 ${
          activeCategory === cat.id
            ? 'bg-brand-red text-white shadow-lg shadow-brand-red/30'
            : 'bg-brand-card border border-brand-border text-brand-muted hover:text-white hover:border-brand-red'
        }`}
      >
        {cat.name}
        <span className={`ml-2 text-[10px] font-bold ${activeCategory === cat.id ? 'text-white/70' : 'text-brand-muted'}`}>
          {cat.count}
        </span>
      </motion.button>
    ))}
  </div>
);

export default FilterSection;