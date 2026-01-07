"use client"

import { 
  User, 
  Lock, 
  Bell, 
  CreditCard, 
  Eye, 
  Smartphone,
  ChevronRight,
  LogOut,
  Camera
} from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

export function SettingsPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="mb-10">
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Settings</h1>
          <p className="text-slate-500 font-medium">Manage your account settings and preferences.</p>
        </div>

        <Tabs defaultValue="account" className="flex flex-col md:flex-row gap-8">
          {/* Settings Navigation */}
          <TabsList className="bg-transparent h-auto flex flex-col items-stretch p-0 gap-1 w-full md:w-64 shrink-0">
            <TabsTrigger 
              value="account" 
              className="justify-start gap-3 px-4 py-3 h-auto rounded-xl data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:shadow-none font-bold"
            >
              <User className="h-5 w-5" />
              Account
            </TabsTrigger>
            <TabsTrigger 
              value="security" 
              className="justify-start gap-3 px-4 py-3 h-auto rounded-xl data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:shadow-none font-bold"
            >
              <Lock className="h-5 w-5" />
              Security
            </TabsTrigger>
            <TabsTrigger 
              value="notifications" 
              className="justify-start gap-3 px-4 py-3 h-auto rounded-xl data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:shadow-none font-bold"
            >
              <Bell className="h-5 w-5" />
              Notifications
            </TabsTrigger>
            <TabsTrigger 
              value="billing" 
              className="justify-start gap-3 px-4 py-3 h-auto rounded-xl data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:shadow-none font-bold"
            >
              <CreditCard className="h-5 w-5" />
              Billing
            </TabsTrigger>
            <TabsTrigger 
              value="privacy" 
              className="justify-start gap-3 px-4 py-3 h-auto rounded-xl data-[state=active]:bg-primary/5 data-[state=active]:text-primary data-[state=active]:shadow-none font-bold"
            >
              <Eye className="h-5 w-5" />
              Privacy
            </TabsTrigger>
            <div className="h-px bg-slate-100 my-4" />
            <Button variant="ghost" className="justify-start gap-3 px-4 py-3 h-auto rounded-xl text-destructive hover:text-destructive hover:bg-destructive/5 font-bold">
              <LogOut className="h-5 w-5" />
              Sign Out
            </Button>
          </TabsList>

          {/* Settings Content */}
          <div className="flex-1 min-w-0">
            
            {/* Account Settings */}
            <TabsContent value="account" className="mt-0 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Profile Information</CardTitle>
                  <CardDescription className="font-medium">Update your profile details and how others see you.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-8">
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <Avatar className="h-24 w-24 border-4 border-slate-50 shadow-md">
                        <AvatarImage src="https://i.pravatar.cc/150?u=member" />
                        <AvatarFallback>AM</AvatarFallback>
                      </Avatar>
                      <Button size="icon" className="absolute -bottom-1 -right-1 h-8 w-8 rounded-full border-4 border-white">
                        <Camera className="h-4 w-4" />
                      </Button>
                    </div>
                    <div>
                      <h4 className="font-bold mb-1">Profile Photo</h4>
                      <p className="text-xs text-slate-400 mb-3">PNG, JPG or GIF. Max size 2MB.</p>
                      <div className="flex gap-2">
                        <Button variant="outline" size="sm" className="rounded-xl font-bold h-9">Upload New</Button>
                        <Button variant="ghost" size="sm" className="rounded-xl font-bold h-9 text-destructive">Remove</Button>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullname" className="font-bold text-xs uppercase tracking-widest text-slate-400">Full Name</Label>
                      <Input id="fullname" defaultValue="Alex Member" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="username" className="font-bold text-xs uppercase tracking-widest text-slate-400">Username</Label>
                      <Input id="username" defaultValue="alex_m" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="email" className="font-bold text-xs uppercase tracking-widest text-slate-400">Email Address</Label>
                      <Input id="email" type="email" defaultValue="alex@example.com" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="bio" className="font-bold text-xs uppercase tracking-widest text-slate-400">Bio</Label>
                      <Textarea id="bio" placeholder="Tell us about yourself..." className="rounded-xl min-h-[120px] bg-slate-50 border-none focus-visible:ring-primary resize-none" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 bg-slate-50 flex justify-end gap-3">
                  <Button variant="ghost" className="font-bold">Cancel</Button>
                  <Button className="rounded-xl px-8 font-bold">Save Changes</Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black text-destructive">Danger Zone</CardTitle>
                  <CardDescription className="font-medium">Irreversible actions for your account.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="flex items-center justify-between p-6 rounded-3xl border-2 border-destructive/10 bg-destructive/5">
                    <div>
                      <h4 className="font-bold text-destructive mb-1">Delete Account</h4>
                      <p className="text-sm text-slate-500">Once you delete your account, there is no going back. Please be certain.</p>
                    </div>
                    <Button variant="destructive" className="rounded-xl font-bold">Delete Account</Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Security Settings */}
            <TabsContent value="security" className="mt-0 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Password</CardTitle>
                  <CardDescription className="font-medium">Change your password to keep your account secure.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="current-pass" className="font-bold text-xs uppercase tracking-widest text-slate-400">Current Password</Label>
                    <Input id="current-pass" type="password" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="new-pass" className="font-bold text-xs uppercase tracking-widest text-slate-400">New Password</Label>
                      <Input id="new-pass" type="password" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="confirm-pass" className="font-bold text-xs uppercase tracking-widest text-slate-400">Confirm New Password</Label>
                      <Input id="confirm-pass" type="password" className="rounded-xl h-12 bg-slate-50 border-none focus-visible:ring-primary" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 bg-slate-50 flex justify-end">
                  <Button className="rounded-xl px-8 font-bold">Update Password</Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Two-Factor Authentication</CardTitle>
                  <CardDescription className="font-medium">Add an extra layer of security to your account.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
                        <Smartphone className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Authenticator App</h4>
                        <p className="text-sm text-slate-500">Use an app like Google Authenticator or 1Password.</p>
                      </div>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Notifications Settings */}
            <TabsContent value="notifications" className="mt-0 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Email Notifications</CardTitle>
                  <CardDescription className="font-medium">Decide which emails you&apos;d like to receive.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  {[
                    { title: "Course Updates", desc: "Get notified when courses you&apos;re enrolled in are updated." },
                    { title: "Community Activity", desc: "Notifications for mentions, replies, and new posts in your hubs." },
                    { title: "Promotions", desc: "Stay informed about new courses, features, and special offers." },
                    { title: "Weekly Digest", desc: "A summary of your progress and trending content from the week." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <Switch defaultChecked={i < 2} />
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Push Notifications</CardTitle>
                  <CardDescription className="font-medium">Manage notifications on your desktop and mobile devices.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                   <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50">
                    <div>
                      <h4 className="font-bold mb-1">Enable Push Notifications</h4>
                      <p className="text-sm text-slate-500">Receive real-time alerts on your device.</p>
                    </div>
                    <Switch />
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Billing Settings */}
            <TabsContent value="billing" className="mt-0 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden bg-slate-900 text-white">
                <CardHeader className="p-8 pb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-black">Current Plan</CardTitle>
                      <CardDescription className="text-slate-400 font-medium">You are currently on the Pro Member plan.</CardDescription>
                    </div>
                    <div className="bg-primary px-4 py-2 rounded-xl font-black text-xs uppercase tracking-widest">PRO</div>
                  </div>
                </CardHeader>
                <CardContent className="p-8 pt-4">
                  <div className="flex items-end gap-2 mb-6">
                    <span className="text-5xl font-black">$29</span>
                    <span className="text-slate-400 font-bold mb-2">/ month</span>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      Unlimited course access
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      Priority community support
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      Exclusive member badges
                    </div>
                    <div className="flex items-center gap-3 text-sm font-medium">
                      <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                        <ChevronRight className="h-3 w-3" />
                      </div>
                      Early access to new content
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="p-8 bg-white/5 border-t border-white/5 flex justify-between items-center">
                  <p className="text-xs font-bold text-slate-400">Next billing date: Feb 12, 2026</p>
                  <Button variant="outline" className="border-white/20 hover:bg-white/10 text-white font-bold rounded-xl">Manage Subscription</Button>
                </CardFooter>
              </Card>

              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Payment Methods</CardTitle>
                  <CardDescription className="font-medium">Manage how you pay for your subscription and courses.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-4">
                  <div className="flex items-center justify-between p-6 rounded-3xl border border-slate-100 group hover:border-primary transition-colors cursor-pointer">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                        <CreditCard className="h-6 w-6 text-slate-400" />
                      </div>
                      <div>
                        <h4 className="font-bold mb-1">Visa ending in 4242</h4>
                        <p className="text-sm text-slate-500">Expires 12/28 • Default method</p>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="font-bold text-xs uppercase tracking-widest text-slate-400">Edit</Button>
                  </div>
                  <Button variant="outline" className="w-full py-8 border-dashed border-2 rounded-3xl font-black text-xs uppercase tracking-widest text-slate-400 hover:text-primary hover:border-primary hover:bg-primary/5 transition-all">
                    Add New Payment Method
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Privacy Settings */}
            <TabsContent value="privacy" className="mt-0 space-y-8">
              <Card className="border-none shadow-xl rounded-[2rem] overflow-hidden">
                <CardHeader className="p-8 pb-4">
                  <CardTitle className="text-xl font-black">Privacy Preferences</CardTitle>
                  <CardDescription className="font-medium">Control your visibility and data sharing.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 pt-4 space-y-6">
                  {[
                    { title: "Public Profile", desc: "Allow anyone to see your profile and activity." },
                    { title: "Show Earnings", desc: "Display your total earnings on your public profile." },
                    { title: "Direct Messages", desc: "Allow other members to send you direct messages." },
                    { title: "Search Indexing", desc: "Allow search engines to index your profile." }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center justify-between py-4 border-b border-slate-50 last:border-0">
                      <div>
                        <h4 className="font-bold mb-1">{item.title}</h4>
                        <p className="text-sm text-slate-500">{item.desc}</p>
                      </div>
                      <Switch defaultChecked={i !== 1} />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

          </div>
        </Tabs>
      </div>
    </div>
  )
}
