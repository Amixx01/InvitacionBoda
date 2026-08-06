import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const SharedAlbum = () => {
  const { sharedAlbum } = data;

  if (!sharedAlbum) return null;

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF9F6] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo (luces difusas sutiles) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A88B5E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A88B5E]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full border border-white/40 p-8 sm:p-16 flex flex-col items-center text-center bg-white/70 backdrop-blur-xl shadow-[0_40px_80px_-20px_rgba(47,62,70,0.1)] rounded-2xl relative z-10"
      >
        {/* Icono de cámara estético */}
        <div className="mb-6 opacity-90">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#2F3E46" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        <span className="font-sans text-[#A88B5E] text-xs uppercase tracking-[0.4em] mb-4">Galería Invitados</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-6">{sharedAlbum.title}</h2>
        
        <p className="font-serif text-[#768285] text-sm sm:text-base leading-relaxed mb-10 italic max-w-md">
          "{sharedAlbum.description}"
        </p>

        {/* Botón hacia el álbum */}
        <motion.a 
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(47,62,70,0.2)" }}
          whileTap={{ scale: 0.97 }}
          href={sharedAlbum.url}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-xs py-4 border border-[#2F3E46]/30 font-sans text-xs uppercase tracking-widest text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white transition-colors duration-500 text-center rounded-md bg-white/50 backdrop-blur-sm shadow-sm"
        >
          {sharedAlbum.buttonText}
        </motion.a>

      </motion.div>
    </section>
  );
};

export default SharedAlbum;
