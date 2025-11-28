import React from 'react';
import { motion } from 'framer-motion';

const FilterSection = ({ categories, activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-primary-light rounded-xl p-6 mb-8">
      <h3 className="text-2xl font-serif font-semibold text-white mb-6 text-center">
        Filter by Category
      </h3>
      
      <div className="flex flex-wrap justify-center gap-4">
        {categories.map((category) => (
          <motion.button
            key={category.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange(category.id)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-primary-gold text-primary-dark shadow-lg'
                : 'bg-primary-dark text-white hover:bg-primary-gold hover:text-primary-dark'
            }`}
          >
            {category.name} 
            <span className="ml-2 text-sm opacity-75">
              ({category.count})
            </span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;