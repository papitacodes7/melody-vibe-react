
import React from "react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=2070&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-josefin font-bold mb-6 leading-tight"
        >
          Music for the{" "}
          <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Next Generation
          </span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl font-josefin mb-12 text-gray-200 max-w-3xl mx-auto"
        >
          Discover, stream, and connect with the world's best independent artists.
        </motion.p>
        
        <motion.button 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-white text-black px-8 py-4 rounded-full font-josefin font-semibold text-lg hover:bg-gray-200 transition-colors duration-300 shadow-lg"
        >
          Explore Now
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
