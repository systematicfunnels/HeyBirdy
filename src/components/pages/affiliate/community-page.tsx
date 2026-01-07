"use client"

import { 
  Users, 
  MessageSquare, 
  Search, 
  Star, 
  Shield, 
  Zap, 
  TrendingUp,
  Heart,
  Share2,
  Trophy,
  Rocket
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CHALLENGES = [
  {
    id: "ch1",
    title: "New Year Sales Sprint",
    reward: "5,000 Pts + Bonus Commission",
    progress: 75,
    timeLeft: "4 days",
    icon: Rocket,
    color: "bg-orange-500"
  },
  {
    id: "ch2",
    title: "Top Referrer Badge",
    reward: "Exclusive Profile Badge",
    progress: 40,
    timeLeft: "12 days",
    icon: Trophy,
    color: "bg-yellow-500"
  }
]

const STRATEGY_THREADS = [
  {
    id: "t1",
    author: "Alex Rivers",
    avatar: "https://i.pravatar.cc/150?u=alex",
    title: "How I boosted my conversion rate by 25% using custom landing pages",
    tags: ["Strategy", "Landing Pages"],
    likes: 124,
    replies: 42,
    time: "3h ago"
  },
  {
    id: "t2",
    author: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    title: "TikTok vs Instagram: Which one is better for high-ticket affiliate programs?",
    tags: ["Social Media", "Comparison"],
    likes: 89,
    replies: 56,
    time: "5h ago"
  }
]

export function AffiliateCommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
              <Users className="h-4 w-4" />
              <span>Partner Community</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Strategy & <span className="text-primary">Growth Hub</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Connect with fellow partners, share high-converting strategies, and participate in global affiliate challenges.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl font-bold h-12 px-6 border-slate-200">
              Post Strategy
            </Button>
            <Button className="rounded-2xl font-bold h-12 px-8 shadow-lg shadow-primary/20">
              Join Challenge
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content: Strategy Feed & Active Challenges */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Active Challenges */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <Zap className="h-6 w-6 text-orange-500 fill-orange-500" />
                  Active Challenges
                </h2>
                <Button variant="ghost" className="font-bold text-primary">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {CHALLENGES.map((ch) => (
                  <Card key={ch.id} className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden group hover:-translate-y-1 transition-all duration-300">
                    <CardContent className="p-8 space-y-6">
                      <div className="flex items-center justify-between">
                        <div className={`h-14 w-14 rounded-2xl ${ch.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                          <ch.icon className="h-7 w-7 text-white" />
                        </div>
                        <Badge variant="secondary" className="bg-slate-100 text-slate-500 font-black text-[10px] uppercase tracking-widest border-none">
                          {ch.timeLeft} left
                        </Badge>
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-xl font-black text-slate-900">{ch.title}</h3>
                        <p className="text-xs font-bold text-emerald-600 uppercase tracking-widest flex items-center gap-1">
                          <Star className="h-3 w-3 fill-emerald-600" />
                          Reward: {ch.reward}
                        </p>
                      </div>
                      <div className="space-y-3">
                        <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                          <span>Progress</span>
                          <span>{ch.progress}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div 
                            className={`h-full ${ch.color} transition-all duration-1000`} 
                            style={{ width: `${ch.progress}%` }} 
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Strategy Threads */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900 flex items-center gap-2">
                  <MessageSquare className="h-6 w-6 text-primary" />
                  Strategy Discussions
                </h2>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                    <Input placeholder="Search strategies..." className="pl-10 h-10 w-64 rounded-xl bg-white border-slate-200" />
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                {STRATEGY_THREADS.map((thread) => (
                  <Card key={thread.id} className="border-none shadow-sm hover:shadow-xl rounded-[2rem] bg-white transition-all duration-300 cursor-pointer group">
                    <CardContent className="p-8">
                      <div className="flex gap-6">
                        <Avatar className="h-12 w-12 rounded-xl">
                          <AvatarImage src={thread.avatar} />
                          <AvatarFallback>{thread.author[0]}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1 space-y-4">
                          <div className="space-y-1">
                            <div className="flex items-center gap-2">
                              <span className="font-black text-slate-900 group-hover:text-primary transition-colors">{thread.author}</span>
                              <span className="text-slate-400 font-medium text-xs">• {thread.time}</span>
                            </div>
                            <h3 className="text-lg font-black text-slate-900 leading-tight">{thread.title}</h3>
                          </div>
                          <div className="flex items-center justify-between">
                            <div className="flex gap-2">
                              {thread.tags.map(tag => (
                                <Badge key={tag} variant="secondary" className="bg-slate-50 text-slate-500 font-bold text-[10px] border-none px-3">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                            <div className="flex items-center gap-6">
                              <button className="flex items-center gap-1.5 text-slate-400 hover:text-red-500 transition-colors">
                                <Heart className="h-4 w-4" />
                                <span className="text-xs font-black">{thread.likes}</span>
                              </button>
                              <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors">
                                <MessageSquare className="h-4 w-4" />
                                <span className="text-xs font-black">{thread.replies}</span>
                              </button>
                              <button className="text-slate-400 hover:text-slate-600 transition-colors">
                                <Share2 className="h-4 w-4" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest border-slate-200">
                Load More Discussions
              </Button>
            </div>

          </div>

          {/* Right Sidebar: Leaderboard & Stats */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Top Partners Leaderboard */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-slate-900 text-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black">Top Partners</CardTitle>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                {[
                  { name: "Alex Rivers", sales: "1,240", avatar: "https://i.pravatar.cc/150?u=1", rank: 1, tier: "Elite" },
                  { name: "Sarah Chen", sales: "980", avatar: "https://i.pravatar.cc/150?u=2", rank: 2, tier: "Elite" },
                  { name: "Mike Ross", sales: "850", avatar: "https://i.pravatar.cc/150?u=3", rank: 3, tier: "Pro" },
                  { name: "Emma Wilson", sales: "720", avatar: "https://i.pravatar.cc/150?u=4", rank: 4, tier: "Pro" },
                ].map((partner) => (
                  <div key={partner.name} className="flex items-center gap-4 group cursor-pointer">
                    <span className={`text-lg font-black w-6 ${partner.rank === 1 ? 'text-yellow-400' : 'text-slate-500'}`}>{partner.rank}</span>
                    <Avatar className="h-10 w-10 rounded-xl">
                      <AvatarImage src={partner.avatar} />
                      <AvatarFallback>{partner.name[0]}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-black text-sm group-hover:text-primary transition-colors">{partner.name}</p>
                      <div className="flex items-center gap-2">
                        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{partner.sales} Sales</p>
                        <Badge className="h-4 px-1.5 text-[8px] font-black bg-primary/20 text-primary border-none">
                          {partner.tier}
                        </Badge>
                      </div>
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4 rounded-2xl font-black text-xs uppercase tracking-widest py-6 shadow-xl shadow-primary/30">
                  Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Your Stats Summary */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardContent className="p-8 space-y-8 text-center">
                <div className="relative inline-block">
                  <Avatar className="h-24 w-24 border-4 border-primary/10 shadow-2xl mx-auto">
                    <AvatarImage src="https://i.pravatar.cc/150?u=current" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center border-4 border-white">
                    <Shield className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight text-slate-900">Partner Hub</h3>
                  <p className="text-sm font-bold text-slate-400">Pro Affiliate</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-primary">156</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Points</p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-emerald-500">12</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Sales</p>
                  </div>
                </div>
                <Button variant="outline" className="w-full rounded-2xl font-black text-xs uppercase tracking-widest py-6 border-slate-200">
                  My Community Profile
                </Button>
              </CardContent>
            </Card>

            {/* Quick Tips */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-xl relative overflow-hidden group">
              <Rocket className="absolute -bottom-4 -right-4 h-32 w-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10 space-y-4">
                <h4 className="text-xl font-black leading-tight">Pro Tip: Use Tracking IDs</h4>
                <p className="text-sm font-medium text-white/80">Identify which social channel is performing best by using custom tracking IDs for each link.</p>
                <Button className="w-full bg-white text-indigo-600 hover:bg-white/90 font-black rounded-xl">
                  Learn More
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
