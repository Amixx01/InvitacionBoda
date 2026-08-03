import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-2 opacity-70">
      <p className="font-serif text-[10px] tracking-[0.3em] uppercase text-neutral-600">Deslizar</p>
      <div className="w-[1px] h-12 bg-neutral-300 relative overflow-hidden">
        <motion.div 
          className="w-full h-1/2 bg-[#A88B5E] origin-top"
          animate={{
            y: [-25, 50]
          }}
          transition={{
            repeat: Infinity,
            duration: 1.5,
            ease: "easeInOut"
          }}
        />
      </div>
    </div>
  );
};

export default ScrollIndicator;
