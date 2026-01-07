"use client"

import { Progress } from "@/components/ui/progress"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Target } from "lucide-react"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

interface Challenge {
  id: string
  title: string
  progress: number
  total: number
  xp: string
}

interface ActiveChallengesCardProps {
  challenges: Challenge[]
}

export function ActiveChallengesCard({ challenges }: ActiveChallengesCardProps) {
  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="text-sm font-bold flex items-center gap-2">
          <Target className="h-4 w-4 text-primary" /> Active Challenges
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {challenges.map((challenge) => (
          <div key={challenge.id} className="space-y-2">
            <div className="flex justify-between text-xs">
              <span className="font-medium">{challenge.title}</span>
              <span className="text-primary font-bold">{challenge.xp}</span>
            </div>
            <Progress value={(challenge.progress / challenge.total) * 100} className="h-1.5" />
            <p className="text-[10px] text-muted-foreground text-right">
              {challenge.progress}/{challenge.total} completed
            </p>
          </div>
        ))}
        <Button variant="ghost" size="sm" className="w-full text-xs text-primary h-8" asChild>
          <Link href={ROUTES.MEMBER.LEARNING_HUB}>View All Challenges</Link>
        </Button>
      </CardContent>
    </Card>
  )
}
