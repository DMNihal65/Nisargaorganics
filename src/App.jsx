import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Simulate loading time (you can replace this with actual data loading)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
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

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {loading && <Loader />}
      </AnimatePresence>
      
      {!loading && (
        <>
          <Navbar />
          <main className="min-h-screen">
            <HeroSection />
            <Products />
            <Services />
            <AboutUs />
            <ContactUs />
          </main>
          <Footer />
        </>
      )}

      {/* Blur overlay for navbar when scrolled */}
      {scrolled && !loading && (
        <div 
          className="fixed top-0 left-0 w-full h-20 bg-white/70 backdrop-blur-md z-40 pointer-events-none"
          style={{ 
            transition: 'opacity 0.3s ease-in-out',
            opacity: scrolled ? 1 : 0 
          }}
        />
      )}
    </div>
  );
}

export default App
