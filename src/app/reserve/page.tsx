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
      <div className="min-h-screen flex items-center justify-center bg-sand">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md mx-auto text-center">
          <div className="text-5xl mb-4">✓</div>
          <h1 className="text-3xl font-bold text-ocean mb-4">Reservation Confirmed!</h1>
          <p className="text-gray-600 mb-4">
            Thank you for your reservation. A confirmation email has been sent to {formData.email}
          </p>
          <p className="text-sm text-gray-500">Redirecting to dashboard...</p>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-ocean text-white">
        <div className="container">
          <h1 className="text-4xl font-bold font-serif">Reserve Your Table</h1>
          <p className="text-seafoam mt-2">Book your dining experience at Merican</p>
        </div>
      </section>

      {/* Reservation Form */}
      <section className="py-20">
        <div className="container max-w-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold mb-6 font-serif">Booking Details</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                    placeholder="your@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                    placeholder="(555) 123-4567"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Time</label>
                    <input
                      type="time"
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Number of Guests</label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
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
                  className="w-full px-6 py-3 bg-coral text-white rounded-lg hover:bg-opacity-90 transition font-semibold mt-6"
                >
                  Confirm Reservation
                </button>
              </form>
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-ocean">Opening Hours</h3>
                <div className="space-y-2 text-gray-700">
                  <p>
                    <strong>Monday - Thursday:</strong> 11:00 AM - 10:00 PM
                  </p>
                  <p>
                    <strong>Friday - Saturday:</strong> 11:00 AM - 11:00 PM
                  </p>
                  <p>
                    <strong>Sunday:</strong> 12:00 PM - 9:00 PM
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold font-serif mb-4 text-ocean">Contact</h3>
                <div className="space-y-2 text-gray-700">
                  <p>📍 123 Ocean Street, Coastal City, CC 12345</p>
                  <p>📞 (555) 123-4567</p>
                  <p>📧 reservations@merican.com</p>
                </div>
              </div>

              <div className="bg-sand rounded-lg p-6">
                <h3 className="font-bold text-ocean mb-2">📝 Cancellation Policy</h3>
                <p className="text-sm text-gray-600">
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
