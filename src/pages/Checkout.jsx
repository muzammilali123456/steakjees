import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { useCart, formatPKR } from '../context/CartContext';

const CITIES = ['Karachi','Lahore','Islamabad','Rawalpindi','Faisalabad','Multan','Peshawar','Quetta','Sialkot','Hyderabad'];
const STEPS   = ['Delivery', 'Payment', 'Confirm'];

const PAYMENT_METHODS = [
  { id: 'cod',       label: 'Cash on Delivery', sub: 'Pay when your order arrives',        icon: '💵', badge: 'Popular' },
  { id: 'jazzcash',  label: 'JazzCash',          sub: 'Pay via JazzCash mobile wallet',     icon: '📱', badge: null   },
  { id: 'easypaisa', label: 'Easypaisa',         sub: 'Pay via Easypaisa mobile wallet',    icon: '🟢', badge: null   },
  { id: 'card',      label: 'Credit / Debit Card',sub: 'Visa, Mastercard, UnionPay',        icon: '💳', badge: null   },
];

const Checkout = () => {
  const { items, subtotal, clearCart } = useCart();
  const navigate  = useNavigate();
  const [step, setStep]           = useState(0);
  const [placed, setPlaced]       = useState(false);
  const [loading, setLoading]     = useState(false);
  const [payment, setPayment]     = useState('cod');
  const [errors, setErrors]       = useState({});

  const delivery = subtotal > 0 ? 5 : 0;
  const total    = subtotal + delivery;

  const [form, setForm] = useState({
    firstName:'', lastName:'', email:'', phone:'',
    address:'', city:'Karachi', area:'',
    cardName:'', cardNumber:'', expiry:'', cvv:'',
    mobile:'', notes:'',
  });

  const set = (k, v) => { setForm(f => ({...f, [k]: v})); setErrors(e => ({...e, [k]: ''})); };

  const validateStep0 = () => {
    const e = {};
    if (!form.firstName.trim()) e.firstName = 'Required';
    if (!form.lastName.trim())  e.lastName  = 'Required';
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email';
    if (!form.phone.trim() || form.phone.replace(/\D/g,'').length < 10) e.phone = 'Enter a valid Pakistani number';
    if (!form.address.trim()) e.address = 'Required';
    if (!form.area.trim())    e.area    = 'Required';
    return e;
  };

  const validateStep1 = () => {
    const e = {};
    if (payment === 'card') {
      if (!form.cardName.trim()) e.cardName = 'Required';
      if (form.cardNumber.replace(/\s/g,'').length < 16) e.cardNumber = 'Enter a valid card number';
      if (!form.expiry.trim()) e.expiry = 'Required';
      if (form.cvv.length < 3) e.cvv = 'Enter a valid CVV';
    }
    if (payment === 'jazzcash' || payment === 'easypaisa') {
      if (form.mobile.replace(/\D/g,'').length < 10) e.mobile = 'Enter your registered mobile number';
    }
    return e;
  };

  const next = () => {
    const e = step === 0 ? validateStep0() : step === 1 ? validateStep1() : {};
    if (Object.keys(e).length) { setErrors(e); return; }
    setStep(s => s + 1);
  };

  const placeOrder = () => {
    setLoading(true);
    setTimeout(() => { clearCart(); setPlaced(true); setLoading(false); }, 2000);
  };

  const fmtCard   = v => v.replace(/\D/g,'').slice(0,16).replace(/(.{4})/g,'$1 ').trim();
  const fmtExpiry = v => { const c = v.replace(/\D/g,'').slice(0,4); return c.length >= 3 ? c.slice(0,2)+'/'+c.slice(2) : c; };
  const fmtPhone  = v => v.replace(/\D/g,'').slice(0,11);

  const inp = (k) => `w-full bg-brand-black border-2 ${errors[k] ? 'border-brand-red' : 'border-brand-border focus:border-brand-red'} text-white placeholder-brand-muted px-4 py-3 rounded-xl font-body text-sm focus:outline-none transition-colors`;

  if (items.length === 0 && !placed) return (
    <div className="min-h-screen bg-brand-black pt-24 flex flex-col items-center justify-center text-center px-6">
      <h2 className="font-display text-4xl text-white uppercase mb-4">Cart is Empty</h2>
      <Link to="/menu" className="bg-brand-red text-white font-body font-bold px-8 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors">Browse Menu</Link>
    </div>
  );

  if (placed) {
    const pm = PAYMENT_METHODS.find(m => m.id === payment);
    return (
      <div className="min-h-screen bg-brand-black pt-24 flex flex-col items-center justify-center text-center px-6">
        <motion.div initial={{ opacity:0, scale:0.8 }} animate={{ opacity:1, scale:1 }} transition={{ type:'spring', duration:0.6 }} className="max-w-md w-full">
          <motion.div initial={{ scale:0 }} animate={{ scale:1 }} transition={{ delay:0.2, type:'spring' }}
            className="w-20 h-20 rounded-full bg-green-600 flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/>
            </svg>
          </motion.div>
          <h2 className="font-display text-5xl text-white uppercase tracking-wide mb-2">Order Placed!</h2>
          <p className="font-body text-brand-muted mb-6">Thank you, <span className="text-white font-semibold">{form.firstName}</span>! Your order is confirmed.</p>
          <div className="bg-brand-card border border-brand-border rounded-2xl p-5 text-left space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="font-body text-brand-muted">Delivery To</span>
              <span className="font-body text-white font-semibold text-right max-w-xs">{form.address}, {form.area}, {form.city}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-body text-brand-muted">Payment</span>
              <span className="font-body text-white font-semibold">{pm?.label}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-body text-brand-muted">Total</span>
              <span className="font-display text-brand-red text-lg tracking-wider">{formatPKR(total)}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="font-body text-brand-muted">Estimated Time</span>
              <span className="font-body text-white font-semibold">30 – 45 minutes 🛵</span>
            </div>
          </div>
          {payment === 'cod' && (
            <div className="bg-yellow-900/30 border border-yellow-700/50 rounded-xl p-4 mb-6 text-sm text-yellow-300 font-body">
              💵 Please keep <strong>{formatPKR(total)}</strong> ready in cash for the delivery rider.
            </div>
          )}
          <p className="font-body text-brand-muted text-sm mb-8">Confirmation sent to <span className="text-white">{form.email}</span></p>
          <Link to="/" className="inline-block bg-brand-red text-white font-body font-black px-10 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors w-full text-center">
            Back to Home
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-black pt-20 pb-16">
      <div className="bg-brand-charcoal border-b border-brand-border py-10">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          <h1 className="font-display text-5xl text-white uppercase tracking-wide">CHECKOUT</h1>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 lg:px-8 py-10">
        {/* Stepper */}
        <div className="flex items-center justify-center mb-10">
          {STEPS.map((s, i) => (
            <React.Fragment key={s}>
              <div className="flex flex-col items-center">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-body font-bold text-sm transition-all ${
                  i < step ? 'bg-green-600 text-white' : i === step ? 'bg-brand-red text-white' : 'bg-brand-card border border-brand-border text-brand-muted'
                }`}>
                  {i < step ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7"/></svg> : i+1}
                </div>
                <span className={`font-body text-xs mt-1.5 uppercase tracking-wider font-semibold ${i === step ? 'text-brand-red' : i < step ? 'text-green-500' : 'text-brand-muted'}`}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`h-px w-16 mx-3 mb-5 transition-colors ${i < step ? 'bg-green-600' : 'bg-brand-border'}`} />}
            </React.Fragment>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">

              {/* Step 0 */}
              {step === 0 && (
                <motion.div key="s0" initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-30 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6"
                >
                  <h2 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">📍 Delivery Details</h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">First Name</label>
                      <input className={inp('firstName')} value={form.firstName} onChange={e=>set('firstName',e.target.value)} placeholder="Ali" />
                      {errors.firstName && <p className="text-brand-red text-xs mt-1">{errors.firstName}</p>}
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Last Name</label>
                      <input className={inp('lastName')} value={form.lastName} onChange={e=>set('lastName',e.target.value)} placeholder="Ahmed" />
                      {errors.lastName && <p className="text-brand-red text-xs mt-1">{errors.lastName}</p>}
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Email</label>
                      <input className={inp('email')} type="email" value={form.email} onChange={e=>set('email',e.target.value)} placeholder="ali@example.com" />
                      {errors.email && <p className="text-brand-red text-xs mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Phone Number</label>
                      <div className="flex gap-2">
                        <span className="bg-brand-black border border-brand-border rounded-xl px-3 flex items-center font-body text-sm text-brand-muted whitespace-nowrap">🇵🇰 +92</span>
                        <input className={`flex-1 ${inp('phone')}`} value={form.phone} onChange={e=>set('phone',fmtPhone(e.target.value))} placeholder="03001234567" maxLength={11} />
                      </div>
                      {errors.phone && <p className="text-brand-red text-xs mt-1">{errors.phone}</p>}
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">City</label>
                      <select className={inp('city')} value={form.city} onChange={e=>set('city',e.target.value)}>
                        {CITIES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Area / Locality</label>
                      <input className={inp('area')} value={form.area} onChange={e=>set('area',e.target.value)} placeholder="e.g. DHA Phase 5, Gulshan-e-Iqbal" />
                      {errors.area && <p className="text-brand-red text-xs mt-1">{errors.area}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Street Address</label>
                      <input className={inp('address')} value={form.address} onChange={e=>set('address',e.target.value)} placeholder="House/flat number, street, landmark" />
                      {errors.address && <p className="text-brand-red text-xs mt-1">{errors.address}</p>}
                    </div>
                    <div className="sm:col-span-2">
                      <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Special Instructions (optional)</label>
                      <textarea className={`${inp('notes')} resize-none`} rows={3} value={form.notes} onChange={e=>set('notes',e.target.value)} placeholder="Allergies, gate code, delivery notes..." />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Step 1 */}
              {step === 1 && (
                <motion.div key="s1" initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-30 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6"
                >
                  <h2 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">💳 Payment Method</h2>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {PAYMENT_METHODS.map(m => (
                      <button key={m.id} onClick={() => setPayment(m.id)}
                        className={`relative text-left p-4 rounded-xl border-2 transition-all ${
                          payment === m.id ? 'border-brand-red bg-brand-red/10' : 'border-brand-border hover:border-brand-muted'
                        }`}
                      >
                        {m.badge && <span className="absolute top-2 right-2 bg-brand-red text-white text-[10px] font-bold px-2 py-0.5 rounded-full">{m.badge}</span>}
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{m.icon}</span>
                          <div>
                            <p className="font-body font-bold text-white text-sm">{m.label}</p>
                            <p className="font-body text-brand-muted text-xs">{m.sub}</p>
                          </div>
                          {payment === m.id && (
                            <div className="ml-auto w-5 h-5 rounded-full bg-brand-red flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7"/></svg>
                            </div>
                          )}
                        </div>
                      </button>
                    ))}
                  </div>

                  {payment === 'cod' && (
                    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }}
                      className="bg-green-900/20 border border-green-800 rounded-xl p-4 font-body text-green-400 text-sm"
                    >
                      ✅ <strong>Cash on Delivery selected.</strong> No advance payment required. Please keep <strong>{formatPKR(total)}</strong> ready when your order arrives.
                    </motion.div>
                  )}

                  {(payment === 'jazzcash' || payment === 'easypaisa') && (
                    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className="space-y-4">
                      <div>
                        <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">
                          {payment === 'jazzcash' ? 'JazzCash' : 'Easypaisa'} Registered Number
                        </label>
                        <div className="flex gap-2">
                          <span className="bg-brand-black border border-brand-border rounded-xl px-3 flex items-center font-body text-sm text-brand-muted">🇵🇰 +92</span>
                          <input className={`flex-1 ${inp('mobile')}`} value={form.mobile} onChange={e=>set('mobile',fmtPhone(e.target.value))} placeholder="03001234567" maxLength={11} />
                        </div>
                        {errors.mobile && <p className="text-brand-red text-xs mt-1">{errors.mobile}</p>}
                      </div>
                      <div className="bg-brand-black border border-brand-border rounded-xl p-4 font-body text-brand-muted text-sm">
                        📲 After placing your order, a payment request of <strong className="text-white">{formatPKR(total)}</strong> will be sent to your registered number.
                      </div>
                    </motion.div>
                  )}

                  {payment === 'card' && (
                    <motion.div initial={{ opacity:0, y:10 }} animate={{ opacity:1, y:0 }} className="space-y-4">
                      <div>
                        <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Cardholder Name</label>
                        <input className={inp('cardName')} value={form.cardName} onChange={e=>set('cardName',e.target.value)} placeholder="Ali Ahmed" />
                        {errors.cardName && <p className="text-brand-red text-xs mt-1">{errors.cardName}</p>}
                      </div>
                      <div>
                        <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Card Number</label>
                        <input className={inp('cardNumber')} value={form.cardNumber} onChange={e=>set('cardNumber',fmtCard(e.target.value))} placeholder="1234 5678 9012 3456" maxLength={19} />
                        {errors.cardNumber && <p className="text-brand-red text-xs mt-1">{errors.cardNumber}</p>}
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">Expiry</label>
                          <input className={inp('expiry')} value={form.expiry} onChange={e=>set('expiry',fmtExpiry(e.target.value))} placeholder="MM/YY" maxLength={5} />
                          {errors.expiry && <p className="text-brand-red text-xs mt-1">{errors.expiry}</p>}
                        </div>
                        <div>
                          <label className="font-body text-white/60 text-xs uppercase tracking-wider font-semibold mb-1.5 block">CVV</label>
                          <input className={inp('cvv')} value={form.cvv} onChange={e=>set('cvv',e.target.value.replace(/\D/g,'').slice(0,4))} placeholder="123" maxLength={4} />
                          {errors.cvv && <p className="text-brand-red text-xs mt-1">{errors.cvv}</p>}
                        </div>
                      </div>
                      <div className="bg-brand-black border border-brand-border rounded-xl p-3 flex items-center gap-2 font-body text-brand-muted text-xs">
                        <svg className="w-4 h-4 text-green-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/></svg>
                        Your payment information is encrypted and secure.
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <motion.div key="s2" initial={{ opacity:0, x:30 }} animate={{ opacity:1, x:0 }} exit={{ opacity:0, x:-30 }}
                  className="bg-brand-card border border-brand-border rounded-2xl p-6"
                >
                  <h2 className="font-heading font-bold text-white text-xl mb-6 flex items-center gap-2">✅ Review & Confirm</h2>
                  <div className="space-y-2 mb-5 max-h-48 overflow-y-auto pr-1">
                    {items.map(item => (
                      <div key={item.id} className="flex justify-between text-sm py-1.5 border-b border-brand-border last:border-0">
                        <span className="font-body text-brand-muted">{item.name} <span className="text-brand-muted/60">×{item.quantity}</span></span>
                        <span className="font-body text-white font-semibold">{formatPKR(item.price * item.quantity)}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-brand-black border border-brand-border rounded-xl p-4 space-y-2.5 text-sm mb-5">
                    <div className="flex justify-between"><span className="font-body text-brand-muted">Deliver To</span><span className="font-body text-white font-semibold text-right">{form.address}, {form.area}, {form.city}</span></div>
                    <div className="flex justify-between"><span className="font-body text-brand-muted">Phone</span><span className="font-body text-white font-semibold">+92 {form.phone}</span></div>
                    <div className="flex justify-between"><span className="font-body text-brand-muted">Payment</span><span className="font-body text-white font-semibold">{PAYMENT_METHODS.find(m=>m.id===payment)?.label}</span></div>
                    {form.notes && <div className="flex justify-between"><span className="font-body text-brand-muted">Notes</span><span className="font-body text-white font-semibold text-right max-w-xs">{form.notes}</span></div>}
                  </div>
                  {payment === 'cod' && (
                    <div className="bg-yellow-900/20 border border-yellow-800/50 rounded-xl p-3 font-body text-yellow-400 text-sm">
                      💵 Please keep <strong>{formatPKR(total)}</strong> in cash ready for the delivery rider.
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex justify-between mt-5">
              {step > 0
                ? <button onClick={() => setStep(s=>s-1)} className="flex items-center gap-2 font-body text-brand-muted hover:text-white text-sm transition-colors uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg> Back
                  </button>
                : <Link to="/cart" className="flex items-center gap-2 font-body text-brand-muted hover:text-white text-sm transition-colors uppercase tracking-wider">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/></svg> Back to Cart
                  </Link>
              }
              {step < 2
                ? <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={next}
                    className="bg-brand-red text-white font-body font-black px-8 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors"
                  >Continue →</motion.button>
                : <motion.button whileHover={{ scale:1.03 }} whileTap={{ scale:0.97 }} onClick={placeOrder} disabled={loading}
                    className="bg-brand-red text-white font-body font-black px-8 py-3 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors flex items-center gap-2 disabled:opacity-60"
                  >
                    {loading ? <><div className="loading-spinner" /> Processing...</> : <>Place Order — {formatPKR(total)}</>}
                  </motion.button>
              }
            </div>
          </div>

          {/* Sidebar */}
          <div className="bg-brand-card border border-brand-border rounded-2xl p-5 h-fit sticky top-24">
            <h3 className="font-heading font-bold text-white text-lg mb-4">Order Summary</h3>
            <div className="space-y-2 mb-4 max-h-44 overflow-y-auto">
              {items.map(item => (
                <div key={item.id} className="flex justify-between text-sm">
                  <span className="font-body text-brand-muted truncate mr-2">{item.name} ×{item.quantity}</span>
                  <span className="font-body text-white font-semibold shrink-0">{formatPKR(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-brand-border pt-3 space-y-2 text-sm">
              <div className="flex justify-between font-body text-brand-muted"><span>Subtotal</span><span>{formatPKR(subtotal)}</span></div>
              <div className="flex justify-between font-body text-brand-muted"><span>Delivery</span><span>{formatPKR(delivery)}</span></div>
              <div className="flex justify-between border-t border-brand-border pt-2">
                <span className="font-body font-bold text-white">Total</span>
                <span className="font-display text-brand-red text-xl tracking-wider">{formatPKR(total)}</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2 bg-brand-black border border-brand-border rounded-xl p-3">
              <span className="text-lg">{PAYMENT_METHODS.find(m=>m.id===payment)?.icon}</span>
              <span className="font-body text-brand-muted text-xs">{PAYMENT_METHODS.find(m=>m.id===payment)?.label}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;