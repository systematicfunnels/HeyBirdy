"use client"

import { 
  PlayCircle, 
  Lightbulb, 
  Award,
  ChevronRight,
  Search,
  CheckCircle2,
  Clock,
  Video,
  Star,
  Zap,
  Users
} from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"

const COURSES = [
  {
    id: "c1",
    title: "Affiliate Marketing 101: The Blueprint",
    description: "The complete roadmap for beginners. Master the core principles of high-ticket affiliate marketing.",
    duration: "2h 15m",
    lessons: 12,
    progress: 100,
    status: "Completed",
    category: "Fundamentals",
    level: "Beginner",
    instructor: "Sarah Jenkins",
    rating: 4.9,
    students: 1240,
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c2",
    title: "Advanced SEO & Traffic Mastery",
    description: "Learn how to dominate search results and drive 100k+ organic visitors to your links every month.",
    duration: "4h 45m",
    lessons: 24,
    progress: 45,
    status: "In Progress",
    category: "Traffic",
    level: "Advanced",
    instructor: "Michael Chen",
    rating: 4.8,
    students: 850,
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c3",
    title: "Psychology of High-Ticket Sales",
    description: "The hidden triggers that convert cold leads into $1,000+ commissions using proven sales funnels.",
    duration: "3h 20m",
    lessons: 18,
    progress: 0,
    status: "Not Started",
    category: "Sales",
    level: "Intermediate",
    instructor: "David Miller",
    rating: 5.0,
    students: 520,
    image: "https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: "c4",
    title: "Email Marketing Automation",
    description: "Build a profitable email list that prints money on autopilot while you sleep.",
    duration: "2h 50m",
    lessons: 15,
    progress: 0,
    status: "Not Started",
    category: "Automation",
    level: "Intermediate",
    instructor: "Emma Wilson",
    rating: 4.7,
    students: 2100,
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=60",
  }
]

const QUICK_TIPS = [
  { title: "Optimize your bio links for 3x clicks", icon: Lightbulb, color: "text-yellow-500", time: "2 min read" },
  { title: "The 'Golden Hour' for X engagement", icon: Clock, color: "text-blue-500", time: "5 min read" },
  { title: "Legally disclosing affiliate links", icon: Award, color: "text-green-500", time: "3 min read" },
]

