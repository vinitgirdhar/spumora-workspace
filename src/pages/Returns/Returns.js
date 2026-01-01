import React from 'react';
import { Link } from 'react-router-dom';
import './Returns.css';

const Returns = () => {
  return (
    <div className="returns-page">
      {/* Hero Section */}
      <section className="returns-hero">
        <div className="container">
          <div className="returns-hero__icon">🔄</div>
          <h1>Refund & Replacement Policy</h1>
          <p>Your satisfaction is our priority</p>
        </div>
      </section>

      {/* Breadcrumb */}
      <div className="returns-breadcrumb">
        <div className="container">
          <nav>
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Refund & Replacement Policy</span>
          </nav>
        </div>
      </div>

      {/* Policy Content */}
      <section className="returns-content section">
        <div className="container">
          <div className="returns-intro">
            <p>
              At Spumora, we take pride in delivering high-quality luxury soaps that are gentle, 
              safe, and effective. However, in the rare case that you receive a defective or 
              damaged product, we offer a flexible refund and replacement policy.
            </p>
          </div>

          {/* Eligibility Section */}
          <div className="policy-section">
            <h2>Eligibility for Refunds or Replacements</h2>
            <div className="policy-card">
              <div className="policy-item">
                <h3>Duration</h3>
                <p>You can request a refund or replacement within <strong>7 days</strong> from the date of delivery.</p>
              </div>
              <div className="policy-item">
                <h3>Condition</h3>
                <p>Refunds or replacements are only applicable if:</p>
                <ul>
                  <li>The product is damaged or defective at the time of delivery.</li>
                  <li>You provide video proof of the unboxing process (see below).</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Unboxing Video Section */}
          <div className="policy-section">
            <h2>Mandatory Unboxing Video</h2>
            <div className="policy-card highlight">
              <p>To ensure a smooth resolution process:</p>
              <ul>
                <li>A video recording is <strong>mandatory</strong> while unpacking the product.</li>
                <li>The video must clearly show the packaging, the unboxing process, and the damaged/defective product.</li>
                <li>Claims without unboxing videos may not be accepted.</li>
              </ul>
            </div>
          </div>

          {/* Refund Timeline Section */}
          <div className="policy-section">
            <h2>Refund Timeline</h2>
            <div className="policy-grid">
              <div className="policy-card">
                <div className="policy-icon">💳</div>
                <h3>Prepaid Orders</h3>
                <p>Refunds will be processed within <strong>5-7 business days</strong> after approval.</p>
              </div>
              <div className="policy-card">
                <div className="policy-icon">💵</div>
                <h3>Cash on Delivery (COD) Orders</h3>
                <p>COD refunds may take <strong>7-10 business days</strong> and will be processed via bank transfer or UPI.</p>
              </div>
            </div>
          </div>

          {/* Bulk Orders Section */}
          <div className="policy-section">
            <h2>Bulk Orders / Multiple Products</h2>
            <div className="policy-card">
              <p>If you have ordered multiple products:</p>
              <ul>
                <li>We recommend that you open and inspect each individual box upon delivery.</li>
                <li>This ensures timely verification in case of issues, even if you intend to use the product later.</li>
              </ul>
            </div>
          </div>

          {/* How to Request Section */}
          <div className="policy-section">
            <h2>How to Request a Refund or Replacement</h2>
            <div className="policy-card">
              <p>To initiate a request, please:</p>
              <ol className="steps-list">
                <li>Email us at <a href="mailto:Spumora.work@gmail.com">Spumora.work@gmail.com</a> within 7 days of delivery.</li>
                <li>
                  Include the following in your email:
                  <ul>
                    <li>Order ID</li>
                    <li>Reason for return/replacement</li>
                    <li>Clear video proof of the unboxing process</li>
                    <li>Images (optional but helpful)</li>
                  </ul>
                </li>
              </ol>
              <p className="response-time">Our support team will get back to you within <strong>24-48 business hours</strong>.</p>
            </div>
          </div>

          {/* Non-Eligible Cases Section */}
          <div className="policy-section">
            <h2>Non-Eligible Cases</h2>
            <div className="policy-card warning">
              <p>We do not offer refunds or replacements for:</p>
              <ul>
                <li>Products that have been used or opened without prior inspection.</li>
                <li>Claims made after 7 days of delivery.</li>
                <li>Requests without valid video proof.</li>
                <li>Products damaged due to customer mishandling or improper storage.</li>
              </ul>
            </div>
          </div>

          {/* Cancellation Policy Section */}
          <div className="policy-section">
            <h2>Cancellation Policy</h2>
            <div className="policy-card">
              <ul>
                <li>Orders can be cancelled within <strong>2 hours</strong> of placing the order or before dispatch.</li>
                <li>Once the order is shipped, cancellation is no longer possible.</li>
              </ul>
            </div>
          </div>

          {/* Contact Section */}
          <div className="policy-section contact-section">
            <h2>Contact Us</h2>
            <div className="policy-card contact-card">
              <p>For any concerns or assistance, reach out to our customer support:</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <div>
                    <strong>Email</strong>
                    <a href="mailto:Spumora.work@gmail.com">Spumora.work@gmail.com</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📞</span>
                  <div>
                    <strong>Phone</strong>
                    <a href="tel:9428405605">9428405605</a>
                  </div>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🕐</span>
                  <div>
                    <strong>Business Hours</strong>
                    <span>Monday to Saturday, 10 AM – 6 PM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Returns;
