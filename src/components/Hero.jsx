import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Premium Steak Experience",
      subtitle: "Aged to perfection, grilled with passion",
      description: "Indulge in our hand-selected, dry-aged steaks cooked to your exact preference",
      bgClass: "bg-gradient-to-br from-primary-dark to-primary-red",
      cta: "Explore Menu"
    },
    {
      title: "Authentic Global Flavors",
      subtitle: "From Seoul to New York",
      description: "Experience a world of flavors with our diverse international cuisine selection",
      bgClass: "bg-gradient-to-br from-primary-gold to-primary-dark",
      cta: "Discover More"
    },
    {
      title: "Craft & Quality",
      subtitle: "Every dish tells a story",
      description: "Using only the finest ingredients and traditional cooking techniques",
      bgClass: "bg-gradient-to-br from-primary-red to-primary-gold",
      cta: "Our Story"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className={`absolute inset-0 ${slides[currentSlide].bgClass}`}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8 }}
              className="text-white"
            >
              <motion.h1 
                className="text-5xl md:text-7xl font-serif font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl text-primary-gold mb-4 font-light"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {slides[currentSlide].subtitle}
              </motion.p>
              
              <motion.p 
                className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                {slides[currentSlide].description}
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 }}
              >
                <Link
                  to="/menu"
                  className="inline-block bg-primary-gold text-primary-dark px-8 py-4 rounded-lg font-semibold text-lg hover:bg-yellow-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {slides[currentSlide].cta}
                </Link>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-primary-gold scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;