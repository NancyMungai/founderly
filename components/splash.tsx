"use client"

import { motion } from "motion/react"
import { Rocket } from "lucide-react"

interface SplashProps {
  onComplete: () => void
}

export function Splash({ onComplete }: SplashProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 flex items-center justify-center bg-[#141518] overflow-hidden"
    >
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-[#DAF601] rounded-full blur-2xl opacity-50 animate-pulse"></div>
            <Rocket className="w-24 h-24 text-white relative z-10" strokeWidth={2} />
          </div>
        </motion.div>

        <motion.div initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }}>
          <h1 className="text-5xl font-black text-white mb-4 tracking-tight">Founderly</h1>
          <p className="text-2xl text-white/90 mb-2">Your Latitude59 Coach</p>
          <p className="text-lg text-white/80 italic">Be bold. Be ready. Build the world you want.</p>
        </motion.div>

        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          onClick={onComplete}
          className="mt-12 px-8 py-4 bg-[#DAF601] text-[#141518] rounded-full hover:bg-[#CDE800] transition-all hover:scale-105 shadow-lg font-black"
        >
          Start My Founder Journey
        </motion.button>
      </div>

      {/* Animated background elements */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute top-20 left-10 w-32 h-32 bg-[#DAF601] rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -90, 0],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-20 right-10 w-40 h-40 bg-white rounded-full blur-3xl"
      />
    </motion.div>
  )
}
