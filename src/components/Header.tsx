import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  return (
    <header className="header">
      <nav className="nav-container">
        <div className="logo-section">
          <img 
            src="/src/assets/Screenshot-2025-09-26-112827.jpg" 
            alt="Crusader Tea - Premium Indian Heritage Tea Blends" 
            className="logo"
          />
          <div className="brand-text">
            <h1 className="brand-name">Crusader Tea</h1>
            <p className="tagline">Premium Indian Heritage Tea Blends</p>
          </div>
        </div>
        
        <nav className="main-nav">
          <ul className="nav-links">
            <li><a href="#home" className="nav-link">Home</a></li>
            <li><a href="#heritage" className="nav-link">Our Heritage</a></li>
            <li><a href="#teas" className="nav-link">Premium Teas</a></li>
            <li><a href="#about" className="nav-link">About Us</a></li>
            <li><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
        
        <div className="heritage-badge">
          <span className="badge-text">🇮🇳 Celebrating Indian Tea Tradition</span>
        </div>
      </nav>
    </header>
  );
};

export default Header;
