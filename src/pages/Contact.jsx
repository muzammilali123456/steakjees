import React, { useState } from 'react';
import { motion } from 'framer-motion';

const INFO = [
  { icon: '📍', title: 'Visit Us',       lines: ['Block 7, Clifton', 'Karachi, Pakistan'] },
  { icon: '📞', title: 'Call Us',        lines: ['+92 21 3567 8900', '+92 300 1234567'] },
  { icon: '✉️', title: 'Email Us',       lines: ['info@steakjees.pk', 'orders@steakjees.pk'] },
  { icon: '🕐', title: 'Opening Hours',  lines: ['Mon – Sun', '11:00 AM – 11:00 PM'] },
];

const Contact = () => {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const input = "w-full bg-brand-card border-2 border-brand-border text-white placeholder-brand-muted px-4 py-3.5 rounded-xl font-body text-sm focus:border-brand-red focus:outline-none transition-colors";

  return (
    <div className="min-h-screen bg-brand-black">

      {/* Hero */}
      <div className="bg-brand-charcoal border-b border-brand-border pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-brand-red" /> Reach Out
            </p>
            <h1 className="font-display text-6xl md:text-8xl text-white uppercase tracking-wide leading-none">
              GET IN<br /><span className="text-brand-red">TOUCH</span>
            </h1>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <div className="bg-brand-card border border-brand-border rounded-2xl p-8">
              <h2 className="font-heading font-bold text-white text-2xl mb-6">Send Us a Message</h2>

              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-green-900/40 border border-green-700 text-green-400 font-body text-sm px-4 py-3 rounded-xl mb-6"
                >
                  ✅ Message sent! We'll get back to you within 24 hours.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">Full Name *</label>
                    <input className={input} value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="Your name" required />
                  </div>
                  <div>
                    <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">Email *</label>
                    <input className={input} type="email" value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="you@example.com" required />
                  </div>
                </div>
                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">Subject *</label>
                  <input className={input} value={form.subject} onChange={e => setForm({...form, subject: e.target.value})} placeholder="What's this about?" required />
                </div>
                <div>
                  <label className="font-body text-white/70 text-xs uppercase tracking-wider font-semibold mb-2 block">Message *</label>
                  <textarea className={`${input} resize-none`} rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Tell us how we can help..." required />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-brand-red text-white font-body font-bold py-4 rounded-xl uppercase tracking-widest text-sm hover:bg-brand-redDark transition-colors"
                >
                  Send Message →
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2 space-y-4"
          >
            {INFO.map((info, i) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-red transition-colors group"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-brand-red/10 rounded-xl flex items-center justify-center text-xl shrink-0 group-hover:bg-brand-red transition-colors">
                    {info.icon}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-white text-base mb-1">{info.title}</h3>
                    {info.lines.map(l => (
                      <p key={l} className="font-body text-brand-muted text-sm">{l}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Map placeholder */}
            <div className="bg-brand-card border border-brand-border rounded-2xl p-6">
              <h3 className="font-heading font-bold text-white text-base mb-4">Find Us</h3>
              <div className="bg-brand-black rounded-xl h-44 flex flex-col items-center justify-center border border-brand-border">
                <span className="text-4xl mb-2">🗺️</span>
                <p className="font-body text-brand-muted text-sm">Block 7, Clifton, Karachi</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;