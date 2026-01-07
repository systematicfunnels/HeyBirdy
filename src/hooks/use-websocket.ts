import { useEffect } from 'react' 
import { socketClient } from '@/lib/socket/client' 
import { useAuthStore } from '@/store/auth.store' 
 
export function useWebSocket(event: string, callback: (...args: unknown[]) => void) { 
  const { user } = useAuthStore() 
 
  useEffect(() => { 
    if (!user) return 
 
    socketClient.connect() 
    socketClient.on(event, callback) 
 
    return () => { 
      socketClient.disconnect() 
    } 
  }, [user, event, callback]) 
} 
