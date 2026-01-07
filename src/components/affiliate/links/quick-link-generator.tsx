"use client"

import { 
  Zap, 
  Link as LinkIcon, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  MousePointer2,
  Hash,
  QrCode,
  Settings2
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function QuickLinkGenerator() {
  const [showAdvanced, setShowAdvanced] = useState(false)
  const [showQR, setShowQR] = useState(false)

  return (
    <Card className="border-none shadow-2xl shadow-slate-200/50 bg-white overflow-hidden relative rounded-[2.5rem]">
      <div className="absolute top-0 right-0 p-4 opacity-[0.02]">
        <Zap className="h-64 w-64" />
      </div>
      <CardHeader className="p-8 md:p-12 pb-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-3xl font-black tracking-tight text-slate-900">Smart Linker</CardTitle>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Label htmlFor="advanced-mode" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Advanced Mode</Label>
              <Switch id="advanced-mode" checked={showAdvanced} onCheckedChange={setShowAdvanced} />
            </div>
            <div className="flex items-center gap-2">
              <Label htmlFor="qr-mode" className="text-[10px] font-black uppercase tracking-widest text-slate-400">Generate QR</Label>
              <Switch id="qr-mode" checked={showQR} onCheckedChange={setShowQR} />
            </div>
          </div>
        </div>
        <CardDescription className="text-lg font-medium text-slate-500">Paste any product URL to get a tagged, high-converting affiliate link.</CardDescription>
      </CardHeader>
      <CardContent className="p-8 md:p-12 pt-0 space-y-6">
        <div className="flex flex-col xl:flex-row gap-6">
          <div className="flex-[2]">
            <div className="relative group">
              <LinkIcon className="absolute left-5 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Paste program or product URL here..." 
                className="h-16 pl-14 bg-slate-50 border-slate-100 rounded-[1.25rem] focus:ring-primary focus:bg-white transition-all text-base font-medium shadow-sm" 
              />
            </div>
          </div>
          <div className="flex-1">
            <div className="relative group">
              <div className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400 font-bold text-sm group-focus-within:text-primary transition-colors">/re/</div>
              <Input 
                placeholder="custom-alias" 
                className="h-16 pl-14 bg-slate-50 border-slate-100 rounded-[1.25rem] focus:ring-primary focus:bg-white transition-all text-base font-medium shadow-sm" 
              />
            </div>
          </div>
          <Button className="h-16 px-12 rounded-[1.25rem] font-black text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all shrink-0">
            Generate Link <ArrowRight className="h-5 w-5 ml-2" />
          </Button>
        </div>

        {showAdvanced && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-4 duration-500">
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Sub-ID 1 (Traffic Source)</Label>
              <div className="relative group">
                <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input placeholder="e.g. twitter, youtube" className="h-12 pl-10 bg-slate-50/50 border-slate-100 rounded-xl font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Sub-ID 2 (Campaign)</Label>
              <div className="relative group">
                <Settings2 className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                <Input placeholder="e.g. winter_sale" className="h-12 pl-10 bg-slate-50/50 border-slate-100 rounded-xl font-medium" />
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-1">Custom UTM Content</Label>
              <Input placeholder="e.g. sidebar_banner" className="h-12 bg-slate-50/50 border-slate-100 rounded-xl font-medium" />
            </div>
          </div>
        )}

        {showQR && (
          <div className="p-8 rounded-[2rem] bg-slate-900 text-white flex flex-col md:flex-row items-center gap-10 animate-in zoom-in-95 duration-500">
            <div className="h-40 w-40 bg-white rounded-2xl p-4 shrink-0 shadow-2xl shadow-primary/20">
              <div className="w-full h-full border-4 border-slate-900 flex items-center justify-center">
                <QrCode className="h-24 w-24 text-slate-900" />
              </div>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-black">QR Code Ready</h4>
              <p className="text-slate-400 text-sm font-medium leading-relaxed">
                Your smart link has been encoded into a high-resolution QR code. Perfect for social media stories, video overlays, or offline marketing.
              </p>
              <div className="flex gap-3">
                <Button size="sm" className="bg-primary hover:bg-primary/90 rounded-xl font-bold">Download SVG</Button>
                <Button size="sm" variant="outline" className="border-white/10 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold">Copy Image</Button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
      <CardFooter className="bg-slate-50/50 border-t border-slate-100 px-8 md:px-12 py-6">
        <div className="flex flex-wrap items-center gap-8">
          <p className="text-[10px] text-slate-400 flex items-center gap-2 font-bold uppercase tracking-widest">
            <CheckCircle2 className="h-4 w-4 text-green-500" /> Auto-tracked with your ID
          </p>
          <p className="text-[10px] text-slate-400 flex items-center gap-2 font-bold uppercase tracking-widest">
            <Globe className="h-4 w-4 text-blue-500" /> SSL Encrypted Short Links
          </p>
          <p className="text-[10px] text-slate-400 flex items-center gap-2 font-bold uppercase tracking-widest">
            <MousePointer2 className="h-4 w-4 text-purple-500" /> Real-time click analytics
          </p>
        </div>
      </CardFooter>
    </Card>
  )
}
