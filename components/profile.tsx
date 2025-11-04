"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowLeft, User, Award, Leaf, BookOpen, Settings, LogOut, ChevronRight } from "lucide-react"

interface ProfileProps {
  onBack: () => void
}

const stats = [
  { label: "XP Level", value: "1,250", icon: Award, color: "#0055FF" },
  { label: "Badges", value: "3/12", icon: Award, color: "#CDE800" },
  { label: "EcoPoints", value: "120", icon: Leaf, color: "#CDE800" },
  { label: "Resources Saved", value: "8", icon: BookOpen, color: "#004DE8" },
]

const menuItems = [
  { id: "journey", label: "My Journey", icon: Award },
  { id: "achievements", label: "Achievements", icon: Award },
  { id: "sustainability", label: "Sustainability", icon: Leaf },
  { id: "resources", label: "My Resources", icon: BookOpen },
  { id: "settings", label: "Settings", icon: Settings },
]

export default function Profile({ onBack }: ProfileProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] to-[#004DE8] p-6 pb-16 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-8">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <h1 className="text-2xl font-black text-white">Profile</h1>
        </div>

        {/* Profile Info */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => console.log("[v0] Profile avatar clicked")}
          className="text-center cursor-pointer group"
        >
          <div className="relative inline-block mb-4 group-hover:scale-105 transition-transform">
            <div className="w-24 h-24 bg-gradient-to-br from-[#DAF601] to-[#CDE800] rounded-full flex items-center justify-center shadow-xl">
              <User className="w-12 h-12 text-[#141518]" strokeWidth={2} />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-1">
              <div className="bg-[#DAF601] rounded-full p-1.5">
                <Award className="w-4 h-4 text-[#141518]" />
              </div>
            </div>
          </div>

          <h2 className="text-2xl font-black text-white mb-1">Nancy Chen</h2>
          <p className="text-white/80 mb-4">Founder @ TechStartup</p>

          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full hover:bg-white/30 transition-all">
            <span className="text-white text-sm">Level 5 Founder</span>
            <span className="text-[#DAF601]">⭐</span>
          </div>
        </motion.div>
      </div>

      <div className="p-6 -mt-8">
        {/* Stats Grid */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid grid-cols-2 gap-3 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.button
              key={stat.label}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.1 }}
              onClick={() => console.log("[v0] Stat clicked:", stat.label)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#1E1F23] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 rounded-lg" style={{ backgroundColor: stat.color + "30" }}>
                  <stat.icon className="w-5 h-5" style={{ color: stat.color }} strokeWidth={2} />
                </div>
              </div>
              <p className="text-2xl font-black text-white mb-1">{stat.value}</p>
              <p className="text-sm text-white/70">{stat.label}</p>
            </motion.button>
          ))}
        </motion.div>

        {/* Menu Items */}
        <div className="space-y-2 mb-8">
          {menuItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              onClick={() => setActiveMenu(activeMenu === item.id ? null : item.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full bg-[#1E1F23] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center justify-between group ${
                activeMenu === item.id ? "ring-2 ring-[#0055FF]" : ""
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-[#141518] rounded-xl group-hover:bg-[#0d0e10] transition-all">
                  <item.icon className="w-5 h-5 text-white" strokeWidth={2} />
                </div>
                <span className="font-black text-white">{item.label}</span>
              </div>
              <ChevronRight
                className={`w-5 h-5 text-white/70 transition-transform ${activeMenu === item.id ? "rotate-90" : ""}`}
              />
            </motion.button>
          ))}
        </div>

        {/* Sync with Latitude59 */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.1 }}
          onClick={() => console.log("[v0] Sync button clicked")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-[#CDE800] to-[#DAF601] rounded-2xl p-6 mb-4 transition-all hover:shadow-lg"
        >
          <h3 className="text-xl font-black text-[#141518] mb-2">Sync with Latitude59</h3>
          <p className="text-[#141518]/80 text-sm mb-4">Connect your profile to access exclusive conference features</p>
          <button className="w-full bg-[#141518] text-white py-3 rounded-xl hover:bg-[#1E1F23] transition-all font-black">
            Connect Account
          </button>
        </motion.button>

        {/* Logout */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={() => console.log("[v0] Logout clicked")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-[#1E1F23] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all flex items-center justify-center gap-3 text-red-400 hover:bg-red-400/10"
        >
          <LogOut className="w-5 h-5" strokeWidth={2} />
          <span className="font-black">Log Out</span>
        </motion.button>
      </div>
    </motion.div>
  )
}
