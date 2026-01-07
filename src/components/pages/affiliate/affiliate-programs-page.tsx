"use client"

import { 
  Users, 
  Search, 
  Filter, 
  TrendingUp, 
  Zap,
  ArrowRight,
  Award
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import { ProgramCard } from "@/components/affiliate/programs/program-card"

const MY_PROGRAMS = [
  {
    id: "p1",
    name: "Elite Gaming Gear",
    creator: "Alex Rivera",
    avatar: "https://i.pravatar.cc/150?u=alex",
    category: "Hardware",
    commission: "15%",
    status: "Active",
    joined: "Jan 12, 2025",
    sales: 142,
    earnings: "$2,140.00",
    performance: "Top 5%",
    rating: 4.9
  },
  {
    id: "p2",
    name: "Full-Stack Bootcamp",
    creator: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    category: "Education",
    commission: "25%",
    status: "Active",
    joined: "Feb 05, 2025",
    sales: 84,
    earnings: "$4,200.00",
    performance: "Top 10%",
    rating: 4.8
  },
  {
    id: "p3",
    name: "Digital Art Mastery",
    creator: "Elena Frost",
    avatar: "https://i.pravatar.cc/150?u=elena",
    category: "Design",
    commission: "20%",
    status: "Active",
    joined: "Mar 10, 2025",
    sales: 56,
    earnings: "$1,120.00",
    performance: "Rising Star",
    rating: 4.7
  },
  {
    id: "p4",
    name: "Mindfulness App",
    creator: "David Kim",
    avatar: "https://i.pravatar.cc/150?u=david",
    category: "Wellness",
    commission: "30%",
    status: "Pending",
    joined: "Jan 02, 2026",
    sales: 0,
    earnings: "$0.00",
    performance: "N/A",
    rating: 4.5
  }
]

export function AffiliateProgramsPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Hero Section */}
      <div className="relative rounded-[2.5rem] bg-[#0f172a] p-8 md:p-14 overflow-hidden text-white shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-4 opacity-[0.03] rotate-12">
          <Users className="h-96 w-96" />
        </div>
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-primary/20 blur-[120px] rounded-full" />
        
        <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <Badge className="bg-white/5 hover:bg-white/10 text-white border-white/10 px-4 py-1 text-[10px] font-bold uppercase tracking-widest backdrop-blur-md">
                Program Management
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter leading-[1.1]">
              Your Partnership <br/>
              <span className="text-primary italic">Portfolio.</span>
            </h1>
            <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
              Manage your active collaborations, track program-specific performance, and discover new growth opportunities.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-14 px-10 rounded-2xl font-bold shadow-2xl shadow-primary/20 text-base group" asChild>
                <Link href={ROUTES.AFFILIATE.DISCOVER}>
                  <Search className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" /> Find More Programs
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="h-14 px-10 rounded-2xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white text-base">
                <Award className="h-5 w-5 mr-2" /> Program Benefits
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Active Programs</CardTitle>
                <div className="text-4xl font-black text-primary group-hover:scale-105 transition-transform origin-left">12</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-green-400 text-[10px] font-bold bg-green-400/10 w-fit px-2 py-1 rounded-full">
                  <TrendingUp className="h-3 w-3" />
                  <span>+2 THIS MONTH</span>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white border-none shadow-2xl w-full sm:w-56 group hover:bg-white/10 transition-colors">
              <CardHeader className="pb-2">
                <CardTitle className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Earnings</CardTitle>
                <div className="text-4xl font-black text-blue-400 group-hover:scale-105 transition-transform origin-left">$12.4k</div>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-1.5 text-blue-400 text-[10px] font-bold bg-blue-400/10 w-fit px-2 py-1 rounded-full">
                  <Zap className="h-3 w-3" />
                  <span>PLATINUM TIER</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-xl shadow-slate-200">
            <Users className="h-7 w-7 text-white" />
          </div>
          <div>
            <h2 className="text-3xl font-black tracking-tight text-slate-900">Partnership List</h2>
            <p className="text-slate-500 font-medium">A detailed overview of all your joined programs.</p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="relative w-full sm:w-80 group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input placeholder="Search programs or creators..." className="pl-12 h-14 bg-white border-slate-200 rounded-2xl shadow-sm focus:ring-primary font-medium" />
          </div>
          <Button variant="outline" className="h-14 px-6 rounded-2xl font-bold border-slate-200 gap-2">
            <Filter className="h-5 w-5 text-slate-400" /> Filters
          </Button>
        </div>
      </div>

      {/* Programs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MY_PROGRAMS.map((program) => (
          <ProgramCard key={program.id} program={program} />
        ))}
      </div>

      {/* Bottom CTA */}
      <Card className="border-none bg-gradient-to-r from-primary to-primary/80 p-12 rounded-[2.5rem] text-primary-foreground relative overflow-hidden group">
        <div className="absolute top-0 right-0 p-4 opacity-10 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
          <Zap className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-4 tracking-tight leading-tight">Ready to scale your <br/>affiliate earnings?</h2>
            <p className="text-primary-foreground/80 font-medium text-xl leading-relaxed max-w-lg">
              Check out our latest recommended programs or explore the marketplace for high-converting offers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" variant="secondary" className="h-16 px-10 rounded-2xl font-black text-lg shadow-xl" asChild>
              <Link href={ROUTES.AFFILIATE.DISCOVER}>
                Browse Marketplace <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl font-black text-lg bg-white/10 border-white/20 hover:bg-white/20 text-white">
              View Analytics
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}
