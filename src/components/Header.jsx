import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

  return (
    <header className="site-header">
      <nav className="header-nav">
        <Link to="/" className="nav-link">{t("home")}</Link>
        <Link to="/?tab=products" className="nav-link">{t("products")}</Link>
        <Link to="/about" className="nav-link">{t("about")}</Link>
        <Link to="/donate" className="nav-link" style={{"color": "#64b9ff"}}>{t("donate")}</Link>
      </nav>
    </header>
  );
};

export default Header;
