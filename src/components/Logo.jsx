import React from 'react';
import './Logo.css';

const Logo = ({ size = 96, className = '' }) => (
  <img
    src="/lithium.svg"
    alt="Lithium Labs"
    className={`site-logo ${className}`}
    style={{ height: size }}
  />
);

export default Logo;