export function AffiliateLearningPage() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="relative rounded-[3rem] bg-slate-900 p-8 md:p-20 overflow-hidden text-white shadow-[0_32px_64px_-15px_rgba(0,0,0,0.5)] group">
        <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-20 group-hover:opacity-30 transition-opacity duration-700">
          <Image 
            src="https://images.unsplash.com/photo-1557838923-2985c318be48?w=1200&auto=format&fit=crop&q=60" 
            alt="hero" 
            fill
            className="w-full h-full object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        
        <div className="relative z-10 max-w-2xl space-y-8">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1.5 font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-lg shadow-primary/20">
              New Masterclass
            </Badge>
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-4 tracking-tighter leading-[0.9]">
            Master the <br /><span className="text-primary">Affiliate Game</span>
          </h1>
          
          <p className="text-xl text-slate-400 mb-8 leading-relaxed font-medium">
            From beginner to pro, our expert-led curriculum gives you the exact strategies top affiliates use to earn 6 and 7 figures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1 group/search">
              <div className="absolute inset-0 bg-white/5 rounded-2xl blur-xl opacity-0 group-focus-within/search:opacity-100 transition-opacity" />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500 group-focus-within/search:text-primary transition-colors" />
              <Input 
                placeholder="Search courses, guides, skills..." 
                className="bg-white/5 border-white/10 text-white pl-12 h-16 rounded-2xl focus-visible:ring-primary/30 backdrop-blur-md text-lg font-medium placeholder:text-slate-600"
              />
            </div>
            <Button size="lg" className="h-16 px-10 rounded-2xl font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/40 hover:scale-105 transition-all">
              Search
            </Button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-3 space-y-16">
          
          {/* Resume Learning Section */}
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-3">
                  <Zap className="h-8 w-8 text-primary fill-primary/10" />
                  Resume Learning
                </h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
            </div>
            
            <Card className="bg-white border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.1)] rounded-[2.5rem] overflow-hidden group/resume">
              <CardContent className="p-0">
                <div className="flex flex-col md:flex-row items-stretch">
                  <div className="relative w-full md:w-80 shrink-0 overflow-hidden">
                    <Image 
                      src={COURSES[1].image} 
                      alt="Current Course" 
                      fill
                      className="object-cover w-full h-full group-hover/resume:scale-110 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-slate-900/40 flex items-center justify-center opacity-0 group-hover/resume:opacity-100 transition-all cursor-pointer">
                      <div className="h-16 w-16 rounded-full bg-primary flex items-center justify-center shadow-2xl scale-75 group-hover/resume:scale-100 transition-transform duration-500">
                        <PlayCircle className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <Badge className="bg-primary text-white border-none font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                        In Progress
                      </Badge>
                    </div>
                  </div>
                  <div className="flex-1 p-8 md:p-12 space-y-8">
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <span>{COURSES[1].category}</span>
                        <div className="h-1 w-1 rounded-full bg-slate-300" />
                        <span>Lesson 8 of 24</span>
                      </div>
                      <h3 className="text-3xl font-black text-slate-900 group-hover/resume:text-primary transition-colors leading-tight">
                        {COURSES[1].title}
                      </h3>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Overall Progress</span>
                        <span className="text-2xl font-black text-primary">{COURSES[1].progress}%</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)] transition-all duration-1000" 
                          style={{ width: `${COURSES[1].progress}%` }}
                        />
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-4 pt-4">
                      <Button className="h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 hover:scale-105 transition-all">
                        <Video className="h-4 w-4 mr-2" /> Resume Lesson
                      </Button>
                      <Button variant="outline" className="h-14 px-8 rounded-2xl font-black uppercase tracking-widest text-[10px] border-slate-100 hover:bg-slate-50">
                        View Curriculum
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Course Library */}
          <Tabs defaultValue="all" className="w-full space-y-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Course Library</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              <TabsList className="bg-white p-1.5 rounded-[1.5rem] border border-slate-100 shadow-xl shadow-slate-200/30 h-14">
                {["all", "fundamentals", "traffic", "sales"].map((tab) => (
                  <TabsTrigger 
                    key={tab}
                    value={tab} 
                    className="rounded-xl font-black text-[10px] uppercase tracking-widest px-6 data-[state=active]:bg-slate-900 data-[state=active]:text-white transition-all"
                  >
                    {tab}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>

            <TabsContent value="all" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {COURSES.map((course) => (
                  <Card key={course.id} className="overflow-hidden border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.08)] group hover:shadow-primary/10 transition-all duration-500 rounded-[2.5rem] bg-white flex flex-col">
                    <div className="relative aspect-video overflow-hidden">
                      <Image 
                        src={course.image} 
                        alt={course.title} 
                        fill
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                          {course.category}
                        </Badge>
                        <Badge className="bg-primary text-white border-none font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
                          {course.level}
                        </Badge>
                      </div>
                      {course.status === 'Completed' && (
                        <div className="absolute top-4 right-4 h-10 w-10 bg-green-500 rounded-full flex items-center justify-center text-white shadow-xl">
                          <CheckCircle2 className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    
                    <CardHeader className="p-8 pb-2">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-1.5 text-yellow-500">
                          <Star className="w-3.5 h-3.5 fill-current" />
                          <span className="text-xs font-black text-slate-900">{course.rating.toFixed(1)}</span>
                          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">({course.students.toLocaleString()})</span>
                        </div>
                        <div className="flex items-center gap-2 text-[10px] font-black text-slate-400 uppercase tracking-widest">
                          <Clock className="h-3.5 w-3.5" />
                          {course.duration}
                        </div>
                      </div>
                      <h3 className="font-black text-xl text-slate-900 line-clamp-2 min-h-[3.5rem] leading-tight group-hover:text-primary transition-colors">
                        {course.title}
                      </h3>
                    </CardHeader>
                    
                    <CardFooter className="p-8 pt-4 flex items-center justify-between border-t border-slate-50 mt-auto bg-slate-50/30">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-black text-[10px]">
                          {course.instructor[0]}
                        </div>
                        <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{course.instructor}</span>
                      </div>
                      <Button variant="ghost" className="rounded-xl font-black text-[10px] uppercase tracking-widest h-10 px-0 text-primary hover:bg-transparent group/btn">
                        Details <ChevronRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-12">
          {/* Quick Tips */}
          <div className="space-y-6">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">Quick Strategies</h3>
            <div className="space-y-4">
              {QUICK_TIPS.map((tip, i) => (
                <div key={i} className="bg-white p-5 rounded-[1.5rem] shadow-xl shadow-slate-200/50 hover:shadow-primary/10 transition-all group cursor-pointer border-none flex gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    <tip.icon className={`h-6 w-6 ${tip.color}`} />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{tip.title}</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{tip.time}</span>
                  </div>
                </div>
              ))}
              <Button variant="outline" className="w-full h-14 rounded-2xl font-black text-[10px] uppercase tracking-widest border-slate-100 hover:bg-slate-50">
                Knowledge Base
              </Button>
            </div>
          </div>

          {/* Progress Card */}
          <div className="bg-slate-900 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/20">
            <div className="p-8 bg-primary text-white">
              <h3 className="font-black text-lg uppercase tracking-widest flex items-center gap-3">
                <Award className="h-6 w-6" /> Your Progress
              </h3>
            </div>
            <div className="p-8 space-y-8">
              {[
                { label: "Courses Finished", value: "4 / 12", icon: CheckCircle2 },
                { label: "Total Hours", value: "12.5h", icon: Clock },
                { label: "Certificates", value: "2", icon: Award },
              ].map((stat, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <stat.icon className="h-4 w-4 text-slate-500" />
                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{stat.label}</span>
                  </div>
                  <span className="text-lg font-black text-white">{stat.value}</span>
                </div>
              ))}
              
              <div className="pt-8 border-t border-white/10 space-y-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest">Next Reward</span>
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/5">
                  <div className="h-10 w-10 rounded-xl bg-primary/20 flex items-center justify-center">
                    <Zap className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs font-black text-white leading-tight">SEO Playbook <br /><span className="text-slate-500 font-bold">Unlocks at Level 5</span></span>
                </div>
              </div>
            </div>
          </div>

          {/* Community Card */}
          <div className="bg-primary/5 rounded-[2.5rem] p-10 text-center space-y-6 border border-primary/10 relative overflow-hidden group">
            <div className="absolute -top-10 -right-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
              <Users className="h-40 w-40" />
            </div>
            <div className="h-20 w-20 bg-white rounded-3xl shadow-xl flex items-center justify-center mx-auto relative z-10">
              <Users className="h-10 w-10 text-primary" />
            </div>
            <div className="space-y-2 relative z-10">
              <h3 className="font-black text-xl text-slate-900">Affiliate Squad</h3>
              <p className="text-sm font-medium text-slate-500">Connect with 5,000+ top performing affiliates.</p>
            </div>
            <Button className="w-full h-14 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-xl shadow-primary/20 relative z-10">
              Join the Discord
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
