import { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const timelineRef = useRef(null);

  // Farmer testimonials
  const testimonials = [
    {
      id: 1,
      name: 'Rajesh Kumar',
      location: 'Karnataka',
      quote: 'Partnering with Nisarga Organics has transformed my farming practices. I now grow healthier crops and earn a better income for my family.',
      image: '/images/farmer1.jpg', // Placeholder
    },
    {
      id: 2,
      name: 'Lakshmi Devi',
      location: 'Tamil Nadu',
      quote: 'The sustainable farming techniques I learned through Nisarga Organics have improved my soil quality and crop yield significantly.',
      image: '/images/farmer2.jpg', // Placeholder
    },
    {
      id: 3,
      name: 'Sukhwinder Singh',
      location: 'Punjab',
      quote: 'I\'m proud that my organic produce reaches customers directly. It\'s rewarding to know people appreciate the quality of what we grow.',
      image: '/images/farmer3.jpg', // Placeholder
    },
  ];

  // Timeline events
  const timelineEvents = [
    {
      year: '2010',
      title: 'Our Beginning',
      description: 'Started with a small farm in Karnataka with a mission to promote organic farming.',
    },
    {
      year: '2014',
      title: 'Farmer Network',
      description: 'Expanded our network to include 50+ organic farmers across Southern India.',
    },
    {
      year: '2017',
      title: 'Certification',
      description: 'Received official organic certification and launched our first retail store.',
    },
    {
      year: '2020',
      title: 'E-commerce Launch',
      description: 'Launched our online store to reach customers nationwide with fresh organic products.',
    },
    {
      year: 'Today',
      title: 'Growing Community',
      description: 'Supporting 200+ farmer families and delivering to thousands of health-conscious customers.',
    },
  ];

  // GSAP animations
  useEffect(() => {
    const timeline = timelineRef.current;
    const timelineItems = timeline.querySelectorAll('.timeline-item');
    
    // Timeline animation
    gsap.fromTo(
      timelineItems,
      { 
        opacity: 0,
        x: index => index % 2 === 0 ? -50 : 50,
      },
      { 
        opacity: 1,
        x: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        }
      }
    );

    // Animate the connecting line
    gsap.fromTo(
      '.timeline-line',
      { height: 0 },
      {
        height: '100%',
        duration: 1.5,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: timeline,
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none none",
        }
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-[#F5F5F0] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#3A7D44]/5 rounded-full -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#A5D6A7]/10 rounded-full translate-y-1/3 -translate-x-1/3" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.span 
            className="text-[#3A7D44] text-sm font-medium tracking-widest uppercase"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Story
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-nunito text-[#1E3F22] mt-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            About Nisarga Organics
          </motion.h2>
          <motion.p 
            className="mt-4 text-[#3A7D44]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            We're on a mission to revolutionize the way organic food reaches your table, 
            while supporting sustainable farming practices and rural communities.
          </motion.p>
        </div>

        {/* Our mission */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <div className="aspect-w-4 aspect-h-3 bg-[#3A7D44]/20 relative">
                  {/* Placeholder for farm image */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-20 h-20 text-[#3A7D44]/40" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19,19H5V8H19M16,1V3H8V1H6V3H5C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V5C21,3.89 20.1,3 19,3H18V1M17,12H12V17H17V12Z" />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Floating elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-white rounded-lg shadow-md p-3 flex flex-col justify-center items-center animate-float">
                <span className="text-[#3A7D44] font-bold text-3xl">200+</span>
                <span className="text-[#1E3F22] text-sm text-center">Farmer Families</span>
              </div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#3A7D44] rounded-lg shadow-md p-3 flex flex-col justify-center items-center text-white animate-float" style={{ animationDelay: '1s' }}>
                <span className="font-bold text-2xl">100%</span>
                <span className="text-xs text-center">Organic</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-bold text-[#1E3F22] mb-4">Our Mission & Vision</h3>
            <p className="text-[#3A7D44]/80 mb-6">
              Nisarga Organics was founded with a simple yet powerful vision: to connect health-conscious consumers 
              directly with organic farmers, eliminating middlemen and ensuring both fair compensation for farmers 
              and high-quality, affordable organic products for customers.
            </p>
            <p className="text-[#3A7D44]/80 mb-6">
              We believe that organic farming is not just a method of growing food, but a philosophy that respects 
              the natural ecosystem, promotes biodiversity, and ensures long-term sustainability of our agricultural lands.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#3A7D44]/10">
                <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mb-3 text-[#3A7D44]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12,3C16.97,3 21,7.03 21,12C21,16.97 16.97,21 12,21C7.03,21 3,16.97 3,12C3,7.03 7.03,3 12,3M12,5C8.14,5 5,8.14 5,12C5,15.86 8.14,19 12,19C15.86,19 19,15.86 19,12C19,8.14 15.86,5 12,5M12,7C14.76,7 17,9.24 17,12C17,14.76 14.76,17 12,17C9.24,17 7,14.76 7,12C7,9.24 9.24,7 12,7M12,9C10.34,9 9,10.34 9,12C9,13.66 10.34,15 12,15C13.66,15 15,13.66 15,12C15,10.34 13.66,9 12,9Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1E3F22]">Our Values</h4>
                <p className="text-sm text-[#3A7D44]/80 mt-1">Integrity, sustainability, and community empowerment guide everything we do.</p>
              </div>
              
              <div className="bg-white rounded-lg p-4 shadow-sm border border-[#3A7D44]/10">
                <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mb-3 text-[#3A7D44]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.55,11.2C17.32,10.9 17.05,10.64 16.79,10.38C16.14,9.78 15.39,9.35 14.76,8.72C13.3,7.26 13,4.85 13.91,3C13,3.23 12.16,3.75 11.46,4.32C8.92,6.4 7.92,10.07 9.12,13.22C9.16,13.32 9.2,13.42 9.2,13.55C9.2,13.77 9.05,13.97 8.85,14.05C8.63,14.15 8.39,14.09 8.21,13.93C8.15,13.88 8.11,13.83 8.06,13.76C6.96,12.33 6.78,10.28 7.53,8.64C5.89,10 5,12.3 5.14,14.47C5.18,14.97 5.24,15.47 5.41,15.97C5.55,16.57 5.81,17.17 6.13,17.7C7.17,19.43 9,20.67 10.97,20.92C13.07,21.19 15.32,20.8 16.93,19.32C18.73,17.66 19.38,15 18.43,12.72L18.3,12.46C18.1,12 17.83,11.59 17.5,11.21L17.55,11.2M14.45,17.5C14.17,17.74 13.72,18 13.37,18.1C12.27,18.5 11.17,17.94 10.5,17.28C11.69,17 12.39,16.12 12.59,15.23C12.76,14.43 12.45,13.77 12.32,13C12.2,12.26 12.22,11.63 12.5,10.94C12.67,11.32 12.87,11.7 13.1,12C13.86,13 15.05,13.44 15.3,14.8C15.34,14.94 15.36,15.08 15.36,15.23C15.39,16.05 15.04,16.95 14.44,17.5H14.45Z" />
                  </svg>
                </div>
                <h4 className="font-semibold text-[#1E3F22]">Our Impact</h4>
                <p className="text-sm text-[#3A7D44]/80 mt-1">Transforming rural economies and promoting healthier food choices nationwide.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our journey timeline */}
        <div className="mb-20">
          <motion.h3 
            className="text-2xl font-bold text-[#1E3F22] text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Journey
          </motion.h3>
          
          <div 
            ref={timelineRef}
            className="relative"
          >
            {/* Timeline center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-[#3A7D44]/20 transform -translate-x-1/2 timeline-line" />
            
            {/* Timeline events */}
            {timelineEvents.map((event, index) => (
              <div 
                key={event.year}
                className={`timeline-item flex mb-12 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className="w-1/2 px-6">
                  <div className={`${
                    index % 2 === 0 ? 'text-right' : 'text-left'
                  }`}>
                    <span className="text-[#3A7D44] font-bold text-xl">{event.year}</span>
                    <h4 className="text-[#1E3F22] font-semibold text-lg mt-1">{event.title}</h4>
                    <p className="text-[#3A7D44]/80 mt-2">{event.description}</p>
                  </div>
                </div>
                
                {/* Center dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#3A7D44] rounded-full border-4 border-[#F5F5F0] z-10" />
                
                <div className="w-1/2 px-6" />
              </div>
            ))}
          </div>
        </div>

        {/* Farmer testimonials */}
        <div>
          <motion.h3 
            className="text-2xl font-bold text-[#1E3F22] text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Farmer Testimonials
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                className="bg-white rounded-xl p-6 shadow-md border border-[#3A7D44]/10 relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Quote icon */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#3A7D44] rounded-full flex items-center justify-center text-white">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M10,7L8,11H11V17H5V11L7,7H10M18,7L16,11H19V17H13V11L15,7H18Z" />
                  </svg>
                </div>
                
                <p className="text-[#3A7D44]/80 italic mb-6">"{testimonial.quote}"</p>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-[#3A7D44]/20 flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-[#3A7D44]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,4A4,4 0 0,1 16,8A4,4 0 0,1 12,12A4,4 0 0,1 8,8A4,4 0 0,1 12,4M12,14C16.42,14 20,15.79 20,18V20H4V18C4,15.79 7.58,14 12,14Z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3F22]">{testimonial.name}</h4>
                    <p className="text-sm text-[#3A7D44]/80">{testimonial.location}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#contact" 
            className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-3 rounded-full text-base font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-flex items-center"
          >
            <span>Join Our Mission</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 