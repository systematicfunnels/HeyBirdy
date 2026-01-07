"use client"

import { 
  Layout, 
  Copy, 
  MoreVertical, 
  Plus, 
  Search, 
  Filter, 
  Star, 
  Settings2,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

const TEMPLATES = [
  { id: 1, title: "Standard Tech Review", category: "Video", used: 124, thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" },
  { id: 2, title: "Weekly News Update", category: "Short", used: 86, thumbnail: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop" },
  { id: 3, title: "Gaming Highlight Reel", category: "Video", used: 245, thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" },
  { id: 4, title: "Educational Tutorial", category: "Longform", used: 52, thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" },
]

export function CreatorContentTemplatesPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <Layout className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Content Templates</h1>
            <p className="text-slate-500 font-medium text-sm">Reusable structures for your content</p>
          </div>
        </div>
        <Button className="h-12 px-6 rounded-xl font-bold shadow-xl shadow-primary/20">
          <Plus className="h-4 w-4 mr-2" /> Create Template
        </Button>
      </div>

      {/* Filters & Search */}
      <Card className="border-none shadow-sm rounded-[1.5rem] bg-white overflow-hidden">
        <CardContent className="p-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1 group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input placeholder="Search templates..." className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-medium" />
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" className="h-12 px-5 rounded-xl font-bold border-slate-200">
                <Filter className="h-4 w-4 mr-2" /> Filter
              </Button>
              <div className="flex bg-slate-100 p-1 rounded-xl">
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold bg-white shadow-sm text-slate-900">All</Button>
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold text-slate-500">Video</Button>
                <Button variant="ghost" size="sm" className="h-10 px-4 rounded-lg font-bold text-slate-500">Shorts</Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Templates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {TEMPLATES.map((template) => (
          <Card key={template.id} className="group hover:shadow-2xl transition-all duration-500 border-none shadow-sm rounded-[2rem] bg-white overflow-hidden">
            <CardContent className="p-0">
              <div className="relative h-48 overflow-hidden">
                <Image 
                  src={template.thumbnail} 
                  alt={template.title} 
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-60" />
                <div className="absolute top-4 left-4">
                  <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-bold text-[8px] uppercase tracking-widest px-2 py-0.5">
                    {template.category}
                  </Badge>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button className="h-10 px-6 rounded-xl font-bold shadow-xl shadow-primary/40 bg-primary text-white">
                    Use Template
                  </Button>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-black text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{template.title}</h3>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Used {template.used} times</p>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8 rounded-lg">
                    <MoreVertical className="h-4 w-4 text-slate-400" />
                  </Button>
                </div>
                <div className="flex items-center gap-2 pt-4 border-t border-slate-50">
                  <Button variant="ghost" size="sm" className="flex-1 h-9 rounded-lg font-bold text-xs text-slate-500 hover:text-primary hover:bg-primary/5">
                    <Copy className="h-3.5 w-3.5 mr-2" /> Duplicate
                  </Button>
                  <Button variant="ghost" size="sm" className="flex-1 h-9 rounded-lg font-bold text-xs text-slate-500 hover:text-primary hover:bg-primary/5">
                    <Settings2 className="h-3.5 w-3.5 mr-2" /> Edit
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
        
        {/* Create New Template Card */}
        <Card className="border-2 border-dashed border-slate-100 rounded-[2rem] bg-slate-50/50 flex flex-col items-center justify-center p-8 text-center group hover:border-primary/30 hover:bg-white transition-all cursor-pointer">
          <div className="h-16 w-16 rounded-full bg-white shadow-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
            <Plus className="h-8 w-8 text-primary" />
          </div>
          <h4 className="font-black text-slate-900">New Template</h4>
          <p className="text-xs text-slate-400 font-medium mt-1">Build a custom structure</p>
        </Card>
      </div>

      {/* Pro Template Banner */}
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-slate-900/20">
        <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
          <Star className="h-48 w-48" />
        </div>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
          <div className="space-y-4">
            <Badge className="bg-primary text-white border-none font-black text-[10px] uppercase tracking-widest px-3 py-1">Pro Feature</Badge>
            <h3 className="text-3xl font-black">Unlock Expert Templates</h3>
            <p className="text-slate-400 font-medium max-w-xl leading-relaxed">
              Get access to over 50+ high-converting templates designed by top creators to boost your engagement and streamline your workflow.
            </p>
          </div>
          <Button className="h-14 px-10 rounded-2xl font-black bg-white text-slate-900 hover:bg-slate-100 shadow-xl shadow-white/5 whitespace-nowrap">
            Upgrade to Pro
          </Button>
        </div>
      </div>
    </div>
  )
}
