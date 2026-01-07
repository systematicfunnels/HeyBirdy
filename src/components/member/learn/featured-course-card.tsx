"use client"

import Image from "next/image"
import { PlayCircle, Clock, Star, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export interface FeaturedCourse {
  id: string
  title: string
  instructor: string
  thumbnail: string
  rating: number
  students: number
  lessons: number
  duration: string
  price: number
  category: string
  description: string
}

interface FeaturedCourseCardProps {
  course: FeaturedCourse
}

export function FeaturedCourseCard({ course }: FeaturedCourseCardProps) {
  return (
    <Card className="mb-16 overflow-hidden border-none shadow-[0_32px_64px_-15px_rgba(0,0,0,0.3)] bg-slate-900 text-white relative group rounded-[3rem]">
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full opacity-40 group-hover:opacity-50 transition-opacity duration-700">
        <Image 
          src={course.thumbnail} 
          alt="featured" 
          fill
          className="object-cover scale-105 group-hover:scale-110 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 lg:via-slate-900/60 to-transparent" />
      </div>
      
      <CardContent className="p-8 md:p-16 relative z-10 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8">
          <div className="flex items-center gap-3">
            <Badge className="bg-primary hover:bg-primary text-white border-none px-4 py-1.5 font-black text-[10px] uppercase tracking-[0.2em] rounded-full shadow-lg shadow-primary/20">
              Featured Course
            </Badge>
            <div className="h-1 w-12 bg-primary/30 rounded-full" />
          </div>
          
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-[1.1]">
            {course.title.split(':').map((part, i) => (
              <span key={i} className={i === 1 ? "text-primary block mt-2" : ""}>
                {i === 1 ? `: ${part}` : part}
              </span>
            ))}
          </h2>
          
          <p className="text-slate-400 text-lg md:text-xl max-w-xl leading-relaxed font-medium">
            {course.description}
          </p>
          
          <div className="flex flex-wrap gap-8 text-[11px] font-black uppercase tracking-widest text-slate-300">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                <PlayCircle className="h-5 w-5 text-primary" />
              </div>
              <span>{course.lessons} Lessons</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <span>{course.duration}</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-primary/50 transition-colors">
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
              </div>
              <span>{course.rating} Rating</span>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-4 pt-6">
            <Button size="lg" className="h-16 px-10 rounded-2xl font-black text-sm uppercase tracking-widest shadow-2xl shadow-primary/40 hover:scale-105 transition-all active:scale-95 bg-primary text-white">
              Start Learning Now
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="h-16 px-10 rounded-2xl font-black text-sm uppercase tracking-widest bg-white/5 border-white/10 hover:bg-white/10 text-white backdrop-blur-md">
              View Curriculum
            </Button>
          </div>
        </div>
        
        <div className="hidden lg:block w-[400px] aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-[0_0_80px_rgba(0,0,0,0.5)] border-8 border-white/5 relative group/img">
          <Image 
            src={course.thumbnail} 
            alt="preview" 
            fill
            className="object-cover group-hover/img:scale-110 transition-transform duration-1000"
          />
          <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
            <div className="h-20 w-20 rounded-full bg-white flex items-center justify-center shadow-2xl scale-75 group-hover/img:scale-100 transition-transform duration-500">
              <PlayCircle className="h-10 w-10 text-primary fill-primary/10" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
