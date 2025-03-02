// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const Loader = () => {
  // Leaf path for SVG
  const leafPath = "M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 2c3.86 0 7 3.14 7 7 0 3.86-3.14 7-7 7-3.86 0-7-3.14-7-7 0-3.86 3.14-7 7-7zm-1 3v6l5-3-5-3z";

  return (
    <motion.div 
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#F5F5F0]"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: "easeInOut" }
      }}
    >
      <div className="relative flex flex-col items-center">
        {/* Logo Container */}
        <motion.div
          className="mb-8 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          {/* Circular background */}
          <motion.div 
            className="w-24 h-24 rounded-full bg-[#3A7D44]/10 flex items-center justify-center"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            {/* Inner circle */}
            <motion.div 
              className="w-20 h-20 rounded-full bg-[#3A7D44]/20 flex items-center justify-center"
              animate={{ scale: [1, 1.08, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.1 }}
            >
              {/* Leaf icon */}
              <motion.svg 
                width="40" 
                height="40" 
                viewBox="0 0 24 24" 
                fill="#3A7D44"
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 3, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
              >
                <path d={leafPath} />
              </motion.svg>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Brand Name */}
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <h1 className="text-[#3A7D44] text-2xl font-semibold tracking-wider font-nunito">
            NISARGA ORGANICS
          </h1>
          
          {/* Loading text */}
          <div className="mt-4 flex items-center">
            <span className="text-[#3A7D44]/70 text-sm tracking-widest">
              LOADING
            </span>
            <motion.div 
              className="flex ml-2"
              initial={{ opacity: 1 }}
            >
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-1.5 h-1.5 mx-0.5 rounded-full bg-[#3A7D44]/70"
                  animate={{ 
                    opacity: [0.4, 1, 0.4],
                    scale: [0.8, 1, 0.8]
                  }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity, 
                    delay: dot * 0.2,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader; 