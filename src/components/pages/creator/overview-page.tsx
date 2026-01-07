"use client"

import { 
  TrendingUp, 
  Users, 
  Eye, 
  Zap, 
  PlayCircle, 
  Plus, 
  ShoppingBag, 
  Users2, 
  MessageSquare,
  ChevronRight,
  Star,
  Activity,
  Target,
  Sparkles,
  UserPlus
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import { CreatorMetricCard, type CreatorMetric } from "@/components/creator/dashboard/creator-metric-card"
import { CreatorQuickActionCard, type CreatorQuickAction } from "@/components/creator/dashboard/creator-quick-action-card"
import { CreatorActivityListItem, type CreatorActivity } from "@/components/creator/dashboard/creator-activity-list-item"
import { CreatorRecommendationCard, type CreatorRecommendation } from "@/components/creator/dashboard/creator-recommendation-card"

const METRICS: CreatorMetric[] = [
  { title: "Total Followers", value: "128.4K", change: "+12%", trend: "up", icon: Users },
  { title: "Avg. Engagement", value: "8.2%", change: "+5%", trend: "up", icon: Activity },
  { title: "Monthly Reach", value: "2.4M", change: "+18%", trend: "up", icon: Eye },
  { title: "Hub Score", value: "98/100", change: "Top 1%", trend: "up", icon: Target },
]

const QUICK_ACTIONS: CreatorQuickAction[] = [
  { name: "Upload Content", href: ROUTES.CREATOR.CONTENT.NEW, icon: PlayCircle, color: "text-blue-600", bg: "bg-blue-50" },
  { name: "New Product", href: ROUTES.CREATOR.MONETIZATION.PRODUCTS, icon: ShoppingBag, color: "text-emerald-600", bg: "bg-emerald-50" },
  { name: "Affiliate Setup", href: ROUTES.CREATOR.AFFILIATE.SETTINGS, icon: Users2, color: "text-purple-600", bg: "bg-purple-50" },
  { name: "Community Post", href: ROUTES.CREATOR.COMMUNITY, icon: MessageSquare, color: "text-orange-600", bg: "bg-orange-50" },
]

const ACTIVITIES: CreatorActivity[] = [
  { id: 1, type: "sale", title: "New Product Sale", desc: "Mastering Video Editing course", time: "2m ago", icon: Zap },
  { id: 2, type: "follower", title: "New Subscriber", desc: "Alex Rivers joined your hub", time: "15m ago", icon: UserPlus },
  { id: 3, type: "comment", title: "New Comment", desc: "Jordan commented on '2024 Setup'", time: "1h ago", icon: MessageSquare },
]

const RECOMMENDATIONS: CreatorRecommendation[] = [
  { title: "Expand Affiliate Network", desc: "Invite 5 more creators to boost reach by 15%", icon: Users2 },
  { title: "New Digital Asset", desc: "Your audience is looking for more presets", icon: ShoppingBag },
  { title: "Update Hub Branding", desc: "Refresh your visuals for higher conversion", icon: Sparkles },
]

export function CreatorOverviewPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-16 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12">
          <TrendingUp className="h-64 w-64" />
        </div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-primary" />
              </div>
              <Badge className="bg-white/10 text-white border-white/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
                Master Creator Hub
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-6 leading-[1.1]">
              Welcome back to <br />
              <span className="text-primary italic">The Creator Hub</span>
            </h1>
            <p className="text-slate-400 text-lg font-medium mb-10 leading-relaxed max-w-xl">
              Your hub is growing 24% faster than last month. You&apos;ve reached 2.4M people in the last 30 days.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="h-14 px-8 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 gap-2" asChild>
                <Link href={ROUTES.CREATOR.CONTENT.NEW}>
                  <Plus className="h-5 w-5" /> Create New Content
                </Link>
              </Button>
              <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-base border-white/10 bg-white/5 hover:bg-white/10 text-white transition-all duration-300" asChild>
                <Link href={ROUTES.CREATOR.ANALYTICS}>
                  View Deep Insights
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="flex-shrink-0 lg:w-80">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md rounded-[2.5rem] overflow-hidden border-none shadow-2xl">
              <CardContent className="p-8 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>Next Milestone</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-2 bg-white/5" />
                </div>
                <div className="pt-4 border-t border-white/5">
                  <p className="text-sm font-bold text-slate-300 mb-4">You&apos;re only 12.5K followers away from the Diamond Tier!</p>
                  <Button variant="ghost" className="w-full justify-between h-12 rounded-xl text-xs font-black uppercase tracking-widest text-primary hover:bg-primary/10 hover:text-primary">
                    View Milestones <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {METRICS.map((metric) => (
          <CreatorMetricCard key={metric.title} metric={metric} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-10">
        {/* Quick Actions & Recent Activity */}
        <div className="xl:col-span-2 space-y-10">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {QUICK_ACTIONS.map((action) => (
              <CreatorQuickActionCard key={action.name} action={action} />
            ))}
          </div>

          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-10 pb-4">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="text-2xl font-black text-slate-900">Recent Hub Activity</CardTitle>
                  <CardDescription className="text-slate-500 font-medium">What&apos;s happening in your community right now.</CardDescription>
                </div>
                <Button variant="ghost" className="text-primary font-black uppercase tracking-widest text-[10px] hover:bg-primary/5">
                  View All Activity
                </Button>
              </div>
            </CardHeader>
            <CardContent className="p-10 pt-4 space-y-6">
              {ACTIVITIES.map((activity) => (
                <CreatorActivityListItem key={activity.id} activity={activity} />
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Recommendations Sidebar */}
        <div className="space-y-10">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black text-slate-900">Growth Recommendations</CardTitle>
            </CardHeader>
            <CardContent className="p-8 pt-4 space-y-6">
              {RECOMMENDATIONS.map((rec) => (
                <CreatorRecommendationCard key={rec.title} recommendation={rec} />
              ))}
              <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-lg shadow-slate-200" variant="outline">
                View All Tips
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-sm rounded-[2.5rem] bg-primary overflow-hidden text-white relative group cursor-pointer">
            <div className="absolute top-0 right-0 p-4 opacity-20 -rotate-12 group-hover:rotate-0 transition-transform duration-500">
              <Star className="h-32 w-32" />
            </div>
            <CardContent className="p-8 relative z-10">
              <h3 className="text-2xl font-black tracking-tight mb-2">Upgrade to Diamond</h3>
              <p className="text-primary-foreground/80 font-medium text-sm mb-6">Unlock priority support, advanced analytics, and custom branding.</p>
              <Button className="w-full h-12 rounded-xl bg-white text-primary hover:bg-white/90 font-black uppercase tracking-widest text-[10px]">
                Explore Benefits
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
