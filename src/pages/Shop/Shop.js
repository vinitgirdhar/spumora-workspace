import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Shop.css';

const Shop = () => {
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
          {/* Products Grid */}
          <div className="shop__products-grid">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
