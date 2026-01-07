"use client"

import { 
  Settings2, 
  User, 
  Bell, 
  Shield, 
  CreditCard, 
  Globe, 
  Mail, 
  Camera,
  Zap,
  HelpCircle,
  LogOut
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export function CreatorSettingsPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 rounded-2xl bg-slate-900 flex items-center justify-center shadow-2xl shadow-slate-200">
            <Settings2 className="h-7 w-7 text-white" />
          </div>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Settings</h1>
            <p className="text-slate-500 font-medium text-sm">Manage your account and preferences</p>
          </div>
        </div>
        <Button className="h-12 px-8 rounded-xl font-bold shadow-xl shadow-primary/20">
          Save Changes
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
        {/* Settings Navigation */}
        <Card className="lg:col-span-1 border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden h-fit">
          <CardContent className="p-4">
            <div className="space-y-1">
              {[
                { label: "Profile", icon: User, active: true },
                { label: "Notifications", icon: Bell },
                { label: "Security", icon: Shield },
                { label: "Billing", icon: CreditCard },
                { label: "Connected Apps", icon: Zap },
                { label: "Language", icon: Globe },
              ].map((item) => (
                <Button 
                  key={item.label}
                  variant="ghost" 
                  className={`w-full justify-start h-12 rounded-xl font-bold px-4 transition-all ${
                    item.active ? 'bg-primary/10 text-primary shadow-sm shadow-primary/5' : 'text-slate-500 hover:bg-slate-50 hover:text-slate-900'
                  }`}
                >
                  <item.icon className="h-4 w-4 mr-3" />
                  {item.label}
                </Button>
              ))}
            </div>
            <div className="pt-4 mt-4 border-t border-slate-50">
              <Button variant="ghost" className="w-full justify-start h-12 rounded-xl font-bold px-4 text-red-500 hover:bg-red-50 hover:text-red-600">
                <LogOut className="h-4 w-4 mr-3" />
                Sign Out
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Settings Content */}
        <div className="lg:col-span-3 space-y-10">
          {/* Profile Section */}
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black text-slate-900">Profile Information</CardTitle>
              <CardDescription className="font-medium text-slate-500">Update your personal details and public profile</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-8">
              <div className="flex items-center gap-8 py-6">
                <div className="relative group">
                  <Avatar className="h-24 w-24 border-4 border-slate-50 shadow-xl group-hover:border-primary/20 transition-all duration-500">
                    <AvatarImage src="https://i.pravatar.cc/150?u=creator" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <Button size="icon" className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-lg shadow-primary/20 bg-primary border-4 border-white">
                    <Camera className="h-3 w-3 text-white" />
                  </Button>
                </div>
                <div>
                  <h4 className="font-black text-slate-900">Profile Photo</h4>
                  <p className="text-xs text-slate-400 font-medium mt-1">PNG or JPG, max 5MB. Recommended size 400x400.</p>
                  <div className="flex gap-3 mt-4">
                    <Button variant="outline" size="sm" className="rounded-lg font-bold border-slate-200">Upload New</Button>
                    <Button variant="ghost" size="sm" className="rounded-lg font-bold text-red-500 hover:bg-red-50">Remove</Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Full Name</Label>
                  <Input defaultValue="John Doe" className="h-12 bg-slate-50 border-none rounded-xl font-bold px-4 focus-visible:ring-primary/20" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Display Name</Label>
                  <Input defaultValue="JohnDoeTV" className="h-12 bg-slate-50 border-none rounded-xl font-bold px-4 focus-visible:ring-primary/20" />
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Email Address</Label>
                  <div className="relative group">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input defaultValue="john@example.com" className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-bold focus-visible:ring-primary/20" />
                  </div>
                </div>
                <div className="space-y-3">
                  <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Website</Label>
                  <div className="relative group">
                    <Globe className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                    <Input defaultValue="https://johndoe.tv" className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-bold focus-visible:ring-primary/20" />
                  </div>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Bio</Label>
                <Input defaultValue="Tech reviewer and gaming enthusiast sharing my passion with the world." className="h-12 bg-slate-50 border-none rounded-xl font-bold px-4 focus-visible:ring-primary/20" />
              </div>
            </CardContent>
          </Card>

          {/* Preferences Section */}
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-8 pb-4">
              <CardTitle className="text-xl font-black text-slate-900">Preferences</CardTitle>
              <CardDescription className="font-medium text-slate-500">Configure your channel experience</CardDescription>
            </CardHeader>
            <CardContent className="p-8 pt-0 space-y-6">
              {[
                { title: "Public Profile", desc: "Make your profile visible to everyone", icon: Globe, enabled: true },
                { title: "Push Notifications", desc: "Receive alerts about activity and messages", icon: Bell, enabled: true },
                { title: "Two-Factor Auth", desc: "Add an extra layer of security to your account", icon: Shield, enabled: false },
                { title: "Show Earnings", desc: "Display your revenue on the public leaderboard", icon: CreditCard, enabled: false },
              ].map((pref) => (
                <div key={pref.title} className="flex items-center justify-between p-6 rounded-3xl bg-slate-50/50 border border-slate-100 group hover:border-primary/30 transition-all cursor-pointer">
                  <div className="flex items-center gap-6">
                    <div className="h-12 w-12 rounded-2xl bg-white shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <pref.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{pref.title}</p>
                      <p className="text-sm text-slate-500 font-medium">{pref.desc}</p>
                    </div>
                  </div>
                  <Switch defaultChecked={pref.enabled} className="data-[state=checked]:bg-primary" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Help & Support Banner */}
          <div className="bg-gradient-to-br from-primary to-primary-foreground rounded-[2.5rem] p-10 text-white relative overflow-hidden group shadow-2xl shadow-primary/20">
            <div className="absolute top-0 right-0 p-8 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
              <HelpCircle className="h-48 w-48" />
            </div>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 relative z-10">
              <div className="space-y-4">
                <h3 className="text-3xl font-black">Need some help?</h3>
                <p className="text-white/80 font-medium max-w-xl leading-relaxed">
                  Our support team is here to help you with any questions about your creator account, payouts, or platform features.
                </p>
              </div>
              <Button className="h-14 px-10 rounded-2xl font-black bg-white text-primary hover:bg-white/90 shadow-xl shadow-black/5 whitespace-nowrap">
                Contact Support
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
