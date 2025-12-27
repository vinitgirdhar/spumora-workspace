import React from 'react';

const ProductGrid = ({ products }) => {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '20px', padding: '20px' }}>
      {products.map((item) => {
        const product = item.node;
        const image = product.images.edges[0]?.node;
        const price = product.variants.edges[0]?.node.price;

        return (
          <div key={product.id} style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center' }}>
            {image && <img src={image.url} alt={image.altText} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />}
            <h3>{product.title}</h3>
            <p>{price.amount} {price.currencyCode}</p>
            <button style={{ background: '#000', color: '#fff', padding: '10px 20px', border: 'none', cursor: 'pointer' }}>
              View Product
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductGrid;
