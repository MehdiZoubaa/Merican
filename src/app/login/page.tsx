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
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Already Logged In</h1>
          <p className="text-gray-600 mb-6">Welcome back, {user.name}!</p>
          <Link href="/dashboard" className="px-6 py-2 bg-ocean text-white rounded-lg hover:bg-opacity-90">
            Go to Dashboard
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div>
      {/* Header */}
      <section className="py-12 bg-ocean text-white">
        <div className="container">
          <h1 className="text-4xl font-bold font-serif">Account</h1>
        </div>
      </section>

      {/* Login Form */}
      <section className="py-20 flex items-center">
        <div className="container max-w-md mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-3xl font-bold font-serif mb-6 text-center text-ocean">
              {isSignUp ? 'Create Account' : 'Sign In'}
            </h2>

            {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {isSignUp && (
                <div className="mb-4">
                  <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                    placeholder="Your name"
                  />
                </div>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 font-semibold mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                  placeholder="your@email.com"
                />
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-semibold mb-2">Password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-ocean"
                  placeholder="••••••••"
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-3 bg-ocean text-white rounded-lg hover:bg-opacity-90 transition font-semibold mb-4"
              >
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>

            <div className="text-center">
              <button
                onClick={() => {
                  setIsSignUp(!isSignUp)
                  setError('')
                }}
                className="text-ocean hover:underline text-sm"
              >
                {isSignUp
                  ? 'Already have an account? Sign in'
                  : "Don't have an account? Sign up"}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
