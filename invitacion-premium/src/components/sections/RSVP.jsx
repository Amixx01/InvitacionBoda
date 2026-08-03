import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const RSVP = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#EAE5D9] flex flex-col items-center text-center px-4">
      <motion.div
         initial={{ opacity: 0, y: 30 }}
         whileInView={{ opacity: 1, y: 0 }}
         viewport={{ once: true, margin: "-50px" }}
         transition={{ duration: 1 }}
         className="flex flex-col items-center max-w-lg p-12 bg-white/60 backdrop-blur-xl border border-white/50 shadow-[0_40px_80px_-20px_rgba(47,62,70,0.15)] rounded-[2rem]"
      >
        <span className="font-sans text-[#A88B5E] text-xs uppercase tracking-[0.4em] mb-4">Asistencia</span>
        <h2 className="font-serif text-4xl sm:text-5xl text-[#2F3E46] mb-6">Confirma tu lugar</h2>
        <p className="font-serif text-[#768285] italic mb-10">
          Por favor, cuéntanos si nos acompañarás antes del <strong className="font-sans font-normal uppercase tracking-widest text-[10px] ml-1">{data.rsvp.deadline}</strong>.
        </p>
        
        <motion.a 
          whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(47,62,70,0.4)" }}
          whileTap={{ scale: 0.95 }}
          href={`https://wa.me/${data.rsvp.contactPhone?.replace('+', '')}?text=¡Hola!%20Felizmente%20confirmo%20mi%20asistencia%20a%20su%20boda.`}
          target="_blank"
          rel="noreferrer"
          className="px-10 py-4 bg-[#2F3E46] text-white font-sans text-[10px] sm:text-xs tracking-[0.2em] uppercase rounded-full shadow-md"
        >
          Confirmar por WhatsApp
        </motion.a>
      </motion.div>
    </section>
  );
};

export default RSVP;
