import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const SharedAlbum = () => {
  const { sharedAlbum } = data;

  if (!sharedAlbum) return null;

  return (
    <section className="w-full py-24 sm:py-32 bg-[#111111] flex flex-col items-center justify-center px-4 relative overflow-hidden">
      {/* Elementos decorativos de fondo (luces difusas sutiles) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#A88B5E]/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#A88B5E]/5 rounded-full blur-[120px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full border border-[#A88B5E]/20 p-8 sm:p-16 flex flex-col items-center text-center bg-[#1A1A1A]/50 backdrop-blur-md rounded-2xl relative z-10"
      >
        {/* Icono de cámara estético */}
        <div className="mb-6 opacity-80">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#A88B5E" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
        </div>

        <span className="font-sans text-[#A88B5E] text-xs uppercase tracking-[0.4em] mb-4">Galería Invitados</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF9F6] mb-6">{sharedAlbum.title}</h2>
        
        <p className="font-serif text-[#DCD5C6] text-sm sm:text-base leading-relaxed mb-10 italic max-w-md">
          "{sharedAlbum.description}"
        </p>

        {/* Botón hacia el álbum */}
        <motion.a 
          whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(168,139,94,0.3)" }}
          whileTap={{ scale: 0.97 }}
          href={sharedAlbum.url}
          target="_blank"
          rel="noreferrer"
          className="w-full max-w-xs py-4 border border-[#A88B5E]/50 font-sans text-xs uppercase tracking-widest text-[#FAF9F6] hover:bg-[#A88B5E] transition-colors duration-500 text-center rounded-md"
        >
          {sharedAlbum.buttonText}
        </motion.a>

      </motion.div>
    </section>
  );
};

export default SharedAlbum;
