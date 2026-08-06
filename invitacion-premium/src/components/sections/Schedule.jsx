import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const Schedule = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#EAE5D9] flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1 }}
        className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-20"
      >
        Itinerario
      </motion.h2>

      <div className="relative w-full max-w-xl px-4 flex flex-col space-y-12">
        {/* Línea vertical central */}
        <div className="absolute left-[20px] sm:left-1/2 top-0 bottom-0 w-[1px] bg-[#DCD5C6] -translate-x-1/2"></div>
        
        {data.schedule.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className={`relative flex items-center justify-between w-full ${index % 2 === 0 ? 'sm:flex-row-reverse' : 'sm:flex-row'}`}
          >
            {/* Vacío en escritorio para alinear a un lado u otro */}
            <div className="hidden sm:block sm:w-1/2"></div>
            
            <div className="absolute left-[20px] sm:left-1/2 w-3 h-3 bg-[#A88B5E] rounded-full -translate-x-1/2 ring-4 ring-[#EAE5D9]"></div>
            
            <div className={`w-full pl-14 sm:pl-0 sm:w-1/2 flex flex-col ${index % 2 === 0 ? 'sm:text-left sm:pr-12' : 'sm:text-right sm:pl-12'}`}>
               <span className="font-sans text-[#A88B5E] tracking-[0.2em] text-xs uppercase mb-1">{item.time}</span>
               <h4 className="font-serif text-lg sm:text-2xl text-[#2F3E46]">{item.event}</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Schedule;
