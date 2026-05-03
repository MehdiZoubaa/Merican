'use client'

import { useAuth } from '@/context/AuthContext'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function DashboardPage() {
  const { user, reservations, logout, cancelReservation } = useAuth()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-pulse">
            <div className="h-8 w-32 bg-gray-300 rounded mx-auto"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean to-primary-dark">
        <div className="text-center bg-white rounded-2xl shadow-2xl p-12">
          <h1 className="text-4xl font-serif font-bold mb-4 text-ocean">Access Restricted</h1>
          <p className="text-gray-600 mb-8 text-lg">You need to be logged in to access your dashboard</p>
          <Link href="/login" className="btn btn-primary inline-block">
            Go to Login
          </Link>
        </div>
      </div>
    )
  }

  const upcomingReservations = reservations.filter((r) => new Date(`${r.date}T${r.time}`) > new Date())
  const pastReservations = reservations.filter((r) => new Date(`${r.date}T${r.time}`) <= new Date())

  return (
    <div>
      {/* Premium Header */}
      <section className="py-16 bg-gradient-to-r from-ocean to-primary-dark text-white">
        <div className="container flex justify-between items-center">
          <div className="animate-slideDown">
            <h1 className="text-5xl font-serif font-bold mb-2">Dashboard</h1>
            <p className="text-xl text-seafoam">Welcome back, <span className="font-semibold">{user.name}</span>!</p>
          </div>
          <button
            onClick={() => {
              logout()
              window.location.href = '/'
            }}
            className="btn btn-white"
          >
            Logout
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="card bg-white border-t-4 border-ocean hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-semibold">Total Reservations</h3>
                <span className="text-3xl">📅</span>
              </div>
              <p className="text-5xl font-serif font-bold text-ocean">{reservations.length}</p>
            </div>

            <div className="card bg-white border-t-4 border-coral hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-semibold">Upcoming</h3>
                <span className="text-3xl">⏰</span>
              </div>
              <p className="text-5xl font-serif font-bold text-coral">{upcomingReservations.length}</p>
            </div>

            <div className="card bg-white border-t-4 border-seafoam hover:shadow-2xl">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-gray-600 text-sm font-semibold">Past Visits</h3>
                <span className="text-3xl">✓</span>
              </div>
              <p className="text-5xl font-serif font-bold text-seafoam">{pastReservations.length}</p>
            </div>
          </div>

          {/* Upcoming Reservations */}
          <div className="mb-16">
            <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">Upcoming Reservations</h2>
            {upcomingReservations.length > 0 ? (
              <div className="grid gap-6">
                {upcomingReservations.map((res) => (
                  <div key={res.id} className="card bg-white border-l-4 border-coral hover:shadow-2xl group">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="text-2xl font-serif font-bold text-gray-800 group-hover:text-ocean transition">
                          {res.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">{res.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('Are you sure you want to cancel this reservation?')) {
                            cancelReservation(res.id)
                          }
                        }}
                        className="px-4 py-2 bg-red-50 text-red-600 rounded-lg hover:bg-red-100 transition font-semibold text-sm"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-gray-100">
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Date</p>
                        <p className="text-lg font-serif font-bold text-ocean">{res.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Time</p>
                        <p className="text-lg font-serif font-bold text-ocean">{res.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Guests</p>
                        <p className="text-lg font-serif font-bold text-ocean">{res.guests}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs font-semibold uppercase tracking-wide mb-2">Phone</p>
                        <p className="text-lg font-serif font-bold text-ocean">{res.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="card bg-gradient-to-br from-sand to-yellow-50 rounded-2xl p-12 text-center border-2 border-dashed border-coral">
                <p className="text-gray-600 mb-6 text-lg">No upcoming reservations yet</p>
                <Link
                  href="/reserve"
                  className="btn btn-primary inline-block"
                >
                  Make a Reservation
                </Link>
              </div>
            )}
          </div>

          {/* Past Reservations */}
          {pastReservations.length > 0 && (
            <div>
              <h2 className="text-4xl font-serif font-bold mb-8 text-gray-800">Your Dining History</h2>
              <div className="grid gap-4">
                {pastReservations.map((res) => (
                  <div key={res.id} className="bg-white rounded-lg p-6 border-l-4 border-gray-300 hover:shadow-lg transition">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{res.name}</p>
                        <p className="text-sm text-gray-600 mt-1">
                          {res.date} at {res.time} • {res.guests} {res.guests === 1 ? 'guest' : 'guests'}
                        </p>
                      </div>
                      <span className="text-2xl opacity-50">✓</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
