import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Envelope from './components/sections/Envelope'
import Hero from './components/sections/Hero'
import Countdown from './components/sections/Countdown'
import Story from './components/sections/Story'
import Location from './components/sections/Location'
import Schedule from './components/sections/Schedule'
import Gallery from './components/sections/Gallery'
import DressCode from './components/sections/DressCode'
import GiftTable from './components/sections/GiftTable'
import RSVP from './components/sections/RSVP'
import Footer from './components/common/Footer'
import { AudioPlayerProvider } from './context/AudioPlayerContext'
import MusicPlayer from './components/ui/MusicPlayer'

function App() {
  const [showIntro, setShowIntro] = useState(true)

  return (
    <AudioPlayerProvider>
      <div className="w-full relative min-h-screen bg-[#FAF9F6] overflow-x-hidden font-sans selection:bg-[#A88B5E]/30">
        
        {/* Intro Experience (Envelope & Letter) */}
        <AnimatePresence>
          {showIntro && (
            <motion.div
              key="intro-envelope"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0, y: '-10vh' }}
              transition={{ duration: 1.5, ease: [0.25, 1, 0.5, 1] }}
              className="fixed inset-0 z-50 bg-neutral-900"
            >
              <Envelope onContinue={() => setShowIntro(false)} />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Global Floating Player */}
        <MusicPlayer />

      {/* Main Wedding Content */}
      <motion.div 
        className="w-full relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: showIntro ? 0 : 1 }}
        transition={{ delay: 1, duration: 1.5 }}
      >
        <Hero />
        <Countdown />
        <Story />
        <Location />
        <Schedule />
        <Gallery />
        <DressCode />
        <GiftTable />
        <RSVP />
        <Footer />
      </motion.div>

      </div>
    </AudioPlayerProvider>
  )
}

export default App
