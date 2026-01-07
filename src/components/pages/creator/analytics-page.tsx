"use client"

import { 
  BarChart3, 
  TrendingUp, 
  Users, 
  Eye, 
  Clock, 
  Calendar, 
  Download,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  Globe,
  Smartphone,
  Monitor
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

const STATS = [
  { title: "Total Views", value: "842.5K", change: "+12.5%", trend: "up", icon: Eye },
  { title: "Watch Time (Hrs)", value: "12.4K", change: "+8.2%", trend: "up", icon: Clock },
  { title: "New Subscribers", value: "2,450", change: "-2.4%", trend: "down", icon: Users },
  { title: "Estimated Revenue", value: "$12,845", change: "+15.4%", trend: "up", icon: TrendingUp },
]

export function CreatorAnalyticsPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <BarChart3 className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Channel Analytics</h1>
            <p className="text-slate-500 font-medium text-sm">Comprehensive overview of your performance</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-slate-200">
            <Calendar className="h-4 w-4 mr-2" /> Last 28 Days
          </Button>
          <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20">
            <Download className="h-4 w-4 mr-2" /> Export Data
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
        {/* Main Chart Card */}
        <Card className="xl:col-span-2 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-0">
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-xl font-black text-slate-900">Views Performance</CardTitle>
                <CardDescription className="font-medium text-slate-500">Channel views over the selected period</CardDescription>
              </div>
              <Tabs defaultValue="views" className="w-auto">
                <TabsList className="bg-slate-100 p-1 rounded-xl h-10">
                  <TabsTrigger value="views" className="rounded-lg font-bold text-xs data-[state=active]:bg-white">Views</TabsTrigger>
                  <TabsTrigger value="subs" className="rounded-lg font-bold text-xs data-[state=active]:bg-white">Subscribers</TabsTrigger>
                  <TabsTrigger value="rev" className="rounded-lg font-bold text-xs data-[state=active]:bg-white">Revenue</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-80 w-full bg-slate-50 rounded-3xl flex items-center justify-center relative group cursor-pointer overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent" />
              <div className="flex flex-col items-center gap-4">
                <div className="h-16 w-16 rounded-full bg-white shadow-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <p className="text-sm font-black text-slate-900">Interactive Chart View</p>
                <p className="text-xs text-slate-400 font-medium">Click to expand detailed data</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Audience Breakdown */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Target className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Demographics</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0 space-y-8">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Age Group 18-24</span>
                  <span className="text-primary">45%</span>
                </div>
                <Progress value={45} className="h-2 bg-slate-50" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Age Group 25-34</span>
                  <span className="text-primary">32%</span>
                </div>
                <Progress value={32} className="h-2 bg-slate-50" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-black uppercase tracking-widest text-slate-400">
                  <span>Age Group 35+</span>
                  <span className="text-primary">23%</span>
                </div>
                <Progress value={23} className="h-2 bg-slate-50" />
              </div>
            </div>

            <div className="pt-8 border-t border-slate-50 grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-slate-50 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Monitor className="h-3 w-3" /> Desktop
                </div>
                <p className="text-xl font-black text-slate-900">62%</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-50 space-y-2">
                <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                  <Smartphone className="h-3 w-3" /> Mobile
                </div>
                <p className="text-xl font-black text-slate-900">38%</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-10">
        {/* Geographic Data */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                <Globe className="h-5 w-5 text-white" />
              </div>
              <CardTitle className="text-xl font-black text-slate-900">Top Locations</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <div className="space-y-6">
              {[
                { country: "United States", value: 42, flag: "🇺🇸" },
                { country: "United Kingdom", value: 18, flag: "🇬🇧" },
                { country: "Canada", value: 12, flag: "🇨🇦" },
                { country: "Germany", value: 8, flag: "🇩🇪" },
                { country: "India", value: 6, flag: "🇮🇳" },
              ].map((loc) => (
                <div key={loc.country} className="flex items-center gap-4 group cursor-pointer">
                  <span className="text-2xl">{loc.flag}</span>
                  <div className="flex-1 space-y-2">
                    <div className="flex justify-between text-sm font-black text-slate-900">
                      <span>{loc.country}</span>
                      <span className="text-primary">{loc.value}%</span>
                    </div>
                    <Progress value={loc.value} className="h-1.5 bg-slate-50" />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Content Performance Table */}
        <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
          <CardHeader className="p-8 pb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center">
                  <TrendingUp className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-slate-900">Top Content</CardTitle>
              </div>
              <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5 rounded-xl">View All</Button>
            </div>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-50">
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest">Content</th>
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Views</th>
                    <th className="p-6 text-[10px] font-black text-slate-400 uppercase tracking-widest text-right">Revenue</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { title: "Gaming Setup 2024", views: "124K", revenue: "$1,240" },
                    { title: "How I grew to 100k", views: "85K", revenue: "$850" },
                    { title: "Mechanical Keyboards", views: "62K", revenue: "$620" },
                    { title: "Desk Tour 2023", views: "45K", revenue: "$450" },
                  ].map((content, i) => (
                    <tr key={i} className="group hover:bg-slate-50/50 transition-colors border-b border-slate-50 last:border-0 cursor-pointer">
                      <td className="p-6">
                        <p className="font-black text-slate-900 group-hover:text-primary transition-colors">{content.title}</p>
                      </td>
                      <td className="p-6 text-right font-bold text-slate-600">{content.views}</td>
                      <td className="p-6 text-right font-black text-primary">{content.revenue}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
