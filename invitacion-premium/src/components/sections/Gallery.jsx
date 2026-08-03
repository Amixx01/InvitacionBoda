import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const Gallery = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#EAE5D9] flex justify-center px-4">
      <div className="max-w-6xl w-full grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
        {data.gallery.map((imgUrl, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.03, zIndex: 10, boxShadow: "0 25px 50px -12px rgba(47,62,70,0.2)" }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.15, hover: { duration: 0.4 } }}
            className={`relative bg-white/70 backdrop-blur-sm overflow-hidden rounded-xl shadow-lg border border-white/60 ${
              index === 0 ? 'col-span-2 row-span-2 aspect-square' : 'col-span-1 aspect-[3/4]'
            }`}
          >
            {/* Si la URL falla, mantenemos la caja elegante */}
            <div className="absolute inset-0 bg-[#A88B5E]/10" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
