'use client'

import { useState } from 'react'
import { useAuth } from '@/context/AuthContext'
import { useRouter } from 'next/navigation'

export default function ReservePage() {
  const { user, addReservation } = useAuth()
  const router = useRouter()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    date: '',
    time: '',
    guests: '2',
    phone: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!formData.name || !formData.email || !formData.date || !formData.time || !formData.phone) {
      alert('Please fill in all fields')
      return
    }

    addReservation({
      name: formData.name,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      guests: parseInt(formData.guests),
      phone: formData.phone,
    })

    setSubmitted(true)
    setTimeout(() => {
      router.push('/dashboard')
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean to-primary-dark">
        <div className="bg-white rounded-2xl shadow-2xl p-12 max-w-md mx-auto text-center animate-slideUp">
          <div className="text-6xl mb-4">✓</div>
          <h1 className="text-3xl font-serif font-bold text-ocean mb-4">Reservation Confirmed!</h1>
          <p className="text-gray-600 mb-4 leading-relaxed">
            Thank you for your reservation. A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>
          </p>
          <p className="text-sm text-coral font-semibold">Redirecting to your dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Premium Header */}
      <section className="py-24 bg-gradient-to-br from-ocean via-blue-900 to-primary-dark text-white">
        <div className="container">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Reserve Your Table</h1>
          <p className="text-xl text-seafoam">Experience fine dining at Merican with an advanced reservation</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Form - Takes 2 columns */}
            <div className="md:col-span-2 bg-white rounded-2xl shadow-xl p-10">
              <h2 className="text-3xl font-serif font-bold mb-8 text-gray-800">Booking Details</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm">Reservation Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-3 text-sm">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3 text-sm">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-gradient-to-r from-coral to-accent-light text-white rounded-lg hover:shadow-lg transition font-semibold text-lg mt-8"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Info Sidebar */}
            <div className="space-y-6">
              {/* Hours Card */}
              <div className="card">
                <h3 className="text-xl font-serif font-bold text-ocean mb-4">Hours of Operation</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <div>
                    <p className="font-semibold">Mon - Thu</p>
                    <p className="text-gray-600">11:00 AM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Fri - Sat</p>
                    <p className="text-gray-600">11:00 AM - 11:30 PM</p>
                  </div>
                  <div>
                    <p className="font-semibold">Sunday</p>
                    <p className="text-gray-600">12:00 PM - 9:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Card */}
              <div className="card">
                <h3 className="text-xl font-serif font-bold text-ocean mb-4">Contact Info</h3>
                <div className="space-y-3 text-sm text-gray-700">
                  <p className="flex items-start gap-3">
                    <span className="text-coral mt-1">📍</span>
                    <span>123 Ocean Street<br/>Coastal City, CC 12345</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-coral">📞</span>
                    <span>(555) 123-4567</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <span className="text-coral">✉</span>
                    <span>reservations@merican.com</span>
                  </p>
                </div>
              </div>

              {/* Policy Card */}
              <div className="card bg-sand border-l-4 border-coral">
                <h3 className="font-serif font-bold text-ocean mb-2">Cancellation Policy</h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  Cancellations must be made at least 24 hours in advance for a full refund of any deposit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
