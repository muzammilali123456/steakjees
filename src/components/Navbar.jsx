import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

const Navbar = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [isOpen, setIsOpen]       = useState(false);
  const location                  = useLocation();
  const { totalItems }            = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  const links = [
    { path: '/',        label: 'Home'    },
    { path: '/menu',    label: 'Menu'    },
    { path: '/about',   label: 'About'   },
    { path: '/contact', label: 'Contact' },
  ];

  const active = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'bg-brand-black/98 backdrop-blur-xl border-b border-brand-border shadow-2xl'
            : 'bg-transparent'
        }`}
      >
        {/* Red top line */}
        <div className="h-[3px] bg-brand-red w-full" />

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">

            {/* Logo — text only, premium styled */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="flex items-center">
                <span className="font-display text-3xl tracking-widest text-white leading-none">STEAK</span>
                <span className="font-display text-3xl tracking-widest text-brand-red leading-none">JEES</span>
              </div>
              <div className="hidden sm:block w-px h-6 bg-brand-border" />
              <span className="hidden sm:block font-body text-[10px] tracking-widest2 text-brand-muted uppercase leading-tight">
                Premium<br/>Restaurant
              </span>
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-1">
              {links.map(l => (
                <Link
                  key={l.path}
                  to={l.path}
                  className={`relative px-4 py-2 font-body font-semibold text-sm tracking-wider uppercase transition-colors duration-200 ${
                    active(l.path) ? 'text-white' : 'text-brand-muted hover:text-white'
                  }`}
                >
                  {active(l.path) && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-brand-red rounded-md"
                      style={{ zIndex: -1 }}
                      transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                    />
                  )}
                  {l.label}
                </Link>
              ))}
            </div>

            {/* Cart + hamburger */}
            <div className="flex items-center gap-3">
              <Link to="/cart">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative flex items-center gap-2 border border-brand-red text-brand-red hover:bg-brand-red hover:text-white transition-all duration-300 px-4 py-2 rounded-lg font-body font-semibold text-sm uppercase tracking-wider"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  <span className="hidden sm:inline">Cart</span>
                  <AnimatePresence>
                    {totalItems > 0 && (
                      <motion.span
                        key="badge"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="absolute -top-2 -right-2 bg-white text-brand-red text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center"
                      >
                        {totalItems}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.div>
              </Link>

              <button
                onClick={() => setIsOpen(o => !o)}
                className="md:hidden text-white p-2"
              >
                <motion.div animate={isOpen ? 'open' : 'closed'}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isOpen
                      ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      : <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    }
                  </svg>
                </motion.div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-brand-charcoal border-t border-brand-border overflow-hidden"
            >
              <div className="px-6 py-4 space-y-1">
                {links.map(l => (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={`block px-4 py-3 rounded-lg font-body font-semibold text-sm uppercase tracking-wider transition-all ${
                      active(l.path)
                        ? 'bg-brand-red text-white'
                        : 'text-brand-muted hover:text-white hover:bg-brand-border'
                    }`}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
};

export default Navbar;