import React from 'react';
import { motion } from 'framer-motion';
import data from '../../data/wedding.json';
import Timeline from './Timeline';

const Story = () => {
  return (
    <section className="w-full py-24 sm:py-32 bg-[#FAF9F6] flex flex-col items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1.2 }}
        className="max-w-2xl text-center flex flex-col items-center"
      >
        <h2 className="font-serif text-3xl sm:text-5xl text-[#2F3E46] mb-8">{data.story.title}</h2>
        <div className="w-[1px] h-12 bg-[#A88B5E]/50 mb-8"></div>
        <p className="font-serif text-[#768285] leading-relaxed md:text-lg mb-16">
          "{data.story.description}"
        </p>
      </motion.div>
      <Timeline />
    </section>
  );
};

export default Story;
