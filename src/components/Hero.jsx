import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Link } from 'react-router-dom';

const MARQUEE_ITEMS = ['Premium Steaks', 'Desi Cuisine', 'Korean BBQ', 'Chinese Wok', 'American Grill', 'Fast Food'];

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const smoothY = useSpring(scrollYProgress, { stiffness: 80, damping: 20 });

  const bgY      = useTransform(smoothY, [0, 1], ['0%', '30%']);
  const textY    = useTransform(smoothY, [0, 1], ['0%', '20%']);
  const opacity  = useTransform(smoothY, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-black">

      {/* Background layers */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0">
        {/* Gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-brand-black via-brand-charcoal to-brand-black" />
        {/* Red radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-brand-red/8 blur-[120px]" />
        <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-brand-red/5 blur-[80px]" />
        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </motion.div>

      {/* Main content */}
      <motion.div style={{ y: textY, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-28 pb-16">
        <div className="max-w-4xl">

          {/* Tag line */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-12 bg-brand-red" />
            <span className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest">
              Est. 2009 · Karachi, Pakistan
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-[clamp(72px,12vw,160px)] leading-[0.9] tracking-wide text-white uppercase mb-6"
          >
            TASTE<br />
            <span className="text-brand-red">THE</span><br />
            BEST
          </motion.h1>

          {/* Sub headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="font-body text-lg md:text-xl text-brand-muted max-w-xl leading-relaxed mb-10"
          >
            From flame-grilled steaks to aromatic desi platters — every dish is crafted with premium ingredients and decades of culinary passion.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Link to="/menu">
              <motion.button
                whileHover={{ scale: 1.03, boxShadow: '0 0 40px rgba(227,0,15,0.4)' }}
                whileTap={{ scale: 0.97 }}
                className="bg-brand-red text-white font-body font-bold px-8 py-4 uppercase tracking-widest text-sm rounded-lg transition-all duration-300"
              >
                Explore Menu
              </motion.button>
            </Link>
            <Link to="/about">
              <motion.button
                whileHover={{ scale: 1.03, borderColor: '#fff' }}
                whileTap={{ scale: 0.97 }}
                className="border border-brand-border text-white font-body font-bold px-8 py-4 uppercase tracking-widest text-sm rounded-lg transition-all duration-300 hover:border-white"
              >
                Our Story
              </motion.button>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-wrap gap-10"
          >
            {[['20+', 'Menu Items'], ['15+', 'Years Experience'], ['50k+', 'Orders Served'], ['4.9★', 'Customer Rating']].map(([num, label]) => (
              <div key={label}>
                <p className="font-display text-4xl text-white tracking-wider">{num}</p>
                <p className="font-body text-xs text-brand-muted uppercase tracking-widest mt-1">{label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </motion.div>

      {/* Floating side text */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-3 z-10">
        <div className="h-24 w-px bg-brand-border" />
        <span className="font-body text-xs text-brand-muted tracking-widest uppercase rotate-90 whitespace-nowrap">Scroll Down</span>
        <div className="h-24 w-px bg-brand-border" />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-6 h-10 border-2 border-brand-border rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-brand-red rounded-full" />
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-black to-transparent z-10" />
    </section>
  );
};

export default Hero;