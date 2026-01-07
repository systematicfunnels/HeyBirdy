import { SidebarItem, SidebarItemProps } from './sidebar-item'

interface SidebarSectionProps {
  title: string
  items: SidebarItemProps[]
}

export function SidebarSection({ title, items }: SidebarSectionProps) {
  return (
    <div className="space-y-4">
      <h3 className="px-4 text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">
        {title}
      </h3>
      <div className="space-y-1">
        {items.map((item) => (
          <SidebarItem key={item.href} {...item} />
        ))}
      </div>
    </div>
  )
}
