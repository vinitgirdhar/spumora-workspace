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

  const handleBuyNow = async (e) => {
    e.preventDefault();
    
    // Use variantId if available; otherwise fall back to product IDs
    const variantId = product.variantId || product.shopifyId || product.id;
    
    const query = `
      mutation checkoutCreate($input: CheckoutCreateInput!) {
        checkoutCreate(input: $input) {
          checkout { webUrl }
          checkoutUserErrors { message }
        }
      }
    `;

    const variables = {
      input: { lineItems: [{ variantId, quantity: 1 }] }
    };

    try {
      const response = await fetch(
        `https://${process.env.REACT_APP_SHOPIFY_STORE_DOMAIN}/api/2025-01/graphql.json`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-Shopify-Storefront-Access-Token': process.env.REACT_APP_SHOPIFY_STOREFRONT_ACCESS_TOKEN,
          },
          body: JSON.stringify({ query, variables }),
        }
      );

      const { data } = await response.json();
      
      if (data.checkoutCreate.checkoutUserErrors?.length > 0) {
        console.error('Checkout errors:', data.checkoutCreate.checkoutUserErrors);
        alert('Failed to create checkout. Please try adding to cart instead.');
        return;
      }
      
      if (data.checkoutCreate.checkout?.webUrl) {
        window.location.href = data.checkoutCreate.checkout.webUrl;
      }
    } catch (error) {
      console.error('Checkout failed:', error);
      alert('Failed to proceed to checkout. Please try again.');
    }
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

          {/* Quick Actions */}
          <div className="product-card__actions">
            <button 
              className="product-card__quick-add"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
            <button 
              className="product-card__buy-now"
              onClick={handleBuyNow}
              style={{
                marginTop: '5px',
                width: '100%',
                padding: '10px',
                background: '#fff',
                color: '#000',
                border: '2px solid #000',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}
            >
              Buy Now
            </button>
          </div>
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
            <span className="product-card__current-price">₹{product.price}</span>
            {product.originalPrice && (
              <span className="product-card__original-price">₹{product.originalPrice}</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProductCard;
