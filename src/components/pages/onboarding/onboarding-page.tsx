"use client"

import { useState } from "react"
import { 
  User, 
  Video, 
  Target, 
  ArrowRight, 
  CheckCircle2, 
  Plus, 
  Camera, 
  Sparkles,
  CreditCard,
  ShieldCheck,
  Zap,
  ChevronRight,
  ChevronLeft,
  Link,
  Gift,
  Trophy,
  Share2,
  Layout,
  FileText,
  Globe
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useRouter } from "next/navigation"
import { ROUTES } from "@/lib/constants/routes"

type Persona = "creator" | "affiliate" | "member"

const PERSONAS = [
  {
    id: "creator",
    title: "The Creator",
    description: "I want to share content, build a community, and monetize my expertise.",
    icon: Video,
    color: "bg-blue-500",
  },
  {
    id: "affiliate",
    title: "The Affiliate",
    description: "I want to promote high-quality products and earn commissions.",
    icon: Target,
    color: "bg-emerald-500",
  },
  {
    id: "member",
    title: "The Member",
    description: "I want to learn from experts, join communities, and earn rewards.",
    icon: User,
    color: "bg-purple-500",
  },
]

export function OnboardingPage() {
  const router = useRouter()
  const [persona, setPersona] = useState<Persona | null>(null)
  const [step, setStep] = useState(0) // 0: Persona Selection, 1+: persona specific steps
  
  const handlePersonaSelect = (id: Persona) => {
    setPersona(id)
    setStep(1)
  }

  const nextStep = () => setStep(prev => prev + 1)
  const prevStep = () => setStep(prev => Math.max(0, prev - 1))

  const finishOnboarding = () => {
    if (persona === "creator") router.push(ROUTES.CREATOR.DASHBOARD)
    else if (persona === "affiliate") router.push(ROUTES.AFFILIATE.DASHBOARD)
    else router.push(ROUTES.MEMBER.FEED)
  }

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6 sm:p-10">
      <div className="max-w-4xl w-full space-y-10">
        
        {/* Header */}
        <div className="text-center space-y-4">
          <div className="h-16 w-16 bg-slate-900 rounded-2xl flex items-center justify-center mx-auto shadow-2xl rotate-3">
            <Zap className="h-8 w-8 text-white fill-white" />
          </div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">Welcome to HeyBirdy</h1>
          <p className="text-slate-500 font-medium max-w-md mx-auto">
            Let&apos;s get your journey started. First, tell us who you are so we can tailor your experience.
          </p>
        </div>

        {/* Step 0: Persona Selection */}
        {step === 0 && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            {PERSONAS.map((p) => (
              <Card 
                key={p.id} 
                className={`relative group cursor-pointer border-2 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-[2.5rem] overflow-hidden ${
                  persona === p.id ? 'border-primary bg-primary/5' : 'border-transparent bg-white'
                }`}
                onClick={() => handlePersonaSelect(p.id as Persona)}
              >
                <CardContent className="p-8 space-y-6">
                  <div className={`h-16 w-16 rounded-2xl ${p.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <p.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black text-slate-900">{p.title}</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">{p.description}</p>
                  </div>
                  <div className="pt-4">
                    <Button variant="ghost" className="p-0 font-black text-primary hover:bg-transparent group-hover:translate-x-1 transition-transform">
                      Select Role <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Step 1+: Specific Steps */}
        {step > 0 && persona === "creator" && (
          <CreatorOnboarding 
            step={step} 
            nextStep={nextStep} 
            prevStep={prevStep} 
            finish={finishOnboarding} 
          />
        )}
        
        {step > 0 && persona === "affiliate" && (
          <AffiliateOnboarding 
            step={step} 
            nextStep={nextStep} 
            prevStep={prevStep} 
            finish={finishOnboarding} 
          />
        )}

        {step > 0 && persona === "member" && (
          <MemberOnboarding 
            step={step} 
            nextStep={nextStep} 
            prevStep={prevStep} 
            finish={finishOnboarding} 
          />
        )}

      </div>
    </div>
  )
}

// --- Creator Onboarding Sub-components ---

interface OnboardingStepProps {
  step: number;
  nextStep: () => void;
  prevStep: () => void;
  finish: () => void;
}

function CreatorOnboarding({ step, nextStep, prevStep, finish }: OnboardingStepProps) {
  const stepsCount = 6
  const progress = (step / stepsCount) * 100
  const [selectedNiches, setSelectedNiches] = useState<string[]>([])
  const [selectedStrategy, setSelectedStrategy] = useState<string | null>(null)

  const toggleNiche = (niche: string) => {
    if (selectedNiches.includes(niche)) {
      setSelectedNiches(prev => prev.filter(n => n !== niche))
    } else if (selectedNiches.length < 3) {
      setSelectedNiches(prev => [...prev, niche])
    }
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={prevStep} className="font-bold text-slate-500">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex-1 max-w-xs mx-10">
          <Progress value={progress} className="h-2" />
        </div>
        <div className="text-sm font-black text-slate-400 uppercase tracking-widest">
          Step {step} of {stepsCount}
        </div>
      </div>

      {step === 1 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Set up your Creator Profile</h2>
              <p className="text-slate-500 font-medium">This is how your fans will see you on the platform.</p>
            </div>
            <div className="flex flex-col md:flex-row gap-10">
              <div className="space-y-4">
                <Label className="font-black text-xs uppercase tracking-widest text-slate-400">Profile Picture</Label>
                <div className="relative group w-32 h-32">
                  <div className="w-32 h-32 rounded-3xl bg-slate-100 flex items-center justify-center border-2 border-dashed border-slate-200 group-hover:border-primary transition-colors cursor-pointer overflow-hidden">
                    <Camera className="h-8 w-8 text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 h-10 w-10 bg-primary rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/30 cursor-pointer">
                    <Plus className="h-5 w-5" />
                  </div>
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="display-name" className="font-black text-xs uppercase tracking-widest text-slate-400">Display Name</Label>
                  <Input id="display-name" placeholder="Alex Rivera" className="h-14 rounded-2xl bg-slate-50 border-none font-bold" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bio" className="font-black text-xs uppercase tracking-widest text-slate-400">Bio</Label>
                  <Input id="bio" placeholder="Digital artist and content strategist..." className="h-14 rounded-2xl bg-slate-50 border-none font-bold" />
                </div>
              </div>
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Select your Niche</h2>
              <p className="text-slate-500 font-medium">Choose up to 3 categories that best describe your content.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Tech", "Gaming", "Business", "Design", "Lifestyle", "Finance", "Art", "Education", "Travel"].map(n => (
                <div 
                  key={n} 
                  onClick={() => toggleNiche(n)}
                  className={`h-20 rounded-2xl border-2 flex items-center justify-center font-black transition-all cursor-pointer ${
                    selectedNiches.includes(n) 
                      ? 'border-primary bg-primary/5 text-primary' 
                      : 'border-slate-100 text-slate-600 hover:border-primary/50'
                  }`}
                >
                  {n}
                  {selectedNiches.includes(n) && <CheckCircle2 className="ml-2 h-4 w-4" />}
                </div>
              ))}
            </div>
            <Button 
              onClick={nextStep} 
              disabled={selectedNiches.length === 0}
              className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20"
            >
              Continue ({selectedNiches.length}/3) <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Monetization Strategy</h2>
              <p className="text-slate-500 font-medium">How do you plan to earn on HeyBirdy?</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { id: "subs", title: "Subscriptions", desc: "Recurring monthly revenue from fans.", icon: User },
                { id: "digital", title: "Digital Products", desc: "Sell courses, e-books, or templates.", icon: FileText },
                { id: "affiliate", title: "Affiliate Marketing", desc: "Promote brands and earn commissions.", icon: Target },
                { id: "tips", title: "Direct Tips", desc: "One-time support from your community.", icon: Sparkles }
              ].map((opt) => (
                <div 
                  key={opt.id} 
                  onClick={() => setSelectedStrategy(opt.id)}
                  className={`p-6 rounded-3xl border-2 cursor-pointer group transition-all ${
                    selectedStrategy === opt.id 
                      ? 'border-primary bg-primary/5' 
                      : 'border-transparent bg-slate-50 hover:border-primary/50'
                  }`}
                >
                  <div className={`h-12 w-12 rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform ${
                    selectedStrategy === opt.id ? 'bg-primary text-white' : 'bg-white text-primary'
                  }`}>
                    <opt.icon className="h-6 w-6" />
                  </div>
                  <h4 className={`font-black mb-1 ${selectedStrategy === opt.id ? 'text-primary' : 'text-slate-900'}`}>{opt.title}</h4>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{opt.desc}</p>
                </div>
              ))}
            </div>
            <Button 
              onClick={nextStep} 
              disabled={!selectedStrategy}
              className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20"
            >
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Connect Payout Method</h2>
              <p className="text-slate-500 font-medium">Set up where you&apos;ll receive your earnings.</p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-100 hover:border-primary cursor-pointer group transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-600 flex items-center justify-center text-white font-black text-xl">S</div>
                    <div>
                      <p className="font-black text-slate-900">Stripe Connect</p>
                      <p className="text-sm text-slate-500 font-medium">Direct bank transfer. Fast and secure.</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-100 hover:border-primary cursor-pointer group transition-all">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-blue-500 flex items-center justify-center text-white">
                      <CreditCard className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">PayPal Business</p>
                      <p className="text-sm text-slate-500 font-medium">Global payouts via PayPal.</p>
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20">
              Skip for now <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 5 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Your First Draft</h2>
              <p className="text-slate-500 font-medium">
                {selectedStrategy === 'digital' 
                  ? "Let&apos;s create your first course or digital product." 
                  : selectedStrategy === 'subs'
                  ? "Let&apos;s set up your first subscription tier."
                  : "Let&apos;s start your first project. You can use a template to save time."}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-primary cursor-pointer group transition-all">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <FileText className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-black text-slate-900 mb-2">
                  {selectedStrategy === 'digital' ? 'New Digital Product' : 'Blank Project'}
                </h4>
                <p className="text-xs text-slate-500 font-medium">Start from scratch with a clean slate.</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-primary cursor-pointer group transition-all">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Layout className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-black text-slate-900 mb-2">Use Template</h4>
                <p className="text-xs text-slate-500 font-medium">Choose from our proven high-conversion layouts.</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="font-black text-sm">Pro Tip: Studio Tour</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Takes 2 mins</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="font-black text-xs hover:bg-white/10 text-white">
                Start Tour
              </Button>
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg shadow-2xl shadow-primary/20">
              Continue to Dashboard <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 6 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-slate-900 text-white">
          <CardContent className="p-12 text-center space-y-8">
            <div className="h-24 w-24 bg-primary rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-primary/40 rotate-12">
              <Sparkles className="h-12 w-12 text-white fill-white animate-pulse" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">You&apos;re all set!</h2>
              <p className="text-slate-400 font-medium text-lg max-w-sm mx-auto">
                Welcome to the HeyBirdy family. Your creator journey starts now.
              </p>
            </div>
            <Button onClick={finish} className="w-full h-16 rounded-2xl font-black text-xl bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 scale-105">
              Enter Creator Studio
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// --- Affiliate Onboarding Sub-components ---

function AffiliateOnboarding({ step, nextStep, prevStep, finish }: OnboardingStepProps) {
  const stepsCount = 5
  const progress = (step / stepsCount) * 100

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={prevStep} className="font-bold text-slate-500">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex-1 max-w-xs mx-10">
          <Progress value={progress} className="h-2" />
        </div>
        <div className="text-sm font-black text-slate-400 uppercase tracking-widest">
          Step {step} of {stepsCount}
        </div>
      </div>

      {step === 1 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Affiliate Experience</h2>
              <p className="text-slate-500 font-medium">How familiar are you with affiliate marketing?</p>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {["I&apos;m a complete beginner", "I&apos;ve done it a bit before", "I&apos;m a professional affiliate marketer"].map(opt => (
                <div key={opt} className="p-6 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 flex items-center gap-4 cursor-pointer group transition-all">
                  <div className="h-6 w-6 rounded-full border-2 border-slate-200 group-hover:border-emerald-500 flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-emerald-500 scale-0 group-hover:scale-100 transition-transform" />
                  </div>
                  <span className="font-black text-slate-700 group-hover:text-emerald-600">{opt}</span>
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-600 shadow-2xl shadow-emerald-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Your Promotion Channels</h2>
              <p className="text-slate-500 font-medium">Where do you plan to promote products?</p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {["Instagram", "YouTube", "TikTok", "X / Twitter", "Email List", "Blog / Website"].map(n => (
                <div 
                  key={n} 
                  className="h-16 rounded-2xl border-2 border-slate-100 hover:border-emerald-500 flex items-center justify-center font-black text-slate-600 hover:text-emerald-600 hover:bg-emerald-50 cursor-pointer transition-all"
                >
                  {n}
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-600 shadow-2xl shadow-emerald-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Pick Your First Program</h2>
              <p className="text-slate-500 font-medium">Based on your interests, we recommend these high-paying programs.</p>
            </div>
            <div className="space-y-4">
              {[
                { name: "Elite Gaming Gear", commission: "15%", icon: Zap },
                { name: "SaaS Growth Masterclass", commission: "30%", icon: Sparkles },
                { name: "Digital Nomad Essentials", commission: "10%", icon: Globe }
              ].map((p, i) => (
                <div key={i} className="p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-emerald-500 flex items-center justify-between group transition-all cursor-pointer">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-sm">
                      <p.icon className="h-5 w-5 text-emerald-500" />
                    </div>
                    <div>
                      <p className="font-black text-slate-900">{p.name}</p>
                      <p className="text-[10px] text-emerald-600 font-bold uppercase tracking-widest">{p.commission} Commission</p>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" className="font-black text-xs text-emerald-600 group-hover:bg-emerald-100">Apply</Button>
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-600 shadow-2xl shadow-emerald-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Set Up Your Links</h2>
              <p className="text-slate-500 font-medium">We&apos;ve generated your first tracking links. You&apos;re ready to start promoting.</p>
            </div>
            <div className="space-y-4">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Link className="h-5 w-5 text-slate-400" />
                  <code className="text-sm font-bold text-slate-600">heybirdy.com/re/alex-elite</code>
                </div>
                <Button variant="outline" size="sm" className="rounded-xl font-bold border-emerald-200 text-emerald-600 hover:bg-emerald-50">Copy</Button>
              </div>
              <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                    <CreditCard className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <p className="font-black text-sm">Payouts Ready</p>
                    <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Next Step: Add Bank Info</p>
                  </div>
                </div>
                <Button size="sm" variant="ghost" className="font-black text-xs hover:bg-white/10 text-white">
                  Add Now
                </Button>
              </div>
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-emerald-500 hover:bg-emerald-600 shadow-2xl shadow-emerald-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 5 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-slate-900 text-white">
          <CardContent className="p-12 text-center space-y-8">
            <div className="h-24 w-24 bg-emerald-500 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-emerald-500/40 rotate-12">
              <CheckCircle2 className="h-12 w-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">Ready to Earn!</h2>
              <p className="text-slate-400 font-medium text-lg max-w-sm mx-auto">
                You&apos;re now part of the HeyBirdy affiliate network. Let&apos;s find your first program.
              </p>
            </div>
            <Button onClick={finish} className="w-full h-16 rounded-2xl font-black text-xl bg-emerald-500 hover:bg-emerald-600 text-white shadow-2xl shadow-emerald-500/20 scale-105">
              Enter Affiliate Dashboard
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

// --- Member Onboarding Sub-components ---

function MemberOnboarding({ step, nextStep, prevStep, finish }: OnboardingStepProps) {
  const stepsCount = 4
  const progress = (step / stepsCount) * 100

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between mb-8">
        <Button variant="ghost" onClick={prevStep} className="font-bold text-slate-500">
          <ChevronLeft className="mr-2 h-4 w-4" /> Back
        </Button>
        <div className="flex-1 max-w-xs mx-10">
          <Progress value={progress} className="h-2" />
        </div>
        <div className="text-sm font-black text-slate-400 uppercase tracking-widest">
          Step {step} of {stepsCount}
        </div>
      </div>

      {step === 1 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Interests</h2>
              <p className="text-slate-500 font-medium">What kind of content do you want to see?</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {["Marketing", "Web Dev", "Design", "Productivity", "Finance", "AI", "Gaming", "Photography"].map(n => (
                <div 
                  key={n} 
                  className="h-16 rounded-2xl border-2 border-slate-100 hover:border-purple-500 flex items-center justify-center font-black text-slate-600 hover:text-purple-600 hover:bg-purple-50 cursor-pointer transition-all"
                >
                  {n}
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-purple-500 hover:bg-purple-600 shadow-2xl shadow-purple-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 2 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Recommended Creators</h2>
              <p className="text-slate-500 font-medium">Follow these top creators to fill your feed.</p>
            </div>
            <div className="space-y-4">
              {[1, 2, 3].map(i => (
                <div key={i} className="flex items-center justify-between p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-purple-500 transition-all">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-xl bg-slate-200" />
                    <div>
                      <p className="font-black text-slate-900">Top Creator {i}</p>
                      <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">Tech & Design</p>
                    </div>
                  </div>
                  <Button variant="outline" className="rounded-xl font-bold border-purple-200 text-purple-600 hover:bg-purple-50">Follow</Button>
                </div>
              ))}
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-purple-500 hover:bg-purple-600 shadow-2xl shadow-purple-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 3 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-white">
          <CardContent className="p-10 space-y-8">
            <div className="space-y-2">
              <h2 className="text-3xl font-black text-slate-900">Rewards & Gamification</h2>
              <p className="text-slate-500 font-medium">Earn points for every action. Level up and unlock exclusive perks.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-purple-500 group transition-all">
                <div className="h-12 w-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <h4 className="font-black text-slate-900 mb-1">Rank Up</h4>
                <p className="text-xs text-slate-500 font-medium">Go from Bronze to Diamond.</p>
              </div>
              <div className="p-6 rounded-3xl bg-slate-50 border-2 border-transparent hover:border-purple-500 group transition-all">
                <div className="h-12 w-12 rounded-xl bg-emerald-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Gift className="h-6 w-6 text-emerald-600" />
                </div>
                <h4 className="font-black text-slate-900 mb-1">Earn Points</h4>
                <p className="text-xs text-slate-500 font-medium">Redeem for real-world prizes.</p>
              </div>
            </div>
            <div className="p-6 rounded-3xl bg-slate-900 text-white flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/10 flex items-center justify-center">
                  <Share2 className="h-5 w-5 text-purple-400" />
                </div>
                <div>
                  <p className="font-black text-sm">Refer a Friend</p>
                  <p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Get 500 Points Each</p>
                </div>
              </div>
              <Button size="sm" variant="ghost" className="font-black text-xs hover:bg-white/10 text-white">
                Get Link
              </Button>
            </div>
            <Button onClick={nextStep} className="w-full h-16 rounded-2xl font-black text-lg bg-purple-500 hover:bg-purple-600 shadow-2xl shadow-purple-500/20">
              Continue <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </CardContent>
        </Card>
      )}

      {step === 4 && (
        <Card className="border-none shadow-2xl rounded-[3rem] overflow-hidden bg-slate-900 text-white">
          <CardContent className="p-12 text-center space-y-8">
            <div className="h-24 w-24 bg-purple-500 rounded-[2rem] flex items-center justify-center mx-auto shadow-2xl shadow-purple-500/40 rotate-12">
              <ShieldCheck className="h-12 w-12 text-white" />
            </div>
            <div className="space-y-4">
              <h2 className="text-4xl font-black tracking-tight">You&apos;re Ready!</h2>
              <p className="text-slate-400 font-medium text-lg max-w-sm mx-auto">
                Explore, learn, and earn rewards while supporting your favorite creators.
              </p>
            </div>
            <Button onClick={finish} className="w-full h-16 rounded-2xl font-black text-xl bg-purple-500 hover:bg-purple-600 text-white shadow-2xl shadow-purple-500/20 scale-105">
              Enter Platform
            </Button>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
