"use client"

import { 
  Download, 
  Search, 
  Layout,
  Type,
  Plus,
  ArrowRight,
  Zap,
} from "lucide-react"
import { Card, CardContent, CardTitle, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { AssetCard, type Asset } from "@/components/affiliate/assets/asset-card"
import { SwipeFileCard, type SwipeFile } from "@/components/affiliate/assets/swipe-file-card"

const ASSETS: Asset[] = [
  {
    id: "a1",
    name: "Winter Sale Banner - 728x90",
    type: "Banner",
    format: "PNG",
    size: "1.2 MB",
    program: "Elite Gaming Gear",
    image: "https://images.unsplash.com/photo-1614332287897-cdc485fa562d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "a2",
    name: "Social Media Post - Instagram",
    type: "Social",
    format: "JPG",
    size: "2.4 MB",
    program: "Full-Stack Bootcamp",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "a3",
    name: "Product Logo - Transparent",
    type: "Logo",
    format: "SVG",
    size: "150 KB",
    program: "Digital Art Mastery",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "a4",
    name: "Promo Video - 15s",
    type: "Video",
    format: "MP4",
    size: "15.8 MB",
    program: "Gadget Reviews",
    image: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=800&auto=format&fit=crop&q=60",
  }
]

const SWIPE_FILES: SwipeFile[] = [
  {
    id: "sf1",
    title: "Winter Sale Campaign",
    description: "A high-converting 3-part email sequence for the Winter Sale.",
    type: "Email Sequence",
    content: "\"Subject: Don't miss out on the biggest sale of the year!<br/><br/>Hey [Name], I wanted to let you know that our exclusive winter sale is officially live. For the next 48 hours...\"",
    status: "Ready to send"
  },
  {
    id: "sf2",
    title: "X/Twitter Growth Thread",
    description: "A viral-ready thread template for educational content.",
    type: "Social Thread",
    content: "\"1/7: Most people struggle with [Problem], but here is the secret to solving it for good.<br/><br/>In this thread, I'll break down the exact steps...\"",
    status: "Viral potential: High",
    tagColor: "text-purple-600",
    tagBg: "bg-purple-50 border-purple-200"
  }
]

export function AffiliateAssetsPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-[#0f172a] p-8 md:p-12 overflow-hidden text-white">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Layout className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <Badge className="bg-primary/20 hover:bg-primary/30 text-primary-foreground border-none mb-4 px-4 py-1">
              Creative Assets
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Your Brand Toolkit.</h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Download high-quality banners, logos, and promotional videos. Ready-to-use creatives to boost your conversions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20">
                <Download className="h-4 w-4 mr-2" /> Download All Packs
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white">
                <Plus className="h-4 w-4 mr-2" /> Request Custom Asset
              </Button>
            </div>
          </div>
          <div className="hidden lg:block shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white w-64">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Available Assets</CardTitle>
                <div className="text-3xl font-bold text-primary">124+</div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-400">Fresh content added weekly</p>
                <div className="flex items-center gap-1 text-green-400 text-xs mt-4">
                  <Zap className="h-3 w-3" />
                  <span>8 new assets today</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Filters & Search */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
        <Tabs defaultValue="all" className="w-full md:w-auto">
          <TabsList className="bg-slate-100/50 p-1 h-11 rounded-xl">
            <TabsTrigger value="all" className="rounded-lg px-6 font-bold text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">All Assets</TabsTrigger>
            <TabsTrigger value="banners" className="rounded-lg px-6 font-bold text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Banners</TabsTrigger>
            <TabsTrigger value="logos" className="rounded-lg px-6 font-bold text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Logos</TabsTrigger>
            <TabsTrigger value="social" className="rounded-lg px-6 font-bold text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Social</TabsTrigger>
            <TabsTrigger value="video" className="rounded-lg px-6 font-bold text-xs data-[state=active]:bg-white data-[state=active]:shadow-sm">Video</TabsTrigger>
          </TabsList>
        </Tabs>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
          <Input placeholder="Search assets or programs..." className="pl-10 h-11 bg-slate-50 border-none rounded-xl focus:ring-primary shadow-inner" />
        </div>
      </div>

      {/* Assets Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {ASSETS.map((asset) => (
          <AssetCard key={asset.id} asset={asset} />
        ))}
      </div>

      {/* Swipe Files Section */}
      <div className="pt-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
            <Type className="h-5 w-5 text-orange-600" />
          </div>
          <h2 className="text-2xl font-bold tracking-tight">Email & Social Swipe Files</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SWIPE_FILES.map((swipeFile) => (
            <SwipeFileCard key={swipeFile.id} swipeFile={swipeFile} />
          ))}
        </div>
      </div>

      {/* Request Section */}
      <Card className="border-none bg-primary p-8 md:p-12 overflow-hidden relative rounded-3xl text-primary-foreground mt-12">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Zap className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-bold mb-4">Need something specific?</h2>
            <p className="text-primary-foreground/80 max-w-lg text-lg">
              Our creative team can design custom banners or write specific swipe files for your unique audience.
            </p>
          </div>
          <Button size="lg" variant="secondary" className="h-14 px-10 rounded-2xl font-bold text-primary shadow-xl group">
            Request Custom Creative <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </Card>
    </div>
  )
}
