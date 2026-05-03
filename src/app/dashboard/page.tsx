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
    return <div>Loading...</div>
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Please Log In</h1>
          <p className="text-gray-600 mb-6">You need to be logged in to access the dashboard</p>
          <Link href="/login" className="px-6 py-2 bg-ocean text-white rounded-lg hover:bg-opacity-90">
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
      {/* Header */}
      <section className="py-12 bg-ocean text-white">
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-4xl font-bold font-serif">Dashboard</h1>
            <p className="text-seafoam mt-2">Welcome, {user.name}!</p>
          </div>
          <button
            onClick={() => {
              logout()
              window.location.href = '/'
            }}
            className="px-6 py-2 bg-coral rounded-lg hover:bg-opacity-90 transition"
          >
            Logout
          </button>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-ocean">
              <h3 className="text-gray-500 text-sm font-semibold">Total Reservations</h3>
              <p className="text-3xl font-bold text-ocean mt-2">{reservations.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-coral">
              <h3 className="text-gray-500 text-sm font-semibold">Upcoming</h3>
              <p className="text-3xl font-bold text-coral mt-2">{upcomingReservations.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow p-6 border-l-4 border-seafoam">
              <h3 className="text-gray-500 text-sm font-semibold">Past Visits</h3>
              <p className="text-3xl font-bold text-seafoam mt-2">{pastReservations.length}</p>
            </div>
          </div>

          {/* Upcoming Reservations */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold font-serif mb-6 text-ocean">Upcoming Reservations</h2>
            {upcomingReservations.length > 0 ? (
              <div className="grid gap-6">
                {upcomingReservations.map((res) => (
                  <div key={res.id} className="bg-white rounded-lg shadow-lg p-6 border-l-4 border-coral">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-800">{res.name}</h3>
                        <p className="text-gray-600">{res.email}</p>
                      </div>
                      <button
                        onClick={() => {
                          if (confirm('Cancel this reservation?')) {
                            cancelReservation(res.id)
                          }
                        }}
                        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
                      >
                        Cancel
                      </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                      <div>
                        <p className="text-gray-500 text-sm">Date</p>
                        <p className="text-lg font-semibold text-ocean">{res.date}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Time</p>
                        <p className="text-lg font-semibold text-ocean">{res.time}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Guests</p>
                        <p className="text-lg font-semibold text-ocean">{res.guests}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-sm">Phone</p>
                        <p className="text-lg font-semibold text-ocean">{res.phone}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-sand rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">No upcoming reservations</p>
                <Link
                  href="/reserve"
                  className="inline-block px-6 py-2 bg-ocean text-white rounded-lg hover:bg-opacity-90"
                >
                  Make a Reservation
                </Link>
              </div>
            )}
          </div>

          {/* Past Reservations */}
          {pastReservations.length > 0 && (
            <div>
              <h2 className="text-3xl font-bold font-serif mb-6 text-ocean">Past Visits</h2>
              <div className="grid gap-4">
                {pastReservations.map((res) => (
                  <div key={res.id} className="bg-gray-50 rounded-lg p-4 border-l-4 border-gray-300">
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="font-semibold text-gray-800">{res.name}</p>
                        <p className="text-sm text-gray-600">
                          {res.date} at {res.time} • {res.guests} guests
                        </p>
                      </div>
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
