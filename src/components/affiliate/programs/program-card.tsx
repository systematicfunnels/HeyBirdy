"use client"

import { 
  Star, 
  ArrowUpRight, 
  DollarSign, 
  Calendar,
  MoreVertical,
  ChevronRight,
  Zap,
  ArrowRight,
  ShieldCheck,
} from "lucide-react"
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

export interface Program {
  id: string
  name: string
  creator: string
  avatar: string
  category: string
  commission: string
  status: string
  joined: string
  sales: number
  earnings: string
  performance: string
  rating: number
}

interface ProgramCardProps {
  program: Program
}

export function ProgramCard({ program }: ProgramCardProps) {
  return (
    <Card className="group hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden border-slate-200/60 rounded-[2.5rem] bg-white h-full flex flex-col">
      <CardHeader className="p-8 pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16 border-2 border-slate-100 shadow-sm group-hover:scale-105 transition-transform">
              <AvatarImage src={program.avatar} />
              <AvatarFallback>{program.creator[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight group-hover:text-primary transition-colors line-clamp-1">{program.name}</h3>
              <p className="text-slate-500 font-bold text-sm">by {program.creator}</p>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100">
                <MoreVertical className="h-5 w-5 text-slate-400" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56 rounded-2xl p-2 border-slate-200 shadow-2xl">
              <DropdownMenuItem className="rounded-xl p-3 font-bold text-sm cursor-pointer mb-1">
                <ArrowUpRight className="h-4 w-4 mr-3 text-slate-400" /> Program Page
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl p-3 font-bold text-sm cursor-pointer mb-1">
                <Zap className="h-4 w-4 mr-3 text-slate-400" /> Get Marketing Assets
              </DropdownMenuItem>
              <div className="h-px bg-slate-100 my-2" />
              <DropdownMenuItem className="rounded-xl p-3 font-bold text-sm text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                Leave Program
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-wrap gap-2 mt-6">
          <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1">
            {program.category}
          </Badge>
          <Badge className={`${program.status === 'Active' ? 'bg-green-500/10 text-green-600' : 'bg-orange-500/10 text-orange-600'} border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1`}>
            {program.status}
          </Badge>
          <div className="flex items-center gap-1 ml-auto text-amber-500">
            <Star className="h-4 w-4 fill-amber-500" />
            <span className="text-sm font-black">{program.rating}</span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="p-8 pt-4 flex-grow">
        <div className="grid grid-cols-2 gap-6 p-6 bg-slate-50/50 rounded-3xl border border-slate-100">
          <div className="space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Commission</p>
            <p className="text-2xl font-black text-primary">{program.commission}</p>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Sales</p>
            <p className="text-2xl font-black text-slate-900">{program.sales}</p>
          </div>
          <div className="space-y-1">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Performance</p>
            <div className="flex items-center gap-1.5 text-blue-600 font-black text-sm">
              <ShieldCheck className="h-4 w-4" /> {program.performance}
            </div>
          </div>
          <div className="space-y-1 text-right">
            <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Total Earned</p>
            <p className="text-2xl font-black text-slate-900">{program.earnings}</p>
          </div>
        </div>
        
        <div className="mt-8 flex items-center justify-between text-xs font-bold text-slate-400 uppercase tracking-widest">
          <span className="flex items-center gap-2">
            <Calendar className="h-4 w-4" /> Joined {program.joined}
          </span>
          <Link href={ROUTES.AFFILIATE.ANALYTICS} className="flex items-center gap-1.5 text-primary hover:underline">
            View Analytics <ChevronRight className="h-4 w-4" />
          </Link>
        </div>
      </CardContent>
      <CardFooter className="p-8 pt-0 flex gap-4 mt-auto">
        <Button className="flex-1 h-14 rounded-2xl font-black text-base shadow-xl shadow-primary/10 group" asChild>
          <Link href={ROUTES.AFFILIATE.TOOLS.LINKS}>
            Manage Links <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
        <Button variant="outline" className="h-14 px-8 rounded-2xl font-black border-slate-200 hover:bg-slate-50" asChild>
          <Link href={ROUTES.AFFILIATE.TOOLS.ASSETS}>
            Assets
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
