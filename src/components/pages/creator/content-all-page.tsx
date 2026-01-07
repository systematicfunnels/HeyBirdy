"use client"

import { 
  Video, 
  Search, 
  Filter, 
  Plus,
  ChevronRight,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"
import { ContentCard, type CreatorContentItem } from "@/components/creator/content/content-card"

const CONTENT: CreatorContentItem[] = [
  {
    id: "1",
    title: "Ultimate Gaming Setup 2024",
    status: "Published",
    views: "45.2K",
    likes: "3.4K",
    comments: "156",
    earnings: "$1,240",
    date: "2 days ago",
    type: "Video",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "2",
    title: "How I grew my channel to 100k",
    status: "Processing",
    views: "0",
    likes: "0",
    comments: "0",
    earnings: "$0",
    date: "Just now",
    type: "Short",
    thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
  },
  {
    id: "3",
    title: "Top 5 Mechanical Keyboards",
    status: "Published",
    views: "128.9K",
    likes: "12.1K",
    comments: "842",
    earnings: "$3,450",
    date: "1 week ago",
    type: "Video",
    thumbnail: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: "4",
    title: "My Desk Setup Tour",
    status: "Published",
    views: "22.5K",
    likes: "1.8K",
    comments: "94",
    earnings: "$450",
    date: "2 weeks ago",
    type: "Short",
    thumbnail: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  },
]

export function CreatorContentAllPage() {
  return (
    <div className="space-y-12 pb-20">
      {/* Premium Header */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 relative">
        <div className="flex items-center gap-6">
          <div className="h-20 w-20 rounded-[2rem] bg-slate-900 flex items-center justify-center shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] shrink-0">
            <Video className="h-10 w-10 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">Content Manager</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 mb-2">
              Content Library
            </h1>
            <p className="text-slate-500 font-medium text-lg">Manage, monitor, and optimize your digital presence</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant="outline" className="h-14 px-8 rounded-2xl font-bold border-slate-200 hover:bg-slate-50 hover:border-slate-300 transition-all">
            <Download className="h-5 w-5 mr-2" /> Export CSV
          </Button>
          <Button className="h-14 px-8 rounded-2xl font-bold shadow-[0_20px_40px_-10px_rgba(var(--primary),0.3)] group bg-primary hover:scale-[1.02] transition-all" asChild>
            <Link href={ROUTES.CREATOR.CONTENT.NEW}>
              <Plus className="h-5 w-5 mr-2 group-hover:rotate-90 transition-transform duration-500" /> Create New Content
            </Link>
          </Button>
        </div>
      </div>

      {/* Enhanced Filters & Search */}
      <Card className="border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] rounded-[2.5rem] bg-white overflow-hidden p-2">
        <CardContent className="p-4">
          <div className="flex flex-col xl:flex-row gap-6">
            <div className="relative flex-1 group">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search by title, tags or status..." 
                className="pl-14 h-16 bg-slate-50 border-none rounded-2xl font-bold text-lg focus-visible:ring-primary/20 transition-all placeholder:text-slate-400 placeholder:font-medium"
              />
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <Button variant="outline" className="h-16 px-6 rounded-2xl font-bold border-slate-200 bg-slate-50/50 hover:bg-white transition-all w-full md:w-auto">
                <Filter className="h-5 w-5 mr-2" /> Filter Options
              </Button>
              <div className="h-10 w-px bg-slate-100 mx-2 hidden xl:block" />
              <div className="flex bg-slate-100 p-1.5 rounded-2xl w-full md:w-auto">
                <Button variant="ghost" size="sm" className="h-12 px-6 rounded-xl font-black text-sm bg-white shadow-sm text-slate-900">All Content</Button>
                <Button variant="ghost" size="sm" className="h-12 px-6 rounded-xl font-bold text-sm text-slate-500 hover:text-slate-900 transition-colors">Published</Button>
                <Button variant="ghost" size="sm" className="h-12 px-6 rounded-xl font-bold text-sm text-slate-500 hover:text-slate-900 transition-colors">Drafts</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-10">
        {CONTENT.map((item) => (
          <ContentCard key={item.id} item={item} />
        ))}
      </div>

      {/* Premium Pagination */}
      <div className="flex flex-col items-center gap-6 pt-12">
        <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Showing 4 of 24 items</p>
        <div className="flex items-center gap-3 bg-white p-3 rounded-[2rem] shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] border border-slate-50">
          <Button variant="outline" className="h-12 w-12 p-0 rounded-2xl border-slate-100 text-slate-400 hover:bg-slate-50" disabled>
            <ChevronRight className="h-6 w-6 rotate-180" />
          </Button>
          <div className="flex items-center gap-2 px-2">
            <Button variant="ghost" className="h-12 w-12 p-0 rounded-2xl font-black text-base bg-primary text-white shadow-[0_10px_20px_-5px_rgba(var(--primary),0.3)]">1</Button>
            <Button variant="ghost" className="h-12 w-12 p-0 rounded-2xl font-black text-base text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">2</Button>
            <Button variant="ghost" className="h-12 w-12 p-0 rounded-2xl font-black text-base text-slate-400 hover:text-slate-900 hover:bg-slate-50 transition-all">3</Button>
          </div>
          <Button variant="outline" className="h-12 w-12 p-0 rounded-2xl border-slate-100 text-slate-400 hover:bg-slate-50">
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </div>
  )
}
