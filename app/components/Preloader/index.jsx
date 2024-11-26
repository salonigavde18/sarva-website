"use client"
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Preloader = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
        }
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 15);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
    >
      <div className="relative w-full max-w-md px-4">
        <div className="font-geist-mono text-center mb-4">
          <span className="text-2xl">{progress}%</span>
        </div>
        <div className="w-full bg-gray-200 h-1">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.1 }}
            className="h-full bg-black"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Preloader;
