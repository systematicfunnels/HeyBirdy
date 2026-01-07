"use client"

import { 
  MessageSquare, 
  Heart, 
  Share2, 
  Search, 
  MoreVertical, 
  Star, 
  Award,
  MessageCircle,
  UserPlus,
  ShieldCheck,
  Zap
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const TOP_FANS = [
  { name: "Alex Rivers", level: "Diamond", contributions: 156, avatar: "https://i.pravatar.cc/150?u=alex", status: "online" },
  { name: "Jordan Lee", level: "Gold", contributions: 84, avatar: "https://i.pravatar.cc/150?u=jordan", status: "offline" },
  { name: "Casey Smith", level: "Gold", contributions: 72, avatar: "https://i.pravatar.cc/150?u=casey", status: "online" },
  { name: "Morgan Day", level: "Silver", contributions: 45, avatar: "https://i.pravatar.cc/150?u=morgan", status: "online" },
]

const RECENT_COMMENTS = [
  { 
    id: "1", 
    user: "Alex Rivers", 
    comment: "This setup guide is exactly what I needed! The part about cable management was 10/10.", 
    time: "2h ago", 
    video: "Ultimate Gaming Setup 2024",
    likes: 24,
    avatar: "https://i.pravatar.cc/150?u=alex"
  },
  { 
    id: "2", 
    user: "Jordan Lee", 
    comment: "Can you do a follow-up on the microphone settings you use? Sounds so crisp.", 
    time: "5h ago", 
    video: "Ultimate Gaming Setup 2024",
    likes: 12,
    avatar: "https://i.pravatar.cc/150?u=jordan"
  },
  { 
    id: "3", 
    user: "Taylor Swift", 
    comment: "Love the energy in this one! Keep it up.", 
    time: "1d ago", 
    video: "How I grew to 100k",
    likes: 45,
    avatar: "https://i.pravatar.cc/150?u=taylor"
  },
]

export function CreatorCommunityPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <MessageSquare className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Community Hub</h1>
            <p className="text-slate-500 font-medium">Engage with your audience and manage fans</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-6 rounded-xl font-bold border-slate-200">
            <ShieldCheck className="h-4 w-4 mr-2" /> Moderation Settings
          </Button>
          <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20 group">
            <UserPlus className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform" /> Invite Members
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        <div className="xl:col-span-2 space-y-10">
          {/* Stats Overview */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <Card className="border-none shadow-sm rounded-[2rem] bg-white p-6 group hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Heart className="h-5 w-5 text-primary" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Total Likes</p>
              </div>
              <p className="text-3xl font-black text-slate-900">45.2K</p>
              <p className="text-[10px] font-bold text-green-600 mt-1">+12% this week</p>
            </Card>
            <Card className="border-none shadow-sm rounded-[2rem] bg-white p-6 group hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center">
                  <MessageCircle className="h-5 w-5 text-blue-600" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Comments</p>
              </div>
              <p className="text-3xl font-black text-slate-900">12.8K</p>
              <p className="text-[10px] font-bold text-green-600 mt-1">+5% this week</p>
            </Card>
            <Card className="border-none shadow-sm rounded-[2rem] bg-white p-6 group hover:shadow-xl transition-all">
              <div className="flex items-center gap-3 mb-4">
                <div className="h-10 w-10 rounded-xl bg-purple-100 flex items-center justify-center">
                  <Share2 className="h-5 w-5 text-purple-600" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Shares</p>
              </div>
              <p className="text-3xl font-black text-slate-900">8.4K</p>
              <p className="text-[10px] font-bold text-green-600 mt-1">+18% this week</p>
            </Card>
          </div>

          {/* Comments Feed */}
          <Tabs defaultValue="all" className="space-y-8">
            <div className="flex items-center justify-between">
              <TabsList className="bg-slate-100 p-1 rounded-xl h-12">
                <TabsTrigger value="all" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm px-6 h-10">All Comments</TabsTrigger>
                <TabsTrigger value="unanswered" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm px-6 h-10">Unanswered</TabsTrigger>
                <TabsTrigger value="mentions" className="rounded-lg font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm px-6 h-10">Mentions</TabsTrigger>
              </TabsList>
              <div className="relative group w-64 hidden md:block">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input placeholder="Search comments..." className="pl-11 h-12 bg-white border-none rounded-xl font-medium shadow-sm" />
              </div>
            </div>

            <TabsContent value="all" className="space-y-6">
              {RECENT_COMMENTS.map((comment) => (
                <Card key={comment.id} className="border-none shadow-sm rounded-[2rem] bg-white overflow-hidden group hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="flex gap-6">
                      <Avatar className="h-12 w-12 border-2 border-slate-50 group-hover:border-primary/20 transition-all">
                        <AvatarImage src={comment.avatar} />
                        <AvatarFallback>{comment.user[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <p className="font-black text-slate-900">{comment.user}</p>
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{comment.time} on <span className="text-primary">{comment.video}</span></p>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm" className="h-8 rounded-lg font-bold text-slate-500 hover:text-primary hover:bg-primary/5">
                              <Heart className="h-3.5 w-3.5 mr-1.5" /> {comment.likes}
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                              <MoreVertical className="h-4 w-4 text-slate-400" />
                            </Button>
                          </div>
                        </div>
                        <p className="text-slate-600 font-medium leading-relaxed mb-6">
                          {comment.comment}
                        </p>
                        <div className="flex items-center gap-3">
                          <Input placeholder="Write a reply..." className="h-10 bg-slate-50 border-none rounded-xl text-sm" />
                          <Button size="sm" className="h-10 px-6 rounded-xl font-bold">Reply</Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button variant="ghost" className="w-full h-12 rounded-[1.5rem] font-black text-slate-400 hover:text-primary hover:bg-primary/5 transition-all">
                Load More Comments
              </Button>
            </TabsContent>
          </Tabs>
        </div>

        <div className="space-y-10">
          {/* Top Fans */}
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <div className="flex items-center gap-3 mb-2">
                <div className="h-10 w-10 rounded-xl bg-slate-900 flex items-center justify-center shadow-lg shadow-slate-200">
                  <Star className="h-5 w-5 text-white" />
                </div>
                <CardTitle className="text-xl font-black text-slate-900">Top Fans</CardTitle>
              </div>
              <CardDescription className="font-medium text-slate-500">Most active community members</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0">
              <div className="space-y-6">
                {TOP_FANS.map((fan) => (
                  <div key={fan.name} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <Avatar className="h-12 w-12 border-2 border-slate-50 group-hover:border-primary/20 transition-all">
                          <AvatarImage src={fan.avatar} />
                          <AvatarFallback>{fan.name[0]}</AvatarFallback>
                        </Avatar>
                        {fan.status === 'online' && (
                          <div className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 border-2 border-white rounded-full" />
                        )}
                      </div>
                      <div>
                        <p className="font-black text-slate-900 group-hover:text-primary transition-colors">{fan.name}</p>
                        <Badge className={`${
                          fan.level === 'Diamond' ? 'bg-blue-100 text-blue-600' : 
                          fan.level === 'Gold' ? 'bg-yellow-100 text-yellow-600' : 'bg-slate-100 text-slate-600'
                        } border-none font-bold text-[9px] uppercase tracking-widest px-2 py-0.5 rounded-lg`}>
                          {fan.level} Member
                        </Badge>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-black text-slate-900">{fan.contributions}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">points</p>
                    </div>
                  </div>
                ))}
              </div>
              <Button className="w-full mt-10 rounded-2xl font-black text-xs uppercase tracking-widest py-6 shadow-xl shadow-slate-200">
                View Leaderboard
              </Button>
            </CardContent>
          </Card>

          {/* Community Challenge */}
          <div className="bg-gradient-to-br from-primary to-primary-foreground rounded-[2.5rem] p-8 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-4 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
              <Award className="h-32 w-32" />
            </div>
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-8 w-8 rounded-lg bg-white/20 flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <p className="text-[10px] font-black uppercase tracking-widest">Weekly Challenge</p>
              </div>
              <h4 className="text-2xl font-black mb-2">100k Likes Race</h4>
              <p className="text-sm font-medium text-white/80 mb-8 leading-relaxed">
                We&apos;re almost at our weekly goal! If we hit 100k likes, I&apos;ll do a special 24h stream.
              </p>
              <div className="space-y-3 mb-8">
                <div className="flex justify-between text-[10px] font-black uppercase tracking-widest">
                  <span>Progress</span>
                  <span>84%</span>
                </div>
                <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                  <div className="h-full bg-white w-[84%] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.5)]" />
                </div>
              </div>
              <Button variant="secondary" className="w-full rounded-xl font-black text-xs uppercase tracking-widest py-6 shadow-lg shadow-black/5">
                Share to Community
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
