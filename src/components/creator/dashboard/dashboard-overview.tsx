'use client'

import { useQuery } from '@tanstack/react-query'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Skeleton } from '@/components/ui/skeleton'
import { getDashboardData } from '@/services/dashboard.service'

export function DashboardOverview() {
  const { data, isLoading } = useQuery({
    queryKey: ['dashboard', 'overview'],
    queryFn: () => getDashboardData(),
    refetchInterval: 30000,
  })

  if (isLoading) {
    return (
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {[...Array(4)].map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <Skeleton className="h-4 w-[100px]" />
            </CardHeader>
            <CardContent>
              <Skeleton className="h-8 w-[60px]" />
            </CardContent>
          </Card>
        ))}
      </div>
    )
  }

  const stats = [
    { title: 'Total Earnings', value: `$${data?.totalEarnings.toLocaleString()}` },
    { title: 'Active Affiliates', value: data?.activeAffiliates.toString() },
    { title: 'Content Views', value: data?.contentViews.toLocaleString() },
    { title: 'Conversion Rate', value: `${data?.conversionRate}%` },
  ]

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
