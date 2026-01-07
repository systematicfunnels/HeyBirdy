"use client"

import { useState, useEffect } from "react"
import { 
  BarChart3,
  TrendingUp, 
  MousePointer2, 
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Smartphone,
  Laptop,
  ArrowRight,
  Activity,
  Zap
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const PERFORMANCE_DATA = [
  { label: "Mon", clicks: 450, conversions: 12 },
  { label: "Tue", clicks: 520, conversions: 15 },
  { label: "Wed", clicks: 380, conversions: 8 },
  { label: "Thu", clicks: 610, conversions: 22 },
  { label: "Fri", clicks: 580, conversions: 18 },
  { label: "Sat", clicks: 420, conversions: 10 },
  { label: "Sun", clicks: 350, conversions: 7 },
]

const TOP_PROGRAMS = [
  { name: "Elite Gaming Gear", clicks: 2450, conversions: 85, revenue: "$1,240", rate: "3.4%" },
  { name: "Full-Stack Bootcamp", clicks: 1200, conversions: 42, revenue: "$850", rate: "3.5%" },
  { name: "Gadget Reviews", clicks: 800, conversions: 12, revenue: "$420", rate: "1.5%" },
]

const SOURCES = [
  { name: "Twitter/X", value: 45, color: "bg-blue-500" },
  { name: "YouTube", value: 30, color: "bg-red-500" },
  { name: "Personal Blog", value: 15, color: "bg-green-500" },
  { name: "Direct/Other", value: 10, color: "bg-gray-500" },
]

const DEVICES = [
  { name: "Mobile", value: 65, icon: Smartphone },
  { name: "Desktop", value: 28, icon: Laptop },
  { name: "Tablet", value: 7, icon: Smartphone },
]

const RECENT_ACTIVITY = [
  { id: 1, type: "click", program: "Elite Gaming Gear", source: "Twitter/X", time: "Just now", amount: null },
  { id: 2, type: "conversion", program: "Full-Stack Bootcamp", source: "YouTube", time: "2 mins ago", amount: "$45.00" },
  { id: 3, type: "click", program: "Gadget Reviews", source: "Personal Blog", time: "5 mins ago", amount: null },
  { id: 4, type: "click", program: "Elite Gaming Gear", source: "Direct", time: "8 mins ago", amount: null },
]

export function AffiliateAnalyticsPage() {
  const [performanceData, setPerformanceData] = useState(PERFORMANCE_DATA)
  const [isLive, setIsLive] = useState(true)
  const [recentActivity, setRecentActivity] = useState(RECENT_ACTIVITY)
  const [stats, setStats] = useState([
    { label: "Total Clicks", value: 12402, trend: "+14.2%", icon: MousePointer2, color: "text-blue-500", bg: "bg-blue-50" },
    { label: "Conversions", value: 452, trend: "+8.4%", icon: ArrowUpRight, color: "text-green-500", bg: "bg-green-50" },
    { label: "Avg. Click Value", value: 2.45, trend: "+2.1%", icon: TrendingUp, color: "text-purple-500", bg: "bg-purple-50" },
    { label: "Return Rate", value: 0.8, trend: "-0.2%", icon: ArrowDownRight, color: "text-orange-500", bg: "bg-orange-50" }
  ])

  // Simulate real-time data influx
  useEffect(() => {
    if (!isLive) return

    const interval = setInterval(() => {
      // Update main stats
      setStats(prev => prev.map(stat => {
        if (stat.label === "Total Clicks") {
          return { ...stat, value: stat.value + Math.floor(Math.random() * 3) }
        }
        if (stat.label === "Conversions" && Math.random() > 0.8) {
          return { ...stat, value: stat.value + 1 }
        }
        return stat
      }))

      // Update chart data (last day)
      setPerformanceData(prev => {
        const newData = [...prev]
        const lastIndex = newData.length - 1
        newData[lastIndex] = {
          ...newData[lastIndex],
          clicks: newData[lastIndex].clicks + Math.floor(Math.random() * 2),
          conversions: newData[lastIndex].conversions + (Math.random() > 0.95 ? 1 : 0)
        }
        return newData
      })

      // Update recent activity
      if (Math.random() > 0.7) {
        const type = Math.random() > 0.8 ? "conversion" : "click"
        const programs = ["Elite Gaming Gear", "Full-Stack Bootcamp", "Gadget Reviews"]
        const sources = ["Twitter/X", "YouTube", "Personal Blog", "Direct"]
        
        const newActivity = {
          id: Date.now(),
          type,
          program: programs[Math.floor(Math.random() * programs.length)],
          source: sources[Math.floor(Math.random() * sources.length)],
          time: "Just now",
          amount: type === "conversion" ? `$${(Math.random() * 100 + 20).toFixed(2)}` : null
        }

        setRecentActivity(prev => [newActivity, ...prev.slice(0, 5)])
      }
    }, 3000)

    return () => clearInterval(interval)
  }, [isLive])

  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <BarChart3 className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <TrendingUp className="h-4 w-4 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Performance Intelligence
              </Badge>
              {isLive && (
                <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full px-3 py-1">
                  <div className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-widest">Live</span>
                </div>
              )}
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Data That Drives <br/>
              <span className="text-primary italic">Decisions.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Real-time insights into your traffic, conversions, and audience behavior. Scale what works with precision.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-2xl p-1.5 backdrop-blur-md">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${isLive ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'} rounded-xl px-6 font-bold text-xs h-10 transition-all`}
                  onClick={() => setIsLive(true)}
                >
                  Real-time
                </Button>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className={`${!isLive ? 'bg-primary text-white' : 'text-slate-400 hover:text-white'} rounded-xl px-6 font-bold text-xs h-10 transition-all`}
                  onClick={() => setIsLive(false)}
                >
                  Historical
                </Button>
              </div>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
                <Download className="h-5 w-5 mr-2" /> Export Report
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Global Reach</CardTitle>
                <div className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-left">84k</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold bg-green-400/10 w-fit px-2 py-1 rounded-full">
                  <ArrowUpRight className="h-3 w-3" />
                  <span>+24% REACH</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Conversion Power</CardTitle>
                <div className="text-4xl font-black text-blue-400 group-hover:scale-105 transition-transform origin-left">12.8%</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-bold bg-blue-400/10 w-fit px-2 py-1 rounded-full">
                  <ArrowUpRight className="h-3 w-3" />
                  <span>TOP 1% CLUB</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-xl shadow-slate-200/50 rounded-[2rem] overflow-hidden group hover:-translate-y-1 transition-all duration-300">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-6">
                <div className={`h-14 w-14 rounded-2xl ${stat.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <stat.icon className={`h-7 w-7 ${stat.color}`} />
                </div>
                <Badge variant="secondary" className="bg-slate-100 text-slate-500 border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1">
                  {stat.trend}
                </Badge>
              </div>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1">{stat.label}</p>
              <h3 className="text-3xl font-black text-slate-900 tracking-tight">
                {typeof stat.value === 'number' && stat.label.includes('$') ? `$${stat.value.toFixed(2)}` : 
                 stat.label.includes('%') ? `${stat.value}%` : 
                 stat.value.toLocaleString()}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Performance Chart Placeholder */}
        <Card className="lg:col-span-2 border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
          <CardHeader className="p-10 pb-0 flex flex-row items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Conversion Trends</CardTitle>
                {isLive && (
                  <div className="flex items-center gap-1.5 bg-emerald-50 text-emerald-600 px-2 py-0.5 rounded-full text-[10px] font-black uppercase tracking-widest border border-emerald-100">
                    <Activity className="h-3 w-3 animate-pulse" />
                    Live
                  </div>
                )}
              </div>
              <CardDescription className="text-base font-medium text-slate-500">Daily performance over the last 30 days.</CardDescription>
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl">
              <Button variant="ghost" size="sm" className="bg-white shadow-md rounded-xl px-4 font-bold text-xs h-9">Clicks</Button>
              <Button variant="ghost" size="sm" className="text-slate-500 rounded-xl px-4 font-bold text-xs h-9 hover:bg-white/50">Conversions</Button>
            </div>
          </CardHeader>
          <CardContent className="p-10">
            <div className="h-[400px] w-full flex items-end justify-between gap-4">
              {performanceData.map((data, i) => (
                <div key={i} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className="w-full flex flex-col items-center justify-end gap-1 h-full">
                    <div 
                      className="w-full bg-slate-100 rounded-t-xl group-hover:bg-primary/10 transition-all duration-500"
                      style={{ height: `${(data.clicks / 700) * 100}%` }}
                    />
                    <div 
                      className="w-full bg-primary rounded-t-xl shadow-lg shadow-primary/20 transition-all duration-500 group-hover:scale-x-110"
                      style={{ height: `${(data.conversions / 25) * 100}%` }}
                    />
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{data.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <div className="space-y-8">
          {/* Traffic Sources */}
          <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Traffic DNA</CardTitle>
              <CardDescription className="text-base font-medium text-slate-500">Where your audience comes from.</CardDescription>
            </CardHeader>
            <CardContent className="p-10 space-y-8">
              <div className="space-y-6">
                {SOURCES.map((source, i) => (
                  <div key={i} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-black text-slate-700">{source.name}</span>
                      <span className="text-sm font-black text-primary">{source.value}%</span>
                    </div>
                    <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                      <div 
                        className={`h-full ${source.color} rounded-full transition-all duration-1000`} 
                        style={{ width: `${source.value}%` }} 
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-8 border-t border-slate-100">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Device Breakdown</h4>
                <div className="grid grid-cols-3 gap-4">
                  {DEVICES.map((device, i) => (
                    <div key={i} className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-50 group hover:bg-primary/5 transition-colors">
                      <device.icon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors" />
                      <span className="text-xs font-black text-slate-900">{device.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Activity Feed */}
          <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-slate-900 text-white">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl font-black tracking-tight">Live Pulse</CardTitle>
                <Badge className="bg-primary/20 text-primary border-none animate-pulse">Live</Badge>
              </div>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-6">
                {recentActivity.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-4 group animate-in slide-in-from-right-4 duration-500">
                    <div className={`h-10 w-10 rounded-xl flex items-center justify-center shrink-0 ${
                      activity.type === 'conversion' ? 'bg-emerald-500/20 text-emerald-500' : 'bg-blue-500/20 text-blue-500'
                    }`}>
                      {activity.type === 'conversion' ? <Zap className="h-5 w-5" /> : <MousePointer2 className="h-5 w-5" />}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-start">
                        <p className="text-sm font-black truncate">{activity.program}</p>
                        <span className="text-[10px] font-bold text-slate-500 uppercase whitespace-nowrap ml-2">{activity.time}</span>
                      </div>
                      <p className="text-xs text-slate-400 font-medium">
                        {activity.type === 'conversion' ? `Sale via ${activity.source}` : `Click from ${activity.source}`}
                      </p>
                      {activity.amount && (
                        <p className="text-xs font-black text-emerald-400 mt-1">{activity.amount} Commission</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Top Programs Table */}
      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] overflow-hidden bg-white">
        <CardHeader className="p-10 pb-6 flex flex-row items-center justify-between">
          <div>
            <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Top Performing Programs</CardTitle>
            <CardDescription className="text-base font-medium text-slate-500">Programs contributing most to your revenue.</CardDescription>
          </div>
          <Button variant="ghost" className="font-black text-primary hover:bg-primary/5 gap-2">
            View Detailed Report <ArrowRight className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 border-y border-slate-100">
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Program Name</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Clicks</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Conversions</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Revenue</th>
                  <th className="px-10 py-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Conv. Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {TOP_PROGRAMS.map((program, i) => (
                  <tr key={i} className="group hover:bg-slate-50/50 transition-colors">
                    <td className="px-10 py-6 font-black text-slate-900">{program.name}</td>
                    <td className="px-10 py-6 text-slate-600 font-medium">{program.clicks.toLocaleString()}</td>
                    <td className="px-10 py-6 text-slate-600 font-medium">{program.conversions}</td>
                    <td className="px-10 py-6 font-black text-primary">{program.revenue}</td>
                    <td className="px-10 py-6">
                      <div className="flex items-center gap-3">
                        <span className="font-black text-slate-900">{program.rate}</span>
                        <div className="h-1.5 w-16 bg-slate-100 rounded-full overflow-hidden hidden sm:block">
                          <div className="h-full bg-primary rounded-full" style={{ width: program.rate }} />
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
