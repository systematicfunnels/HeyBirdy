"use client"

import { Globe, Lock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from "next/image"

export interface Community {
  id: string
  name: string
  description: string
  members: string
  type: string
  category: string
  image: string
  isJoined: boolean
}

interface CommunityCardProps {
  community: Community
}

export function CommunityCard({ community }: CommunityCardProps) {
  return (
    <Card className="border-none shadow-lg rounded-[2rem] overflow-hidden group hover:shadow-xl transition-all">
      <div className="relative h-32">
        <Image 
          src={community.image} 
          alt={community.name} 
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute top-4 right-4">
          <Badge className="bg-white/90 backdrop-blur text-slate-900 border-none font-black text-[10px] uppercase tracking-widest">
            {community.type === 'Private' ? <Lock className="h-3 w-3 mr-1 inline" /> : <Globe className="h-3 w-3 mr-1 inline" />}
            {community.type}
          </Badge>
        </div>
      </div>
      <CardContent className="p-6 relative">
        <div className="absolute -top-8 left-6">
          <Avatar className="h-16 w-16 border-4 border-white shadow-lg">
            <AvatarImage src={`https://ui-avatars.com/api/?name=${community.name}&background=random`} />
            <AvatarFallback>{community.name[0]}</AvatarFallback>
          </Avatar>
        </div>
        <div className="pt-8 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-black text-slate-900 group-hover:text-primary transition-colors">{community.name}</h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{community.members} members</span>
          </div>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {community.description}
          </p>
          <div className="pt-4 flex items-center justify-between">
            <Badge variant="outline" className="rounded-lg font-bold text-[10px] uppercase tracking-widest text-slate-500">
              {community.category}
            </Badge>
            <Button variant={community.isJoined ? "outline" : "default"} className={`rounded-xl font-bold h-10 px-6 ${community.isJoined ? 'border-slate-200' : 'shadow-lg shadow-primary/20'}`}>
              {community.isJoined ? "Joined" : "Join Now"}
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
