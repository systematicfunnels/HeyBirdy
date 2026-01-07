import { Download, ExternalLink, Layout, Copy } from "lucide-react"
import { Card, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface Asset {
  id: string
  name: string
  type: string
  format: string
  size: string
  program: string
  image: string
}

interface AssetCardProps {
  asset: Asset
}

export function AssetCard({ asset }: AssetCardProps) {
  return (
    <Card className="overflow-hidden group hover:shadow-xl hover:border-primary/20 transition-all duration-300 border-slate-200/60 flex flex-col h-full">
      <div className="aspect-[4/3] w-full bg-slate-100 relative overflow-hidden">
        <img 
          src={asset.image} 
          alt={asset.name} 
          className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4 gap-2">
           <Button size="sm" variant="secondary" className="flex-1 font-bold h-9 shadow-lg">
             <Download className="h-3.5 w-3.5 mr-2" /> Download
           </Button>
           <Button size="icon" variant="secondary" className="h-9 w-9 shadow-lg">
             <ExternalLink className="h-3.5 w-3.5" />
           </Button>
        </div>
        <div className="absolute top-3 left-3">
          <Badge className="bg-white/90 text-slate-900 backdrop-blur-md border-none font-bold text-[10px] px-2.5 py-1">
            {asset.type}
          </Badge>
        </div>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <div className="flex-1 space-y-2">
          <CardTitle className="text-base font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">{asset.name}</CardTitle>
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 rounded-full bg-slate-100 flex items-center justify-center">
              <Layout className="h-3 w-3 text-slate-500" />
            </div>
            <CardDescription className="text-xs font-medium text-slate-500 truncate">{asset.program}</CardDescription>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Format</span>
            <span className="text-xs font-bold text-slate-700">{asset.format}</span>
          </div>
          <div className="flex flex-col gap-0.5 text-right">
            <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Size</span>
            <span className="text-xs font-bold text-slate-700">{asset.size}</span>
          </div>
        </div>
        <Button variant="outline" className="w-full mt-4 h-10 rounded-xl font-bold border-slate-200 group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all">
          <Copy className="h-3.5 w-3.5 mr-2" /> Copy Asset Link
        </Button>
      </div>
    </Card>
  )
}
