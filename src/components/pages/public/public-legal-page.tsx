"use client"

import { Shield, FileText, Eye } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function PublicLegalPage() {
  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-slate-900 mb-4">Legal Center</h1>
          <p className="text-slate-500 font-medium text-lg max-w-2xl mx-auto">
            Everything you need to know about our terms, privacy policies, and how we handle your data.
          </p>
        </div>

        <Tabs defaultValue="terms" className="space-y-8">
          <TabsList className="bg-slate-100/50 p-1 rounded-2xl flex flex-wrap h-auto gap-1">
            <TabsTrigger value="terms" className="flex-1 min-w-[150px] rounded-xl py-3 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Terms of Service
            </TabsTrigger>
            <TabsTrigger value="privacy" className="flex-1 min-w-[150px] rounded-xl py-3 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Privacy Policy
            </TabsTrigger>
            <TabsTrigger value="cookies" className="flex-1 min-w-[150px] rounded-xl py-3 font-bold data-[state=active]:bg-white data-[state=active]:shadow-sm">
              Cookie Policy
            </TabsTrigger>
          </TabsList>

          <TabsContent value="terms" className="mt-0">
            <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-8 md:p-12 pb-4">
                <div className="h-14 w-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <FileText className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-black">Terms of Service</CardTitle>
                <CardDescription className="text-base font-medium">Last Updated: January 2026</CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-12 pt-4 prose prose-slate max-w-none">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-black text-slate-900 mb-4">1. Acceptance of Terms</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      By accessing or using the HeyBirdy platform, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-xl font-black text-slate-900 mb-4">2. User Conduct</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      Users are responsible for their own conduct and any content they provide. You agree not to use the platform for any illegal or unauthorized purposes.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-xl font-black text-slate-900 mb-4">3. Intellectual Property</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      All content, trademarks, and data on this site are the property of HeyBirdy or its licensors and are protected by international intellectual property laws.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="privacy" className="mt-0">
            <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-8 md:p-12 pb-4">
                <div className="h-14 w-14 rounded-2xl bg-blue-500/10 flex items-center justify-center text-blue-600 mb-6">
                  <Shield className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-black">Privacy Policy</CardTitle>
                <CardDescription className="text-base font-medium">Last Updated: January 2026</CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-12 pt-4 prose prose-slate max-w-none">
                <div className="space-y-8">
                  <section>
                    <h3 className="text-xl font-black text-slate-900 mb-4">1. Data Collection</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We collect information you provide directly to us, such as when you create an account, update your profile, or use our interactive features.
                    </p>
                  </section>
                  <section>
                    <h3 className="text-xl font-black text-slate-900 mb-4">2. Use of Information</h3>
                    <p className="text-slate-600 leading-relaxed font-medium">
                      We use the information we collect to provide, maintain, and improve our services, and to communicate with you.
                    </p>
                  </section>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cookies" className="mt-0">
            <Card className="border-none shadow-xl rounded-[2.5rem] overflow-hidden">
              <CardHeader className="p-8 md:p-12 pb-4">
                <div className="h-14 w-14 rounded-2xl bg-amber-500/10 flex items-center justify-center text-amber-600 mb-6">
                  <Eye className="h-8 w-8" />
                </div>
                <CardTitle className="text-3xl font-black">Cookie Policy</CardTitle>
                <CardDescription className="text-base font-medium">Last Updated: January 2026</CardDescription>
              </CardHeader>
              <CardContent className="p-8 md:p-12 pt-4 prose prose-slate max-w-none">
                <div className="space-y-8">
                  <p className="text-slate-600 leading-relaxed font-medium text-lg">
                    We use cookies and similar technologies to help personalize content, tailor and measure ads, and provide a better experience.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
