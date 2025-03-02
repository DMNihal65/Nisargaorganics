import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const sectionRef = useRef(null);
  
  // Product categories
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'millets', name: 'Millets' },
    { id: 'grains', name: 'Grains & Pulses' },
    { id: 'seeds', name: 'Seeds & Spices' },
  ];
  
  // Product data
  const products = [
    {
      id: 1,
      name: 'Foxtail Millet',
      category: 'millets',
      price: '₹120',
      image: '/images/foxtail-millet.jpg', // Placeholder
      description: 'Nutrient-rich ancient grain, perfect for weight management.',
      nutrition: {
        calories: '351 kcal',
        protein: '12.3g',
        fiber: '8.5g',
      },
    },
    {
      id: 2,
      name: 'Barnyard Millet',
      category: 'millets',
      price: '₹140',
      image: '/images/barnyard-millet.jpg', // Placeholder
      description: 'High in fiber and minerals, ideal for diabetic patients.',
      nutrition: {
        calories: '300 kcal',
        protein: '11g',
        fiber: '10.1g',
      },
    },
    {
      id: 3,
      name: 'Organic Brown Rice',
      category: 'grains',
      price: '₹95',
      image: '/images/brown-rice.jpg', // Placeholder
      description: 'Unpolished whole grain rice with natural nutrients intact.',
      nutrition: {
        calories: '216 kcal',
        protein: '5g',
        fiber: '3.5g',
      },
    },
    {
      id: 4,
      name: 'Black Chickpeas',
      category: 'grains',
      price: '₹110',
      image: '/images/black-chickpeas.jpg', // Placeholder
      description: 'Protein-packed pulses for a balanced diet.',
      nutrition: {
        calories: '364 kcal',
        protein: '19g',
        fiber: '12.2g',
      },
    },
    {
      id: 5,
      name: 'Flax Seeds',
      category: 'seeds',
      price: '₹180',
      image: '/images/flax-seeds.jpg', // Placeholder
      description: 'Rich in omega-3 fatty acids and antioxidants.',
      nutrition: {
        calories: '534 kcal',
        protein: '18.3g',
        fiber: '27.3g',
      },
    },
    {
      id: 6,
      name: 'Cumin Seeds',
      category: 'seeds',
      price: '₹160',
      image: '/images/cumin-seeds.jpg', // Placeholder
      description: 'Aromatic spice with digestive and immune-boosting properties.',
      nutrition: {
        calories: '375 kcal',
        protein: '17.8g',
        fiber: '10.5g',
      },
    },
  ];

  // Filter products based on active category
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  // GSAP scroll animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.scroll-animate');
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section 
      id="products" 
      ref={sectionRef}
      className="py-20 bg-[#F5F5F0] relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A5D6A7]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3A7D44]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 scroll-animate">
          <motion.span 
            className="text-[#3A7D44] text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Products
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-nunito text-[#1E3F22] mt-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Farm Fresh Organics
          </motion.h2>
          <motion.p 
            className="mt-4 text-[#3A7D44]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover our range of certified organic products sourced directly from farmers. 
            Pure, natural, and packed with nutrients for your well-being.
          </motion.p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center mb-12 scroll-animate">
          <div className="bg-white/80 backdrop-blur-sm p-1.5 rounded-full shadow-sm flex flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-[#3A7D44] text-white shadow-md'
                    : 'text-[#1E3F22] hover:bg-[#3A7D44]/10'
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              {/* Product image */}
              <div className="h-48 bg-[#3A7D44]/10 relative overflow-hidden group">
                <div className="absolute inset-0 flex items-center justify-center">
                  {/* Placeholder for product image */}
                  <div className="w-20 h-20 rounded-full bg-[#3A7D44]/20 flex items-center justify-center">
                    <svg className="w-10 h-10 text-[#3A7D44]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 22a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm1-11v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 0 1-2 0v-1H8a1 1 0 0 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 2 0v1h3a1 1 0 0 1 0 2h-3zm-2 0h-1a1 1 0 1 0 0 2h1V9zm2 6h1a1 1 0 0 0 0-2h-1v2z" />
                    </svg>
                  </div>
                </div>
                {/* Quick view button */}
                <div className="absolute inset-0 bg-[#3A7D44]/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-[#3A7D44] px-4 py-2 rounded-full text-sm font-medium transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    Quick View
                  </button>
                </div>
                {/* Category tag */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#3A7D44]">
                  {categories.find(cat => cat.id === product.category)?.name}
                </div>
              </div>
              
              {/* Product details */}
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold text-[#1E3F22]">{product.name}</h3>
                  <span className="text-[#3A7D44] font-bold">{product.price}</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                
                {/* Nutrition info */}
                <div className="flex justify-between text-xs text-[#3A7D44]/80 mb-4">
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Calories</span>
                    <span>{product.nutrition.calories}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Protein</span>
                    <span>{product.nutrition.protein}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="font-medium">Fiber</span>
                    <span>{product.nutrition.fiber}</span>
                  </div>
                </div>
                
                {/* Add to cart button */}
                <button className="w-full bg-[#3A7D44]/10 hover:bg-[#3A7D44] text-[#3A7D44] hover:text-white py-2 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center">
                  <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                  Add to Cart
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* View all products button */}
        <div className="mt-12 text-center">
          <motion.button
            className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            View All Products
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Products; 