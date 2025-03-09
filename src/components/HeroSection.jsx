import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import leafElement from '../assets/leaf_element.svg';
import oooscillate from '../assets/oooscillate.svg';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const [showScrollIndicator, setShowScrollIndicator] = useState(false);
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);

  useEffect(() => {
    // Show scroll indicator after animations complete
    setTimeout(() => {
      setShowScrollIndicator(true);
    }, 3000);

    const section = sectionRef.current;
    const hero = heroRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;

    // Main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Initial animation sequence
    tl.fromTo(hero,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.8 }
    )
    .fromTo(text.querySelector('h1 .first-word'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=1.2"
    )
    .fromTo(text.querySelector('h1 .second-word'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(text.querySelector('.tagline'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(text.querySelector('.description'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(cta.children,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, stagger: 0.15, duration: 0.8 },
      "-=0.6"
    );

    // Parallax effect on scroll
    gsap.to(hero, {
      yPercent: 30,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true
      }
    });

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  // Text animation variants for subtle letter animations
  const letterAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.05,
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  };

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden"
      style={{
        backgroundColor: '#cfdcd4',
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 80 40' width='80' height='40'%3E%3Cpath fill='%2393bc99' fill-opacity='0.4' d='M0 40a19.96 19.96 0 0 1 5.9-14.11 20.17 20.17 0 0 1 19.44-5.2A20 20 0 0 1 20.2 40H0zM65.32.75A20.02 20.02 0 0 1 40.8 25.26 20.02 20.02 0 0 1 65.32.76zM.07 0h20.1l-.08.07A20.02 20.02 0 0 1 .75 5.25 20.08 20.08 0 0 1 .07 0zm1.94 40h2.53l4.26-4.24v-9.78A17.96 17.96 0 0 0 2 40zm5.38 0h9.8a17.98 17.98 0 0 0 6.67-16.42L7.4 40zm3.43-15.42v9.17l11.62-11.59c-3.97-.5-8.08.3-11.62 2.42zm32.86-.78A18 18 0 0 0 63.85 3.63L43.68 23.8zm7.2-19.17v9.15L62.43 2.22c-3.96-.5-8.05.3-11.57 2.4zm-3.49 2.72c-4.1 4.1-5.81 9.69-5.13 15.03l6.61-6.6V6.02c-.51.41-1 .85-1.48 1.33zM17.18 0H7.42L3.64 3.78A18 18 0 0 0 17.18 0zM2.08 0c-.01.8.04 1.58.14 2.37L4.59 0H2.07z'%3E%3C/path%3E%3C/svg%3E")`,
      }}
    >
      {/* Background with oscillating pattern and gradient overlay */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full"
      >
        {/* Background oscillate pattern */}
        <div className="absolute inset-0 flex items-center justify-center overflow-hidden opacity-30">
          <img 
            src={oooscillate} 
            alt="Wave Pattern"
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#A5D6A7]/30 via-[#3A7D44]/10 to-[#cfdcd4]"></div>
        
        {/* Additional pattern texture */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[#3A7D44]" 
            style={{ 
              backgroundImage: `radial-gradient(#3A7D44 1px, transparent 1px)`, 
              backgroundSize: '20px 20px' 
            }} 
          />
        </div>
      </div>

      {/* Decorative Elements - only keeping subtle floating leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Additional floating leaves - more subtle and minimal */}
        {[1, 2, 3].map((_, index) => (
          <motion.div
            key={index}
            className="absolute opacity-15"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`,
              width: `${Math.random() * 60 + 30}px`,
              height: `${Math.random() * 60 + 30}px`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, Math.random() * 10 - 5, 0],
              opacity: [0.1, 0.15, 0.1]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          >
            <img src={leafElement} alt="Floating leaf" className="w-full h-full" />
          </motion.div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-nunito text-[#1E3F22] drop-shadow-sm">
            <span className="first-word block md:inline">Nisarga</span>{" "}
            <span className="second-word text-[#3A7D44] block md:inline">Organics</span>
          </h1>
          
          <div className="overflow-hidden">
            <motion.p 
              className="tagline text-xl md:text-2xl mb-6 font-light tracking-wide text-[#2C5E33]"
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              {/* Animated text with letter-by-letter animation */}
              {"Fresh from Nature, Straight to You".split("").map((char, index) => (
                <motion.span
                  key={index}
                  custom={index}
                  variants={letterAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  className="inline-block"
                >
                  {char === " " ? <span>&nbsp;</span> : char}
                </motion.span>
              ))}
            </motion.p>
          </div>
          
          <motion.p 
            className="description text-lg md:text-xl mb-12 max-w-2xl mx-auto text-[#3A7D44]/80"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
          >
            Experience the goodness of organic grains, millets, and seeds sourced directly from our partner farmers.
          </motion.p>
        </div>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 items-center">
          <motion.button 
            className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center"
            whileHover={{ 
              boxShadow: "0px 6px 12px rgba(58, 125, 68, 0.3)",
            }}
            whileTap={{ scale: 0.97 }}
          >
            Explore Our Products
            <motion.svg 
              className="w-5 h-5 ml-2" 
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
          <motion.button 
            className="bg-transparent border-2 border-[#3A7D44] text-[#3A7D44] hover:bg-[#3A7D44]/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300"
            whileHover={{ background: "rgba(58, 125, 68, 0.1)" }}
            whileTap={{ scale: 0.97 }}
          >
            Learn About Us
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={showScrollIndicator ? { opacity: 1, y: 0 } : { opacity: 0, y: -10 }}
        transition={{ duration: 0.5 }}
      >
        <motion.svg 
          className="w-6 h-6 text-[#3A7D44]"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
          animate={{ y: [0, 6, 0] }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </motion.svg>
      </motion.div>
    </section>
  );
};

export default HeroSection; 