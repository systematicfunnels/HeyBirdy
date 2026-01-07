"use client"

import { 
  Link as LinkIcon, 
  ExternalLink, 
  Plus, 
  Search,
  BarChart3,
  TrendingUp,
  Zap,
  ArrowRight
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ReferralLinkCard, type ReferralLink } from "@/components/affiliate/links/referral-link-card"
import { QuickLinkGenerator } from "@/components/affiliate/links/quick-link-generator"
import { PromoCodeSection } from "@/components/affiliate/links/promo-code-section"

const LINKS: ReferralLink[] = [
  {
    id: "l1",
    name: "Winter Sale Promo",
    original: "https://heybirdy.com/creator/alex-rivera/elite-gaming-gear",
    short: "heybirdy.com/re/alex-winter",
    clicks: 1240,
    conversions: 45,
    revenue: "$1,245.00",
    program: "Elite Gaming Gear",
    created: "Jan 10, 2026",
    status: "Active",
    trend: "+12%"
  },
  {
    id: "l2",
    name: "YouTube Description Link",
    original: "https://heybirdy.com/creator/sarah-chen/full-stack-bootcamp",
    short: "heybirdy.com/re/sarah-yt",
    clicks: 850,
    conversions: 12,
    revenue: "$540.00",
    program: "Full-Stack Bootcamp",
    created: "Jan 05, 2026",
    status: "Active",
    trend: "+5%"
  },
  {
    id: "l3",
    name: "X/Twitter Bio",
    original: "https://heybirdy.com/creator/elena-frost/digital-art",
    short: "heybirdy.com/re/elena-bio",
    clicks: 342,
    conversions: 8,
    revenue: "$320.00",
    program: "Digital Art Mastery",
    created: "Jan 02, 2026",
    status: "Active",
    trend: "-2%"
  }
]

export function AffiliateLinksPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <LinkIcon className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <LinkIcon className="h-4 w-4 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Link Management Pro
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Convert Traffic <br/>
              <span className="text-primary italic">With Precision.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Generate, manage, and track your custom referral links. High-converting short links designed for modern creators.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 text-base group">
                <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform" /> Create New Link
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
                <BarChart3 className="h-5 w-5 mr-2" /> Performance Data
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Clicks</CardTitle>
                <div className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-left">2,432</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold bg-green-400/10 w-fit px-2 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  <span>+12.5% GROWTH</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Avg. Conv Rate</CardTitle>
                <div className="text-4xl font-black text-blue-400 group-hover:scale-105 transition-transform origin-left">4.8%</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-bold bg-blue-400/10 w-fit px-2 py-1 rounded-full">
                  <Zap className="h-3 w-3" />
                  <span>TOP 5% CREATOR</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Quick Link Generator Card */}
      <QuickLinkGenerator />

      {/* Links List Section */}
      <div className="space-y-10">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="flex items-center gap-4">
            <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200">
              <LinkIcon className="h-7 w-7 text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-black tracking-tight text-slate-900">Your Referral Links</h2>
              <p className="text-slate-500 font-medium">Manage and monitor performance of all your custom links.</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative w-full sm:w-80 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input placeholder="Search links or programs..." className="pl-12 h-14 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-primary font-medium" />
            </div>
            <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
              <Button variant="ghost" size="sm" className="bg-white shadow-md rounded-xl px-6 font-bold text-xs h-10 text-slate-900">Active</Button>
              <Button variant="ghost" size="sm" className="text-slate-500 rounded-xl px-6 font-bold text-xs h-10 hover:bg-white/50">Archived</Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {LINKS.map((link) => (
            <ReferralLinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>

      {/* Promo Codes Section */}
      <PromoCodeSection />

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <Card className="border-dashed border-2 border-slate-200 bg-slate-50/30 flex flex-col items-center justify-center p-16 text-center rounded-[3rem] hover:bg-white hover:border-primary/30 transition-all duration-700 cursor-pointer group">
           <div className="h-24 w-24 rounded-[2rem] bg-white shadow-2xl flex items-center justify-center mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-700 border border-slate-100">
              <Plus className="h-10 w-10 text-primary" />
           </div>
           <h3 className="text-3xl font-black text-slate-900 tracking-tight">Create Custom Link</h3>
           <p className="text-slate-500 mt-6 max-w-xs font-medium text-lg leading-relaxed">
              Need a specialized link for a campaign? Create one in seconds.
           </p>
           <Button variant="link" className="mt-10 gap-2 text-primary font-black text-xl group/btn p-0">
              Get Started <ArrowRight className="h-6 w-6 group-hover/btn:translate-x-2 transition-transform" />
           </Button>
        </Card>

        <Card className="bg-[#0f172a] p-16 rounded-[3rem] text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
          <div className="absolute top-0 right-0 p-4 opacity-[0.03] -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
            <BarChart3 className="h-96 w-96" />
          </div>
          <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
          
          <div className="relative z-10">
            <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 mb-8 px-5 py-1.5 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
              Optimization Intelligence
            </Badge>
            <h3 className="text-4xl font-black mb-6 tracking-tight leading-[1.1]">Boost Your Conversion <br/>Rate by <span className="text-primary italic">24%</span></h3>
            <p className="text-slate-400 mb-10 font-medium text-xl leading-relaxed max-w-md">
              Custom aliases and short URLs perform significantly better in social media bios and video descriptions.
            </p>
            <Button size="lg" className="h-16 px-12 rounded-[1.25rem] font-black text-base shadow-2xl shadow-primary/20 group">
              Learn Link SEO <ExternalLink className="h-5 w-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Button>
          </div>
        </Card>
      </div>
    </div>
  )
}
