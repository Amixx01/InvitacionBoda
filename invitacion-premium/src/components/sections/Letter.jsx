import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data/wedding.json';

const Letter = ({ isOpen, isZoomed, onContinue }) => {
  const { groom, bride } = data.couple;
  const { intro } = data.messages;

  // Calculamos la escala ideal segun el tamaño de la pantalla
  const [scaleFactor, setScaleFactor] = useState(2);
  const [yOffset, setYOffset] = useState('-25vh');

  useEffect(() => {
    const updateDimensions = () => {
      const isMobile = window.innerWidth < 640;
      const isShort = window.innerHeight < 800;
      
      if (isMobile) {
         setScaleFactor(1.5);
         setYOffset('-20vh');
      } else if (isShort) {
         setScaleFactor(1.7);
         setYOffset('-22vh');
      } else {
         setScaleFactor(1.9);
         setYOffset('-25vh');
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="absolute inset-x-4 sm:inset-x-8 bottom-4 top-2 flex flex-col z-20" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative bg-[#FAF9F6] w-full h-[95%] shadow-md border border-[#DCD5C6]/30 flex flex-col items-center justify-center p-4 sm:p-8"
        animate={isZoomed ? {
          y: yOffset,
          scale: scaleFactor,
          zIndex: 50,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
        } : {
          y: isOpen ? -100 : 0, 
          scale: 1,
          zIndex: 20,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-2 border-[0.5px] border-[#A88B5E]/30 pointer-events-none"></div>

        {!isZoomed && (
          <motion.div
            animate={{ opacity: isOpen ? 1 : 0 }}
            className="absolute top-8 left-1/2 -translate-x-1/2 flex flex-col items-center w-full"
          >
            <span className="font-serif text-[#C4A47C] text-sm md:text-base tracking-[0.2em] mb-1">
              Estás Invitado
            </span>
          </motion.div>
        )}

        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col items-center w-full justify-center h-full"
            >
              <h2 className="font-serif text-2xl sm:text-3xl text-[#2F3E46] mb-3 text-center leading-none">
                {groom.name} <br/> <span className="text-lg sm:text-xl text-[#A88B5E] italic py-1 block">&</span> {bride.name}
              </h2>
              
              <p className="font-serif text-neutral-600 text-[8px] sm:text-[9px] text-center max-w-[85%] italic leading-relaxed mb-6">
                "{intro}"
              </p>

              <motion.button 
                 whileHover={{ scale: 1.05 }}
                 whileTap={{ scale: 0.95 }}
                 onClick={(e) => { e.stopPropagation(); onContinue(); }}
                 className="px-5 py-2 border border-[#A88B5E] text-[#A88B5E] font-sans text-[7px] sm:text-[8px] tracking-[0.2em] uppercase hover:bg-[#A88B5E] hover:text-white transition-colors"
              >
                Continuar
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Letter;
