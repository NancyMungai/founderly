"use client"

import { motion } from "motion/react"
import { ArrowLeft, MapPin, Calendar, Users, Presentation, Map } from "lucide-react"

interface ConferenceProps {
  onBack: () => void
}

const venues = [
  { id: "main", name: "Main Stage", icon: Presentation, x: 40, y: 30 },
  { id: "network", name: "Networking Lounge", icon: Users, x: 70, y: 50 },
  { id: "demo", name: "Demo Hall", icon: MapPin, x: 25, y: 65 },
]

const checklist = [
  { id: 1, text: "Register your ticket", completed: true },
  { id: 2, text: "Finalize your pitch", completed: true },
  { id: 3, text: "Schedule meetings", completed: false },
  { id: 4, text: "Bring your reusable cup", completed: false },
]

export default function Conference({ onBack }: ConferenceProps) {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] via-[#004DE8] to-[#CDE800] p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-white">Latitude59</h1>
            <p className="text-white/80 text-sm">May 22-23, 2025 • Tallinn</p>
          </div>
        </div>

        {/* Welcome Banner */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-5">
          <h2 className="text-xl font-black text-white mb-2">Welcome to Latitude59</h2>
          <p className="text-white/90 text-sm">Your global village of innovators. Let's make bold ideas real.</p>
        </div>
      </div>

      <div className="p-6">
        {/* Virtual Map */}
        <div className="mb-8">
          <h2 className="text-xl font-black text-white mb-4">Event Map</h2>
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="bg-gradient-to-br from-[#1E1F23] to-[#0d0e10] rounded-3xl p-6 relative h-80 overflow-hidden"
          >
            {/* Map illustration */}
            <div className="absolute inset-0">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {/* Buildings/areas */}
                <rect x="15" y="20" width="25" height="30" rx="2" fill="#FFFFFF" opacity="0.1" />
                <rect x="60" y="35" width="30" height="25" rx="2" fill="#FFFFFF" opacity="0.1" />
                <rect x="10" y="55" width="35" height="30" rx="2" fill="#FFFFFF" opacity="0.1" />

                {/* Paths */}
                <path d="M 40 35 Q 55 40 70 50" stroke="#0055FF" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
                <path d="M 27 50 Q 27 58 25 70" stroke="#0055FF" strokeWidth="0.5" fill="none" strokeDasharray="1,1" />
              </svg>
            </div>

            {/* Venue markers */}
            {venues.map((venue, index) => (
              <motion.div
                key={venue.id}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 + index * 0.1, type: "spring", stiffness: 200 }}
                className="absolute"
                style={{ left: `${venue.x}%`, top: `${venue.y}%` }}
              >
                <div className="relative group cursor-pointer">
                  {/* Pulsing ring */}
                  <div className="absolute inset-0 bg-[#0055FF] rounded-full animate-ping opacity-75"></div>

                  {/* Main marker */}
                  <div className="relative bg-[#0055FF] p-3 rounded-full shadow-lg hover:scale-110 transition-all">
                    <venue.icon className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>

                  {/* Label */}
                  <div className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="bg-white text-[#141518] px-3 py-1 rounded-lg text-xs whitespace-nowrap">
                      {venue.name}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div className="mt-4 grid grid-cols-3 gap-2">
            {venues.map((venue) => (
              <button
                key={venue.id}
                className="bg-[#1E1F23] rounded-xl p-3 shadow-sm hover:shadow-md transition-all text-center"
              >
                <venue.icon className="w-5 h-5 text-[#0055FF] mx-auto mb-1" strokeWidth={2} />
                <p className="text-xs text-white">{venue.name}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Readiness Checklist */}
        <div className="mb-8">
          <h2 className="text-xl font-black text-white mb-4">
            <span className="text-[#CDE800]">Get Ready</span> Checklist
          </h2>

          <div className="bg-[#1E1F23] rounded-2xl p-5 shadow-sm">
            <div className="space-y-3">
              {checklist.map((item, index) => (
                <motion.label
                  key={item.id}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#141518] cursor-pointer transition-all group"
                >
                  <input
                    type="checkbox"
                    checked={item.completed}
                    className="w-5 h-5 rounded border-2 border-[#0055FF] text-[#0055FF] focus:ring-[#0055FF] cursor-pointer"
                    readOnly
                  />
                  <span className={`flex-1 ${item.completed ? "line-through text-white/50" : "text-white"}`}>
                    {item.text}
                  </span>
                  {item.completed && <span className="text-[#CDE800]">✓</span>}
                </motion.label>
              ))}
            </div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="mt-4 pt-4 border-t border-[#141518]"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-white/70">Progress</span>
                <span className="font-black text-[#0055FF]">50%</span>
              </div>
              <div className="mt-2 h-2 bg-[#141518] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "50%" }}
                  transition={{ delay: 1, duration: 1 }}
                  className="h-full bg-[#0055FF] rounded-full"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* Conference CTA */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="space-y-3"
        >
          <button className="w-full bg-gradient-to-r from-[#0055FF] to-[#004DE8] text-white rounded-2xl p-6 hover:scale-105 transition-all shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="font-black text-lg mb-1">View Full Schedule</p>
                <p className="text-white/90 text-sm">Plan your conference days</p>
              </div>
              <Calendar className="w-8 h-8" />
            </div>
          </button>

          <button className="w-full bg-gradient-to-r from-[#CDE800] to-[#DAF601] text-[#141518] rounded-2xl p-6 hover:scale-105 transition-all shadow-lg">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="font-black text-lg mb-1">Download Event App</p>
                <p className="text-[#141518]/80 text-sm">Stay connected on-site</p>
              </div>
              <Map className="w-8 h-8" />
            </div>
          </button>
        </motion.div>
      </div>
    </motion.div>
  )
}
