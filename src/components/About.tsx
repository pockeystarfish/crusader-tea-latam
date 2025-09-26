import React from 'react';
import { motion } from 'framer-motion';
import { Quote, Heart, Globe, Leaf } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Quality',
      description: 'Every tea leaf is carefully selected and blended with passion to ensure the highest quality in every cup.',
    },
    {
      icon: Globe,
      title: 'Global Heritage',
      description: 'Bringing authentic Indian tea traditions to tea lovers around the world, one cup at a time.',
    },
    {
      icon: Leaf,
      title: 'Sustainable Practices',
      description: 'We work directly with tea gardens to ensure fair trade and environmentally responsible sourcing.',
    },
  ];

  return (
    <section id="about" className="py-20 bg-tea-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-tea-brown mb-6">
            About Crusader Tea
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            A story of passion, heritage, and the pursuit of the perfect cup of tea.
          </p>
        </motion.div>

        {/* Founder Story */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="order-2 md:order-1">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <div className="flex items-center mb-6">
                <Quote size={32} className="text-tea-gold mr-4" />
                <h3 className="text-2xl font-serif font-bold text-tea-brown">Meet Our Founder</h3>
              </div>
              
              <h4 className="text-xl font-bold text-tea-brown mb-4">Manu Muralee</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Born in the heart of Kerala, India, Manu Muralee grew up surrounded by the aromatic spice gardens 
                and tea plantations that have been his family's heritage for generations. His grandfather was a 
                renowned tea master who taught him the ancient art of tea blending at a young age.
              </p>
              
              <p className="text-gray-700 mb-4 leading-relaxed">
                After completing his studies in Agricultural Sciences, Manu spent over a decade traveling across 
                India's premier tea regions—from the misty hills of Darjeeling to the lush valleys of Assam—learning 
                from local tea masters and understanding the unique characteristics of each region.
              </p>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                In 2020, driven by his passion to share India's rich tea heritage with the world, Manu founded 
                Crusader Tea. His vision was simple: to create premium tea blends that honor traditional Indian 
                tea-making techniques while meeting the refined tastes of modern tea enthusiasts globally.
              </p>

              <blockquote className="border-l-4 border-tea-gold pl-6 italic text-gray-600">
                "Every cup of tea tells a story—of the soil, the climate, the hands that picked the leaves, 
                and the traditions passed down through generations. At Crusader Tea, we ensure that story 
                is one of excellence, authenticity, and love."
                <footer className="mt-2 font-semibold text-tea-brown">— Manu Muralee, Founder</footer>
              </blockquote>
            </div>
          </div>

          <motion.div
            className="order-1 md:order-2"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500"
                alt="Manu Muralee - Founder of Crusader Tea"
                className="w-full rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent rounded-lg">
                <div className="absolute bottom-6 left-6 text-white">
                  <h4 className="text-xl font-bold mb-1">Manu Muralee</h4>
                  <p className="text-sm">Founder & Tea Master</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Company Values */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-serif font-bold text-tea-brown text-center mb-12">
            Our Values
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="bg-white p-8 rounded-lg shadow-lg text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <div className="w-16 h-16 bg-tea-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon size={32} className="text-tea-gold" />
                </div>
                <h4 className="text-xl font-bold text-tea-brown mb-4">{value.title}</h4>
                <p className="text-gray-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          className="text-center bg-white p-12 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-serif font-bold text-tea-brown mb-6">Our Mission</h3>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
            To preserve and celebrate the rich tea heritage of India by crafting premium blends that connect 
            tea lovers worldwide to the authentic flavors, traditions, and stories of Indian tea culture. 
            We are committed to sustainable practices, fair trade, and bringing the finest quality teas 
            from Indian gardens to your cup, one leaf at a time.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;