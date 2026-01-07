import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { cn } from "@/lib/utils/helpers"
import { LucideIcon } from "lucide-react"

export interface NotificationAction {
  label: string
  onClick: () => void
  variant?: "default" | "outline" | "ghost"
}

interface NotificationItemProps {
  id: string
  title: string
  description: string
  time: string
  isRead?: boolean
  icon?: LucideIcon
  avatar?: string
  actions?: NotificationAction[]
  onClick?: () => void
  className?: string
}

export function NotificationItem({
  title,
  description,
  time,
  isRead = false,
  icon: Icon,
  avatar,
  actions,
  onClick,
  className
}: NotificationItemProps) {
  return (
    <div 
      className={cn(
        "flex gap-4 p-4 rounded-2xl transition-all cursor-pointer group",
        isRead ? "bg-transparent opacity-70" : "bg-primary/5 shadow-sm",
        "hover:bg-slate-50",
        className
      )}
      onClick={onClick}
    >
      <div className="shrink-0 pt-1">
        {avatar ? (
          <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
            <AvatarImage src={avatar} />
            <AvatarFallback>{title[0]}</AvatarFallback>
          </Avatar>
        ) : Icon ? (
          <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-500 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
            <Icon className="h-5 w-5" />
          </div>
        ) : null}
      </div>
      
      <div className="flex-1 space-y-1">
        <div className="flex items-start justify-between gap-2">
          <p className={cn(
            "text-sm font-bold text-slate-900 leading-none",
            !isRead && "text-primary"
          )}>
            {title}
          </p>
          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest whitespace-nowrap">
            {time}
          </span>
        </div>
        <p className="text-xs text-slate-500 line-clamp-2 leading-relaxed">
          {description}
        </p>
        
        {actions && actions.length > 0 && (
          <div className="flex gap-2 pt-2">
            {actions.map((action, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  action.onClick()
                }}
                className={cn(
                  "text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg transition-all",
                  action.variant === "outline" ? "border border-slate-200 text-slate-600 hover:bg-slate-50" :
                  action.variant === "ghost" ? "text-slate-400 hover:text-primary hover:bg-primary/5" :
                  "bg-slate-900 text-white hover:bg-slate-800"
                )}
              >
                {action.label}
              </button>
            ))}
          </div>
        )}
      </div>
      
      {!isRead && (
        <div className="shrink-0 self-center">
          <div className="h-2 w-2 rounded-full bg-primary" />
        </div>
      )}
    </div>
  )
}
