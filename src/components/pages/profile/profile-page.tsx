"use client"

import Image from "next/image"
import { 
  User, 
  MapPin, 
  Calendar, 
  Link as LinkIcon, 
  Twitter, 
  Instagram, 
  Youtube,
  Zap,
  Award,
  MessageSquare,
  Users,
  PlayCircle,
  Share2,
  BookOpen,
  ArrowUpRight,
  CheckCircle2
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"

const USER_STATS = [
  { label: "Followers", value: "1.2K", icon: Users },
  { label: "Following", value: "450", icon: User },
  { label: "Points", value: "8,450", icon: Zap },
  { label: "Badges", value: "12", icon: Award },
]

const BADGES = [
  { id: "b1", name: "Early Bird", image: "https://images.unsplash.com/photo-1579546678183-a9a1a494dea9?w=100&auto=format&fit=crop&q=60", color: "bg-blue-100 text-blue-600" },
  { id: "b2", name: "Top Learner", image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=100&auto=format&fit=crop&q=60", color: "bg-yellow-100 text-yellow-600" },
  { id: "b3", name: "Community Star", image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=100&auto=format&fit=crop&q=60", color: "bg-purple-100 text-purple-600" },
  { id: "b4", name: "Alpha Tester", image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=100&auto=format&fit=crop&q=60", color: "bg-green-100 text-green-600" },
]

const RECENT_ACTIVITY = [
  { id: "a1", type: "course", title: "Completed 'Affiliate Marketing 101'", time: "2 days ago", icon: BookOpen },
  { id: "a2", type: "post", title: "Shared a new post in Creator Insiders", time: "5 hours ago", icon: MessageSquare },
  { id: "a3", type: "badge", title: "Earned 'High Roller' badge", time: "1 week ago", icon: Award },
  { id: "a4", type: "comment", title: "Commented on Alex Rivera's video", time: "3 hours ago", icon: MessageSquare },
]

interface ProfilePageProps {
  username: string
}

export function ProfilePage({ username }: ProfilePageProps) {
  return (
    <div className="bg-background min-h-screen pb-20">
      
      {/* Cover Image & Profile Header */}
      <div className="relative">
        <div className="h-64 md:h-80 w-full bg-gradient-to-r from-primary/30 via-blue-500/20 to-purple-500/30 overflow-hidden relative">
          <Image 
            src="https://images.unsplash.com/photo-1579546678183-a9a1a494dea9?w=1600&auto=format&fit=crop&q=60" 
            alt="cover" 
            fill
            className="object-cover opacity-50"
            priority
          />
        </div>
        
        <div className="container mx-auto px-4">
          <div className="relative -mt-24 md:-mt-32 flex flex-col md:flex-row items-end gap-6 mb-8">
            <div className="relative group">
              <Avatar className="h-48 w-48 border-8 border-background shadow-2xl">
                <AvatarImage src={`https://i.pravatar.cc/200?u=${username}`} />
                <AvatarFallback>{username[0].toUpperCase()}</AvatarFallback>
              </Avatar>
              <div className="absolute bottom-4 right-4 h-10 w-10 bg-primary rounded-full flex items-center justify-center border-4 border-background shadow-lg">
                <Zap className="h-5 w-5 text-white fill-white" />
              </div>
            </div>
            
            <div className="flex-1 pb-4 text-center md:text-left">
              <div className="flex flex-col md:flex-row md:items-center gap-4 mb-4">
                <h1 className="text-4xl font-black tracking-tight text-slate-900">@{username}</h1>
                <div className="flex items-center gap-2 justify-center md:justify-start">
                  <Badge className="bg-primary/10 text-primary border-none font-bold px-3 py-1">Level 42</Badge>
                  <Badge className="bg-slate-100 text-slate-600 border-none font-bold px-3 py-1 uppercase tracking-widest text-[10px]">Member</Badge>
                </div>
              </div>
              <p className="text-lg text-muted-foreground max-w-xl mb-4 font-medium">
                Passionate content creator and digital marketing enthusiast. Learning how to scale my personal brand one day at a time. 🚀
              </p>
              <div className="flex flex-wrap items-center gap-6 text-sm font-bold text-slate-500 justify-center md:justify-start">
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  <span>Joined October 2025</span>
                </div>
                <div className="flex items-center gap-1">
                  <LinkIcon className="h-4 w-4" />
                  <a href="#" className="text-primary hover:underline">heybirdy.com/{username}</a>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3 pb-4">
              <Button variant="outline" className="rounded-2xl font-bold h-12 px-6 border-slate-200">
                <Share2 className="h-4 w-4 mr-2" /> Share
              </Button>
              <Button className="rounded-2xl font-bold h-12 px-8 shadow-lg shadow-primary/20">
                Follow
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: Info & Badges */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Stats Card */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 gap-8">
                  {USER_STATS.map((stat) => (
                    <div key={stat.label} className="space-y-1">
                      <div className="flex items-center gap-2 text-slate-400">
                        <stat.icon className="h-4 w-4" />
                        <span className="text-[10px] font-black uppercase tracking-widest">{stat.label}</span>
                      </div>
                      <p className="text-2xl font-black text-slate-900">{stat.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-8 border-t border-slate-50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-black text-slate-900">Rank Progress</span>
                    <span className="text-sm font-bold text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-3 rounded-full bg-slate-100" />
                  <p className="text-xs font-bold text-slate-400 mt-4 uppercase tracking-widest text-center">
                    Next Rank: <span className="text-slate-900">Master Creator</span>
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Badges Card */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-slate-900">Earned Badges</CardTitle>
                  <Award className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <div className="grid grid-cols-2 gap-4">
                  {BADGES.map((badge) => (
                    <div key={badge.id} className="group cursor-pointer">
                      <div className="relative aspect-square rounded-3xl overflow-hidden mb-2 shadow-md group-hover:shadow-lg transition-all">
                        <Image 
                          src={badge.image} 
                          alt={badge.name} 
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500" 
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
                      </div>
                      <p className="text-xs font-black text-center text-slate-900 group-hover:text-primary transition-colors">{badge.name}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-8 rounded-2xl font-black text-xs uppercase tracking-widest py-6 border-slate-200">
                  View All 12 Badges
                </Button>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-slate-900 text-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <CardTitle className="text-xl font-black">Social Channels</CardTitle>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-4">
                {[
                  { name: "Twitter", handle: "@alex_member", icon: Twitter, color: "text-blue-400" },
                  { name: "Instagram", handle: "@alex.member", icon: Instagram, color: "text-pink-400" },
                  { name: "YouTube", handle: "Alex Member", icon: Youtube, color: "text-red-500" },
                ].map((social) => (
                  <div key={social.name} className="flex items-center justify-between p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group">
                    <div className="flex items-center gap-3">
                      <social.icon className={`h-5 w-5 ${social.color}`} />
                      <div>
                        <p className="text-xs font-black text-slate-400 uppercase tracking-widest">{social.name}</p>
                        <p className="font-bold text-sm">{social.handle}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
                  </div>
                ))}
              </CardContent>
            </Card>

          </div>

          {/* Right Column: Activity & Content */}
          <div className="lg:col-span-8 space-y-8">
            
            <Tabs defaultValue="activity" className="w-full">
              <TabsList className="bg-transparent border-b border-slate-100 w-full justify-start rounded-none h-auto p-0 mb-8">
                <TabsTrigger value="activity" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 font-black text-sm uppercase tracking-widest text-slate-400 data-[state=active]:text-primary">
                  Activity
                </TabsTrigger>
                <TabsTrigger value="content" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 font-black text-sm uppercase tracking-widest text-slate-400 data-[state=active]:text-primary">
                  Content
                </TabsTrigger>
                <TabsTrigger value="courses" className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent px-8 py-4 font-black text-sm uppercase tracking-widest text-slate-400 data-[state=active]:text-primary">
                  My Learning
                </TabsTrigger>
              </TabsList>

              <TabsContent value="activity" className="mt-0 space-y-6">
                {RECENT_ACTIVITY.map((activity) => (
                  <div key={activity.id} className="flex items-start gap-6 group">
                    <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-all shrink-0">
                      <activity.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1 pb-6 border-b border-slate-50">
                      <div className="flex items-center justify-between mb-1">
                        <p className="font-black text-lg text-slate-900 group-hover:text-primary transition-colors">{activity.title}</p>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{activity.time}</span>
                      </div>
                      <p className="text-sm font-medium text-slate-500">
                        {activity.type === 'course' ? 'You reached 100% completion in this course.' : 
                         activity.type === 'post' ? 'Your post is trending in the community!' : 
                         activity.type === 'badge' ? 'Congratulations on your new achievement.' : 'Joined the conversation.'}
                      </p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full h-14 rounded-2xl font-black text-xs uppercase tracking-widest border-slate-200">
                  Load More Activity
                </Button>
              </TabsContent>

              <TabsContent value="content" className="mt-0 text-center py-20 bg-slate-50 rounded-[2.5rem]">
                <div className="max-w-xs mx-auto space-y-4">
                  <div className="h-20 w-20 rounded-full bg-slate-100 flex items-center justify-center mx-auto">
                    <PlayCircle className="h-10 w-10 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-black text-slate-900">No Content Yet</h3>
                  <p className="text-sm font-medium text-slate-500">
                    @{username} hasn&apos;t published any public content yet.
                  </p>
                  <Button className="rounded-xl font-bold">Start Creating</Button>
                </div>
              </TabsContent>

              <TabsContent value="courses" className="mt-0 grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  { title: "Affiliate Marketing 101", progress: 100, image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&auto=format&fit=crop&q=60" },
                  { title: "Content Strategy 2026", progress: 45, image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&auto=format&fit=crop&q=60" },
                ].map((course) => (
                  <Card key={course.title} className="border-none shadow-md rounded-3xl overflow-hidden group hover:shadow-xl transition-all">
                    <div className="relative h-40">
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500" 
                      />
                      <div className="absolute inset-0 bg-black/20" />
                      {course.progress === 100 && (
                        <div className="absolute top-4 right-4 h-8 w-8 bg-green-500 rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                          <CheckCircle2 className="h-4 w-4 text-white" />
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h4 className="font-black text-lg text-slate-900 mb-4 group-hover:text-primary transition-colors">{course.title}</h4>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest">
                          <span className="text-slate-400">Progress</span>
                          <span className="text-primary">{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-2 rounded-full" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>

          </div>

        </div>
      </div>
    </div>
  )
}
