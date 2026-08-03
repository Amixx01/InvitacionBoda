import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../../data/wedding.json';
import ScrollIndicator from '../ui/ScrollIndicator';
import FloatingFlowers from '../ui/FloatingFlowers';

const Hero = () => {
  const { groom, bride } = data.couple;
  const { date } = data.event;
  const { intro } = data.messages;

  // Track the scroll to create a sophisticated parallax exit for the hero text
  const { scrollY } = useScroll();
  const yParallax = useTransform(scrollY, [0, 500], [0, 150]);
  const opacityParallax = useTransform(scrollY, [0, 300], [1, 0]);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.4 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    show: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] } // Apple-like easing (easeOutExpo roughly)
    }
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    show: { scaleX: 1, transition: { duration: 2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#FAF9F6]">
      
      {/* Sistema de Partículas Flotantes y Elementos Botánicos */}
      <FloatingFlowers />

      {/* Contenedor Principal con Parallax */}
      <motion.div 
        style={{ y: yParallax, opacity: opacityParallax }}
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center text-center mt-[-5%]"
      >
        <motion.p variants={itemVariants} className="font-serif text-[#A88B5E] tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase mb-8 sm:mb-12">
          {data.story.title}
        </motion.p>

        {/* Nombres con máxima legibilidad y jerarquía (Mucho espacio en blanco) */}
        <motion.h1 variants={itemVariants} className="font-serif text-5xl sm:text-7xl md:text-[7rem] text-[#2F3E46] font-extralight tracking-tight leading-tight mb-8 sm:mb-12 flex flex-col items-center gap-1 sm:gap-4">
          <span>{groom.name}</span>
          <span className="text-3xl sm:text-5xl md:text-6xl italic text-[#A88B5E] font-serif">&</span>
          <span>{bride.name}</span>
        </motion.h1>

        {/* Separador minimalista */}
        <div className="flex items-center space-x-6 w-full justify-center max-w-[200px] mx-auto mb-10 overflow-hidden">
          <motion.div variants={lineVariants} style={{ originX: 0 }} className="h-[1px] w-full bg-[#DCD5C6]" />
          <motion.div variants={itemVariants} className="w-1.5 h-1.5 rounded-full bg-[#A88B5E]" />
          <motion.div variants={lineVariants} style={{ originX: 1 }} className="h-[1px] w-full bg-[#DCD5C6]" />
        </div>

        {/* Frase Romántica */}
        <motion.p variants={itemVariants} className="font-serif text-[#768285] max-w-md mx-auto text-sm sm:text-base leading-relaxed tracking-wide italic px-4">
           "{intro}"
        </motion.p>

        {/* Fecha Elegante */}
        <motion.div variants={itemVariants} className="mt-12 sm:mt-16">
          <p className="font-sans font-light text-[#2F3E46] tracking-[0.3em] text-xs sm:text-sm uppercase">
            {date.split('-')[2]} . {date.split('-')[1]} . {date.split('-')[0]}
          </p>
        </motion.div>
      </motion.div>

      {/* Boxed Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <ScrollIndicator />
      </motion.div>
    </section>
  );
};

export default Hero;
