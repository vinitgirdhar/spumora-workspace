import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';
import './OurStory.css';

const OurStory = () => {
  return (
    <div className="our-story">
      {/* Hero */}
      <section className="story-hero" style={{ backgroundImage: `url(${products[2].images[0]})` }}>
        <div className="story-hero__overlay"></div>
        <div className="story-hero__content">
          <nav className="breadcrumb breadcrumb--light">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Our Story</span>
          </nav>
          <h1 className="heading-hero">The Spumora Story</h1>
          <p className="story-hero__subtitle">Tradition Meets Modern Luxury</p>
        </div>
      </section>

      {/* Origin Story */}
      <section className="story-section section">
        <div className="container">
          <div className="story-grid">
            <div className="story-content">
              <span className="story-label">Our Beginning</span>
              <h2 className="heading-lg">Where It All Started</h2>
              <p>
                Spumora was born from a simple belief: that skincare should be a moment of 
                pure indulgence, not just another step in your routine. Our founder, 
                inspired by generations of traditional soap-making in her family, set out 
                to create products that honor both ancient wisdom and modern needs.
              </p>
              <p>
                In a small workshop filled with the fragrance of essential oils and natural 
                botanicals, we began crafting our first batches of artisan soaps. Each recipe 
                was perfected over months of experimentation, ensuring that every bar delivers 
                the luxurious experience our customers deserve.
              </p>
              <p>
                Today, Spumora continues to grow, but our commitment to quality, 
                craftsmanship, and natural ingredients remains unchanged. We're proud to 
                share our passion with you.
              </p>
            </div>
            <div className="story-image">
              <img src={products[0].images[2]} alt="Soap making workshop" />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="process-section section bg-cream">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Our Craft</h2>
            <p className="section-subtitle">The traditional cold process method</p>
          </div>
          <div className="process-timeline">
            <div className="process-step">
              <div className="process-step__number">01</div>
              <div className="process-step__content">
                <h3>Sourcing</h3>
                <p>We carefully select the finest natural ingredients from trusted suppliers who share our commitment to quality and sustainability.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">02</div>
              <div className="process-step__content">
                <h3>Formulation</h3>
                <p>Our expert soap makers blend oils, butters, and botanicals in precise proportions to create balanced, effective formulas.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">03</div>
              <div className="process-step__content">
                <h3>Cold Process</h3>
                <p>Using the traditional cold process method, we preserve the natural benefits of each ingredient while creating a gentle, nourishing soap.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">04</div>
              <div className="process-step__content">
                <h3>Curing</h3>
                <p>Each bar cures for 4-6 weeks, allowing the saponification process to complete and resulting in a harder, longer-lasting soap.</p>
              </div>
            </div>
            <div className="process-step">
              <div className="process-step__number">05</div>
              <div className="process-step__content">
                <h3>Quality Check</h3>
                <p>Every batch is tested and inspected to ensure it meets our high standards before being packaged and shipped to you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values-section section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Our Values</h2>
            <p className="section-subtitle">What guides everything we do</p>
          </div>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-card__icon">🌱</div>
              <h3>Sustainability</h3>
              <p>
                From biodegradable packaging to eco-friendly practices in our workshop, 
                we're committed to minimizing our environmental footprint.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">✨</div>
              <h3>Quality Craftsmanship</h3>
              <p>
                We never rush our process. Every bar is made with patience, precision, 
                and an unwavering attention to detail.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">🤝</div>
              <h3>Community Support</h3>
              <p>
                We believe in giving back. A portion of every purchase supports local 
                artisan communities and environmental initiatives.
              </p>
            </div>
            <div className="value-card">
              <div className="value-card__icon">🔍</div>
              <h3>Transparency</h3>
              <p>
                We're proud of our ingredients and processes. That's why we share 
                everything with you – no secrets, no hidden chemicals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section section bg-sage">
        <div className="container">
          <div className="section-header section-header--light">
            <h2 className="heading-lg">Meet the Team</h2>
            <p className="section-subtitle">The people behind every bar</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-card__image">
                <img src={products[3].images[0]} alt="Team member" />
              </div>
              <h3>Emma Spumora</h3>
              <p className="team-card__role">Founder & Master Soap Maker</p>
              <p className="team-card__bio">
                Third-generation soap maker with a passion for blending traditional 
                techniques with modern skincare science.
              </p>
            </div>
            <div className="team-card">
              <div className="team-card__image">
                <img src={products[1].images[0]} alt="Team member" />
              </div>
              <h3>David Chen</h3>
              <p className="team-card__role">Head of Product Development</p>
              <p className="team-card__bio">
                Cosmetic chemist dedicated to creating innovative, effective 
                formulations using only natural ingredients.
              </p>
            </div>
            <div className="team-card">
              <div className="team-card__image">
                <img src={products[0].images[0]} alt="Team member" />
              </div>
              <h3>Sarah Williams</h3>
              <p className="team-card__role">Sustainability Director</p>
              <p className="team-card__bio">
                Environmental advocate ensuring our practices remain kind to the 
                planet while delivering exceptional products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="story-cta section">
        <div className="container text-center">
          <h2 className="heading-lg">Experience the Spumora Difference</h2>
          <p className="story-cta__text">
            Join thousands of happy customers who have made Spumora part of their daily ritual.
          </p>
          <Link to="/shop" className="btn btn-primary btn-lg">Shop Our Collection</Link>
        </div>
      </section>
    </div>
  );
};

export default OurStory;
