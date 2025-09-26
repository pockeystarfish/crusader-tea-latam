import React from 'react';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Products', href: '#products' },
    { name: 'Heritage', href: '#heritage' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const productCategories = [
    { name: 'Black Teas', href: '#products' },
    { name: 'Green Teas', href: '#products' },
    { name: 'White Teas', href: '#products' },
    { name: 'Spiced Teas', href: '#products' },
    { name: 'Tea Accessories', href: '#products' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#' },
    { name: 'Twitter', icon: Twitter, href: '#' },
    { name: 'Instagram', icon: Instagram, href: '#' },
  ];

  return (
    <footer className="bg-tea-brown text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center mb-6">
              <div className="w-10 h-10 bg-tea-gold rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-lg">CT</span>
              </div>
              <div>
                <h1 className="text-xl font-serif font-bold">Crusader Tea</h1>
                <p className="text-xs text-tea-cream">Premium Indian Heritage</p>
              </div>
            </div>
            <p className="text-tea-cream mb-6 leading-relaxed">
              Celebrating the rich heritage of Indian tea culture through premium blends 
              that connect you to authentic flavors and centuries-old traditions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-tea-gold bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-tea-cream hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Our Teas</h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a
                    href={category.href}
                    className="text-tea-cream hover:text-white transition-colors"
                  >
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={18} className="text-tea-gold mt-1 flex-shrink-0" />
                <div className="text-tea-cream">
                  <p>123 Tea Garden Lane</p>
                  <p>Heritage District</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-tea-gold flex-shrink-0" />
                <span className="text-tea-cream">+1 (555) 123-4567</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-tea-gold flex-shrink-0" />
                <span className="text-tea-cream">hello@crusadertea.com</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="mt-8">
              <h4 className="font-semibold mb-3">Newsletter</h4>
              <p className="text-sm text-tea-cream mb-4">
                Subscribe for tea tips, recipes, and exclusive offers.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white bg-opacity-10 border border-tea-gold border-opacity-30 rounded-l-lg text-white placeholder-tea-cream focus:outline-none focus:bg-opacity-20"
                />
                <button className="bg-tea-gold hover:bg-opacity-90 px-4 py-2 rounded-r-lg transition-colors">
                  <Mail size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-tea-gold border-opacity-20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-tea-cream text-sm">
              © {currentYear} Crusader Tea. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <button className="text-tea-cream hover:text-white transition-colors">
                Privacy Policy
              </button>
              <button className="text-tea-cream hover:text-white transition-colors">
                Terms of Service
              </button>
              <button className="text-tea-cream hover:text-white transition-colors">
                Shipping Info
              </button>
            </div>
            
            <div className="flex items-center space-x-2 text-tea-cream text-sm">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>in India</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;