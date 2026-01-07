"use client"

import { 
  Target, 
  Zap, 
  Trophy, 
  Gift, 
  Flame, 
  ArrowUpRight,
  TrendingUp,
  Coins,
  Shield,
  Users,
  PlayCircle,
  CheckCircle2,
  AlertCircle,
  ShoppingBag,
  ArrowRight,
  XCircle,
  History
} from "lucide-react"
import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { POINTS_CONFIG } from "@/lib/constants/gamification"
import { DailyTaskCard } from "@/components/member/earn/daily-task-card"
import { MilestoneCard } from "@/components/member/earn/milestone-card"
import { 
  Sheet, 
  SheetContent, 
  SheetClose
} from "@/components/ui/sheet"
import { useState } from "react"

const DAILY_TASKS = [
  { id: "t1", title: "Watch 3 Videos", points: POINTS_CONFIG.CONTENT_VIEW * 3, progress: 2, total: 3, icon: PlayCircle },
  { id: "t2", title: "Share a Course", points: POINTS_CONFIG.CONTENT_SHARE, progress: 0, total: 1, icon: ArrowUpRight },
  { id: "t3", title: "Join a Community", points: 10, progress: 1, total: 1, completed: true, icon: Users },
  { id: "t4", title: "Complete a Quiz", points: 25, progress: 0, total: 1, icon: Target },
]

const MILESTONES = [
  { id: "m1", title: "First Course Completed", reward: "Early Bird Badge", points: 100, status: "Completed" },
  { id: "m2", title: "Refer 5 Friends", reward: "Premium Feature Unlock", points: 500, status: "In Progress", progress: 60 },
  { id: "m3", title: "10 Day Streak", reward: "Double Points Weekend", points: 250, status: "Locked" },
]

const REWARDS = [
  { 
    id: "r1", 
    title: "Exclusive Badge", 
    cost: 500, 
    type: "Digital", 
    image: "https://images.unsplash.com/photo-1579546678183-a9a1a494dea9?w=400&auto=format&fit=crop&q=60",
    description: "Unlock a unique 'Golden Birdy' badge for your profile to stand out in the community."
  },
  { 
    id: "r2", 
    title: "Creator Shoutout", 
    cost: 2500, 
    type: "Social", 
    image: "https://images.unsplash.com/photo-1557683316-973673baf926?w=400&auto=format&fit=crop&q=60",
    description: "Get a personalized shoutout from a top creator of your choice during their next live stream."
  },
  { 
    id: "r3", 
    title: "Premium Course", 
    cost: 5000, 
    type: "Learning", 
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&auto=format&fit=crop&q=60",
    description: "Full access to any premium course on the platform. Lifetime access included."
  },
]

interface Reward {
  id: string;
  title: string;
  cost: number;
  type: string;
  image: string;
  description: string;
}

interface Redemption {
  id: number;
  title: string;
  cost: number;
  date: string;
}

