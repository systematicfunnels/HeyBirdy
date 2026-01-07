"use client"

import { useState } from "react"
import { Bell, Check, Settings, Trash2, Zap } from "lucide-react"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { NotificationItem, type NotificationAction } from "./notification-item"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

// Mock data based on User Journey Map
const MOCK_NOTIFICATIONS = [
  {
    id: "1",
    title: "Achievement Unlocked!",
    description: "You've earned the 'Profile Pro' badge for completing your onboarding.",
    time: "2 mins ago",
    isRead: false,
    icon: Zap,
    type: "achievement"
  },
  {
    id: "2",
    title: "New Course Available",
    description: "Alex Rivera just posted a new course: 'Mastering Content Strategy'.",
    time: "1 hour ago",
    isRead: false,
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=60",
    type: "content",
    actions: [
      { label: "View Course", onClick: () => console.log("View course"), variant: "default" }
    ] as NotificationAction[]
  },
  {
    id: "3",
    title: "Payout Successful",
    description: "Your earnings of $1,250.00 have been transferred to your bank account.",
    time: "5 hours ago",
    isRead: true,
    icon: Check,
    type: "system"
  },
  {
    id: "4",
    title: "New Affiliate Sale",
    description: "Someone just purchased 'Ultimate UI Kit' using your link! You earned $45.00.",
    time: "1 day ago",
    isRead: true,
    icon: Zap,
    type: "earning"
  }
]

export function NotificationCenter() {
  const [notifications, setNotifications] = useState(MOCK_NOTIFICATIONS)
  const unreadCount = notifications.filter(n => !n.isRead).length

  const markAllRead = () => {
    setNotifications(prev => prev.map(n => ({ ...n, isRead: true })))
  }

  const clearAll = () => {
    setNotifications([])
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant="ghost" 
          size="icon" 
          className="relative h-12 w-12 rounded-2xl bg-white shadow-sm hover:bg-slate-50 group transition-all"
        >
          <Bell className="h-6 w-6 text-slate-600 group-hover:text-primary transition-colors" />
          {unreadCount > 0 && (
            <Badge 
              className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 bg-primary text-white border-4 border-slate-50 rounded-full text-[10px] font-black"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-96 p-0 border-none shadow-2xl rounded-[2rem] overflow-hidden bg-white animate-in zoom-in-95 duration-200"
      >
        <div className="p-6 border-b border-slate-50 bg-slate-50/50 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-black text-slate-900">Notifications</h3>
            <p className="text-xs text-slate-500 font-medium">You have {unreadCount} unread messages</p>
          </div>
          <div className="flex gap-1">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-lg text-slate-400 hover:text-primary hover:bg-primary/5"
              onClick={markAllRead}
              title="Mark all as read"
            >
              <Check className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-8 w-8 rounded-lg text-slate-400 hover:text-red-500 hover:bg-red-50"
              onClick={clearAll}
              title="Clear all"
            >
              <Trash2 className="h-4 w-4" />
            </Button>
            <Link href={ROUTES.SETTINGS}>
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-8 w-8 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              >
                <Settings className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>

        <div className="max-h-[450px] overflow-y-auto p-2 space-y-1 scrollbar-hide">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <NotificationItem
                key={notification.id}
                {...notification}
                className="rounded-2xl"
                onClick={() => {
                  setNotifications(prev => prev.map(n => 
                    n.id === notification.id ? { ...n, isRead: true } : n
                  ))
                }}
              />
            ))
          ) : (
            <div className="py-20 text-center space-y-4">
              <div className="h-16 w-16 bg-slate-100 rounded-3xl flex items-center justify-center mx-auto">
                <Bell className="h-8 w-8 text-slate-300" />
              </div>
              <div className="space-y-1">
                <p className="font-black text-slate-900">All caught up!</p>
                <p className="text-xs text-slate-500 font-medium">No new notifications at the moment.</p>
              </div>
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="p-4 bg-slate-50/50 border-t border-slate-50">
            <Button 
              variant="ghost" 
              className="w-full font-black text-xs uppercase tracking-widest text-slate-500 hover:text-primary hover:bg-primary/5 h-10 rounded-xl"
            >
              View All Notifications
            </Button>
          </div>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
