'use client'

import { useState, useEffect } from 'react'
import { WeddingDetails } from '@/types'

interface NavigationProps {
  weddingDetails: WeddingDetails;
}

export default function Navigation({ weddingDetails }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="text-xl font-serif font-bold">
            <span className={isScrolled ? 'text-gray-900' : 'text-white'}>
              {weddingDetails.metadata.bride_name} & {weddingDetails.metadata.groom_name}
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className={`font-medium transition-colors ${
                isScrolled ? 'text-gray-700 hover:text-primary' : 'text-white hover:text-primary'
              }`}
            >
              Events
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 bg-white rounded-lg shadow-lg p-4">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('events')}
              className="block w-full text-left py-2 px-4 text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Events
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}