import { Code2, Settings, Trash2 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface TrackingPixel {
  id: string
  name: string
  platform: string
  pixelId: string
  status: string
  lastEvent: string
}

interface TrackingPixelCardProps {
  pixel: TrackingPixel
}

export function TrackingPixelCard({ pixel }: TrackingPixelCardProps) {
  return (
    <Card className="group hover:shadow-xl hover:border-primary/20 transition-all duration-300 border-slate-200/60">
      <CardContent className="p-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center group-hover:bg-primary/5 group-hover:border-primary/10 transition-colors">
              <Code2 className="h-7 w-7 text-slate-400 group-hover:text-primary transition-colors" />
            </div>
            <div className="space-y-1.5">
              <div className="flex items-center gap-3">
                <h3 className="font-bold text-lg text-slate-900">{pixel.name}</h3>
                {pixel.status === 'Active' ? (
                  <Badge className="bg-green-500/10 text-green-600 hover:bg-green-500/20 border-none font-bold text-[10px] px-2 py-0">ACTIVE</Badge>
                ) : (
                  <Badge className="bg-slate-100 text-slate-400 hover:bg-slate-200 border-none font-bold text-[10px] px-2 py-0 uppercase">Inactive</Badge>
                )}
              </div>
              <p className="text-xs font-medium text-slate-500 flex items-center gap-2">
                 <span className="bg-slate-100 px-1.5 py-0.5 rounded text-slate-600">ID: {pixel.pixelId}</span>
                 <span className="h-1 w-1 rounded-full bg-slate-300" />
                 <span className="font-bold text-slate-400 uppercase tracking-wider">{pixel.platform}</span>
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between sm:justify-end gap-8 border-t sm:border-t-0 pt-4 sm:pt-0 border-slate-100">
            <div className="text-left sm:text-right">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Last Event</p>
              <p className="text-sm font-black text-slate-700">{pixel.lastEvent}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-100 hover:text-primary transition-all">
                <Settings className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-red-50 hover:text-red-500 transition-all">
                <Trash2 className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
