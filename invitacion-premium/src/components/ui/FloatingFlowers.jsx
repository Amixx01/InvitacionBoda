import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const FloatingFlowers = () => {
  // Generar partículas flotantes "dust" en el aire
  const particles = useMemo(() => {
    return Array.from({ length: 15 }).map((_, i) => ({
      left: `${(Math.random() * 100).toFixed(2)}%`,
      top: `${(Math.random() * 100).toFixed(2)}%`,
      size: Math.random() * 3 + 1, // 1px a 4px de grosor
      duration: Math.random() * 20 + 10, // 10 a 30s
      delay: Math.random() * 5,
    }));
  }, []);

  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
      
      {/* Partículas de polvo de hadas (Minimalistas y lentas) */}
      {particles.map((p, i) => (
        <motion.div
          key={`particle-${i}`}
          className="absolute rounded-full bg-[#A88B5E]"
          style={{
            left: p.left,
            top: p.top,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          animate={{
            y: [-20, Math.random() * -100 - 50],
            x: [0, (Math.random() - 0.5) * 50],
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear"
          }}
        />
      ))}

      {/* SVG Floral Minimalista - Esquina Superior Izquierda */}
      <motion.div 
        initial={{ opacity: 0, rotate: -15, scale: 0.8 }}
        animate={{ opacity: 0.15, rotate: 0, scale: 1 }}
        transition={{ duration: 3, delay: 1, ease: 'easeOut' }}
        className="absolute -top-10 -left-10 w-64 h-64 sm:w-96 sm:h-96"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-[#A88B5E]" strokeWidth="0.5">
          <path d="M 0 100 Q 50 50, 100 100 T 200 100" />
          <path d="M 50 150 Q 100 100, 150 150" />
          <circle cx="100" cy="100" r="3" fill="#A88B5E" />
          <circle cx="150" cy="80" r="2" fill="#A88B5E" />
          <circle cx="70" cy="60" r="1.5" fill="#A88B5E" />
          <path d="M 100 100 C 130 60, 170 80, 200 50" />
          <path d="M 100 100 C 60 70, 70 30, 20 20" />
          {/* Hojas */}
          <path d="M 60 70 Q 75 60, 80 80 Q 65 90, 60 70" />
          <path d="M 130 110 Q 145 100, 150 120 Q 135 130, 130 110" />
        </svg>
      </motion.div>

      {/* SVG Floral Minimalista - Esquina Inferior Derecha */}
      <motion.div 
        initial={{ opacity: 0, rotate: 200, scale: 0.8 }}
        animate={{ opacity: 0.15, rotate: 180, scale: 1 }}
        transition={{ duration: 3, delay: 1.5, ease: 'easeOut' }}
        className="absolute -bottom-10 -right-10 w-72 h-72 sm:w-[500px] sm:h-[500px]"
      >
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-none stroke-[#A88B5E]" strokeWidth="0.3">
          <path d="M 0 100 Q 50 50, 100 100 T 200 100" />
          <path d="M 50 150 Q 100 100, 150 150" />
          <path d="M 100 100 C 130 60, 170 80, 200 50" />
          <path d="M 100 100 C 60 70, 70 30, 20 20" />
          {/* Hojas grandes */}
          <path d="M 100 60 Q 120 40, 130 65 Q 110 85, 100 60" />
          <path d="M 160 110 Q 180 90, 190 115 Q 170 135, 160 110" />
        </svg>
      </motion.div>

    </div>
  );
};

export default FloatingFlowers;
