'use client' 
 
import React from 'react' 
import { Button } from '@/components/ui/button' 
 
interface ErrorBoundaryProps { 
  children: React.ReactNode 
  fallback?: React.ReactNode 
} 
 
interface ErrorBoundaryState { 
  hasError: boolean 
  error?: Error 
} 
 
export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> { 
  constructor(props: ErrorBoundaryProps) { 
    super(props) 
    this.state = { hasError: false } 
  } 
 
  static getDerivedStateFromError(error: Error): ErrorBoundaryState { 
    return { hasError: true, error } 
  } 
 
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) { 
    // Log error to monitoring service 
    console.error('Error caught by boundary:', error, errorInfo) 
 
    // Send to error tracking service 
    if (typeof window !== 'undefined') { 
      fetch('/api/error-report', { 
        method: 'POST', 
        body: JSON.stringify({ 
          error: error.message, 
          stack: error.stack, 
          componentStack: errorInfo.componentStack, 
          url: window.location.href, 
          userAgent: navigator.userAgent, 
        }), 
      }).catch(console.error)
    } 
  } 
 
  render() { 
    if (this.state.hasError) { 
      return this.props.fallback || ( 
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4"> 
          <div className="text-center max-w-md"> 
            <h1 className="text-2xl font-bold text-gray-900 mb-4"> 
              Something went wrong 
            </h1> 
            <p className="text-gray-600 mb-6"> 
              We apologize for the inconvenience. Please try refreshing the page. 
            </p> 
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
              <Button onClick={() => window.location.reload()}> 
                Refresh Page 
              </Button> 
              <Button variant="outline" onClick={() => window.location.href = '/'}> 
                Go Home 
              </Button> 
            </div> 
          </div> 
        </div> 
      ) 
    } 
 
    return this.props.children 
  } 
} 
