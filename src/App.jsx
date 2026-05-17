import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { CartProvider } from './context/CartContext';
import Navbar   from './components/Navbar.jsx';
import Footer   from './components/Footer.jsx';
import Home     from './pages/Home.jsx';
import Menu     from './pages/Menu.jsx';
import About    from './pages/About.jsx';
import Contact  from './pages/Contact.jsx';
import Cart     from './pages/Cart.jsx';
import Checkout from './pages/Checkout.jsx';
import './styles/globals.css';

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, easing: 'ease-out-cubic', once: true });
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-brand-black">
          <Navbar />
          <main>
            <Routes>
              <Route path="/"         element={<Home />}     />
              <Route path="/menu"     element={<Menu />}     />
              <Route path="/about"    element={<About />}    />
              <Route path="/contact"  element={<Contact />}  />
              <Route path="/cart"     element={<Cart />}     />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;