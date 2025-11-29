import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import OurStory from './pages/OurStory/OurStory';
import Ingredients from './pages/Ingredients/Ingredients';
import Cart from './components/Cart/Cart';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/ingredients" element={<Ingredients />} />
            </Routes>
          </main>
          <Footer />
          <Cart />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
