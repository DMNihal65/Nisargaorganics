import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {
  const sectionRef = useRef(null);
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const leafLeftRef = useRef(null);
  const leafRightRef = useRef(null);
  const leafTopRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const hero = heroRef.current;
    const text = textRef.current;
    const cta = ctaRef.current;
    const leafLeft = leafLeftRef.current;
    const leafRight = leafRightRef.current;
    const leafTop = leafTopRef.current;

    // Main timeline
    const tl = gsap.timeline({
      defaults: { ease: "power3.out" }
    });

    // Initial animation sequence
    tl.fromTo(hero,
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.8 }
    )
    .fromTo([leafLeft, leafRight, leafTop],
      { opacity: 0, scale: 0.8, y: 20 },
      { opacity: 1, scale: 1, y: 0, stagger: 0.2, duration: 1.2 },
      "-=1.4"
    )
    .fromTo(text.querySelector('h1'),
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1 },
      "-=1"
    )
    .fromTo(text.querySelector('.tagline'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    )
    .fromTo(text.querySelector('.description'),
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.5"
    )
    .fromTo(cta,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8 },
      "-=0.6"
    );

    // Subtle floating animations for decorative elements
    gsap.to(leafLeft, {
      y: -15,
      x: -5,
      rotation: -5,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(leafRight, {
      y: -10,
      x: 8,
      rotation: 8,
      duration: 3.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.5
    });

    gsap.to(leafTop, {
      y: -8,
      rotation: -3,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
      delay: 0.8
    });

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

    gsap.to([leafLeft, leafRight, leafTop], {
      yPercent: -20,
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

  return (
    <section 
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#F5F5F0]"
    >
      {/* Background with Gradient Overlay */}
      <div
        ref={heroRef}
        className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#A5D6A7]/30 via-[#3A7D44]/10 to-[#F5F5F0]"
      >
        {/* We'll use a CSS pattern for texture instead of an SVG */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full bg-[#3A7D44]" 
            style={{ 
              backgroundImage: `radial-gradient(#3A7D44 1px, transparent 1px)`, 
              backgroundSize: '20px 20px' 
            }} 
          />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Left Leaf Decoration */}
        <div 
          ref={leafLeftRef} 
          className="absolute -left-10 top-1/4 w-64 h-64 opacity-60"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,10 Q150,50 190,100 Q150,150 100,190 Q50,150 10,100 Q50,50 100,10Z" fill="#3A7D44" fillOpacity="0.2" />
            <path d="M100,30 Q140,60 170,100 Q140,140 100,170 Q60,140 30,100 Q60,60 100,30Z" fill="#3A7D44" fillOpacity="0.3" />
          </svg>
        </div>
        
        {/* Right Leaf Decoration */}
        <div 
          ref={leafRightRef} 
          className="absolute -right-10 top-1/3 w-72 h-72 opacity-60"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,10 Q150,50 190,100 Q150,150 100,190 Q50,150 10,100 Q50,50 100,10Z" fill="#A5D6A7" fillOpacity="0.3" />
            <path d="M100,30 Q140,60 170,100 Q140,140 100,170 Q60,140 30,100 Q60,60 100,30Z" fill="#A5D6A7" fillOpacity="0.4" />
          </svg>
        </div>
        
        {/* Top Leaf Decoration */}
        <div 
          ref={leafTopRef} 
          className="absolute left-1/2 -translate-x-1/2 -top-20 w-80 h-80 opacity-50"
        >
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100,10 Q150,50 190,100 Q150,150 100,190 Q50,150 10,100 Q50,50 100,10Z" fill="#3A7D44" fillOpacity="0.15" />
          </svg>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <div ref={textRef} className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-nunito text-[#1E3F22] drop-shadow-sm">
            Nisarga <span className="text-[#3A7D44]">Organics</span>
          </h1>
          <p className="tagline text-xl md:text-2xl mb-6 font-light tracking-wide text-[#2C5E33]">
            Fresh from Nature, Straight to You
          </p>
          <p className="description text-lg md:text-xl mb-12 max-w-2xl mx-auto text-[#3A7D44]/80">
            Experience the goodness of organic grains, millets, and seeds sourced directly from our partner farmers.
          </p>
        </div>
        
        <div ref={ctaRef} className="flex flex-col md:flex-row gap-4 items-center">
          <button className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
            Explore Our Products
          </button>
          <button className="bg-transparent border-2 border-[#3A7D44] text-[#3A7D44] hover:bg-[#3A7D44]/10 px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300">
            Learn About Us
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg 
          className="w-6 h-6 text-[#3A7D44]"
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth="2" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection; 