export function EarnPage() {
  const [selectedReward, setSelectedReward] = useState<Reward | null>(null)
  const [isRedeeming, setIsRedeeming] = useState(false)
  const [redemptionSuccess, setRedemptionSuccess] = useState(false)
  const [userBalance, setUserBalance] = useState(1250)
  const [redemptions, setRedemptions] = useState<Redemption[]>([])

  const handleRedeem = () => {
    if (!selectedReward) return;
    setIsRedeeming(true)
    // Simulate API call
    setTimeout(() => {
      setIsRedeeming(false)
      setRedemptionSuccess(true)
      setUserBalance(prev => prev - selectedReward.cost)
      setRedemptions(prev => [
        { id: Date.now(), title: selectedReward.title, cost: selectedReward.cost, date: "Just now" },
        ...prev
      ])
    }, 2000)
  }

  const closeRedemption = () => {
    setSelectedReward(null)
    setRedemptionSuccess(false)
  }

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-8">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary font-bold uppercase tracking-wider text-xs">
              <Target className="h-4 w-4" />
              <span>Earn Hub</span>
            </div>
            <h1 className="text-4xl font-black tracking-tight text-slate-900">
              Rewards & <span className="text-primary">Achievements</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Complete tasks, reach milestones, and earn points to unlock exclusive rewards and benefits.
            </p>
          </div>
          <div className="bg-white p-6 rounded-[2rem] shadow-xl border border-slate-100 flex items-center gap-6">
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Your Balance</p>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center">
                  <Coins className="h-5 w-5 text-white" />
                </div>
                <span className="text-3xl font-black text-slate-900 tracking-tighter">{userBalance.toLocaleString()}</span>
              </div>
            </div>
            <div className="h-10 w-px bg-slate-100" />
            <div className="text-center">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Rank</p>
              <div className="flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-primary/20 flex items-center justify-center">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <span className="text-xl font-black text-slate-900 tracking-tighter">Silver II</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Main Content: Tasks and Milestones */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Daily Tasks */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-2xl font-black text-slate-900">Daily Quests</CardTitle>
                    <CardDescription className="text-base font-medium">Resetting in 14h 22m</CardDescription>
                  </div>
                  <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Zap className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-4">
                {DAILY_TASKS.map((task) => (
                  <DailyTaskCard key={task.id} task={task} />
                ))}
              </CardContent>
              <CardFooter className="p-8 pt-0">
                <Button variant="outline" className="w-full h-12 rounded-2xl font-black text-xs uppercase tracking-widest border-slate-200">
                  View All Tasks
                </Button>
              </CardFooter>
            </Card>

            {/* Lifetime Milestones */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl font-black text-slate-900">Mastery Milestones</CardTitle>
                  <Trophy className="h-6 w-6 text-yellow-500" />
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                {MILESTONES.map((m) => (
                  <MilestoneCard key={m.id} milestone={m} />
                ))}
              </CardContent>
            </Card>

            {/* Redemption History */}
            {redemptions.length > 0 && (
              <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden animate-in slide-in-from-bottom-4 duration-500">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center">
                        <History className="h-5 w-5 text-slate-600" />
                      </div>
                      <CardTitle className="text-2xl font-black text-slate-900">Redemption History</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-4">
                  {redemptions.map((redemption) => (
                    <div key={redemption.id} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border border-slate-100">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center">
                          <CheckCircle2 className="h-6 w-6 text-emerald-600" />
                        </div>
                        <div>
                          <p className="font-black text-slate-900">{redemption.title}</p>
                          <p className="text-xs text-slate-500 font-medium">{redemption.date}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-slate-400 font-black">
                        <span>-{redemption.cost}</span>
                        <Coins className="h-3 w-3" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )}

          </div>

          {/* Right Sidebar: Leaderboard & Shop */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Local Leaderboard */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-slate-900 text-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black">Top Earners</CardTitle>
                  <TrendingUp className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                {[
                  { name: "Alex Member", points: "4,850", avatar: "https://i.pravatar.cc/150?u=1", rank: 1 },
                  { name: "Sarah Jenkins", points: "4,200", avatar: "https://i.pravatar.cc/150?u=2", rank: 2 },
                  { name: "Mike Ross", points: "3,950", avatar: "https://i.pravatar.cc/150?u=3", rank: 3 },
                  { name: "Emma Wilson", points: "3,400", avatar: "https://i.pravatar.cc/150?u=4", rank: 4 },
                ].map((user) => (
                  <div key={user.name} className="flex items-center gap-4 group cursor-pointer">
                    <span className={`text-lg font-black w-6 ${user.rank === 1 ? 'text-yellow-400' : 'text-slate-500'}`}>{user.rank}</span>
                    <div className="relative h-10 w-10 flex-shrink-0">
                      <Image src={user.avatar} alt={user.name} fill className="rounded-xl object-cover" />
                    </div>
                    <div className="flex-1">
                      <p className="font-black text-sm group-hover:text-primary transition-colors">{user.name}</p>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{user.points} pts</p>
                    </div>
                  </div>
                ))}
                <Button className="w-full mt-4 rounded-2xl font-black text-xs uppercase tracking-widest py-6 shadow-xl shadow-primary/30">
                  Full Leaderboard
                </Button>
              </CardContent>
            </Card>

            {/* Reward Shop Preview */}
            <Card className="border-none shadow-xl rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl font-black text-slate-900">Reward Shop</CardTitle>
                  <Gift className="h-5 w-5 text-primary" />
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4 space-y-6">
                {REWARDS.map((reward) => (
                  <div key={reward.id} className="group cursor-pointer" onClick={() => setSelectedReward(reward)}>
                    <div className="relative aspect-video rounded-2xl overflow-hidden mb-3">
                      <Image src={reward.image} alt={reward.title} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                      <div className="absolute top-2 right-2">
                        <Badge className="bg-white/90 backdrop-blur text-slate-900 border-none font-black text-[10px] uppercase tracking-widest">
                          {reward.type}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
                    </div>
                    <div className="flex items-center justify-between">
                      <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors">{reward.title}</h4>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Coins className="h-3 w-3" />
                        <span className="text-sm font-black">{reward.cost}</span>
                      </div>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 rounded-2xl font-black text-xs uppercase tracking-widest py-6 border-slate-200">
                  Visit Shop
                </Button>
              </CardContent>
            </Card>

            {/* Streak Card */}
            <div className="p-8 rounded-[2.5rem] bg-gradient-to-br from-orange-500 to-red-600 text-white shadow-xl relative overflow-hidden group">
              <Flame className="absolute -bottom-4 -right-4 h-32 w-32 text-white/10 -rotate-12 group-hover:rotate-0 transition-transform duration-500" />
              <div className="relative z-10">
                <h4 className="text-xl font-black mb-1">5 Day Streak!</h4>
                <p className="text-sm font-medium text-white/80 mb-6">You&apos;re on fire! Keep it up to earn a 1.5x points multiplier.</p>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5, 6, 7].map((day) => (
                    <div key={day} className={`h-8 flex-1 rounded-lg flex items-center justify-center font-black text-[10px] ${
                      day <= 5 ? 'bg-white text-orange-600' : 'bg-white/20 text-white/40'
                    }`}>
                      {day}
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>

      {/* Reward Redemption Sheet */}
      <Sheet open={!!selectedReward} onOpenChange={(open) => !open && closeRedemption()}>
        <SheetContent side="right" className="w-full sm:max-w-md p-0 border-none rounded-l-[3rem] overflow-hidden">
          {selectedReward && (
            <div className="h-full flex flex-col">
              <div className="relative h-64">
                <Image src={selectedReward.image} alt={selectedReward.title} fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-8 right-8">
                  <Badge className="bg-primary text-white border-none font-black text-[10px] uppercase tracking-widest mb-3">
                    {selectedReward.type} Reward
                  </Badge>
                  <h2 className="text-3xl font-black text-white">{selectedReward.title}</h2>
                </div>
                <SheetClose className="absolute top-6 right-6 h-10 w-10 bg-white/10 backdrop-blur rounded-xl flex items-center justify-center text-white hover:bg-white/20 transition-all">
                  <XCircle className="h-6 w-6" />
                </SheetClose>
              </div>

              <div className="flex-1 p-10 space-y-10 overflow-y-auto scrollbar-hide">
                {!redemptionSuccess ? (
                  <>
                    <div className="space-y-4">
                      <h3 className="text-xs font-black uppercase tracking-widest text-slate-400">Description</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">
                        {selectedReward.description}
                      </p>
                    </div>

                    <div className="p-8 rounded-3xl bg-slate-50 space-y-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-slate-500">Price</span>
                        <div className="flex items-center gap-2 text-yellow-500">
                          <Coins className="h-5 w-5" />
                          <span className="text-2xl font-black">{selectedReward.cost.toLocaleString()}</span>
                        </div>
                      </div>
                      <div className="h-px bg-slate-200" />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-black text-slate-500">Your Balance</span>
                        <span className="text-xl font-black text-slate-900">{userBalance.toLocaleString()}</span>
                      </div>
                    </div>

                    {userBalance < selectedReward.cost ? (
                      <div className="p-6 rounded-2xl bg-red-50 border border-red-100 flex gap-4">
                        <AlertCircle className="h-6 w-6 text-red-500 shrink-0" />
                        <div>
                          <p className="font-black text-red-900 text-sm">Insufficient Points</p>
                          <p className="text-xs text-red-700/70 font-medium mt-1">
                            You need {(selectedReward.cost - userBalance).toLocaleString()} more points to redeem this reward.
                          </p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-6 rounded-2xl bg-blue-50 border border-blue-100 flex gap-4">
                        <ShoppingBag className="h-6 w-6 text-blue-500 shrink-0" />
                        <div>
                          <p className="font-black text-blue-900 text-sm">Ready to Redeem</p>
                          <p className="text-xs text-blue-700/70 font-medium mt-1">
                            Redeeming this will deduct {selectedReward.cost.toLocaleString()} points from your balance.
                          </p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="py-10 text-center space-y-8 animate-in zoom-in-95 duration-500">
                    <div className="h-24 w-24 bg-emerald-500 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/30 rotate-12">
                      <CheckCircle2 className="h-12 w-12 text-white" />
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-black text-slate-900">Redemption Successful!</h2>
                      <p className="text-slate-500 font-medium max-w-xs mx-auto">
                        Your reward has been added to your account. Check your email for further instructions.
                      </p>
                    </div>
                    <Button 
                      className="w-full h-14 rounded-2xl font-black bg-slate-900 hover:bg-slate-800 text-white"
                      onClick={closeRedemption}
                    >
                      Awesome!
                    </Button>
                  </div>
                )}
              </div>

              {!redemptionSuccess && (
                <div className="p-10 bg-slate-50 border-t border-slate-100">
                  <Button 
                    className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20 group"
                    disabled={userBalance < selectedReward.cost || isRedeeming}
                    onClick={handleRedeem}
                  >
                    {isRedeeming ? (
                      <span className="flex items-center gap-3">
                        <Zap className="h-5 w-5 animate-spin" /> Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        Confirm Redemption <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </span>
                    )}
                  </Button>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  )
}

