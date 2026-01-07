import { io, Socket } from 'socket.io-client' 
import { useAuthStore } from '@/store/auth.store' 
 
type SocketCallback = (...args: unknown[]) => void

class SocketClient { 
  private socket: Socket | null = null 
  private listeners: Map<string, SocketCallback[]> = new Map() 
 
  connect() { 
    const { token } = useAuthStore.getState() 
 
    this.socket = io(process.env.NEXT_PUBLIC_SOCKET_URL || 'wss://api.heybirdy.com', { 
      auth: { token }, 
      transports: ['websocket', 'polling'], 
      reconnection: true, 
      reconnectionAttempts: 5, 
      reconnectionDelay: 1000, 
    }) 
 
    this.setupEventListeners() 
  } 
 
  private setupEventListeners() { 
    if (!this.socket) return 
 
    this.socket.on('connect', () => { 
      console.log('Socket connected') 
      this.emit('user_online', { userId: useAuthStore.getState().user?.id }) 
    }) 
 
    this.socket.on('disconnect', () => { 
      console.log('Socket disconnected') 
    }) 
 
    this.socket.on('earnings_update', (data) => { 
      this.trigger('earnings_update', data) 
    }) 
 
    this.socket.on('new_notification', (data) => { 
      this.trigger('new_notification', data) 
    }) 
  } 
 
  on(event: string, callback: SocketCallback) { 
    if (!this.listeners.has(event)) { 
      this.listeners.set(event, []) 
    } 
    this.listeners.get(event)!.push(callback) 
  } 
 
  emit(event: string, data: unknown) { 
    this.socket?.emit(event, data) 
  } 
 
  private trigger(event: string, data: unknown) { 
    const callbacks = this.listeners.get(event) || [] 
    callbacks.forEach(callback => callback(data)) 
  } 
 
  disconnect() { 
    this.socket?.disconnect() 
    this.listeners.clear() 
    this.socket = null
  } 
} 
 
export const socketClient = new SocketClient() 
