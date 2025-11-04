"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Lightbulb, Rocket, Users, TrendingUp, Leaf, Lock, Trophy } from "lucide-react"

interface BadgesProps {
  onBack: () => void
}

const badges = [
  {
    id: "explorer",
    name: "Idea Explorer",
    icon: Lightbulb,
    progress: 100,
    color: "#DAF601",
    unlocked: true,
    description: "Validated your startup idea",
  },
  {
    id: "pitch-ready",
    name: "Pitch Ready",
    icon: Rocket,
    progress: 75,
    color: "#0055FF",
    unlocked: false,
    description: "Complete your pitch deck",
  },
  {
    id: "connector",
    name: "Connector",
    icon: Users,
    progress: 40,
    color: "#004DE8",
    unlocked: false,
    description: "Network with 10 founders",
  },
  {
    id: "growth",
    name: "Growth Planner",
    icon: TrendingUp,
    progress: 20,
    color: "#CDE800",
    unlocked: false,
    description: "Create growth strategy",
  },
  {
    id: "eco",
    name: "Eco Founder",
    icon: Leaf,
    progress: 60,
    color: "#CDE800",
    unlocked: false,
    description: "Earn 500 EcoPoints",
  },
  {
    id: "l59",
    name: "L59 Champion",
    icon: Trophy,
    progress: 0,
    color: "#0055FF",
    unlocked: false,
    description: "Attend Latitude59",
  },
]

export default function Badges({ onBack }: { onBack: () => void }) {
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] via-[#004DE8] to-[#CDE800] p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-white">Your Badges</h1>
            <p className="text-white/80 text-sm">Track your founder journey</p>
          </div>
        </div>

        {/* XP Score */}
        <motion.button
          onClick={() => console.log("[v0] XP Score clicked")}
          whileHover={{ scale: 1.02 }}
          className="w-full bg-white/10 backdrop-blur-sm rounded-2xl p-5 mt-6 text-left transition-all hover:bg-white/20"
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white/80 text-sm mb-1">Total XP</p>
              <p className="text-3xl font-black text-white">1,250</p>
            </div>
            <div className="text-right">
              <p className="text-white/80 text-sm mb-1">Leaderboard</p>
              <p className="text-2xl font-black text-[#DAF601]">Top 5</p>
            </div>
          </div>
        </motion.button>
      </div>

      {/* Badges Grid */}
      <div className="p-6">
        <h2 className="text-xl font-black text-white mb-4">Achievements</h2>
        <div className="grid grid-cols-2 gap-4">
          {badges.map((badge, index) => (
            <motion.button
              key={badge.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
              onClick={() => setSelectedBadge(selectedBadge === badge.id ? null : badge.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-[#1E1F23] rounded-2xl p-5 shadow-sm relative overflow-hidden transition-all cursor-pointer ${
                badge.unlocked ? "animate-glow" : ""
              } ${selectedBadge === badge.id ? "ring-2 ring-[#0055FF]" : ""}`}
            >
              {/* Background gradient */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  background: `linear-gradient(135deg, ${badge.color} 0%, transparent 100%)`,
                }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-4">
                  <div
                    className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                      badge.unlocked ? "" : "opacity-50 grayscale"
                    }`}
                    style={{ backgroundColor: badge.color + "30" }}
                  >
                    {badge.unlocked ? (
                      <badge.icon className="w-8 h-8" style={{ color: badge.color }} strokeWidth={2} />
                    ) : (
                      <Lock className="w-8 h-8 text-white/50" strokeWidth={2} />
                    )}
                  </div>
                </div>

                {/* Name & Description */}
                <h3 className="font-black text-white mb-1">{badge.name}</h3>
                <p className="text-xs text-white/70 mb-3">{badge.description}</p>

                {/* Progress */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/70">Progress</span>
                    <span className="font-black text-white">{badge.progress}%</span>
                  </div>
                  <div className="h-2 bg-[#2A2B2F] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${badge.progress}%` }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: badge.color }}
                    />
                  </div>
                </div>

                {/* Unlocked badge */}
                {badge.unlocked && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute top-3 right-3 bg-[#DAF601] text-[#141518] px-2 py-1 rounded-full text-xs font-black"
                  >
                    ✓
                  </motion.div>
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {/* Badge Details */}
        {selectedBadge && (
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="mt-8 bg-[#1E1F23] rounded-2xl p-6"
          >
            {(() => {
              const badge = badges.find((b) => b.id === selectedBadge)
              return badge ? (
                <div>
                  <h3 className="text-xl font-black text-white mb-2">{badge.name}</h3>
                  <p className="text-white/70 mb-4">{badge.description}</p>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-full h-3 bg-[#141518] rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${badge.progress}%` }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: badge.color }}
                      />
                    </div>
                    <span className="font-black text-white">{badge.progress}%</span>
                  </div>
                  <button className="w-full bg-[#0055FF] text-white rounded-xl py-3 hover:bg-[#004DE8] transition-all font-black">
                    View Path to Badge
                  </button>
                </div>
              ) : null
            })()}
          </motion.div>
        )}

        {/* Motivational message */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          onClick={() => console.log("[v0] Motivation clicked")}
          className="mt-8 w-full bg-gradient-to-r from-[#0055FF] to-[#004DE8] rounded-2xl p-6 text-center hover:shadow-lg transition-all"
        >
          <p className="text-white text-lg mb-2">
            <span className="font-black">Keep going!</span>
          </p>
          <p className="text-white/90 text-sm">
            You're in the top 5 this week. Complete more milestones to climb higher!
          </p>
        </motion.button>
      </div>
    </motion.div>
  )
}
