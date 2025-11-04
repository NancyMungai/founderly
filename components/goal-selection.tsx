"use client"

import { motion } from "motion/react"
import { Mic, Users, Presentation } from "lucide-react"

interface GoalSelectionProps {
  onComplete: (goal: string) => void
}

const goals = [
  {
    id: "pitch",
    icon: Mic,
    title: "Pitch my startup",
    description: "Get your pitch deck and presentation ready for investors",
    gradient: "from-[#0055FF] to-[#004DE8]",
  },
  {
    id: "connect",
    icon: Users,
    title: "Connect with founders & investors",
    description: "Build meaningful relationships in the startup ecosystem",
    gradient: "from-[#004DE8] to-[#0055FF]",
  },
  {
    id: "demo",
    icon: Presentation,
    title: "Set up a demo or booth",
    description: "Showcase your product to attendees at Latitude59",
    gradient: "from-[#CDE800] to-[#DAF601]",
  },
]

export default function GoalSelection({ onComplete }: GoalSelectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#141518] p-6 flex flex-col"
    >
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-black text-white mb-3 leading-tight">
          What's your <span className="text-[#CDE800]">goal</span> for Latitude59?
        </h1>
        <p className="text-lg text-white/70">We'll personalize your journey based on your selection</p>
      </motion.div>

      <div className="flex-1 flex flex-col gap-4">
        {goals.map((goal, index) => (
          <motion.button
            key={goal.id}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => onComplete(goal.id)}
            className={`bg-gradient-to-br ${goal.gradient} p-6 rounded-3xl text-left shadow-lg hover:shadow-xl transition-all group`}
          >
            <div className="flex items-start gap-4">
              <div className="bg-white/20 backdrop-blur-sm p-4 rounded-2xl group-hover:bg-white/30 transition-all">
                <goal.icon className="w-8 h-8 text-white" strokeWidth={2} />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-black text-white mb-2">{goal.title}</h3>
                <p className="text-white/90">{goal.description}</p>
              </div>
            </div>
          </motion.button>
        ))}
      </div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="mt-8 text-center"
      >
        <p className="text-sm text-white/60">You can change this later in your settings</p>
      </motion.div>
    </motion.div>
  )
}
