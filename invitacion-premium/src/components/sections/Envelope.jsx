import React, { useState, useContext } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Letter from './Letter';
import { AudioPlayerContext } from '../../context/AudioPlayerContext';

const Envelope = ({ onContinue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLetterZoomed, setIsLetterZoomed] = useState(false);
  const { forcePlay } = useContext(AudioPlayerContext);

  const envelopeColor = '#F0E6D2';
  const envelopeShadow = '#DDD0B8';
  const insideColor = '#1E1E1E';

  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen(true);
      forcePlay();
      setTimeout(() => {
        setIsLetterZoomed(true);
      }, 1800);
    }
  };

  const fadeOutProps = {
    animate: isLetterZoomed ? { opacity: 0, transition: { duration: 0.9 } } : { opacity: 1 },
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#111111] overflow-hidden relative">

      {/* Glow ambiental de fondo */}
      <motion.div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: '70vw',
          height: '70vw',
          maxWidth: 700,
          maxHeight: 700,
          background: 'radial-gradient(circle, rgba(168,139,94,0.12) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Partículas decorativas sutiles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 2,
            height: 2,
            background: '#A88B5E',
            left: `${15 + i * 14}%`,
            top: `${20 + (i % 3) * 25}%`,
            opacity: 0.25,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.15, 0.4, 0.15] }}
          transition={{ duration: 4 + i * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
        />
      ))}

      {/* Contenedor del Sobre */}
      <div className="relative w-full max-w-[280px] sm:max-w-sm md:max-w-md aspect-[4/3] flex justify-center" style={{ perspective: '1200px' }}>

        <motion.div
          className="relative w-[88%] h-full flex items-end justify-center"
          animate={isOpen ? { scale: 0.97 } : { scale: 1 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Interior del sobre (oscuro) */}
          <motion.div
            {...fadeOutProps}
            className="absolute inset-0 rounded-sm"
            style={{ backgroundColor: insideColor, boxShadow: '0 30px 80px rgba(0,0,0,0.6)' }}
          />

          {/* Carta */}
          <Letter isOpen={isOpen} isZoomed={isLetterZoomed} onContinue={onContinue} />

          {/* Flap izquierdo */}
          <motion.div className="absolute inset-0 pointer-events-none z-10" {...fadeOutProps}>
            <div
              className="absolute top-0 left-0 w-1/2 h-full"
              style={{ backgroundColor: envelopeShadow, clipPath: 'polygon(0 0, 100% 50%, 0 100%)' }}
            />
          </motion.div>

          {/* Flap derecho */}
          <motion.div className="absolute inset-0 pointer-events-none z-10" {...fadeOutProps}>
            <div
              className="absolute top-0 right-0 w-1/2 h-full"
              style={{ backgroundColor: envelopeShadow, clipPath: 'polygon(100% 0, 0 50%, 100% 100%)' }}
            />
          </motion.div>

          {/* Flap inferior */}
          <motion.div className="absolute inset-0 pointer-events-none z-[11]" {...fadeOutProps}>
            <div
              className="absolute bottom-0 left-0 w-full h-[65%]"
              style={{ backgroundColor: envelopeColor, clipPath: 'polygon(0 100%, 50% 0, 100% 100%)' }}
            />
          </motion.div>

          {/* Flap superior animado */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-30"
            style={{ transformOrigin: 'top center' }}
            initial={{ rotateX: 0 }}
            animate={{
              rotateX: isOpen ? 180 : 0,
              zIndex: isOpen ? 0 : 30,
              opacity: isLetterZoomed ? 0 : 1,
            }}
            transition={{
              rotateX: { duration: 1.4, ease: [0.25, 1, 0.5, 1] },
              opacity: { duration: 0.9 },
            }}
          >
            <div className="absolute inset-0">
              <div
                className="absolute top-0 left-0 w-full h-[60%]"
                style={{ backgroundColor: envelopeColor, clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
              />
            </div>
          </motion.div>

          {/* Sello de lacre */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="wax-seal"
                onClick={handleOpen}
                initial={{ x: '-50%', y: '-50%', scale: 0, opacity: 0 }}
                animate={{ x: '-50%', y: '-50%', scale: 1, opacity: 1 }}
                exit={{ scale: 2.5, opacity: 0, filter: 'blur(14px)', x: '-50%', y: '-50%' }}
                transition={{
                  default: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
                  scale: { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.3 },
                  opacity: { duration: 0.6, delay: 0.3 },
                  exit: { duration: 0.5, ease: 'easeOut' },
                }}
                className="absolute left-[50%] top-[55%] z-40 cursor-pointer w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transform-gpu"
                style={{
                  background: 'radial-gradient(circle at 32% 32%, #a12030 0%, #5a0610 85%)',
                  boxShadow: '0 8px 32px rgba(90,6,16,0.7), inset 0 1px 4px rgba(255,255,255,0.25)',
                }}
                whileHover={{ scale: 1.08, x: '-50%', y: '-50%' }}
                whileTap={{ scale: 0.93, x: '-50%', y: '-50%' }}
              >
                {/* Pulso del sello */}
                <motion.div
                  className="absolute inset-0 rounded-full"
                  animate={{ boxShadow: ['0 0 0px rgba(161,32,48,0)', '0 0 28px rgba(161,32,48,0.7)', '0 0 0px rgba(161,32,48,0)'] }}
                  transition={{ repeat: Infinity, duration: 2.8, ease: 'easeInOut' }}
                />
                <div
                  className="w-[72%] h-[72%] rounded-full border border-[#7a1020]/70 flex items-center justify-center"
                  style={{ boxShadow: 'inset 0 0 12px rgba(0,0,0,0.5)' }}
                >
                  <span
                    className="font-serif text-[#d4af37] text-xl sm:text-2xl opacity-95 select-none"
                    style={{ textShadow: '1px 2px 4px rgba(0,0,0,0.7)' }}
                  >
                    R&M
                  </span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Texto de instrucción */}
          <AnimatePresence>
            {!isOpen && (
              <motion.div
                key="instruction-text"
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="absolute -bottom-14 text-center w-full z-10 pointer-events-none"
              >
                <motion.p
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
                  className="text-neutral-500 font-serif text-xs tracking-[0.25em] uppercase"
                >
                  Toca el sello para abrir
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Envelope;
