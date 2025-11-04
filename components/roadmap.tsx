"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Lightbulb, Rocket, FileText, Users, Calendar, Zap, ChevronDown } from "lucide-react"

interface RoadmapProps {
  onBack: () => void
}

const roadmapSteps = [
  {
    id: "validate",
    title: "Validate Idea",
    icon: Lightbulb,
    status: "completed" as const,
    tasks: [
      { id: 1, text: "Customer interviews", completed: true },
      { id: 2, text: "Market research", completed: true },
      { id: 3, text: "Problem validation", completed: true },
    ],
    xp: 150,
  },
  {
    id: "mvp",
    title: "Build MVP",
    icon: Rocket,
    status: "in-progress" as const,
    tasks: [
      { id: 1, text: "Define core features", completed: true },
      { id: 2, text: "Create prototype", completed: true },
      { id: 3, text: "Get user feedback", completed: false },
    ],
    xp: 200,
  },
  {
    id: "pitch",
    title: "Create Pitch Deck",
    icon: FileText,
    status: "in-progress" as const,
    tasks: [
      { id: 1, text: "Write your story", completed: true },
      { id: 2, text: "Add visuals", completed: false },
      { id: 3, text: "Record 1-min pitch video", completed: false },
      { id: 4, text: "Practice with mentor", completed: false },
    ],
    xp: 250,
  },
  {
    id: "network",
    title: "Network Plan",
    icon: Users,
    status: "next" as const,
    tasks: [
      { id: 1, text: "Identify key contacts", completed: false },
      { id: 2, text: "Prepare elevator pitch", completed: false },
      { id: 3, text: "Schedule meetings", completed: false },
    ],
    xp: 100,
  },
  {
    id: "l59-prep",
    title: "Latitude59 Prep",
    icon: Calendar,
    status: "next" as const,
    tasks: [
      { id: 1, text: "Register ticket", completed: false },
      { id: 2, text: "Book accommodation", completed: false },
      { id: 3, text: "Plan schedule", completed: false },
    ],
    xp: 150,
  },
  {
    id: "attend",
    title: "Attend Event",
    icon: Zap,
    status: "next" as const,
    tasks: [
      { id: 1, text: "Network actively", completed: false },
      { id: 2, text: "Attend workshops", completed: false },
      { id: 3, text: "Pitch to investors", completed: false },
    ],
    xp: 500,
  },
]

export default function Roadmap({ onBack }: RoadmapProps) {
  const [expandedStep, setExpandedStep] = useState<string>("validate")
  const [stepTasks, setStepTasks] = useState(roadmapSteps)

  const toggleTask = (stepId: string, taskId: number) => {
    setStepTasks((prev) =>
      prev.map((step) =>
        step.id === stepId
          ? {
              ...step,
              tasks: step.tasks.map((task) => (task.id === taskId ? { ...task, completed: !task.completed } : task)),
            }
          : step,
      ),
    )
  }

  const toggleStepExpanded = (stepId: string) => {
    setExpandedStep(expandedStep === stepId ? "" : stepId)
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] to-[#004DE8] p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-white">Founder Roadmap</h1>
            <p className="text-white/80 text-sm">Your path to Latitude59</p>
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="p-6 relative">
        {/* Vertical line */}
        <div className="absolute left-[3.25rem] top-6 bottom-6 w-0.5 bg-[#2A2B2F]"></div>

        <div className="space-y-6">
          {stepTasks.map((step, index) => (
            <motion.button
              key={step.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              onClick={() => toggleStepExpanded(step.id)}
              className="w-full text-left relative"
            >
              {/* Icon */}
              <div className="absolute left-0 top-0">
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shadow-lg transition-all ${
                    step.status === "completed"
                      ? "bg-[#CDE800]"
                      : step.status === "in-progress"
                        ? "bg-[#0055FF]"
                        : "bg-[#2A2B2F] border-2 border-[#33343A]"
                  }`}
                >
                  <step.icon className="w-7 h-7 text-white" strokeWidth={2} />
                </div>
              </div>

              {/* Content */}
              <motion.div
                layout
                className={`ml-20 bg-[#1E1F23] rounded-2xl p-5 shadow-sm transition-all ${
                  expandedStep === step.id ? "ring-2 ring-[#0055FF]" : "hover:shadow-md"
                }`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-black text-white mb-1">{step.title}</h3>
                    <p className="text-sm text-white/70 capitalize">
                      {step.status.replace("-", " ")}
                      {step.status !== "next" && ` • ${step.xp} XP`}
                    </p>
                  </div>
                  <motion.div animate={{ rotate: expandedStep === step.id ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-white/70" />
                  </motion.div>
                </div>

                {/* Completed badge */}
                {step.status === "completed" && (
                  <div className="bg-[#CDE800] text-[#141518] px-3 py-1 rounded-full text-sm font-black mb-4 inline-block">
                    Done ✓
                  </div>
                )}

                {/* Tasks - Show when expanded */}
                <motion.div
                  initial={false}
                  animate={{
                    height: expandedStep === step.id ? "auto" : 0,
                    opacity: expandedStep === step.id ? 1 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-2 pt-4 border-t border-[#141518]">
                    {step.tasks.map((task) => (
                      <label
                        key={task.id}
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-start gap-3 p-3 rounded-xl hover:bg-[#2A2B2F] cursor-pointer transition-all group"
                      >
                        <input
                          type="checkbox"
                          checked={task.completed}
                          onChange={() => toggleTask(step.id, task.id)}
                          className="mt-0.5 w-5 h-5 rounded border-2 border-[#0055FF] text-[#0055FF] focus:ring-[#0055FF] cursor-pointer"
                        />
                        <span className={`flex-1 ${task.completed ? "line-through text-white/50" : "text-white"}`}>
                          {task.text}
                        </span>
                      </label>
                    ))}
                  </div>

                  {step.status === "in-progress" && (
                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        console.log("[v0] Continue working on:", step.id)
                      }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 w-full py-3 bg-[#0055FF] text-white rounded-xl hover:bg-[#004DE8] transition-all font-black"
                    >
                      Continue Working
                    </motion.button>
                  )}
                </motion.div>
              </motion.div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
