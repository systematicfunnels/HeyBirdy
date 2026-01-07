"use client"

import { 
  Percent, 
  Clock,
  Zap,
  Info
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { AffiliateSettingSwitch } from "@/components/creator/affiliate/affiliate-setting-switch"

export function CreatorAffiliateSettingsPage() {
  return (
    <div className="max-w-4xl space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Affiliate Program</h1>
          <p className="text-slate-500 font-medium">Configure your affiliate network and commission structures.</p>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Program Status:</p>
          <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest px-4 py-1.5 rounded-full">
            Active
          </Badge>
        </div>
      </div>

      {/* Main Commission Structure */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white overflow-hidden">
        <CardHeader className="p-10 pb-4">
          <CardTitle className="text-2xl font-black text-slate-900">Commission Structure</CardTitle>
          <CardDescription className="text-slate-500 font-medium">Set the default rewards for your affiliate partners.</CardDescription>
        </CardHeader>
        <CardContent className="p-10 pt-4 space-y-8">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Percent className="h-3 w-3" /> Standard Commission
              </label>
              <div className="relative">
                <Input 
                  type="number" 
                  placeholder="20" 
                  className="h-14 pl-6 pr-12 rounded-2xl border-slate-100 bg-slate-50 font-black text-lg focus:ring-primary/20"
                />
                <span className="absolute right-6 top-1/2 -translate-y-1/2 font-black text-slate-400">%</span>
              </div>
              <p className="text-[10px] font-bold text-slate-400">Recommended: 15% - 30% for digital products.</p>
            </div>

            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Clock className="h-3 w-3" /> Cookie Duration
              </label>
              <Select defaultValue="30">
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold focus:ring-primary/20">
                  <SelectValue placeholder="Select duration" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100">
                  <SelectItem value="7" className="font-bold rounded-xl">7 Days</SelectItem>
                  <SelectItem value="30" className="font-bold rounded-xl">30 Days (Standard)</SelectItem>
                  <SelectItem value="60" className="font-bold rounded-xl">60 Days</SelectItem>
                  <SelectItem value="90" className="font-bold rounded-xl">90 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="p-6 rounded-[2rem] bg-primary/5 border border-primary/10 flex items-start gap-4">
            <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm shrink-0">
              <Zap className="h-5 w-5 text-primary" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-black text-slate-900 mb-1">Performance Tiers</p>
              <p className="text-xs font-medium text-slate-500 leading-relaxed">
                Automatically increase commission to 25% for affiliates who generate more than $5,000 in monthly sales.
              </p>
            </div>
            <Switch defaultChecked className="data-[state=checked]:bg-primary" />
          </div>
        </CardContent>
      </Card>

      {/* Recruitment & Application */}
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-black text-slate-900">Program Privacy</CardTitle>
            <CardDescription className="text-slate-500 font-medium">Control who can join your program.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-6">
            <div className="space-y-4">
              {[
                { label: "Public Program", desc: "Anyone can apply to join.", default: true },
                { label: "Auto-Approve", desc: "Instantly approve new applications.", default: false },
                { label: "Invite Only", desc: "Only manually invited creators can join.", default: false },
              ].map((item) => (
                <AffiliateSettingSwitch 
                  key={item.label}
                  label={item.label}
                  desc={item.desc}
                  defaultChecked={item.default}
                />
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
          <CardHeader className="p-8 pb-4">
            <CardTitle className="text-xl font-black text-slate-900">Partner Perks</CardTitle>
            <CardDescription className="text-slate-500 font-medium">Additional benefits for your partners.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-4 space-y-6">
            <div className="space-y-4">
              {[
                { label: "Custom Discount Codes", desc: "Let partners create their own codes.", default: true },
                { label: "Early Access", desc: "Partners get 48h early access to products.", default: true },
                { label: "Exclusive Assets", desc: "Access to private marketing materials.", default: true },
              ].map((item) => (
                <AffiliateSettingSwitch 
                  key={item.label}
                  label={item.label}
                  desc={item.desc}
                  defaultChecked={item.default}
                />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Payout & Minimums */}
      <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2.5rem] bg-white">
        <CardHeader className="p-8 pb-4">
          <CardTitle className="text-xl font-black text-slate-900">Payout Rules</CardTitle>
          <CardDescription className="text-slate-500 font-medium">Financial configuration for affiliate payments.</CardDescription>
        </CardHeader>
        <CardContent className="p-8 pt-4 space-y-6">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Minimum Payout Threshold</label>
              <div className="relative">
                <span className="absolute left-6 top-1/2 -translate-y-1/2 font-black text-slate-400">$</span>
                <Input 
                  type="number" 
                  placeholder="50" 
                  className="h-14 pl-12 pr-6 rounded-2xl border-slate-100 bg-slate-50 font-black text-lg focus:ring-primary/20"
                />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs font-black text-slate-400 uppercase tracking-widest">Payment Hold Period</label>
              <Select defaultValue="30">
                <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50 font-bold focus:ring-primary/20">
                  <SelectValue placeholder="Select period" />
                </SelectTrigger>
                <SelectContent className="rounded-2xl border-slate-100">
                  <SelectItem value="15" className="font-bold rounded-xl">15 Days</SelectItem>
                  <SelectItem value="30" className="font-bold rounded-xl">30 Days</SelectItem>
                  <SelectItem value="45" className="font-bold rounded-xl">45 Days</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-100">
            <Info className="h-5 w-5 text-slate-400" />
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">
              Hold periods help prevent payouts for products that are later refunded.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Save Changes */}
      <div className="flex items-center justify-between p-10 rounded-[2.5rem] bg-slate-900 text-white shadow-2xl shadow-slate-900/20">
        <div>
          <h3 className="text-xl font-black mb-1">Save Configuration</h3>
          <p className="text-slate-400 font-medium text-sm">Update your program settings across the network.</p>
        </div>
        <Button className="h-14 px-10 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
          Apply Settings
        </Button>
      </div>
    </div>
  )
}
