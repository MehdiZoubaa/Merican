'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useAuth } from '@/context/AuthContext'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [error, setError] = useState('')
  const { login, user } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!email || !password) {
      setError('Please fill in all fields')
      return
    }

    if (isSignUp && !name) {
      setError('Name is required for sign up')
      return
    }

    try {
      login(email, password, name || email.split('@')[0])
      window.location.href = '/dashboard'
    } catch (err) {
      setError('Login failed. Please try again.')
    }
  }

  if (user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-ocean to-primary-dark">
        <div className="text-center bg-white p-12 rounded-lg shadow-2xl">
          <h1 className="text-3xl font-serif font-bold mb-4 text-ocean">Already Logged In</h1>
          <p className="text-gray-600 mb-6 text-lg">Welcome back, <span className="font-semibold">{user.name}</span>!</p>
          <Link href="/dashboard" className="btn btn-primary inline-block">
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean via-blue-900 to-primary-dark flex flex-col">
      {/* Header */}
      <section className="py-8">
        <div className="container">
          <Link href="/" className="text-white font-serif text-2xl font-bold flex items-center gap-2">
            <span className="w-10 h-10 bg-white bg-opacity-20 rounded-full flex items-center justify-center">M</span>
            Merican
          </Link>
        </div>
      </section>

      {/* Login Form */}
      <section className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-md">
          <div className="bg-white rounded-2xl shadow-2xl p-10 animate-slideUp">
            <h2 className="text-3xl font-serif font-bold mb-2 text-center text-ocean">
              {isSignUp ? 'Join Merican' : 'Welcome Back'}
            </h2>
            <p className="text-center text-gray-600 mb-8">
              {isSignUp 
                ? 'Create your account to make reservations' 
                : 'Sign in to your account'}
            </p>

            {error && (
              <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg border border-red-200 flex items-start gap-3">
                <span className="text-lg">⚠</span>
                <span>{error}</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              {isSignUp && (
                <div>
                  <label className="block text-gray-700 font-semibold mb-2 text-sm">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                    placeholder="Your full name"
                  />
                </div>
              )}

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2 text-sm">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean focus:border-transparent transition"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-gradient-to-r from-ocean to-primary-dark text-white rounded-lg hover:shadow-lg transition font-semibold text-lg mt-6"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-200 text-center">
              <p className="text-gray-600 text-sm mb-3">
                {isSignUp
                  ? 'Already have an account?'
                  : "Don't have an account?"}
              </p>
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                }}
                className="text-ocean hover:text-primary-dark font-semibold transition"
              >
                {isSignUp ? 'Sign In' : 'Create Account'}
              </button>
            </div>
          </div>

          {/* Bottom info */}
          <div className="text-center mt-8 text-white opacity-80 text-sm">
            <p>Premium seafood dining at its finest</p>
          </div>
        </div>
      </section>
    </div>
  )
}
