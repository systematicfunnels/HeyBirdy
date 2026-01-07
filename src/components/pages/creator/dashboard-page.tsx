"use client"

import { 
  Users, 
  DollarSign, 
  PlayCircle, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  MoreVertical,
  ChevronRight,
  Zap,
  BarChart3,
  Video,
  Globe,
  ShoppingBag
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import Image from "next/image"

const STATS = [
  {
    title: "Total Sales",
    value: "1,284",
    change: "+12.5%",
    trend: "up" as const,
    icon: ShoppingBag,
  },
  {
    title: "Comm. Due",
    value: "$2,450.00",
    change: "+18.2%",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Active Affiliates",
    value: "156",
    change: "-2.4%",
    trend: "down" as const,
    icon: Users,
  },
  {
    title: "Avg. EPC",
    value: "$1.42",
    change: "+0.5%",
    trend: "up" as const,
    icon: Zap,
  },
]

const RECENT_CONTENT = [
  {
    id: "1",
    title: "Ultimate Gaming Setup 2024",
    status: "Published",
    views: "45.2K",
    earnings: "$1,240",
    date: "2 days ago",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "How I grew my channel to 100k",
    status: "Processing",
    views: "0",
    earnings: "$0",
    date: "Just now",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Top 5 Mechanical Keyboards",
    status: "Published",
    views: "128.9K",
    earnings: "$3,450",
    date: "1 week ago",
    thumbnail: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop"
  },
]

const TOP_AFFILIATES = [
  {
    name: "John Doe",
    sales: 124,
    revenue: "$2,480",
    epc: "$1.20",
    avatar: "https://i.pravatar.cc/150?u=john",
    performance: "Top 1%"
  },
  {
    name: "Sarah Smith",
    sales: 98,
    revenue: "$1,960",
    epc: "$1.15",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    performance: "Top 5%"
  },
  {
    name: "Mike Ross",
    sales: 85,
    revenue: "$1,700",
    epc: "$0.95",
    avatar: "https://i.pravatar.cc/150?u=mike",
    performance: "Top 10%"
  },
]

function EarningsChart() {
  return (
    <div className="h-[350px] w-full relative mt-8">
      <svg className="w-full h-full overflow-visible" viewBox="0 0 800 300" preserveAspectRatio="none">
        {/* Gradients */}
        <defs>
          <linearGradient id="gradient-primary" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="gradient-purple" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Grid lines */}
        {[0, 1, 2, 3].map((i) => (
          <line 
            key={i}
            x1="0" 
            y1={i * 100} 
            x2="800" 
            y2={i * 100} 
            stroke="#f1f5f9" 
            strokeWidth="1" 
            strokeDasharray="4 4"
          />
        ))}
        
        {/* Areas */}
        <path
          d="M 0 250 Q 100 240 200 180 T 400 150 T 600 80 T 800 40 V 300 H 0 Z"
          fill="url(#gradient-purple)"
          className="animate-in fade-in duration-1000"
        />
        <path
          d="M 0 280 Q 100 270 200 220 T 400 180 T 600 120 T 800 80 V 300 H 0 Z"
          fill="url(#gradient-primary)"
          className="animate-in fade-in duration-1000 delay-300"
        />
        
        {/* Affiliate Sales Line (Purple) */}
        <path
          d="M 0 250 Q 100 240 200 180 T 400 150 T 600 80 T 800 40"
          fill="none"
          stroke="#8b5cf6"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-in slide-in-from-left-full duration-1000"
        />
        
        {/* Direct Sales Line (Primary/Blue) */}
        <path
          d="M 0 280 Q 100 270 200 220 T 400 180 T 600 120 T 800 80"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          className="animate-in slide-in-from-left-full duration-1000 delay-300"
        />

        {/* Data Points */}
        <circle cx="200" cy="180" r="6" fill="#8b5cf6" stroke="white" strokeWidth="2" className="animate-bounce" />
        <circle cx="400" cy="150" r="6" fill="#8b5cf6" stroke="white" strokeWidth="2" />
        <circle cx="600" cy="80" r="6" fill="#8b5cf6" stroke="white" strokeWidth="2" />

        <circle cx="200" cy="220" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
        <circle cx="400" cy="180" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
        <circle cx="600" cy="120" r="6" fill="#3b82f6" stroke="white" strokeWidth="2" />
      </svg>
      
      {/* Legend & X-Axis */}
      <div className="absolute top-0 right-0 flex gap-6 bg-white/80 backdrop-blur-sm p-3 rounded-2xl border border-slate-100 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-primary shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Direct Sales</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(139,92,246,0.5)]" />
          <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Affiliate Sales</span>
        </div>
      </div>
      
      <div className="flex justify-between mt-8 border-t border-slate-50 pt-6">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
          <div key={day} className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{day}</span>
            <div className="h-1.5 w-1.5 rounded-full bg-slate-100" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function CreatorDashboardPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <PlayCircle className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Zap className="h-4 w-4 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Creator Status: Master
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Your Studio, <br/>
              <span className="text-primary italic">Refined.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Manage your content, monitor your growth, and scale your monetization all from your professional creator command center.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 text-base group" asChild>
                <Link href={ROUTES.CREATOR.CONTENT.NEW}>
                  <Plus className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> Create New Content
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
                <BarChart3 className="h-5 w-5 mr-2" /> View Analytics
              </Button>
            </div>
          </div>

          <div className="hidden xl:block shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-80 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Revenue Milestone</CardTitle>
                  <div className="h-6 w-6 rounded-lg bg-primary/20 flex items-center justify-center">
                    <DollarSign className="h-3 w-3 text-primary" />
                  </div>
                </div>
                <div className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-left">$12,845.00</div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-400 font-medium mb-4">Payout scheduled for next Friday</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest">
                    <span className="text-slate-400">Monthly Goal</span>
                    <span className="text-primary">72%</span>
                  </div>
                  <Progress value={72} className="h-2 bg-white/10" />
                </div>
                <p className="text-[10px] text-slate-500 mt-4 font-bold uppercase tracking-widest leading-relaxed">
                  Keep it up! You&apos;re on track to hit your $15k target this month.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.title} className="border-none shadow-2xl shadow-slate-200/50 hover:shadow-primary/10 transition-all duration-500 overflow-hidden group relative rounded-[2rem] bg-white">
            <div className="absolute top-0 right-0 p-6 opacity-[0.03] group-hover:scale-110 group-hover:rotate-12 transition-all duration-700">
              <stat.icon className="h-24 w-24" />
            </div>
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                  <stat.icon className="h-4 w-4 text-slate-400 group-hover:text-primary transition-colors" />
                </div>
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{stat.title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-4xl font-black tracking-tighter text-slate-900 mb-2 group-hover:text-primary transition-colors">{stat.value}</div>
              <div className="flex items-center gap-2">
                <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-bold ${
                  stat.trend === 'up' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'
                }`}>
                  {stat.trend === 'up' ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
                  {stat.change}
                </div>
                <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">vs last month</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Earnings Overview */}
      <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Earnings Overview</h2>
            <p className="text-slate-500 font-medium">Daily performance comparison: Direct vs Affiliate</p>
          </div>
          <div className="flex items-center gap-3 bg-slate-50 p-1.5 rounded-2xl">
            <Button variant="ghost" className="h-9 px-6 rounded-xl font-black text-xs uppercase tracking-widest bg-white shadow-sm">Weekly</Button>
            <Button variant="ghost" className="h-9 px-6 rounded-xl font-black text-xs uppercase tracking-widest text-slate-400">Monthly</Button>
            <Button variant="ghost" className="h-9 px-6 rounded-xl font-black text-xs uppercase tracking-widest text-slate-400">Yearly</Button>
          </div>
        </div>
        <EarningsChart />
      </Card>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Recent Content */}
        <div className="xl:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200">
                <Video className="h-6 w-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-black tracking-tight text-slate-900">Recent Content</h2>
                <p className="text-slate-500 font-medium text-sm">Your latest uploads and performances</p>
              </div>
            </div>
            <Button variant="ghost" className="font-bold text-primary hover:bg-primary/5 rounded-xl" asChild>
              <Link href={ROUTES.CREATOR.CONTENT.ALL}>View Studio <ArrowUpRight className="h-4 w-4 ml-1" /></Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {RECENT_CONTENT.map((content) => (
              <Card key={content.id} className="group hover:shadow-2xl transition-all duration-500 border-none shadow-sm rounded-[1.5rem] bg-white overflow-hidden">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="relative w-full md:w-64 h-40 overflow-hidden">
                      <Image 
                        src={content.thumbnail} 
                        alt={content.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-white/20 backdrop-blur-md text-white border-none font-bold text-[9px] uppercase tracking-widest px-2 py-0.5">
                        {content.date}
                      </Badge>
                    </div>
                    <div className="p-6 flex-1 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors mb-1">{content.title}</h3>
                          <div className="flex items-center gap-2">
                            <Badge className={`${
                              content.status === 'Published' ? 'bg-green-100 text-green-600' : 'bg-orange-100 text-orange-600'
                            } border-none font-bold text-[10px] px-2 py-0.5 rounded-lg`}>
                              {content.status}
                            </Badge>
                          </div>
                        </div>
                        <Button variant="ghost" size="icon" className="rounded-xl h-8 w-8">
                          <MoreVertical className="h-4 w-4 text-slate-400" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-8 mt-4">
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Views</p>
                          <p className="font-black text-slate-900">{content.views}</p>
                        </div>
                        <div>
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Earnings</p>
                          <p className="font-black text-primary">{content.earnings}</p>
                        </div>
                        <Button variant="link" className="ml-auto text-primary font-bold p-0 h-auto text-xs">
                          Details <ChevronRight className="h-3 w-3 ml-1" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Top Affiliates */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-2xl bg-primary flex items-center justify-center shadow-xl shadow-primary/20">
              <Users className="h-6 w-6 text-white" />
            </div>
            <div>
              <h2 className="text-2xl font-black tracking-tight text-slate-900">Top Partners</h2>
              <p className="text-slate-500 font-medium text-sm">Best performing affiliates</p>
            </div>
          </div>

          <Card className="border-none shadow-sm rounded-[2rem] bg-white overflow-hidden">
            <CardContent className="p-6">
              <div className="space-y-6">
                {TOP_AFFILIATES.map((affiliate) => (
                  <div key={affiliate.name} className="flex items-center justify-between group cursor-pointer p-4 hover:bg-slate-50 rounded-2xl transition-all">
                    <div className="flex items-center gap-4">
                      <Avatar className="h-12 w-12 border-2 border-slate-50 group-hover:border-primary/20 transition-all">
                        <AvatarImage src={affiliate.avatar} />
                        <AvatarFallback>{affiliate.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-black text-slate-900 group-hover:text-primary transition-colors">{affiliate.name}</p>
                        <p className="text-[10px] font-bold text-primary uppercase tracking-widest">{affiliate.performance}</p>
                      </div>
                    </div>
                    <div className="flex gap-8 text-right">
                      <div>
                        <p className="font-black text-slate-900">{affiliate.revenue}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{affiliate.sales} sales</p>
                      </div>
                      <div className="hidden sm:block">
                        <p className="font-black text-slate-900">{affiliate.epc}</p>
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. EPC</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-8 rounded-2xl font-black text-xs uppercase tracking-widest py-6 shadow-xl shadow-primary/10">
                Manage Network
              </Button>
            </CardContent>
          </Card>

          {/* New Content CTA */}
          <div className="bg-gradient-to-br from-primary to-primary-foreground rounded-[2rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
              <Globe className="h-32 w-32" />
            </div>
            <h4 className="text-xl font-black mb-2 relative z-10">Expand Your Reach</h4>
            <p className="text-sm font-medium text-white/80 mb-6 relative z-10 leading-relaxed">Discover more affiliate partners to promote your content worldwide.</p>
            <Button variant="secondary" className="w-full rounded-xl font-black text-xs uppercase tracking-widest py-6 relative z-10">
              Recruit Affiliates
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
