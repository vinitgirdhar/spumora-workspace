import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products, collections, testimonials } from '../../data/products';
import heroBg from '../../assets/hero-soap-background.jpg';
import gmpCertified from '../../assets/gmp-certified.png';
import fdaApproved from '../../assets/fda-approved.png';
import './Home.css';

const Home = () => {
  const featuredProducts = products.slice(0, 8);
  
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
        <div className="hero__overlay"></div>
        <div className="hero__content">
          <h1 className="hero__title">SPUMORA</h1>
          <p className="hero__subtitle">Pure Luxury for Your Skin</p>
          <p className="hero__description">
            Discover the art of conscious indulgence with Spumora – where centuries-old 
            soap making traditions meet modern luxury. Every bar tells a story of purity, 
            crafted by hand with nature's most treasured ingredients.
          </p>
          <div className="hero__cta">
            <Link to="/shop" className="btn btn-primary btn-lg">Shop Now</Link>
            <button className="btn btn-secondary btn-lg">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <polygon points="5 3 19 12 5 21 5 3"/>
              </svg>
              Watch Our Story
            </button>
          </div>
          <div className="hero__scroll">
            <span>Scroll to discover</span>
            <div className="hero__scroll-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7"/>
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features section bg-cream">
        <div className="container">
          <div className="features__grid">
            <div className="feature">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <path d="M12 6c-2 0-3.5 1.5-3.5 3.5 0 1.5.8 2.8 2.1 3.4L12 18l1.4-5.1c1.3-.6 2.1-1.9 2.1-3.4C15.5 7.5 14 6 12 6z"/>
                </svg>
              </div>
              <h3 className="feature__title">100% Natural</h3>
              <p className="feature__description">
                Made with pure botanical ingredients, free from harsh chemicals
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
              </div>
              <h3 className="feature__title">Handcrafted with Love</h3>
              <p className="feature__description">
                Each bar carefully crafted by skilled artisans using traditional methods
              </p>
            </div>
            <div className="feature">
              <div className="feature__icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"/>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"/>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"/>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                  <line x1="12" y1="22.08" x2="12" y2="12"/>
                </svg>
              </div>
              <h3 className="feature__title">Sustainable & Eco-Friendly</h3>
              <p className="feature__description">
                Environmentally conscious packaging and ethically sourced ingredients
              </p>
            </div>
          </div>
          
          {/* Certification Badges */}
          <div className="certifications">
            <p className="certifications__text">Certified Quality You Can Trust</p>
            <div className="certifications__logos">
              <img src={gmpCertified} alt="GMP Certified" className="certifications__logo" />
              <img src={fdaApproved} alt="FDA Approved" className="certifications__logo" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Featured Products</h2>
            <p className="section-subtitle">Discover our most beloved creations</p>
          </div>
          <div className="products-grid">
            {featuredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="section-cta">
            <Link to="/shop" className="btn btn-outline">View All Products</Link>
          </div>
        </div>
      </section>

      {/* Collections Showcase */}
      <section className="collections-showcase section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Our Collections</h2>
            <p className="section-subtitle">Curated ranges for every need</p>
          </div>
          <div className="collections-grid">
            {collections.map(collection => (
              <Link 
                key={collection.id} 
                to={`/collections/${collection.slug}`}
                className="collection-card"
              >
                <div className="collection-card__image">
                  <img src={collection.image} alt={collection.name} />
                </div>
                <div className="collection-card__overlay">
                  <h3 className="collection-card__title">{collection.name}</h3>
                  <p className="collection-card__tagline">{collection.tagline}</p>
                  <span className="collection-card__cta">Explore Collection</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Teaser */}
      <section className="story-teaser section">
        <div className="container">
          <div className="story-teaser__grid">
            <div className="story-teaser__image">
              <img src={products[0].images[0]} alt="Soap making process" />
            </div>
            <div className="story-teaser__content">
              <h2 className="heading-lg">The Art of Soap Making</h2>
              <p className="story-teaser__text">
                At Spumora, we believe that bathing should be a ritual, not just a routine. 
                Our journey began with a simple vision: to create soaps that honor both your 
                skin and the earth. Using time-tested cold process methods and carefully 
                sourced ingredients, we craft each bar to deliver a luxurious experience 
                that nourishes body and soul.
              </p>
              <p className="story-teaser__text">
                Every ingredient is chosen with intention, every bar made with love. 
                This is the Spumora promise.
              </p>
              <Link to="/our-story" className="btn btn-dark">Read Our Full Story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ingredients Highlight */}
      <section className="ingredients-highlight section bg-sage">
        <div className="container">
          <div className="section-header section-header--light">
            <h2 className="heading-lg">Nature's Treasures in Every Bar</h2>
            <p className="section-subtitle">Only the finest ingredients make the cut</p>
          </div>
          <div className="ingredients-grid">
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🧈</span>
              <span className="ingredient-item__name">Shea Butter</span>
            </div>
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🫒</span>
              <span className="ingredient-item__name">Olive Oil</span>
            </div>
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🌿</span>
              <span className="ingredient-item__name">Essential Oils</span>
            </div>
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🥛</span>
              <span className="ingredient-item__name">Goat Milk</span>
            </div>
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🍯</span>
              <span className="ingredient-item__name">Honey</span>
            </div>
            <div className="ingredient-item">
              <span className="ingredient-item__icon">🌸</span>
              <span className="ingredient-item__name">Botanicals</span>
            </div>
          </div>
          <div className="section-cta">
            <Link to="/ingredients" className="btn btn-secondary">Explore All Ingredients</Link>
          </div>
        </div>
      </section>

      {/* Usage Tips Section */}
      <section className="usage-tips section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Get the Best from Your Spumora Soap</h2>
            <p className="section-subtitle">Simple tips for maximum benefits</p>
          </div>
          <div className="usage-tips__grid">
            <div className="usage-tip">
              <div className="usage-tip__icon">⏱️</div>
              <h3 className="usage-tip__title">Let It Absorb</h3>
              <p className="usage-tip__description">
                After applying the soap on your body, leave it on for 2–3 minutes before rinsing. 
                This allows the natural ingredients to absorb into your skin for deeper nourishment.
              </p>
            </div>
            <div className="usage-tip">
              <div className="usage-tip__icon">💧</div>
              <h3 className="usage-tip__title">Use Warm Water</h3>
              <p className="usage-tip__description">
                While you can use our soap with any water temperature, we suggest using it with 
                warm water for better lather and absorption of beneficial ingredients.
              </p>
            </div>
            <div className="usage-tip">
              <div className="usage-tip__icon">📅</div>
              <h3 className="usage-tip__title">Be Consistent</h3>
              <p className="usage-tip__description">
                For the best and most visible results, use the soap regularly for 35–40 days. 
                Natural products work gently and effectively over time.
              </p>
            </div>
          </div>
          <p className="usage-tips__note">
            Enjoy the soft, smooth, and refreshed feeling that comes with every use! 💚
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">What Our Customers Say</h2>
            <p className="section-subtitle">Real reviews from real people</p>
          </div>
          <div className="testimonials-grid">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-card__stars">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__text">"{testimonial.text}"</p>
                <div className="testimonial-card__author">
                  <span className="testimonial-card__name">{testimonial.name}</span>
                  <span className="testimonial-card__product">Purchased: {testimonial.product}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Gallery */}
      <section className="instagram section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Follow Our Journey</h2>
            <p className="section-subtitle">@spumora</p>
          </div>
          <div className="instagram-grid">
            {products.slice(0, 6).map((product, index) => (
              <a 
                key={index} 
                href="https://instagram.com/spumora" 
                target="_blank" 
                rel="noopener noreferrer"
                className="instagram-item"
              >
                <img src={product.images[index % product.images.length]} alt="Instagram" />
                <div className="instagram-item__overlay">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
