import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const EventCard = ({ event, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ y: -8, scale: 1.02 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 1.2, delay: index * 0.2, hover: { duration: 0.4, ease: "easeOut" } }}
    className="flex flex-col items-center bg-white/60 backdrop-blur-md p-10 sm:p-16 text-center shadow-[0_30px_60px_-15px_rgba(47,62,70,0.1)] border border-white/50 mx-4 w-full max-w-md rounded-xl"
  >
    <span className="font-serif text-[#A88B5E] text-xs uppercase tracking-[0.3em] mb-4">{event.type || 'Recepción'}</span>
    <h3 className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-6">{event.locationName}</h3>
    <div className="h-[1px] w-12 bg-[#A88B5E]/30 mb-6"></div>
    <p className="font-sans font-light text-sm text-[#768285] mb-2">{event.time}</p>
    <p className="font-sans font-light text-sm text-[#768285] mb-10 max-w-[200px] leading-relaxed">{event.address}</p>
    
    <motion.a 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      href={event.googleMapsUrl} target="_blank" rel="noreferrer" 
      className="px-6 py-3 bg-transparent border border-[#2F3E46] text-[#2F3E46] font-sans text-xs tracking-widest uppercase hover:bg-[#2F3E46] hover:text-white transition-all duration-500 rounded-sm"
    >
      Ver Mapa
    </motion.a>
  </motion.div>
);

const Location = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#F9F7F1] flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-16"
      >
        Dónde y Cuándo
      </motion.h2>
      
      <div className="flex flex-col md:flex-row items-center md:items-stretch justify-center gap-12 w-full px-4">
        <EventCard event={data.ceremony} index={0} />
        <EventCard event={data.reception} index={1} />
      </div>
    </section>
  );
};

export default Location;
