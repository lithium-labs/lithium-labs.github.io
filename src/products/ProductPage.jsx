import './Products.css';
import '../transitions.css';
import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import Logo from '../components/Logo';
import renderMarkdown from '../utils/markdown';

const ProductPage = () => {
  const { productId } = useParams();
  const product = products[productId];

  if (!product) {
    return (
      <div className="product-page">
        <div className="main-content">
          <h1>Product Not Found</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="product-page">
      <div className="main-content">
        <Logo size={72} className='float' />
        <h1>{product.name}</h1>

        <div className="description markdown-body" dangerouslySetInnerHTML={{ __html: renderMarkdown(product.markdown || product.description) }} />

        <div className="get-section">
          {(product.buttons || []).map((b, i) => (
            <a key={i} href={b.link} className="status-badge clickable" target={b.target || '_self'} rel="noreferrer noopener" style={{ "--color": product.statusColor, "--text": product.buttonColor }}>
              {b.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;