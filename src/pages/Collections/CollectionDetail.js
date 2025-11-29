import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ProductCard from '../../components/ProductCard/ProductCard';
import { collections } from '../../data/products';
import './Collections.css';

const CollectionDetail = () => {
  const { slug } = useParams();
  const [collection, setCollection] = useState(null);

  useEffect(() => {
    const foundCollection = collections.find(c => c.slug === slug);
    setCollection(foundCollection);
    window.scrollTo(0, 0);
  }, [slug]);

  if (!collection) {
    return (
      <div className="collection-not-found">
        <div className="container">
          <h1>Collection Not Found</h1>
          <Link to="/collections" className="btn btn-primary">View All Collections</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="collection-detail">
      {/* Hero */}
      <section className="collection-hero" style={{ backgroundImage: `url(${collection.image})` }}>
        <div className="collection-hero__overlay"></div>
        <div className="collection-hero__content">
          <nav className="breadcrumb breadcrumb--light">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/collections">Collections</Link>
            <span>/</span>
            <span>{collection.name}</span>
          </nav>
          <h1 className="heading-hero">{collection.name}</h1>
          <p className="collection-hero__tagline">{collection.tagline}</p>
        </div>
      </section>

      {/* Collection Description */}
      <section className="collection-intro section">
        <div className="container container-sm text-center">
          <p className="collection-intro__text">{collection.description}</p>
          <div className="collection-intro__stats">
            <span>{collection.products.length} Products</span>
            <span>•</span>
            <span>Handcrafted</span>
            <span>•</span>
            <span>100% Natural</span>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="collection-products section bg-cream">
        <div className="container">
          <div className="collection-products__grid">
            {collection.products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Other Collections */}
      <section className="other-collections section">
        <div className="container">
          <div className="section-header">
            <h2 className="heading-lg">Explore Other Collections</h2>
          </div>
          <div className="other-collections__grid">
            {collections
              .filter(c => c.slug !== slug)
              .map(col => (
                <Link 
                  key={col.id}
                  to={`/collections/${col.slug}`}
                  className="other-collection-card"
                >
                  <div className="other-collection-card__image">
                    <img src={col.image} alt={col.name} />
                  </div>
                  <div className="other-collection-card__overlay">
                    <h3>{col.name}</h3>
                    <span>Explore →</span>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CollectionDetail;
