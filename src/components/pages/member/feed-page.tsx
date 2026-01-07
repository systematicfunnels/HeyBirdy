"use client"

import { useState } from "react"
import { 
  Flame, 
  Trophy, 
  MessageCircle,
  CheckCircle2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MemberProfileCard } from "@/components/member/feed/member-profile-card"
import { FeedPostCard } from "@/components/member/feed/feed-post-card"
import { ActiveChallengesCard } from "@/components/member/feed/active-challenges-card"

const POSTS = [
  {
    id: "1",
    creator: {
      name: "Alex Rivera",
      username: "arivera",
      avatar: "https://i.pravatar.cc/150?u=arivera",
      verified: true,
    },
    content: "Just dropped a new guide on mastering the current meta! Check out the link in bio for the full breakdown. 🚀",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    likes: "1.2K",
    comments: "84",
    timestamp: "2h ago",
    tags: ["Gaming", "Strategy"],
  },
  {
    id: "2",
    creator: {
      name: "Sarah Chen",
      username: "schen_edu",
      avatar: "https://i.pravatar.cc/150?u=schen",
      verified: true,
    },
    content: "Coding tip of the day: Use React Server Components for better performance and smaller bundle sizes! #webdev #react",
    likes: "850",
    comments: "42",
    timestamp: "4h ago",
    tags: ["Tech", "Education"],
  },
  {
    id: "3",
    creator: {
      name: "Marcus Jordan",
      username: "mj_music",
      avatar: "https://i.pravatar.cc/150?u=mj",
      verified: true,
    },
    content: "Working on something special in the studio today. Can't wait for you guys to hear it! 🎹✨",
    image: "https://images.unsplash.com/photo-1514525253361-bee87187040b?q=80&w=2064&auto=format&fit=crop",
    likes: "2.5K",
    comments: "156",
    timestamp: "6h ago",
    tags: ["Music", "BehindTheScenes"],
  },
]

const CHALLENGES = [
  {
    id: "1",
    title: "Watch 3 Tech Guides",
    progress: 2,
    total: 3,
    xp: "+150 XP",
  },
  {
    id: "2",
    title: "Join a Community Hub",
    progress: 0,
    total: 1,
    xp: "+100 XP",
  },
]

const MEMBER_DATA = {
  name: "Alex Member",
  username: "alex_m",
  avatar: "https://i.pravatar.cc/150?u=member",
  level: 12,
  points: "2.4k",
  badges: 8,
}

export function FeedPage() {
  const [activeTab, setActiveTab] = useState("following")

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Sidebar: User Profile & Quick Stats (Hidden on Mobile) */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <MemberProfileCard user={MEMBER_DATA} />
            <ActiveChallengesCard challenges={CHALLENGES} />
          </div>

          {/* Main Content: Feed */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center justify-between mb-2">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="following">Following</TabsTrigger>
                  <TabsTrigger value="for-you">For You</TabsTrigger>
                  <TabsTrigger value="trending">Trending</TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Posts */}
            <div className="space-y-6">
              {POSTS.map((post) => (
                <FeedPostCard key={post.id} post={post} />
              ))}
            </div>
          </div>

          {/* Right Sidebar: Trending & Recommendations */}
          <div className="hidden lg:block lg:col-span-3 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Flame className="h-4 w-4 text-orange-500" /> Trending Hubs
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {["Gaming Legends", "Web3 Builders", "Fitness Hub", "Crypto Daily"].map((hub) => (
                  <div key={hub} className="flex items-center justify-between group cursor-pointer">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <MessageCircle className="h-4 w-4 text-primary" />
                      </div>
                      <span className="text-sm font-medium group-hover:text-primary transition-colors">{hub}</span>
                    </div>
                    <Badge variant="outline" className="text-[10px]">Join</Badge>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-sm font-bold flex items-center gap-2">
                  <Trophy className="h-4 w-4 text-yellow-500" /> Top Contributors
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="relative">
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={`https://i.pravatar.cc/150?u=user${i}`} />
                        <AvatarFallback>U{i}</AvatarFallback>
                      </Avatar>
                      <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-yellow-500 text-[8px] font-bold text-white flex items-center justify-center border-2 border-background">
                        {i}
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-bold truncate">Top Contributor {i}</p>
                      <p className="text-[10px] text-muted-foreground">{1000 - i * 100} Points</p>
                    </div>
                    <CheckCircle2 className="h-3 w-3 text-primary" />
                  </div>
                ))}
                <Button variant="outline" size="sm" className="w-full text-xs h-8">
                  View Leaderboard
                </Button>
              </CardContent>
            </Card>

            <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-blue-500/10 border border-primary/20">
              <h4 className="font-bold text-sm mb-2">Want to earn more?</h4>
              <p className="text-xs text-muted-foreground mb-4">Complete daily tasks to unlock exclusive badges and rewards.</p>
              <Button size="sm" className="w-full text-xs">Explore Earn Hub</Button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
