import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import gmpCertified from '../../assets/gmp-certified.png';
import fdaApproved from '../../assets/fda-approved.png';
import './Product.css';

const Product = ({ shopifyProducts = [] }) => {
  const { id } = useParams();
  const { addItem } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('ingredients');

  useEffect(() => {
    const foundProduct = shopifyProducts.find(p => p.handle === id);
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedImage(0);
      setQuantity(1);
    }
    window.scrollTo(0, 0);
  }, [id, shopifyProducts]);

  if (!product) {
    return (
      <div className="product-not-found">
        <div className="container">
          <h1>Product Not Found</h1>
          <Link to="/shop" className="btn btn-primary">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!product.variantId) {
      alert('This item is not connected to Shopify yet. Please refresh or try a different product.');
      return;
    }
    addItem({ ...product, quantity });
  };

  const relatedProducts = shopifyProducts
    .filter(p => p.collection === product.collection && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-page">
      {/* Breadcrumb */}
      <div className="product-page__breadcrumb">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/shop">Shop</Link>
            <span>/</span>
            <span>{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Product Section */}
      <section className="product-main">
        <div className="container">
          <div className="product-main__grid">
            {/* Image Gallery */}
            <div className="product-gallery">
              <div className="product-gallery__main">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="product-gallery__image"
                />
                {product.isNew && (
                  <span className="product-gallery__badge product-gallery__badge--new">New</span>
                )}
                {product.isBestSeller && (
                  <span className="product-gallery__badge product-gallery__badge--bestseller">Best Seller</span>
                )}
              </div>
              <div className="product-gallery__thumbs">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    className={`product-gallery__thumb ${selectedImage === index ? 'active' : ''}`}
                    onClick={() => setSelectedImage(index)}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-info__name">{product.name}</h1>
              
              <div className="product-info__rating">
                <div className="product-info__stars">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      width="18" 
                      height="18" 
                      viewBox="0 0 24 24" 
                      fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'}
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <span className="product-info__reviews">{product.rating} ({product.reviews} reviews)</span>
              </div>

              <div className="product-info__price">
                <span className="product-info__current-price">₹{product.price}</span>
                {product.originalPrice && (
                  <span className="product-info__original-price">₹{product.originalPrice}</span>
                )}
              </div>

              <p className="product-info__description">{product.description}</p>

              {/* Add to Cart */}
              <div className="product-info__actions">
                <div className="product-info__quantity">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    disabled={quantity <= 1}
                  >
                    −
                  </button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                <button className="btn btn-primary btn-lg" onClick={handleAddToCart}>
                  Add to Cart — ₹{product.price * quantity}
                </button>
              </div>

              <button className="product-info__wishlist">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
                Add to Wishlist
              </button>

              {/* Product Badges */}
              <div className="product-info__badges">
                <span className="product-badge">🌿 100% Natural</span>
                <span className="product-badge">✋ Handcrafted</span>
                <span className="product-badge">🐰 Cruelty Free</span>
              </div>

              {/* Certification Logos */}
              <div className="product-info__certifications">
                <img src={gmpCertified} alt="GMP Certified" className="product-info__cert-logo" />
                <img src={fdaApproved} alt="FDA Approved" className="product-info__cert-logo" />
              </div>

              {/* Product Meta */}
              <div className="product-info__meta">
                <div className="product-meta-item">
                  <span className="product-meta-item__label">Size:</span>
                  <span className="product-meta-item__value">{product.size}</span>
                </div>
                <div className="product-meta-item">
                  <span className="product-meta-item__label">Collection:</span>
                  <Link to={`/collections/${product.collection}`} className="product-meta-item__value product-meta-item__link">
                    {product.collection.charAt(0).toUpperCase() + product.collection.slice(1)}
                  </Link>
                </div>
                <div className="product-meta-item">
                  <span className="product-meta-item__label">Scent:</span>
                  <span className="product-meta-item__value">
                    {product.scent.charAt(0).toUpperCase() + product.scent.slice(1)}
                  </span>
                </div>
              </div>

              {/* Share */}
              <div className="product-info__share">
                <span>Share:</span>
                <div className="product-info__share-links">
                  <button type="button" aria-label="Share on Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </button>
                  <button type="button" aria-label="Share on Twitter">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  <button type="button" aria-label="Share on Pinterest">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="product-details section bg-cream">
        <div className="container">
          <div className="product-tabs">
            <div className="product-tabs__nav">
              <button 
                className={`product-tabs__btn ${activeTab === 'ingredients' ? 'active' : ''}`}
                onClick={() => setActiveTab('ingredients')}
              >
                Ingredients
              </button>
              <button 
                className={`product-tabs__btn ${activeTab === 'benefits' ? 'active' : ''}`}
                onClick={() => setActiveTab('benefits')}
              >
                Benefits
              </button>
              <button 
                className={`product-tabs__btn ${activeTab === 'howto' ? 'active' : ''}`}
                onClick={() => setActiveTab('howto')}
              >
                How to Use
              </button>
            </div>

            <div className="product-tabs__content">
              {activeTab === 'ingredients' && (
                <div className="product-tab-panel">
                  <h3>Key Ingredients</h3>
                  <div className="ingredients-list">
                    {product.ingredients.map((ing, index) => (
                      <div key={index} className="ingredient-card">
                        <h4>{ing.name}</h4>
                        <p>{ing.benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'benefits' && (
                <div className="product-tab-panel">
                  <h3>Benefits</h3>
                  <ul className="benefits-list">
                    {product.benefits.map((benefit, index) => (
                      <li key={index}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {activeTab === 'howto' && (
                <div className="product-tab-panel">
                  <h3>How to Use</h3>
                  <p className="howto-text">{product.howToUse}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related products removed for now; reintroduce once Shopify product data is finalized. */}
    </div>
  );
};

export default Product;
