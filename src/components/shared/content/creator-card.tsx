import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Users, Video, Star, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils/helpers"

interface CreatorCardProps {
  name: string
  avatar: string
  bio: string
  followers: number
  contentCount: number
  rating: number
  verified?: boolean
  className?: string
}

export function CreatorCard({
  name,
  avatar,
  bio,
  followers,
  contentCount,
  rating,
  verified = false,
  className
}: CreatorCardProps) {
  return (
    <Card className={cn("overflow-hidden hover:shadow-md transition-all", className)}>
      <CardContent className="p-6">
        <div className="flex flex-col items-center text-center">
          <div className="relative mb-4">
            <Avatar className="w-20 h-20 border-2 border-primary/10">
              <AvatarImage src={avatar} alt={name} />
              <AvatarFallback>{name.substring(0, 2).toUpperCase()}</AvatarFallback>
            </Avatar>
            {verified && (
              <div className="absolute -right-1 -bottom-1 bg-background rounded-full p-0.5">
                <CheckCircle2 className="w-5 h-5 text-blue-500 fill-current" />
              </div>
            )}
          </div>
          
          <h3 className="font-bold text-lg flex items-center gap-1 mb-1">
            {name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mb-4 min-h-[2.5rem]">
            {bio}
          </p>
          
          <div className="grid grid-cols-3 gap-4 w-full mb-6 border-y py-3">
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold">{(followers / 1000).toFixed(1)}k</span>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wider">
                <Users className="w-3 h-3" />
                <span>Fans</span>
              </div>
            </div>
            <div className="flex flex-col items-center border-x px-2">
              <span className="text-sm font-bold">{contentCount}</span>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wider">
                <Video className="w-3 h-3" />
                <span>Items</span>
              </div>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-bold">{rating.toFixed(1)}</span>
              <div className="flex items-center gap-1 text-[10px] text-muted-foreground uppercase tracking-wider">
                <Star className="w-3 h-3 fill-current text-yellow-500" />
                <span>Rating</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-2 w-full">
            <Button variant="outline" className="flex-1" size="sm">
              View Profile
            </Button>
            <Button className="flex-1" size="sm">
              Subscribe
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
