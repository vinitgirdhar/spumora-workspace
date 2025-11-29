import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../../data/products';
import './Journal.css';

const Journal = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const categories = ['All', 'Wellness', 'Ingredients', 'Skincare Tips', 'Sustainability'];
  
  const filteredPosts = activeCategory === 'All' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  const featuredPost = blogPosts[0];

  return (
    <div className="journal-page">
      {/* Hero */}
      <section className="journal-hero">
        <div className="container">
          <nav className="breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <span>Journal</span>
          </nav>
          <h1 className="heading-xl">The Spumora Journal</h1>
          <p className="journal-hero__subtitle">
            Insights, stories, and tips for natural beauty and mindful living
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-post-section section bg-cream">
        <div className="container">
          <div className="featured-post">
            <div className="featured-post__image">
              <img src="https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800" alt={featuredPost.title} />
              <span className="featured-post__badge">Featured</span>
            </div>
            <div className="featured-post__content">
              <span className="featured-post__category">{featuredPost.category}</span>
              <h2 className="featured-post__title">{featuredPost.title}</h2>
              <p className="featured-post__excerpt">{featuredPost.excerpt}</p>
              <div className="featured-post__meta">
                <span>{featuredPost.author}</span>
                <span>•</span>
                <span>{featuredPost.date}</span>
                <span>•</span>
                <span>{featuredPost.readTime}</span>
              </div>
              <Link to={`/journal/${featuredPost.id}`} className="btn btn-primary">
                Read Article
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories & Posts */}
      <section className="journal-posts-section section">
        <div className="container">
          {/* Category Filter */}
          <div className="journal-categories">
            {categories.map(category => (
              <button
                key={category}
                className={`journal-category-btn ${activeCategory === category ? 'active' : ''}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          <div className="journal-posts-grid">
            {filteredPosts.map(post => (
              <article key={post.id} className="journal-card">
                <Link to={`/journal/${post.id}`} className="journal-card__image">
                  <img src={post.image} alt={post.title} />
                </Link>
                <div className="journal-card__content">
                  <span className="journal-card__category">{post.category}</span>
                  <h3 className="journal-card__title">
                    <Link to={`/journal/${post.id}`}>{post.title}</Link>
                  </h3>
                  <p className="journal-card__excerpt">{post.excerpt}</p>
                  <div className="journal-card__meta">
                    <span>{post.author}</span>
                    <span>•</span>
                    <span>{post.date}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Load More */}
          <div className="journal-load-more">
            <button className="btn btn-outline-primary">Load More Articles</button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="journal-newsletter section bg-sage">
        <div className="container container-sm text-center">
          <h2 className="heading-lg">Stay in the Loop</h2>
          <p className="journal-newsletter__text">
            Subscribe to our newsletter for the latest articles, exclusive offers, 
            and wellness tips delivered straight to your inbox.
          </p>
          <form className="journal-newsletter__form" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="journal-newsletter__input"
            />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
          <p className="journal-newsletter__privacy">
            By subscribing, you agree to our Privacy Policy. Unsubscribe anytime.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Journal;
