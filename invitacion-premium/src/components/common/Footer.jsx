import React from 'react';
import data from '../../data/wedding.json';

const Footer = () => {
  return (
    <footer className="w-full py-12 sm:py-20 bg-[#2F3E46] flex flex-col items-center justify-center text-center px-4">
      <h2 className="font-serif text-3xl sm:text-4xl text-white mb-2 font-light">
        {data.couple.groom.shortName} <span className="text-[#A88B5E] italic">&</span> {data.couple.bride.shortName}
      </h2>
      <p className="font-sans text-white/50 text-[10px] uppercase tracking-[0.4em] mb-12">
        {data.couple.hashtag}
      </p>
      
      <p className="font-sans text-white/30 text-[8px] uppercase tracking-widest">
        {data.footer.signature} | {data.footer.credits}
      </p>
    </footer>
  );
};

export default Footer;
