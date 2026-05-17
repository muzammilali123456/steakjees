import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, formatPKR } from '../context/CartContext';

const CAT_GRAD = {
  'fast-food': 'from-orange-600 to-red-700',
  'desi':      'from-amber-600 to-orange-700',
  'chinese':   'from-rose-600 to-pink-700',
  'korean':    'from-violet-600 to-red-600',
  'american':  'from-blue-700 to-red-700',
};

const Cart = () => {
  const { items, removeItem, updateQty, subtotal, clearCart } = useCart();
  const navigate = useNavigate();
  const delivery = subtotal > 0 ? 5 : 0;
  const total    = subtotal + delivery;

  if (items.length === 0) return (
    <div className="min-h-screen bg-brand-black pt-24 flex flex-col items-center justify-center text-center px-6">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
        <div className="w-28 h-28 border border-brand-border rounded-full flex items-center justify-center mx-auto mb-8">
          <svg className="w-12 h-12 text-brand-muted" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
          </svg>
        </div>
        <h2 className="font-display text-5xl text-white uppercase tracking-wide mb-3">Cart is Empty</h2>
        <p className="font-body text-brand-muted mb-8">Add some delicious items from our menu.</p>
        <Link to="/menu" className="inline-block bg-brand-red text-white font-body font-bold px-8 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors">
          Browse Menu →
        </Link>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen bg-brand-black pt-20 pb-16">

      {/* Header */}
      <div className="bg-brand-charcoal border-b border-brand-border py-10">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 flex justify-between items-end">
          <div>
            <p className="font-body text-brand-red text-xs font-semibold uppercase tracking-widest mb-2">{items.reduce((s,i)=>s+i.quantity,0)} Items</p>
            <h1 className="font-display text-5xl text-white uppercase tracking-wide">YOUR CART</h1>
          </div>
          <button onClick={clearCart} className="font-body text-brand-muted text-sm hover:text-brand-red transition-colors uppercase tracking-wider border border-brand-border hover:border-brand-red px-4 py-2 rounded-lg">
            Clear All
          </button>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Items */}
          <div className="lg:col-span-2 space-y-3">
            <AnimatePresence>
              {items.map((item, idx) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: idx * 0.04 } }}
                  exit={{ opacity: 0, x: -40, height: 0 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-4 flex gap-4 items-center hover:border-brand-red/40 transition-colors"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${CAT_GRAD[item.category]||'from-gray-600 to-gray-800'} flex items-center justify-center font-display text-white text-sm tracking-wider shrink-0`}>
                    {item.name.split(' ').map(w=>w[0]).join('').slice(0,2)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-heading font-semibold text-white truncate">{item.name}</h3>
                    <p className="font-body text-brand-muted text-xs capitalize">{item.category.replace('-',' ')}</p>
                    <p className="font-display text-brand-red text-lg tracking-wider mt-0.5">{formatPKR(item.price * item.quantity)}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button onClick={() => updateQty(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg bg-brand-black border border-brand-border text-white hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center font-bold">−</button>
                    <span className="w-6 text-center font-body font-bold text-white">{item.quantity}</span>
                    <button onClick={() => updateQty(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg bg-brand-black border border-brand-border text-white hover:border-brand-red hover:text-brand-red transition-all flex items-center justify-center font-bold">+</button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="text-brand-muted hover:text-brand-red transition-colors shrink-0 ml-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                  </button>
                </motion.div>
              ))}
            </AnimatePresence>
            <Link to="/menu" className="inline-flex items-center gap-2 font-body text-brand-muted hover:text-white text-sm transition-colors mt-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
              Continue Shopping
            </Link>
          </div>

          {/* Summary */}
          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
            className="bg-brand-card border border-brand-border rounded-2xl p-6 h-fit sticky top-24"
          >
            <h2 className="font-heading font-bold text-white text-xl mb-6">Order Summary</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between font-body text-sm text-brand-muted">
                <span>Subtotal</span><span className="text-white">{formatPKR(subtotal)}</span>
              </div>
              <div className="flex justify-between font-body text-sm text-brand-muted">
                <span>Delivery</span><span className="text-white">{formatPKR(delivery)}</span>
              </div>
              <div className="border-t border-brand-border pt-3 flex justify-between">
                <span className="font-body font-bold text-white">Total</span>
                <span className="font-display text-2xl text-brand-red tracking-wider">{formatPKR(total)}</span>
              </div>
            </div>
            <div className="flex items-center gap-3 bg-brand-black border border-brand-border rounded-xl p-3 mb-5">
              <span className="text-xl">🛵</span>
              <div>
                <p className="font-body font-semibold text-white text-sm">30 – 45 minutes</p>
                <p className="font-body text-brand-muted text-xs">Estimated delivery</p>
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/checkout')}
              className="w-full bg-brand-red text-white font-body font-black py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors"
            >
              Checkout →
            </motion.button>
            <p className="text-center font-body text-brand-muted text-xs mt-3 flex items-center justify-center gap-1">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
              Secure Checkout
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Cart;