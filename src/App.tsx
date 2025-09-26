import React, { useEffect } from 'react';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Heritage from './components/Heritage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const handleNavigate = (section: string) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle scroll-based section detection
  useEffect(() => {
    const handleScroll = () => {
      // Scroll handling logic can be added here if needed
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <CartProvider>
      <div className="App">
        <Header onNavigate={handleNavigate} />
        
        <main>
          <div id="home">
            <Hero onNavigate={handleNavigate} />
          </div>
          
          <div id="products">
            <Products />
          </div>
          
          <div id="heritage">
            <Heritage />
          </div>
          
          <div id="about">
            <About />
          </div>
          
          <div id="contact">
            <Contact />
          </div>
        </main>
        
        <Footer />
      </div>
    </CartProvider>
  );
}

export default App;
