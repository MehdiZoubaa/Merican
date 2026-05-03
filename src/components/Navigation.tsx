'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white'
      }`}
    >
      <div className="container flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-ocean rounded-full flex items-center justify-center text-white font-bold text-lg">
            M
          </div>
          <span className="text-xl font-bold text-ocean hidden md:inline">Merican</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-gray-700 hover:text-ocean transition">
            Home
          </Link>
          <Link href="/menu" className="text-gray-700 hover:text-ocean transition">
            Menu
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-ocean transition">
            About
          </Link>
          <Link href="/contact" className="text-gray-700 hover:text-ocean transition">
            Contact
          </Link>
          <Link
            href="/login"
            className="px-6 py-2 bg-ocean text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Login
          </Link>
          <Link
            href="/reserve"
            className="px-6 py-2 bg-coral text-white rounded-lg hover:bg-opacity-90 transition"
          >
            Reserve Table
          </Link>
        </div>

        <button
          className="md:hidden text-ocean"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container py-4 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 hover:text-ocean">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 hover:text-ocean">
              Menu
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-ocean">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-ocean">
              Contact
            </Link>
            <Link
              href="/login"
              className="px-6 py-2 bg-ocean text-white rounded-lg text-center"
            >
              Login
            </Link>
            <Link
              href="/reserve"
              className="px-6 py-2 bg-coral text-white rounded-lg text-center"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
