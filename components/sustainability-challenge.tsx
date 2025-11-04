"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Coffee, Droplet, Leaf, Bike, QrCode, Award, TrendingUp } from "lucide-react"

interface SustainabilityProps {
  onBack: () => void
}

const initialEcoActions = [
  {
    id: "cup",
    icon: Coffee,
    title: "Use Ringo reusable cup",
    points: 10,
    color: "#CDE800",
    completed: true,
  },
  {
    id: "water",
    icon: Droplet,
    title: "Refill your water bottle",
    points: 5,
    color: "#0055FF",
    completed: true,
  },
  {
    id: "vegan",
    icon: Leaf,
    title: "Eat vegan meal",
    points: 5,
    color: "#CDE800",
    completed: false,
  },
  {
    id: "transport",
    icon: Bike,
    title: "Walk or take public transport",
    points: 15,
    color: "#004DE8",
    completed: false,
  },
]

const ecoBadges = [
  { name: "Eco Newbie", points: 50, unlocked: true },
  { name: "Conscious Creator", points: 150, unlocked: false },
  { name: "Circular Hero", points: 300, unlocked: false },
  { name: "Eco Founder @ L59", points: 500, unlocked: false },
]

export default function Sustainability({ onBack }: SustainabilityProps) {
  const [ecoActions, setEcoActions] = useState(initialEcoActions)
  const [currentPoints, setCurrentPoints] = useState(120)

  const toggleAction = (id: string) => {
    setEcoActions((prev) =>
      prev.map((action) => {
        if (action.id === id && !action.completed) {
          setCurrentPoints((points) => points + action.points)
          return { ...action, completed: true }
        }
        return action
      }),
    )
  }

  const handleQRScan = () => {
    console.log("[v0] QR Scan initiated")
  }

  const co2Saved = Math.floor(currentPoints * 1.5)

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#CDE800] to-[#DAF601] p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-[#141518]/10 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-[#141518]" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-[#141518]">Green Founder</h1>
            <p className="text-[#141518]/80 text-sm">Eco-conscious @ Latitude59</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4">
            <Leaf className="w-6 h-6 text-[#141518] mb-2" />
            <p className="text-3xl font-black text-[#141518]">{currentPoints}</p>
            <p className="text-sm text-[#141518]/80">EcoPoints</p>
          </div>
          <div className="bg-white/50 backdrop-blur-sm rounded-2xl p-4">
            <TrendingUp className="w-6 h-6 text-[#0055FF] mb-2" />
            <p className="text-3xl font-black text-[#141518]">{co2Saved}g</p>
            <p className="text-sm text-[#141518]/80">CO₂ saved today</p>
          </div>
        </div>
      </div>

      <div className="p-6">
        {/* Actions */}
        <div className="mb-8">
          <h2 className="text-xl font-black text-white mb-4">
            Earn <span className="text-[#CDE800]">EcoPoints</span>
          </h2>
          <p className="text-white/70 mb-4">Take sustainable actions at Latitude59:</p>

          <div className="space-y-3">
            {ecoActions.map((action, index) => (
              <motion.button
                key={action.id}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => toggleAction(action.id)}
                className={`w-full bg-[#1E1F23] rounded-2xl p-5 shadow-sm transition-all cursor-pointer text-left ${
                  action.completed ? "opacity-60" : "hover:shadow-md hover:scale-102"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 rounded-xl" style={{ backgroundColor: action.color + "30" }}>
                    <action.icon className="w-6 h-6" style={{ color: action.color }} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white">{action.title}</h3>
                    <p className="text-sm text-white/70">+{action.points} points</p>
                  </div>
                  {action.completed ? (
                    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="text-[#CDE800] text-2xl">
                      ✓
                    </motion.div>
                  ) : (
                    <div className="bg-[#0055FF] text-white px-4 py-2 rounded-full text-sm font-black">Log</div>
                  )}
                </div>
              </motion.button>
            ))}
          </div>

          {/* QR Scanner */}
          <motion.button
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onClick={handleQRScan}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-6 w-full bg-[#0055FF] text-white rounded-2xl p-6 flex items-center justify-center gap-3 hover:bg-[#004DE8] transition-all shadow-lg"
          >
            <QrCode className="w-6 h-6" />
            <span className="font-black">Scan QR to Log Action</span>
          </motion.button>
        </div>

        {/* Badges Progress */}
        <div>
          <h2 className="text-xl font-black text-white mb-4">Eco Badges</h2>
          <div className="space-y-3">
            {ecoBadges.map((badge, index) => (
              <motion.button
                key={badge.name}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                onClick={() => console.log("[v0] Badge clicked:", badge.name)}
                className={`w-full bg-[#1E1F23] rounded-2xl p-5 text-left transition-all hover:shadow-md ${
                  badge.unlocked ? "shadow-lg border-2 border-[#CDE800]" : "shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-xl ${badge.unlocked ? "bg-[#CDE800]" : "bg-[#2A2B2F]"}`}>
                    <Award className={`w-6 h-6 ${badge.unlocked ? "text-[#141518]" : "text-white"}`} strokeWidth={2} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-black text-white">{badge.name}</h3>
                    <p className="text-sm text-white/70">{badge.points} points required</p>
                  </div>
                  {badge.unlocked && (
                    <div className="bg-[#CDE800] text-[#141518] px-3 py-1 rounded-full text-sm font-black">✓</div>
                  )}
                  {!badge.unlocked && currentPoints < badge.points && (
                    <div className="text-white/70 text-sm">{badge.points - currentPoints} pts</div>
                  )}
                </div>

                {/* Progress bar for next badge */}
                {!badge.unlocked && currentPoints >= (ecoBadges[index - 1]?.points || 0) && (
                  <div className="mt-3">
                    <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${Math.min(
                            100,
                            ((currentPoints - (ecoBadges[index - 1]?.points || 0)) /
                              (badge.points - (ecoBadges[index - 1]?.points || 0))) *
                              100,
                          )}%`,
                        }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="h-full bg-[#CDE800] rounded-full"
                      />
                    </div>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </div>

        {/* Impact Message */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 bg-gradient-to-r from-[#0055FF] to-[#004DE8] rounded-2xl p-6 text-center"
        >
          <Leaf className="w-8 h-8 text-white mx-auto mb-3" />
          <p className="text-white mb-2">
            <span className="font-black">Amazing work!</span>
          </p>
          <p className="text-white/90 text-sm">Your sustainable choices are making Latitude59 greener. Keep it up!</p>
        </motion.div>
      </div>
    </motion.div>
  )
}
