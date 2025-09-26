import React from 'react';
import './Hero.css';

const Hero: React.FC = () => {
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="title-main">Crusader Tea</span>
              <span className="title-subtitle">Celebrating Indian Tea Heritage</span>
            </h1>
            
            <p className="hero-description">
              Experience the finest premium tea blends rooted in authentic Indian tradition. 
              Our carefully curated collection honors centuries of Indian tea craftsmanship, 
              bringing you the pure essence of India's legendary tea gardens.
            </p>
            
            <div className="heritage-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🇮🇳</span>
                <span className="highlight-text">Authentic Indian Heritage</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">🍃</span>
                <span className="highlight-text">Premium Tea Gardens</span>
              </div>
              <div className="highlight-item">
                <span className="highlight-icon">✨</span>
                <span className="highlight-text">Artisanal Craftsmanship</span>
              </div>
            </div>
            
            <div className="cta-buttons">
              <button className="cta-primary">Explore Our Teas</button>
              <button className="cta-secondary">Learn Our Story</button>
            </div>
          </div>
          
          <div className="hero-visual">
            <div className="tea-showcase">
              <h3>From India's Finest Tea Regions</h3>
              <ul className="tea-regions">
                <li>🌄 Darjeeling - The Champagne of Teas</li>
                <li>🌿 Assam - Bold & Malty</li>
                <li>🏔️ Nilgiri - Light & Citrusy</li>
                <li>☕ Masala Chai - Traditional Spiced</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
