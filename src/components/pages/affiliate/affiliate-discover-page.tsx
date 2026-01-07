"use client"

import { 
  Search, 
  Filter, 
  Star, 
  TrendingUp, 
  Award, 
  Zap,
  ChevronRight,
  ExternalLink,
  Users,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

const CATEGORIES = [
  "All", "Tech", "Lifestyle", "Education", "Fitness", "Gaming", "Finance", "Art"
]

const FEATURED_PROGRAMS = [
  {
    id: "f1",
    name: "Digital Art Mastery",
    creator: "Elena Frost",
    commission: "25%",
    avgEarnings: "$450/mo",
    rating: "4.9",
    category: "Art",
    description: "The #1 digital art course on the platform. High conversion rates and recurring commissions.",
    image: "https://i.pravatar.cc/150?u=elena",
  },
  {
    id: "f2",
    name: "Full-Stack Bootcamp",
    creator: "Sarah Chen",
    commission: "20%",
    avgEarnings: "$1,200/mo",
    rating: "4.8",
    category: "Education",
    description: "Comprehensive coding bootcamp with lifetime access. Excellent for tech-focused affiliates.",
    image: "https://i.pravatar.cc/150?u=sarah",
  }
]

const ALL_PROGRAMS = [
  {
    id: "1",
    name: "Elite Gaming Gear",
    creator: "Alex Rivera",
    commission: "15%",
    rating: "4.7",
    category: "Gaming",
    clicks: "12K+",
    image: "https://i.pravatar.cc/150?u=alex",
  },
  {
    id: "2",
    name: "Fitness Transformation",
    creator: "Coach Mike",
    commission: "15%",
    rating: "4.7",
    category: "Health",
    clicks: "8K+",
    image: "https://i.pravatar.cc/150?u=mike",
  },
  {
    id: "3",
    name: "Minimalist Living",
    creator: "Leo Babauta",
    commission: "30%",
    rating: "4.5",
    category: "Lifestyle",
    clicks: "5K+",
    image: "https://i.pravatar.cc/150?u=leo",
  },
  {
    id: "4",
    name: "AI Strategy Guide",
    creator: "Dr. Aris",
    commission: "40%",
    rating: "4.9",
    category: "Tech",
    clicks: "15K+",
    image: "https://i.pravatar.cc/150?u=aris",
  },
  {
    id: "5",
    name: "Stock Market Pro",
    creator: "Wall St. Weekly",
    commission: "10%",
    rating: "4.6",
    category: "Finance",
    clicks: "20K+",
    image: "https://i.pravatar.cc/150?u=wall",
  },
  {
    id: "6",
    name: "Mastering Piano",
    creator: "Julianne Moore",
    commission: "20%",
    rating: "4.8",
    category: "Music",
    clicks: "3K+",
    image: "https://i.pravatar.cc/150?u=julianne",
  },
]

export function AffiliateDiscoverPage() {
  return (
    <div className="space-y-8 pb-10">
      {/* Hero Section */}
      <div className="relative rounded-3xl bg-primary p-8 md:p-12 overflow-hidden text-primary-foreground">
        <div className="absolute top-0 right-0 p-4 opacity-10">
          <TrendingUp className="h-48 w-48" />
        </div>
        <div className="relative z-10 max-w-2xl">
          <Badge className="bg-white/20 hover:bg-white/30 text-white border-none mb-4">New Programs Weekly</Badge>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">Find Your Next Big Partnership</h1>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Discover high-converting affiliate programs from top creators and start earning commissions today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-primary" />
              <Input 
                placeholder="Search programs, creators, or niches..." 
                className="bg-white text-foreground pl-10 h-12 border-none rounded-xl"
              />
            </div>
            <Button size="lg" variant="secondary" className="h-12 px-8 rounded-xl font-bold">Search</Button>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {CATEGORIES.map((category) => (
          <Button 
            key={category} 
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className="rounded-full px-6 h-9 shrink-0"
          >
            {category}
          </Button>
        ))}
        <Button variant="ghost" size="sm" className="gap-2 shrink-0">
          <Filter className="h-4 w-4" /> More Filters
        </Button>
      </div>

      {/* Featured Programs */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <Award className="h-6 w-6 text-primary" /> Featured Opportunities
          </h2>
          <Button variant="ghost" className="gap-2">
            View All <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {FEATURED_PROGRAMS.map((program) => (
            <Card key={program.id} className="overflow-hidden border-none shadow-lg bg-muted/30 group">
              <div className="flex flex-col sm:flex-row">
                <div className="sm:w-1/3 h-48 sm:h-auto relative overflow-hidden">
                  <Image 
                    src={program.image} 
                    alt={program.name} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-2 left-2">
                    <Badge className="bg-white/90 text-primary border-none">{program.category}</Badge>
                  </div>
                </div>
                <div className="sm:w-2/3 p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-bold">{program.rating}</span>
                    </div>
                    <Badge variant="outline" className="text-primary border-primary/20">{program.commission} Comm.</Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-1">{program.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1">{program.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <div className="flex items-center gap-2">
                      <Avatar className="h-6 w-6">
                        <AvatarImage src={program.image} />
                        <AvatarFallback>{program.creator[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-xs font-medium">{program.creator}</span>
                    </div>
                    <Button size="sm" className="gap-2">
                      Join Program <Zap className="h-3 w-3 fill-current" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* All Programs Grid */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-bold">Recommended for You</h2>
            <p className="text-sm text-muted-foreground">Based on your audience and interests.</p>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground">Sort by:</span>
            <Button variant="outline" size="sm" className="rounded-lg h-9">Highest Commission</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ALL_PROGRAMS.map((program) => (
            <Card key={program.id} className="border-none shadow-md hover:shadow-xl transition-all duration-300">
              <CardHeader className="flex flex-row items-start justify-between space-y-0 pb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-10 w-10 border">
                    <AvatarImage src={program.image} />
                    <AvatarFallback>{program.creator[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle className="text-base font-bold leading-none">{program.name}</CardTitle>
                    <CardDescription className="text-xs mt-1">by {program.creator}</CardDescription>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-primary/5 text-primary border-none">{program.commission}</Badge>
              </CardHeader>
              <CardContent className="pb-4">
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold">{program.rating}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Users className="h-3 w-3" />
                      <span>{program.clicks} clicks</span>
                    </div>
                  </div>
                  <Badge className="bg-muted text-muted-foreground hover:bg-muted font-medium border-none">{program.category}</Badge>
                </div>
              </CardContent>
              <CardFooter className="pt-0">
                <Button variant="outline" className="w-full group rounded-xl">
                  Details <ExternalLink className="h-3 w-3 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="flex justify-center pt-8">
          <Button variant="outline" size="lg" className="rounded-2xl px-12 border-2">
            Load More Programs
          </Button>
        </div>
      </section>
    </div>
  )
}
