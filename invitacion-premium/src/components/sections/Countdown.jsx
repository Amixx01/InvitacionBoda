import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import dayjs from 'dayjs';
import data from '../../data/wedding.json';

const AnimatedNumber = ({ value, label }) => {
  return (
    <div className="flex flex-col items-center mx-1 sm:mx-6">
      <div className="relative overflow-hidden h-[2.8rem] sm:h-[4.5rem] w-[2.8rem] sm:w-[4.5rem] flex items-center justify-center">
        <AnimatePresence mode="popLayout">
          <motion.span
            key={value}
            initial={{ y: 20, opacity: 0, scale: 0.8 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: -20, opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="absolute font-serif text-3xl sm:text-6xl text-[#2F3E46] font-light"
          >
            {value.toString().padStart(2, '0')}
          </motion.span>
        </AnimatePresence>
      </div>
      <p className="font-serif text-[#A88B5E] text-[8px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] mt-2 sm:mt-4">
        {label}
      </p>
    </div>
  );
};

const Countdown = () => {
  const targetDate = data.event.countdownDate;

  const calculateTimeLeft = () => {
    const end = dayjs(targetDate);
    const now = dayjs();
    const diff = end.diff(now);

    if (diff <= 0) return { d: 0, h: 0, m: 0, s: 0 };

    return {
      d: Math.floor(diff / (1000 * 60 * 60 * 24)),
      h: Math.floor((diff / (1000 * 60 * 60)) % 24),
      m: Math.floor((diff / 1000 / 60) % 60),
      s: Math.floor((diff / 1000) % 60)
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="relative w-full py-24 sm:py-32 bg-[#F9F7F1] flex flex-col items-center justify-center border-t border-[#DCD5C6]/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center w-full max-w-4xl"
      >
        <p className="font-serif text-[#2F3E46] tracking-[0.2em] text-xs sm:text-sm uppercase mb-12 sm:mb-16 text-center">
          Esperamos este gran día con ansias
        </p>

        <div className="flex items-center justify-center w-full max-w-3xl">
          <AnimatedNumber value={timeLeft.d} label="Días" />
          <div className="text-[#A88B5E] text-2xl sm:text-4xl font-extralight opacity-30 mt-[-2rem] sm:mt-[-3rem]">:</div>
          <AnimatedNumber value={timeLeft.h} label="Horas" />
          <div className="text-[#A88B5E] text-2xl sm:text-4xl font-extralight opacity-30 mt-[-2rem] sm:mt-[-3rem]">:</div>
          <AnimatedNumber value={timeLeft.m} label="Minutos" />
          <div className="text-[#A88B5E] text-2xl sm:text-4xl font-extralight opacity-30 mt-[-2rem] sm:mt-[-3rem]">:</div>
          <AnimatedNumber value={timeLeft.s} label="Segundos" />
        </div>

        {/* Display de la Hora */}
        <motion.div 
           initial={{ opacity: 0, y: 10 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ delay: 0.8, duration: 1 }}
           className="mt-8 sm:mt-10 flex flex-col items-center justify-center relative"
        >
          <div className="w-[1px] h-8 bg-[#A88B5E]/30 mb-6"></div>
          <span className="font-sans text-[#A88B5E] tracking-[0.3em] text-[9px] sm:text-xs uppercase mb-3">
            Daremos Inicio A Las
          </span>
          <p className="font-serif text-3xl sm:text-4xl text-[#2F3E46] font-light tracking-wide">
            {data.event.time}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Countdown;
