"use client"

interface ProgressRingProps {
  percentage: number
  radius?: number
  strokeWidth?: number
}

export default function ProgressRing({ percentage = 65, radius = 80, strokeWidth = 8 }: ProgressRingProps) {
  const circumference = 2 * Math.PI * radius
  const strokeDashoffset = circumference - (percentage / 100) * circumference

  return (
    <div className="relative w-40 h-40">
      <svg width="160" height="160" className="transform -rotate-90">
        <circle cx="80" cy="80" r={radius} fill="none" stroke="#2A2D32" strokeWidth={strokeWidth} />
        <circle
          cx="80"
          cy="80"
          r={radius}
          fill="none"
          stroke="#DAF601"
          strokeWidth={strokeWidth}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          className="transition-all duration-1000 ease-out badge-glow"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-4xl font-bold text-accent">{percentage}%</span>
      </div>
    </div>
  )
}
