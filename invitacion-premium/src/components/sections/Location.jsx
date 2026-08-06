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
    className="flex flex-col items-center bg-white/60 backdrop-blur-md p-8 sm:p-12 text-center shadow-[0_30px_60px_-15px_rgba(47,62,70,0.1)] border border-white/50 mx-4 w-full max-w-lg rounded-xl"
  >
    <span className="font-serif text-[#A88B5E] text-xs uppercase tracking-[0.3em] mb-4">{event.type || 'Recepción'}</span>
    <h3 className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-6">{event.locationName}</h3>
    <div className="h-[1px] w-12 bg-[#A88B5E]/30 mb-6"></div>
    <p className="font-sans font-light text-sm text-[#768285] mb-2">{event.time}</p>
    <p className="font-sans font-light text-sm text-[#768285] mb-8 max-w-[250px] leading-relaxed">{event.address}</p>
    
    {/* Miniatura del mapa incrustada */}
    {event.coordinates && (
      <div className="w-full h-48 sm:h-56 mb-8 rounded-lg overflow-hidden border border-[#A88B5E]/20 shadow-inner relative group bg-[#DCD5C6]/30">
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500 pointer-events-none z-10"></div>
        <iframe
          src={`https://maps.google.com/maps?q=${event.coordinates.lat},${event.coordinates.lng}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="grayscale-[30%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
        ></iframe>
      </div>
    )}

    <motion.a 
      whileHover={{ scale: 1.05 }} 
      whileTap={{ scale: 0.95 }}
      href={event.googleMapsUrl} target="_blank" rel="noreferrer" 
      className="px-8 py-3 bg-transparent border border-[#2F3E46] text-[#2F3E46] font-sans text-xs tracking-widest uppercase hover:bg-[#2F3E46] hover:text-white transition-all duration-500 rounded-md"
    >
      Abrir en Navegador
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
      </div>
    </section>
  );
};

export default Location;
