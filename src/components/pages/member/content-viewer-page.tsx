"use client"

import Image from "next/image"
import { useState } from "react"
import { 
  MessageSquare, 
  Share2, 
  ShoppingBag, 
  Star, 
  ArrowRight,
  MoreVertical,
  Zap,
  CheckCircle2,
  Clock,
  Eye,
  ThumbsUp
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { VideoPlayer } from "@/components/shared/content/video-player"

const VIDEO_DATA = {
  id: "1",
  title: "Ultimate Gaming Setup 2024: The Productivity Beast",
  description: "In this video, I break down my entire desk setup for 2024. From the 49-inch ultrawide to the custom mechanical keyboard, every piece is chosen for maximum productivity and gaming performance.",
  views: "45.2K",
  date: "Jan 5, 2026",
  likes: "3.4K",
  creator: {
    name: "Alex Rivera",
    username: "arivera",
    avatar: "https://i.pravatar.cc/150?u=arivera",
    subscribers: "125K",
    verified: true
  }
}

const SHOP_ITEMS = [
  {
    id: "p1",
    name: "Samsung Odyssey G9 49\"",
    price: "$1,299.00",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=2070&auto=format&fit=crop",
    discount: "10% OFF",
    rating: 4.9
  },
  {
    id: "p2",
    name: "Keychron Q1 Pro Wireless",
    price: "$199.00",
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=2071&auto=format&fit=crop",
    discount: null,
    rating: 4.8
  },
  {
    id: "p3",
    name: "Logitech MX Master 3S",
    price: "$99.00",
    image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?q=80&w=2070&auto=format&fit=crop",
    discount: "5% OFF",
    rating: 4.7
  }
]

const COMMENTS = [
  {
    id: "c1",
    user: "Sarah Chen",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    text: "That monitor is absolutely insane! Adding it to my wishlist right now.",
    likes: 124,
    time: "2h ago"
  },
  {
    id: "c2",
    user: "Mike Ross",
    avatar: "https://i.pravatar.cc/150?u=mike",
    text: "Great breakdown Alex. Can you link the monitor arm you&apos;re using?",
    likes: 45,
    time: "5h ago"
  }
]

export function MemberContentViewerPage() {
  const [isLiked, setIsLiked] = useState(false)

  return (
    <div className="container mx-auto px-4 py-8 max-w-[1600px]">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
        
        {/* Main Content Area */}
        <div className="xl:col-span-8 space-y-8">
          {/* Video Player Section */}
          <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10">
            <VideoPlayer 
              src="https://example.com/video.mp4" 
              poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
              title={VIDEO_DATA.title}
            />
          </div>

          {/* Title & Stats */}
          <div className="space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <h1 className="text-3xl font-black tracking-tight text-slate-900 leading-tight">
                {VIDEO_DATA.title}
              </h1>
              <div className="flex items-center gap-3 shrink-0">
                <Button 
                  variant={isLiked ? "default" : "outline"} 
                  className={`h-12 px-6 rounded-2xl font-bold gap-2 transition-all ${isLiked ? 'bg-primary' : 'border-slate-200'}`}
                  onClick={() => setIsLiked(!isLiked)}
                >
                  <ThumbsUp className={`h-4 w-4 ${isLiked ? 'fill-current' : ''}`} /> {VIDEO_DATA.likes}
                </Button>
                <Button variant="outline" className="h-12 px-6 rounded-2xl border-slate-200 font-bold gap-2">
                  <Share2 className="h-4 w-4" /> Share
                </Button>
                <Button variant="outline" size="icon" className="h-12 w-12 rounded-2xl border-slate-200">
                  <MoreVertical className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Creator Info Bar */}
            <div className="flex items-center justify-between p-6 rounded-[2rem] bg-white border border-slate-100 shadow-sm">
              <div className="flex items-center gap-4">
                <Avatar className="h-14 w-14 border-2 border-slate-50">
                  <AvatarImage src={VIDEO_DATA.creator.avatar} />
                  <AvatarFallback>{VIDEO_DATA.creator.name[0]}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="font-black text-slate-900">{VIDEO_DATA.creator.name}</p>
                    {VIDEO_DATA.creator.verified && <CheckCircle2 className="h-4 w-4 text-primary" />}
                  </div>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">{VIDEO_DATA.creator.subscribers} Subscribers</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Button variant="outline" className="h-12 px-8 rounded-2xl font-bold border-slate-200 hover:bg-slate-50">
                  Visit Hub
                </Button>
                <Button className="h-12 px-8 rounded-2xl font-black shadow-xl shadow-primary/20">
                  Subscribe
                </Button>
              </div>
            </div>

            {/* Description Card */}
            <Card className="border-none shadow-sm bg-slate-50 rounded-[2rem] overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-4">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Eye className="h-4 w-4" /> {VIDEO_DATA.views} Views
                  </div>
                  <div className="flex items-center gap-2 text-xs font-black text-slate-400 uppercase tracking-widest">
                    <Clock className="h-4 w-4" /> {VIDEO_DATA.date}
                  </div>
                </div>
                <p className="text-slate-600 font-medium leading-relaxed">
                  {VIDEO_DATA.description}
                </p>
                <Button variant="link" className="p-0 h-auto text-primary font-bold mt-4">Show More</Button>
              </CardContent>
            </Card>
          </div>

          {/* Comments Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <MessageSquare className="h-6 w-6 text-slate-900" />
              <h2 className="text-2xl font-black tracking-tight text-slate-900">Comments</h2>
              <Badge variant="secondary" className="bg-slate-100 text-slate-600 border-none font-bold ml-2">
                2.4K
              </Badge>
            </div>

            <div className="flex gap-4">
              <Avatar className="h-12 w-12 border-2 border-slate-50">
                <AvatarImage src="https://i.pravatar.cc/150?u=me" />
                <AvatarFallback>ME</AvatarFallback>
              </Avatar>
              <div className="flex-1 space-y-4">
                <textarea 
                  placeholder="Add a comment..." 
                  className="w-full min-h-[100px] p-4 rounded-2xl border-slate-100 bg-white focus:ring-primary/20 focus:border-primary transition-all font-medium text-slate-900"
                />
                <div className="flex justify-end gap-3">
                  <Button variant="ghost" className="font-bold text-slate-500">Cancel</Button>
                  <Button className="rounded-xl font-black px-8">Comment</Button>
                </div>
              </div>
            </div>

            <div className="space-y-8 pt-4">
              {COMMENTS.map((comment) => (
                <div key={comment.id} className="flex gap-4 group">
                  <Avatar className="h-10 w-10 border-2 border-slate-50">
                    <AvatarImage src={comment.avatar} />
                    <AvatarFallback>{comment.user[0]}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 space-y-2">
                    <div className="flex items-center gap-3">
                      <p className="text-sm font-black text-slate-900">{comment.user}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{comment.time}</span>
                    </div>
                    <p className="text-slate-600 font-medium text-sm leading-relaxed">{comment.text}</p>
                    <div className="flex items-center gap-4 pt-1">
                      <button className="flex items-center gap-1.5 text-slate-400 hover:text-primary transition-colors">
                        <ThumbsUp className="h-3.5 w-3.5" />
                        <span className="text-xs font-bold">{comment.likes}</span>
                      </button>
                      <button className="text-xs font-bold text-slate-400 hover:text-slate-900 transition-colors uppercase tracking-widest">Reply</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Shop this Video */}
        <div className="xl:col-span-4 space-y-8">
          <div className="sticky top-8">
            <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden">
              <CardHeader className="p-8 pb-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <ShoppingBag className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-black tracking-tight text-slate-900">Shop the Video</CardTitle>
                    <CardDescription className="text-slate-500 font-medium">Get the gear featured in this guide</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8 pt-4">
                <div className="space-y-6">
                  {SHOP_ITEMS.map((item) => (
                    <div key={item.id} className="group relative bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 p-4 rounded-3xl transition-all duration-500 border border-transparent hover:border-slate-100">
                      <div className="flex gap-4">
                        <div className="h-24 w-24 rounded-2xl overflow-hidden shrink-0 relative">
                          <Image 
                            src={item.image} 
                            alt={item.name} 
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700" 
                          />
                        </div>
                        <div className="flex-1 flex flex-col justify-between py-1">
                          <div>
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-black text-slate-900 text-sm group-hover:text-primary transition-colors leading-tight line-clamp-1">{item.name}</h4>
                              <div className="flex items-center gap-1 text-[10px] font-black text-yellow-500">
                                <Star className="h-3 w-3 fill-current" /> {item.rating}
                              </div>
                            </div>
                            <div className="flex items-center gap-2">
                              <span className="font-black text-slate-900">{item.price}</span>
                              {item.discount && (
                                <Badge className="bg-green-100 text-green-600 border-none text-[8px] font-black uppercase tracking-widest px-2">
                                  {item.discount}
                                </Badge>
                              )}
                            </div>
                          </div>
                          <Button size="sm" className="h-9 w-full rounded-xl font-bold text-xs gap-2 mt-3 bg-white border-slate-200 text-slate-900 hover:bg-primary hover:text-white hover:border-primary transition-all group/btn">
                            Buy Now <ArrowRight className="h-3 w-3 transition-transform group-hover/btn:translate-x-1" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 p-6 rounded-3xl bg-slate-900 text-white relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-3 opacity-10 rotate-12 group-hover:scale-110 transition-transform">
                    <Zap className="h-16 w-16" />
                  </div>
                  <p className="text-[10px] font-black text-primary uppercase tracking-widest mb-2">Member Perk</p>
                  <h4 className="text-sm font-black mb-2">Save 15% with Birdy Rewards</h4>
                  <p className="text-[10px] text-slate-400 font-medium leading-relaxed mb-4">You have 2,400 points available to use on these items.</p>
                  <Button variant="secondary" className="w-full h-10 rounded-xl font-black text-[10px] uppercase tracking-widest">
                    Claim Discount
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Next Video Recommendation */}
            <div className="mt-8 space-y-4">
              <h3 className="text-lg font-black tracking-tight text-slate-900 ml-2">Up Next</h3>
              <Card className="border-none shadow-sm hover:shadow-xl transition-all duration-500 rounded-[2rem] bg-white overflow-hidden group cursor-pointer">
                <div className="relative h-40 overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?q=80&w=2070&auto=format&fit=crop" 
                    alt="Next Video" 
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white px-2 py-0.5 rounded text-[10px] font-bold">12:34</div>
                </div>
                <CardContent className="p-5">
                  <h4 className="font-black text-slate-900 group-hover:text-primary transition-colors leading-tight mb-2">Top 5 Mechanical Keyboards of 2024</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Alex Rivera • 128K Views</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
