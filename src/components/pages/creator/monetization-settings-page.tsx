"use client"

import { 
  Building2, 
  ShieldCheck, 
  ExternalLink,
  AlertTriangle,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function CreatorMonetizationSettingsPage() {
  return (
    <div className="max-w-4xl space-y-10 pb-20">
      {/* Header */}
      <div>
        <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Monetization Settings</h1>
        <p className="text-slate-500 font-medium">Configure how you get paid and manage your financial preferences.</p>
      </div>

      {/* Payout Method */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white overflow-hidden">
        <CardHeader className="p-8 pb-4">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <CardTitle className="text-2xl font-black text-slate-900">Payout Method</CardTitle>
              <CardDescription className="text-slate-500 font-medium">Where your earnings are sent.</CardDescription>
            </div>
            <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
              Connected
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="p-8 pt-4">
          <div className="flex items-center gap-6 p-6 rounded-[2rem] bg-slate-50 border border-slate-100 group hover:bg-white hover:shadow-lg transition-all duration-500">
            <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center shadow-sm group-hover:bg-primary/5 transition-colors">
              <Building2 className="h-8 w-8 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-lg font-black text-slate-900">Stripe Connect</p>
              <p className="text-sm font-bold text-slate-500">Bank account ending in •••• 4242</p>
            </div>
            <Button variant="outline" className="rounded-xl font-black gap-2 border-slate-200">
              Manage <ExternalLink className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Financial Preferences */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-black text-slate-900">Payout Schedule</CardTitle>
            <CardDescription className="text-slate-500 font-medium">Choose how often you receive funds.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Frequency</label>
              <Select defaultValue="weekly">
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold focus:ring-primary/20">
                  <SelectValue placeholder="Select frequency" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100">
                  <SelectItem value="daily" className="font-bold rounded-xl">Daily</SelectItem>
                  <SelectItem value="weekly" className="font-bold rounded-xl">Weekly (Every Monday)</SelectItem>
                  <SelectItem value="monthly" className="font-bold rounded-xl">Monthly (1st of month)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-center justify-between p-4 rounded-2xl bg-primary/5 border border-primary/10">
              <div className="flex items-center gap-3">
                <Info className="h-5 w-5 text-primary" />
                <p className="text-sm font-bold text-primary">Next payout: Jan 12, 2026</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-black text-slate-900">Currency & Region</CardTitle>
            <CardDescription className="text-slate-500 font-medium">Primary currency for your store.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-6">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Primary Currency</label>
              <Select defaultValue="usd">
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold focus:ring-primary/20">
                  <SelectValue placeholder="Select currency" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100">
                  <SelectItem value="usd" className="font-bold rounded-xl">USD - US Dollar ($)</SelectItem>
                  <SelectItem value="eur" className="font-bold rounded-xl">EUR - Euro (€)</SelectItem>
                  <SelectItem value="gbp" className="font-bold rounded-xl">GBP - British Pound (£)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest text-center italic">
              Currency changes may take up to 24h to propagate.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tax & Compliance */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
        <CardHeader className="p-8 pb-4">
          <CardTitle className="text-2xl font-black text-slate-900">Tax & Compliance</CardTitle>
          <CardDescription className="text-slate-500 font-medium">Manage your tax forms and legal information.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4 space-y-4">
          {[
            { label: "W-9 Form", status: "Verified", date: "Jan 2024", icon: ShieldCheck },
            { label: "Identity Verification", status: "Verified", date: "Nov 2023", icon: ShieldCheck },
          ].map((item) => (
            <div key={item.label} className="flex items-center justify-between p-6 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-md transition-all">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center">
                  <item.icon className="h-6 w-6 text-green-500" />
                </div>
                <div>
                  <p className="font-black text-slate-900">{item.label}</p>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Last updated: {item.date}</p>
                </div>
              </div>
              <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
                {item.status}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Notifications */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
        <CardHeader className="p-8 pb-4">
          <CardTitle className="text-2xl font-black text-slate-900">Monetization Alerts</CardTitle>
          <CardDescription className="text-slate-500 font-medium">Control what you hear from us.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4 space-y-6">
          {[
            { title: "New Sale Notifications", desc: "Receive an email for every digital product sale.", default: true },
            { title: "Payout Confirmation", desc: "Get notified when a payout has been initiated.", default: true },
            { title: "Subscription Updates", desc: "Weekly summary of new and cancelled subscriptions.", default: false },
          ].map((item) => (
            <div key={item.title} className="flex items-center justify-between py-2">
              <div className="space-y-1">
                <p className="font-black text-slate-900">{item.title}</p>
                <p className="text-sm font-medium text-slate-500">{item.desc}</p>
              </div>
              <Switch defaultChecked={item.default} className="data-[state=checked]:bg-primary" />
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Danger Zone */}
      <div className="pt-10 border-t border-slate-100">
        <div className="bg-red-50/50 rounded-[2.5rem] p-10 border border-red-100 space-y-6">
          <div className="flex items-start gap-4">
            <div className="h-12 w-12 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <AlertTriangle className="h-6 w-6 text-red-600" />
            </div>
            <div className="space-y-1">
              <h3 className="text-xl font-black text-red-900">Pause Monetization</h3>
              <p className="text-red-700/70 font-medium">
                Temporarily disable all subscriptions and product sales. This will not affect existing content but will prevent new purchases.
              </p>
            </div>
          </div>
          <Button variant="destructive" className="h-14 px-8 rounded-2xl font-black text-base shadow-xl shadow-red-200">
            Pause All Revenue Streams
          </Button>
        </div>
      </div>
    </div>
  )
}
