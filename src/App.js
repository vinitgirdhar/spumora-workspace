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
import Login from './components/Login/Login';
import ProductGrid from './components/ProductGrid';
import { CartProvider } from './context/CartContext';
import './App.css';

function App() {
  const [shopifyProducts, setShopifyProducts] = useState([]);

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
                products(first: 50) {
                  edges {
                    node {
                      id
                      title
                      handle
                      description
                      productType
                      images(first: 2) {
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
                            id
                            price {
                              amount
                              currencyCode
                            }
                            compareAtPrice {
                              amount
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
        
        // Map Shopify data to match your existing product structure
        const cleanProducts = result.data.products.edges.map(item => {
          const node = item.node;
          const variant = node.variants.edges[0]?.node;
          const images = node.images.edges.map(img => img.node.url);
          
          return {
            id: node.id,
            variantId: variant?.id,
            name: node.title,
            slug: node.handle,
            handle: node.handle,
            shortDescription: node.description?.substring(0, 50) + '...' || '',
            description: node.description || '',
            price: parseFloat(variant?.price.amount || 0),
            originalPrice: variant?.compareAtPrice ? parseFloat(variant.compareAtPrice.amount) : null,
            category: node.productType?.toLowerCase() || 'all',
            images: images.length > 0 ? images : ['/placeholder.png'],
            rating: 4.5, // Default rating
            reviews: 0,
            inStock: true,
            isNew: false,
            isBestSeller: false,
            currencyCode: variant?.price.currencyCode || 'INR',
            shopifyId: node.id // Keep original Shopify ID for backend sync
          };
        });
        
        setShopifyProducts(cleanProducts);
        console.log("Shopify Products loaded:", cleanProducts);
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
              <Route path="/" element={<Home shopifyProducts={shopifyProducts} />} />
              <Route path="/shop" element={<Shop shopifyProducts={shopifyProducts} />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/our-story" element={<OurStory />} />
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/login" element={<Login />} />
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
