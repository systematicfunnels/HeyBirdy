"use client"

import { 
  DollarSign, 
  ArrowUpRight, 
  Search,
  Clock,
  Zap,
  LayoutGrid,
  TrendingUp,
  MousePointer2,
  Target,
  BarChart3,
  Link as LinkIcon,
  Tag,
  Code2,
  Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { StatCard } from "@/components/affiliate/dashboard/earning-stats"
import { ActiveProgramListItem, type ActiveProgram } from "@/components/affiliate/dashboard/active-program-list-item"
import { QuickToolCard } from "@/components/affiliate/dashboard/quick-tool-card"
import { RecommendedProgramCard, type RecommendedProgram } from "@/components/affiliate/dashboard/recommended-program-card"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

const STATS = [
  {
    title: "Available Earnings",
    value: "$4,250.50",
    change: "+$450.00",
    trend: "up" as const,
    icon: DollarSign,
  },
  {
    title: "Total Clicks",
    value: "12.4K",
    change: "+15.2%",
    trend: "up" as const,
    icon: MousePointer2,
  },
  {
    title: "Conversions",
    value: "342",
    change: "+8.4%",
    trend: "up" as const,
    icon: Target,
  },
  {
    title: "Conversion Rate",
    value: "2.75%",
    change: "-0.2%",
    trend: "down" as const,
    icon: BarChart3,
  },
  {
    title: "EPC (Earnings Per Click)",
    value: "$0.34",
    change: "+$0.05",
    trend: "up" as const,
    icon: Zap,
  },
]

const ACTIVE_PROGRAMS: ActiveProgram[] = [
  {
    id: "1",
    creator: "Alex Rivera",
    program: "Elite Gaming Gear",
    commission: "15%",
    status: "Active",
    earned: "$1,240",
    clicks: "2.5K",
  },
  {
    id: "2",
    creator: "Sarah Chen",
    program: "Full-Stack Bootcamp",
    commission: "20%",
    status: "Active",
    earned: "$850",
    clicks: "1.2K",
  },
  {
    id: "3",
    creator: "Tech Guru",
    program: "Gadget Reviews",
    commission: "10%",
    status: "Paused",
    earned: "$420",
    clicks: "800",
  },
]

const RECOMMENDED_PROGRAMS: RecommendedProgram[] = [
  {
    name: "Digital Art Mastery",
    creator: "Elena Frost",
    commission: "25%",
    rating: "4.9",
    category: "Art",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    name: "Fitness Transformation",
    creator: "Coach Mike",
    commission: "15%",
    rating: "4.7",
    category: "Health",
    image: "https://i.pravatar.cc/150?u=mike",
  },
]

const QUICK_TOOLS = [
  {
    name: "Affiliate Links",
    description: "Create and track custom referral links",
    icon: LinkIcon,
    href: ROUTES.AFFILIATE.TOOLS.LINKS,
    color: "text-blue-500",
    bg: "bg-blue-500/10"
  },
  {
    name: "Promo Codes",
    description: "Manage your unique discount codes",
    icon: Tag,
    href: ROUTES.AFFILIATE.TOOLS.PROMO_CODES,
    color: "text-purple-500",
    bg: "bg-purple-500/10"
  },
  {
    name: "Ad Assets",
    description: "Download banners and swipe files",
    icon: LayoutGrid,
    href: ROUTES.AFFILIATE.TOOLS.ASSETS,
    color: "text-orange-500",
    bg: "bg-orange-500/10"
  },
  {
    name: "Pixel Tracking",
    description: "Configure conversion tracking",
    icon: Code2,
    href: ROUTES.AFFILIATE.TOOLS.TRACKING,
    color: "text-green-500",
    bg: "bg-green-500/10"
  }
]

export function AffiliateDashboardPage() {
  return (
    <div className="space-y-16 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[3rem] bg-slate-900 p-10 md:p-20 overflow-hidden text-white shadow-[0_40px_80px_-15px_rgba(0,0,0,0.35)]">
        <div className="absolute top-0 right-0 p-8 opacity-[0.05] rotate-12 group-hover:rotate-0 transition-transform duration-1000">
          <TrendingUp className="h-[30rem] w-[30rem]" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/20 blur-[150px] rounded-full" />
        
        <div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="h-10 w-10 rounded-[1rem] bg-primary/20 flex items-center justify-center border border-primary/20">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-5 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] backdrop-blur-md transition-all">
                Affiliate Status: Platinum Elite
              </Badge>
            </div>
            <h1 className="text-6xl md:text-7xl font-black mb-8 tracking-tighter leading-[1.05]">
              Your Empire, <br/>
              <span className="text-primary">Managed.</span>
            </h1>
            <p className="text-2xl text-slate-400 mb-12 leading-relaxed font-medium max-w-2xl">
              Track performance, discover new opportunities, and manage earnings in one place. Scale your success with real-time intelligence.
            </p>
            <div className="flex flex-wrap gap-6">
              <Button size="lg" className="h-16 px-12 rounded-[1.5rem] font-black shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] text-lg group bg-primary hover:scale-105 transition-all" asChild>
                <Link href={ROUTES.AFFILIATE.DISCOVER}>
                  <Search className="h-6 w-6 mr-3 group-hover:scale-110 transition-transform" /> Find Programs
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 rounded-[1.5rem] font-black bg-white/5 border-white/10 hover:bg-white/10 text-white text-lg transition-all">
                <Clock className="h-6 w-6 mr-3" /> Activity Log
              </Button>
            </div>
          </div>

          <div className="hidden xl:block shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-xl text-white border-none shadow-2xl w-[22rem] group hover:bg-white/10 transition-all duration-500 rounded-[2.5rem] p-2">
              <CardHeader className="p-8 pb-6">
                <div className="flex items-center justify-between mb-4">
                  <CardTitle className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Next Payout</CardTitle>
                  <div className="h-8 w-8 rounded-[0.75rem] bg-primary/20 flex items-center justify-center">
                    <DollarSign className="h-4 w-4 text-primary" />
                  </div>
                </div>
                <div className="text-5xl font-black text-primary group-hover:scale-105 transition-transform origin-left">$1,240.00</div>
              </CardHeader>
              <CardContent className="p-8 pt-0">
                <p className="text-sm text-slate-400 font-bold mb-6">Scheduled for Jan 15, 2026</p>
                <div className="space-y-3">
                  <div className="flex justify-between text-[11px] font-black uppercase tracking-[0.2em]">
                    <span className="text-slate-400">Progress</span>
                    <span className="text-primary">85%</span>
                  </div>
                  <Progress value={85} className="h-3 bg-white/5" />
                </div>
                <p className="text-[11px] text-slate-500 mt-8 font-black uppercase tracking-[0.15em] leading-relaxed">
                  You&apos;re $260 away from your next milestone bonus!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5">
        {STATS.map((stat) => (
          <StatCard key={stat.title} {...stat} />
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-16">
        {/* Active Programs */}
        <div className="xl:col-span-2 space-y-10">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <div className="h-16 w-16 rounded-[1.5rem] bg-slate-900 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.15)]">
                <LayoutGrid className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-black tracking-tight text-slate-900">Active Programs</h2>
                <p className="text-slate-500 font-medium text-lg">Your top performing partnerships</p>
              </div>
            </div>
            <Button variant="ghost" className="font-black text-primary hover:bg-primary/5 rounded-[1rem] h-12 px-6" asChild>
              <Link href={ROUTES.AFFILIATE.PROGRAMS}>View All <ArrowUpRight className="h-5 w-5 ml-2" /></Link>
            </Button>
          </div>

          <div className="grid gap-6">
            {ACTIVE_PROGRAMS.map((program) => (
              <ActiveProgramListItem key={program.id} program={program} />
            ))}
          </div>
        </div>

        {/* Quick Tools */}
        <div className="space-y-10">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-[1.5rem] bg-primary flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(var(--primary),0.3)]">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Quick Tools</h2>
              <p className="text-slate-500 font-medium text-lg">Everything you need to scale</p>
            </div>
          </div>

          <div className="grid gap-6">
            {QUICK_TOOLS.map((tool) => (
              <QuickToolCard key={tool.name} tool={tool} />
            ))}
          </div>
        </div>
      </div>

      {/* Recommended Programs */}
      <div className="space-y-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="h-16 w-16 rounded-[1.5rem] bg-orange-500 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(249,115,22,0.3)]">
              <Star className="h-8 w-8 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Recommended for You</h2>
              <p className="text-slate-500 font-medium text-lg">New opportunities based on your niche</p>
            </div>
          </div>
          <Button variant="ghost" className="font-black text-primary hover:bg-primary/5 rounded-[1rem] h-12 px-6" asChild>
            <Link href={ROUTES.AFFILIATE.DISCOVER}>Explore All <ArrowUpRight className="h-5 w-5 ml-2" /></Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {RECOMMENDED_PROGRAMS.map((program) => (
            <RecommendedProgramCard key={program.name} program={program} />
          ))}
        </div>
      </div>
    </div>
  )
}
