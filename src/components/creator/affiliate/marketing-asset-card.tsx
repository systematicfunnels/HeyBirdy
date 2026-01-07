import { Download, Copy } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

export interface MarketingAsset {
  id: string
  name: string
  type: string
  size: string
  format: string
  preview: string
}

interface MarketingAssetCardProps {
  asset: MarketingAsset
}

export function MarketingAssetCard({ asset }: MarketingAssetCardProps) {
  return (
    <div className="group relative rounded-[2rem] border border-slate-100 overflow-hidden hover:shadow-xl transition-all duration-500 bg-white">
      <div className="relative aspect-[16/9] overflow-hidden bg-slate-100">
        <Image 
          src={asset.preview} 
          alt={asset.name} 
          fill
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
          <Button size="icon" className="h-10 w-10 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
            <Download className="h-4 w-4" />
          </Button>
          <Button size="icon" className="h-10 w-10 rounded-xl bg-white text-slate-900 hover:bg-slate-100 shadow-xl">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <Badge className="bg-slate-100 text-slate-500 border-none font-black text-[10px] px-2 py-0.5 rounded-lg uppercase tracking-widest">
            {asset.type}
          </Badge>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asset.format}</span>
        </div>
        <h4 className="text-sm font-black text-slate-900 mb-1 truncate">{asset.name}</h4>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{asset.size}</p>
      </div>
    </div>
  )
}
