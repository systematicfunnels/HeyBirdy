import { create } from 'zustand' 
import { persist } from 'zustand/middleware' 
import { User, LoginCredentials } from '@/types/user.types'
import apiClient from '@/lib/api/client'

interface AuthState { 
  user: User | null 
  token: string | null 
  isLoading: boolean 
  login: (credentials: LoginCredentials) => Promise<void> 
  register: (data: { name: string; email: string; password?: string }) => Promise<void>
  logout: () => Promise<void> 
  refresh: () => Promise<void> 
} 

export const useAuthStore = create<AuthState>()( 
  persist( 
    (set, get) => ({ 
      user: null, 
      token: null, 
      isLoading: false, 

      login: async (credentials) => { 
        set({ isLoading: true }) 
        try { 
          const response = await apiClient.post('/auth/login', credentials) 
          set({ 
            user: response.data.user, 
            token: response.data.access_token, 
            isLoading: false 
          }) 
        } catch (error) { 
          set({ isLoading: false }) 
          throw error 
        } 
      }, 

      register: async (data) => {
        set({ isLoading: true })
        try {
          const response = await apiClient.post('/auth/register', data)
          set({
            user: response.data.user,
            token: response.data.access_token,
            isLoading: false
          })
        } catch (error) {
          set({ isLoading: false })
          throw error
        }
      },

      logout: async () => { 
        try {
          await apiClient.post('/auth/logout') 
        } catch (error) {
          console.error('Logout failed', error)
        } finally {
          set({ user: null, token: null }) 
        }
      }, 

      refresh: async () => { 
        const { token } = get() 
        if (!token) return 

        try { 
          const response = await apiClient.post('/auth/refresh', { token }) 
          set({ token: response.data.access_token }) 
        } catch { 
          get().logout() 
        } 
      } 
    }), 
    { name: 'auth-storage' } 
  ) 
) 
