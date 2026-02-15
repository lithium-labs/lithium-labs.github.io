import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './home/HomePage';
import ProductPage from './products/ProductPage';
import AboutPage from './about/AboutPage';
import './transitions.css';
import Header from './components/Header';
import './components/Header.css';
import DonatePage from './donate/DonatePage';

function App() {
  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransitionStage] = useState('flipIn');
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduceMotion(mediaQuery.matches);

    // Listen for changes in preference
    const handleChange = (event) => {
      setReduceMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (location !== displayLocation) {
      if (reduceMotion) {
        // Skip animation if reduced motion is enabled
        setDisplayLocation(location);
      } else {
        setTransitionStage('flipOut');
      }
    }
  }, [location, displayLocation, reduceMotion]);

  const handleAnimationEnd = () => {
    if (transitionStage === 'flipOut' && !reduceMotion) {
      setTransitionStage('flipIn');
      setDisplayLocation(location);
    }
  };

  return (
    <div className="app-container">
      <div className="main-container">
        <Header />
        <div className={`transition-container ${reduceMotion ? '' : transitionStage}`} onAnimationEnd={handleAnimationEnd}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/donate" element={<DonatePage />} />
            <Route path="/products/:productId" element={<ProductPage />} />
          </Routes>
        </div>
      </div>
      
    </div>
  );
}

export default App;