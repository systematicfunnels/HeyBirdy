"use client"

import * as React from "react"
import Image from "next/image"
import { Play, Pause, Volume2, Maximize, Settings, SkipForward, SkipBack } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { cn } from "@/lib/utils/helpers"

interface VideoPlayerProps {
  src: string
  poster?: string
  title?: string
  className?: string
}

export function VideoPlayer({ src: _src, poster, title, className }: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [progress] = React.useState(33) // Mock progress

  return (
    <div className={cn("relative group bg-black rounded-lg overflow-hidden aspect-video", className)}>
      {/* Video Element Placeholder */}
      <div className="absolute inset-0 flex items-center justify-center">
        {poster && !isPlaying && (
          <Image src={poster} alt={title || "Video poster"} fill className="object-cover opacity-50" />
        )}
        {!isPlaying && (
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-16 h-16 rounded-full bg-primary/20 hover:bg-primary/40 text-white border-2 border-white/20"
            onClick={() => setIsPlaying(true)}
          >
            <Play className="w-8 h-8 fill-current" />
          </Button>
        )}
      </div>

      {/* Custom Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform">
        <div className="space-y-2">
          <Progress value={progress} className="h-1 bg-white/20" />
          
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/20" onClick={() => setIsPlaying(!isPlaying)}>
                {isPlaying ? <Pause className="h-4 w-4 fill-current" /> : <Play className="h-4 w-4 fill-current" />}
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/20">
                <SkipBack className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/20">
                <SkipForward className="h-4 w-4" />
              </Button>
              <div className="flex items-center gap-2">
                <Volume2 className="h-4 w-4" />
                <div className="w-20 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-1/2 h-full bg-white" />
                </div>
              </div>
              <span className="text-xs font-medium">12:34 / 45:00</span>
            </div>
            
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/20">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon" className="h-8 w-8 hover:bg-white/20">
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
