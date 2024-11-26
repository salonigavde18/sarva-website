import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white pt-[80px] px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Background Video with Animation */}
      <motion.div
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ 
          duration: 1.2,
          ease: [0.6, 0.01, -0.05, 0.9]
        }}
        className="absolute top-0 left-0 w-full h-full"
      >
        <video
          className="w-full h-full object-cover"
          src="/hero-video.mp4"
          autoPlay
          loop
          muted
          playsInline
        ></video>
      </motion.div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60"></div>

      {/* Hero Content */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="relative z-10 text-center max-w-4xl mx-auto px-6"
      >
        <h1 className="text-6xl md:text-7xl font-light mb-6 tracking-wider">
          Elevate Your Style
        </h1>
        <p className="text-xl md:text-2xl mb-8 font-light tracking-wide">
          Discover timeless elegance in every piece
        </p>
        <div className="flex gap-6 justify-center">
          <a
            href="#about"
            className="border border-white px-8 py-3 text-lg hover:bg-white/10 transition-colors duration-300"
          >
            Learn More
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
