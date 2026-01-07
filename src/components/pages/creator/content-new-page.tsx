"use client"

import { 
  Upload, 
  Video, 
  ChevronLeft,
  Eye,
  Globe,
  Hash,
  Lock as LockIcon,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
  Info,
  Settings2,
  Layout,
  Link as LinkIcon,
  Search,
  PlusCircle,
  ListOrdered,
  DollarSign,
  Percent,
  Trash2,
  GripVertical
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Switch } from "@/components/ui/switch"
import { useState } from "react"
import Link from "next/link"
import { ROUTES } from "@/lib/constants/routes"

const STEPS = [
  { id: 1, title: "Media", icon: Video },
  { id: 2, title: "Configure", icon: Layout },
  { id: 3, title: "Launch", icon: Eye },
]

interface MarketplaceProduct {
  id: string;
  name: string;
  price: string;
  commission: string;
  category: string;
}

export function CreatorContentNewPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [dragActive, setDragActive] = useState(false)
  const [showTemplates, setShowTemplates] = useState(false)
  const [selectedProducts, setSelectedProducts] = useState<MarketplaceProduct[]>([])
  const [chapters, setChapters] = useState([
    { id: 1, title: "Introduction", duration: "05:00" },
    { id: 2, title: "Getting Started", duration: "12:30" }
  ])
  const [pricingType, setPricingType] = useState<'free' | 'one-time' | 'subscription'>('free')
  const [price, setPrice] = useState("0.00")
  const [affiliateEnabled, setAffiliateEnabled] = useState(true)
  const [commissionRate, setCommissionRate] = useState("20")

  const addChapter = () => {
    const newId = chapters.length > 0 ? Math.max(...chapters.map(c => c.id)) + 1 : 1
    setChapters([...chapters, { id: newId, title: "", duration: "00:00" }])
  }

  const removeChapter = (id: number) => {
    setChapters(chapters.filter(c => c.id !== id))
  }

  const updateChapter = (id: number, field: string, value: string) => {
    setChapters(chapters.map(c => c.id === id ? { ...c, [field]: value } : c))
  }

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1))

  const MOCK_PRODUCTS = [
    { id: 'p1', name: 'Ultimate UI Kit', price: '$45', commission: '20%', category: 'Design' },
    { id: 'p2', name: 'Content Strategy Pro', price: '$199', commission: '15%', category: 'Business' },
    { id: 'p3', name: 'Gaming Assets Pack', price: '$29', commission: '30%', category: 'Gaming' },
  ]

  const TEMPLATES = [
    { id: 't1', name: 'Product Review', desc: 'Pre-filled structure for reviews' },
    { id: 't2', name: 'Tutorial / How-to', desc: 'Optimized for educational content' },
    { id: 't3', name: 'Storytelling / Vlog', desc: 'Focus on narrative and engagement' },
  ]

  return (
    <div className="max-w-5xl mx-auto space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="icon" className="h-12 w-12 rounded-2xl bg-white shadow-sm" asChild>
            <Link href={ROUTES.CREATOR.CONTENT.ALL}>
              <ChevronLeft className="h-6 w-6 text-slate-900" />
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-black tracking-tight text-slate-900">Create New Content</h1>
            <p className="text-slate-500 font-medium text-sm">Upload and publish your next masterpiece</p>
          </div>
        </div>
        
        {/* Step Indicator */}
        <div className="flex items-center gap-2 bg-white p-2 rounded-2xl shadow-sm border border-slate-100">
          {STEPS.map((step) => (
            <div key={step.id} className="flex items-center">
              <div className={`h-10 px-4 rounded-xl flex items-center gap-2 transition-all duration-300 ${
                currentStep === step.id ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'text-slate-400'
              }`}>
                <step.icon className={`h-4 w-4 ${currentStep === step.id ? 'animate-pulse' : ''}`} />
                <span className="text-xs font-black uppercase tracking-widest hidden sm:inline">{step.title}</span>
              </div>
              {step.id < 3 && <div className="w-4 h-px bg-slate-100 mx-1" />}
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Form Area */}
        <div className="lg:col-span-2 space-y-8">
          {currentStep === 1 && (
            <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
              <CardContent className="p-10">
                <div 
                  className={`relative border-2 border-dashed rounded-[2rem] p-12 flex flex-col items-center justify-center text-center transition-all duration-500 group ${
                    dragActive ? 'border-primary bg-primary/5 scale-[0.98]' : 'border-slate-100 hover:border-primary/50 bg-slate-50/50'
                  }`}
                  onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                  onDragLeave={() => setDragActive(false)}
                  onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
                >
                  <div className="h-24 w-24 rounded-full bg-white shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-500">
                    <Upload className="h-10 w-10 text-primary" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 mb-2">Drag & drop your video</h3>
                  <p className="text-slate-500 font-medium mb-8 max-w-xs mx-auto">
                    MP4, MOV or WebM. Up to 1GB and 4K resolution supported.
                  </p>
                  <Button className="h-12 px-8 rounded-xl font-bold shadow-xl shadow-primary/20">
                    Browse Files
                  </Button>
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" />
                </div>

                <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-6 rounded-2xl bg-blue-50/50 border border-blue-100 flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-blue-500 flex items-center justify-center shrink-0 shadow-lg shadow-blue-200">
                      <Video className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-blue-900 text-sm">Pro Quality</p>
                      <p className="text-xs text-blue-700/70 font-medium">Automatic optimization for 4K streaming</p>
                    </div>
                  </div>
                  <div className="p-6 rounded-2xl bg-purple-50/50 border border-purple-100 flex gap-4">
                    <div className="h-10 w-10 rounded-xl bg-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-purple-200">
                      <Globe className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <p className="font-black text-purple-900 text-sm">Global CDN</p>
                      <p className="text-xs text-purple-700/70 font-medium">Blazing fast playback across 120+ regions</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {currentStep === 2 && (
            <div className="space-y-8">
              {/* Template Selector */}
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Layout className="h-5 w-5" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900">Use a Template</h4>
                        <p className="text-xs text-slate-500 font-medium">Speed up your workflow with pre-built structures</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="rounded-xl font-bold"
                      onClick={() => setShowTemplates(!showTemplates)}
                    >
                      {showTemplates ? "Hide Templates" : "Browse Templates"}
                    </Button>
                  </div>
                  
                  {showTemplates && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
                      {TEMPLATES.map(t => (
                        <div key={t.id} className="p-4 rounded-2xl bg-slate-50 border-2 border-transparent hover:border-primary/30 cursor-pointer group transition-all">
                          <p className="font-black text-sm text-slate-900 group-hover:text-primary transition-colors">{t.name}</p>
                          <p className="text-[10px] text-slate-500 font-medium mt-1 leading-relaxed">{t.desc}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Main Details */}
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white">
                <CardContent className="p-10 space-y-8">
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Content Title</Label>
                    <Input placeholder="Give your content a catchy name..." className="h-14 bg-slate-50 border-none rounded-2xl font-bold text-lg px-6 focus-visible:ring-primary/20" />
                  </div>
                  <div className="space-y-3">
                    <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Description</Label>
                    <Textarea 
                      placeholder="Tell your audience what this is about..." 
                      className="min-h-[200px] bg-slate-50 border-none rounded-2xl font-medium p-6 focus-visible:ring-primary/20 resize-none" 
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Category</Label>
                      <div className="flex gap-2 flex-wrap">
                        {["Gaming", "Tech", "Lifestyle", "Education"].map(cat => (
                          <Badge key={cat} variant="outline" className="h-10 px-4 rounded-xl font-bold border-slate-100 bg-slate-50 text-slate-600 hover:bg-primary hover:text-white hover:border-primary transition-all cursor-pointer">
                            {cat}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="space-y-3">
                      <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Tags</Label>
                      <div className="relative group">
                        <Hash className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input placeholder="Add tags (separated by commas)" className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-medium" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Chapters / Segments */}
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                <CardContent className="p-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600">
                        <ListOrdered className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900">Chapters & Segments</h4>
                        <p className="text-sm text-slate-500 font-medium">Break your content into digestible parts</p>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      className="rounded-xl font-bold border-amber-100 text-amber-600 hover:bg-amber-50"
                      onClick={addChapter}
                    >
                      <PlusCircle className="h-4 w-4 mr-2" />
                      Add Chapter
                    </Button>
                  </div>

                  <div className="space-y-3">
                    {chapters.map((chapter, index) => (
                      <div key={chapter.id} className="flex items-center gap-4 p-4 rounded-2xl bg-slate-50/50 border border-slate-100 group transition-all hover:border-amber-200">
                        <GripVertical className="h-5 w-5 text-slate-300 cursor-grab" />
                        <div className="flex-1 grid grid-cols-4 gap-4">
                          <div className="col-span-3">
                            <Input 
                              value={chapter.title} 
                              onChange={(e) => updateChapter(chapter.id, 'title', e.target.value)}
                              placeholder={`Chapter ${index + 1} Title`} 
                              className="h-10 bg-white border-none rounded-lg font-bold px-4" 
                            />
                          </div>
                          <div>
                            <Input 
                              value={chapter.duration}
                              onChange={(e) => updateChapter(chapter.id, 'duration', e.target.value)}
                              placeholder="00:00" 
                              className="h-10 bg-white border-none rounded-lg font-bold px-4 text-center" 
                            />
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          className="h-10 w-10 rounded-xl text-slate-300 hover:text-red-500 hover:bg-red-50"
                          onClick={() => removeChapter(chapter.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Pricing & Affiliate Settings */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Pricing Section */}
                <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <DollarSign className="h-5 w-5" />
                      </div>
                      <h4 className="font-black text-slate-900">Pricing</h4>
                    </div>

                    <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-xl">
                      {(['free', 'one-time', 'subscription'] as const).map((type) => (
                        <button
                          key={type}
                          onClick={() => setPricingType(type)}
                          className={`py-2 px-3 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all ${
                            pricingType === type 
                              ? 'bg-white text-blue-600 shadow-sm' 
                              : 'text-slate-400 hover:text-slate-600'
                          }`}
                        >
                          {type.replace('-', ' ')}
                        </button>
                      ))}
                    </div>

                    {pricingType !== 'free' && (
                      <div className="space-y-3 animate-in fade-in slide-in-from-top-2 duration-300">
                        <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                          {pricingType === 'one-time' ? 'One-time Price' : 'Monthly Subscription'}
                        </Label>
                        <div className="relative">
                          <DollarSign className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                          <Input 
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                            placeholder="0.00" 
                            className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-bold" 
                          />
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Affiliate Settings */}
                <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                  <CardContent className="p-8 space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="h-10 w-10 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600">
                          <Percent className="h-5 w-5" />
                        </div>
                        <h4 className="font-black text-slate-900">Affiliate Mode</h4>
                      </div>
                      <Switch 
                        checked={affiliateEnabled} 
                        onCheckedChange={setAffiliateEnabled}
                        className="data-[state=checked]:bg-purple-500" 
                      />
                    </div>

                    {affiliateEnabled ? (
                      <div className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="space-y-3">
                          <Label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Creator Commission</Label>
                          <div className="relative">
                            <Percent className="absolute right-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
                            <Input 
                              value={commissionRate}
                              onChange={(e) => setCommissionRate(e.target.value)}
                              placeholder="20" 
                              className="h-12 bg-slate-50 border-none rounded-xl font-bold pr-11" 
                            />
                          </div>
                          <p className="text-[10px] text-slate-400 font-medium">Affiliates will earn this percentage from each sale.</p>
                        </div>
                      </div>
                    ) : (
                      <div className="p-4 rounded-xl bg-slate-50 text-slate-400 text-xs font-medium italic text-center">
                        Affiliate promotion is currently disabled for this content.
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Affiliate Linking */}
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                <CardContent className="p-10 space-y-8">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                        <LinkIcon className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className="font-black text-slate-900">Affiliate Products</h4>
                        <p className="text-sm text-slate-500 font-medium">Link products to this content and earn commissions</p>
                      </div>
                    </div>
                    <Badge className="bg-emerald-500 text-white font-black px-4 py-1.5 rounded-lg">
                      {selectedProducts.length} Linked
                    </Badge>
                  </div>

                  <div className="relative group">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-emerald-500 transition-colors" />
                    <Input placeholder="Search marketplace for products to link..." className="pl-11 h-14 bg-slate-50 border-none rounded-2xl font-bold" />
                  </div>

                  <div className="grid grid-cols-1 gap-3">
                    {MOCK_PRODUCTS.map(product => {
                      const isSelected = selectedProducts.find(p => p.id === product.id)
                      return (
                        <div 
                          key={product.id} 
                          className={`p-4 rounded-2xl border-2 transition-all flex items-center justify-between group ${
                            isSelected ? 'border-emerald-500 bg-emerald-50/50' : 'border-slate-50 bg-slate-50/30 hover:border-slate-100'
                          }`}
                        >
                          <div className="flex items-center gap-4">
                            <div className={`h-10 w-10 rounded-xl flex items-center justify-center font-black text-xs ${
                              isSelected ? 'bg-emerald-500 text-white' : 'bg-white text-slate-400'
                            }`}>
                              {product.category[0]}
                            </div>
                            <div>
                              <p className="font-black text-slate-900 text-sm">{product.name}</p>
                              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                                {product.price} • {product.commission} Commission
                              </p>
                            </div>
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className={`h-10 w-10 rounded-xl ${
                              isSelected ? 'text-emerald-600 bg-emerald-100' : 'text-slate-400 hover:text-emerald-600 hover:bg-emerald-50'
                            }`}
                            onClick={() => {
                              if (isSelected) {
                                setSelectedProducts(prev => prev.filter(p => p.id !== product.id))
                              } else {
                                setSelectedProducts(prev => [...prev, product])
                              }
                            }}
                          >
                            {isSelected ? <CheckCircle2 className="h-5 w-5" /> : <PlusCircle className="h-5 w-5" />}
                          </Button>
                        </div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {currentStep === 3 && (
            <div className="space-y-8">
              <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
                <CardContent className="p-10 space-y-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between p-6 rounded-3xl bg-slate-50 border border-slate-100 group hover:border-primary/30 transition-all cursor-pointer">
                      <div className="flex items-center gap-6">
                        <div className="h-14 w-14 rounded-2xl bg-white shadow-sm flex items-center justify-center">
                          <Globe className="h-7 w-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-black text-slate-900">Public</p>
                          <p className="text-sm text-slate-500 font-medium">Anyone can search for and view this content</p>
                        </div>
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-primary flex items-center justify-center">
                        <div className="h-3 w-3 rounded-full bg-primary" />
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between p-6 rounded-3xl bg-white border border-slate-100 group hover:border-primary/30 transition-all cursor-pointer opacity-60">
                      <div className="flex items-center gap-6">
                        <div className="h-14 w-14 rounded-2xl bg-slate-50 flex items-center justify-center">
                          <LockIcon className="h-7 w-7 text-slate-400" />
                        </div>
                        <div>
                          <p className="font-black text-slate-900">Private</p>
                          <p className="text-sm text-slate-500 font-medium">Only you and selected members can view</p>
                        </div>
                      </div>
                      <div className="h-6 w-6 rounded-full border-2 border-slate-200" />
                    </div>
                  </div>

                  <div className="pt-10 border-t border-slate-100">
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h4 className="font-black text-slate-900">Schedule Publication</h4>
                        <p className="text-sm text-slate-500 font-medium">Pick a date and time for your content to go live</p>
                      </div>
                      <Switch className="data-[state=checked]:bg-primary" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="relative group">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input type="date" className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-medium" />
                      </div>
                      <div className="relative group">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-primary transition-colors" />
                        <Input type="time" className="pl-11 h-12 bg-slate-50 border-none rounded-xl font-medium" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Success Preview */}
              <div className="p-8 rounded-[2.5rem] bg-slate-900 text-white flex items-center justify-between gap-8 group">
                <div className="flex items-center gap-6">
                  <div className="h-16 w-16 rounded-2xl bg-primary/20 flex items-center justify-center">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-black">Ready to launch?</h4>
                    <p className="text-slate-400 text-sm font-medium">Review your settings and click publish to go live.</p>
                  </div>
                </div>
                <Button className="h-14 px-10 rounded-2xl font-black bg-primary hover:bg-primary/90 text-white shadow-2xl shadow-primary/20 group-hover:scale-105 transition-all">
                  Publish Now
                </Button>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between pt-10">
            <Button 
              variant="ghost" 
              className={`h-12 px-8 rounded-xl font-bold text-slate-500 hover:bg-slate-100 ${currentStep === 1 ? 'invisible' : ''}`}
              onClick={prevStep}
            >
              Previous Step
            </Button>
            {currentStep < 3 ? (
              <Button 
                className="h-12 px-10 rounded-xl font-bold shadow-xl shadow-primary/20 group"
                onClick={nextStep}
              >
                Continue <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            ) : null}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-white overflow-hidden">
            <CardContent className="p-8 space-y-8">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-orange-50 flex items-center justify-center">
                  <Info className="h-5 w-5 text-orange-500" />
                </div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Creator Tips</p>
              </div>
              <div className="space-y-6">
                <div className="space-y-2">
                  <p className="text-sm font-black text-slate-900">High Quality Thumbnail</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Use a 1280x720px image for the best results across all devices.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-black text-slate-900">Engaging Title</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Keep it under 60 characters to avoid truncation in search results.</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm font-black text-slate-900">SEO Tags</p>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">Add at least 5 relevant tags to help people discover your content.</p>
                </div>
              </div>
              <Button variant="outline" className="w-full h-12 rounded-xl font-bold border-slate-100 text-slate-600 hover:bg-slate-50 transition-all">
                Full Creator Guide
              </Button>
            </CardContent>
          </Card>

          {/* Live Preview Placeholder */}
          <Card className="border-none shadow-sm rounded-[2.5rem] bg-slate-900 overflow-hidden relative group">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-50" />
            <CardContent className="p-8 relative z-10 text-white text-center space-y-6">
              <div className="h-12 w-12 rounded-xl bg-white/10 flex items-center justify-center mx-auto">
                <Settings2 className="h-6 w-6 text-white" />
              </div>
              <div>
                <h4 className="font-black">Advanced Settings</h4>
                <p className="text-xs text-slate-400 mt-2">Monetization, ads, and more</p>
              </div>
              <Button className="w-full h-12 rounded-xl font-bold bg-white/10 hover:bg-white/20 border-none text-white">
                Configure
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
