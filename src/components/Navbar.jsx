import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import mainLogo from '../assets/main_logo.svg';

const Navbar = ({ scrolled: externalScrolled }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const navbarRef = useRef(null);
  const mobileMenuRef = useRef(null);
  const logoRef = useRef(null);

  // Navigation links
  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Handle scroll event to change navbar style
  useEffect(() => {
    // Use external scrolled prop if provided, otherwise use internal state
    if (externalScrolled !== undefined) {
      setIsScrolled(externalScrolled);
    } else {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
    
    // Set initial load to false after first paint
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 1500);
    
    return () => {
      clearTimeout(timer);
    };
  }, [externalScrolled]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !navbarRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Smooth scroll to section when clicking on nav links
  const scrollToSection = (e, sectionId) => {
    e.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Offset for navbar height
        behavior: 'smooth'
      });
      
      // Close mobile menu after clicking
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    }
  };

  return (
    <>
      {/* Glassmorphism backdrop for Navbar - separate from navbar to allow proper layering */}
      <motion.div 
        className={`fixed top-0 left-0 w-full z-40 backdrop-blur-md transition-all duration-500 ${
          isScrolled ? 'bg-white/60 backdrop-blur-lg h-20 shadow-sm' : 'bg-white/80 backdrop-blur-sm h-24'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      />
      
      <nav 
        ref={navbarRef}
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: isInitialLoad ? 0.8 : 0.4, delay: isInitialLoad ? 0.2 : 0 }}
              ref={logoRef}
            >
              <a href="#" className="flex items-center group">
                {/* Logo animation container */}
                <div className="relative w-12 h-12 mr-3 flex items-center justify-center overflow-hidden">
                  {/* Circular background with animated scaling/opacity */}
                  <motion.div
                    className={`absolute inset-0 rounded-full transition-colors duration-500 ${
                      isScrolled ? 'bg-[#3A7D44]/10' : 'bg-[#3A7D44]/5'
                    }`}
                    animate={{ 
                      scale: [1, 1.05, 1],
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity, 
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                  />
                  
                  {/* Main logo */}
                  <motion.img 
                    src={mainLogo} 
                    alt="Nisarga Organics Logo"
                    className="w-8 h-8 z-10"
                    animate={{ 
                      rotate: isScrolled ? [0, 0] : [0, 5, 0, -5, 0],
                      scale: isScrolled ? 1 : [1, 1.05, 1]
                    }}
                    transition={{ 
                      duration: 6, 
                      repeat: Infinity, 
                      ease: "easeInOut" 
                    }}
                    whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                  />
                </div>
                
                <div className="flex flex-col">
                  <motion.span 
                    className={`text-xl font-bold font-nunito leading-tight text-[#3A7D44]`}
                    animate={{ y: [0, 2, 0] }}
                    transition={{ 
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.5
                    }}
                  >
                    Nisarga
                  </motion.span>
                  <motion.span 
                    className={`text-sm font-medium font-nunito leading-tight text-[#3A7D44]/80`}
                    animate={{ y: [0, 1, 0] }}
                    transition={{ 
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut" 
                    }}
                  >
                    Organics
                  </motion.span>
                </div>
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors hover:text-[#3A7D44] rounded-md text-[#1E3F22] overflow-hidden group`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: isInitialLoad ? 0.3 + index * 0.1 : 0 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Hover effect background with improved animation */}
                  <motion.span 
                    className="absolute inset-0 bg-[#3A7D44]/10 rounded-md opacity-0 group-hover:opacity-100" 
                    initial={{ scaleX: 0 }}
                    whileHover={{ 
                      scaleX: 1,
                      transition: { duration: 0.3, ease: "easeOut" }
                    }}
                    style={{ originX: 0 }}
                  />
                  <span className="relative z-10">{link.name}</span>
                </motion.a>
              ))}
              <motion.button
                className="ml-4 bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-md flex items-center"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: isInitialLoad ? 0.6 : 0 }}
                whileHover={{ 
                  boxShadow: "0px 6px 12px rgba(58, 125, 68, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Shop Now</span>
                <motion.svg 
                  className="w-4 h-4 ml-1" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                  animate={{ x: [0, 3, 0] }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: 1
                  }}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </motion.svg>
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <motion.button
                onClick={toggleMobileMenu}
                className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-[#3A7D44]/50 transition-colors text-[#3A7D44] hover:bg-[#3A7D44]/10"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.9 }}
              >
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  {isMobileMenuOpen ? (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M6 18L18 6M6 6l12 12" 
                    />
                  ) : (
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M4 6h16M4 12h16M4 18h16" 
                    />
                  )}
                </svg>
              </motion.button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu - improved with better transitions */}
      <AnimatePresence mode="wait">
        {isMobileMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-lg md:hidden pt-20 overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ 
              type: "spring", 
              damping: 30, 
              stiffness: 300,
            }}
          >
            {/* Close button */}
            <motion.button
              onClick={closeMobileMenu}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#3A7D44]/10 text-[#3A7D44] hover:bg-[#3A7D44]/20 transition-colors"
              whileTap={{ scale: 0.9 }}
              aria-label="Close menu"
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, duration: 0.3 }}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </motion.button>

            <div className="container mx-auto px-4 py-6 h-full overflow-y-auto">
              <div className="flex flex-col space-y-6">
                {navLinks.map((link, index) => (
                  <motion.a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-[#1E3F22] hover:text-[#3A7D44] text-2xl font-medium py-4 border-b border-[#3A7D44]/10 flex items-center justify-between"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.1 + index * 0.1 }}
                    whileTap={{ scale: 0.97, x: 5 }}
                    whileHover={{ x: 5 }}
                  >
                    <span>{link.name}</span>
                    <motion.svg 
                      className="w-5 h-5 text-[#3A7D44]" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      whileHover={{ x: 3 }}
                      transition={{ duration: 0.2 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </motion.svg>
                  </motion.a>
                ))}
                
                <motion.div 
                  className="pt-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                >
                  <motion.button
                    className="w-full bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-5 py-4 rounded-full text-lg font-medium transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Shop Now</span>
                    <motion.svg 
                      className="w-5 h-5 ml-2" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      animate={{ x: [0, 4, 0] }}
                      transition={{ 
                        duration: 1.5,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "easeInOut",
                      }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </motion.svg>
                  </motion.button>
                </motion.div>
                
                {/* Decorative leaf */}
                <motion.div
                  className="absolute bottom-0 right-0 w-64 h-64 opacity-20 pointer-events-none"
                  initial={{ opacity: 0, y: 20, rotate: 10 }}
                  animate={{ opacity: 0.2, y: 0, rotate: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                >
                  <img src={mainLogo} alt="Leaf decoration" className="w-full h-full" />
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar; 