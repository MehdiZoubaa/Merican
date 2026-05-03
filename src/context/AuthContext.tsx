'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'

interface Reservation {
  id: string
  name: string
  email: string
  date: string
  time: string
  guests: number
  phone: string
}

interface User {
  email: string
  name: string
}

interface AuthContextType {
  user: User | null
  reservations: Reservation[]
  login: (email: string, password: string, name: string) => void
  logout: () => void
  addReservation: (reservation: Omit<Reservation, 'id'>) => void
  cancelReservation: (id: string) => void
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [reservations, setReservations] = useState<Reservation[]>([])

  // Load from localStorage
  useEffect(() => {
    const savedUser = localStorage.getItem('merican_user')
    const savedReservations = localStorage.getItem('merican_reservations')

    if (savedUser) {
      setUser(JSON.parse(savedUser))
    }
    if (savedReservations) {
      setReservations(JSON.parse(savedReservations))
    }
  }, [])

  const login = (email: string, password: string, name: string) => {
    const newUser = { email, name }
    setUser(newUser)
    localStorage.setItem('merican_user', JSON.stringify(newUser))
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('merican_user')
  }

  const addReservation = (reservation: Omit<Reservation, 'id'>) => {
    const newReservation = {
      ...reservation,
      id: Date.now().toString(),
    }
    const updated = [...reservations, newReservation]
    setReservations(updated)
    localStorage.setItem('merican_reservations', JSON.stringify(updated))
  }

  const cancelReservation = (id: string) => {
    const updated = reservations.filter((r) => r.id !== id)
    setReservations(updated)
    localStorage.setItem('merican_reservations', JSON.stringify(updated))
  }

  return (
    <AuthContext.Provider value={{ user, reservations, login, logout, addReservation, cancelReservation }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  return context
}
