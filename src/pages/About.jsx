import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const features = [
    {
      icon: '🥩',
      title: 'Premium Ingredients',
      description: 'We source only the finest, hand-selected ingredients from trusted suppliers worldwide.'
    },
    {
      icon: '👨‍🍳',
      title: 'Expert Chefs',
      description: 'Our culinary team brings decades of experience and passion to every dish they create.'
    },
    {
      icon: '🔥',
      title: 'Traditional Techniques',
      description: 'We combine time-honored cooking methods with modern innovation for exceptional flavors.'
    },
    {
      icon: '🌟',
      title: 'Quality Assurance',
      description: 'Every dish undergoes rigorous quality checks to ensure it meets our high standards.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Dishes' },
    { number: '15+', label: 'Years Experience' },
    { number: '10k+', label: 'Happy Customers' },
    { number: '100%', label: 'Quality Guarantee' }
  ];

  return (
    <div className="min-h-screen bg-primary-dark pt-20">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
              About SteakJees
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Where culinary excellence meets timeless tradition. For over 15 years, 
              we've been serving unforgettable dining experiences that celebrate global flavors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                At SteakJees, we believe that great food brings people together. 
                Our mission is to create memorable dining experiences through exceptional 
                cuisine, warm hospitality, and unwavering commitment to quality.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                We're passionate about exploring global culinary traditions while 
                maintaining the highest standards of ingredient sourcing and preparation.
              </p>
              <div className="bg-primary-gold text-primary-dark p-6 rounded-lg">
                <p className="text-lg font-semibold italic">
                  "Food is not just eating energy. It's an experience that should bring joy, 
                  create memories, and celebrate life's special moments."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary-dark p-6 rounded-xl text-center"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-gold mb-2">
                  {stat.number}
                </div>
                <div className="text-lg text-gray-300 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Kitchen Standards */}
      <section className="py-20 bg-primary-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
              Kitchen Standards
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our commitment to excellence extends to every aspect of our kitchen operations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Hygiene & Safety',
                description: 'Rigorous cleaning protocols and food safety standards maintained daily'
              },
              {
                title: 'Sustainable Sourcing',
                description: 'Partnering with local farmers and sustainable suppliers whenever possible'
              },
              {
                title: 'Continuous Training',
                description: 'Ongoing staff training to maintain highest culinary standards'
              }
            ].map((standard, index) => (
              <motion.div
                key={standard.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-primary-dark p-8 rounded-xl text-center"
              >
                <h3 className="text-2xl font-semibold text-primary-gold mb-4">
                  {standard.title}
                </h3>
                <p className="text-gray-300">
                  {standard.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;