"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "motion/react"
import { Lightbulb, Users, Presentation, ArrowRight, ArrowLeft } from "lucide-react"

interface OnboardingProps {
  onComplete: () => void
}

const slides = [
  {
    icon: Lightbulb,
    title: "Turn your idea into impact",
    description: "Transform your vision into a validated startup ready for investors and customers.",
    color: "#0055FF",
  },
  {
    icon: Users,
    title: "Stay motivated, learn from founders",
    description: "Get insights from successful founders and stay on track with personalized coaching.",
    color: "#004DE8",
  },
  {
    icon: Presentation,
    title: "Arrive at Latitude59 pitch-ready",
    description: "Walk into Estonia's biggest startup event fully prepared to make your mark.",
    color: "#CDE800",
  },
]

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1)
    } else {
      onComplete()
    }
  }

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1)
    }
  }

  return (
    <div className="fixed inset-0 bg-[#141518] flex flex-col">
      {/* Progress indicators */}
      <div className="flex gap-2 p-6 justify-center">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide ? "w-12 bg-[#0055FF]" : "w-6 bg-[#2A2B2F]"
            }`}
          />
        ))}
      </div>

      {/* Slide content */}
      <div className="flex-1 flex items-center justify-center px-6 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 30 }}
            className="text-center max-w-md"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="mb-8 inline-block"
            >
              <div className="p-8 rounded-3xl" style={{ backgroundColor: slides[currentSlide].color }}>
                {(() => {
                  const IconComponent = slides[currentSlide].icon
                  return <IconComponent className="w-20 h-20 text-white" strokeWidth={2} />
                })()}
              </div>
            </motion.div>

            <motion.h2
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-black text-white mb-4 leading-tight"
            >
              {slides[currentSlide].title}
            </motion.h2>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-white/80 leading-relaxed"
            >
              {slides[currentSlide].description}
            </motion.p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation buttons */}
      <div className="p-6 flex items-center justify-between gap-4">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className={`p-4 rounded-full transition-all ${
            currentSlide === 0 ? "opacity-0 pointer-events-none" : "bg-[#2A2B2F] text-white hover:bg-[#33343A]"
          }`}
        >
          <ArrowLeft className="w-6 h-6" />
        </button>

        <button
          onClick={nextSlide}
          className="flex-1 max-w-xs py-4 px-8 bg-[#0055FF] text-white rounded-full hover:bg-[#004DE8] transition-all hover:scale-105 flex items-center justify-center gap-2"
        >
          <span>{currentSlide === slides.length - 1 ? "Get Started" : "Next"}</span>
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  )
}
