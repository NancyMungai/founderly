"use client"

interface MilestoneCardProps {
  title: string
  status: "completed" | "in-progress" | "next"
  icon: string
  progress: number
  delay?: number
}

export default function MilestoneCard({ title, status, icon, progress, delay = 0 }: MilestoneCardProps) {
  const statusColors = {
    completed: "border-accent",
    "in-progress": "border-primary",
    next: "border-muted",
  }

  const statusBg = {
    completed: "bg-accent/10",
    "in-progress": "bg-primary/10",
    next: "bg-muted/10",
  }

  return (
    <div
      className={`bg-card border-2 ${statusColors[status]} ${statusBg[status]} rounded-xl p-6 animate-slide-in-left`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">{icon}</span>
          <h3 className="text-lg font-bold text-foreground">{title}</h3>
        </div>
        <span className="text-xs font-bold px-3 py-1 rounded-full bg-muted text-muted-foreground uppercase">
          {status === "in-progress" ? "In Progress" : status}
        </span>
      </div>
      <div className="w-full bg-muted rounded-full h-2">
        <div
          className={`h-2 rounded-full transition-all ${status === "completed" ? "bg-accent" : "bg-primary"}`}
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="text-xs text-muted-foreground mt-2">{progress}% complete</p>
    </div>
  )
}
