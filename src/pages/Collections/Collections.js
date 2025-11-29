import React from 'react';
import { Link } from 'react-router-dom';
import { collections } from '../../data/products';
import './Collections.css';

const Collections = () => {
  return (
    <div className="collections-page">
      {/* Hero */}
      <section className="collections-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Collections</span>
          </nav>
          <h1 className="heading-xl">Our Collections</h1>
          <p className="collections-hero__subtitle">
            Curated ranges crafted to meet your unique skincare needs
          </p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="collections-grid-section section">
        <div className="container">
          <div className="collections-page__grid">
            {collections.map(collection => (
              <Link 
                key={collection.id}
                to={`/collections/${collection.slug}`}
                className="collection-feature-card"
              >
                <div className="collection-feature-card__image">
                  <img src={collection.image} alt={collection.name} />
                </div>
                <div className="collection-feature-card__content">
                  <span className="collection-feature-card__count">
                    {collection.products.length} Products
                  </span>
                  <h2 className="collection-feature-card__title">{collection.name}</h2>
                  <p className="collection-feature-card__tagline">{collection.tagline}</p>
                  <p className="collection-feature-card__description">{collection.description}</p>
                  <span className="collection-feature-card__cta">
                    Explore Collection
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Collections */}
      <section className="why-collections section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Why Shop by Collection?</h2>
          </div>
          <div className="why-collections__grid">
            <div className="why-card">
              <div className="why-card__icon">🎯</div>
              <h3>Targeted Solutions</h3>
              <p>Each collection is designed to address specific skincare concerns and preferences.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">💫</div>
              <h3>Complementary Formulas</h3>
              <p>Products within each collection work together for enhanced results.</p>
            </div>
            <div className="why-card">
              <div className="why-card__icon">🎁</div>
              <h3>Perfect for Gifting</h3>
              <p>Collections make thoughtful, curated gift sets for any occasion.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Collections;
