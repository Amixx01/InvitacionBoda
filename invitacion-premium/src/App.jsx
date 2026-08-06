import React, { useState, Suspense, lazy } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Routes, Route } from 'react-router-dom'
import { GuestProvider } from './context/GuestContext'
import Envelope from './components/sections/Envelope'
import { AudioPlayerProvider } from './context/AudioPlayerContext'
import MusicPlayer from './components/ui/MusicPlayer'

// Secciones con Lazy Loading (carga diferida)
const Hero = lazy(() => import('./components/sections/Hero'))
const Countdown = lazy(() => import('./components/sections/Countdown'))
const Story = lazy(() => import('./components/sections/Story'))
const Location = lazy(() => import('./components/sections/Location'))
const DressCode = lazy(() => import('./components/sections/DressCode'))
const GiftTable = lazy(() => import('./components/sections/GiftTable'))
const RSVP = lazy(() => import('./components/sections/RSVP'))
const Footer = lazy(() => import('./components/common/Footer'))

function WeddingApp() {
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
        <Suspense fallback={
          <div className="h-screen w-full flex items-center justify-center bg-[#FAF9F6]">
            <div className="w-10 h-10 border-4 border-[#A88B5E]/30 border-t-[#A88B5E] rounded-full animate-spin"></div>
          </div>
        }>
          <Hero />
          <Countdown />
          <Story />
          <Location />
          <DressCode />
          <GiftTable />
          <RSVP />
          <Footer />
        </Suspense>
      </motion.div>

      </div>
    </AudioPlayerProvider>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/:invitadoId?" element={
        <GuestProvider>
          <WeddingApp />
        </GuestProvider>
      } />
    </Routes>
  )
}

export default App
