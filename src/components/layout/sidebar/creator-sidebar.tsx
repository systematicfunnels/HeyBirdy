import { 
  LayoutDashboard, 
  FileVideo, 
  Users, 
  Settings, 
  BarChart3, 
  ShoppingBag,
  DollarSign, 
  Calendar, 
  Copy, 
  Plus,
  Share2,
  TrendingUp,
  MessageSquare,
  Palette,
  Settings2
} from 'lucide-react'
import { ROUTES } from '@/lib/constants/routes'
import { SidebarItemProps } from './sidebar-item'
import { SidebarSection } from './sidebar-section'
import { SidebarTierCard } from './sidebar-tier-card'

export function CreatorSidebar() {
  const sections: {
    title: string;
    items: SidebarItemProps[];
  }[] = [
    {
      title: 'Studio Overview',
      items: [
        { name: 'Performance', href: ROUTES.CREATOR.DASHBOARD, icon: LayoutDashboard },
        { name: 'Creator Hub', href: ROUTES.CREATOR.OVERVIEW, icon: TrendingUp },
      ]
    },
    {
      title: 'Content Studio',
      items: [
        { name: 'Content Library', href: ROUTES.CREATOR.CONTENT.ALL, icon: FileVideo },
        { name: 'Upload / Create', href: ROUTES.CREATOR.CONTENT.NEW, icon: Plus, badge: 'New' },
        { name: 'Schedule', href: ROUTES.CREATOR.CONTENT.CALENDAR, icon: Calendar },
        { name: 'Assets & Templates', href: ROUTES.CREATOR.CONTENT.TEMPLATES, icon: Copy },
      ]
    },
    {
      title: 'Affiliate Engine',
      items: [
        { name: 'Program Settings', href: ROUTES.CREATOR.AFFILIATE.SETTINGS, icon: Settings },
        { name: 'Affiliate Network', href: ROUTES.CREATOR.AFFILIATE.NETWORK, icon: Users },
        { name: 'Growth Tools', href: ROUTES.CREATOR.AFFILIATE.TOOLS, icon: Share2 },
        { name: 'Revenue Analytics', href: ROUTES.CREATOR.AFFILIATE.ANALYTICS, icon: BarChart3 },
      ]
    },
    {
      title: 'Economy',
      items: [
        { name: 'Earnings', href: ROUTES.CREATOR.MONETIZATION.REVENUE, icon: DollarSign },
        { name: 'Pricing Models', href: ROUTES.CREATOR.MONETIZATION.PRICING, icon: Palette },
        { name: 'Digital Products', href: ROUTES.CREATOR.MONETIZATION.PRODUCTS, icon: ShoppingBag },
        { name: 'Monetization Settings', href: ROUTES.CREATOR.MONETIZATION.SETTINGS, icon: Settings2 },
      ]
    },
    {
      title: 'Management',
      items: [
        { name: 'Community', href: ROUTES.CREATOR.COMMUNITY, icon: MessageSquare },
        { name: 'Deep Analytics', href: ROUTES.CREATOR.ANALYTICS, icon: BarChart3 },
        { name: 'Creator Settings', href: ROUTES.CREATOR.SETTINGS, icon: Palette },
      ]
    }
  ]

  return (
    <aside className="w-72 border-r bg-white h-[calc(100vh-4rem)] sticky top-16 hidden lg:block overflow-y-auto scrollbar-hide shadow-sm z-30">
      <div className="py-8 px-6 space-y-10">
        <SidebarTierCard 
          tierName="Master Creator"
          mainValue="124k"
          mainLabel="Total Reach"
          growthValue="+18%"
          growthLabel="Monthly"
        />

        {sections.map((section) => (
          <SidebarSection key={section.title} {...section} />
        ))}
      </div>
    </aside>
  )
}
