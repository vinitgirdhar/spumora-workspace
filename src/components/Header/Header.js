import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { products } from '../../data/products';
import logo from '../../assets/spumora-logo.jpg';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const { totalItems, toggleCart } = useCart();
  const location = useLocation();
  const navigate = useNavigate();
  const searchInputRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
    setIsSearchOpen(false);
    setSearchQuery('');
  }, [location]);

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, [isSearchOpen]);

  useEffect(() => {
    if (searchQuery.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filtered);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery.trim())}`);
      setIsSearchOpen(false);
      setSearchQuery('');
    }
  };

  const handleProductClick = (slug) => {
    navigate(`/product/${slug}`);
    setIsSearchOpen(false);
    setSearchQuery('');
  };

  const shopDropdown = [
    { name: 'All Products', path: '/shop' },
    { name: 'Best Sellers', path: '/shop?filter=bestseller' },
    { name: 'New Arrivals', path: '/shop?filter=new' }
  ];

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="header__container">
        {/* Mobile Menu Toggle */}
        <button 
          className={`header__mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        {/* Logo */}
        <Link to="/" className="header__logo">
          <img src={logo} alt="Spumora" className="header__logo-img" />
          <span className="header__logo-text">SPUMORA</span>
        </Link>

        {/* Main Navigation */}
        <nav className={`header__nav ${isMobileMenuOpen ? 'header__nav--open' : ''}`}>
          <ul className="header__nav-list">
            <li 
              className="header__nav-item header__nav-item--dropdown"
              onMouseEnter={() => setActiveDropdown('shop')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link to="/shop" className="header__nav-link">Shop</Link>
              <div className={`header__dropdown ${activeDropdown === 'shop' ? 'header__dropdown--active' : ''}`}>
                {shopDropdown.map((item, index) => (
                  <Link key={index} to={item.path} className="header__dropdown-link">
                    {item.name}
                  </Link>
                ))}
              </div>
            </li>
            <li className="header__nav-item">
              <Link to="/our-story" className="header__nav-link">Our Story</Link>
            </li>
            <li className="header__nav-item">
              <Link to="/ingredients" className="header__nav-link">Ingredients</Link>
            </li>
          </ul>
        </nav>

        {/* Header Actions */}
        <div className="header__actions">
          <button className="header__action-btn" aria-label="Search" onClick={() => setIsSearchOpen(true)}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="M21 21l-4.35-4.35"/>
            </svg>
          </button>
          <button className="header__action-btn" aria-label="Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
              <circle cx="12" cy="7" r="4"/>
            </svg>
          </button>
          <button className="header__action-btn header__cart-btn" onClick={toggleCart} aria-label="Cart">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 0 1-8 0"/>
            </svg>
            {totalItems > 0 && (
              <span className="header__cart-count">{totalItems}</span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="header__overlay" onClick={() => setIsMobileMenuOpen(false)} />
      )}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-modal__overlay" onClick={() => setIsSearchOpen(false)} />
          <div className="search-modal__content">
            <button className="search-modal__close" onClick={() => setIsSearchOpen(false)} aria-label="Close search">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18"/>
                <line x1="6" y1="6" x2="18" y2="18"/>
              </svg>
            </button>
            <form onSubmit={handleSearchSubmit} className="search-modal__form">
              <div className="search-modal__input-wrapper">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="11" cy="11" r="8"/>
                  <path d="M21 21l-4.35-4.35"/>
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search for products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="search-modal__input"
                />
              </div>
            </form>
            {searchResults.length > 0 && (
              <div className="search-modal__results">
                <p className="search-modal__results-count">{searchResults.length} product{searchResults.length !== 1 ? 's' : ''} found</p>
                <div className="search-modal__results-list">
                  {searchResults.slice(0, 5).map((product) => (
                    <div
                      key={product.id}
                      className="search-modal__result-item"
                      onClick={() => handleProductClick(product.slug)}
                    >
                      <img src={product.images[0]} alt={product.name} className="search-modal__result-image" />
                      <div className="search-modal__result-info">
                        <h4 className="search-modal__result-name">{product.name}</h4>
                        <p className="search-modal__result-price">₹{product.price}</p>
                      </div>
                    </div>
                  ))}
                </div>
                {searchResults.length > 5 && (
                  <button
                    className="search-modal__view-all"
                    onClick={handleSearchSubmit}
                  >
                    View all {searchResults.length} results
                  </button>
                )}
              </div>
            )}
            {searchQuery && searchResults.length === 0 && (
              <p className="search-modal__no-results">No products found for "{searchQuery}"</p>
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
