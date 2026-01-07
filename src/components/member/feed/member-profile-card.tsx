"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Zap } from "lucide-react"

interface MemberProfileCardProps {
  user: {
    name: string
    username: string
    avatar: string
    level: number
    points: string
    badges: number
  }
}

export function MemberProfileCard({ user }: MemberProfileCardProps) {
  return (
    <Card>
      <CardContent className="pt-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <div className="relative">
            <Avatar className="h-20 w-20 border-2 border-primary">
              <AvatarImage src={user.avatar} />
              <AvatarFallback>{user.name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 h-6 w-6 rounded-full bg-primary flex items-center justify-center border-2 border-background">
              <Zap className="h-3 w-3 text-white fill-white" />
            </div>
          </div>
          <div>
            <h3 className="font-bold text-lg leading-tight">{user.name}</h3>
            <p className="text-sm text-muted-foreground">@{user.username}</p>
          </div>
          <div className="flex w-full justify-between pt-4 border-t">
            <div className="text-center">
              <p className="font-bold">{user.level}</p>
              <p className="text-[10px] uppercase text-muted-foreground tracking-wider">Level</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.points}</p>
              <p className="text-[10px] uppercase text-muted-foreground tracking-wider">Points</p>
            </div>
            <div className="text-center">
              <p className="font-bold">{user.badges}</p>
              <p className="text-[10px] uppercase text-muted-foreground tracking-wider">Badges</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
