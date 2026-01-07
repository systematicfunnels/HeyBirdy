"use client"

import { 
  Globe, 
  Copy, 
  Share2, 
  MousePointer2, 
  CheckCircle2, 
  TrendingUp, 
  Calendar, 
  MoreVertical, 
  Plus, 
  TrendingDown 
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"

export interface ReferralLink {
  id: string
  name: string
  original: string
  short: string
  clicks: number
  conversions: number
  revenue: string
  program: string
  created: string
  status: string
  trend: string
}

interface ReferralLinkCardProps {
  link: ReferralLink
}

export function ReferralLinkCard({ link }: ReferralLinkCardProps) {
  return (
    <Card className="group hover:shadow-2xl hover:border-primary/20 transition-all duration-500 overflow-hidden border-slate-200/60 rounded-[2.5rem] bg-white">
      <CardContent className="p-0">
        <div className="flex flex-col lg:flex-row lg:items-center gap-10 p-8 md:p-10">
          {/* Link Info */}
          <div className="flex-1 space-y-8">
            <div className="flex items-start justify-between lg:justify-start lg:gap-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-black text-2xl md:text-3xl text-slate-900 group-hover:text-primary transition-colors tracking-tight">{link.name}</h3>
                  {link.status === 'Active' && (
                    <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                  )}
                </div>
                <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-none font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-lg">
                  {link.program}
                </Badge>
              </div>
            </div>
            
            <div className="flex flex-col xl:flex-row xl:items-center gap-6">
              <div className="flex items-center gap-4 text-base text-primary font-black bg-primary/5 px-6 py-4 rounded-2xl border border-primary/10 w-fit group/link hover:bg-primary/10 transition-all cursor-pointer shadow-sm hover:shadow-md">
                <Globe className="h-5 w-5" />
                {link.short}
                <div className="h-6 w-px bg-primary/20 mx-2 hidden sm:block" />
                <div className="flex items-center gap-1">
                  <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-primary/20 text-primary p-0 rounded-xl">
                    <Copy className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="h-10 w-10 hover:bg-primary/20 text-primary p-0 rounded-xl">
                    <Share2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Destination URL</p>
                <p className="text-sm text-slate-500 truncate max-w-[300px] font-medium italic">
                  {link.original}
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 lg:border-l lg:border-slate-100 lg:pl-12">
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-blue-50 flex items-center justify-center">
                  <MousePointer2 className="h-4 w-4 text-blue-600" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Clicks</p>
              </div>
              <div className="flex items-end gap-2">
                <p className="text-4xl font-black text-slate-900 leading-none">{link.clicks.toLocaleString()}</p>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${link.trend.startsWith('+') ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                  {link.trend}
                </span>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-green-50 flex items-center justify-center">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Conv.</p>
              </div>
              <p className="text-4xl font-black text-slate-900 leading-none">{link.conversions}</p>
            </div>

            <div className="space-y-3 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-purple-50 flex items-center justify-center">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Revenue</p>
              </div>
              <p className="text-3xl font-black text-slate-900 leading-none">{link.revenue}</p>
            </div>

            <div className="space-y-3 hidden sm:block">
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Calendar className="h-4 w-4 text-orange-600" />
                </div>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Created</p>
              </div>
              <p className="text-sm font-black text-slate-500 leading-none pt-1">{link.created}</p>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-4 lg:pl-10 lg:border-l lg:border-slate-100">
            <Button variant="outline" size="lg" className="h-16 px-8 rounded-2xl font-black border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
               Analytics
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-16 w-16 rounded-2xl hover:bg-slate-100 border border-transparent hover:border-slate-200 transition-all">
                  <MoreVertical className="h-6 w-6 text-slate-400" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-64 rounded-[2rem] p-4 border-slate-100 shadow-2xl">
                <DropdownMenuItem className="rounded-xl p-4 font-bold text-sm cursor-pointer mb-2">
                  <Plus className="h-4 w-4 mr-3 text-slate-400" /> Edit Link Details
                </DropdownMenuItem>
                <DropdownMenuItem className="rounded-xl p-4 font-bold text-sm cursor-pointer mb-2">
                  <Copy className="h-4 w-4 mr-3 text-slate-400" /> Duplicate Link
                </DropdownMenuItem>
                <div className="h-px bg-slate-100 my-3" />
                <DropdownMenuItem className="rounded-xl p-4 font-bold text-sm text-red-500 hover:text-red-600 hover:bg-red-50 cursor-pointer">
                  <TrendingDown className="h-4 w-4 mr-3" /> Archive Link
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
