import { ExternalLink } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"

export function TrackingSettingsCard() {
  return (
    <Card className="border-none shadow-xl shadow-slate-200/50 rounded-3xl overflow-hidden">
      <CardHeader className="pb-6 border-b border-slate-50">
        <CardTitle className="text-xl font-bold">Tracking Settings</CardTitle>
        <CardDescription className="font-medium">Global configuration for your traffic.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-8 pt-8">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-black text-slate-800">UTM Passthrough</Label>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">Automatically pass UTM parameters to creator sites for consistent reporting.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-black text-slate-800">Click ID Persistence</Label>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">Keep click IDs in user cookies for 30 days to ensure conversion attribution.</p>
          </div>
          <Switch defaultChecked className="data-[state=checked]:bg-primary" />
        </div>
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1.5">
            <Label className="text-sm font-black text-slate-800">Deep Linking</Label>
            <p className="text-xs font-medium text-slate-500 leading-relaxed">Allow tracking on specific product pages instead of just homepages.</p>
          </div>
          <Switch className="data-[state=checked]:bg-primary" />
        </div>
      </CardContent>
      <CardFooter className="bg-slate-50/50 pt-6 pb-6">
         <Button variant="outline" className="w-full h-11 rounded-xl font-bold border-slate-200 hover:bg-white hover:border-primary/30 transition-all text-xs gap-2">
            View Setup Guide <ExternalLink className="h-3.5 w-3.5" />
         </Button>
      </CardFooter>
    </Card>
  )
}
