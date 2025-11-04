"use client"

import { motion } from "motion/react"
import { Home, Map, Trophy, Leaf, MessageSquare } from "lucide-react"

interface BottomNavProps {
  activeScreen: string
  onNavigate: (screen: string) => void
}

const navItems = [
  { id: "dashboard", icon: Home, label: "Home" },
  { id: "roadmap", icon: Map, label: "Roadmap" },
  { id: "chat", icon: MessageSquare, label: "Coach" },
  { id: "badges", icon: Trophy, label: "Badges" },
  { id: "sustainability", icon: Leaf, label: "Green" },
]

export function BottomNav({ activeScreen, onNavigate }: BottomNavProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-[#1E1F23] border-t border-[#0d0e10] safe-area-bottom z-50">
      <div className="flex items-center justify-around px-2 py-3 max-w-lg mx-auto">
        {navItems.map((item) => {
          const isActive = activeScreen === item.id
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className="relative flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all"
              aria-label={item.label}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-[#0055FF]/20 rounded-xl"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <item.icon
                className={`w-6 h-6 relative z-10 transition-colors ${isActive ? "text-[#0055FF]" : "text-white/70"}`}
                strokeWidth={2}
              />
              <span
                className={`text-xs relative z-10 transition-colors ${
                  isActive ? "text-[#0055FF] font-black" : "text-white/70"
                }`}
              >
                {item.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
