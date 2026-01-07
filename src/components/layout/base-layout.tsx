import { User } from '@/types/user.types'

interface BaseLayoutProps {
  user?: User | null
  children: React.ReactNode
  header: React.ReactNode
  sidebar: React.ReactNode
}

export function BaseLayout({ user, children, header, sidebar }: BaseLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50/50">
      {header}
      <div className="flex flex-1 container mx-auto">
        {sidebar}
        <main className="flex-1 p-8 md:p-12">
          {children}
        </main>
      </div>
    </div>
  )
}
