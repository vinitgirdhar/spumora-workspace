import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './TrackOrder.css';

const TrackOrder = () => {
  const [orderNumber, setOrderNumber] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const shopifyDomain = process.env.REACT_APP_SHOPIFY_STORE_DOMAIN;

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validate inputs
    if (!orderNumber.trim()) {
      setError('Please enter your order number');
      return;
    }

    if (!email.trim()) {
      setError('Please enter your email address');
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);

    // Clean order number (remove # if present)
    const cleanOrderNumber = orderNumber.replace('#', '').trim();

    // Redirect to Shopify's order status page
    // Format: https://store.myshopify.com/account/orders/ORDER_NUMBER
    // Or use the order lookup: https://store.myshopify.com/account/login
    const trackingUrl = `https://${shopifyDomain}/account/login?checkout_url=/account/orders/${cleanOrderNumber}`;
    
    // Small delay for UX
    setTimeout(() => {
      window.location.href = trackingUrl;
    }, 500);
  };

  return (
    <div className="track-order-page">
      {/* Hero Section */}
      <section className="track-hero">
        <div className="container">
          <div className="track-hero__icon">📦</div>
          <h1>Track Your Order</h1>
          <p>Enter your order details to check the status of your shipment</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="track-breadcrumb">
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Track Order</span>
          </nav>
        </div>
      </div>

      {/* Track Form Section */}
      <section className="track-content section">
        <div className="container">
          <div className="track-form-wrapper">
            <div className="track-form-card">
              <div className="track-form-header">
                <h2>Order Lookup</h2>
                <p>Enter the order number from your confirmation email and the email address you used to place the order.</p>
              </div>

              <form onSubmit={handleSubmit} className="track-form">
                <div className="form-group">
                  <label htmlFor="orderNumber">Order Number</label>
                  <div className="input-wrapper">
                    <span className="input-icon">#</span>
                    <input
                      type="text"
                      id="orderNumber"
                      value={orderNumber}
                      onChange={(e) => setOrderNumber(e.target.value)}
                      placeholder="e.g., 1001"
                      autoComplete="off"
                    />
                  </div>
                  <span className="form-hint">Found in your order confirmation email</span>
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <div className="input-wrapper">
                    <span className="input-icon">✉</span>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
                      autoComplete="email"
                    />
                  </div>
                  <span className="form-hint">The email used when placing the order</span>
                </div>

                {error && (
                  <div className="form-error">
                    <span>⚠</span> {error}
                  </div>
                )}

                <button 
                  type="submit" 
                  className={`btn btn-primary btn-track ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <span className="spinner"></span>
                      Redirecting...
                    </>
                  ) : (
                    <>
                      Track Order
                      <span className="btn-arrow">→</span>
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Help Section */}
            <div className="track-help">
              <h3>Need Help?</h3>
              <div className="help-items">
                <div className="help-item">
                  <span className="help-icon">📧</span>
                  <div>
                    <strong>Check Your Email</strong>
                    <p>Your order number is in your confirmation email from Spumora.</p>
                  </div>
                </div>
                <div className="help-item">
                  <span className="help-icon">⏰</span>
                  <div>
                    <strong>Shipping Time</strong>
                    <p>Orders typically ship within 2-3 business days.</p>
                  </div>
                </div>
                <div className="help-item">
                  <span className="help-icon">💬</span>
                  <div>
                    <strong>Contact Support</strong>
                    <p>Can't find your order? <a href="mailto:Spumora.work@gmail.com">Email us</a> or call <a href="tel:9428405605">9428405605</a></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="track-info section bg-cream">
        <div className="container">
          <div className="info-grid">
            <div className="info-card">
              <div className="info-icon">🚚</div>
              <h3>Fast Shipping</h3>
              <p>We ship across India with trusted courier partners for safe delivery.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Real-time Tracking</h3>
              <p>Get live updates on your package location and estimated delivery.</p>
            </div>
            <div className="info-card">
              <div className="info-icon">🔒</div>
              <h3>Secure Packaging</h3>
              <p>Every order is carefully packed to ensure your soaps arrive perfectly.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrackOrder;
