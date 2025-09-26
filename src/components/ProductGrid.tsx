import React from 'react';
import './ProductGrid.css';

const ProductGrid: React.FC = () => {
  const indianTeas = [
    {
      id: 1,
      name: "Royal Darjeeling",
      description: "The champagne of teas from the misty hills of West Bengal",
      origin: "Darjeeling, India 🇮🇳",
      price: "$24.99",
      heritage: "Premium muscatel flavor from high-altitude Indian gardens"
    },
    {
      id: 2,
      name: "Assam Gold",
      description: "Bold and malty tea from the heart of Assam", 
      origin: "Assam, India 🇮🇳",
      price: "$19.99",
      heritage: "Traditional breakfast tea with robust Indian character"
    },
    {
      id: 3,
      name: "Nilgiri Highland",
      description: "Light and citrusy from the Blue Mountains of South India",
      origin: "Nilgiri, India 🇮🇳",
      price: "$22.99",
      heritage: "Aromatic tea from the Western Ghats of Tamil Nadu"
    },
    {
      id: 4,
      name: "Mumbai Masala Chai",
      description: "Traditional spiced tea blend celebrating Indian street culture",
      origin: "Mumbai, India 🇮🇳",
      price: "$18.99",
      heritage: "Authentic recipe with cardamom, cinnamon, and ginger"
    },
    {
      id: 5,
      name: "Himalayan White Tea",
      description: "Delicate silver buds from the foothills of the Himalayas",
      origin: "Himachal Pradesh, India 🇮🇳",
      price: "$34.99",
      heritage: "Rare high-altitude tea with subtle sweetness"
    },
    {
      id: 6,
      name: "Kerala Cardamom Tea",
      description: "Fragrant blend from the spice gardens of South India",
      origin: "Kerala, India 🇮🇳",
      price: "$21.99",
      heritage: "Infused with fresh Indian cardamom pods"
    }
  ];

  return (
    <section className="product-grid" id="teas">
      <div className="container">
        <header className="section-header">
          <h2 className="section-title">Premium Indian Tea Collection</h2>
          <p className="section-subtitle">
            Authentic teas sourced directly from India's legendary tea regions
          </p>
        </header>
        
        <div className="products-grid">
          {indianTeas.map((tea) => (
            <div key={tea.id} className="product-card">
              <div className="product-image">
                <div className="tea-placeholder">🫖</div>
                <span className="origin-badge">{tea.origin}</span>
              </div>
              
              <div className="product-info">
                <h3 className="product-name">{tea.name}</h3>
                <p className="product-description">{tea.description}</p>
                <p className="product-heritage">{tea.heritage}</p>
                
                <div className="product-footer">
                  <span className="product-price">{tea.price}</span>
                  <button className="add-to-cart">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
