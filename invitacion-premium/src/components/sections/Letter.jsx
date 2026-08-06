import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import data from '../../data/wedding.json';
import { useGuest } from '../../context/GuestContext';

const Letter = ({ isOpen, isZoomed, onContinue }) => {
  const { groom, bride } = data.couple;
  const { intro } = data.messages;
  const { guest } = useGuest();

  const [isMobile, setIsMobile] = useState(false);
  const [scaleFactor, setScaleFactor] = useState(1.4);

  useEffect(() => {
    const check = () => {
      const mobile = window.innerWidth < 640;
      const isShort = window.innerHeight < 700;
      setIsMobile(mobile);
      if (mobile) setScaleFactor(1.05);
      else if (isShort) setScaleFactor(1.2);
      else setScaleFactor(1.4);
    };
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const contentVariants = {
    hidden: { opacity: 0, y: 12 },
    show: (delay) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }
    })
  };

  // Contenido interior compartido (nombres, frase, pases, botón)
  const ZoomedContent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, delay: 0.8 }}
      className="flex flex-col items-center justify-center w-full h-full px-6 sm:px-10 py-4 sm:py-3"
    >
      <motion.span
        custom={0.9} variants={contentVariants} initial="hidden" animate="show"
        className="font-sans text-[#A88B5E] text-[9px] sm:text-[10px] tracking-[0.4em] uppercase opacity-80 text-center mb-3 sm:mb-2 leading-loose"
      >
        Tenemos el honor de invitarte<br />a celebrar nuestra boda
      </motion.span>

      <div className="w-12 h-[0.5px] bg-[#A88B5E]/40 mb-3 sm:mb-3" />

      <motion.h2
        custom={1.05} variants={contentVariants} initial="hidden" animate="show"
        className="font-serif text-[#2F3E46] text-center leading-tight text-xl sm:text-2xl"
      >
        {groom.name}
        <span className="block text-[#A88B5E] italic font-light my-0.5 sm:my-0.5 text-base sm:text-lg">&</span>
        {bride.name}
      </motion.h2>

      <div className="w-12 h-[0.5px] bg-[#A88B5E]/40 mt-2 sm:mt-2 mb-3 sm:mb-3" />

      <motion.p
        custom={1.2} variants={contentVariants} initial="hidden" animate="show"
        className="font-serif text-[#768285] text-center leading-relaxed italic text-[11px] sm:text-xs max-w-[85%]"
      >
        "{intro}"
      </motion.p>

      {guest && (
        <motion.div
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.6 }}
          className="mt-7 sm:mt-4 px-5 sm:px-6 py-2 sm:py-2 border border-[#A88B5E]/35 bg-[#A88B5E]/5 flex items-center gap-3"
        >
          <span className="font-sans text-[#7a6a4f] text-[9px] sm:text-[10px] tracking-[0.2em] uppercase">
            Pases Reservados:
          </span>
          <span className="font-serif text-[#A88B5E] text-base sm:text-base font-semibold leading-none">
            {guest.pases}
          </span>
        </motion.div>
      )}

      <motion.button
        initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.6, duration: 0.6 }}
        whileHover={{ scale: 1.04, backgroundColor: '#A88B5E', color: '#fff' }}
        whileTap={{ scale: 0.97 }}
        onClick={(e) => { e.stopPropagation(); onContinue(); }}
        className="mt-5 sm:mt-4 px-10 py-2.5 sm:py-2.5 border border-[#A88B5E] text-[#A88B5E] font-sans text-[9px] tracking-[0.3em] uppercase transition-all duration-300 bg-transparent cursor-pointer"
      >
        Abrir Invitación
      </motion.button>
    </motion.div>
  );

  return (
    <>
      {/* ─── SOLO MÓVIL: Overlay fullscreen cuando se hace zoom ─── */}
      <AnimatePresence>
        {isZoomed && isMobile && (
          <motion.div
            key="mobile-letter-overlay"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[200] bg-[#FAF9F6] flex flex-col items-center justify-center"
          >
            {/* Bordes decorativos interiores */}
            <div className="absolute inset-4 border-[0.5px] border-[#A88B5E]/20 pointer-events-none" />
            <div className="absolute inset-7 border-[0.5px] border-[#A88B5E]/10 pointer-events-none" />
            <ZoomedContent />
          </motion.div>
        )}
      </AnimatePresence>

      {/* ─── LA CARTA DENTRO DEL SOBRE (visible siempre en PC, y en móvil hasta hacer zoom) ─── */}
      <div className="absolute inset-x-2 sm:inset-x-8 bottom-4 top-2 flex flex-col z-20" style={{ perspective: '1200px' }}>
        <motion.div
          className="relative bg-[#FAF9F6] w-full flex flex-col items-center justify-center overflow-hidden"
          initial={{ height: '95%' }}
          style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.10)' }}
          animate={isZoomed
            ? {
              // En PC: animamos la altura al doble para hacerlo vertical, compensando escala.
              scale: isMobile ? 1 : (scaleFactor * 0.85),
              height: isMobile ? '95%' : '150%',
              y: isMobile ? 0 : '-20%',
              opacity: isMobile ? 0 : 1,
              zIndex: 50,
              boxShadow: '0 32px 80px -12px rgba(0,0,0,0.45)',
            }
            : {
              y: isOpen ? -80 : 0,
              scale: 1,
              height: '95%',
              opacity: 1,
              zIndex: 20,
              boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
            }
          }
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Bordes decorativos */}
          <div className="absolute inset-[6px] border-[0.5px] border-[#A88B5E]/25 pointer-events-none" />
          <div className="absolute inset-[12px] border-[0.5px] border-[#A88B5E]/10 pointer-events-none" />

          {/* Portada (nombre del invitado, visible tras abrir el sobre pero antes del zoom) */}
          {!isZoomed && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              transition={{ duration: 0.7, delay: isOpen ? 0.6 : 0 }}
              className="absolute inset-0 flex flex-col items-center justify-center px-4 sm:px-8 text-center"
            >
              <span className="font-sans text-[#A88B5E] text-[7px] sm:text-[9px] tracking-[0.5em] uppercase mb-4 opacity-80">
                ¡Nuestra Boda!
              </span>
              <div className="w-12 h-[0.5px] bg-[#A88B5E]/40 mb-4" />
              <span className="font-serif text-[#2F3E46] tracking-wide">
                {guest ? (
                  <span className="flex flex-col items-center gap-1">
                    <span className="text-lg sm:text-xl font-light">{guest.nombre}</span>
                    <span className="text-sm sm:text-base text-[#768285] font-light italic">Están Invitados</span>
                  </span>
                ) : (
                  <span className="text-lg sm:text-xl font-light">Estás Invitado</span>
                )}
              </span>
              <div className="w-12 h-[0.5px] bg-[#A88B5E]/40 mt-4" />
            </motion.div>
          )}

          {/* Contenido del zoom (solo en PC, porque en móvil lo muestra el overlay) */}
          <AnimatePresence>
            {isZoomed && !isMobile && (
              <ZoomedContent />
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
};

export default Letter;
