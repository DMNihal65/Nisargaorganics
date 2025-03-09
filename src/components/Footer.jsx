import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { 
  Instagram, 
  Facebook, 
  Twitter, 
  MessageSquare, 
  ChevronRight, 
  Send, 
  Leaf,
  Mail
} from 'lucide-react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Quick links
  const quickLinks = [
    { name: 'Home', href: '#' },
    { name: 'Products', href: '#products' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  // Product categories
  const productCategories = [
    { name: 'Millets', href: '#products' },
    { name: 'Grains & Pulses', href: '#products' },
    { name: 'Seeds & Spices', href: '#products' },
    { name: 'Organic Oils', href: '#products' },
    { name: 'Dry Fruits', href: '#products' },
  ];

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

  // Handle newsletter subscription
  const handleSubscribe = (e) => {
    e.preventDefault();
    // Simulate subscription
    setSubscribed(true);
    setTimeout(() => {
      setEmail('');
      setSubscribed(false);
    }, 3000);
  };

  return (
    <footer className="bg-[#1E3F22] text-white pt-16 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#3A7D44]/10 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A5D6A7]/5 rounded-full -translate-x-1/2 translate-y-1/2 blur-2xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company info */}
          <div>
            <div className="flex items-center mb-6">
              {/* Logo */}
              <div className="w-10 h-10 mr-3 bg-white/10 rounded-full flex items-center justify-center">
                <Leaf size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold font-nunito">Nisarga Organics</h3>
                <p className="text-sm text-white/70">Fresh from Nature, Straight to You</p>
              </div>
            </div>
            <p className="text-white/70 mb-6">
              We connect health-conscious consumers directly with organic farmers, 
              ensuring fair compensation and high-quality, affordable organic products.
            </p>
            <div className="flex space-x-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#3A7D44] transition-all duration-300 transform hover:scale-105"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3A7D44] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 text-[#3A7D44] group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Product categories */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Product Categories
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3A7D44] rounded-full"></span>
            </h3>
            <ul className="space-y-3">
              {productCategories.map((category) => (
                <li key={category.name}>
                  <a 
                    href={category.href} 
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                  >
                    <ChevronRight size={16} className="mr-2 text-[#3A7D44] group-hover:translate-x-1 transition-transform duration-300" />
                    {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 relative inline-block">
              Newsletter
              <span className="absolute -bottom-2 left-0 w-12 h-1 bg-[#3A7D44] rounded-full"></span>
            </h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter for updates on new products, farming practices, and special offers.
            </p>
            <form onSubmit={handleSubscribe} className="relative">
              <div className="flex flex-col space-y-3">
                <div className="relative">
                  <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                    required
                    className="pl-10 pr-4 py-3 bg-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3A7D44] text-white placeholder-white/50 w-full"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-[#3A7D44] hover:bg-[#2C5E33] text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center group"
                >
                  <span>Subscribe</span>
                  <Send size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                {subscribed && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-[#A5D6A7] bg-[#3A7D44]/20 p-2 rounded-md mt-2"
                  >
                    Thank you for subscribing!
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Divider with leaf pattern */}
        <div className="relative h-px bg-white/10 my-8">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1E3F22] px-4">
            <Leaf size={16} className="text-[#3A7D44]" />
          </div>
        </div>

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/70 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Nisarga Organics. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Terms of Service
            </a>
            <a href="#" className="text-white/70 hover:text-white text-sm transition-colors duration-300 hover:underline">
              Shipping Policy
            </a>
          </div>
        </div>
        
        {/* Back to top button */}
        <div className="flex justify-center mt-8">
          <a 
            href="#" 
            className="w-10 h-10 rounded-full bg-[#3A7D44]/20 flex items-center justify-center text-white hover:bg-[#3A7D44] transition-all duration-300 group"
            aria-label="Back to top"
          >
            <ChevronRight size={20} className="rotate-[-90deg] group-hover:translate-y-[-2px] transition-transform duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 