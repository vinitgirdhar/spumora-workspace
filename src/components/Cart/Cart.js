import React from 'react';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const { items, isOpen, closeCart, removeItem, updateQuantity, totalPrice } = useCart();

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={closeCart} />
      <div className="cart">
        <div className="cart__header">
          <h2 className="cart__title">Your Cart</h2>
          <button className="cart__close" onClick={closeCart} aria-label="Close cart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {items.length === 0 ? (
          <div className="cart__empty">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            <p>Your cart is empty</p>
            <button className="btn btn-primary" onClick={closeCart}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className="cart__items">
              {items.map((item) => (
                <div key={item.id} className="cart__item">
                  <div className="cart__item-image">
                    <img src={item.images[0]} alt={item.name} />
                  </div>
                  <div className="cart__item-details">
                    <h4 className="cart__item-name">{item.name}</h4>
                    <p className="cart__item-price">${item.price.toFixed(2)}</p>
                    <div className="cart__item-quantity">
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span>{item.quantity}</span>
                      <button onClick={() => updateQuantity(item.id, item.quantity + 1)}>
                        +
                      </button>
                    </div>
                  </div>
                  <button 
                    className="cart__item-remove" 
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <polyline points="3 6 5 6 21 6"/>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                    </svg>
                  </button>
                </div>
              ))}
            </div>

            <div className="cart__footer">
              <div className="cart__subtotal">
                <span>Subtotal</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <p className="cart__shipping-note">
                Shipping & taxes calculated at checkout
              </p>
              <Link to="/checkout" className="btn btn-primary cart__checkout-btn" onClick={closeCart}>
                Proceed to Checkout
              </Link>
              <button className="cart__continue" onClick={closeCart}>
                Continue Shopping
              </button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
