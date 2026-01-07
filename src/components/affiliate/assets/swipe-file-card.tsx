import { Copy, CheckCircle2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils/helpers"

export interface SwipeFile {
  id: string
  title: string
  description: string
  type: string
  content: string
  status: string
  tagColor?: string
  tagBg?: string
}

interface SwipeFileCardProps {
  swipeFile: SwipeFile
  className?: string
}

export function SwipeFileCard({ swipeFile, className }: SwipeFileCardProps) {
  return (
    <Card className={cn("bg-gradient-to-br from-slate-50 to-white border-slate-200/60 shadow-lg shadow-slate-200/20 overflow-hidden group", className)}>
      <CardHeader className="pb-4">
        <div className="flex items-center justify-between">
          <Badge 
            variant="outline" 
            className={cn(
              swipeFile.tagColor || "text-primary", 
              swipeFile.tagBg || "bg-primary/5 border-primary/20"
            )}
          >
            {swipeFile.type}
          </Badge>
          <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-primary transition-colors">
            <Copy className="h-4 w-4" />
          </Button>
        </div>
        <CardTitle className="text-xl font-bold mt-4">{swipeFile.title}</CardTitle>
        <CardDescription className="font-medium text-slate-500">{swipeFile.description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-white border border-slate-100 p-5 rounded-2xl shadow-inner relative">
          <div className="absolute top-4 right-4 text-[10px] font-bold text-slate-300 uppercase tracking-widest">Template</div>
          <p className="text-sm text-slate-600 leading-relaxed italic" dangerouslySetInnerHTML={{ __html: swipeFile.content }} />
          <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-primary">
            <CheckCircle2 className="h-3 w-3" /> {swipeFile.status}
          </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50/50 py-4">
        <Button className="w-full h-11 rounded-xl font-bold shadow-md">
          Copy Content
        </Button>
      </CardFooter>
    </Card>
  )
}
