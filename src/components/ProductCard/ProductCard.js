import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <div className="product-card">
      <Link to={`/product/${product.slug}`} className="product-card__link">
        <div className="product-card__image-wrapper">
          <img 
            src={product.images[0]} 
            alt={product.name} 
            className="product-card__image"
          />
          {product.images[1] && (
            <img 
              src={product.images[1]} 
              alt={product.name} 
              className="product-card__image product-card__image--hover"
            />
          )}
          
          {/* Badges */}
          <div className="product-card__badges">
            {product.isNew && <span className="product-card__badge product-card__badge--new">New</span>}
            {product.isBestSeller && <span className="product-card__badge product-card__badge--bestseller">Best Seller</span>}
            {product.originalPrice && (
              <span className="product-card__badge product-card__badge--sale">Sale</span>
            )}
          </div>

          {/* Quick Add */}
          <button 
            className="product-card__quick-add"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
        </div>

        <div className="product-card__info">
          <h3 className="product-card__name">{product.name}</h3>
          <p className="product-card__description">{product.shortDescription}</p>
          
          <div className="product-card__rating">
            <div className="product-card__stars">
              {[...Array(5)].map((_, i) => (
                <svg 
                  key={i} 
                  width="14" 
                  height="14" 
                  viewBox="0 0 24 24" 
                  fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              ))}
            </div>
            <span className="product-card__reviews">({product.reviews})</span>
          </div>

          <div className="product-card__price">
            <span className="product-card__current-price">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="product-card__original-price">${product.originalPrice.toFixed(2)}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
