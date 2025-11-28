import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

const Home = () => {
  const featuredProducts = products.filter(product => product.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Products Section */}
      <section className="py-20 bg-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Featured Delicacies
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Discover our most beloved dishes, crafted with exceptional ingredients and culinary expertise
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={itemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center"
          >
            <Link
              to="/menu"
              className="inline-block border-2 border-primary-gold text-primary-gold px-8 py-4 rounded-lg font-semibold text-lg hover:bg-primary-gold hover:text-primary-dark transition-all duration-300 transform hover:scale-105"
            >
              View Full Menu
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Brand Story Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Our Culinary Journey
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                Founded with a passion for exceptional flavors, SteakJees brings together 
                the finest ingredients from around the world with traditional cooking techniques 
                passed down through generations.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                Our master chefs combine innovation with tradition, creating dishes that 
                tell a story of cultural heritage and modern culinary excellence.
              </p>
              <Link
                to="/about"
                className="inline-block bg-primary-gold text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105"
              >
                Learn Our Story
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-primary-gold to-primary-red p-1 rounded-2xl">
                <div className="bg-primary-dark rounded-2xl p-8 h-96 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary-gold rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-10 h-10 text-primary-dark" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z"/>
                      </svg>
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-white mb-2">
                      Premium Quality
                    </h3>
                    <p className="text-gray-300">
                      Hand-selected ingredients, expert preparation
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;