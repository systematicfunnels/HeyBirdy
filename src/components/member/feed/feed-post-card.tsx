"use client"

import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"

interface FeedPostCardProps {
  post: {
    id: string
    creator: {
      name: string
      username: string
      avatar: string
      verified: boolean
    }
    content: string
    image?: string
    likes: string
    comments: string
    timestamp: string
    tags: string[]
  }
}

export function FeedPostCard({ post }: FeedPostCardProps) {
  return (
    <Card className="overflow-hidden border-none shadow-sm bg-muted/30">
      <CardHeader className="p-4 pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={post.creator.avatar} />
              <AvatarFallback>{post.creator.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <h4 className="font-bold text-sm flex items-center gap-1 leading-none">
                {post.creator.name}
                {post.creator.verified && (
                  <div className="h-3 w-3 rounded-full bg-blue-500" />
                )}
              </h4>
              <p className="text-xs text-muted-foreground mt-1">@{post.creator.username} • {post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      <CardContent className="p-4 pt-2">
        <p className="text-sm mb-4 leading-relaxed">{post.content}</p>
        {post.image && (
          <div className="relative rounded-xl overflow-hidden mb-4 border bg-muted aspect-video">
            <Image 
              src={post.image} 
              alt="Post content" 
              fill
              className="object-cover" 
            />
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {post.tags.map(tag => (
            <Badge key={tag} variant="secondary" className="text-[10px] px-2 py-0">#{tag}</Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 border-t bg-muted/10">
        <div className="flex items-center justify-between w-full pt-4">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-red-500 transition-colors">
              <Heart className="h-5 w-5" />
              <span className="text-xs font-medium">{post.likes}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <MessageCircle className="h-5 w-5" />
              <span className="text-xs font-medium">{post.comments}</span>
            </button>
            <button className="flex items-center gap-1.5 text-muted-foreground hover:text-primary transition-colors">
              <Share2 className="h-5 w-5" />
            </button>
          </div>
          <button className="text-muted-foreground hover:text-primary transition-colors">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </CardFooter>
    </Card>
  )
}
