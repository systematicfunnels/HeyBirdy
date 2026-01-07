"use client"

import { 
  Plus, 
  Search, 
  Filter, 
  ShoppingBag, 
  DollarSign, 
  Package, 
  TrendingUp,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ProductCard, type CreatorProduct } from "@/components/creator/monetization/product-card"

const STATS = [
  { title: "Total Sales", value: "1,284", change: "+15.4%", icon: ShoppingBag },
  { title: "Active Products", value: "24", change: "+2", icon: Package },
  { title: "Product Revenue", value: "$42,850", change: "+12.8%", icon: DollarSign },
  { title: "Conversion Rate", value: "3.2%", change: "+0.4%", icon: TrendingUp },
]

const PRODUCTS: CreatorProduct[] = [
  {
    id: 1,
    name: "Mastering Video Editing",
    category: "Course",
    price: "$99.00",
    sales: 450,
    revenue: "$44,550",
    rating: 4.9,
    status: "Active",
    image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Creator Presets Pack v2",
    category: "Digital Asset",
    price: "$29.00",
    sales: 820,
    revenue: "$23,780",
    rating: 4.8,
    status: "Active",
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?q=80&w=2070&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Sponsorship Outreach Templates",
    category: "E-book",
    price: "$15.00",
    sales: 125,
    revenue: "$1,875",
    rating: 4.7,
    status: "Draft",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=1973&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "1-on-1 Consultation",
    category: "Service",
    price: "$199.00",
    sales: 42,
    revenue: "$8,358",
    rating: 5.0,
    status: "Active",
    image: "https://images.unsplash.com/photo-1515162305285-0293e4767cc2?q=80&w=2071&auto=format&fit=crop"
  }
]

export function CreatorMonetizationProductsPage() {
  return (
    <div className="space-y-10 pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900 mb-2">Digital Products</h1>
          <p className="text-slate-500 font-medium">Create and manage your digital storefront.</p>
        </div>
        <Button className="h-14 px-8 rounded-2xl font-black text-base shadow-xl shadow-primary/20 hover:shadow-2xl hover:shadow-primary/30 transition-all duration-300 gap-2">
          <Plus className="h-5 w-5" /> Create Product
        </Button>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {STATS.map((stat) => (
          <Card key={stat.title} className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white group">
            <CardContent className="p-8">
              <div className="flex items-center justify-between mb-4">
                <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-500">
                  <stat.icon className="h-6 w-6 text-slate-400 group-hover:text-primary transition-colors duration-500" />
                </div>
                <Badge className="bg-green-100 text-green-600 border-none font-bold text-[10px] uppercase tracking-widest">
                  {stat.change}
                </Badge>
              </div>
              <div className="space-y-1">
                <p className="text-sm font-black text-slate-400 uppercase tracking-widest">{stat.title}</p>
                <p className="text-3xl font-black text-slate-900">{stat.value}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Main Content */}
      <div className="space-y-6">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <Tabs defaultValue="all" className="w-full md:w-auto">
            <TabsList className="bg-slate-100/50 p-1 rounded-2xl h-14">
              <TabsTrigger value="all" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">All Products</TabsTrigger>
              <TabsTrigger value="active" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Active</TabsTrigger>
              <TabsTrigger value="drafts" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Drafts</TabsTrigger>
              <TabsTrigger value="archived" className="rounded-xl px-6 font-black data-[state=active]:bg-white data-[state=active]:shadow-sm">Archived</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400 group-focus-within:text-primary transition-colors" />
              <Input 
                placeholder="Search products..." 
                className="h-14 pl-12 pr-4 w-full md:w-[300px] rounded-2xl border-slate-100 bg-white focus:ring-primary/20 transition-all"
              />
            </div>
            <Button variant="outline" className="h-14 w-14 rounded-2xl border-slate-100 bg-white hover:bg-slate-50 transition-all">
              <Filter className="h-5 w-5 text-slate-600" />
            </Button>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State / Load More */}
        <div className="flex flex-col items-center justify-center py-12">
          <Button variant="outline" className="h-14 px-8 rounded-2xl font-black text-slate-600 border-slate-100 hover:bg-slate-50 transition-all gap-2">
            Load More Products
          </Button>
        </div>
      </div>
    </div>
  )
}
