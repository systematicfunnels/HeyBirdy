import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart3, 
  Link as LinkIcon,
  DollarSign,
  Briefcase,
  Share2,
  TrendingUp,
  MessageSquare,
} from 'lucide-react'
import { ROUTES } from '@/lib/constants/routes'
import { SidebarItemProps } from './sidebar-item'
import { SidebarSection } from './sidebar-section'
import { SidebarTierCard } from './sidebar-tier-card'

export function AffiliateSidebar() {
  const sections: {
    title: string;
    items: SidebarItemProps[];
  }[] = [
    {
      title: 'Performance Hub',
      items: [
        { name: 'Dashboard', href: ROUTES.AFFILIATE.DASHBOARD, icon: LayoutDashboard },
        { name: 'Leaderboard', href: ROUTES.AFFILIATE.LEADERBOARD, icon: TrendingUp },
      ]
    },
    {
      title: 'Campaigns',
      items: [
        { name: 'Browse Programs', href: ROUTES.AFFILIATE.PROGRAMS, icon: Briefcase },
        { name: 'My Links', href: ROUTES.AFFILIATE.LINKS, icon: LinkIcon },
        { name: 'Assets', href: ROUTES.AFFILIATE.ASSETS, icon: Share2 },
      ]
    },
    {
      title: 'Earnings',
      items: [
        { name: 'Payouts', href: ROUTES.AFFILIATE.PAYOUTS, icon: DollarSign },
        { name: 'Analytics', href: ROUTES.AFFILIATE.ANALYTICS, icon: BarChart3 },
      ]
    },
    {
      title: 'Network',
      items: [
        { name: 'Community Hub', href: ROUTES.AFFILIATE.COMMUNITY, icon: MessageSquare, badge: 'Hot' },
        { name: 'My Sub-affiliates', href: ROUTES.AFFILIATE.NETWORK, icon: Users },
        { name: 'Refer & Earn', href: ROUTES.AFFILIATE.REFER, icon: Share2, badge: 'New' },
      ]
    },
    {
      title: 'Support',
      items: [
        { name: 'Messages', href: ROUTES.AFFILIATE.MESSAGES, icon: MessageSquare },
        { name: 'Settings', href: ROUTES.AFFILIATE.SETTINGS, icon: Settings },
      ]
    }
  ]

  return (
    <aside className="w-72 border-r bg-white h-[calc(100vh-4rem)] sticky top-16 hidden lg:block overflow-y-auto scrollbar-hide shadow-sm z-30">
      <div className="py-8 px-6 space-y-10">
        <SidebarTierCard 
          tierName="Gold Partner"
          mainValue="$12,450"
          mainLabel="Monthly Sales"
          growthValue="+24%"
          growthLabel="Growth"
          gradient="from-amber-600 to-amber-800"
        />

        {sections.map((section) => (
          <SidebarSection key={section.title} {...section} />
        ))}
      </div>
    </aside>
  )
}
