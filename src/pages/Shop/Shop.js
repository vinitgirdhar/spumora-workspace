import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products as localProducts } from '../../data/products';
import './Shop.css';

const Shop = ({ shopifyProducts = [] }) => {
  // Use Shopify products if available, otherwise fall back to local data
  const productsToDisplay = shopifyProducts.length > 0 ? shopifyProducts : localProducts;
  
  const [activeFilter, setActiveFilter] = useState('all');

  // Get unique categories from products
  const categories = ['all', ...new Set(productsToDisplay.map(p => p.category))];

  // Filter products based on active filter
  const filteredProducts = productsToDisplay.filter(product => {
    return activeFilter === 'all' || product.category === activeFilter;
  });

  return (
    <div className="shop">
      {/* Page Header */}
      <div className="shop__header">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Shop</span>
          </nav>
          <h1 className="heading-xl">Shop Our Collection</h1>
          <p className="shop__subtitle">Discover handcrafted luxury for your skin</p>
        </div>
      </div>

      <div className="shop__content">
        <div className="container">
          {/* Filter Buttons */}
          <div style={{ display: 'flex', gap: '10px', marginBottom: '30px', justifyContent: 'center', flexWrap: 'wrap' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                style={{
                  padding: '10px 20px',
                  border: activeFilter === category ? '2px solid #000' : '1px solid #ddd',
                  background: activeFilter === category ? '#000' : '#fff',
                  color: activeFilter === category ? '#fff' : '#000',
                  cursor: 'pointer',
                  borderRadius: '4px',
                  textTransform: 'capitalize',
                  fontWeight: activeFilter === category ? 'bold' : 'normal'
                }}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Products Count */}
          <p style={{ textAlign: 'center', marginBottom: '20px', color: '#666' }}>
            Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
          </p>

          {/* Products Grid */}
          <div className="shop__products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
