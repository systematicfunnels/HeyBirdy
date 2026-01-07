"use client"

import Image from "next/image"
import { 
  Search, 
  Filter, 
  Star, 
  PlayCircle,
  TrendingUp,
  GraduationCap,
  Flame
} from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CourseCard } from "@/components/shared/content/course-card"
import { FeaturedCourseCard } from "@/components/member/learn/featured-course-card"

const CATEGORIES = ["All", "Marketing", "Content Creation", "Finance", "Business", "Design", "Tech"]

const FEATURED_COURSE = {
  id: "feat-1",
  title: "The Ultimate Creator Masterclass: From 0 to 1M",
  instructor: "Alex Rivera",
  thumbnail: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&auto=format&fit=crop&q=60",
  rating: 4.9,
  students: 15420,
  lessons: 48,
  duration: "12h 30m",
  price: 0,
  category: "Featured",
  description: "Learn the exact strategies used by top 1% creators to build, scale, and monetize their personal brand from scratch."
}

const COURSES = [
  {
    id: "1",
    title: "Affiliate Marketing Mastery",
    instructor: "Sarah Jenkins",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    students: 3200,
    lessons: 24,
    duration: "6h 45m",
    price: 49.99,
    category: "Marketing"
  },
  {
    id: "2",
    title: "Video Editing for Viral Content",
    instructor: "Mike Ross",
    thumbnail: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop&q=60",
    rating: 4.7,
    students: 5100,
    lessons: 32,
    duration: "8h 15m",
    price: 79.99,
    category: "Content Creation"
  },
  {
    id: "3",
    title: "Financial Freedom for Creators",
    instructor: "David Chen",
    thumbnail: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    students: 2800,
    lessons: 18,
    duration: "5h 20m",
    price: 99.99,
    category: "Finance"
  },
  {
    id: "4",
    title: "The Art of Storytelling",
    instructor: "Emma Wilson",
    thumbnail: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&auto=format&fit=crop&q=60",
    rating: 4.6,
    students: 4200,
    lessons: 15,
    duration: "4h 10m",
    price: 29.99,
    category: "Design"
  },
  {
    id: "5",
    title: "Building Scalable Communities",
    instructor: "Chris Anderson",
    thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&auto=format&fit=crop&q=60",
    rating: 4.8,
    students: 1900,
    lessons: 21,
    duration: "7h 30m",
    price: 59.99,
    category: "Business"
  },
  {
    id: "6",
    title: "AI Tools for Productivity",
    instructor: "Jessica Lee",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&auto=format&fit=crop&q=60",
    rating: 4.9,
    students: 8400,
    lessons: 12,
    duration: "3h 45m",
    price: 39.99,
    category: "Tech"
  }
]

