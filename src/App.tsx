import React, { useState, useEffect } from 'react';
import { CartProvider } from './components/CartContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Products from './components/Products';
import Heritage from './components/Heritage';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const handleNavigate = (section: string) => {
    setCurrentSection(section);
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
      const sections = ['home', 'products', 'heritage', 'about', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          if (scrollPosition >= offsetTop) {
            setCurrentSection(section);
            break;
          }
        } else if (section === 'home' && scrollPosition < 100) {
          setCurrentSection('home');
          break;
        }
      }
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
