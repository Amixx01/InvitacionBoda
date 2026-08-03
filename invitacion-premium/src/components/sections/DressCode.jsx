import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const DressCode = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#2F3E46] flex flex-col items-center justify-center text-center px-6 text-white min-h-[500px]">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-xl flex flex-col items-center"
      >
        <span className="font-sans text-[#A88B5E] text-xs uppercase tracking-[0.4em] mb-6">Dress Code</span>
        <h2 className="font-serif text-4xl sm:text-5xl mb-8">{data.dressCode.type}</h2>
        
        <div className="flex space-x-4 mb-8">
          {data.dressCode.colorPalette.map((color, idx) => (
            <motion.div 
               key={idx}
               initial={{ opacity: 0, y: 10 }}
               whileInView={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.15 + 0.5 }}
               className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 shadow-lg"
               style={{ backgroundColor: color }}
            />
          ))}
        </div>
        
        <p className="font-serif text-white/70 text-sm sm:text-base leading-relaxed max-w-md italic">
          "{data.dressCode.description}"
        </p>
      </motion.div>
    </section>
  );
};

export default DressCode;
