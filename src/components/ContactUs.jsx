import { useState, useRef } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageSquare,
  Send,
  Calendar,
  ArrowRight
} from 'lucide-react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: '',
  });
  const formRef = useRef(null);
  const mapRef = useRef(null);

  // Social media links
  const socialLinks = [
    {
      name: 'Instagram',
      icon: <Instagram size={18} />,
      url: 'https://instagram.com/nisargaorganics',
    },
    {
      name: 'Facebook',
      icon: <Facebook size={18} />,
      url: 'https://facebook.com/nisargaorganics',
    },
    {
      name: 'Twitter',
      icon: <Twitter size={18} />,
      url: 'https://twitter.com/nisargaorganics',
    },
    {
      name: 'WhatsApp',
      icon: <MessageSquare size={18} />,
      url: 'https://wa.me/919876543210',
    },
  ];

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: 'Thank you for your message! We will get back to you soon.',
    });
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      setFormStatus({
        submitted: false,
        success: false,
        message: '',
      });
    }, 5000);
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#FAFAF8] relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#3A7D44]/5 rounded-full -translate-y-1/2 -translate-x-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#A5D6A7]/10 rounded-full translate-y-1/2 translate-x-1/2" />
      
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
            Get In Touch
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold font-nunito text-[#1E3F22] mt-2"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Contact Us
          </motion.h2>
          <motion.p 
            className="mt-4 text-[#3A7D44]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Have questions about our products or services? We'd love to hear from you. 
            Reach out to us and we'll respond as soon as possible.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact form */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-sm border border-[#3A7D44]/10 p-8 hover:shadow-md transition-shadow duration-300"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold text-[#1E3F22] mb-6 flex items-center"
            >
              <MessageSquare size={20} className="mr-2 text-[#3A7D44]" />
              Send Us a Message
            </motion.h3>
            
            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="space-y-6">
                <motion.div variants={itemVariants}>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1E3F22] mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#3A7D44]/20 focus:border-[#3A7D44] focus:ring focus:ring-[#3A7D44]/20 transition-colors"
                    placeholder="John Doe"
                  />
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <motion.div variants={itemVariants}>
                    <label htmlFor="email" className="block text-sm font-medium text-[#1E3F22] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#3A7D44]/20 focus:border-[#3A7D44] focus:ring focus:ring-[#3A7D44]/20 transition-colors"
                      placeholder="john@example.com"
                    />
                  </motion.div>
                  
                  <motion.div variants={itemVariants}>
                    <label htmlFor="phone" className="block text-sm font-medium text-[#1E3F22] mb-2">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-[#3A7D44]/20 focus:border-[#3A7D44] focus:ring focus:ring-[#3A7D44]/20 transition-colors"
                      placeholder="+91 98765 43210"
                    />
                  </motion.div>
                </div>
                
                <motion.div variants={itemVariants}>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1E3F22] mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-[#3A7D44]/20 focus:border-[#3A7D44] focus:ring focus:ring-[#3A7D44]/20 transition-colors resize-none"
                    placeholder="How can we help you?"
                  />
                </motion.div>
                
                <motion.div variants={itemVariants}>
                  <button
                    type="submit"
                    className="w-full bg-[#3A7D44] hover:bg-[#2C5E33] text-white py-3 rounded-lg text-base font-medium transition-colors duration-300 flex items-center justify-center group"
                  >
                    <span>Send Message</span>
                    <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </motion.div>
                
                {formStatus.submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg ${
                      formStatus.success ? 'bg-green-50 text-green-800' : 'bg-red-50 text-red-800'
                    }`}
                  >
                    {formStatus.message}
                  </motion.div>
                )}
              </div>
            </form>
          </motion.div>
          
          {/* Contact information */}
          <div>
            <motion.div
              className="bg-[#F5F5F0] rounded-2xl p-8 mb-8 border border-[#3A7D44]/10 hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-bold text-[#1E3F22] mb-6 flex items-center">
                <Phone size={20} className="mr-2 text-[#3A7D44]" />
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mr-4 text-[#3A7D44] flex-shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3F22]">Our Location</h4>
                    <p className="text-[#3A7D44]/80 mt-1">
                      123 Organic Way, Green Valley<br />
                      Bangalore, Karnataka 560001<br />
                      India
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mr-4 text-[#3A7D44] flex-shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3F22]">Phone Number</h4>
                    <p className="text-[#3A7D44]/80 mt-1">
                      <a href="tel:+919876543210" className="hover:text-[#3A7D44] transition-colors">
                        +91 98765 43210
                      </a>
                    </p>
                    <p className="text-[#3A7D44]/80">
                      <a href="tel:+918012345678" className="hover:text-[#3A7D44] transition-colors">
                        +91 80123 45678
                      </a>
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center mr-4 text-[#3A7D44] flex-shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#1E3F22]">Email Address</h4>
                    <p className="text-[#3A7D44]/80 mt-1">
                      <a href="mailto:info@nisargaorganics.com" className="hover:text-[#3A7D44] transition-colors">
                        info@nisargaorganics.com
                      </a>
                    </p>
                    <p className="text-[#3A7D44]/80">
                      <a href="mailto:support@nisargaorganics.com" className="hover:text-[#3A7D44] transition-colors">
                        support@nisargaorganics.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Social media links */}
              <div className="mt-8">
                <h4 className="font-semibold text-[#1E3F22] mb-4">Connect With Us</h4>
                <div className="flex space-x-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-[#3A7D44]/10 flex items-center justify-center text-[#3A7D44] hover:bg-[#3A7D44] hover:text-white transition-all duration-300 transform hover:scale-105"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
            
            {/* Map */}
            <motion.div
              ref={mapRef}
              className="bg-[#F5F5F0] rounded-2xl overflow-hidden h-64 relative hover:shadow-md transition-shadow duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Placeholder for Google Maps */}
              <div className="absolute inset-0 bg-[#3A7D44]/10 flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={36} className="text-[#3A7D44]/40 mx-auto" />
                  <p className="text-[#3A7D44] mt-2">Google Maps will be embedded here</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Business hours */}
        <motion.div 
          className="mt-16 bg-white rounded-2xl p-8 shadow-sm border border-[#3A7D44]/10 max-w-3xl mx-auto backdrop-blur-sm bg-white/80 hover:shadow-md transition-shadow duration-300"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-[#1E3F22] mb-6 text-center flex items-center justify-center">
            <Clock size={20} className="mr-2 text-[#3A7D44]" />
            Business Hours
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#F5F7F2]/50 p-5 rounded-xl border border-[#3A7D44]/10 hover:border-[#3A7D44]/20 transition-colors duration-300">
              <h4 className="font-semibold text-[#1E3F22] mb-4 flex items-center">
                <Calendar size={16} className="mr-2 text-[#3A7D44]" />
                Store Hours
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Monday - Friday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">9:00 AM - 7:00 PM</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Saturday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Sunday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">Closed</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-[#F5F7F2]/50 p-5 rounded-xl border border-[#3A7D44]/10 hover:border-[#3A7D44]/20 transition-colors duration-300">
              <h4 className="font-semibold text-[#1E3F22] mb-4 flex items-center">
                <MessageSquare size={16} className="mr-2 text-[#3A7D44]" />
                Online Support
              </h4>
              <ul className="space-y-3">
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Monday - Friday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">8:00 AM - 8:00 PM</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Saturday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">9:00 AM - 5:00 PM</span>
                </li>
                <li className="flex justify-between items-center p-2 hover:bg-white rounded-lg transition-colors duration-200">
                  <span className="text-[#3A7D44]/80 flex items-center">
                    <span className="w-2 h-2 bg-[#3A7D44] rounded-full mr-2"></span>
                    Sunday
                  </span>
                  <span className="font-medium text-[#1E3F22] bg-white px-3 py-1 rounded-full text-sm shadow-sm">10:00 AM - 2:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-[#3A7D44]/80 text-sm">
              Need urgent assistance? Contact our 24/7 WhatsApp support at 
              <a href="https://wa.me/919876543210" className="text-[#3A7D44] font-medium ml-1 hover:underline">
                +91 98765 43210
              </a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs; 