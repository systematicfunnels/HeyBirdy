"use client"

import { 
  Link as LinkIcon, 
  ImageIcon, 
  Activity, 
  Tag, 
  ArrowRight,
  Zap,
  Wrench,
  ExternalLink
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

const TOOLS = [
  {
    title: "Affiliate Links",
    description: "Generate and manage your unique referral links with custom tracking parameters.",
    href: ROUTES.AFFILIATE.TOOLS.LINKS,
    icon: LinkIcon,
    color: "text-blue-500",
    bg: "bg-blue-500/10",
    stats: "12 active links"
  },
  {
    title: "Marketing Assets",
    description: "Access high-quality banners, social media kits, and brand assets for your campaigns.",
    href: ROUTES.AFFILIATE.TOOLS.ASSETS,
    icon: ImageIcon,
    color: "text-purple-500",
    bg: "bg-purple-500/10",
    stats: "240+ assets"
  },
  {
    title: "Tracking & Pixels",
    description: "Set up conversion pixels and postback URLs to track your performance across platforms.",
    href: ROUTES.AFFILIATE.TOOLS.TRACKING,
    icon: Activity,
    color: "text-green-500",
    bg: "bg-green-500/10",
    stats: "3 pixels active"
  },
  {
    title: "Promo Codes",
    description: "Create and manage personalized discount codes for your audience.",
    href: ROUTES.AFFILIATE.TOOLS.PROMO_CODES,
    icon: Tag,
    color: "text-orange-500",
    bg: "bg-orange-500/10",
    stats: "5 custom codes"
  }
]

export function AffiliateToolsPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <Wrench className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 max-w-2xl">
          <div className="flex items-center gap-2 mb-6">
            <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
              <Zap className="h-4 w-4 text-primary" />
            </div>
            <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
              Growth Toolkit
            </Badge>
          </div>
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
            Powerful Tools to <br/>
            <span className="text-primary italic">Scale Your Reach.</span>
          </h1>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
            Everything you need to promote effectively, track accurately, and maximize your earnings. Your success starts with the right tools.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:scale-105 transition-all">
              Explore All Tools
            </Button>
            <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
              Documentation <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {TOOLS.map((tool) => (
          <Link key={tool.href} href={tool.href}>
            <Card className="group border-none shadow-sm bg-white hover:shadow-2xl hover:shadow-slate-200 transition-all duration-500 rounded-[2rem] overflow-hidden h-full cursor-pointer">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-8">
                  <div className={`h-16 w-16 ${tool.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                    <tool.icon className={`h-8 w-8 ${tool.color}`} />
                  </div>
                  <div className="flex flex-col items-end">
                    <Badge variant="secondary" className="bg-slate-50 text-slate-500 border-none font-bold text-[10px] uppercase tracking-wider px-3 py-1">
                      {tool.stats}
                    </Badge>
                  </div>
                </div>
                
                <h3 className="text-2xl font-black text-slate-900 mb-3 group-hover:text-primary transition-colors">
                  {tool.title}
                </h3>
                <p className="text-slate-500 font-medium leading-relaxed mb-8">
                  {tool.description}
                </p>
                
                <div className="flex items-center text-sm font-black text-slate-900 group-hover:gap-2 transition-all">
                  Launch Tool <ArrowRight className="ml-1 h-4 w-4 text-primary" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      {/* Resource Card */}
      <Card className="border-none shadow-sm bg-gradient-to-r from-primary/5 to-transparent rounded-[2.5rem] overflow-hidden">
        <CardContent className="p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="max-w-xl text-center md:text-left">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Need a Custom Solution?</h2>
            <p className="text-slate-600 font-medium text-lg">
              Looking for a specific integration or custom marketing materials? Our team is here to help you succeed with tailored resources.
            </p>
          </div>
          <Button size="lg" className="h-14 px-12 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:scale-105 transition-all shrink-0">
            Contact Support
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
