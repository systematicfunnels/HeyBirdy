"use client"

import { CheckCircle2, LucideIcon } from "lucide-react"

export interface Task {
  id: string
  title: string
  points: number
  progress: number
  total: number
  icon: LucideIcon
  completed?: boolean
}

interface DailyTaskCardProps {
  task: Task
}

export function DailyTaskCard({ task }: DailyTaskCardProps) {
  return (
    <div className={`p-6 rounded-3xl border ${task.completed ? 'bg-green-50/50 border-green-100' : 'bg-slate-50 border-slate-100'} group transition-all`}>
      <div className="flex items-center gap-4">
        <div className={`h-12 w-12 rounded-2xl flex items-center justify-center ${task.completed ? 'bg-green-500 text-white' : 'bg-white text-slate-400 shadow-sm'}`}>
          {task.completed ? <CheckCircle2 className="h-6 w-6" /> : <task.icon className="h-6 w-6" />}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h4 className={`font-black text-lg ${task.completed ? 'text-green-700' : 'text-slate-900'}`}>{task.title}</h4>
            <span className="font-black text-primary">+{task.points} pts</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex-1 h-2 bg-white rounded-full overflow-hidden shadow-inner">
              <div 
                className={`h-full transition-all duration-1000 ${task.completed ? 'bg-green-500' : 'bg-primary'}`} 
                style={{ width: `${(task.progress / task.total) * 100}%` }}
              />
            </div>
            <span className="text-xs font-bold text-slate-500">{task.progress}/{task.total}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
