import Link from 'next/link'
import { ROUTES } from '@/lib/constants/routes'

export function MainFooter() {
  return (
    <footer className="py-12 border-t bg-muted/20">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold italic">HB</div>
              <span className="text-xl font-bold tracking-tight">HeyBirdy</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs">
              The ultimate gamified ecosystem for creators and affiliates to grow together. Built for the next generation of the creator economy.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={ROUTES.EXPLORE} className="hover:text-primary transition-colors">Explore</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Creators</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Affiliates</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Marketplace</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={ROUTES.HELP} className="hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Safety</Link></li>
              <li><Link href="#" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href={ROUTES.LEGAL} className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href={ROUTES.LEGAL} className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href={ROUTES.LEGAL} className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} HeyBirdy Platform. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
