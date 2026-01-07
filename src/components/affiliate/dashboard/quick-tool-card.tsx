"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowUpRight, LucideIcon } from "lucide-react"
import Link from "next/link"

interface QuickToolCardProps {
  tool: {
    name: string
    description: string
    icon: LucideIcon
    href: string
    color: string
    bg: string
  }
}

export function QuickToolCard({ tool }: QuickToolCardProps) {
  const Icon = tool.icon
  
  return (
    <Link href={tool.href}>
      <Card className="group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] bg-white cursor-pointer overflow-hidden">
        <CardContent className="p-8">
          <div className="flex items-center gap-6">
            <div className={`h-16 w-16 rounded-[1.25rem] ${tool.bg} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 shadow-sm`}>
              <Icon className={`h-8 w-8 ${tool.color}`} />
            </div>
            <div className="flex-1">
              <h3 className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors mb-1">{tool.name}</h3>
              <p className="text-sm text-slate-500 font-medium leading-relaxed">{tool.description}</p>
            </div>
            <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
              <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
