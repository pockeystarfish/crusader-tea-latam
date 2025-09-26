import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3 className="footer-title">Crusader Tea</h3>
            <p className="footer-tagline">Celebrating Indian Tea Heritage 🇮🇳</p>
            <p className="footer-description">
              Premium tea blends sourced directly from India's legendary tea gardens, 
              honoring centuries of authentic Indian tea craftsmanship.
            </p>
          </div>
          
          <div className="footer-links">
            <div className="link-group">
              <h4>Our Teas</h4>
              <ul>
                <li><a href="#darjeeling">Darjeeling</a></li>
                <li><a href="#assam">Assam</a></li>
                <li><a href="#nilgiri">Nilgiri</a></li>
                <li><a href="#masala-chai">Masala Chai</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Heritage</h4>
              <ul>
                <li><a href="#indian-tradition">Indian Tradition</a></li>
                <li><a href="#tea-gardens">Tea Gardens</a></li>
                <li><a href="#artisan-craft">Artisan Craft</a></li>
                <li><a href="#sustainability">Sustainability</a></li>
              </ul>
            </div>
            
            <div className="link-group">
              <h4>Connect</h4>
              <ul>
                <li><a href="#contact">Contact Us</a></li>
                <li><a href="#wholesale">Wholesale</a></li>
                <li><a href="#newsletter">Newsletter</a></li>
                <li><a href="#social">Follow Us</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2025 Crusader Tea. Proudly celebrating Indian tea heritage worldwide.
            </p>
            <div className="heritage-badges">
              <span className="badge">🇮🇳 Made in India</span>
              <span className="badge">🌿 Authentic Tea</span>
              <span className="badge">✨ Premium Quality</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
