import React, { createContext, useState, useEffect, useRef } from 'react';
import data from '../data/wedding.json';

export const AudioPlayerContext = createContext();

export const AudioPlayerProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    // Usar directamente el archivo que esta en el JSON
    const audioUrl = data.music.url;
    audioRef.current = new Audio(audioUrl);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.4;
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((e) => console.log('Autoplay prevent by browser', e));
    }
    setIsPlaying(!isPlaying);
  };

  const forcePlay = () => {
    if (!isPlaying && audioRef.current) {
       audioRef.current.play().then(() => setIsPlaying(true)).catch(() => {});
    }
  };

  return (
    <AudioPlayerContext.Provider value={{ isPlaying, togglePlay, forcePlay }}>
      {children}
    </AudioPlayerContext.Provider>
  );
};
