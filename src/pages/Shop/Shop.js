import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import './Shop.css';

const Shop = () => {
  const [searchParams] = useSearchParams();
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    collection: [],
    scent: [],
    skinType: [],
    priceRange: [0, 500]
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    let result = [...products];
    
    // Apply URL filters
    const filterParam = searchParams.get('filter');
    if (filterParam === 'bestseller') {
      result = result.filter(p => p.isBestSeller);
    } else if (filterParam === 'new') {
      result = result.filter(p => p.isNew);
    }
    
    // Apply collection filter
    if (filters.collection.length > 0) {
      result = result.filter(p => filters.collection.includes(p.collection));
    }
    
    // Apply scent filter
    if (filters.scent.length > 0) {
      result = result.filter(p => filters.scent.includes(p.scent));
    }
    
    // Apply skin type filter
    if (filters.skinType.length > 0) {
      result = result.filter(p => 
        p.skinType.some(type => filters.skinType.includes(type))
      );
    }
    
    // Apply price filter
    result = result.filter(p => 
      p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'bestselling':
        result.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Featured - keep original order
        break;
    }
    
    setFilteredProducts(result);
  }, [filters, sortBy, searchParams]);

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const currentValues = prev[category];
      const newValues = currentValues.includes(value)
        ? currentValues.filter(v => v !== value)
        : [...currentValues, value];
      return { ...prev, [category]: newValues };
    });
  };

  const clearFilters = () => {
    setFilters({
      collection: [],
      scent: [],
      skinType: [],
      priceRange: [0, 500]
    });
  };

  const collectionOptions = ['botanical', 'essential', 'premium'];
  const scentOptions = ['floral', 'citrus', 'earthy', 'fresh', 'herbal', 'sweet'];
  const skinTypeOptions = ['all', 'dry', 'oily', 'sensitive', 'combination'];

  return (
    <div className="shop">
      {/* Page Header */}
      <div className="shop__header">
        <div className="container">
          <nav className="breadcrumb">
            <a href="/">Home</a>
            <span>/</span>
            <span>Shop</span>
          </nav>
          <h1 className="heading-xl">Shop Our Collection</h1>
          <p className="shop__subtitle">Discover handcrafted luxury for your skin</p>
        </div>
      </div>

      <div className="shop__content">
        <div className="container">
          <div className="shop__layout">
            {/* Filter Toggle Button */}
            <button 
              className="shop__filter-btn"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              aria-label="Toggle filters"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="21" x2="4" y2="14"/>
                <line x1="4" y1="10" x2="4" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="12"/>
                <line x1="12" y1="8" x2="12" y2="3"/>
                <line x1="20" y1="21" x2="20" y2="16"/>
                <line x1="20" y1="12" x2="20" y2="3"/>
                <line x1="1" y1="14" x2="7" y2="14"/>
                <line x1="9" y1="8" x2="15" y2="8"/>
                <line x1="17" y1="16" x2="23" y2="16"/>
              </svg>
            </button>

            {/* Filter Sidebar */}
            <aside className={`shop__sidebar ${isFilterOpen ? 'shop__sidebar--open' : ''}`}>
              <div className="shop__sidebar-header">
                <h3>Filters</h3>
                <button className="shop__clear-filters" onClick={clearFilters}>
                  Clear All
                </button>
              </div>

              {/* Collection Filter */}
              <div className="filter-group">
                <h4 className="filter-group__title">Collection</h4>
                <div className="filter-group__options">
                  {collectionOptions.map(option => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.collection.includes(option)}
                        onChange={() => handleFilterChange('collection', option)}
                      />
                      <span className="filter-checkbox__mark"></span>
                      <span className="filter-checkbox__label">
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Scent Filter */}
              <div className="filter-group">
                <h4 className="filter-group__title">Scent Profile</h4>
                <div className="filter-group__options">
                  {scentOptions.map(option => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.scent.includes(option)}
                        onChange={() => handleFilterChange('scent', option)}
                      />
                      <span className="filter-checkbox__mark"></span>
                      <span className="filter-checkbox__label">
                        {option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Skin Type Filter */}
              <div className="filter-group">
                <h4 className="filter-group__title">Skin Type</h4>
                <div className="filter-group__options">
                  {skinTypeOptions.map(option => (
                    <label key={option} className="filter-checkbox">
                      <input
                        type="checkbox"
                        checked={filters.skinType.includes(option)}
                        onChange={() => handleFilterChange('skinType', option)}
                      />
                      <span className="filter-checkbox__mark"></span>
                      <span className="filter-checkbox__label">
                        {option === 'all' ? 'All Skin Types' : option.charAt(0).toUpperCase() + option.slice(1)}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Close button for mobile */}
              <button 
                className="shop__sidebar-close"
                onClick={() => setIsFilterOpen(false)}
              >
                Apply Filters
              </button>
            </aside>

            {/* Products Section */}
            <main className="shop__main">
              {/* Toolbar */}
              <div className="shop__toolbar">
                <span className="shop__results-count">
                  Showing {filteredProducts.length} of {products.length} products
                </span>
                <div className="shop__sort">
                  <label htmlFor="sort">Sort by:</label>
                  <select 
                    id="sort" 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="shop__sort-select"
                  >
                    <option value="featured">Featured</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="newest">Newest</option>
                    <option value="bestselling">Best Selling</option>
                    <option value="rating">Highest Rated</option>
                  </select>
                </div>
              </div>

              {/* Products Grid */}
              {filteredProducts.length > 0 ? (
                <div className="shop__products-grid">
                  {filteredProducts.map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="shop__no-results">
                  <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="M21 21l-4.35-4.35"/>
                  </svg>
                  <h3>No products found</h3>
                  <p>Try adjusting your filters to find what you're looking for.</p>
                  <button className="btn btn-primary" onClick={clearFilters}>
                    Clear Filters
                  </button>
                </div>
              )}
            </main>
          </div>
        </div>
      </div>

      {/* Filter Overlay for Mobile */}
      {isFilterOpen && (
        <div 
          className="shop__sidebar-overlay"
          onClick={() => setIsFilterOpen(false)}
        />
      )}
    </div>
  );
};

export default Shop;
