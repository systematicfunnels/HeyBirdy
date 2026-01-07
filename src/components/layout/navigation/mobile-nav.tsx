"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Home, Compass, PlusCircle, Bell, User, Menu, LayoutDashboard, Target, BookOpen, Settings, HelpCircle, Shield, LogOut } from "lucide-react"
import { cn } from "@/lib/utils/helpers"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { ROUTES } from "@/lib/constants/routes"
import { User as UserType } from "@/types/user.types"

interface MobileNavProps {
  user?: UserType | null
}

export function MobileNav({ user }: MobileNavProps) {
  const pathname = usePathname()

  const navItems = [
    { label: "Home", icon: Home, href: ROUTES.HOME },
    { label: "Feed", icon: Compass, href: ROUTES.MEMBER.FEED, roles: ['member'] },
    { label: "Explore", icon: Compass, href: ROUTES.EXPLORE },
    { label: "Create", icon: PlusCircle, href: ROUTES.CREATOR.CONTENT.NEW, roles: ['creator'] },
    { label: "Earn", icon: Target, href: ROUTES.EARN, roles: ['affiliate'] },
    { label: "Notifications", icon: Bell, href: ROUTES.NOTIFICATIONS },
    { label: "Profile", icon: User, href: user ? ROUTES.PROFILE(user.id) : ROUTES.LOGIN },
  ]

  // Filter items based on user roles
  const filteredItems = navItems.filter(item => 
    !item.roles || (user && item.roles.some(role => user.roles.includes(role)))
  ).slice(0, 5) // Limit to 5 items for bottom nav

  return (
    <>
      {/* Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
        <div className="grid h-full grid-cols-5 mx-auto font-medium">
          {filteredItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 hover:bg-muted group transition-colors",
                pathname === item.href ? "text-primary" : "text-muted-foreground"
              )}
            >
              <item.icon className={cn("w-6 h-6 mb-1", pathname === item.href && "text-primary")} />
              <span className="text-[10px] uppercase">{item.label}</span>
            </Link>
          ))}
          
          {/* Menu Trigger for more options */}
          <Sheet>
            <SheetTrigger asChild>
              <button className="inline-flex flex-col items-center justify-center px-5 hover:bg-muted group transition-colors text-muted-foreground">
                <Menu className="w-6 h-6 mb-1" />
                <span className="text-[10px] uppercase">Menu</span>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader>
                <SheetTitle className="text-left">Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 py-6">
                {user ? (
                  <>
                    {/* Role Switcher Section */}
                    <div className="space-y-3">
                      <p className="text-xs font-semibold uppercase text-muted-foreground px-2">Switch Role</p>
                      <div className="grid gap-2">
                        {user.roles.includes('creator') && (
                          <Button variant="outline" className="justify-start gap-2" asChild>
                            <Link href={ROUTES.CREATOR.DASHBOARD}>
                              <LayoutDashboard className="h-4 w-4" /> Creator Studio
                            </Link>
                          </Button>
                        )}
                        {user.roles.includes('affiliate') && (
                          <Button variant="outline" className="justify-start gap-2" asChild>
                            <Link href={ROUTES.AFFILIATE.DASHBOARD}>
                              <Target className="h-4 w-4" /> Affiliate Hub
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>

                    {/* Main Links */}
                    <nav className="flex flex-col gap-2">
                      <Link href={ROUTES.LEARN} className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">
                        <BookOpen className="h-4 w-4" /> My Courses
                      </Link>
                      <Link href={ROUTES.EARN} className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">
                        <Target className="h-4 w-4" /> Earnings
                      </Link>
                      <Link href={ROUTES.SETTINGS} className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">
                        <Settings className="h-4 w-4" /> Settings
                      </Link>
                    </nav>

                    <div className="h-px bg-border my-2" />

                    <nav className="flex flex-col gap-2">
                      <Link href={ROUTES.HELP} className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">
                        <HelpCircle className="h-4 w-4" /> Help & Support
                      </Link>
                      <Link href={ROUTES.LEGAL} className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted">
                        <Shield className="h-4 w-4" /> Privacy & Legal
                      </Link>
                      <button className="flex items-center gap-3 px-2 py-2 text-sm font-medium rounded-md hover:bg-muted text-destructive">
                        <LogOut className="h-4 w-4" /> Logout
                      </button>
                    </nav>
                  </>
                ) : (
                  <div className="flex flex-col gap-4">
                    <Button asChild>
                      <Link href={ROUTES.LOGIN}>Login</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href={ROUTES.REGISTER}>Sign Up</Link>
                    </Button>
                  </div>
                )}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  )
}
