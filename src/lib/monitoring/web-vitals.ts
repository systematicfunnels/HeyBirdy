import { onCLS, onINP, onFCP, onLCP, onTTFB, type Metric } from 'web-vitals' 

export function reportWebVitals() { 
  if (typeof window === 'undefined') return 

  onCLS(sendToAnalytics) 
  onINP(sendToAnalytics) 
  onFCP(sendToAnalytics) 
  onLCP(sendToAnalytics) 
  onTTFB(sendToAnalytics) 
} 
 
function sendToAnalytics(metric: Metric) { 
  const body = { 
    name: metric.name, 
    value: metric.value, 
    id: metric.id, 
    rating: metric.rating, 
  } 
 
  // Send to your analytics 
  if (process.env.NODE_ENV === 'production') {
    fetch('/api/analytics/web-vitals', { 
      method: 'POST', 
      body: JSON.stringify(body), 
      headers: { 'Content-Type': 'application/json' }, 
    }).catch(console.error)
  } else {
    console.log('[Web Vitals]', metric.name, metric.value)
  }
} 
