import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart, formatPKR } from '../context/CartContext';

const CATEGORY_CONFIG = {
  'fast-food': { gradient: 'from-orange-600 to-red-700',   emoji: '🍔', accent: '#f97316' },
  'desi':      { gradient: 'from-amber-600 to-orange-700', emoji: '🍛', accent: '#d97706' },
  'chinese':   { gradient: 'from-rose-600 to-pink-700',    emoji: '🥡', accent: '#e11d48' },
  'korean':    { gradient: 'from-violet-600 to-red-600',   emoji: '🥩', accent: '#7c3aed' },
  'american':  { gradient: 'from-blue-700 to-red-700',     emoji: '🥩', accent: '#2563eb' },
};

const ProductCard = ({ product }) => {
  const { addItem } = useCart();
  const [added, setAdded] = useState(false);
  const cfg = CATEGORY_CONFIG[product.category] || { gradient: 'from-gray-600 to-gray-800', emoji: '🍽️', accent: '#6b7280' };

  const handleAdd = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group bg-brand-card border border-brand-border rounded-2xl overflow-hidden card-hover"
    >
      {/* Image / placeholder */}
      <div className="relative overflow-hidden h-52">
        <div className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-90`} />
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-6xl mb-2 drop-shadow-lg">{cfg.emoji}</span>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex gap-2">
          <span className="bg-black/60 backdrop-blur-sm text-white text-[10px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
            {product.category.replace('-', ' ')}
          </span>
        </div>
        {product.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-brand-red text-white text-[10px] font-body font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
              ★ Featured
            </span>
          </div>
        )}

        {/* Bottom overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-brand-card to-transparent" />
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="flex justify-between items-start gap-2 mb-2">
          <h3 className="font-heading font-semibold text-white text-lg leading-tight group-hover:text-brand-red transition-colors duration-300">
            {product.name}
          </h3>
        </div>
        <p className="font-body text-brand-muted text-sm line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="font-display text-2xl text-white tracking-wider leading-none">
              {formatPKR(product.price)}
            </p>
            <p className="font-body text-brand-muted text-[10px] uppercase tracking-wider mt-0.5">per serving</p>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleAdd}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-body font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
              added ? 'bg-green-600 text-white' : 'bg-brand-red text-white hover:bg-brand-redDark'
            }`}
          >
            <AnimatePresence mode="wait">
              {added ? (
                <motion.span key="done" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                  Added
                </motion.span>
              ) : (
                <motion.span key="add" initial={{ opacity: 0, y: -6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                  </svg>
                  Add
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;