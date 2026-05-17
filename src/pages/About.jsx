import React from 'react';
import { motion } from 'framer-motion';

const PILLARS = [
  { icon: '🥩', title: 'Premium Ingredients',   desc: 'We source only hand-selected produce from trusted local farms and global suppliers.' },
  { icon: '👨‍🍳', title: 'Master Chefs',           desc: 'Our culinary team brings decades of experience and relentless passion to every plate.' },
  { icon: '🔥', title: 'Traditional Craft',     desc: 'Time-honored techniques meet modern innovation for flavors that tell a story.' },
  { icon: '✅', title: 'Uncompromised Quality', desc: 'Every dish is quality-checked before it leaves our kitchen — zero shortcuts.' },
];

const STANDARDS = [
  { title: 'Hygiene & Safety',     desc: 'Daily rigorous sanitation protocols and food safety standards that exceed industry benchmarks.' },
  { title: 'Sustainable Sourcing', desc: 'We partner with local farmers and sustainable suppliers to minimise our environmental footprint.' },
  { title: 'Continuous Training',  desc: 'Our team undergoes regular culinary training to keep skills sharp and standards high.' },
];

const STATS = [
  { n: '50+',  l: 'Dishes on Menu'    },
  { n: '15+',  l: 'Years Experience'  },
  { n: '50k+', l: 'Orders Delivered'  },
  { n: '100%', l: 'Quality Guarantee' },
];

const About = () => (
  <div className="min-h-screen bg-brand-black">

    {/* Hero */}
    <section className="pt-28 pb-20 bg-brand-charcoal border-b border-brand-border relative overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.1) 1px,transparent 1px)', backgroundSize: '80px 80px' }} />
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-brand-red" /> Our Story
          </p>
          <h1 className="font-display text-6xl md:text-9xl text-white uppercase tracking-wide leading-none mb-6">
            ABOUT<br /><span className="text-brand-red">US</span>
          </h1>
          <p className="font-body text-brand-muted text-lg max-w-2xl leading-relaxed">
            For over 15 years, SteakJees has been Karachi's destination for exceptional dining — where culinary excellence meets timeless tradition.
          </p>
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 bg-brand-red">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((s, i) => (
            <motion.div
              key={s.l}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-5xl md:text-6xl text-white tracking-wider">{s.n}</p>
              <p className="font-body text-white/70 text-xs uppercase tracking-widest mt-2">{s.l}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-4 flex items-center gap-2">
              <span className="inline-block w-8 h-px bg-brand-red" /> Our Mission
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wide leading-none mb-6">
              FOOD THAT<br /><span className="text-brand-red">MOVES YOU</span>
            </h2>
            <p className="font-body text-brand-muted text-base leading-relaxed mb-4">
              At SteakJees, we believe great food unites people. Our mission is to craft memorable experiences through exceptional cuisine, warm hospitality, and an unwavering commitment to quality.
            </p>
            <p className="font-body text-brand-muted text-base leading-relaxed mb-8">
              We explore global culinary traditions while staying rooted in the highest standards of ingredient sourcing and kitchen craft.
            </p>
            <blockquote className="border-l-4 border-brand-red pl-5">
              <p className="font-heading italic text-white text-lg leading-relaxed">
                "Food is not just fuel. It's an experience that should bring joy, create memories, and celebrate life."
              </p>
            </blockquote>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4"
          >
            {PILLARS.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="bg-brand-card border border-brand-border rounded-2xl p-6 hover:border-brand-red transition-colors group"
              >
                <div className="text-3xl mb-3">{p.icon}</div>
                <h3 className="font-heading font-bold text-white text-base mb-2 group-hover:text-brand-red transition-colors">{p.title}</h3>
                <p className="font-body text-brand-muted text-sm leading-relaxed">{p.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>

    {/* Kitchen Standards */}
    <section className="py-24 bg-brand-charcoal border-t border-brand-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14"
        >
          <p className="font-body text-brand-red text-sm font-semibold uppercase tracking-widest mb-3 flex items-center gap-2">
            <span className="inline-block w-8 h-px bg-brand-red" /> How We Operate
          </p>
          <h2 className="font-display text-5xl md:text-6xl text-white uppercase tracking-wide leading-none">
            KITCHEN<br /><span className="text-brand-red">STANDARDS</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {STANDARDS.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-brand-card border border-brand-border rounded-2xl p-8 hover:border-brand-red transition-colors group"
            >
              <div className="w-10 h-1 bg-brand-red mb-6 group-hover:w-16 transition-all duration-300" />
              <h3 className="font-heading font-bold text-white text-xl mb-3">{s.title}</h3>
              <p className="font-body text-brand-muted text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;