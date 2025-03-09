import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring, useInView } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import leafElement from '../assets/leaf_element.svg';
import { 
  Leaf, 
  Sprout, 
  Truck, 
  ShieldCheck, 
  Recycle, 
  Users, 
  BarChart, 
  CheckCircle2, 
  ChevronRight,
  Award,
  Droplets,
  Sun,
  Heart
} from 'lucide-react';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  // Refs for animations
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const servicesGridRef = useRef(null);
  const processRef = useRef(null);
  const certificationRef = useRef(null);

  // Services data
  const services = [
    {
      id: 1,
      title: "Sustainable Farming",
      description: "We partner with farmers who practice sustainable agriculture, preserving soil health and biodiversity.",
      icon: <Sprout size={28} />,
      color: "#3A7D44",
      size: "large",
      benefits: [
        "Zero chemical pesticides",
        "Water conservation techniques",
        "Soil regeneration practices"
      ]
    },
    {
      id: 2,
      title: "Eco-Friendly Packaging",
      description: "All our products come in biodegradable or recyclable packaging to minimize environmental impact.",
      icon: <Recycle size={28} />,
      color: "#6CAE3E",
      size: "small",
      benefits: [
        "Biodegradable materials",
        "Minimal plastic use",
        "Reusable containers"
      ]
    },
    {
      id: 3,
      title: "Fair Trade Practices",
      description: "We ensure farmers receive fair compensation for their produce, supporting rural communities.",
      icon: <Users size={28} />,
      color: "#5E9A3B",
      size: "small",
      benefits: [
        "Direct farmer payments",
        "Community development",
        "Transparent pricing"
      ]
    },
    {
      id: 4,
      title: "Quality Assurance",
      description: "Every product undergoes rigorous quality checks to ensure you receive the best organic food.",
      icon: <ShieldCheck size={28} />,
      color: "#4D8B31",
      size: "small",
      benefits: [
        "Lab-tested products",
        "Organic certification",
        "Nutrient preservation"
      ]
    },
    {
      id: 5,
      title: "Carbon-Neutral Delivery",
      description: "Our delivery network is designed to minimize carbon footprint through route optimization and electric vehicles.",
      icon: <Truck size={28} />,
      color: "#3A7D44",
      size: "small",
      benefits: [
        "Electric delivery fleet",
        "Optimized routes",
        "Carbon offset programs"
      ]
    },
    
  ];

  // Process steps
  const processSteps = [
    {
      title: "Sustainable Harvesting",
      description: "Farmers use traditional and sustainable methods to harvest crops at peak ripeness, ensuring maximum nutrition and flavor.",
      icon: <Leaf size={24} />,
      color: "#3A7D44"
    },
    {
      title: "Quality Inspection",
      description: "Each batch undergoes thorough quality checks for organic certification, nutritional content, and freshness.",
      icon: <ShieldCheck size={24} />,
      color: "#6CAE3E"
    },
    {
      title: "Eco-Friendly Processing",
      description: "Minimal processing using energy-efficient methods preserves nutrients and natural flavors.",
      icon: <Recycle size={24} />,
      color: "#5E9A3B"
    },
    {
      title: "Sustainable Packaging",
      description: "Products are packaged in biodegradable or recyclable materials to minimize environmental impact.",
      icon: <Droplets size={24} />,
      color: "#4D8B31"
    },
    {
      title: "Carbon-Neutral Delivery",
      description: "Our optimized delivery network uses electric vehicles and carbon offset programs to minimize environmental impact.",
      icon: <Truck size={24} />,
      color: "#3A7D44"
    }
  ];

  // Certifications
  const certifications = [
    {
      name: "USDA Organic",
      description: "Certified organic according to USDA standards",
      icon: <Award size={32} />,
      color: "#3A7D44"
    },
    {
      name: "Non-GMO Project",
      description: "Verified products without genetically modified organisms",
      icon: <Sprout size={32} />,
      color: "#6CAE3E"
    },
    {
      name: "Fair Trade Certified",
      description: "Meeting rigorous social, environmental and economic standards",
      icon: <Heart size={32} />,
      color: "#5E9A3B"
    },
    {
      name: "Rainforest Alliance",
      description: "Supporting biodiversity and sustainable livelihoods",
      icon: <Sun size={32} />,
      color: "#4D8B31"
    }
  ];

  // Parallax effect for the title section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 0.3], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const springY = useSpring(y, { damping: 15, stiffness: 100 });
  const springOpacity = useSpring(opacity, { damping: 15, stiffness: 100 });

  // Main GSAP animations
  useEffect(() => {
    // Services grid animation
    const serviceCards = servicesGridRef.current.querySelectorAll('.service-card');
    
    gsap.fromTo(serviceCards, 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesGridRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );

    // Process steps animation
    const processSteps = processRef.current.querySelectorAll('.process-step');
    const processLines = processRef.current.querySelectorAll('.process-line');
    
    gsap.fromTo(processSteps, 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );
    
    gsap.fromTo(processLines, 
      { height: 0, opacity: 0 },
      { 
        height: "100%", 
        opacity: 1, 
        stagger: 0.2, 
        duration: 0.8,
        delay: 0.3,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: processRef.current,
          start: "top 75%",
          toggleActions: "play none none none"
        }
      }
    );

    // Certifications animation
    const certCards = certificationRef.current.querySelectorAll('.cert-card');
    
    gsap.fromTo(certCards, 
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1, 
        duration: 0.6,
        ease: "power2.out",
        scrollTrigger: {
          trigger: certificationRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      }
    );
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="services" 
      className="relative overflow-hidden py-32"
      style={{
        background: "linear-gradient(to bottom, #fafcf8, #f2f7f0)",
      }}
    >
      {/* Floating leaves background */}
      {Array.from({ length: 12 }).map((_, index) => (
        <motion.div
          key={`leaf-${index}`}
          className="absolute pointer-events-none"
          style={{
            left: `${Math.random() * 90 + 5}%`,
            top: `${Math.random() * 90 + 5}%`,
            opacity: 0.07 + Math.random() * 0.08,
            width: `${Math.random() * 60 + 20}px`,
            height: `${Math.random() * 60 + 20}px`,
            transform: `rotate(${Math.random() * 360}deg)`,
            zIndex: 0
          }}
          animate={{
            y: [0, Math.random() * -25 - 10, 0],
            x: [0, Math.random() * 20 - 10, 0],
            rotate: [0, Math.random() * 20 - 10, 0],
          }}
          transition={{
            duration: Math.random() * 8 + 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: index * 0.5
          }}
        >
          <img src={leafElement} alt="" className="w-full h-full" />
        </motion.div>
      ))}

      {/* Background gradient circles */}
      <motion.div 
        className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full" style={{ background: "radial-gradient(circle, rgba(58,125,68,0.2) 0%, rgba(58,125,68,0) 70%)" }}></div>
        <div className="absolute top-[60%] -right-[10%] w-[40%] h-[40%] rounded-full" style={{ background: "radial-gradient(circle, rgba(94,154,59,0.15) 0%, rgba(94,154,59,0) 70%)" }}></div>
        <div className="absolute top-[80%] left-[20%] w-[30%] h-[30%] rounded-full" style={{ background: "radial-gradient(circle, rgba(77,139,49,0.1) 0%, rgba(77,139,49,0) 70%)" }}></div>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header with parallax effect */}
        <motion.div 
          ref={titleRef}
          className="text-center mb-24"
          style={{ 
            y: springY,
            opacity: springOpacity
          }}
        >
          <motion.div 
            className="inline-block bg-[#3A7D44]/10 px-5 py-2 rounded-full mb-3"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-[#3A7D44] text-sm font-medium tracking-widest uppercase">
              Our Approach
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-5xl md:text-6xl font-bold font-nunito text-[#1E3F22] mt-3 mb-6"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <span className="block">Sustainable <span className="text-[#3A7D44]">&</span> Ethical</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg text-[#3A7D44]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            At Nisarga Organics, we're committed to sustainable farming practices that benefit 
            both people and the planet. Here's how we make a difference.
          </motion.p>
        </motion.div>

        {/* Services - Modern bento grid layout */}
        <div 
          ref={servicesGridRef}
          className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              className={`service-card relative rounded-3xl overflow-hidden backdrop-blur-sm ${
                service.size === 'large' ? 'md:col-span-8' : 'md:col-span-4'
              }`}
              whileHover={{ 
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" } 
              }}
            >
              {/* Glassmorphism background */}
              <div className="absolute inset-0 bg-white/40 backdrop-blur-sm z-0"></div>
              
              {/* Border with gradient animation */}
              <div className="absolute inset-0 rounded-3xl" style={{
                background: `linear-gradient(45deg, ${service.color}20, transparent, ${service.color}10)`,
                backgroundSize: "200% 200%",
                animation: "gradientBorderAnimation 8s ease infinite",
              }}></div>
              
              {/* Content wrapper */}
              <div className="relative z-10 h-full p-8 md:p-10 flex flex-col">
                {/* Service icon with animated gradient */}
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500"
                  style={{ 
                    background: `linear-gradient(135deg, ${service.color}20, ${service.color}40)`,
                    boxShadow: `0 8px 20px -10px ${service.color}50`
                  }}
                >
                  <div className="text-[#3A7D44]">
                    {service.icon}
                  </div>
                </div>
                
                {/* Service title with animation */}
                <h3 className="text-3xl font-bold text-[#1E3F22] mb-4 group transition-all duration-300 relative">
                  {service.title}
                  <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-[#3A7D44] group-hover:w-1/3 transition-all duration-500"></span>
                </h3>
                
                {/* Service description */}
                <p className="text-[#3A7D44]/80 mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                {/* Service benefits */}
                <div className="mt-auto space-y-4">
                  {service.benefits.map((benefit, i) => (
                    <div 
                      key={i} 
                      className="flex items-center transition-all duration-300 hover:translate-x-1"
                    >
                      <span 
                        className="w-8 h-8 rounded-full flex items-center justify-center mr-3"
                        style={{ 
                          backgroundColor: `${service.color}15`,
                        }}
                      >
                        <CheckCircle2 size={16} className="text-[#3A7D44]" />
                      </span>
                      <span 
                        className="text-sm font-medium"
                        style={{ color: service.color }}
                      >
                        {benefit}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Process timeline - Modern horizontal steps */}
        <div ref={processRef} className="mb-32 relative">
          <motion.h3 
            className="text-3xl font-bold text-[#1E3F22] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Process
          </motion.h3>
          
          <div className="hidden md:block relative max-w-5xl mx-auto">
            {/* Horizontal connecting line */}
            <div className="absolute top-16 left-0 right-0 h-1 bg-gradient-to-r from-[#3A7D44]/20 via-[#6CAE3E]/40 to-[#3A7D44]/20 rounded-full"></div>
            
            {/* Process steps */}
            <div className="grid grid-cols-5 gap-4">
              {processSteps.map((step, index) => (
                <div key={index} className="process-step relative">
                  {/* Step icon */}
                  <div className="flex justify-center">
                    <div 
                      className="w-14 h-14 rounded-full flex items-center justify-center bg-white border-4 border-[#F5F7F2] z-10 shadow-md"
                      style={{ 
                        background: `linear-gradient(135deg, white, ${step.color}10)`,
                      }}
                    >
                      <div className="text-[#3A7D44]">
                        {step.icon}
                      </div>
                    </div>
                  </div>
                  
                  {/* Step number */}
                  <div 
                    className="absolute top-0 right-15 w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ 
                      backgroundColor: step.color,
                      transform: "translate(25%, -25%)"
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Step content */}
                  <div className={`mt-6 text-center ${index % 2 === 0 ? '' : 'mt-8'}`}>
                    <h4 className="font-bold text-[#1E3F22] mb-2">{step.title}</h4>
                    <p className="text-sm text-[#3A7D44]/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile process steps */}
          <div className="md:hidden space-y-8">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step flex items-start">
                <div className="relative">
                  <div 
                    className="w-12 h-12 rounded-full flex items-center justify-center bg-white shadow-md mr-4"
                    style={{ 
                      background: `linear-gradient(135deg, white, ${step.color}10)`,
                    }}
                  >
                    <div className="text-[#3A7D44]">
                      {step.icon}
                    </div>
                  </div>
                  
                  <div 
                    className="absolute top-0 right-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold text-white"
                    style={{ 
                      backgroundColor: step.color,
                      transform: "translate(25%, -25%)"
                    }}
                  >
                    {index + 1}
                  </div>
                  
                  {/* Vertical line connecting to next step */}
                  {index < processSteps.length - 1 && (
                    <div className="process-line absolute top-12 left-1/2 w-0.5 h-16 -translate-x-1/2 bg-gradient-to-b from-[#3A7D44]/40 to-[#6CAE3E]/20"></div>
                  )}
                </div>
                
                <div className="flex-1">
                  <h4 className="font-bold text-[#1E3F22] mb-2">{step.title}</h4>
                  <p className="text-sm text-[#3A7D44]/80">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications - Modern grid layout */}
        <div ref={certificationRef} className="mb-20">
          <motion.h3 
            className="text-3xl font-bold text-[#1E3F22] text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Our Certifications
          </motion.h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div 
                key={index}
                className="cert-card bg-white/60 backdrop-blur-sm rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 border border-[#3A7D44]/10"
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                  style={{ 
                    background: `linear-gradient(135deg, ${cert.color}10, ${cert.color}20)`,
                  }}
                >
                  <div className="text-[#3A7D44]">
                    {cert.icon}
                  </div>
                </div>
                <h4 className="font-bold text-[#1E3F22] mb-2">{cert.name}</h4>
                <p className="text-sm text-[#3A7D44]/80">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <a 
            href="#about" 
            className="inline-flex items-center justify-center bg-[#3A7D44] hover:bg-[#2C5E33] text-white font-medium py-4 px-8 rounded-full transition-all duration-300 group"
          >
            <span>Learn More About Our Practices</span>
            <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </motion.div>
      </div>

      {/* CSS for gradient border animation */}
      <style jsx>{`
        @keyframes gradientBorderAnimation {
          0% { background-position: 0% 50% }
          50% { background-position: 100% 50% }
          100% { background-position: 0% 50% }
        }
      `}</style>
    </section>
  );
};

export default Services;