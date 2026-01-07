"use client"

import { 
  Users, 
  MessageSquare, 
  Search, 
  Star, 
  Shield, 
  Zap, 
  TrendingUp,
  Globe,
  MoreVertical,
  Heart,
  Share2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { CommunityCard } from "@/components/member/community/community-card"

const COMMUNITIES = [
  {
    id: "c1",
    name: "Creator Insiders",
    description: "Exclusive group for top-tier creators to share strategies and collaborate.",
    members: "12.5K",
    type: "Public",
    category: "Creators",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&auto=format&fit=crop&q=60",
    isJoined: true
  },
  {
    id: "c2",
    name: "Affiliate Masters",
    description: "Learn high-ticket affiliate marketing from the best in the industry.",
    members: "8.2K",
    type: "Private",
    category: "Affiliates",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&auto=format&fit=crop&q=60",
    isJoined: false
  },
  {
    id: "c3",
    name: "Tech Enthusiasts",
    description: "Discuss the latest in AI, Gadgets, and Software development.",
    members: "25.1K",
    type: "Public",
    category: "Tech",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=60",
    isJoined: true
  },
  {
    id: "c4",
    name: "Digital Art Collective",
    description: "A space for digital artists to showcase work and get feedback.",
    members: "5.4K",
    type: "Public",
    category: "Art",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&auto=format&fit=crop&q=60",
    isJoined: false
  }
]

const TRENDING_POSTS = [
  {
    id: "p1",
    author: "Alex Rivera",
    avatar: "https://i.pravatar.cc/150?u=alex",
    community: "Creator Insiders",
    content: "Just hit 1M subscribers! Here are the 3 things I wish I knew when I started... 🧵",
    likes: "2.4K",
    comments: 142,
    time: "2h ago"
  },
  {
    id: "p2",
    author: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    community: "Affiliate Masters",
    content: "How I made $5k in my first month of affiliate marketing without a large following. AMA!",
    likes: "1.8K",
    comments: 89,
    time: "5h ago"
  }
]

export function CommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
              <Users className="h-4 w-4" />
              <span>Community Hub</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Connect & <span className="text-primary">Collaborate</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Join exclusive groups, participate in discussions, and build relationships with like-minded individuals.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Button variant="outline" className="rounded-2xl font-bold h-12 px-6 border-slate-200">
              Create Community
            </Button>
            <Button className="rounded-2xl font-bold h-12 px-8 shadow-lg shadow-primary/20">
              My Groups
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content: Communities & Feed */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Search & Categories */}
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="relative w-full md:w-96">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input 
                  placeholder="Find communities..." 
                  className="pl-12 h-12 rounded-2xl bg-white border-slate-200 shadow-sm"
                />
              </div>
              <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full md:w-auto scrollbar-hide">
                {["All", "Creators", "Affiliates", "Tech", "Design", "Business"].map((cat) => (
                  <Button 
                    key={cat} 
                    variant={cat === "All" ? "default" : "outline"}
                    className={`rounded-xl font-bold h-10 px-6 shrink-0 ${
                      cat === "All" ? "shadow-lg shadow-primary/20" : "bg-white border-slate-200"
                    }`}
                  >
                    {cat}
                  </Button>
                ))}
              </div>
            </div>

            {/* Communities Grid */}
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-black text-slate-900">Featured Communities</h2>
                <Button variant="link" className="font-bold text-primary">View All</Button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {COMMUNITIES.map((community) => (
                  <CommunityCard key={community.id} community={community} />
                ))}
              </div>
            </div>

            {/* Trending Discussions */}
            <div className="space-y-6">
              <h2 className="text-2xl font-black text-slate-900">Trending Discussions</h2>
              <div className="space-y-4">
                {TRENDING_POSTS.map((post) => (
                  <Card key={post.id} className="border-none shadow-md rounded-3xl p-6 hover:shadow-lg transition-all">
                    <div className="flex gap-4">
                      <Avatar className="h-12 w-12 rounded-2xl">
                        <AvatarImage src={post.avatar} />
                        <AvatarFallback>{post.author[0]}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1 space-y-4">
                        <div className="flex items-center justify-between">
                          <div>
                            <p className="font-black text-slate-900">{post.author}</p>
                            <p className="text-xs font-bold text-primary uppercase tracking-widest">in {post.community} • {post.time}</p>
                          </div>
                          <Button variant="ghost" size="icon" className="rounded-full">
                            <MoreVertical className="h-5 w-5 text-slate-400" />
                          </Button>
                        </div>
                        <p className="text-slate-700 leading-relaxed">
                          {post.content}
                        </p>
                        <div className="flex items-center gap-6 pt-2">
                          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                            <Heart className="h-5 w-5" />
                            <span className="text-sm font-bold">{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors">
                            <MessageSquare className="h-5 w-5" />
                            <span className="text-sm font-bold">{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 text-slate-400 hover:text-primary transition-colors ml-auto">
                            <Share2 className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
              <Button variant="outline" className="w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest border-slate-200">
                Load More Discussions
              </Button>
            </div>

          </div>

          {/* Right Sidebar: Quick Actions & Stats */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* User Community Profile */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-slate-900 text-white overflow-hidden">
              <CardContent className="p-8 space-y-8 text-center">
                <div className="relative inline-block">
                  <Avatar className="h-24 w-24 border-4 border-primary/20 shadow-2xl mx-auto">
                    <AvatarImage src="https://i.pravatar.cc/150?u=member" />
                    <AvatarFallback>ME</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 h-8 w-8 bg-primary rounded-full flex items-center justify-center border-4 border-slate-900">
                    <Zap className="h-4 w-4 text-white fill-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-black tracking-tight">Alex Member</h3>
                  <p className="text-sm font-bold text-slate-400">Master Contributor</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-primary">12</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Groups</p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-2xl">
                    <p className="text-2xl font-black text-primary">1.2K</p>
                    <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Points</p>
                  </div>
                </div>
                <Button className="w-full rounded-2xl font-black text-xs uppercase tracking-widest py-6 shadow-xl shadow-primary/20">
                  View My Contributions
                </Button>
              </CardContent>
            </Card>

            {/* Upcoming Events */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-black text-slate-900">Upcoming Events</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                {[
                  { title: "Creator Q&A", time: "Today, 6:00 PM", host: "Alex Rivera", icon: Globe },
                  { title: "Affiliate Workshop", time: "Tomorrow, 2:00 PM", host: "Sarah Chen", icon: Shield },
                  { title: "Art Feedback Loop", time: "Friday, 4:00 PM", host: "Elena Frost", icon: Star },
                ].map((event) => (
                  <div key={event.title} className="flex items-center gap-4 group cursor-pointer">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all">
                      <event.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors">{event.title}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{event.time} • with {event.host}</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 rounded-2xl font-black text-xs uppercase tracking-widest py-6 border-slate-200">
                  All Events
                </Button>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-xl relative overflow-hidden group">
              <TrendingUp className="absolute -bottom-4 -right-4 h-32 w-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-1">Stay Positive!</h4>
                <p className="text-sm font-medium text-white/80 mb-6">Help us keep the community helpful and welcoming for everyone.</p>
                <Button size="sm" variant="outline" className="rounded-xl font-black text-[10px] uppercase tracking-wider bg-white/10 border-white/20 hover:bg-white/20 text-white border-none">
                  Read Guidelines
                </Button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}
