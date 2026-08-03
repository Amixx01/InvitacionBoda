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
      const isShort = window.innerHeight < 700;
      
      if (isMobile) {
         setScaleFactor(1.15);
         setYOffset('-10vh');
      } else if (isShort) {
         setScaleFactor(1.5);
         setYOffset('-15vh');
      } else {
         setScaleFactor(1.8);
         setYOffset('-20vh');
      }
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="absolute inset-x-2 sm:inset-x-8 bottom-4 top-2 flex flex-col z-20" style={{ perspective: '1000px' }}>
      <motion.div
        className="relative bg-[#FAF9F6] w-full h-[95%] shadow-md border border-[#DCD5C6]/30 flex flex-col items-center justify-center p-3 sm:p-6"
        animate={isZoomed ? {
          y: yOffset,
          scale: scaleFactor,
          zIndex: 50,
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
        } : {
          y: isOpen ? -80 : 0, 
          scale: 1,
          zIndex: 20,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="absolute inset-1 sm:inset-2 border-[0.5px] border-[#A88B5E]/30 pointer-events-none"></div>
        <div className="absolute inset-2 sm:inset-3 border-[0.5px] border-[#A88B5E]/10 pointer-events-none"></div>

        {!isZoomed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: isOpen ? 1 : 0 }}
            transition={{ duration: 0.6, delay: isOpen ? 0.7 : 0 }}
            className="absolute inset-0 flex flex-col items-center justify-center p-4 sm:p-8 w-full h-full"
          >
            <div className="flex flex-col items-center justify-center w-full border-t border-b border-[#A88B5E]/30 py-6 mt-4">
              <span className="font-sans text-[#A88B5E] text-[8px] md:text-[12px] tracking-[0.4em] uppercase mb-4 opacity-80">
                ¡Nuestra Boda!
              </span>
              <span className="font-serif text-[#2F3E46] text-2xl sm:text-3xl md:text-4xl tracking-[0.1em] text-center w-full">
                Estás <br/> Invitado
              </span>
            </div>
          </motion.div>
        )}

        <AnimatePresence>
          {isZoomed && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-col items-center justify-center w-full h-full py-4 md:py-8"
            >
              <div className="flex flex-col items-center justify-center w-full mt-1">
                <span className="font-sans text-[#A88B5E] text-[8px] sm:text-[10px] tracking-[0.3em] uppercase opacity-80 text-center mb-4 sm:mb-6 px-1 leading-loose">
                  Tenemos el honor de invitarte <br/> a celebrar nuestra boda
                </span>

                <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-[#2F3E46] mb-3 sm:mb-5 text-center leading-[1.2]">
                  {groom.name} 
                  <br/>
                  <span className="text-lg sm:text-xl md:text-2xl text-[#A88B5E] italic py-1 sm:py-2 block font-light">&</span>
                  {bride.name}
                </h2>
                
                <p className="font-serif text-[#768285] text-[8px] sm:text-[10px] text-center max-w-[95%] sm:max-w-[90%] leading-[1.6] sm:leading-[1.8] italic mt-1 sm:mt-2">
                  "{intro}"
                </p>
              </div>

              <motion.button 
                 whileHover={{ scale: 1.05, backgroundColor: "#A88B5E", color: "#fff" }}
                 whileTap={{ scale: 0.95 }}
                 onClick={(e) => { e.stopPropagation(); onContinue(); }}
                 className="mt-6 sm:mt-8 px-8 sm:px-12 py-2 sm:py-3 border-[0.5px] border-[#A88B5E] text-[#A88B5E] font-sans text-[7px] sm:text-[8px] tracking-[0.3em] uppercase transition-all duration-300 hover:shadow-lg bg-transparent"
              >
                Abrir Invitación
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default Letter;
