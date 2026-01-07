import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, BookOpen } from "lucide-react"
import { cn } from "@/lib/utils/helpers"

interface CourseCardProps {
  title: string
  instructor: string
  thumbnail: string
  rating: number
  students: number
  lessons: number
  duration: string
  price: number
  category: string
  className?: string
}

export function CourseCard({
  title,
  instructor,
  thumbnail,
  rating,
  students,
  lessons,
  duration,
  price,
  category,
  className
}: CourseCardProps) {
  return (
    <Card className={cn("overflow-hidden group border-none shadow-2xl shadow-slate-200/50 hover:shadow-primary/10 transition-all duration-500 rounded-[2rem] bg-white flex flex-col", className)}>
      <div className="relative aspect-video overflow-hidden">
        <Image 
          src={thumbnail} 
          alt={title} 
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700" 
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute top-4 left-4">
          <Badge className="bg-white/20 backdrop-blur-md text-white border-none font-black text-[9px] uppercase tracking-widest px-3 py-1 rounded-full">
            {category}
          </Badge>
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
          <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/40">
            <BookOpen className="h-5 w-5 text-white" />
          </div>
        </div>
      </div>
      
      <CardHeader className="p-6 pb-2">
        <div className="flex items-center gap-1.5 text-yellow-500 mb-3">
          <Star className="w-3.5 h-3.5 fill-current" />
          <span className="text-xs font-black text-slate-900">{rating.toFixed(1)}</span>
          <span className="text-[10px] text-slate-400 font-bold uppercase tracking-widest ml-1">({students.toLocaleString()} students)</span>
        </div>
        <h3 className="font-black text-lg text-slate-900 line-clamp-2 min-h-[3rem] leading-[1.2] group-hover:text-primary transition-colors tracking-tight">
          {title}
        </h3>
        <p className="text-xs font-medium text-slate-500 mt-2">
          by <span className="font-bold text-slate-900">{instructor}</span>
        </p>
      </CardHeader>
      
      <CardContent className="p-6 pt-0 pb-6 flex-1">
        <div className="flex items-center gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-4">
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-primary" />
            <span>{lessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-1.5 w-1.5 rounded-full bg-slate-200" />
            <span>{duration}</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-6 pt-0 flex items-center justify-between border-t border-slate-50 mt-auto bg-slate-50/30">
        <div className="text-2xl font-black text-slate-900 tracking-tighter">
          {price === 0 ? "FREE" : `$${price.toFixed(2)}`}
        </div>
        <Button size="sm" className="rounded-xl font-black text-[10px] uppercase tracking-widest h-10 px-6 shadow-lg shadow-primary/10 group-hover:shadow-primary/20 transition-all">
          Enroll Now
        </Button>
      </CardFooter>
    </Card>
  )
}
