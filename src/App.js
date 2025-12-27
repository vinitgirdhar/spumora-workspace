import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Shop from './pages/Shop/Shop';
import Product from './pages/Product/Product';
import OurStory from './pages/OurStory/OurStory';
import Ingredients from './pages/Ingredients/Ingredients';
import Cart from './components/Cart/Cart';
import ProductGrid from './components/ProductGrid';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);

  // Fetch Shopify Products
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
            },
            body: JSON.stringify({
              query: `{
                products(first: 10) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      images(first: 1) {
                        edges {
                          node {
                            url
                            altText
                          }
                        }
                      }
                      variants(first: 1) {
                        edges {
                          node {
                            price {
                              amount
                              currencyCode
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }`,
            }),
          }
        );

        const result = await response.json();
        setProducts(result.data.products.edges);
        console.log("Shopify Products loaded:", result.data.products.edges);
      } catch (error) {
        console.error("Connection Failed:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <CartProvider>
      <Router>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/shop" element={
                <div>
                  <h1 style={{ textAlign: 'center', padding: '20px 0' }}>Our Luxury Soaps</h1>
                  <ProductGrid products={products} />
                </div>
              } />
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
