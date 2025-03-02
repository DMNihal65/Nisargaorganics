import { useRef, useEffect } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  const sectionRef = useRef(null);
  const servicesRef = useRef(null);

  // Service data
  const services = [
    {
      id: 1,
      title: 'Sustainable Farming',
      description: 'We support farmers who practice sustainable agriculture without harmful chemicals, preserving soil health and biodiversity.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,3C16.97,3 21,7.03 21,12C21,12.57 20.94,13.12 20.83,13.66C20.55,13.25 20.2,12.89 19.79,12.6C19.91,12.41 20,12.21 20.07,12C20.07,12 20.07,12 20.07,12C20.03,11.67 20,11.34 20,11C20,7.58 17.42,5 14,5C13.66,5 13.33,5.03 13,5.07C13,5.07 13,5.07 13,5.07C12.79,5 12.59,4.91 12.4,4.79C12.11,4.2 11.75,3.66 11.34,3.18C11.55,3.12 11.77,3.07 12,3.07V3M12,15C13.1,15 14,15.9 14,17C14,18.1 13.1,19 12,19C10.9,19 10,18.1 10,17C10,15.9 10.9,15 12,15M12,21C8.97,21 6.5,18.53 6.5,15.5C6.5,12.47 8.97,10 12,10C15.03,10 17.5,12.47 17.5,15.5C17.5,18.53 15.03,21 12,21M4.93,4.93C3.12,6.74 2,9.24 2,12C2,14.76 3.12,17.26 4.93,19.07L6.34,17.66C4.89,16.22 4,14.22 4,12C4,9.79 4.89,7.78 6.34,6.34L4.93,4.93M19.07,4.93L17.66,6.34C19.11,7.78 20,9.79 20,12C20,12.2 20,12.4 19.97,12.6C20.4,12.8 20.8,13.1 21.2,13.4C21.3,12.9 21.4,12.5 21.4,12C21.4,9.2 20.3,6.7 18.5,4.9L19.1,4.9M16.9,7.1C15.66,5.86 14,5.09 12.16,5C12.07,5.25 12,5.56 12,5.87C12,6.15 12.03,6.43 12.08,6.7C13.21,6.86 14.22,7.42 15,8.2C15.79,9 16.34,10 16.5,11.13C16.78,11.18 17.05,11.21 17.33,11.21C17.65,11.21 17.95,11.14 18.2,11.05C18.11,9.22 17.34,7.55 16.1,6.31V7.1Z" />
        </svg>
      ),
    },
    {
      id: 2,
      title: 'Direct Farmer-to-Customer',
      description: 'By eliminating middlemen, we ensure farmers receive fair compensation while customers get fresher products at better prices.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
        </svg>
      ),
    },
    {
      id: 3,
      title: 'Organic Certification',
      description: 'All our products are certified organic, ensuring they meet the highest standards of purity and are free from harmful chemicals.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2M12,5.5L10.16,9.05L6.62,9.63L9.31,12.26L8.68,15.77L12,14.09L15.32,15.77L14.69,12.26L17.38,9.63L13.84,9.05L12,5.5Z" />
        </svg>
      ),
    },
    {
      id: 4,
      title: 'Eco-Friendly Packaging',
      description: 'We use biodegradable and recyclable packaging materials to minimize environmental impact and reduce plastic waste.',
      icon: (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M21.82,15.42L19.32,19.75C18.83,20.61 17.92,21.06 17,21H15V23L12.5,18.5L15,14V16H17.82L15.6,12.15L19.93,9.65L21.73,12.77C22.25,13.54 22.32,14.57 21.82,15.42M9.21,3.06H14.21C15.19,3.06 16.04,3.63 16.45,4.45L17.45,6.19L19.18,5.19L16.54,9.6L11.39,9.69L13.12,8.69L11.71,6.24L9.5,10.09L5.16,7.59L6.96,4.47C7.37,3.64 8.22,3.06 9.21,3.06M5.05,19.76L2.55,15.43C2.06,14.58 2.13,13.56 2.64,12.79L3.64,11.06L1.91,10.06L7.05,10.14L9.7,14.56L7.97,13.56L6.56,16H11V21H7.4C6.47,21.07 5.55,20.61 5.05,19.76Z" />
        </svg>
      ),
    },
  ];

  // Animation for services
  useEffect(() => {
    // const section = sectionRef.current;
    const serviceItems = servicesRef.current.querySelectorAll('.service-item');

    // Animate services on scroll
    serviceItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { 
          opacity: 0,
          y: 50
        },
        { 
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          },
          delay: index * 0.2
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section 
      id="services" 
      ref={sectionRef}
      className="py-24 bg-gradient-to-b from-[#F5F5F0] to-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-[#3A7D44]/5 rounded-full -translate-y-1/2" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-[#A5D6A7]/10 rounded-full translate-y-1/2" />
      
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
            Our Approach
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-nunito text-[#1E3F22] mt-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Sustainable & Ethical
          </motion.h2>
          <motion.p 
            className="mt-4 text-[#3A7D44]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Nisarga Organics, we're committed to sustainable farming practices that benefit 
            both people and the planet. Here's how we make a difference.
          </motion.p>
        </div>

        {/* Services grid */}
        <div 
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {services.map((service) => (
            <div 
              key={service.id}
              className="service-item bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 border border-[#3A7D44]/10 flex flex-col items-center text-center"
            >
              <div className="w-16 h-16 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mb-5 text-[#3A7D44]">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#1E3F22] mb-3">{service.title}</h3>
              <p className="text-[#3A7D44]/80">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div 
          className="mt-20 bg-white rounded-2xl p-8 shadow-md border border-[#3A7D44]/10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold text-[#1E3F22] mb-4">Our Certifications</h3>
              <p className="text-[#3A7D44]/80 mb-6">
                We take pride in maintaining the highest standards of organic farming and food safety. 
                Our products are certified by leading organizations, ensuring you receive only the best quality.
              </p>
              <ul className="space-y-3">
                {['Organic Certified', 'Non-GMO Verified', 'Fair Trade Certified', 'Eco-Friendly Practices'].map((cert, index) => (
                  <li key={index} className="flex items-center">
                    <svg className="w-5 h-5 text-[#3A7D44] mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                    </svg>
                    <span className="text-[#1E3F22]">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-4">
              {[1, 2, 3, 4].map((item) => (
                <div key={item} className="bg-[#F5F5F0] rounded-lg p-4 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#3A7D44]/20 flex items-center justify-center">
                    <svg className="w-8 h-8 text-[#3A7D44]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12,2L15.09,8.26L22,9.27L17,14.14L18.18,21.02L12,17.77L5.82,21.02L7,14.14L2,9.27L8.91,8.26L12,2M12,5.5L10.16,9.05L6.62,9.63L9.31,12.26L8.68,15.77L12,14.09L15.32,15.77L14.69,12.26L17.38,9.63L13.84,9.05L12,5.5Z" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#about" 
            className="inline-flex items-center text-[#3A7D44] font-medium hover:text-[#2C5E33] transition-colors"
          >
            <span>Learn more about our farming practices</span>
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;