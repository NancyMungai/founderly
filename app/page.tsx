"use client"

import { useState, useEffect } from "react"
import { Splash } from "@/components/splash"
import Onboarding from "@/components/onboarding"
import GoalSelection from "@/components/goal-selection"
import Dashboard from "@/components/dashboard"
import Chatbot from "@/components/chatbot"
import Roadmap from "@/components/roadmap"
import Badges from "@/components/badges"
import SustainabilityChallenge from "@/components/sustainability-challenge"
import MotivationHub from "@/components/motivation-hub"
import ConferenceReadiness from "@/components/conference-readiness"
import Profile from "@/components/profile"
import { BottomNav } from "@/components/bottom-nav"

export default function Home() {
  const [currentScreen, setCurrentScreen] = useState("splash")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const showBottomNav = !["splash", "onboarding", "goal"].includes(currentScreen)

  return (
    <main className="min-h-screen bg-[#141518]">
      {currentScreen === "splash" && <Splash onComplete={() => setCurrentScreen("onboarding")} />}
      {currentScreen === "onboarding" && <Onboarding onComplete={() => setCurrentScreen("goal")} />}
      {currentScreen === "goal" && <GoalSelection onComplete={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "dashboard" && (
        <Dashboard
          onNavigate={() => {}}
          onChat={() => setCurrentScreen("chat")}
          onRoadmap={() => setCurrentScreen("roadmap")}
          onBadges={() => setCurrentScreen("badges")}
          onSustainability={() => setCurrentScreen("sustainability")}
          onMotivation={() => setCurrentScreen("motivation")}
          onConference={() => setCurrentScreen("conference")}
          onProfile={() => setCurrentScreen("profile")}
        />
      )}
      {currentScreen === "chat" && <Chatbot onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "roadmap" && <Roadmap onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "badges" && <Badges onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "sustainability" && <SustainabilityChallenge onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "motivation" && <MotivationHub onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "conference" && <ConferenceReadiness onBack={() => setCurrentScreen("dashboard")} />}
      {currentScreen === "profile" && <Profile onBack={() => setCurrentScreen("dashboard")} />}

      {showBottomNav && <BottomNav activeScreen={currentScreen} onNavigate={setCurrentScreen} />}
    </main>
  )
}
