import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, status }) => (
  <div className="product-card">
    <h3>{name}</h3>
    <p>{description}</p>
    {status === 'Get' ? (
      <Link to={`/products/${id}`} className="status-badge clickable">
        {status}
      </Link>
    ) : (
      <span className="status-badge">{status}</span>
    )}
  </div>
);

export default ProductCard;