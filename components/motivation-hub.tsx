"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowLeft, Video, BookOpen, Headphones, Plus, ExternalLink, Check } from "lucide-react"

interface ResourcesProps {
  onBack: () => void
}

const initialResources = [
  {
    id: 1,
    type: "video",
    icon: Video,
    title: "3 Founders Who Made It Big",
    description: "Learn from successful Estonian startup founders",
    duration: "12 min",
    color: "#0055FF",
    saved: false,
  },
  {
    id: 2,
    type: "article",
    icon: BookOpen,
    title: "How to Validate Your Idea in a Week",
    description: "Step-by-step guide to customer validation",
    duration: "8 min read",
    color: "#004DE8",
    saved: true,
  },
  {
    id: 3,
    type: "podcast",
    icon: Headphones,
    title: "Latitude59 Fireside Talk",
    description: "Insights from 2024 event speakers",
    duration: "45 min",
    color: "#CDE800",
    saved: false,
  },
  {
    id: 4,
    type: "video",
    icon: Video,
    title: "Pitch Deck Masterclass",
    description: "Create a compelling investor presentation",
    duration: "25 min",
    color: "#DAF601",
    saved: false,
  },
  {
    id: 5,
    type: "article",
    icon: BookOpen,
    title: "Finding Your First Customers",
    description: "Proven strategies for early customer acquisition",
    duration: "6 min read",
    color: "#0055FF",
    saved: false,
  },
  {
    id: 6,
    type: "video",
    icon: Video,
    title: "MVP Development Tips",
    description: "Build your minimum viable product efficiently",
    duration: "18 min",
    color: "#004DE8",
    saved: true,
  },
]

const categories = [
  { name: "All", active: true },
  { name: "Videos", active: false },
  { name: "Articles", active: false },
  { name: "Podcasts", active: false },
  { name: "Saved", active: false },
]

export default function Resources({ onBack }: ResourcesProps) {
  const [resources, setResources] = useState(initialResources)
  const [activeCategory, setActiveCategory] = useState("All")

  const toggleSave = (id: number) => {
    setResources((prev) => prev.map((r) => (r.id === id ? { ...r, saved: !r.saved } : r)))
  }

  const handleResourceClick = (id: number) => {
    console.log("[v0] Resource clicked:", id)
  }

  const filteredResources = activeCategory === "Saved" ? resources.filter((r) => r.saved) : resources

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] pb-24"
    >
      {/* Header */}
      <div className="bg-gradient-to-br from-[#0055FF] to-[#004DE8] p-6 pb-8 rounded-b-[2rem]">
        <div className="flex items-center gap-4 mb-6">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h1 className="text-2xl font-black text-white">Resources</h1>
            <p className="text-white/80 text-sm">Learn & grow as a founder</p>
          </div>
        </div>

        {/* Categories */}
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-all ${
                activeCategory === category.name
                  ? "bg-white text-[#0055FF] font-black"
                  : "bg-white/20 text-white hover:bg-white/30"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Motivational Banner */}
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mx-6 -mt-4 mb-6 bg-gradient-to-r from-[#CDE800] to-[#DAF601] rounded-2xl p-5 shadow-lg"
      >
        <p className="text-[#141518] mb-2">
          <span className="font-black">Need a boost?</span>
        </p>
        <p className="text-[#141518]/90 text-sm">
          Remember: every big startup started small. You're on the right path!
        </p>
      </motion.div>

      {/* Resources List */}
      <div className="px-6 pb-6">
        <h2 className="text-xl font-black text-white mb-4">
          Recommended for <span className="text-[#CDE800]">You</span>
        </h2>

        <div className="space-y-4">
          {filteredResources.map((resource, index) => (
            <motion.button
              key={resource.id}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              onClick={() => handleResourceClick(resource.id)}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-[#1E1F23] rounded-2xl p-5 shadow-sm hover:shadow-md transition-all cursor-pointer group text-left"
            >
              <div className="flex gap-4">
                {/* Icon */}
                <div className="p-4 rounded-xl flex-shrink-0" style={{ backgroundColor: resource.color + "30" }}>
                  <resource.icon className="w-6 h-6" style={{ color: resource.color }} strokeWidth={2} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 pr-2">
                      <h3 className="font-black text-white mb-1 group-hover:text-[#0055FF] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-white/70 line-clamp-2">{resource.description}</p>
                    </div>
                    <ExternalLink className="w-5 h-5 text-white/70 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </div>

                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xs text-white/80 bg-[#141518] px-3 py-1 rounded-full">
                        {resource.duration}
                      </span>
                      <span className="text-xs text-white/70 capitalize">{resource.type}</span>
                    </div>

                    <motion.button
                      onClick={(e) => {
                        e.stopPropagation()
                        toggleSave(resource.id)
                      }}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full transition-all ${
                        resource.saved ? "bg-[#DAF601] text-[#141518]" : "bg-[#141518] text-white/70 hover:bg-[#0d0e10]"
                      }`}
                    >
                      {resource.saved ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Learning Path CTA */}
        <motion.button
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => console.log("[v0] Create learning path clicked")}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="mt-8 w-full bg-gradient-to-r from-[#0055FF] to-[#004DE8] rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all"
        >
          <h3 className="text-xl font-black text-white mb-2">Create Your Learning Path</h3>
          <p className="text-white/90 text-sm mb-4">Build a personalized curriculum based on your goals</p>
          <div className="bg-white text-[#0055FF] px-6 py-3 rounded-full hover:bg-white/90 transition-all font-black inline-block">
            Get Started
          </div>
        </motion.button>
      </div>
    </motion.div>
  )
}
