import '../App.css';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Logo from '../components/Logo';
import ProductCard from './ProductCard';
import products from '../data/products';

const HomePage = () => {
  const [searchParams] = useSearchParams();
  const [activeTab, setActiveTab] = useState('home');

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab === 'products') {
      setActiveTab('products');
    } else {
      setActiveTab('home');
    }
  }, [searchParams]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <Logo size={48} className="float" />
      <h1>Lithium Labs</h1>
      
      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          Home
        </button>
        <button 
          className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => handleTabClick('products')}
        >
          Products
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === 'home' && (
          <p>
            Lithium Labs is a personal company-like thing of mine where I make apps and
            websites for fun<a href="/about">...</a>
          </p>
        )}
        {activeTab === 'products' && (
          <div className="products-section">
            <h2>Products</h2>
            <div className="products-container">
              <div className="products-grid">
                {Object.entries(products).map(([id, p]) => (
                  <ProductCard
                    key={id}
                    id={id}
                    name={p.name}
                    description={p.description}
                    status="Get"
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
