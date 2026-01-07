"use client"

import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Plus, 
  Clock, 
  Video, 
  Layout, 
  MoreVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const EVENTS = [
  { id: 1, title: "Gaming Setup Tour", time: "10:00 AM", type: "Video", day: 15 },
  { id: 2, title: "Microphone Review", time: "02:30 PM", type: "Short", day: 18 },
  { id: 3, title: "Community Stream", time: "06:00 PM", type: "Live", day: 22 },
]

export function CreatorContentCalendarPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <CalendarIcon className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Content Calendar</h1>
            <p className="text-slate-500 font-medium text-sm">Schedule and plan your content strategy</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-white p-1 rounded-xl shadow-sm border border-slate-100 mr-2">
            <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold bg-slate-900 text-white">Month</Button>
            <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold text-slate-500">Week</Button>
          </div>
          <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20" asChild>
            <Link href={ROUTES.CREATOR.CONTENT.NEW}>
              <Plus className="h-4 w-4 mr-2" /> Schedule
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-4 gap-10">
        {/* Calendar Grid */}
        <Card className="xl:col-span-3 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardContent className="p-0">
            <div className="p-8 flex items-center justify-between border-b border-slate-100">
              <h3 className="text-xl font-black text-slate-900">January 2024</h3>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl">
                  <ChevronRight className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-7 border-b border-slate-50">
              {DAYS.map(day => (
                <div key={day} className="p-4 text-center text-[10px] font-black text-slate-400 uppercase tracking-widest border-r border-slate-50 last:border-r-0">
                  {day}
                </div>
              ))}
            </div>
            <div className="grid grid-cols-7">
              {Array.from({ length: 35 }).map((_, i) => {
                const dayNum = i - 2 // Offset for start day
                const hasEvent = EVENTS.find(e => e.day === dayNum)
                return (
                  <div key={i} className={`min-h-[140px] p-4 border-r border-b border-slate-50 last:border-r-0 relative group hover:bg-slate-50/50 transition-colors ${dayNum < 1 || dayNum > 31 ? 'opacity-20' : ''}`}>
                    <span className={`text-sm font-black ${hasEvent ? 'text-primary' : 'text-slate-400'}`}>
                      {dayNum > 0 && dayNum <= 31 ? dayNum : ''}
                    </span>
                    {hasEvent && (
                      <div className="mt-2 p-3 rounded-xl bg-white shadow-xl shadow-slate-200/50 border border-slate-100 space-y-2 cursor-pointer group-hover:scale-105 transition-transform">
                        <Badge className={`${
                          hasEvent.type === 'Video' ? 'bg-blue-100 text-blue-600' : 
                          hasEvent.type === 'Live' ? 'bg-red-100 text-red-600' : 'bg-purple-100 text-purple-600'
                        } border-none font-bold text-[8px] uppercase tracking-widest px-1.5 py-0`}>
                          {hasEvent.type}
                        </Badge>
                        <p className="text-[10px] font-black text-slate-900 leading-tight line-clamp-2">{hasEvent.title}</p>
                        <div className="flex items-center gap-1 text-[8px] text-slate-400 font-bold">
                          <Clock className="h-2.5 w-2.5" /> {hasEvent.time}
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Sidebar Tasks */}
        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center justify-between">
                <h4 className="font-black text-slate-900">Upcoming</h4>
                <Badge className="bg-primary/10 text-primary border-none font-bold text-[10px] px-2 py-0.5 rounded-lg">3 Events</Badge>
              </div>
              <div className="space-y-6">
                {EVENTS.map(event => (
                  <div key={event.id} className="flex gap-4 group cursor-pointer">
                    <div className={`h-12 w-12 rounded-2xl shrink-0 flex items-center justify-center ${
                      event.type === 'Video' ? 'bg-blue-50' : 
                      event.type === 'Live' ? 'bg-red-50' : 'bg-purple-50'
                    }`}>
                      <Video className={`h-5 w-5 ${
                        event.type === 'Video' ? 'text-blue-600' : 
                        event.type === 'Live' ? 'text-red-600' : 'text-purple-600'
                      }`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-black text-slate-900 group-hover:text-primary transition-colors">{event.title}</p>
                      <p className="text-xs text-slate-500 font-medium">Jan {event.day} • {event.time}</p>
                    </div>
                    <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      <MoreVertical className="h-4 w-4 text-slate-400" />
                    </Button>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-100 text-slate-600 hover:bg-slate-50 transition-all">
                View All Events
              </Button>
            </CardContent>
          </Card>

          {/* Quick Draft */}
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
            <CardContent className="p-8 relative z-10 space-y-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center">
                <Layout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-black">Quick Plan</h4>
                <p className="text-xs text-slate-400 mt-2 font-medium leading-relaxed">Have a content idea? Save it to your calendar quickly.</p>
              </div>
              <Input placeholder="Idea title..." className="h-10 bg-white/10 border-none rounded-xl text-white placeholder:text-slate-500 text-xs" />
              <Button className="w-full h-12 rounded-xl font-bold bg-primary hover:bg-primary/90 border-none text-white shadow-xl shadow-primary/20">
                Save Draft
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
