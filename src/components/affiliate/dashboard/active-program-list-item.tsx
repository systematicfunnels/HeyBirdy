"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"

export interface ActiveProgram {
  id: string
  creator: string
  program: string
  commission: string
  status: string
  earned: string
  clicks: string
}

interface ActiveProgramListItemProps {
  program: ActiveProgram
}

export function ActiveProgramListItem({ program }: ActiveProgramListItemProps) {
  return (
    <Card className="group hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] transition-all duration-700 border-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] bg-white overflow-hidden">
      <CardContent className="p-8">
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
          <div className="flex items-center gap-5">
            <div className="h-16 w-16 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:scale-110 group-hover:rotate-3 transition-all duration-700">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary/10 text-primary font-black text-lg">{program.creator[0]}</AvatarFallback>
              </Avatar>
            </div>
            <div>
              <h3 className="font-black text-xl text-slate-900 group-hover:text-primary transition-colors mb-1">{program.program}</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-slate-400 font-medium">Partner:</span>
                <span className="text-sm text-slate-900 font-bold">{program.creator}</span>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-10">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">Commission</p>
              <p className="font-black text-slate-900 text-lg">{program.commission}</p>
            </div>
            <div className="h-10 w-px bg-slate-100 hidden sm:block" />
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">Total Clicks</p>
              <p className="font-black text-slate-900 text-lg">{program.clicks}</p>
            </div>
            <div className="h-10 w-px bg-slate-100 hidden sm:block" />
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">Net Earned</p>
              <p className="font-black text-primary text-lg">{program.earned}</p>
            </div>
            <Badge className={`${
              program.status === 'Active' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'
            } border-none font-black text-[10px] uppercase tracking-[0.15em] px-4 py-2 rounded-xl`}>
              {program.status}
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
