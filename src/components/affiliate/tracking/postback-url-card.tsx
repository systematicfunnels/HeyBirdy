import { Copy, ShieldCheck } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

interface PostbackUrlCardProps {
  url: string
}

export function PostbackUrlCard({ url }: PostbackUrlCardProps) {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50 bg-gradient-to-br from-white to-slate-50 overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-xl font-bold">Global Postback URL</CardTitle>
        <CardDescription className="font-medium text-slate-500">
          Automate your conversion tracking by receiving data directly in your tracking software.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <div className="flex-1 relative group">
            <Input 
              readOnly 
              value={url} 
              className="h-12 font-mono text-xs bg-slate-100/50 border-slate-200 rounded-xl pr-12 group-hover:bg-white transition-colors" 
            />
            <div className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-300 uppercase tracking-widest">URL</div>
          </div>
          <Button className="h-12 px-8 rounded-xl font-bold shadow-lg shadow-primary/10">
            <Copy className="h-4 w-4 mr-2" /> Copy URL
          </Button>
        </div>
        <div className="bg-blue-50/50 border border-blue-100 p-5 rounded-2xl flex gap-4">
           <div className="h-10 w-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
           </div>
           <div className="space-y-1">
             <p className="text-sm font-bold text-blue-900 leading-tight">Secure Macro Support</p>
             <p className="text-xs text-blue-700/80 leading-relaxed font-medium">
               Our postback system supports standard macros for click ID, payout, currency, and transaction ID. 
               Check our <span className="underline font-bold cursor-pointer text-blue-800 hover:text-blue-900 transition-colors">Developer Documentation</span> for full parameters.
             </p>
           </div>
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50/50 py-3 flex justify-center border-t border-slate-100">
         <Button variant="link" className="text-xs font-bold text-slate-400 hover:text-primary transition-colors">
            Test Postback Integration
         </Button>
      </CardFooter>
    </Card>
  )
}
