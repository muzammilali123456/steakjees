import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  // Generate placeholder image based on category
  const getPlaceholderImage = (category) => {
    const colors = {
      'fast-food': 'from-yellow-500 to-red-500',
      'desi': 'from-orange-500 to-red-600',
      'chinese': 'from-red-500 to-yellow-500',
      'korean': 'from-red-500 to-blue-500',
      'american': 'from-blue-500 to-red-500'
    };
    
    return (
      <div className={`w-full h-64 bg-gradient-to-br ${colors[category] || 'from-gray-600 to-gray-800'} flex items-center justify-center text-white text-4xl`}>
        {product.name.split(' ').map(word => word[0]).join('')}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="bg-primary-light rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 group"
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        {getPlaceholderImage(product.category)}
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary-gold text-primary-dark px-3 py-1 rounded-full text-sm font-semibold capitalize">
            {product.category.replace('-', ' ')}
          </span>
        </div>

        {/* Featured Badge */}
        {product.featured && (
          <div className="absolute top-4 right-4">
            <span className="bg-primary-red text-white px-3 py-1 rounded-full text-sm font-semibold">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-serif font-semibold text-white group-hover:text-primary-gold transition-colors">
            {product.name}
          </h3>
          <span className="text-2xl font-bold text-primary-gold">
            ${product.price}
          </span>
        </div>

        <p className="text-gray-300 mb-4 line-clamp-2">
          {product.description}
        </p>

        <div className="flex justify-between items-center">
          <button
            className="text-primary-gold hover:text-yellow-400 font-semibold transition-colors flex items-center group"
          >
            View Details
            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-red text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Add to Cart
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;