// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import mainLogo from '../assets/main_logo.svg';
import leafElement from '../assets/leaf_element.svg';
import oooscillate from '../assets/oooscillate.svg';

const Loader = () => {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const requestRef = useRef(null);
  const previousTimeRef = useRef(null);
  const targetProgressRef = useRef(0);
  
  // Simulate loading progress with smoother animation
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    
    // Increment target progress
    const incrementTarget = () => {
      if (targetProgressRef.current < 100) {
        targetProgressRef.current += Math.random() * 3 + 1;
        setTimeout(incrementTarget, Math.random() * 200 + 100);
      } else {
        targetProgressRef.current = 100;
        // Wait a moment before completing
        setTimeout(() => setIsComplete(true), 800);
      }
    };
    
    // Start incrementing target
    incrementTarget();
    
    // Smooth animation loop for progress bar
    const animate = (time) => {
      if (previousTimeRef.current !== undefined) {
        // Smoothly interpolate current progress toward target
        setProgress(prevProgress => {
          const diff = targetProgressRef.current - prevProgress;
          return prevProgress + (diff * 0.05);
        });
      }
      
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animate);
    };
    
    requestRef.current = requestAnimationFrame(animate);
    
    return () => {
      cancelAnimationFrame(requestRef.current);
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Leaf positions for floating animation
  const leaves = [
    { delay: 0, x: -120, y: -150, rotate: -15, scale: 0.4 },
    { delay: 1.2, x: 150, y: -180, rotate: 15, scale: 0.3 },
    { delay: 0.5, x: -180, y: 120, rotate: -20, scale: 0.5 },
    { delay: 1.8, x: 200, y: 100, rotate: 25, scale: 0.35 },
    { delay: 0.8, x: 80, y: -100, rotate: 10, scale: 0.25 },
    { delay: 2.2, x: -100, y: 80, rotate: -5, scale: 0.3 },
  ];

  // Exit animation variants
  const exitVariants = {
    initial: { opacity: 1, scale: 1 },
    exit: { 
      opacity: 0, 
      scale: 1.1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  return (
    <AnimatePresence mode="wait">
      {!isComplete && (
        <motion.div 
          className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
          style={{
            backgroundColor: '#cfdcd4',
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2393bc99' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.8 } }}
          exit="exit"
          variants={exitVariants}
          key="loader"
        >
          {/* Background oscillate pattern with blur effect */}
          <motion.div 
            className="absolute inset-0 flex items-center justify-center overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            transition={{ duration: 2 }}
          >
            <motion.div
              className="absolute inset-0 backdrop-blur-[2px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
            <motion.img 
              src={oooscillate} 
              alt="Wave Pattern"
              className="w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1, y: 20 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: 0
              }}
              transition={{ 
                duration: 2,
                ease: "easeOut"
              }}
            />
          </motion.div>
          
          {/* Floating leaves with improved animation */}
          {leaves.map((leaf, index) => (
            <motion.div
              key={index}
              className="absolute"
              initial={{ 
                x: leaf.x, 
                y: leaf.y, 
                opacity: 0,
                rotate: leaf.rotate,
                scale: leaf.scale
              }}
              animate={{ 
                y: [leaf.y, leaf.y - 30, leaf.y],
                opacity: [0, 0.7, 0],
                rotate: [leaf.rotate, leaf.rotate + 10, leaf.rotate - 10, leaf.rotate]
              }}
              transition={{ 
                delay: leaf.delay,
                duration: 6,
                repeat: Infinity,
                repeatDelay: 0.5,
                ease: "easeInOut"
              }}
            >
              <img src={leafElement} alt="Leaf" className="w-24 h-24" />
            </motion.div>
          ))}
          
          {/* Center content */}
          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Animation with improved effects */}
            <motion.div
              className="mb-10 relative"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 1,
                ease: "easeOut"
              }}
            >
              <motion.div 
                className="w-40 h-40 rounded-full bg-white/80 flex items-center justify-center shadow-lg backdrop-blur-sm"
                animate={{ 
                  boxShadow: [
                    "0 0 0 0px rgba(58, 125, 68, 0.2)",
                    "0 0 0 15px rgba(58, 125, 68, 0.1)",
                    "0 0 0 0px rgba(58, 125, 68, 0.2)"
                  ]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <motion.img 
                  src={mainLogo} 
                  alt="Nisarga Organics Logo" 
                  className="w-28 h-28"
                  animate={{ 
                    rotate: [0, 5, 0, -5, 0],
                    scale: [1, 1.05, 1]
                  }}
                  transition={{ 
                    duration: 6, 
                    repeat: Infinity, 
                    ease: "easeInOut" 
                  }}
                />
              </motion.div>
            </motion.div>

            {/* Brand Name */}
            <motion.h1 
              className="text-[#3A7D44] text-3xl font-semibold tracking-widest font-nunito"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            >
              NISARGA ORGANICS
            </motion.h1>
            
            {/* Tagline */}
            <motion.p 
              className="mt-2 text-[#3A7D44]/80 text-sm tracking-wider"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            >
              FRESH FROM NATURE, STRAIGHT TO YOU
            </motion.p>
            
            {/* Progress bar with smoother animation */}
            <motion.div 
              className="mt-8 w-64 h-1 bg-white/50 rounded-full overflow-hidden backdrop-blur-sm"
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 256 }}
              transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            >
              <motion.div 
                className="h-full bg-[#3A7D44]"
                style={{ width: `${Math.min(Math.round(progress), 100)}%` }}
                transition={{ ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Loading percentage with smoother animation */}
            <motion.p 
              className="mt-2 text-[#3A7D44]/80 text-xs tracking-wider"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              {progress < 100 
                ? `LOADING ${Math.min(Math.round(progress), 100)}%` 
                : "READY TO EXPLORE"}
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader; 