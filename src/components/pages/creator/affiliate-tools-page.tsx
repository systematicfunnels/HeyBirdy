"use client"

import { 
  Link2, 
  Plus, 
  Layout,
  Zap,
  Globe,
  Settings,
  Search
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AffiliateQuickToolCard } from "@/components/creator/affiliate/affiliate-quick-tool-card"
import { MarketingAssetCard, type MarketingAsset } from "@/components/creator/affiliate/marketing-asset-card"

const MARKETING_ASSETS: MarketingAsset[] = [
  { id: "1", name: "Winter Sale Banner", type: "Image", size: "1200x628", format: "PNG", preview: "https://images.unsplash.com/photo-1612810806563-4cb8265db55f?w=400&h=200&fit=crop" },
  { id: "2", name: "Product Catalog 2026", type: "Document", size: "12.4 MB", format: "PDF", preview: "https://images.unsplash.com/photo-1586769852044-692d6e671f05?w=400&h=200&fit=crop" },
  { id: "3", name: "Brand Guidelines", type: "Document", size: "5.8 MB", format: "PDF", preview: "https://images.unsplash.com/photo-1586769852836-bc069f19e1b6?w=400&h=200&fit=crop" },
  { id: "4", name: "Social Media Kit", type: "Archive", size: "45.2 MB", format: "ZIP", preview: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop" },
]

const QUICK_TOOLS = [
  { title: "Deep Link Generator", desc: "Create affiliate links for any page.", icon: Link2, color: "text-blue-600", bg: "bg-blue-50" },
  { title: "Widget Builder", desc: "Embed product cards on your site.", icon: Layout, color: "text-purple-600", bg: "bg-purple-50" },
  { title: "Smart Banners", desc: "Auto-rotating promotional banners.", icon: Zap, color: "text-amber-600", bg: "bg-amber-50" },
  { title: "API Documentation", desc: "Custom integrations for developers.", icon: Globe, color: "text-emerald-600", bg: "bg-emerald-50" },
]

export function CreatorAffiliateToolsPage() {
  return (
    <div className="max-w-6xl space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Affiliate Tools</h1>
          <p className="text-slate-500 font-medium">Resources and assets to help your partners promote you.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 rounded-2xl border-slate-200 font-bold gap-2">
            <Settings className="h-4 w-4" /> Manage Assets
          </Button>
          <Button className="h-12 rounded-2xl font-black gap-2 shadow-xl shadow-primary/20">
            <Plus className="h-4 w-4" /> Upload New Asset
          </Button>
        </div>
      </div>

      {/* Quick Tools Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {QUICK_TOOLS.map((tool) => (
          <AffiliateQuickToolCard key={tool.title} {...tool} />
        ))}
      </div>

      {/* Main Content: Asset Library */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white overflow-hidden">
        <CardHeader className="p-10 pb-4">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              <CardTitle className="text-2xl font-black text-slate-900">Marketing Assets</CardTitle>
              <CardDescription className="text-slate-500 font-medium">Approved creative materials for your affiliate network.</CardDescription>
            </div>
            <div className="relative w-full md:w-72">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <Input placeholder="Search assets..." className="h-11 pl-12 pr-4 rounded-xl border-slate-100 bg-slate-50 focus:ring-primary/10" />
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-10 pt-4">
          <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="bg-slate-100/50 p-1.5 rounded-2xl gap-1 h-auto overflow-x-auto inline-flex">
              <TabsTrigger value="all" className="h-10 px-8 rounded-xl font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all">
                All Assets
              </TabsTrigger>
              <TabsTrigger value="images" className="h-10 px-8 rounded-xl font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all">
                Images
              </TabsTrigger>
              <TabsTrigger value="documents" className="h-10 px-8 rounded-xl font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all">
                Documents
              </TabsTrigger>
              <TabsTrigger value="social" className="h-10 px-8 rounded-xl font-black text-xs uppercase tracking-widest data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-slate-900 text-slate-500 transition-all">
                Social Media
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {MARKETING_ASSETS.map((asset) => (
                  <MarketingAssetCard key={asset.id} asset={asset} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      {/* Custom Link Generator */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mb-48 -mr-48" />
        <CardContent className="p-10 relative z-10">
          <div className="max-w-2xl space-y-8">
            <div>
              <Badge className="bg-primary/20 text-primary border-none font-black text-[10px] px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
                Pro Feature
              </Badge>
              <h2 className="text-3xl font-black mb-4">Generate Custom Referral Links</h2>
              <p className="text-slate-400 font-medium leading-relaxed">
                Create trackable links for specific products or campaigns. Add UTM parameters to get detailed insights into traffic sources and conversion rates.
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1 space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Product URL</label>
                  <Input 
                    placeholder="https://heybirdy.com/store/product-123" 
                    className="h-14 bg-slate-800 border-slate-700 rounded-2xl text-white font-medium focus:ring-primary/20"
                  />
                </div>
                <div className="w-full md:w-48 space-y-2">
                  <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest ml-1">Campaign ID</label>
                  <Input 
                    placeholder="WINTER2026" 
                    className="h-14 bg-slate-800 border-slate-700 rounded-2xl text-white font-medium focus:ring-primary/20"
                  />
                </div>
              </div>
              <Button className="h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all w-full md:w-auto">
                Generate Smart Link
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
