import React from 'react';
import { Link } from 'react-router-dom';
import { ingredients } from '../../data/products';
import './Ingredients.css';

const Ingredients = () => {
  return (
    <div className="ingredients-page">
      {/* Hero */}
      <section className="ingredients-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Ingredients</span>
          </nav>
          <h1 className="heading-xl">Pure, Natural Ingredients</h1>
          <p className="ingredients-hero__subtitle">
            Discover what goes into every Spumora bar – only nature's finest, 
            ethically sourced, and thoughtfully selected.
          </p>
        </div>
      </section>

      {/* Commitment */}
      <section className="commitment-section section">
        <div className="container container-sm text-center">
          <h2 className="heading-lg">Our Commitment to Purity</h2>
          <p className="commitment-text">
            At Spumora, we believe that what you put on your skin matters. That's why every 
            ingredient we use is carefully vetted for quality, safety, and effectiveness. 
            We never use harsh chemicals, artificial fragrances, or synthetic preservatives. 
            Just pure, natural goodness in every bar.
          </p>
          <div className="commitment-badges">
            <div className="commitment-badge">
              <span className="commitment-badge__icon">🌿</span>
              <span className="commitment-badge__text">100% Natural</span>
            </div>
            <div className="commitment-badge">
              <span className="commitment-badge__icon">🐰</span>
              <span className="commitment-badge__text">Cruelty Free</span>
            </div>
            <div className="commitment-badge">
              <span className="commitment-badge__icon">🌍</span>
              <span className="commitment-badge__text">Ethically Sourced</span>
            </div>
            <div className="commitment-badge">
              <span className="commitment-badge__icon">🧪</span>
              <span className="commitment-badge__text">No Chemicals</span>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Grid */}
      <section className="ingredients-grid-section section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Our Key Ingredients</h2>
            <p className="section-subtitle">The stars of our formulations</p>
          </div>
          <div className="ingredients-page__grid">
            {ingredients.map(ingredient => (
              <div key={ingredient.id} className="ingredient-detail-card">
                <div className="ingredient-detail-card__icon">{ingredient.image}</div>
                <h3 className="ingredient-detail-card__name">{ingredient.name}</h3>
                <p className="ingredient-detail-card__origin">Origin: {ingredient.origin}</p>
                <p className="ingredient-detail-card__description">{ingredient.description}</p>
                <div className="ingredient-detail-card__benefits">
                  <h4>Benefits:</h4>
                  <ul>
                    {ingredient.benefits.map((benefit, index) => (
                      <li key={index}>{benefit}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Avoid */}
      <section className="avoid-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">What We Never Use</h2>
            <p className="section-subtitle">Our promise to you and your skin</p>
          </div>
          <div className="avoid-grid">
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Parabens</h3>
              <p>No synthetic preservatives that can disrupt hormones.</p>
            </div>
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Sulfates</h3>
              <p>No harsh cleansers that strip skin of natural oils.</p>
            </div>
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Phthalates</h3>
              <p>No harmful plasticizers in our formulations.</p>
            </div>
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Artificial Colors</h3>
              <p>Only natural colors from botanicals and minerals.</p>
            </div>
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Synthetic Fragrances</h3>
              <p>Only pure essential oils for natural scents.</p>
            </div>
            <div className="avoid-card">
              <span className="avoid-card__icon">✕</span>
              <h3>Palm Oil</h3>
              <p>We use sustainable alternatives to protect rainforests.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Sourcing */}
      <section className="sourcing-section section bg-sage">
        <div className="container">
          <div className="sourcing-grid">
            <div className="sourcing-content">
              <h2 className="heading-lg">Ethical Sourcing</h2>
              <p>
                We believe luxury shouldn't come at the cost of ethics. Every ingredient 
                we use is carefully traced back to its source to ensure fair trade practices 
                and sustainable harvesting methods.
              </p>
              <p>
                From the shea butter cooperatives in West Africa to the lavender fields of 
                Provence, we build lasting relationships with our suppliers, ensuring they're 
                compensated fairly while maintaining the highest quality standards.
              </p>
              <ul className="sourcing-list">
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Fair trade certified suppliers
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Sustainable harvesting practices
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Community support programs
                </li>
                <li>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  Full ingredient traceability
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="ingredients-cta section">
        <div className="container text-center">
          <h2 className="heading-lg">Experience the Difference</h2>
          <p>Try our naturally crafted soaps and feel the Spumora difference.</p>
          <Link to="/shop" className="btn btn-primary btn-lg">Shop Now</Link>
        </div>
      </section>
    </div>
  );
};

export default Ingredients;
