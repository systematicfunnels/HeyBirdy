"use client"

import { 
  Target, 
  ShieldCheck, 
  Plus, 
  AlertCircle,
  ArrowRight,
  Zap,
  Activity
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

import { TrackingPixelCard, type TrackingPixel } from "@/components/affiliate/tracking/tracking-pixel-card"
import { PostbackUrlCard } from "@/components/affiliate/tracking/postback-url-card"
import { TrackingSettingsCard } from "@/components/affiliate/tracking/tracking-settings-card"

const PIXELS: TrackingPixel[] = [
  {
    id: "px1",
    name: "Facebook Pixel",
    platform: "Meta",
    pixelId: "123456789012345",
    status: "Active",
    lastEvent: "2 mins ago",
  },
  {
    id: "px2",
    name: "Google Ads Conversion",
    platform: "Google",
    pixelId: "AW-987654321",
    status: "Active",
    lastEvent: "15 mins ago",
  },
  {
    id: "px3",
    name: "TikTok Pixel",
    platform: "TikTok",
    pixelId: "TT_ABC123XYZ",
    status: "Inactive",
    lastEvent: "Never",
  }
]

export function AffiliateTrackingPage() {
  return (
    <div className="space-y-10">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-[#0f172a] p-8 md:p-12 overflow-hidden text-white">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <Target className="h-64 w-64" />
        </div>
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
          <div className="max-w-2xl">
            <Badge className="bg-primary/20 hover:bg-primary/30 text-primary-foreground border-none mb-4 px-4 py-1">
              Advanced Tracking
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Data-Driven Growth.</h1>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Manage your conversion pixels and postback URLs. Seamlessly integrate with your favorite tracking software and ad platforms.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/20">
                <Plus className="h-4 w-4 mr-2" /> Add New Pixel
              </Button>
              <Button size="lg" variant="outline" className="h-12 px-8 rounded-xl font-bold bg-white/5 border-white/10 hover:bg-white/10 text-white">
                <ShieldCheck className="h-4 w-4 mr-2" /> Verify Setup
              </Button>
            </div>
          </div>
          <div className="hidden lg:block shrink-0">
            <Card className="bg-white/5 border-white/10 backdrop-blur-md text-white w-64">
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium text-slate-400">Tracking Status</CardTitle>
                <div className="text-3xl font-bold text-green-400 flex items-center gap-2">
                   <Activity className="h-6 w-6" /> Healthy
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-xs text-slate-400">All systems operational</p>
                <div className="flex items-center gap-1 text-primary text-xs mt-4">
                  <Zap className="h-3 w-3" />
                  <span>Real-time sync enabled</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content: Pixels List */}
        <div className="lg:col-span-2 space-y-8">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <Target className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">Active Pixels</h2>
            </div>
            <Badge variant="outline" className="border-slate-200 text-slate-500 font-bold px-3 py-1">3 Configured</Badge>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {PIXELS.map((pixel) => (
              <TrackingPixelCard key={pixel.id} pixel={pixel} />
            ))}
          </div>

          {/* Postback URL Section */}
          <div className="pt-6 space-y-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-orange-100 flex items-center justify-center">
                <Zap className="h-5 w-5 text-orange-600" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight">S2S Postback URLs</h2>
            </div>
            <PostbackUrlCard url="https://heybirdy.com/api/postback?click_id={click_id}&payout={payout}" />
          </div>
        </div>

        {/* Sidebar: Settings & Global Toggle */}
        <div className="space-y-8">
          <TrackingSettingsCard />

          <Card className="bg-gradient-to-br from-orange-50 to-orange-100/50 border-orange-200 shadow-lg shadow-orange-200/20 rounded-3xl overflow-hidden relative">
             <div className="absolute top-0 right-0 p-4 opacity-10">
                <AlertCircle className="h-32 w-32 text-orange-600" />
             </div>
             <CardHeader className="pb-4">
                <div className="flex items-center gap-3 text-orange-800">
                   <div className="h-8 w-8 rounded-lg bg-orange-200/50 flex items-center justify-center">
                      <AlertCircle className="h-5 w-5" />
                   </div>
                   <CardTitle className="text-base font-bold">Propagation Notice</CardTitle>
                </div>
             </CardHeader>
             <CardContent className="relative z-10">
                <p className="text-xs text-orange-800/80 leading-relaxed font-medium">
                   Changes to pixel settings can take up to <b>10 minutes</b> to propagate across our global CDN. 
                   <br/><br/>
                   Always use the <b>Pixel Helper</b> browser extensions to verify your setup before launching high-spend campaigns.
                </p>
             </CardContent>
             <CardFooter className="pt-2">
                <button className="text-xs font-black text-orange-700 p-0 h-auto group bg-transparent border-none cursor-pointer flex items-center">
                   Troubleshooting Tips <ArrowRight className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" />
                </button>
             </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  )
}
