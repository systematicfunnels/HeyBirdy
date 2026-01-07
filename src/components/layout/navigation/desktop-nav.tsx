"use client"

import Link from "next/link"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ROUTES } from "@/lib/constants/routes"
import { User } from "@/types/user.types"

interface DesktopNavProps {
  user?: User | null
}

export function DesktopNav({ user }: DesktopNavProps) {
  return (
    <nav className="hidden md:flex items-center gap-6">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="gap-1 px-2">
            Explore <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          <DropdownMenuItem asChild>
            <Link href={ROUTES.EXPLORE}>All Categories</Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Trending</DropdownMenuItem>
          <DropdownMenuItem>New Releases</DropdownMenuItem>
          <DropdownMenuItem>Top Creators</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      {user?.roles.includes('member') && (
        <Link href={ROUTES.MEMBER.FEED} className="text-sm font-medium hover:text-primary transition-colors">
          Feed
        </Link>
      )}
      <Link href={ROUTES.LEARN} className="text-sm font-medium hover:text-primary transition-colors">
        Learn
      </Link>
      <Link href={ROUTES.EARN} className="text-sm font-medium hover:text-primary transition-colors">
        Earn
      </Link>
    </nav>
  )
}
