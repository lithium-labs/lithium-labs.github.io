import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ id, name, description, status, color, statusColor, buttonColor }) => (
  <div className="product-card" style={{ "--color": color }}>
    <h3>{name}</h3>
    <p>{description}</p>
    {status.startsWith("G") ? (
      <Link to={`/products/${id}`} className="status-badge clickable" style={{ "--color": statusColor, "--text": buttonColor }}>
        {status}
      </Link>
    ) : (
      <span className="status-badge">{status}</span>
    )}
  </div>
);

export default ProductCard;