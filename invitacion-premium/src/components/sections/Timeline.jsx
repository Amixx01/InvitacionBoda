import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import data from '../../data/wedding.json';

const MilestoneItem = ({ milestone, index }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const yVal = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const scaleVal = useTransform(scrollYProgress, [0, 0.5, 1], [0.95, 1.05, 0.95]);
  const opacityVal = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      style={{ opacity: opacityVal, y: yVal }}
      className="flex flex-col items-center w-full text-center"
    >
      <h3 className="font-serif text-2xl sm:text-4xl text-[#2F3E46] mb-8">{milestone.title}</h3>
      <motion.div 
         style={{ scale: scaleVal }}
         whileHover={{ scale: 1.02 }}
         transition={{ duration: 0.5 }}
         className="relative w-full max-w-sm sm:max-w-md aspect-[4/5] bg-white/50 backdrop-blur-md shadow-[0_40px_80px_-20px_rgba(0,0,0,0.15)] overflow-hidden border border-white/60 p-2 rounded-xl"
      >
        <div className="w-full h-full bg-[#DCD5C6] relative overflow-hidden rounded-lg">
           {milestone.photo && (
             <img 
               src={milestone.photo} 
               alt={milestone.title} 
               className="w-full h-full object-cover"
             />
           )}
           <div className="absolute inset-0 bg-gradient-to-tr from-[#A88B5E]/20 via-transparent to-white/30 mix-blend-multiply" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Timeline = () => {
  return (
    <div className="w-full max-w-4xl flex flex-col items-center space-y-32 mt-20">
      {data.story.milestones.map((milestone, index) => (
        <MilestoneItem key={index} milestone={milestone} index={index} />
      ))}
    </div>
  );
};

export default Timeline;
