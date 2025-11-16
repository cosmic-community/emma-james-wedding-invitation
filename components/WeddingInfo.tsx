import { WeddingDetails } from '@/types'
import { formatShortDate } from '@/lib/utils'

interface WeddingInfoProps {
  weddingDetails: WeddingDetails;
}

export default function WeddingInfo({ weddingDetails }: WeddingInfoProps) {
  const { metadata } = weddingDetails

  return (
    <section className="py-20 bg-secondary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            You're Invited!
          </h2>
          {metadata.welcome_message && (
            <div
              className="text-lg text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: metadata.welcome_message }}
            />
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          {/* Venue Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <h3 className="text-xl font-serif font-bold text-gray-900">Venue</h3>
            </div>
            <p className="text-lg font-medium text-gray-900 mb-2">{metadata.venue_name}</p>
            <p className="text-gray-600 whitespace-pre-line mb-4">{metadata.venue_address}</p>
            {metadata.maps_link && (
              <a
                href={metadata.maps_link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-primary hover:text-accent transition-colors"
              >
                <span className="mr-2">View on Map</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </a>
            )}
          </div>

          {/* RSVP Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="flex items-center mb-4">
              <svg
                className="w-6 h-6 text-primary mr-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <h3 className="text-xl font-serif font-bold text-gray-900">RSVP</h3>
            </div>
            {metadata.rsvp_deadline ? (
              <>
                <p className="text-gray-600 mb-2">Please respond by:</p>
                <p className="text-lg font-medium text-gray-900 mb-4">
                  {formatShortDate(metadata.rsvp_deadline)}
                </p>
                <p className="text-sm text-gray-500">
                  We look forward to celebrating with you!
                </p>
              </>
            ) : (
              <p className="text-gray-600">
                We look forward to celebrating with you! Please let us know if you can make it.
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}