"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Star } from "lucide-react"
import Image from "next/image"

export interface RecommendedProgram {
  name: string
  creator: string
  commission: string
  rating: string
  category: string
  image: string
}

interface RecommendedProgramCardProps {
  program: RecommendedProgram
}

export function RecommendedProgramCard({ program }: RecommendedProgramCardProps) {
  return (
    <Card className="group border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] bg-white hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-700 rounded-[2.5rem] overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-56 overflow-hidden">
          <Image 
            src={program.image} 
            alt={program.name}
            fill
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80" />
          <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
            <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-black text-[10px] uppercase tracking-[0.2em] px-4 py-1.5">
              {program.category}
            </Badge>
            <div className="flex items-center gap-1.5 bg-white/20 backdrop-blur-md text-white rounded-full px-3 py-1 text-[10px] font-black tracking-widest">
              <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
              {program.rating}
            </div>
          </div>
        </div>
        <div className="p-10">
          <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-primary transition-colors line-clamp-1 leading-tight">
            {program.name}
          </h3>
          <div className="flex items-center gap-2 mb-8">
            <span className="text-sm text-slate-400 font-medium">Creator:</span>
            <span className="text-sm text-slate-900 font-bold">{program.creator}</span>
          </div>
          
          <div className="flex items-center justify-between pt-8 border-t border-slate-100">
            <div className="space-y-1">
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em]">Commission Rate</p>
              <p className="text-2xl font-black text-primary leading-none">{program.commission}</p>
            </div>
            <Button className="h-12 rounded-2xl font-black text-[11px] uppercase tracking-[0.15em] px-8 shadow-lg shadow-primary/20 hover:scale-105 transition-transform">
              Join Program
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
