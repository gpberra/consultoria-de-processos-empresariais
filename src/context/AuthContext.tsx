import React, { createContext, useContext, useEffect, useState } from 'react'
import pb from '@/lib/pocketbase/client'
import type { RecordModel } from 'pocketbase'

export interface User extends RecordModel {
  email: string
  name?: string
  avatar?: string
}

interface AuthContextType {
  user: User | null
  token: string | null
  isAuthenticated: boolean
  isLoading: boolean
  login: (email: string, pass: string) => Promise<void>
  logout: () => void
  requestPasswordReset: (email: string) => Promise<void>
  confirmPasswordReset: (token: string, password: string, passwordConfirm: string) => Promise<void>
  confirmVerification: (token: string) => Promise<void>
  requestEmailChange: (newEmail: string) => Promise<void>
  confirmEmailChange: (token: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(pb.authStore.record as User | null)
  const [token, setToken] = useState<string | null>(pb.authStore.token)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    // Sincroniza estado inicial e ouve mudanças no authStore
    setUser(pb.authStore.record as User | null)
    setToken(pb.authStore.token)
    setIsLoading(false)

    const unsubscribe = pb.authStore.onChange((newToken, record) => {
      setToken(newToken)
      setUser(record as User | null)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  const login = async (email: string, pass: string) => {
    await pb.collection('users').authWithPassword(email.trim(), pass)
  }

  const logout = () => {
    pb.authStore.clear()
    setUser(null)
    setToken(null)
  }

  const requestPasswordReset = async (email: string) => {
    await pb.collection('users').requestPasswordReset(email.trim())
  }

  const confirmPasswordReset = async (tokenStr: string, pass: string, passConfirm: string) => {
    await pb.collection('users').confirmPasswordReset(tokenStr, pass, passConfirm)
  }

  const confirmVerification = async (tokenStr: string) => {
    await pb.collection('users').confirmVerification(tokenStr)
  }

  const requestEmailChange = async (newEmail: string) => {
    await pb.collection('users').requestEmailChange(newEmail.trim())
  }

  const confirmEmailChange = async (tokenStr: string, passwordStr: string) => {
    await pb.collection('users').confirmEmailChange(tokenStr, passwordStr)
    // Conforme especificação: desloga o usuário após alteração de e-mail
    logout()
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!token && !!user,
        isLoading,
        login,
        logout,
        requestPasswordReset,
        confirmPasswordReset,
        confirmVerification,
        requestEmailChange,
        confirmEmailChange,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
