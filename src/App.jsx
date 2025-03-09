import { useState, useEffect, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from 'framer-motion';
import Loader from './components/Loader';
import HeroSection from './components/HeroSection';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [loading, setLoading] = useState(true);
  const [contentReady, setContentReady] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mainContentRef = useRef(null);

  useEffect(() => {
    // Preload essential assets
    const preloadImages = async () => {
      const imageUrls = [
        // Add essential image URLs here if needed
      ];
      
      const preloadPromises = imageUrls.map((url) => {
        return new Promise((resolve, reject) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = reject;
          img.src = url;
        });
      });
      
      try {
        // Simulate a minimum loading time while loading actual assets
        await Promise.all([
          ...preloadPromises,
          new Promise(resolve => setTimeout(resolve, 3000)) // Minimum 3 second loader
        ]);
        
        // Set loading to false first
        setLoading(false);
        
        // Then delay slightly before showing content for a smooth transition
        setTimeout(() => {
          setContentReady(true);
        }, 100);
      } catch (error) {
        console.error("Failed to preload some assets", error);
        // Still continue with the app
        setLoading(false);
        setTimeout(() => setContentReady(true), 100);
      }
    };
    
    preloadImages();
  }, []);

  // Handle scroll event to add blur effect to navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Page transition variants
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeInOut",
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      }
    }
  };

  return (
    <div className="relative overflow-hidden">
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {!loading && (
          <motion.div
            className="page-wrapper"
            initial="initial"
            animate={contentReady ? "animate" : "initial"}
            exit="exit"
            variants={pageVariants}
            ref={mainContentRef}
          >
            <Navbar scrolled={scrolled} />
            <main className="min-h-screen">
              <HeroSection />
              <Products />
              <Services />
              <AboutUs />
              <ContactUs />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App
