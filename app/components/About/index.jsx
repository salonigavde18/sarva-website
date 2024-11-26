import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="min-h-screen py-20">
      <div className="flex w-full h-full gap-16 max-w-7xl mx-auto px-5">
        {/* Video Column */}
        <motion.div 
          className="flex-1 overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <video
            src="/about.mp4"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </motion.div>

        {/* Content Column */}
        <div className="flex-1 flex flex-col justify-center">
          <motion.h2 
            className="text-5xl font-light mb-12 tracking-wide"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            About
          </motion.h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-600">
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              At Sarva, our journey began with a simple idea: to create fashion that celebrates individuality and authenticity. Founded by Saloni Gavde, Sarva was born from a passion for creativity and a desire to redefine comfort and style. Inspired by India's rich, diverse culture and bustling textile markets, Saloni envisioned a brand that blends contemporary design with timeless elegance.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              The story started during my college years, where I was influenced by global fashion trends and the narratives behind handcrafted pieces. Determined to build a clothing line that champions sustainability and quality, I committed to sourcing fine fabrics and collaborating with skilled artisans who share this vision.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Every Sarva collection is thoughtfully curated to embody our philosophy: clothing should be more than just what you wear—it should be a statement of who you are. Our goal is to provide a wardrobe that empowers and inspires, giving customers confidence and a sense of value.
            </motion.p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
