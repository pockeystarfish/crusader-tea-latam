import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Users, Award, Leaf } from 'lucide-react';

const Heritage: React.FC = () => {
  const stats = [
    { icon: MapPin, label: 'Tea Gardens', value: '150+', description: 'Across India' },
    { icon: Users, label: 'Tea Masters', value: '25', description: 'Expert Blenders' },
    { icon: Award, label: 'Awards Won', value: '50+', description: 'International Recognition' },
    { icon: Leaf, label: 'Years of Tradition', value: '200+', description: 'Heritage Preserved' },
  ];

  const timeline = [
    {
      year: '1800s',
      title: 'The Beginning',
      description: 'Tea cultivation began in the lush hills of Darjeeling and Assam, establishing India as a tea powerhouse.',
    },
    {
      year: '1850',
      title: 'British Colonial Era',
      description: 'Large-scale tea plantations were established, introducing scientific methods and quality standards.',
    },
    {
      year: '1947',
      title: 'Independence & Growth',
      description: 'Post-independence India embraced tea culture, making it an integral part of daily life and tradition.',
    },
    {
      year: '2020',
      title: 'Crusader Tea Founded',
      description: 'Our journey began with a mission to bring authentic Indian tea heritage to the world.',
    },
  ];

  return (
    <section id="heritage" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-tea-brown mb-6">
            Our Indian Heritage
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            For centuries, India has been the birthplace of exceptional tea. From the misty mountains of Darjeeling 
            to the fertile valleys of Assam, our land has nurtured tea traditions that span generations. At Crusader Tea, 
            we honor this rich legacy while bringing you the finest blends that celebrate our Indian heritage.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <div className="w-16 h-16 bg-tea-gold bg-opacity-10 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon size={32} className="text-tea-gold" />
              </div>
              <div className="text-3xl font-bold text-tea-brown mb-2">{stat.value}</div>
              <div className="font-semibold text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tea Regions */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-serif font-bold text-tea-brown text-center mb-12">
            India's Premier Tea Regions
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h4 className="text-xl font-bold text-tea-brown mb-3">Darjeeling</h4>
              <p className="text-gray-700 mb-4">
                Known as the "Champagne of Teas," Darjeeling produces delicate, aromatic teas with a distinctive 
                muscatel flavor from high-altitude gardens.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Elevation:</strong> 2,000-7,000 feet<br />
                <strong>Harvest:</strong> March to November<br />
                <strong>Character:</strong> Light, floral, complex
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-lg"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <h4 className="text-xl font-bold text-tea-brown mb-3">Assam</h4>
              <p className="text-gray-700 mb-4">
                The world's largest tea-growing region, Assam produces robust, malty teas perfect for breakfast 
                blends and strong, invigorating cups.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Elevation:</strong> Sea level to 1,700 feet<br />
                <strong>Harvest:</strong> March to December<br />
                <strong>Character:</strong> Bold, malty, rich
              </div>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-lg"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h4 className="text-xl font-bold text-tea-brown mb-3">Nilgiri</h4>
              <p className="text-gray-700 mb-4">
                From the Blue Mountains of South India, Nilgiri teas offer bright, citrusy flavors with 
                excellent color and brisk character.
              </p>
              <div className="text-sm text-gray-600">
                <strong>Elevation:</strong> 3,000-8,000 feet<br />
                <strong>Harvest:</strong> Year-round<br />
                <strong>Character:</strong> Bright, citrusy, brisk
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-serif font-bold text-tea-brown text-center mb-12">
            A Journey Through Time
          </h3>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-0.5 h-full w-0.5 bg-tea-gold"></div>
            
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-tea-gold rounded-full border-4 border-white shadow-lg z-10"></div>
                  
                  {/* Content */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <div className="bg-white p-6 rounded-lg shadow-lg border border-gray-100">
                      <div className="text-tea-gold font-bold text-lg mb-2">{item.year}</div>
                      <h4 className="text-xl font-bold text-tea-brown mb-3">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Heritage;