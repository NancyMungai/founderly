"use client"

import { motion } from "motion/react"
import { CheckCircle2, Circle, Loader, Rocket, MessageSquare, Leaf, Menu, User, Sparkles } from "lucide-react"

interface DashboardProps {
  onNavigate: (screen: string) => void
  onChat: () => void
  onRoadmap: () => void
  onBadges: () => void
  onSustainability: () => void
  onMotivation: () => void
  onConference: () => void
  onProfile: () => void
}

const milestones = [
  {
    id: "validation",
    title: "Idea Validation",
    status: "completed" as const,
    icon: CheckCircle2,
    color: "#CDE800",
  },
  {
    id: "mvp",
    title: "MVP & Pitch Deck",
    status: "in-progress" as const,
    icon: Loader,
    color: "#0055FF",
  },
  {
    id: "readiness",
    title: "Conference Readiness",
    status: "next" as const,
    icon: Circle,
    color: "#EEEEEE",
  },
]

export default function Dashboard({
  onChat,
  onRoadmap,
  onBadges,
  onSustainability,
  onMotivation,
  onConference,
  onProfile,
}: Omit<DashboardProps, "onNavigate">) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] to-[#004DE8] p-6 pb-12 rounded-b-[2rem]">
        <div className="flex items-center justify-between mb-8">
          <button onClick={onProfile} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <Menu className="w-6 h-6 text-white" />
          </button>
          <button onClick={onProfile} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <User className="w-6 h-6 text-white" />
          </button>
        </div>

        <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
          <h1 className="text-3xl font-black text-white mb-2">Good morning, Nancy</h1>
          <p className="text-white/90 text-lg mb-6">You're making great progress!</p>

          {/* Progress Circle */}
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-6">
            <div className="flex items-center gap-6">
              <div className="relative">
                <svg className="w-24 h-24 transform -rotate-90">
                  <circle cx="48" cy="48" r="40" stroke="rgba(255,255,255,0.2)" strokeWidth="8" fill="none" />
                  <motion.circle
                    cx="48"
                    cy="48"
                    r="40"
                    stroke="#DAF601"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                    initial={{ strokeDasharray: "251.2", strokeDashoffset: "251.2" }}
                    animate={{ strokeDashoffset: "87.92" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-2xl font-black text-white">65%</span>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-1">Founder Journey Progress</h3>
                <p className="text-white/80 text-sm">Ready for Latitude59</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Milestones */}
      <div className="p-6 -mt-6">
        <h2 className="text-2xl font-black text-white mb-4">Your Milestones</h2>
        <div className="space-y-3">
          {milestones.map((milestone, index) => (
            <motion.div
              key={milestone.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              className="bg-[#1E1F23] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
              onClick={onRoadmap}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl" style={{ backgroundColor: milestone.color + "30" }}>
                  <milestone.icon
                    className="w-6 h-6"
                    style={{ color: milestone.status === "next" ? "#FFFFFF" : milestone.color }}
                    strokeWidth={2}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-black text-white">{milestone.title}</h3>
                  <p className="text-sm text-white/70 capitalize">{milestone.status.replace("-", " ")}</p>
                </div>
                {milestone.status === "completed" && (
                  <div className="text-[#CDE800]">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                )}
                {milestone.status === "in-progress" && (
                  <div className="w-2 h-2 bg-[#0055FF] rounded-full animate-pulse"></div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-8"
        >
          <h2 className="text-2xl font-black text-white mb-4">Quick Actions</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={onRoadmap}
              className="bg-gradient-to-br from-[#0055FF] to-[#004DE8] p-6 rounded-2xl text-left hover:scale-105 transition-all shadow-lg"
            >
              <Rocket className="w-8 h-8 text-white mb-3" />
              <p className="text-white font-black">View Roadmap</p>
            </button>
            <button
              onClick={onChat}
              className="bg-gradient-to-br from-[#CDE800] to-[#DAF601] p-6 rounded-2xl text-left hover:scale-105 transition-all shadow-lg"
            >
              <MessageSquare className="w-8 h-8 text-[#141518] mb-3" />
              <p className="text-[#141518] font-black">Talk to Coach</p>
            </button>
            <button
              onClick={onSustainability}
              className="col-span-2 bg-gradient-to-r from-[#004DE8] to-[#0055FF] p-6 rounded-2xl text-left hover:scale-105 transition-all shadow-lg"
            >
              <Leaf className="w-8 h-8 text-white mb-2" />
              <p className="text-white font-black">Join Green Challenge</p>
              <p className="text-white/80 text-sm">Earn EcoPoints at Latitude59</p>
            </button>
          </div>
        </motion.div>

        {/* Additional Links */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-8 grid grid-cols-2 gap-3"
        >
          <button
            onClick={onMotivation}
            className="bg-[#1E1F23] p-5 rounded-2xl text-left hover:shadow-md transition-all"
          >
            <Sparkles className="w-6 h-6 text-white mb-2" />
            <p className="font-black text-white mb-1">Resources</p>
            <p className="text-sm text-white/70">Learn & grow</p>
          </button>
          <button
            onClick={onConference}
            className="bg-[#1E1F23] p-5 rounded-2xl text-left hover:shadow-md transition-all"
          >
            <Rocket className="w-6 h-6 text-white mb-2" />
            <p className="font-black text-white mb-1">Latitude59</p>
            <p className="text-sm text-white/70">Event info</p>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
