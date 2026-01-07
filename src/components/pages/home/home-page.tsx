"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { 
  ArrowRight, 
  Video, 
  Users, 
  TrendingUp, 
  ShieldCheck, 
  Zap,
  Globe,
  ChevronRight
} from 'lucide-react'
import { ROUTES } from '@/lib/constants/routes'
import { MainFooter } from "@/components/layout/footer/main-footer"

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-grid-slate-900/[0.04] bg-[bottom_1px_center] dark:bg-grid-slate-400/[0.05] mask-image-b" />
        <div className="container relative px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium bg-muted/50 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-primary mr-2" />
              Now in Beta: Join the Creator Revolution
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
              Empower Your Content. <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-600">
                Gamify Your Growth.
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              The only platform that bridges the gap between Creators, Affiliates, and Fans through a high-performance, gamified ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" className="h-12 px-8 text-base">
                <Link href={ROUTES.REGISTER}>Get Started for Free</Link>
              </Button>
              <Button variant="outline" size="lg" className="h-12 px-8 text-base group" asChild>
                <Link href={ROUTES.EXPLORE}>
                  Explore Marketplace
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-8 pt-8 text-muted-foreground grayscale opacity-70">
              <div className="flex items-center gap-2 font-bold"><Zap className="h-5 w-5" /> FAST</div>
              <div className="flex items-center gap-2 font-bold"><ShieldCheck className="h-5 w-5" /> SECURE</div>
              <div className="flex items-center gap-2 font-bold"><Globe className="h-5 w-5" /> GLOBAL</div>
            </div>
          </div>
        </div>
      </section>

      {/* Role Selection Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">Choose Your Path</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Whether you&apos;re creating, promoting, or learning, HeyBirdy has a place for you.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Creator Card */}
            <div className="group relative p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Creators</h3>
              <p className="text-muted-foreground mb-6">
                Monetize your expertise through courses, videos, and private communities. Scale with our affiliate network.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" /> Advanced Analytics</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" /> Multi-tier Monetization</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-primary" /> Automated Affiliates</li>
              </ul>
              <Button variant="ghost" className="w-full group/btn" asChild>
                <Link href={ROUTES.REGISTER}>
                  Become a Creator
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Affiliate Card */}
            <div className="group relative p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border-primary/20 ring-1 ring-primary/5">
              <div className="h-12 w-12 rounded-lg bg-blue-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Affiliates</h3>
              <p className="text-muted-foreground mb-6">
                Promote top-tier creators and earn industry-leading commissions. Access real-time tracking and assets.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-blue-600" /> High-conversion Links</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-blue-600" /> Daily Payouts</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-blue-600" /> Performance Rewards</li>
              </ul>
              <Button variant="outline" className="w-full border-blue-200 hover:bg-blue-50 group/btn" asChild>
                <Link href={ROUTES.REGISTER}>
                  Join as Affiliate
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>

            {/* Member Card */}
            <div className="group relative p-8 bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all hover:-translate-y-1">
              <div className="h-12 w-12 rounded-lg bg-orange-100 flex items-center justify-center text-orange-600 mb-6 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Members</h3>
              <p className="text-muted-foreground mb-6">
                Learn from the best, join exclusive communities, and earn rewards for participating in the ecosystem.
              </p>
              <ul className="space-y-3 mb-8 text-sm text-muted-foreground">
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-orange-600" /> Gamified Learning</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-orange-600" /> Exclusive Content</li>
                <li className="flex items-center gap-2"><ArrowRight className="h-3 w-3 text-orange-600" /> Community Badges</li>
              </ul>
              <Button variant="ghost" className="w-full group/btn" asChild>
                <Link href={ROUTES.REGISTER}>
                  Start Learning
                  <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 border-y">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">10k+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Active Creators</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">$2.5M+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Paid to Affiliates</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">500k+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Monthly Learners</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-primary">150+</p>
              <p className="text-sm text-muted-foreground uppercase tracking-wider font-semibold">Countries Reached</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground overflow-hidden relative">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" />
        <div className="container px-4 md:px-6 mx-auto relative">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Ready to birdy-up your game?</h2>
            <p className="text-primary-foreground/80 text-xl max-w-2xl">
              Join thousands of others who are already redefining the future of digital content and affiliate marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Button asChild size="lg" variant="secondary" className="h-12 px-10 text-base font-bold">
                <Link href={ROUTES.REGISTER}>Join Now</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-12 px-10 text-base bg-transparent border-white/20 hover:bg-white/10">
                <Link href={ROUTES.HELP}>Contact Sales</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <MainFooter />
    </div>
  )
}
