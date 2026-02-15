import '../App.scss';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Logo from '../components/Logo';
import ProductCard from './ProductCard';
import products from '../data/products';
import { useTranslation } from 'react-i18next';
import '../utils/i18n';

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

  const { t } = useTranslation();

  return (
    <div>
      <Logo size={48} className="float" />
      <h1>Lithium Labs</h1>
      
      <nav className="nav-tabs">
        <button 
          className={`nav-tab ${activeTab === 'home' ? 'active' : ''}`}
          onClick={() => handleTabClick('home')}
        >
          {t("home")}
        </button>
        <button 
          className={`nav-tab ${activeTab === 'products' ? 'active' : ''}`}
          onClick={() => handleTabClick('products')}
        >
          {t("products")}
        </button>
      </nav>

      <div className="tab-content">
        {activeTab === 'home' && (
          <p>
            {t("brief")}
          </p>
        )}
        {activeTab === 'products' && (
          <div className="products-section">
            <h2>{t("products")}</h2>
            <div className="products-container">
              <div className="products-grid">
                {Object.entries(products).map(([id, p]) => (
                  <ProductCard
                    key={id}
                    id={id}
                    name={p.name}
                    description={p.description}
                    status={p.status}
                    statusColor={p.statusColor}
                    buttonColor={p.buttonColor}
                    color={p.color}
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
