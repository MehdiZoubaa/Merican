'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg py-3'
          : 'bg-white bg-opacity-95 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 bg-gradient-to-br from-ocean to-primary-dark rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-xl transition">
            M
          </div>
          <span className="text-2xl font-serif font-bold text-ocean hidden md:inline group-hover:text-primary-dark transition">
            Merican
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className="text-gray-700 font-medium hover:text-ocean transition relative group">
            Home
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/menu" className="text-gray-700 font-medium hover:text-ocean transition relative group">
            Menu
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/about" className="text-gray-700 font-medium hover:text-ocean transition relative group">
            About
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
          </Link>
          <Link href="/contact" className="text-gray-700 font-medium hover:text-ocean transition relative group">
            Contact
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-coral group-hover:w-full transition-all duration-300"></span>
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="px-6 py-2 text-ocean font-semibold border-2 border-ocean rounded-lg hover:bg-ocean hover:text-white transition"
          >
            Login
          </Link>
          <Link
            href="/reserve"
            className="btn btn-accent text-sm"
          >
            Reserve
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
              d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 animate-slideDown">
          <div className="container py-6 flex flex-col gap-4">
            <Link href="/" className="text-gray-700 font-medium hover:text-ocean transition">
              Home
            </Link>
            <Link href="/menu" className="text-gray-700 font-medium hover:text-ocean transition">
              Menu
            </Link>
            <Link href="/about" className="text-gray-700 font-medium hover:text-ocean transition">
              About
            </Link>
            <Link href="/contact" className="text-gray-700 font-medium hover:text-ocean transition">
              Contact
            </Link>
            <hr className="my-2" />
            <Link
              href="/login"
              className="px-6 py-2 border-2 border-ocean text-ocean rounded-lg text-center font-semibold hover:bg-ocean hover:text-white transition"
            >
              Login
            </Link>
            <Link
              href="/reserve"
              className="px-6 py-2 bg-coral text-white rounded-lg text-center font-semibold hover:bg-accent-light transition"
            >
              Reserve Table
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
