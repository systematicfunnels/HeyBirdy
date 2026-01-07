"use client"

import { 
  MoreVertical, 
  Download,
  Eye,
  Star,
  Edit2,
  Trash2
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu"
import Image from "next/image"

export interface CreatorProduct {
  id: string | number
  name: string
  category: string
  price: string
  sales: number
  revenue: string
  rating: number
  status: string
  image: string
}

interface ProductCardProps {
  product: CreatorProduct
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Card className="border-none shadow-sm hover:shadow-2xl transition-all duration-500 rounded-[2.5rem] bg-white group overflow-hidden">
      <CardContent className="p-0">
        <div className="flex flex-col sm:flex-row">
          <div className="relative sm:w-48 h-48 sm:h-auto overflow-hidden">
            <Image 
              src={product.image} 
              alt={product.name}
              fill
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute top-4 left-4">
              <Badge className={`${
                product.status === 'Active' ? 'bg-green-500' : 'bg-slate-500'
              } text-white border-none font-bold text-[10px] uppercase tracking-widest px-3 py-1 rounded-full shadow-lg`}>
                {product.status}
              </Badge>
            </div>
          </div>
          <div className="flex-1 p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-2">
                <div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-1">{product.category}</p>
                  <h3 className="text-xl font-black text-slate-900 leading-tight group-hover:text-primary transition-colors">{product.name}</h3>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-slate-50">
                      <MoreVertical className="h-5 w-5 text-slate-400" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="rounded-2xl p-2 border-slate-100 shadow-xl">
                    <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 cursor-pointer">
                      <Edit2 className="h-4 w-4" /> Edit Details
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 cursor-pointer">
                      <Eye className="h-4 w-4" /> View Storefront
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 cursor-pointer">
                      <Download className="h-4 w-4" /> Export Sales
                    </DropdownMenuItem>
                    <DropdownMenuItem className="rounded-xl font-bold py-3 gap-3 text-red-600 focus:text-red-600 cursor-pointer">
                      <Trash2 className="h-4 w-4" /> Delete Product
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-black text-slate-900">{product.rating}</span>
                </div>
                <div className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="text-sm font-bold text-slate-500">{product.sales} sales</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6 border-t border-slate-50">
              <div>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Price</p>
                <p className="text-2xl font-black text-slate-900">{product.price}</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">Total Revenue</p>
                <p className="text-2xl font-black text-primary">{product.revenue}</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
