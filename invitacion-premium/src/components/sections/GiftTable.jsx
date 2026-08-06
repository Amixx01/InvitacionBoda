import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';

const GiftTable = () => {
  const { gifts } = data;

  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF9F6] flex flex-col items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ y: -5 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-2xl w-full border border-white/40 p-8 sm:p-16 flex flex-col items-center text-center bg-white/70 backdrop-blur-xl shadow-[0_40px_80px_-20px_rgba(47,62,70,0.1)] rounded-2xl"
      >
        <span className="font-sans text-[#A88B5E] text-xs uppercase tracking-[0.4em] mb-4">Agradecimiento</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-[#2F3E46] mb-8">{gifts.title}</h2>
        
        <p className="font-serif text-[#768285] text-sm sm:text-base leading-relaxed mb-12 italic max-w-md">
          "{gifts.message}"
        </p>

        <div className="w-full flex flex-col space-y-8 mt-2">
          {/* Opciones de Tiendas */}
          <div className="flex flex-col space-y-4 items-center w-full">
            {gifts.stores.map((store, idx) => (
              <motion.a 
                key={idx}
                whileHover={{ scale: 1.03, boxShadow: "0 10px 30px -10px rgba(47,62,70,0.2)" }}
                whileTap={{ scale: 0.97 }}
                href={store.url}
                target="_blank"
                rel="noreferrer"
                className="w-full max-w-xs py-4 border border-[#2F3E46]/30 font-sans text-xs uppercase tracking-widest text-[#2F3E46] hover:bg-[#2F3E46] hover:text-white transition-colors duration-500 text-center rounded-md bg-white/50 backdrop-blur-sm shadow-sm"
              >
                {store.name} {store.eventNumber && `- Mesa: ${store.eventNumber}`}
              </motion.a>
            ))}
          </div>

          {/* Información Bancaria */}
          <div className="flex flex-col items-center">
            <h4 className="font-sans text-[#2F3E46] text-xs tracking-[0.2em] uppercase mb-4">Transferencia</h4>
            <p className="font-serif text-[#768285] mb-1">{gifts.bankContent.bankName}</p>
            <p className="font-serif text-[#768285] mb-1">{gifts.bankContent.accountName}</p>
            <p className="font-serif text-[#768285] tracking-widest text-[#2F3E46] font-medium">{gifts.bankContent.clabe}</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default GiftTable;
