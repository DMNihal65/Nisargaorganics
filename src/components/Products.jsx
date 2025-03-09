import { useState, useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import leafElement from '../assets/leaf_element.svg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const sectionRef = useRef(null);
  
  // Product categories with icons
  const categories = [
    { id: 'all', name: 'All Products', icon: 'M12 4.75L19.25 9l-7.25 4.25L4.75 9l7.25-4.25M12 13.25L19.25 9l-7.25 4.25L4.75 9l7.25-4.25M12 13.25v8.75' },
    { id: 'millets', name: 'Millets', icon: 'M12 2a9 9 0 0 0-9 9c0 3.5 2.5 6.5 6 8.5 1 .5 2 1 3 1s2-.5 3-1c3.5-2 6-5 6-8.5a9 9 0 0 0-9-9z' },
    { id: 'grains', name: 'Grains & Pulses', icon: 'M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z' },
    { id: 'seeds', name: 'Seeds & Spices', icon: 'M11 4c0 1.657-1.343 3-3 3S5 5.657 5 4s1.343-3 3-3 3 1.343 3 3z M16 4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M21 4c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M11 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M16 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M21 9c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M11 14c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M16 14c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z M21 14c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3z' },
  ];
  
  // Product data with enhanced details
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
      benefits: ['Gluten-free', 'High protein', 'Rich in minerals'],
      badge: 'Bestseller'
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
      benefits: ['Low GI', 'High fiber', 'Iron-rich'],
      badge: 'New'
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
      benefits: ['Whole grain', 'B vitamins', 'Manganese'],
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
      benefits: ['High protein', 'Folate-rich', 'Antioxidants'],
      badge: 'Popular'
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
      benefits: ['Omega-3', 'Lignans', 'Heart-healthy'],
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
      benefits: ['Digestive aid', 'Iron-rich', 'Antioxidants'],
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

  // Floating leaf animation variants
  const floatingLeafVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 0.15, 
      y: [0, -15, 0],
      transition: {
        y: {
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        },
        opacity: {
          duration: 1,
        }
      }
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
      className="py-24 bg-[#F5F5F0] relative overflow-hidden"
      style={{
        backgroundColor: '#cfdcd4',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2393bc99' fill-opacity='0.2' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A5D6A7]/10 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#3A7D44]/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Floating leaves */}
      {[1, 2, 3, 4, 5].map((_, index) => (
        <motion.div
          key={`leaf-${index}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 1,
          }}
          variants={floatingLeafVariants}
          initial="initial"
          animate="animate"
          transition={{
            delay: index * 0.5,
          }}
        >
          <img src={leafElement} alt="" className="w-full h-full opacity-20" />
        </motion.div>
      ))}
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 scroll-animate">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#3A7D44]/10 px-4 py-1 rounded-full mb-2"
          >
            <span className="text-[#3A7D44] text-sm font-medium tracking-widest uppercase">
              Our Products
            </span>
          </motion.div>
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
          <div className="bg-white/80 backdrop-blur-sm p-2 rounded-full shadow-sm flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center ${
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
                <svg 
                  className="w-4 h-4 mr-2" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                >
                  <path d={category.icon} />
                </svg>
                {category.name}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatePresence mode="wait">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group"
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                onHoverStart={() => setHoveredProduct(product.id)}
                onHoverEnd={() => setHoveredProduct(null)}
                layout
              >
                {/* Product image */}
                <div className="h-52 bg-gradient-to-br from-[#3A7D44]/5 to-[#3A7D44]/20 relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Placeholder for product image */}
                    <div className="w-24 h-24 rounded-full bg-white/40 backdrop-blur-sm flex items-center justify-center">
                      <svg className="w-12 h-12 text-[#3A7D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z M12 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
                      </svg>
                    </div>
                  </div>
                  
                  {/* Quick view button */}
                  <motion.div 
                    className="absolute inset-0 bg-[#3A7D44]/60 backdrop-blur-sm flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: hoveredProduct === product.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <motion.button 
                      className="bg-white text-[#3A7D44] px-5 py-2.5 rounded-full text-sm font-medium flex items-center"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ 
                        y: hoveredProduct === product.id ? 0 : 20,
                        opacity: hoveredProduct === product.id ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      Quick View
                    </motion.button>
                  </motion.div>
                  
                  {/* Category tag */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-[#3A7D44] flex items-center">
                    <svg className="w-3 h-3 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d={categories.find(cat => cat.id === product.category)?.icon} />
                    </svg>
                    {categories.find(cat => cat.id === product.category)?.name}
                  </div>
                  
                  {/* Badge (if exists) */}
                  {product.badge && (
                    <div className="absolute top-3 right-3 bg-[#3A7D44] text-white px-3 py-1 rounded-full text-xs font-medium">
                      {product.badge}
                    </div>
                  )}
                </div>
                
                {/* Product details */}
                <div className="p-5">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-[#1E3F22] group-hover:text-[#3A7D44] transition-colors duration-300">{product.name}</h3>
                    <span className="text-[#3A7D44] font-bold">{product.price}</span>
                  </div>
                  <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                  
                  {/* Benefits tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {product.benefits.map((benefit, index) => (
                      <span 
                        key={index} 
                        className="text-xs bg-[#3A7D44]/10 text-[#3A7D44] px-2 py-1 rounded-full"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                  
                  {/* Nutrition info */}
                  <div className="flex justify-between text-xs text-[#3A7D44]/80 mb-5 bg-[#F5F5F0]/50 p-2 rounded-lg">
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
                  <motion.button 
                    className="w-full bg-[#3A7D44]/10 hover:bg-[#3A7D44] text-[#3A7D44] hover:text-white py-2.5 rounded-lg text-sm font-medium transition-colors duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <path d="M3 6h18" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                    Add to Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* View all products button */}
        <div className="mt-16 text-center">
          <motion.button
            className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-3.5 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0px 6px 12px rgba(58, 125, 68, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            View All Products
            <motion.svg 
              className="w-4 h-4 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              animate={{ x: [0, 3, 0] }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1
              }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

export default Products; 