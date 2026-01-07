"use client"

import { 
  Eye, 
  Heart, 
  ArrowUpRight, 
  ArrowDownRight, 
  ChevronLeft, 
  Clock,
  Globe,
  DollarSign,
  Play,
  Download,
  Edit3,
  MousePointer2,
  Target
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import { useParams } from "next/navigation"

const STATS = [
  { title: "Total Views", value: "124,842", change: "+12.5%", trend: "up", icon: Eye },
  { title: "Avg. Watch Time", value: "4m 32s", change: "+5.2%", trend: "up", icon: Clock },
  { title: "Engagement Rate", value: "8.4%", change: "-1.2%", trend: "down", icon: MousePointer2 },
  { title: "Total Revenue", value: "$3,450.00", change: "+18.4%", trend: "up", icon: DollarSign },
]

const PERFORMANCE_DATA = [
  { label: "Mon", value: 45 },
  { label: "Tue", value: 52 },
  { label: "Wed", value: 48 },
  { label: "Thu", value: 61 },
  { label: "Fri", value: 55 },
  { label: "Sat", value: 67 },
  { label: "Sun", value: 72 },
]

export function CreatorContentDetailsPage() {
  const params = useParams()
  const id = params.id

  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white shadow-sm" asChild>
            <Link href={ROUTES.CREATOR.CONTENT.ALL}>
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </Link>
          </Button>
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h1 className="text-3xl font-black tracking-tight text-slate-900">Content Analytics</h1>
              <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-lg">
                Published
              </Badge>
            </div>
            <p className="text-slate-500 font-medium text-sm">ID: {id} • Ultimate Gaming Setup 2024</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-slate-200">
            <Download className="h-4 w-4 mr-2" /> Report
          </Button>
          <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20" asChild>
            <Link href={`/creator/content/edit/${id}`}>
              <Edit3 className="h-4 w-4 mr-2" /> Edit Content
            </Link>
          </Button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.title} className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white group overflow-hidden">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-5 w-5 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
              </div>
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">{stat.title}</p>
              <p className="text-3xl font-black text-slate-900 group-hover:text-primary transition-colors">{stat.value}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Performance Chart Placeholder */}
        <Card className="xl:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black text-slate-900">Views Over Time</CardTitle>
                <CardDescription className="font-medium text-slate-500">View performance for the last 7 days</CardDescription>
              </div>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold bg-white shadow-sm text-slate-900">7D</Button>
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold text-slate-500 hover:text-slate-900">30D</Button>
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold text-slate-500 hover:text-slate-900">90D</Button>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-64 flex items-end justify-between gap-4">
              {PERFORMANCE_DATA.map((data) => (
                <div key={data.label} className="flex-1 flex flex-col items-center gap-4 group">
                  <div className="w-full relative">
                    <div 
                      className="w-full bg-slate-50 rounded-2xl group-hover:bg-primary/5 transition-all cursor-pointer overflow-hidden"
                      style={{ height: '200px' }}
                    >
                      <div 
                        className="absolute bottom-0 w-full bg-primary/20 rounded-2xl group-hover:bg-primary transition-all duration-700"
                        style={{ height: `${data.value}%` }}
                      />
                    </div>
                  </div>
                  <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{data.label}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Audience Retention */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Retention</CardTitle>
            </div>
            <CardDescription className="font-medium text-slate-500">Where your viewers stay</CardDescription>
          </CardHeader>
          <CardContent className="p-8 space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-sm font-black text-slate-900">Intro (0:00 - 0:30)</p>
                <p className="text-sm font-black text-primary">92%</p>
              </div>
              <Progress value={92} className="h-2.5 bg-slate-100" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-sm font-black text-slate-900">Main Content</p>
                <p className="text-sm font-black text-primary">64%</p>
              </div>
              <Progress value={64} className="h-2.5 bg-slate-100" />
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <p className="text-sm font-black text-slate-900">Outro</p>
                <p className="text-sm font-black text-primary">48%</p>
              </div>
              <Progress value={48} className="h-2.5 bg-slate-100" />
            </div>
            
            <div className="pt-6 border-t border-slate-100">
              <div className="p-6 rounded-[1.5rem] bg-slate-50 flex items-center justify-between group cursor-pointer hover:bg-slate-100 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-xl bg-white shadow-sm flex items-center justify-center">
                    <Play className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-900">Average Duration</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">3:45 / 8:20</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Engagement Breakdown */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Heart className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Engagement</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-slate-50 text-center space-y-2 group hover:bg-primary/5 transition-colors cursor-pointer">
                <p className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">4.2K</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Likes</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 text-center space-y-2 group hover:bg-primary/5 transition-colors cursor-pointer">
                <p className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">842</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Comments</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 text-center space-y-2 group hover:bg-primary/5 transition-colors cursor-pointer">
                <p className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">1.5K</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shares</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 text-center space-y-2 group hover:bg-primary/5 transition-colors cursor-pointer">
                <p className="text-2xl font-black text-slate-900 group-hover:text-primary transition-colors">124</p>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Saves</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Traffic Sources */}
        <Card className="xl:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Traffic Sources</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="space-y-6">
              {[
                { source: "YouTube Recommendations", value: 65, color: "bg-primary" },
                { source: "External Search", value: 20, color: "bg-slate-900" },
                { source: "Direct Traffic", value: 10, color: "bg-slate-400" },
                { source: "Other", value: 5, color: "bg-slate-200" },
              ].map((traffic) => (
                <div key={traffic.source} className="flex items-center gap-6">
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-sm font-black">
                      <span>{traffic.source}</span>
                      <span className="text-primary">{traffic.value}%</span>
                    </div>
                    <Progress value={traffic.value} className={`h-2.5 ${traffic.color}`} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
