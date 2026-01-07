"use client"

import Link from "next/link"
import { Search, Bell, MessageSquare, Plus, ChevronDown, User, LogOut, Settings, LayoutDashboard, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ROUTES } from "@/lib/constants/routes"
import { User as UserType } from "@/types/user.types"

interface GlobalHeaderProps {
  user?: UserType | null
}

import { DesktopNav } from "@/components/layout/navigation/desktop-nav"

export function GlobalHeader({ user }: GlobalHeaderProps) {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between gap-4 px-4">
        {/* Layer 1: Logo & Explore */}
        <div className="flex items-center gap-6">
          <Link href={ROUTES.HOME} className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight text-primary">HeyBirdy</span>
          </Link>
          
          <DesktopNav user={user} />
        </div>

        {/* Universal Search */}
        <div className="flex-1 max-w-md hidden sm:block">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search creators, content, programs..."
              className="w-full pl-10 bg-muted/50 focus-visible:bg-background"
            />
          </div>
        </div>

        {/* User Actions & Profile */}
        <div className="flex items-center gap-2">
          {user ? (
            <>
              <div className="flex items-center gap-1 mr-2">
                <Button variant="ghost" size="icon" asChild className="relative">
                  <Link href={ROUTES.NOTIFICATIONS}>
                    <Bell className="h-5 w-5" />
                    <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link href={ROUTES.MESSAGES}>
                    <MessageSquare className="h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Contextual Actions */}
              <div className="hidden lg:flex items-center gap-2 mr-2 border-r pr-4">
                {user.roles.includes('creator') && (
                  <Button size="sm" className="gap-2" asChild>
                    <Link href={ROUTES.CREATOR.CONTENT.NEW}>
                      <Plus className="h-4 w-4" /> Create
                    </Link>
                  </Button>
                )}
                <Button variant="outline" size="sm" className="gap-2" asChild>
                  <Link href={ROUTES.EARN}>
                    <Target className="h-4 w-4" /> Earn
                  </Link>
                </Button>
              </div>

              {/* User Menu */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-9 w-9 rounded-full bg-primary/10">
                    {user.name[0]}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user.name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href={ROUTES.PROFILE(user.id)}>
                      <User className="mr-2 h-4 w-4" /> Profile
                    </Link>
                  </DropdownMenuItem>
                  {user.roles.includes('creator') && (
                    <DropdownMenuItem asChild>
                      <Link href={ROUTES.CREATOR.DASHBOARD}>
                        <LayoutDashboard className="mr-2 h-4 w-4" /> Creator Studio
                      </Link>
                    </DropdownMenuItem>
                  )}
                  {user.roles.includes('affiliate') && (
                    <DropdownMenuItem asChild>
                      <Link href={ROUTES.AFFILIATE.DASHBOARD}>
                        <Target className="mr-2 h-4 w-4" /> Affiliate Hub
                      </Link>
                    </DropdownMenuItem>
                  )}
                  <DropdownMenuItem asChild>
                    <Link href={ROUTES.SETTINGS}>
                      <Settings className="mr-2 h-4 w-4" /> Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="text-destructive focus:text-destructive">
                    <LogOut className="mr-2 h-4 w-4" /> Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          ) : (
            <div className="flex items-center gap-2">
              <Button variant="ghost" asChild>
                <Link href={ROUTES.LOGIN}>Login</Link>
              </Button>
              <Button asChild>
                <Link href={ROUTES.REGISTER}>Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
