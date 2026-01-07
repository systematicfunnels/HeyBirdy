"use client"

import Image from "next/image"
import { useState } from "react"
import { Search, Filter, TrendingUp, Users, Star, ArrowRight, Play, Gamepad2, GraduationCap, Laptop, Music, Palette } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const CATEGORIES = [
  { name: "All", icon: null },
  { name: "Gaming", icon: Gamepad2 },
  { name: "Education", icon: GraduationCap },
  { name: "Tech", icon: Laptop },
  { name: "Music", icon: Music },
  { name: "Art", icon: Palette },
  { name: "Lifestyle", icon: Star },
]

const FEATURED_CREATORS = [
  {
    id: "1",
    name: "Alex Rivera",
    username: "arivera",
    category: "Gaming",
    followers: "125K",
    image: "https://i.pravatar.cc/150?u=arivera",
    coverImage: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    bio: "Pro gamer and hardware enthusiast. Weekly tournaments and tech reviews.",
    verified: true,
  },
  {
    id: "2",
    name: "Sarah Chen",
    username: "schen_edu",
    category: "Education",
    followers: "89K",
    image: "https://i.pravatar.cc/150?u=schen",
    coverImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    bio: "Full-stack developer teaching the next generation of coders. Python & React expert.",
    verified: true,
  },
  {
    id: "3",
    name: "Marcus Jordan",
    username: "mj_music",
    category: "Music",
    followers: "210K",
    image: "https://i.pravatar.cc/150?u=mj",
    coverImage: "https://images.unsplash.com/photo-1514525253361-bee87187040b?q=80&w=2064&auto=format&fit=crop",
    bio: "Independent producer and multi-instrumentalist. New beats every Friday.",
    verified: true,
  },
]

const CONTENT_ITEMS = [
  {
    id: "1",
    title: "Mastering React Server Components",
    creator: "Sarah Chen",
    views: "12K",
    duration: "15:24",
    thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=2070&auto=format&fit=crop",
    category: "Tech",
  },
  {
    id: "2",
    title: "Apex Legends Season 20 Meta Guide",
    creator: "Alex Rivera",
    views: "45K",
    duration: "10:05",
    thumbnail: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop",
    category: "Gaming",
  },
  {
    id: "3",
    title: "Lo-fi Hip Hop Beats for Studying",
    creator: "Marcus Jordan",
    views: "1.2M",
    duration: "2:45:00",
    thumbnail: "https://images.unsplash.com/photo-1514525253361-bee87187040b?q=80&w=2064&auto=format&fit=crop",
    category: "Music",
  },
  {
    id: "4",
    title: "Digital Painting for Beginners",
    creator: "Elena Frost",
    views: "8K",
    duration: "22:15",
    thumbnail: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?q=80&w=1972&auto=format&fit=crop",
    category: "Art",
  },
]

export function PublicExplorePage() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Category Header */}
      <div className="sticky top-16 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container px-4 py-4 mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {CATEGORIES.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.name}
                  variant={selectedCategory === category.name ? "default" : "outline"}
                  size="sm"
                  className="rounded-full flex-shrink-0 gap-2"
                  onClick={() => setSelectedCategory(category.name)}
                >
                  {Icon && <Icon className="h-4 w-4" />}
                  {category.name}
                </Button>
              )
            })}
          </div>
        </div>
      </div>

      <main className="container px-4 py-8 mx-auto flex-1">
        {/* Hero Section */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div>
              <h1 className="text-3xl font-bold tracking-tight mb-2">Explore the Ecosystem</h1>
              <p className="text-muted-foreground">Discover creators, programs, and opportunities.</p>
            </div>
            <div className="flex w-full md:w-auto items-center gap-2">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input placeholder="Search everything..." className="pl-10" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Featured Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {FEATURED_CREATORS.map((creator) => (
              <Card key={creator.id} className="overflow-hidden group cursor-pointer hover:border-primary transition-all">
                <div className="relative h-32 bg-muted">
                  <Image
                    src={creator.coverImage}
                    alt={creator.name}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                  />
                  <div className="absolute -bottom-6 left-6">
                    <Avatar className="h-12 w-12 border-4 border-background">
                      <AvatarImage src={creator.image} />
                      <AvatarFallback>{creator.name[0]}</AvatarFallback>
                    </Avatar>
                  </div>
                </div>
                <CardHeader className="pt-8 pb-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold leading-none flex items-center gap-1">
                        {creator.name}
                        {creator.verified && <div className="h-3 w-3 rounded-full bg-blue-500" />}
                      </h3>
                      <p className="text-sm text-muted-foreground">@{creator.username}</p>
                    </div>
                    <Badge variant="secondary" className="text-[10px] uppercase tracking-wider">
                      {creator.category}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-2">{creator.bio}</p>
                </CardContent>
                <CardFooter className="pt-0 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{creator.followers} followers</span>
                  </div>
                  <Button variant="ghost" size="sm" className="gap-1 p-0 h-auto hover:bg-transparent hover:text-primary">
                    View Profile <ArrowRight className="h-3 w-3" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        {/* Trending Content Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-primary" />
              Trending Content
            </h2>
            <Button variant="ghost" className="gap-2">
              See All <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CONTENT_ITEMS.map((item) => (
              <Card key={item.id} className="overflow-hidden group cursor-pointer hover:border-primary transition-all">
                <div className="relative aspect-video bg-muted">
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute bottom-2 right-2 px-2 py-1 rounded bg-black/80 text-[10px] font-bold text-white">
                    {item.duration}
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                    <div className="h-12 w-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground shadow-lg">
                      <Play className="h-6 w-6 fill-current" />
                    </div>
                  </div>
                </div>
                <CardContent className="pt-4">
                  <h3 className="font-bold line-clamp-2 mb-2 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{item.creator}</span>
                    <span>{item.views} views</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