export function LearnPage() {
  return (
    <div className="bg-[#f8fafc] min-h-screen">
      <div className="container mx-auto px-4 py-12">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <GraduationCap className="h-5 w-5 text-primary" />
              </div>
              <span className="text-primary font-black uppercase tracking-[0.2em] text-[10px]">Learning Hub</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-slate-900 leading-[0.9]">
              Master Your <br /><span className="text-primary">Creative Craft</span>
            </h1>
            <p className="text-xl text-slate-500 max-w-2xl font-medium leading-relaxed">
              Access world-class courses from top creators and industry experts. <br className="hidden md:block" />
              Learn at your own pace and earn industry-recognized certificates.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white px-6 py-3 rounded-[2rem] flex items-center gap-3 border border-slate-100 shadow-xl shadow-slate-200/50">
              <div className="h-8 w-8 rounded-full bg-orange-500/10 flex items-center justify-center">
                <Flame className="h-4 w-4 text-orange-500 fill-orange-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-black text-xs text-slate-900 leading-none">5 Day Streak!</span>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Keep it up</span>
              </div>
            </div>
            <Button size="lg" className="h-16 px-8 rounded-[2rem] font-black uppercase tracking-widest text-xs shadow-2xl shadow-primary/20 hover:scale-105 transition-all">
              My Learning
            </Button>
          </div>
        </div>

        {/* Featured Course */}
        <FeaturedCourseCard course={FEATURED_COURSE} />

        {/* Filters and Search */}
        <div className="flex flex-col lg:flex-row gap-8 mb-16 items-center justify-between">
          <div className="relative w-full lg:w-[500px] group">
            <div className="absolute inset-0 bg-primary/5 rounded-[2rem] blur-2xl opacity-0 group-focus-within:opacity-100 transition-opacity" />
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
            <Input 
              placeholder="Search courses, creators, topics..." 
              className="pl-14 h-16 rounded-[2rem] bg-white border-none shadow-xl shadow-slate-200/40 text-lg font-medium focus-visible:ring-2 focus-visible:ring-primary/20 placeholder:text-slate-300"
            />
          </div>
          <div className="flex items-center gap-3 overflow-x-auto pb-4 w-full lg:w-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <Button 
                key={cat} 
                variant={cat === "All" ? "default" : "outline"}
                className={`rounded-2xl font-black text-[10px] uppercase tracking-widest h-12 px-8 shrink-0 transition-all ${
                  cat === "All" 
                    ? "shadow-xl shadow-primary/20 bg-primary" 
                    : "bg-white border-none shadow-lg shadow-slate-200/50 hover:bg-slate-50"
                }`}
              >
                {cat}
              </Button>
            ))}
            <Button variant="outline" className="rounded-2xl font-black text-[10px] uppercase tracking-widest h-12 px-6 shrink-0 bg-white border-none shadow-lg shadow-slate-200/50">
              <Filter className="h-4 w-4 mr-2" /> More
            </Button>
          </div>
        </div>

        {/* Course Grid */}
        <Tabs defaultValue="all" className="w-full space-y-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Recommended for You</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            <TabsList className="bg-white p-1.5 rounded-[1.5rem] border border-slate-100 shadow-lg shadow-slate-200/30 h-14">
              {["all", "trending", "new", "free"].map((tab) => (
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
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {COURSES.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="trending" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {[COURSES[5], COURSES[0], COURSES[2]].map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {/* Learning Paths / Stats */}
        <div className="mt-32 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-3xl font-black text-slate-900 tracking-tight">Your Learning Paths</h2>
                <div className="h-1 w-20 bg-primary rounded-full" />
              </div>
              <Button variant="link" className="font-black text-xs uppercase tracking-widest text-primary">View All Paths</Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "The Content Engine", progress: 65, courses: 4, icon: PlayCircle, color: "text-blue-500", bg: "bg-blue-50" },
                { title: "Affiliate Sales Pro", progress: 20, courses: 6, icon: TrendingUp, color: "text-green-500", bg: "bg-green-50" },
              ].map((path) => (
                <div key={path.title} className="bg-white p-8 rounded-[2.5rem] border-none shadow-2xl shadow-slate-200/50 hover:shadow-primary/10 transition-all group cursor-pointer relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                    <path.icon className="h-24 w-24" />
                  </div>
                  <div className="relative z-10">
                    <div className={`h-14 w-14 rounded-2xl ${path.bg} flex items-center justify-center ${path.color} mb-6`}>
                      <path.icon className="h-7 w-7" />
                    </div>
                    <h4 className="font-black text-2xl text-slate-900 group-hover:text-primary transition-colors mb-2">{path.title}</h4>
                    <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">{path.courses} Courses • {path.progress}% Complete</p>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black text-slate-900 uppercase tracking-widest">Current Progress</span>
                        <span className="text-lg font-black text-primary">{path.progress}%</span>
                      </div>
                      <div className="h-3 w-full bg-slate-100 rounded-full overflow-hidden">
                        <div 
                          className={`h-full transition-all duration-1000 bg-primary shadow-[0_0_15px_rgba(59,130,246,0.5)]`} 
                          style={{ width: `${path.progress}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-1">
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">Top Instructors</h2>
              <div className="h-1 w-20 bg-primary rounded-full" />
            </div>
            
            <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden p-8">
              <div className="space-y-8">
                {[
                  { name: "Alex Rivera", role: "Creator Growth", rating: 4.9, students: "45K+", avatar: "https://i.pravatar.cc/150?u=alex" },
                  { name: "Sarah Jenkins", role: "Marketing Expert", rating: 4.8, students: "32K+", avatar: "https://i.pravatar.cc/150?u=sarah" },
                  { name: "Mike Ross", role: "Video Production", rating: 4.7, students: "28K+", avatar: "https://i.pravatar.cc/150?u=mike" },
                  { name: "Emma Wilson", role: "Storytelling", rating: 4.9, students: "22K+", avatar: "https://i.pravatar.cc/150?u=emma" },
                ].map((teacher) => (
                  <div key={teacher.name} className="flex items-center gap-5 group cursor-pointer">
                    <div className="relative">
                      <div className="relative h-16 w-16 overflow-hidden rounded-[1.25rem]">
                        <Image 
                          src={teacher.avatar} 
                          alt={teacher.name} 
                          fill
                          className="object-cover shadow-xl group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                      <div className="absolute -bottom-2 -right-2 h-7 w-7 bg-primary rounded-full flex items-center justify-center border-4 border-white shadow-lg z-10">
                        <Star className="h-3 w-3 text-white fill-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors text-lg leading-tight">{teacher.name}</h4>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">{teacher.role}</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1.5 justify-end text-yellow-500">
                        <Star className="h-4 w-4 fill-current" />
                        <span className="text-lg font-black text-slate-900">{teacher.rating}</span>
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{teacher.students} students</p>
                    </div>
                  </div>
                ))}
                <Button variant="outline" className="w-full mt-4 h-14 rounded-2xl font-black text-[10px] uppercase tracking-widest border-none bg-slate-50 hover:bg-slate-100 transition-colors">
                  View All Instructors
                </Button>
              </div>
            </Card>
          </div>
        </div>

      </div>
    </div>
  )
}
