import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Letter from './Letter';
import { AudioPlayerContext } from '../../context/AudioPlayerContext';

const Envelope = ({ onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterZoomed, setIsLetterZoomed] = useState(false);
  const { forcePlay } = useContext(AudioPlayerContext);

  const envelopeColor = '#F2E8D5';
  const envelopeShadows = '#DFD4BE';
  const insideColor = '#2A2A2A';

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      forcePlay(); // Inicia la música cinematográfica
      setTimeout(() => {
        setIsLetterZoomed(true);
      }, 1500); 
    }
  };

  const fadeOutProps = {
    animate: isLetterZoomed ? { opacity: 0 } : { opacity: 1 },
    transition: { duration: 0.8 }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-neutral-900 overflow-hidden relative">
      <motion.div
        className="absolute w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #E6D5B8 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg aspect-[4/3] flex justify-center perspective-[1000px]">
        
        {/* El contendor maestro ahora es estático para ser más elegante */}
        <motion.div
          className="relative w-[90%] h-full flex items-end justify-center"
          animate={isOpen ? { scale: 0.95 } : { scale: 1 }}
          transition={{ scale: { duration: 0.4, ease: 'easeOut' } }}
        >
          {/* Fondo trasero del sobre (Desaparece al hacer zoom) */}
          <motion.div
            {...fadeOutProps}
            className="absolute inset-0 rounded-md shadow-2xl"
            style={{ backgroundColor: insideColor }}
          ></motion.div>

          {/* LA CARTA - Se mantiene viva */}
          {/* En Letter.jsx ya tiene el comportamiento de zoom, y está segura porque el contenedor padre no desaparece */}
          <Letter isOpen={isOpen} isZoomed={isLetterZoomed} onContinue={onContinue} />

          {/* Flaps del Sobre (Desaparecen al hacer zoom) */}
          <motion.div className="absolute inset-0 pointer-events-none z-10 drop-shadow-md" {...fadeOutProps}>
            <div className="absolute top-0 left-0 w-1/2 h-full" style={{ backgroundColor: envelopeShadows, clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }} />
          </motion.div>
          <motion.div className="absolute inset-0 pointer-events-none z-10 drop-shadow-md" {...fadeOutProps}>
            <div className="absolute top-0 right-0 w-1/2 h-full" style={{ backgroundColor: envelopeShadows, clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }} />
          </motion.div>
          <motion.div className="absolute inset-0 pointer-events-none z-[11] drop-shadow-xl" {...fadeOutProps}>
            <div className="absolute bottom-0 left-0 w-full h-[65%]" style={{ backgroundColor: envelopeColor, clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }} />
          </motion.div>

          {/* Top Flap Animada */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30"
            style={{ transformOrigin: 'top center' }}
            initial={{ rotateX: 0 }}
            // Mezclamos rotación con el opacity para desaparecer al final
            animate={{ 
              rotateX: isOpen ? 180 : 0, 
              zIndex: isOpen ? 0 : 30,
              opacity: isLetterZoomed ? 0 : 1 
            }}
            transition={{ 
              rotateX: { duration: 1.2, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.8 }
            }}
          >
            <div className="absolute inset-0 drop-shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-[60%]" style={{ backgroundColor: envelopeColor, clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }} />
            </div>
          </motion.div>

          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="wax-seal"
                onClick={handleOpen}
                initial={{ x: "-50%", y: "-50%", scale: 1 }}
                exit={{ scale: 2, opacity: 0, filter: 'blur(10px)', x: "-50%", y: "-50%" }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                className="absolute left-[50%] top-[55%] z-40 cursor-pointer w-20 h-20 sm:w-24 sm:h-24 rounded-full flex items-center justify-center transform-gpu"
                style={{
                  background: 'radial-gradient(circle at 35% 35%, #9b1c26 0%, #5e0810 80%)',
                  boxShadow: '0 10px 25px rgba(94,8,16,0.6), inset 0 2px 5px rgba(255,255,255,0.3)'
                }}
                whileHover={{ scale: 1.05, x: "-50%", y: "-50%" }}
                whileTap={{ scale: 0.95, x: "-50%", y: "-50%" }}
              >
                <motion.div 
                  className="absolute inset-0 rounded-full border border-red-900/40"
                  animate={{ boxShadow: ['0 0 0px rgba(155,28,38,0)', '0 0 30px rgba(155,28,38,0.8)', '0 0 0px rgba(155,28,38,0)'] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                />
                <div 
                  className="w-[75%] h-[75%] rounded-full border-2 border-[#73121a] flex items-center justify-center" 
                  style={{ boxShadow: 'inset 0 0 10px rgba(0,0,0,0.6)' }}
                >
                  <motion.span 
                    className="font-serif text-[#d4af37] text-2xl sm:text-3xl opacity-90 drop-shadow-md transform"
                    style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}
                  >
                    R&M
                  </motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="instruction-text"
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.4 }}
                className="absolute -bottom-16 text-center w-full z-10"
              >
                <p className="text-neutral-400 font-serif text-sm tracking-[0.2em] uppercase animate-pulse">
                  Toca el sello para abrir
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Envelope;
