import { MoreVertical, ExternalLink, Mail, Ban, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export interface Affiliate {
  id: string
  name: string
  email: string
  avatar: string
  status: string
  tier: string
  sales: number
  revenue: string
  joined: string
  rating: number
}

interface AffiliateListItemProps {
  affiliate: Affiliate
}

export function AffiliateListItem({ affiliate }: AffiliateListItemProps) {
  return (
    <tr className="group hover:bg-slate-50/50 transition-colors">
      <td className="p-8">
        <div className="flex items-center gap-4">
          <Avatar className="h-12 w-12 border-2 border-slate-100 group-hover:border-primary/20 transition-all">
            <AvatarImage src={affiliate.avatar} />
            <AvatarFallback>{affiliate.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm font-black text-slate-900">{affiliate.name}</p>
            <p className="text-xs font-medium text-slate-500">{affiliate.email}</p>
          </div>
        </div>
      </td>
      <td className="p-8">
        <Badge className={`
          ${affiliate.status === 'Active' ? 'bg-green-100 text-green-600' : 
            affiliate.status === 'Pending' ? 'bg-amber-100 text-amber-600' : 'bg-red-100 text-red-600'} 
          border-none font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest
        `}>
          {affiliate.status}
        </Badge>
      </td>
      <td className="p-8">
        <Badge className={`
          ${affiliate.tier === 'Elite' ? 'bg-slate-900 text-white' : 
            affiliate.tier === 'Pro' ? 'bg-primary/10 text-primary' : 'bg-slate-100 text-slate-600'} 
          border-none font-black text-[10px] px-3 py-1 rounded-full uppercase tracking-widest
        `}>
          {affiliate.tier}
        </Badge>
      </td>
      <td className="p-8 text-right">
        <p className="text-sm font-black text-slate-900">{affiliate.revenue}</p>
        <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{affiliate.sales} Sales</p>
      </td>
      <td className="p-8 text-right">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white shadow-sm border border-transparent hover:border-slate-100 transition-all">
              <MoreVertical className="h-4 w-4 text-slate-400" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="rounded-2xl p-2 border-slate-100 shadow-xl w-48">
            <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3">
              <ExternalLink className="h-4 w-4" /> View Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3">
              <Mail className="h-4 w-4" /> Message
            </DropdownMenuItem>
            {affiliate.status === 'Pending' && (
              <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 text-green-600 focus:text-green-600">
                <CheckCircle2 className="h-4 w-4" /> Approve
              </DropdownMenuItem>
            )}
            <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 text-red-600 focus:text-red-600">
              <Ban className="h-4 w-4" /> {affiliate.status === 'Suspended' ? 'Unsuspend' : 'Suspend'}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </td>
    </tr>
  )
}
