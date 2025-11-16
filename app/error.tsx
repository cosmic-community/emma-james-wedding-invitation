'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('Application error:', error)
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary px-4">
      <div className="text-center max-w-md">
        <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">
          Something went wrong
        </h2>
        <p className="text-gray-600 mb-6">
          We're sorry, but something unexpected happened. Please try again.
        </p>
        <button
          onClick={() => reset()}
          className="bg-primary text-white px-6 py-3 rounded-lg font-medium hover:bg-accent transition-colors"
        >
          Try again
        </button>
      </div>
    </div>
  )
}