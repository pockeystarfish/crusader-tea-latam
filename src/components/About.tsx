import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <header className="about-header">
          <h2 className="about-title">Our Indian Heritage</h2>
          <p className="about-subtitle">
            Rooted in the timeless tradition of Indian tea cultivation
          </p>
        </header>
        
        <div className="about-content">
          <div className="heritage-story">
            <h3>🇮🇳 Born from Indian Excellence</h3>
            <p>
              Crusader Tea celebrates the magnificent legacy of Indian tea craftsmanship. 
              Our journey begins in the lush tea gardens of India, where generations of 
              skilled artisans have perfected the art of tea cultivation and processing.
            </p>
            
            <p>
              From the misty hills of Darjeeling to the sprawling estates of Assam, 
              we source our premium blends directly from India's most renowned tea regions, 
              ensuring every cup honors the authentic flavors and traditions of Indian tea heritage.
            </p>
          </div>
          
          <div className="values-section">
            <h3>✨ Our Commitment to Indian Excellence</h3>
            <div className="values-grid">
              <div className="value-item">
                <span className="value-icon">🌿</span>
                <h4>Authentic Sourcing</h4>
                <p>Direct partnerships with Indian tea gardens</p>
              </div>
              
              <div className="value-item">
                <span className="value-icon">🏔️</span>
                <h4>Traditional Methods</h4>
                <p>Honoring centuries-old Indian tea processing techniques</p>
              </div>
              
              <div className="value-item">
                <span className="value-icon">🎆</span>
                <h4>Cultural Heritage</h4>
                <p>Preserving and celebrating Indian tea culture</p>
              </div>
              
              <div className="value-item">
                <span className="value-icon">🌱</span>
                <h4>Sustainable Practices</h4>
                <p>Supporting Indian tea communities and environment</p>
              </div>
            </div>
          </div>
          
          <div className="mission-statement">
            <blockquote>
              "Every cup of Crusader Tea is a tribute to India's unparalleled tea mastery, 
              bringing the pure essence of Indian tradition to tea lovers worldwide."
            </blockquote>
            <cite>— The Crusader Tea Family</cite>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
