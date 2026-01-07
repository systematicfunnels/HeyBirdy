"use client"

import { 
  MoreVertical, 
  Play, 
  Eye, 
  MessageSquare, 
  Share2, 
  ArrowUpRight,
  Trash2,
  Edit3,
  DollarSign
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Link from "next/link"
import Image from "next/image"

export interface CreatorContentItem {
  id: string
  title: string
  status: string
  views: string
  likes: string
  comments: string
  earnings: string
  date: string
  type: string
  thumbnail: string
}

interface ContentCardProps {
  item: CreatorContentItem
}

export function ContentCard({ item }: ContentCardProps) {
  return (
    <Card className="group hover:shadow-[0_40px_80px_-15px_rgba(0,0,0,0.12)] transition-all duration-700 border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] bg-white overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-72 h-64 sm:h-auto overflow-hidden">
            <Image 
              src={item.thumbnail} 
              alt={item.title}
              fill
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
            
            <div className="absolute top-6 left-6 flex flex-col gap-2">
              <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-black text-[10px] uppercase tracking-[0.2em] px-3 py-1 w-fit">
                {item.type}
              </Badge>
              <Badge className={`${
                item.status === 'Published' ? 'bg-green-500/20 text-green-400' : 'bg-orange-500/20 text-orange-400'
              } backdrop-blur-md border-none font-black text-[10px] uppercase tracking-[0.2em] px-3 py-1 w-fit`}>
                {item.status}
              </Badge>
            </div>

            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-90 group-hover:scale-100">
              <div className="h-16 w-16 rounded-full bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl border border-white/30">
                <Play className="h-6 w-6 text-white fill-white ml-1" />
              </div>
            </div>
          </div>

          <div className="p-8 flex-1 flex flex-col justify-between">
            <div>
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em] mb-2 block">{item.date}</span>
                  <h3 className="font-black text-2xl text-slate-900 group-hover:text-primary transition-colors line-clamp-2 leading-tight">
                    {item.title}
                  </h3>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-2xl hover:bg-slate-50">
                      <MoreVertical className="h-5 w-5 text-slate-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-2xl border-slate-100 p-2 shadow-2xl">
                    <DropdownMenuItem className="rounded-xl font-bold text-slate-600 focus:text-primary focus:bg-primary/5 cursor-pointer h-11">
                      <Edit3 className="h-4 w-4 mr-2" /> Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl font-bold text-slate-600 focus:text-primary focus:bg-primary/5 cursor-pointer h-11">
                      <Share2 className="h-4 w-4 mr-2" /> Share Link
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl font-bold text-red-600 focus:text-red-600 focus:bg-red-50 cursor-pointer h-11">
                      <Trash2 className="h-4 w-4 mr-2" /> Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </div>

            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-6 p-6 bg-slate-50/50 rounded-[2rem] border border-slate-100">
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] flex items-center">
                    <Eye className="h-3 w-3 mr-1.5 text-primary" /> Views
                  </p>
                  <p className="font-black text-slate-900 text-lg">{item.views}</p>
                </div>
                <div className="space-y-1 border-x border-slate-200 px-6">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] flex items-center">
                    <MessageSquare className="h-3 w-3 mr-1.5 text-primary" /> Chat
                  </p>
                  <p className="font-black text-slate-900 text-lg">{item.comments}</p>
                </div>
                <div className="space-y-1">
                  <p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.15em] flex items-center">
                    <DollarSign className="h-3 w-3 mr-1.5 text-green-500" /> Earned
                  </p>
                  <p className="font-black text-primary text-lg">{item.earnings}</p>
                </div>
              </div>
              
              <Button variant="ghost" className="w-full h-14 rounded-2xl font-black text-sm text-slate-600 hover:text-primary hover:bg-primary/5 transition-all group border-2 border-transparent hover:border-primary/10" asChild>
                <Link href={`/creator/content/${item.id}`}>
                  Analyze Performance <ArrowUpRight className="h-4 w-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
