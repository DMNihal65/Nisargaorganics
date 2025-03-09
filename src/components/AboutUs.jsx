import { useRef, useEffect, useState } from 'react';
import { motion, useInView, useAnimation } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leafElement from '../assets/leaf_element.svg';
import { 
  Leaf, 
  Heart, 
  Globe, 
  Users, 
  Sprout, 
  ShieldCheck, 
  ChevronRight,
  Quote,
  ArrowRight
} from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const missionRef = useRef(null);
  const valuesRef = useRef(null);
  const testimonialsRef = useRef(null);
  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

  // Values data with Lucide icons
  const valuesData = [
    {
      title: "Sustainability",
      description: "We're committed to environmentally responsible practices throughout our supply chain.",
      icon: <Leaf size={24} />,
      color: "#3A7D44"
    },
    {
      title: "Transparency",
      description: "We believe in complete honesty about our products, processes, and pricing.",
      icon: <ShieldCheck size={24} />,
      color: "#4D8B31"
    },
    {
      title: "Community",
      description: "We support local farmers and strengthen rural communities through fair partnerships.",
      icon: <Users size={24} />,
      color: "#5E9A3B"
    },
    {
      title: "Innovation",
      description: "We continuously improve our methods to better serve people and planet.",
      icon: <Sprout size={24} />,
      color: "#6CAE3E"
    }
  ];

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Organic Millet Farmer, Karnataka",
      quote: "Partnering with Nisarga Organics has transformed my farm and family's life. Their fair pricing and long-term commitment helped me convert fully to organic practices.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      color: "#3A7D44"
    },
    {
      id: 2,
      name: "Lakshmi Devi",
      location: "Rice Farmer, Tamil Nadu",
      quote: "Before Nisarga, I struggled to get fair prices for my organic rice. Now I have a reliable partner who values quality and traditional farming methods.",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      color: "#4D8B31"
    },
    {
      id: 3,
      name: "Arjun Singh",
      location: "Pulses Grower, Madhya Pradesh",
      quote: "The training and support from Nisarga Organics helped me transition to organic farming. My soil is healthier and my yields have improved year after year.",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      color: "#5E9A3B"
    },
    {
      id: 4,
      name: "Meena Patel",
      location: "Spice Farmer, Gujarat",
      quote: "As a woman farmer, I appreciate how Nisarga Organics has created opportunities for me to lead and grow my business while maintaining our traditional spice growing methods.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
      color: "#6CAE3E"
    },
    {
      id: 5,
      name: "Vijay Reddy",
      location: "Millet Farmer, Andhra Pradesh",
      quote: "The consistent demand through Nisarga has allowed me to plan my crops better and invest in my farm's future. My children now see farming as a viable profession.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
      color: "#3A7D44"
    }
  ];

  // Animate on scroll into view
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // GSAP animations
  useEffect(() => {
    // Title animation
    gsap.from(titleRef.current.children, {
      opacity: 0,
      y: 30,
      stagger: 0.2,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: titleRef.current,
        start: "top 80%",
      }
    });

    // Mission section animation
    gsap.from(missionRef.current.children, {
      opacity: 0,
      y: 50,
      stagger: 0.15,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: {
        trigger: missionRef.current,
        start: "top 75%",
      }
    });

    // Values animation
    const valueCards = valuesRef.current.querySelectorAll('.value-card');
    gsap.fromTo(
      valueCards,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
        }
      }
    );

    // Auto-scrolling testimonials
    const testimonialTrack = testimonialsRef.current.querySelector('.testimonial-track');
    
    // Clone testimonials for infinite scroll effect
    if (testimonialTrack) {
      const clonedItems = [...testimonialTrack.children]
        .slice(0, Math.min(3, testimonialTrack.children.length))
        .map(item => item.cloneNode(true));
      
      clonedItems.forEach(item => {
        testimonialTrack.appendChild(item);
      });
      
      // Animate the testimonial track
      gsap.to(testimonialTrack, {
        x: `-${(testimonials.length) * 33.33}%`,
        ease: "none",
        duration: testimonials.length * 10,
        repeat: -1,
        scrollTrigger: {
          trigger: testimonialsRef.current,
          start: "top bottom",
          end: "bottom top",
          toggleActions: "play pause resume pause"
        }
      });
    }
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24 bg-[#FAFAF8] relative overflow-hidden"
    >
      {/* Floating leaf elements */}
      {[1, 2, 3, 4, 5, 6].map((_, index) => (
        <motion.div
          key={`leaf-${index}`}
          className="absolute pointer-events-none z-0"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            width: `${Math.random() * 40 + 20}px`,
            height: `${Math.random() * 40 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, Math.random() * 10 - 5, 0],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: Math.random() * 5 + 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.8
          }}
        >
          <img src={leafElement} alt="" className="w-full h-full opacity-20" />
        </motion.div>
      ))}
      
      {/* Background gradient circles */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#3A7D44]/5 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#6CAE3E]/5 rounded-full blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div ref={titleRef} className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block bg-[#3A7D44]/10 px-4 py-1 rounded-full mb-2"
          >
            <span className="text-[#3A7D44] text-sm font-medium tracking-widest uppercase flex items-center">
              <Leaf size={14} className="mr-2" />
              Our Story
            </span>
          </motion.div>
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

        {/* Our mission - Modern card layout */}
        <div ref={missionRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-24">
          {/* Main mission statement */}
          <motion.div
            className="md:col-span-7 rounded-3xl overflow-hidden relative"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 p-8 h-full flex flex-col">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#3A7D44]/10 mb-4">
                  <Heart size={24} className="text-[#3A7D44]" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-[#1E3F22] mb-2">Our Mission</h3>
                <div className="w-20 h-1 bg-[#3A7D44] rounded-full mb-6"></div>
              </div>
              
              <p className="text-[#3A7D44]/80 mb-6 leading-relaxed">
                At Nisarga Organics, we believe that healthy food should be accessible to everyone, 
                and that farmers should be fairly compensated for their dedication to sustainable practices.
              </p>
              
              <p className="text-[#3A7D44]/80 mb-6 leading-relaxed">
                We're building a transparent supply chain that connects conscious consumers directly with 
                organic farmers, eliminating unnecessary middlemen and ensuring quality at every step.
              </p>
              
              <div className="mt-auto">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mr-3">
                      <Globe size={20} className="text-[#3A7D44]" />
                    </div>
                    <div>
                      <span className="block text-sm text-[#3A7D44]/60">Impact</span>
                      <span className="block font-medium text-[#1E3F22]">100+ Farming Communities</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mr-3">
                      <Sprout size={20} className="text-[#3A7D44]" />
                    </div>
                    <div>
                      <span className="block text-sm text-[#3A7D44]/60">Cultivation</span>
                      <span className="block font-medium text-[#1E3F22]">10,000+ Acres Organic Land</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image card */}
          <motion.div
            className="md:col-span-5 rounded-3xl overflow-hidden relative h-80 md:h-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#3A7D44]/10 to-[#3A7D44]/5 backdrop-blur-sm z-0"></div>
            <div className="relative z-10 h-full flex items-center justify-center p-8">
              <div className="w-full h-full rounded-2xl overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
                  alt="Organic farming" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Our values - Modern grid */}
        <div className="mb-24">
          <motion.h3 
            className="text-3xl font-bold text-[#1E3F22] text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Core Values
          </motion.h3>
          
          <div ref={valuesRef} className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {valuesData.map((value, index) => (
              <motion.div 
                key={index}
                className="value-card bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#3A7D44]/10 hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div 
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5"
                  style={{ 
                    background: `linear-gradient(135deg, ${value.color}15, ${value.color}30)`,
                  }}
                >
                  <div className="text-[#3A7D44]">
                    {value.icon}
                  </div>
                </div>
                <h4 className="text-xl font-bold text-[#1E3F22] mb-3">{value.title}</h4>
                <p className="text-[#3A7D44]/80">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Farmer testimonials - Auto-scrolling carousel */}
        <div className="mb-24">
          <motion.h3 
            className="text-3xl font-bold text-[#1E3F22] text-center mb-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Voices from Our Farmers
          </motion.h3>
          
          <div 
            ref={testimonialsRef} 
            className="relative overflow-hidden"
          >
            <div className="testimonial-track flex">
              {testimonials.map((testimonial) => (
                <div 
                  key={testimonial.id} 
                  className="w-full md:w-1/3 flex-shrink-0 px-4"
                >
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-[#3A7D44]/10 h-full hover:shadow-lg transition-all duration-300">
                    <div className="mb-6 flex justify-between items-start">
                      <div className="flex items-center">
                        <div className="w-14 h-14 rounded-full overflow-hidden mr-4 border-2" style={{ borderColor: testimonial.color }}>
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold text-[#1E3F22]">{testimonial.name}</h4>
                          <p className="text-sm text-[#3A7D44]">{testimonial.location}</p>
                        </div>
                      </div>
                      <Quote size={24} className="text-[#3A7D44]/20" />
                    </div>
                    <p className="text-[#3A7D44]/80 italic leading-relaxed">"{testimonial.quote}"</p>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Gradient overlays for infinite scroll effect */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-[#FAFAF8] to-transparent z-10"></div>
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-[#FAFAF8] to-transparent z-10"></div>
          </div>
          
          {/* Manual navigation dots */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.slice(0, Math.min(5, testimonials.length)).map((_, index) => (
              <button 
                key={index}
                className="w-2 h-2 rounded-full bg-[#3A7D44]/30 hover:bg-[#3A7D44] transition-colors duration-300"
                aria-label={`Go to testimonial ${index + 1}`}
              ></button>
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
            className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-300 inline-flex items-center group"
          >
            <span>Connect With Us</span>
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs; 