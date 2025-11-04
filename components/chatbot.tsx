"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "motion/react"
import { Send, Lightbulb, TrendingUp, Target, Heart, ArrowLeft } from "lucide-react"

interface ChatbotProps {
  onBack: () => void
}

interface Message {
  id: string
  text: string
  sender: "bot" | "user"
  timestamp: Date
}

const quickReplies = [
  { icon: Lightbulb, text: "Validate Idea", color: "#0055FF" },
  { icon: TrendingUp, text: "Find Resources", color: "#004DE8" },
  { icon: Target, text: "Get Pitch Help", color: "#CDE800" },
  { icon: Heart, text: "Stay Motivated", color: "#DAF601" },
]

export default function Chatbot({ onBack }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi, I'm your Founder Coach! Ready to get your idea investor-ready?",
      sender: "bot",
      timestamp: new Date(),
    },
    {
      id: "2",
      text: "Tell me in one line: what's your startup idea?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInputValue("")

    setTimeout(() => {
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "That's a great start! Let's validate your idea together. What problem are you solving?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  const handleQuickReply = (text: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])

    setTimeout(() => {
      const responses: Record<string, string> = {
        "Validate Idea": "Great! Let's validate your idea. Have you talked to potential customers yet?",
        "Find Resources": "I can help with that! Check out the Resources section for founder guides, videos, and more.",
        "Get Pitch Help": "Perfect timing! Let's work on your pitch deck. What's your startup's core message?",
        "Stay Motivated": "You've got this! Remember: every successful founder started exactly where you are.",
      }

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: responses[text] || "I'm here to help! What would you like to know?",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, botMessage])
    }, 1000)
  }

  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0 }}
      className="min-h-screen bg-[#141518] flex flex-col pb-20"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#0055FF] to-[#004DE8] p-6 shadow-lg">
        <div className="flex items-center gap-4 mb-4">
          <button onClick={onBack} className="p-2 hover:bg-white/20 rounded-full transition-all">
            <ArrowLeft className="w-6 h-6 text-white" />
          </button>
          <div>
            <h2 className="text-xl font-black text-white">Founder Coach</h2>
            <p className="text-sm text-white/80">AI-powered guidance</p>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={message.id}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-4 rounded-3xl ${
                message.sender === "user"
                  ? "bg-[#0055FF] text-white rounded-br-md"
                  : "bg-[#2A2B2F] text-white rounded-bl-md"
              }`}
            >
              <p>{message.text}</p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick replies */}
      <div className="p-4 border-t border-[#2A2B2F]">
        <p className="text-xs text-white/70 mb-3">Quick actions:</p>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {quickReplies.map((reply) => (
            <button
              key={reply.text}
              onClick={() => handleQuickReply(reply.text)}
              className="flex items-center gap-2 px-4 py-2 bg-[#2A2B2F] text-white rounded-full whitespace-nowrap hover:bg-[#33343A] transition-all"
              style={{ borderLeft: `4px solid ${reply.color}` }}
            >
              <reply.icon className="w-4 h-4" />
              <span className="text-sm">{reply.text}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-[#2A2B2F] bg-[#141518] mb-16">
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            placeholder="Type your message..."
            className="flex-1 px-4 py-3 bg-[#2A2B2F] text-white placeholder:text-white/50 rounded-full outline-none focus:ring-2 focus:ring-[#0055FF]"
          />
          <button
            onClick={handleSend}
            className="p-3 bg-[#0055FF] text-white rounded-full hover:bg-[#004DE8] transition-all disabled:opacity-50"
            disabled={!inputValue.trim()}
          >
            <Send className="w-6 h-6" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}
